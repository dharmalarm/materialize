window.VERTICAL_CONFIG = {
  appName: 'Materialize',
  logoHTML: 'Materialize<span>.</span>',
  tagline: 'the estimator for any maker',
  storageKey: 'materialize_v1',

  colors: {
    bg: '#F5F5F2',
    surface: '#FAFAF8',
    surface2: '#EAEAE4',
    border: '#D4D4CC',
    text: '#1A1A18',
    'text-muted': '#6B6B64',
    accent: '#2D5A8E',
    'accent-light': '#E0EAF5',
    accent2: '#3A6B3A',
    'accent2-light': '#DFF0DF',
  },

  emptyIcons: {
    ingredients: '📦',
    recipes: '📋',
    menus: '📁',
  },

  defaultState: {
    ingredients: [
      // ── Soap making ──
      { id: 1,  name: 'Olive Oil',              uom: 'oz',  size: 128,  price: 12.98 },
      { id: 2,  name: 'Coconut Oil',            uom: 'oz',  size: 30,   price: 8.48  },
      { id: 3,  name: 'Shea Butter',            uom: 'oz',  size: 16,   price: 9.98  },
      { id: 4,  name: 'Lye (NaOH)',             uom: 'oz',  size: 32,   price: 8.99  },
      { id: 5,  name: 'Distilled Water',        uom: 'oz',  size: 128,  price: 1.49  },
      { id: 6,  name: 'Fragrance Oil',          uom: 'oz',  size: 4,    price: 6.99  },
      { id: 7,  name: 'Colorant (mica)',        uom: 'tsp', size: 30,   price: 4.99  },
      // ── Candle making ──
      { id: 8,  name: 'Soy Wax (container)',    uom: 'oz',  size: 64,   price: 14.99 },
      { id: 9,  name: 'Paraffin Wax',           uom: 'oz',  size: 64,   price: 9.99  },
      { id: 10, name: 'Candle Fragrance Oil',   uom: 'oz',  size: 4,    price: 7.99  },
      { id: 11, name: 'Candle Dye (block)',     uom: 'oz',  size: 1,    price: 2.49  },
      { id: 12, name: 'Cotton Wick (6")',       uom: 'wick',size: 100,  price: 8.99  },
      // ── 3D printing ──
      { id: 13, name: 'PLA Filament',           uom: 'g',   size: 1000, price: 22.99 },
      { id: 14, name: 'PETG Filament',          uom: 'g',   size: 1000, price: 25.99 },
      { id: 15, name: 'ABS Filament',           uom: 'g',   size: 1000, price: 21.99 },
      // ── General craft ──
      { id: 16, name: 'Beeswax',                uom: 'oz',  size: 16,   price: 12.99 },
      { id: 17, name: 'Epoxy Resin (part A)',   uom: 'oz',  size: 16,   price: 18.99 },
      { id: 18, name: 'Epoxy Hardener (part B)',uom: 'oz',  size: 16,   price: 18.99 },
      { id: 19, name: 'Alcohol Ink',            uom: 'oz',  size: 0.5,  price: 4.99  },
      { id: 20, name: 'Glitter',                uom: 'oz',  size: 4,    price: 3.99  },
    ],
    recipes: [
      { id: 1, name: 'Basic Cold Process Soap Bar', desc: 'Yields ~8 bars (4 oz each)',
        ingredients: [
          { ingId: 1, amount: 16 },
          { ingId: 2, amount: 8  },
          { ingId: 3, amount: 4  },
          { ingId: 4, amount: 3.8},
          { ingId: 5, amount: 9  },
          { ingId: 6, amount: 1  },
          { ingId: 7, amount: 1  },
        ]},
      { id: 2, name: 'Soy Container Candle (8 oz)', desc: 'One 8 oz jar candle',
        ingredients: [
          { ingId: 8,  amount: 6  },
          { ingId: 10, amount: 0.5},
          { ingId: 12, amount: 1  },
        ]},
      { id: 3, name: '3D Printed Phone Stand', desc: 'Approx. 85g PLA, standard settings',
        ingredients: [
          { ingId: 13, amount: 85 },
        ]},
      { id: 4, name: 'Resin Coaster Set (4 pcs)', desc: 'Four 4-inch coasters, ~1/4" deep',
        ingredients: [
          { ingId: 17, amount: 6  },
          { ingId: 18, amount: 6  },
          { ingId: 19, amount: 0.5},
          { ingId: 20, amount: 0.5},
        ]},
    ],
    menus: [
      { id: 1, name: 'Sample Production Run',
        recipes: [{ recipeId: 1, qty: 2 }, { recipeId: 2, qty: 4 }] }
    ],
    nextIngId: 21, nextRecId: 5, nextMenuId: 2,
  },
};
