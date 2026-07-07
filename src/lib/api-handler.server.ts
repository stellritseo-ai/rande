import {
  dbGetLeads,
  dbAddLead,
  dbUpdateLead,
  dbDeleteLead,
  dbGetReviews,
  dbAddReview,
  dbUpdateReview,
  dbDeleteReview,
  dbGetWebEmails,
  dbAddWebEmail,
  dbDeleteWebEmail,
  dbGetChatSessions,
  dbSaveChatSession,
  dbGetGalleryPhotos,
  dbAddGalleryPhoto,
  dbRemoveGalleryPhoto,
  dbGetPortalUsers,
  dbAddPortalUser,
  dbDeletePortalUser,
  dbUpdatePortalUser,
  dbGetSettings,
  dbSaveSettings,
  getDb
} from "./db.server.js";

import {
  INITIAL_LEADS,
  INITIAL_REVIEWS,
  INITIAL_CHATS,
  INITIAL_EMAILS
} from "./leads-store.js";

import { uploadToCloudinary, deleteFromCloudinary } from "./cloudinary.server.js";
import { hashPassword, verifyPassword } from "./crypto.server.js";

const DEFAULT_ADMIN = {
  id: "admin-1",
  username: process.env.DEFAULT_ADMIN_USERNAME || "admin",
  role: "admin",
  password: process.env.DEFAULT_ADMIN_PASSWORD || "admin123"
};

// Helper to construct JSON responses
function jsonResponse(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" }
  });
}

// ── UNIFIED API REQUEST DISPATCHER (Web Standards) ──
export async function handleApiRequest(request: Request): Promise<Response | null> {
  const url = new URL(request.url);
  const pathname = url.pathname;
  if (!pathname.startsWith("/api/")) return null;

  const method = request.method;

  try {
    // ── /api/leads ──
    if (pathname === "/api/leads") {
      if (method === "GET") {
        const leads = await dbGetLeads(INITIAL_LEADS);
        return jsonResponse(leads);
      }
      if (method === "POST") {
        const body = await request.json();
        if (body.custom) {
          const newLead = {
            ...body.lead,
            id: "lead-" + Math.random().toString(36).substr(2, 9),
            createdAt: new Date().toISOString()
          };
          const saved = await dbAddLead(newLead);
          return jsonResponse(saved);
        } else {
          let estimatedValue = 2500;
          switch (body.leadData.projectType) {
            case "panel-upgrades": estimatedValue = 3500; break;
            case "ev-charger": estimatedValue = 1200; break;
            case "generator": estimatedValue = 14500; break;
            case "commercial": estimatedValue = 32000; break;
            case "residential": estimatedValue = 2500; break;
            case "industrial": estimatedValue = 54000; break;
            case "emergency": estimatedValue = 450; break;
            case "wiring-rewiring": estimatedValue = 8500; break;
            case "security-systems": estimatedValue = 6500; break;
          }
          const newLead = {
            ...body.leadData,
            id: "lead-" + Math.random().toString(36).substr(2, 9),
            status: "new",
            estimatedValue,
            createdAt: new Date().toISOString(),
            photos: []
          };
          const saved = await dbAddLead(newLead);
          return jsonResponse(saved);
        }
      }
      if (method === "PUT") {
        const body = await request.json();
        const updated = await dbUpdateLead(body.id, body.updates);
        return jsonResponse(updated);
      }
      if (method === "DELETE") {
        const body = await request.json();
        const updated = await dbDeleteLead(body.id);
        return jsonResponse(updated);
      }
    }

    // ── /api/leads/photos ──
    if (pathname === "/api/leads/photos") {
      const body = await request.json();
      const db = await getDb();
      const leadsCol = db.collection("leads");

      if (method === "POST") {
        const url = await uploadToCloudinary(body.base64Photo, "accconstruction/leads");
        await leadsCol.updateOne({ id: body.leadId }, { $push: { photos: url } } as any);
      } else if (method === "DELETE") {
        const lead = await leadsCol.findOne({ id: body.leadId });
        if (lead && lead.photos) {
          const photos = [...lead.photos];
          const photoUrl = photos[body.photoIndex];
          if (photoUrl && photoUrl.includes("cloudinary.com")) {
            await deleteFromCloudinary(photoUrl);
          }
          photos.splice(body.photoIndex, 1);
          await leadsCol.updateOne({ id: body.leadId }, { $set: { photos } });
        }
      }
      const leads = await dbGetLeads(INITIAL_LEADS);
      return jsonResponse(leads);
    }

    // ── /api/reviews ──
    if (pathname === "/api/reviews") {
      if (method === "GET") {
        const reviews = await dbGetReviews(INITIAL_REVIEWS);
        return jsonResponse(reviews);
      }
      if (method === "POST") {
        const body = await request.json();
        const photos: string[] = [];
        if (body.newReviewPhoto) {
          const url = await uploadToCloudinary(body.newReviewPhoto, "accconstruction/reviews");
          photos.push(url);
        }
        const newReview = {
          title: body.title,
          text: body.text,
          author: body.author,
          location: body.location,
          rating: body.rating,
          id: "review-" + Math.random().toString(36).substr(2, 9),
          featured: true,
          createdAt: new Date().toISOString(),
          photos
        };
        const saved = await dbAddReview(newReview);
        return jsonResponse(saved);
      }
      if (method === "PUT") {
        const body = await request.json();
        if (body.action === "reply") {
          const updated = await dbUpdateReview(body.id, { replyText: body.replyText });
          return jsonResponse(updated);
        } else if (body.action === "featured") {
          const db = await getDb();
          const review = await db.collection("reviews").findOne({ id: body.id });
          const featured = review ? !review.featured : false;
          const updated = await dbUpdateReview(body.id, { featured });
          return jsonResponse(updated);
        }
      }
      if (method === "DELETE") {
        const body = await request.json();
        const updated = await dbDeleteReview(body.id);
        return jsonResponse(updated);
      }
    }

    // ── /api/emails ──
    if (pathname === "/api/emails") {
      if (method === "GET") {
        const emails = await dbGetWebEmails(INITIAL_EMAILS);
        return jsonResponse(emails);
      }
      if (method === "POST") {
        const body = await request.json();
        const newEmail = {
          ...body.emailData,
          id: "email-" + Math.random().toString(36).substr(2, 9),
          createdAt: new Date().toISOString()
        };
        const saved = await dbAddWebEmail(newEmail);
        return jsonResponse(saved);
      }
      if (method === "DELETE") {
        const body = await request.json();
        const updated = await dbDeleteWebEmail(body.id);
        return jsonResponse(updated);
      }
    }

    // ── /api/chats ──
    if (pathname === "/api/chats") {
      if (method === "GET") {
        const chats = await dbGetChatSessions(INITIAL_CHATS);
        return jsonResponse(chats);
      }
      if (method === "DELETE") {
        const urlObj = new URL(request.url);
        const id = urlObj.searchParams.get("id");
        if (id) {
          const db = await getDb();
          await db.collection("chat_sessions").deleteOne({ id });
          const docs = await db.collection("chat_sessions").find({}).toArray();
          const mapped = docs.map(d => ({ ...d, id: d.id || String(d._id), _id: undefined }));
          return jsonResponse(mapped);
        }
        return jsonResponse({ error: "Missing ID" }, 400);
      }
      if (method === "POST") {
        const body = await request.json();
        if (body.action === "create") {
          const newSession = {
            id: "session-" + Math.random().toString(36).substr(2, 9),
            clientName: body.clientName,
            clientCity: body.clientCity || "Denver",
            clientEmail: body.clientEmail,
            clientPhone: body.clientPhone,
            lastMessage: "Chat session initialized",
            lastMessageTime: new Date().toISOString(),
            unread: true,
            messages: []
          };
          await dbSaveChatSession(newSession);
          return jsonResponse(newSession);
        }
        if (body.action === "message") {
          const db = await getDb();
          const session = await db.collection("chat_sessions").findOne({ id: body.sessionId });
          if (!session) return jsonResponse(null, 404);
          const newMsg = {
            id: "msg-" + Math.random().toString(36).substr(2, 9),
            sender: body.sender,
            text: body.text,
            timestamp: new Date().toISOString()
          };
          const updatedSession = {
            ...session,
            messages: [...(session.messages || []), newMsg],
            lastMessage: body.text,
            lastMessageTime: newMsg.timestamp,
            unread: body.sender === "client"
          };
          await dbSaveChatSession(updatedSession);
          return jsonResponse(updatedSession);
        }
        if (body.action === "read") {
          const db = await getDb();
          await db.collection("chat_sessions").updateOne({ id: body.sessionId }, { $set: { unread: false } });
          const docs = await db.collection("chat_sessions").find({}).toArray();
          const mapped = docs.map(d => ({ ...d, id: d.id || String(d._id), _id: undefined }));
          return jsonResponse(mapped);
        }
      }
    }

    // ── /api/gallery ──
    if (pathname === "/api/gallery") {
      if (method === "GET") {
        const photos = await dbGetGalleryPhotos([
          {
            id: "photo-1",
            url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
            category: "residential",
            title: "Luxury Kitchen Remodeling",
            location: "Colorado Springs, CO",
            tag: "Remodeling",
            uploadedAt: new Date().toISOString()
          },
          {
            id: "photo-2",
            url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
            category: "residential",
            title: "Paver Driveway Installation",
            location: "Denver, CO",
            tag: "Paving & Driveway",
            uploadedAt: new Date().toISOString()
          },
          {
            id: "photo-3",
            url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
            category: "commercial",
            title: "Concrete Foundation Slabs",
            location: "Aurora, CO",
            tag: "Foundation & Slabs",
            uploadedAt: new Date().toISOString()
          },
          {
            id: "photo-4",
            url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
            category: "residential",
            title: "Complete Home Addition",
            location: "Fort Collins, CO",
            tag: "Home Additions",
            uploadedAt: new Date().toISOString()
          },
          {
            id: "photo-5",
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
            category: "commercial",
            title: "Commercial Retail Build-Out",
            location: "Lakewood, CO",
            tag: "Commercial Build-Out",
            uploadedAt: new Date().toISOString()
          },
          {
            id: "photo-6",
            url: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1200&q=80",
            category: "commercial",
            title: "Modern Sidewalk & Curb Construction",
            location: "Thornton, CO",
            tag: "Concrete & Pathways",
            uploadedAt: new Date().toISOString()
          },
          {
            id: "photo-7",
            url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1200&q=80",
            category: "residential",
            title: "Home Improvements & Structural Repairs",
            location: "Denver, CO",
            tag: "Home Improvements",
            uploadedAt: new Date().toISOString()
          }
        ]);
        return jsonResponse(photos);
      }
      if (method === "POST") {
        const body = await request.json();
        let url = body.url;
        if (!url && body.base64Photo) {
          url = await uploadToCloudinary(body.base64Photo, "accconstruction/gallery");
        }
        if (!url) {
          return jsonResponse({ error: "Missing image content or URL" }, 400);
        }
        const newPhoto = {
          id: "photo-" + Math.random().toString(36).substr(2, 9),
          url,
          category: body.category || "residential",
          title: body.title,
          location: body.location,
          tag: body.tag,
          uploadedAt: new Date().toISOString()
        };
        const updated = await dbAddGalleryPhoto(newPhoto);
        return jsonResponse(updated);
      }
      if (method === "DELETE") {
        let id = url.searchParams.get("id");
        if (!id) {
          try {
            const body = await request.json();
            id = body.id;
          } catch {}
        }
        if (!id) {
          return jsonResponse({ error: "Missing image ID" }, 400);
        }
        const db = await getDb();
        const photo = await db.collection("gallery_photos").findOne({ id });
        if (photo && photo.url && photo.url.includes("cloudinary.com")) {
          try {
            await deleteFromCloudinary(photo.url);
          } catch (cloudinaryErr) {
            console.error("Failed to delete from Cloudinary, proceeding with database removal:", cloudinaryErr);
          }
        }
        const updated = await dbRemoveGalleryPhoto(id);
        return jsonResponse(updated);
      }
    }

    // ── /api/users ──
    if (pathname === "/api/users") {
      if (method === "GET") {
        const users = await dbGetPortalUsers(DEFAULT_ADMIN);
        const mapped = users.map(u => ({ id: u.id, username: u.username, role: u.role }));
        return jsonResponse(mapped);
      }
      if (method === "POST") {
        const body = await request.json();
        if (body.action === "login") {
          const accounts = await dbGetPortalUsers(DEFAULT_ADMIN);
          const user = accounts.find(a => a.username.toLowerCase() === body.username.toLowerCase());
          if (user) {
            const isValid = await verifyPassword(body.password, user.password);
            if (isValid) {
              return jsonResponse({ success: true, user: { id: user.id, username: user.username, role: user.role } });
            }
          }
          return jsonResponse({ error: "Invalid username or password" }, 401);
        }
        if (body.action === "create") {
          const accounts = await dbGetPortalUsers(DEFAULT_ADMIN);
          if (accounts.some(a => a.username.toLowerCase() === body.username.toLowerCase())) {
            return jsonResponse({ error: "Username already exists" }, 400);
          }
          const hashedPassword = await hashPassword(body.password);
          const newUser = {
            id: "admin-" + Math.random().toString(36).substr(2, 9),
            username: body.username,
            password: hashedPassword,
            role: body.role
          };
          await dbAddPortalUser(newUser);
          return jsonResponse({ success: true, id: newUser.id, username: newUser.username, role: newUser.role });
        }
        if (body.action === "delete") {
          await dbDeletePortalUser(body.userId);
          return jsonResponse({ success: true });
        }
        if (body.action === "update") {
          const updates: any = {};
          if (body.username) updates.username = body.username;
          if (body.password) {
            updates.password = await hashPassword(body.password);
          }
          const users = await dbUpdatePortalUser(body.userId, updates);
          const updatedUser = users.find(u => u.id === body.userId);
          return jsonResponse({ success: true, username: updatedUser ? updatedUser.username : (body.username || "") });
        }
      }
    }

    // ── /api/settings ──
    if (pathname === "/api/settings") {
      const defaultSettings = {
        alertEmail: "leonholley45@gmail.com",
        officePhone: "(720) 298-7777",
        smsTemplate: "Hi {Name}, thank you for contacting ACC Construction LLC! A construction specialist will contact you during the {Time} to discuss your {Type} project.",
        emailAlert: true,
        smsAlert: true,
        maintenanceMode: false,
        weekdays: "7:00 AM - 7:00 PM",
        saturdays: "7:00 AM - 7:00 PM",
        sundays: "Closed"
      };

      if (method === "GET") {
        const settings = await dbGetSettings(defaultSettings);
        return jsonResponse(settings);
      }
      if (method === "POST") {
        const body = await request.json();
        const saved = await dbSaveSettings(body);
        return jsonResponse(saved);
      }
    }

    // ── /api/sign-upload ──
    if (pathname === "/api/sign-upload" && method === "POST") {
      const body = await request.json();
      const folder = body.folder || "accconstruction/gallery";
      const timestamp = Math.round(Date.now() / 1000);
      const apiSecret = process.env.CLOUDINARY_API_SECRET;
      const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
      const apiKey = process.env.CLOUDINARY_API_KEY;

      if (!apiSecret || !cloudName || !apiKey) {
        return jsonResponse({ error: "Missing Cloudinary configuration" }, 500);
      }

      // Build the string to sign
      const paramsToSign = `folder=${folder}&timestamp=${timestamp}`;
      
      const { createHash } = await import("crypto");
      const signature = createHash("sha1").update(paramsToSign + apiSecret).digest("hex");

      return jsonResponse({ signature, timestamp, apiKey, cloudName, folder });
    }

  } catch (error: any) {
    console.error("API error:", error);
    return jsonResponse({ error: error.message || "Internal Server Error" }, 500);
  }

  return null;
}

// ── NODE.JS MIDDLEWARE ADAPTER (For Vite configureServer Dev Mode) ──
export async function handleNodeApiRequest(req: any, res: any) {
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host || "localhost";
  const url = `${protocol}://${host}${req.url}`;

  let body: any = null;
  if (req.method !== "GET" && req.method !== "HEAD") {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    body = Buffer.concat(buffers);
  }

  const webHeaders = new Headers();
  Object.entries(req.headers).forEach(([key, val]) => {
    if (val !== undefined) {
      if (Array.isArray(val)) {
        val.forEach(v => webHeaders.append(key, v));
      } else {
        webHeaders.set(key, val);
      }
    }
  });

  const webReq = new Request(url, {
    method: req.method,
    headers: webHeaders,
    body: body && body.length > 0 ? body : undefined
  });

  const webRes = await handleApiRequest(webReq);
  if (webRes) {
    res.statusCode = webRes.status;
    webRes.headers.forEach((val, key) => {
      res.setHeader(key, val);
    });
    const resBody = await webRes.text();
    res.end(resBody);
    return true;
  }
  return false;
}
