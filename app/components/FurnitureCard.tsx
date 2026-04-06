'use client';

import React from 'react';
import type { Furniture } from '@/app/types/furniture';

interface FurnitureCardProps {
  furniture: Furniture;
  isSelected?: boolean;
  onSelect: (furniture: Furniture) => void;
  isRemovable?: boolean;
  onRemove?: (furnitureId: string) => void;
}

export default function FurnitureCard({
  furniture,
  isSelected = false,
  onSelect,
  isRemovable = false,
  onRemove,
}: FurnitureCardProps) {
  return (
    <div
      className={`relative aspect-square rounded-lg border-2 transition-all duration-200 cursor-pointer overflow-hidden ${
        isSelected
          ? 'border-blue-500 bg-blue-50 shadow-lg'
          : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
      }`}
      onClick={() => onSelect(furniture)}
    >
      {/* Selection indicator */}
      {isSelected && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold z-10">
          ✓
        </div>
      )}

      {/* Content */}
      <div className="h-full p-3 sm:p-4 flex flex-col">
        <div className="text-3xl sm:text-4xl mb-2 sm:mb-3 text-center">{furniture.icon}</div>

        <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{furniture.name}</h3>

        <p className="text-xs text-gray-600 mb-2 sm:mb-3 line-clamp-3 flex-1">{furniture.description}</p>

        <div className="flex items-center justify-between gap-2 mt-auto">
          <span className="text-base sm:text-lg font-bold text-blue-600">${furniture.price}</span>
          {isRemovable && onRemove && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(furniture.id);
              }}
              className="text-red-500 hover:text-red-700 text-xs sm:text-sm font-medium"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
