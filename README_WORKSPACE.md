# 🏢 Design Your Workspace - Monis Rent

A Next.js + Tailwind CSS application for designing custom workspace setups with real-time preview. Users can select desks, chairs, and add various accessories to create their perfect workspace, with live visual updates and checkout functionality.

## ✨ Features

✅ **Multiple Desk Options** - Choose from 3 different desk styles:
  - Modern Minimalist Desk ($299)
  - Executive Workspace Desk ($599)
  - Compact Corner Desk ($199)

✅ **Multiple Chair Options** - Select from 3 chair types:
  - Ergonomic Office Chair ($249)
  - Gaming Chair Pro ($349)
  - Minimalist Lounge Chair ($189)

✅ **Add Accessories** - Customize with 10+ accessories:
  - Monitors (24", 32" 4K)
  - Lamps (LED, Arc)
  - Plants (Potted, Premium)
  - Speakers, Rugs, Shelves, Organizers & more

✅ **Real-time Workspace Preview** - Live visual updates as you build

✅ **Order Summary & Checkout** - Complete summary with total pricing

✅ **Responsive Design** - Works seamlessly on mobile, tablet, and desktop

## 📁 Project Structure

```
app/
├── components/
│   ├── AccessoriesSection.tsx    # Accessories selector component
│   ├── Button.tsx                # Reusable button component
│   ├── CheckoutSummary.tsx       # Order summary component
│   ├── FurnitureCard.tsx         # Individual furniture card
│   ├── SelectorSection.tsx       # Desk/Chair selector component
│   └── WorkspacePreview.tsx      # Live preview visualization
├── context/
│   └── WorkspaceContext.tsx      # State management (Context API + useReducer)
├── data/
│   └── furniture.ts              # Mock furniture data
├── types/
│   └── furniture.ts              # TypeScript interfaces
├── workspace/
│   └── page.tsx                  # Main workspace designer page
├── layout.tsx                    # Root layout with WorkspaceProvider
├── page.tsx                      # Landing page
└── globals.css                   # Global styles with Tailwind

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/monis-rent.git
cd monis-rent
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🎯 How It Works

### State Management
Uses React Context API + `useReducer` hook for clean state management:

```typescript
- selectDesk()      // Select a desk
- selectChair()     // Select a chair
- addAccessory()    // Add an accessory
- removeAccessory() // Remove an accessory
- getTotalPrice()   // Calculate total
- reset()           // Clear selection
```

### Component Architecture

**Reusable Components:**
- `FurnitureCard` - Displays individual furniture items with selection state
- `SelectorSection` - Grid of items for desk/chair selection
- `AccessoriesSection` - Accessories with add/remove functionality
- `WorkspacePreview` - Live visualization of selected items
- `CheckoutSummary` - Order summary with pricing

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.2.2](https://nextjs.org)
- **Styling**: [Tailwind CSS 4.2.2](https://tailwindcss.com)
- **Language**: TypeScript 5
- **State Management**: React Context API + useReducer
- **Font**: Geist Sans & Geist Mono

## 🧪 Usage Example

```typescript
import { useWorkspace } from '@/app/context/WorkspaceContext';

export default function MyComponent() {
  const { setup, selectDesk, addAccessory, getTotalPrice } = useWorkspace();
  
  return (
    <div>
      <p>Selected Desk: {setup.desk?.name}</p>
      <p>Total: ${getTotalPrice()}</p>
    </div>
  );
}
```

## 📱 Responsive Breakpoints

- **Mobile**: Single column layout
- **Tablet (md)**: 2-column grid for cards
- **Desktop (lg)**: 3-column layout with sidebar + preview + summary

## 🔧 Customization

### Adding More Furniture

Edit `app/data/furniture.ts`:

```typescript
export const DESKS: Furniture[] = [
  {
    id: 'desk-custom',
    name: 'Your Desk Name',
    category: 'desk',
    price: 399,
    color: '#hexcolor',
    description: 'Description',
    icon: '📦',
  },
  // ...
];
```

### Customizing Tailwind Theme

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      brand: '#your-color',
    },
  },
}
```

## 📦 Building for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-deploys on push

```bash
git push origin main
```

## 🤝 Contributing

Contributions welcome! Please follow the component structure and add types for new features.

## 📄 License

MIT

## 📞 Support

For issues or questions, please open a GitHub issue.

---

**Built with ❤️ using Next.js & Tailwind CSS**
