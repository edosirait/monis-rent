// Types untuk furniture dan workspace design
export interface Furniture {
  id: string;
  name: string;
  category: 'desk' | 'chair' | 'accessory';
  price: number;
  color?: string;
  description: string;
  icon?: string;
}

export interface WorkspaceSetup {
  desk: Furniture | null;
  chair: Furniture | null;
  accessories: Furniture[];
}

export interface WorkspaceContextType {
  setup: WorkspaceSetup;
  addAccessory: (accessory: Furniture) => void;
  removeAccessory: (accessoryId: string) => void;
  selectDesk: (desk: Furniture) => void;
  selectChair: (chair: Furniture) => void;
  getTotalPrice: () => number;
  reset: () => void;
}

export const CATEGORIES = {
  DESK: 'desk',
  CHAIR: 'chair',
  ACCESSORY: 'accessory',
} as const;

export const ACCESSORY_TYPES = {
  MONITOR: 'monitor',
  LAMP: 'lamp',
  PLANT: 'plant',
  SPEAKER: 'speaker',
  CABLE: 'cable',
  RUG: 'rug',
  SHELF: 'shelf',
  ORGANIZER: 'organizer',
} as const;
