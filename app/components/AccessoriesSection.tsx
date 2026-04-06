'use client';

import React from 'react';
import type { Furniture } from '@/app/types/furniture';
import FurnitureCard from './FurnitureCard';

interface AccessoriesSectionProps {
  items: Furniture[];
  selected: Furniture[];
  onAdd: (item: Furniture) => void;
  onRemove: (itemId: string) => void;
}

export default function AccessoriesSection({
  items,
  selected,
  onAdd,
  onRemove,
}: AccessoriesSectionProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Add Accessories</h2>

      {/* Available accessories */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Available Items</h3>
        <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative"
              onClick={() => onAdd(item)}
            >
              <FurnitureCard
                furniture={item}
                isSelected={false}
                onSelect={onAdd}
              />
              <div className="absolute top-2 left-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-green-600 transition-colors">
                +
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected accessories */}
      {selected.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Selected ({selected.length})
          </h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {selected.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-3"
              >
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-xl">{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-gray-900 text-sm truncate">{item.name}</p>
                    <p className="text-xs text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="ml-2 text-red-500 hover:text-red-700 font-medium text-sm flex-shrink-0"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
