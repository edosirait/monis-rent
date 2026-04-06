import type { Furniture } from '@/app/types/furniture';

// Desks data
export const DESKS: Furniture[] = [
  {
    id: 'desk-1',
    name: 'Modern Minimalist Desk',
    category: 'desk',
    price: 299,
    color: '#e5e7eb',
    description: 'Clean lines, spacious work surface',
    icon: '🪑',
  },
  {
    id: 'desk-2',
    name: 'Executive Workspace Desk',
    category: 'desk',
    price: 599,
    color: '#78350f',
    description: 'Premium wood finish with cable management',
    icon: '🪑',
  },
  {
    id: 'desk-3',
    name: 'Compact Corner Desk',
    category: 'desk',
    price: 199,
    color: '#7c3aed',
    description: 'Perfect for small spaces',
    icon: '🪑',
  },
];

// Chairs data
export const CHAIRS: Furniture[] = [
  {
    id: 'chair-1',
    name: 'Ergonomic Office Chair',
    category: 'chair',
    price: 249,
    color: '#000000',
    description: 'Full lumbar support and adjustable height',
    icon: '🪑',
  },
  {
    id: 'chair-2',
    name: 'Gaming Chair Pro',
    category: 'chair',
    price: 349,
    color: '#dc2626',
    description: 'Racing style with premium materials',
    icon: '🪑',
  },
  {
    id: 'chair-3',
    name: 'Minimalist Lounge Chair',
    category: 'chair',
    price: 189,
    color: '#f3f4f6',
    description: 'Stylish and comfortable',
    icon: '🪑',
  },
];

// Accessories data
export const ACCESSORIES: Furniture[] = [
  {
    id: 'acc-monitor-1',
    name: '24" Monitor',
    category: 'accessory',
    price: 199,
    description: 'Full HD display with USB-C',
    icon: '🖥️',
  },
  {
    id: 'acc-monitor-2',
    name: '32" 4K Monitor',
    category: 'accessory',
    price: 399,
    description: 'Ultra high resolution display',
    icon: '🖥️',
  },
  {
    id: 'acc-lamp-1',
    name: 'LED Desk Lamp',
    category: 'accessory',
    price: 49,
    description: 'Adjustable brightness and color temperature',
    icon: '💡',
  },
  {
    id: 'acc-lamp-2',
    name: 'Minimalist Arc Lamp',
    category: 'accessory',
    price: 129,
    description: 'Modern style with dimmable feature',
    icon: '💡',
  },
  {
    id: 'acc-plant-1',
    name: 'Potted Green Plant',
    category: 'accessory',
    price: 39,
    description: 'Adds life and freshness to your space',
    icon: '🌿',
  },
  {
    id: 'acc-plant-2',
    name: 'Premium Desktop Plant',
    category: 'accessory',
    price: 79,
    description: 'Large succulent with decorative pot',
    icon: '🪴',
  },
  {
    id: 'acc-speaker-1',
    name: 'Wireless Bluetooth Speaker',
    category: 'accessory',
    price: 89,
    description: 'Premium sound quality',
    icon: '🔊',
  },
  {
    id: 'acc-cable-1',
    name: 'Cable Organizer Set',
    category: 'accessory',
    price: 19,
    description: 'Keep cables neat and organized',
    icon: '📦',
  },
  {
    id: 'acc-rug-1',
    name: 'Office Desk Rug',
    category: 'accessory',
    price: 69,
    description: 'Comfortable mat for your feet',
    icon: '🟫',
  },
  {
    id: 'acc-organizer-1',
    name: 'Desk Organizer',
    category: 'accessory',
    price: 29,
    description: 'Multiple compartments for storage',
    icon: '📋',
  },
];

export const ALL_FURNITURE = [...DESKS, ...CHAIRS, ...ACCESSORIES];
