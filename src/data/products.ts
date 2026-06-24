import type { ProductItem, Additional } from '../types';

export const WHATSAPP_NUMBER = '573116759247';

export const products: ProductItem[] = [
  {
    id: 'cajita-feliz',
    name: 'Cajita Feliz',
    price: 80000,
    description: 'El clásico con amor, perfecto para sorprender sin exagerar.',
    includes: [
      'Huevos revueltos con jamón',
      'Jugo de naranja natural (envase plástico)',
      'Sandwich jamón y queso',
      'Porción de fruta',
      'Tarrina de masmelos',
      'Pastelito (Deseo de cumpleaños)',
      'Caja de cartón',
      'Tarjeta',
      'Globo en helio x1 o metalizado x1',
    ],
    images: [
      '/cajita feliz 2.jpeg',
      '/cajita feliz 1.jpeg',
      '/cajita feliz 3.jpeg',
      '/cajita feliz 4.jpeg',
    ],
    customizable: {
      proteinas: [
        { id: 'huevos-jamon', category: 'proteina', label: 'Huevos revueltos con jamón', extraCost: 0, default: true },
        { id: 'omelette-jamon-queso', category: 'proteina', label: 'Omelette jamón y queso', extraCost: 5000 },
        { id: 'omelette-maicitos', category: 'proteina', label: 'Omelette jamón, queso y maicitos', extraCost: 7000 },
        { id: 'huevos-pericos', category: 'proteina', label: 'Huevos perico', extraCost: 6000 },
      ],
      bebidas: [
        { id: 'jugo-naranja-plastico', category: 'bebida', label: 'Jugo de naranja (envase plástico)', extraCost: 0, default: true },
        { id: 'jugo-naranja-vidrio', category: 'bebida', label: 'Jugo de naranja (envase vidrio)', extraCost: 3000 },
        { id: 'milo-vidrio', category: 'bebida', label: 'Milo (envase vidrio)', extraCost: 5000 },
        { id: 'yogurt-vidrio', category: 'bebida', label: 'Yogurt (envase vidrio)', extraCost: 5000 },
      ],
    },
  },
  {
    id: 'feliz-dia',
    name: 'Feliz Día',
    price: 100000,
    description: 'Una celebración completa con caja de madera y globos especiales.',
    includes: [
      'Omelette jamón y queso',
      'Jugo de naranja natural (envase vidrio)',
      'Milo (envase vidrio)',
      'Sandwich jamón y queso 15 cm',
      'Porción de fruta',
      'Tarrina de masmelos',
      'Pastelito (Deseo de cumpleaños)',
      'Caja de madera decorada',
      'Tarjeta',
      'Globo metalizado x1',
      'Globo Efecto Espejo x1',
      'Mini globos x2',
    ],
    images: [
      './feliz dia 1.jpeg',
    ],
    customizable: {
      proteinas: [
        { id: 'omelette-jamon-queso', category: 'proteina', label: 'Omelette jamón y queso', extraCost: 0, default: true },
        { id: 'omelette-maicitos', category: 'proteina', label: 'Omelette jamón, queso y maicitos', extraCost: 5000 },
        { id: 'huevos-jamon', category: 'proteina', label: 'Huevos revueltos con jamón', extraCost: 0 },
        { id: 'huevos-pericos', category: 'proteina', label: 'Huevos perico', extraCost: 0 },
      ],
      bebidas: [
        { id: 'jugo-naranja-vidrio', category: 'bebida', label: 'Jugo de naranja (envase vidrio)', extraCost: 0, default: true },
        { id: 'milo-vidrio', category: 'bebida', label: 'Milo (envase vidrio)', extraCost: 0 },
        { id: 'yogurt-vidrio', category: 'bebida', label: 'Yogurt (envase vidrio)', extraCost: 3000 },
        { id: 'jugo-naranja-plastico', category: 'bebida', label: 'Jugo de naranja (envase plástico)', extraCost: -3000 },
      ],
    },
  },
  {
    id: 'excelente-dia',
    name: 'Excelente Día',
    price: 130000,
    description: 'Todo lo que una fecha especial merece, más completo, más memorable.',
    includes: [
      'Omelette jamón, queso y maicitos',
      'Jugo de naranja natural (envase vidrio)',
      'Milo (envase vidrio)',
      'Yogurt (envase de vidrio)',
      'Granola',
      'Sandwich jamón y queso 15 cm',
      'Porción de fruta',
      'Tarrina de masmelos',
      'Pastelito (Deseo de cumpleaños)',
      'Caja de madera decorada',
      'Tarjeta',
      'Globo metalizado x1',
      'Globo Efecto Espejo x1',
      'Mini globos x2',
      'Musg o dos globos en helio',
    ],
    images: [
      '/src/assets/excelente dia 1.jpeg',
      '/src/assets/excelente dia 2.jpeg',
      '/src/assets/excelente dia 3.jpeg',
      '/src/assets/excelente dia 4.jpeg',
    ],
    customizable: {
      proteinas: [
        { id: 'omelette-maicitos', category: 'proteina', label: 'Omelette jamón, queso y maicitos', extraCost: 0, default: true },
        { id: 'omelette-jamon-queso', category: 'proteina', label: 'Omelette jamón y queso', extraCost: 0 },
        { id: 'huevos-jamon', category: 'proteina', label: 'Huevos revueltos con jamón', extraCost: 0 },
        { id: 'huevos-pericos', category: 'proteina', label: 'Huevos perico', extraCost: 0 },
      ],
      bebidas: [
        { id: 'jugo-naranja-vidrio', category: 'bebida', label: 'Jugo de naranja (envase vidrio)', extraCost: 0, default: true },
        { id: 'milo-vidrio', category: 'bebida', label: 'Milo (envase vidrio)', extraCost: 0 },
        { id: 'yogurt-vidrio', category: 'bebida', label: 'Yogurt (envase vidrio)', extraCost: 0 },
      ],
    },
  },
  {
    id: 'hoy-es-tu-dia',
    name: 'Hoy Es Tu Día',
    price: 150000,
    description: 'El desayuno premium, con arco de globos para una sorpresa que no se olvida.',
    includes: [
      'Omelette jamón, queso y maicitos',
      'Jugo de naranja natural (envase vidrio)',
      'Milo (envase vidrio)',
      'Yogurt (envase de vidrio)',
      'Granola',
      'Sandwich jamón y queso 15 cm',
      'Porción de fruta',
      'Tarrina de masmelos',
      'Pastelito (Deseo de cumpleaños)',
      'Caja de madera decorada',
      'Tarjeta',
      'Globo Efecto Espejo x1',
      'Arco de globos',
      'Musg o dos globos en helio',
    ],
    images: [
      '/src/assets/hoy es tu dia 2.jpeg',
      '/src/assets/hoy es tu dia 1.jpeg',
    ],
    customizable: {
      proteinas: [
        { id: 'omelette-maicitos', category: 'proteina', label: 'Omelette jamón, queso y maicitos', extraCost: 0, default: true },
        { id: 'omelette-jamon-queso', category: 'proteina', label: 'Omelette jamón y queso', extraCost: 0 },
        { id: 'huevos-jamon', category: 'proteina', label: 'Huevos revueltos con jamón', extraCost: 0 },
        { id: 'huevos-pericos', category: 'proteina', label: 'Huevos perico', extraCost: 0 },
      ],
      bebidas: [
        { id: 'jugo-naranja-vidrio', category: 'bebida', label: 'Jugo de naranja (envase vidrio)', extraCost: 0, default: true },
        { id: 'milo-vidrio', category: 'bebida', label: 'Milo (envase vidrio)', extraCost: 0 },
        { id: 'yogurt-vidrio', category: 'bebida', label: 'Yogurt (envase vidrio)', extraCost: 0 },
      ],
    },
  },
  {
    id: 'bandeja-dulcera',
    name: 'Bandeja Dulcera',
    price: 50000,
    description: 'Puro dulce y alegría, ideal como complemento o regalo independiente.',
    includes: [
      'Gomitas',
      'Masmelos',
      'Galletas',
      'Pastelito',
      'Globo metalizado',
    ],
    images: [
            '/src/assets/bandeja dulcera 2.jpeg',
            '/src/assets/bandeja dulcera 1.jpeg',
    ],
    customizable: {
      proteinas: [],
      bebidas: [],
    },
  },
];

export const adicionales: Additional[] = [
  { id: 'globo-burbuja', name: 'Globo burbuja personalizado', price: 15000, note: 'Mínimo 48h de anticipación' },
  { id: 'globo-helio', name: 'Globo helio x1', price: 5000 },
  { id: 'rosas', name: 'Rosas x12 — florero en vidrio', price: 50000 },
  { id: 'girasoles', name: 'Girasoles x5 — florero en vidrio', price: 60000 },
  { id: 'vino-gato-negro', name: 'Vino Gato Negro 750 ml', price: 80000 },
  { id: 'baileys', name: 'Baileys crema de whisky 750 ml', price: 85000 },
  { id: 'vino-chenet', name: 'Vino espumoso JP Chenet 750 ml', price: 90000 },
  { id: 'ferrero-3', name: 'Chocolates Ferrero x3 (paquete)', price: 12000 },
  { id: 'ferrero-4', name: 'Chocolates Ferrero x4 (caja)', price: 20000 },
  { id: 'ferrero-8', name: 'Chocolates Ferrero x8', price: 50000 },
  { id: 'musg', name: 'Musg personalizado', price: 20000, note: 'Mínimo 48h de anticipación' },
  { id: 'coronita', name: 'Cerveza Coronita x1', price: 5000 },
  { id: 'jarro', name: 'Jarro cervecero', price: 15000 },
  { id: 'peluche', name: 'Peluches — desde', price: 35000, note: 'Validar disponibilidad' },
];

export const formatPrice = (price: number): string => {
  return `$${price.toLocaleString('es-CO')} COP`;
};
