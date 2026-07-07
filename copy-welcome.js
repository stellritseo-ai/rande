const fs = require('fs');
const path = require('path');

const src = "/Users/jitensony/.gemini/antigravity-ide/brain/632a5a26-3abd-41c9-83c7-6935bb51a717/welcome_contractor_builder_1783401124603.png";
const dest = "/Users/jitensony/reactwebsite/acc/src/assets/welcome-img.png";

try {
  fs.copyFileSync(src, dest);
  console.log("Successfully copied welcome image!");
} catch (err) {
  console.error("Error copying file:", err);
  process.exit(1);
}
