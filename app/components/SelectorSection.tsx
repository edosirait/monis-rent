'use client';

import React from 'react';
import type { Furniture } from '@/app/types/furniture';
import FurnitureCard from './FurnitureCard';

interface SelectorSectionProps {
  title: string;
  items: Furniture[];
  selected: Furniture | null;
  onSelect: (item: Furniture) => void;
}

export default function SelectorSection({ title, items, selected, onSelect }: SelectorSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <FurnitureCard
            key={item.id}
            furniture={item}
            isSelected={selected?.id === item.id}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
