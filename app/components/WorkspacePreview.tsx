'use client';

import React from 'react';
import type { Furniture } from '@/app/types/furniture';

interface WorkspacePreviewProps {
  desk: Furniture | null;
  chair: Furniture | null;
  accessories: Furniture[];
}

export default function WorkspacePreview({
  desk,
  chair,
  accessories,
}: WorkspacePreviewProps) {
  return (
    <div className="bg-white rounded-xl border-2 border-blue-300 h-full flex flex-col">
      {/* Canvas Header */}
      <div className="text-center py-6 px-8 border-b border-blue-200">
        <h2 className="text-3xl font-bold text-gray-900">Your Workspace</h2>
        <p className="text-gray-600 mt-1">Live Preview Canvas</p>
      </div>

      {/* Canvas Container - Main Preview Area */}
      <div className="flex-1 relative bg-gradient-to-br from-blue-50 to-white border-2 border-dashed border-blue-300 m-6 rounded-lg overflow-hidden flex flex-col p-8">
        {/* Top Area - Accessories (monitors, lamps) */}
        <div className="flex items-center justify-center gap-6 flex-wrap mb-8 pb-8 border-b-2 border-blue-200">
          {accessories.slice(0, 3).map((acc) => (
            <div
              key={acc.id}
              className="flex flex-col items-center gap-3 p-4 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
              title={acc.name}
            >
              <span className="text-5xl leading-none">{acc.icon}</span>
              <p className="text-sm font-semibold text-gray-700 text-center max-w-20 line-clamp-2">
                {acc.name}
              </p>
            </div>
          ))}
        </div>

        {/* Middle Area - Desk and Chair (Main Workspace) */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12 py-8">
          {/* Desk */}
          {desk ? (
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-64 h-40 rounded-lg border-4 border-gray-800 flex items-center justify-center shadow-2xl hover:shadow-2xl transition-shadow relative overflow-hidden"
                style={{ backgroundColor: desk.color || '#e5e7eb' }}
                title={desk.name}
              >
                {/* Desk visual representation */}
                <svg viewBox="0 0 100 100" className="w-24 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Desktop surface */}
                  <rect x="15" y="30" width="70" height="40" fill="#8B7355" stroke="#000" strokeWidth="2" rx="4"/>
                  {/* Legs */}
                  <rect x="20" y="70" width="6" height="20" fill="#654321" stroke="#000" strokeWidth="1"/>
                  <rect x="74" y="70" width="6" height="20" fill="#654321" stroke="#000" strokeWidth="1"/>
                </svg>
              </div>
              <p className="text-lg font-bold text-gray-900 text-center">{desk.name}</p>
            </div>
          ) : (
            <div className="text-center">
              <svg className="w-32 h-32 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="30" width="70" height="40" fill="currentColor" stroke="currentColor" strokeWidth="2" rx="4" opacity="0.3"/>
                <rect x="20" y="70" width="6" height="20" fill="currentColor" opacity="0.3"/>
                <rect x="74" y="70" width="6" height="20" fill="currentColor" opacity="0.3"/>
              </svg>
            </div>
          )}

          {/* Chair - Below Desk with space */}
          {chair && (
            <div className="flex flex-col items-center gap-4">
              <div
                className="w-40 h-40 rounded-full border-4 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow flex-col gap-2"
                style={{ backgroundColor: chair.color || '#000000' }}
                title={chair.name}
              >
                {/* Chair visual representation */}
                <svg viewBox="0 0 100 100" className="w-20 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Chair back */}
                  <rect x="30" y="15" width="40" height="35" fill="white" stroke="white" strokeWidth="2" rx="4"/>
                  {/* Chair seat */}
                  <rect x="25" y="50" width="50" height="15" fill="white" stroke="white" strokeWidth="2" rx="3"/>
                  {/* Chair legs */}
                  <line x1="30" y1="65" x2="30" y2="85" stroke="white" strokeWidth="3"/>
                  <line x1="70" y1="65" x2="70" y2="85" stroke="white" strokeWidth="3"/>
                  {/* Chair wheels indicator */}
                  <circle cx="30" cy="88" r="3" fill="white"/>
                  <circle cx="70" cy="88" r="3" fill="white"/>
                </svg>
              </div>
              <p className="text-lg font-bold text-gray-900 text-center">{chair.name}</p>
            </div>
          )}
        </div>

        {/* Bottom Area - Accessories on floor */}
        <div className="flex items-center justify-center gap-6 flex-wrap pt-8 border-t-2 border-blue-200">
          {accessories.slice(3).map((acc) => (
            <div
              key={acc.id}
              className="flex flex-col items-center gap-3 p-4 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
              title={acc.name}
            >
              <span className="text-4xl leading-none">{acc.icon}</span>
              <p className="text-sm font-semibold text-gray-700 text-center max-w-16 line-clamp-2">
                {acc.name.split(' ')[0]}
              </p>
            </div>
          ))}
        </div>

        {/* Empty State Message */}
        {!desk && !chair && accessories.length === 0 && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <p className="text-8xl mb-4">🛋️</p>
            <p className="text-2xl font-semibold text-gray-500">
              Select items to build your workspace
            </p>
          </div>
        )}
      </div>

      {/* Stats Footer */}
      <div className="grid grid-cols-4 gap-4 p-6 border-t border-blue-200 bg-blue-50">
        <div className="bg-white border border-blue-300 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors">
          <p className="text-3xl font-bold">{desk ? '✓' : '-'}</p>
          <p className="text-xs font-medium text-gray-600 mt-1">Desk</p>
        </div>
        <div className="bg-white border border-blue-300 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors">
          <p className="text-3xl font-bold">{chair ? '✓' : '-'}</p>
          <p className="text-xs font-medium text-gray-600 mt-1">Chair</p>
        </div>
        <div className="bg-white border border-blue-300 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors">
          <p className="text-3xl font-bold">{accessories.length}</p>
          <p className="text-xs font-medium text-gray-600 mt-1">Accessories</p>
        </div>
        <div className="bg-white border border-blue-300 rounded-lg p-3 text-center hover:bg-blue-100 transition-colors">
          <p className="text-3xl font-bold">✨</p>
          <p className="text-xs font-medium text-gray-600 mt-1">Setup</p>
        </div>
      </div>
    </div>
  );
}
