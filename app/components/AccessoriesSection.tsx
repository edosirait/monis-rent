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
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Add Accessories</h2>

      {/* Available accessories */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Available Items</h3>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative min-w-0"
              onClick={() => onAdd(item)}
            >
              <FurnitureCard
                furniture={item}
                isSelected={false}
                onSelect={onAdd}
              />
              <div className="absolute top-2 left-2 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold hover:bg-green-600 transition-colors z-10">
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
          <div className="space-y-2">
            {selected.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-2 bg-blue-50 border border-blue-200 rounded-lg p-3"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-xl flex-shrink-0">{item.icon}</span>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <p className="font-medium text-gray-900 text-sm leading-5 break-words line-clamp-2">{item.name}</p>
                    <p className="text-xs text-gray-600 mt-0.5">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => onRemove(item.id)}
                  className="ml-1 text-red-500 hover:text-red-700 font-medium text-sm flex-shrink-0"
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
