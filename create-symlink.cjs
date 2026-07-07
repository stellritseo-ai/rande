const fs = require('fs');

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
  },
  {
    src: '/Users/jitensony/.gemini/antigravity-ide/brain/69c43f49-c4f6-4df8-9383-29827ce21ca1/patio_construction_clean_1783433835898.png',
    dest: 'src/assets/patio-construction-clean.png'
  },
  {
    src: '/Users/jitensony/.gemini/antigravity-ide/brain/69c43f49-c4f6-4df8-9383-29827ce21ca1/painting_construction_clean_1783433994095.png',
    dest: 'src/assets/painting-construction-clean.png'
  },
  {
    src: '/Users/jitensony/.gemini/antigravity-ide/brain/69c43f49-c4f6-4df8-9383-29827ce21ca1/deck_construction_clean_1783434123912.png',
    dest: 'src/assets/deck-construction-clean.png'
  },
  {
    src: '/Users/jitensony/.gemini/antigravity-ide/brain/69c43f49-c4f6-4df8-9383-29827ce21ca1/fencing_construction_clean_1783434234154.png',
    dest: 'src/assets/fencing-construction-clean.png'
  }
];

files.forEach(f => {
  try {
    if (fs.existsSync(f.dest)) {
      fs.unlinkSync(f.dest);
    }
    fs.symlinkSync(f.src, f.dest);
    console.log(`Created symlink: ${f.dest} -> ${f.src}`);
  } catch (err) {
    console.error(`Error symlinking ${f.src}:`, err);
  }
});
