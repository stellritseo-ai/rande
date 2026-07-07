const fs = require('fs');
const path = require('path');

const files = [
  {
    src: '/Users/jitensony/.gemini/antigravity-ide/brain/69c43f49-c4f6-4df8-9383-29827ce21ca1/driveway_construction_clean_1783432625520.png',
    dest: 'src/assets/driveway-construction-clean.png'
  },
  {
    src: '/Users/jitensony/.gemini/antigravity-ide/brain/69c43f49-c4f6-4df8-9383-29827ce21ca1/remodeling_construction_clean_1783432782932.png',
    dest: 'src/assets/remodeling-construction-clean.png'
  },
  {
    src: '/Users/jitensony/.gemini/antigravity-ide/brain/69c43f49-c4f6-4df8-9383-29827ce21ca1/foundation_construction_clean_1783432908829.png',
    dest: 'src/assets/foundation-construction-clean.png'
  },
  {
    src: '/Users/jitensony/.gemini/antigravity-ide/brain/69c43f49-c4f6-4df8-9383-29827ce21ca1/additions_construction_clean_1783433049320.png',
    dest: 'src/assets/additions-construction-clean.png'
  },
  {
    src: '/Users/jitensony/.gemini/antigravity-ide/brain/69c43f49-c4f6-4df8-9383-29827ce21ca1/sidewalk_construction_clean_1783433162763.png',
    dest: 'src/assets/sidewalk-construction-clean.png'
  }
];

files.forEach(f => {
  try {
    if (fs.existsSync(f.src)) {
      fs.copyFileSync(f.src, f.dest);
      console.log(`Successfully copied ${f.src} to ${f.dest}`);
    } else {
      console.error(`Source file does not exist: ${f.src}`);
    }
  } catch (err) {
    console.error(`Error copying ${f.src}:`, err);
  }
});
