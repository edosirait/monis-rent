'use client';

import React from 'react';
import type { Furniture } from '@/app/types/furniture';

interface CheckoutSummaryProps {
  desk: Furniture | null;
  chair: Furniture | null;
  accessories: Furniture[];
  totalPrice: number;
  onCheckout: () => void;
  onReset: () => void;
  isValid: boolean;
}

export default function CheckoutSummary({
  desk,
  chair,
  accessories,
  totalPrice,
  onCheckout,
  onReset,
  isValid,
}: CheckoutSummaryProps) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl border-2 border-gray-200 p-6 sticky top-6">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">📋 Your Setup</h2>

      {/* Items list */}
      <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
        {/* Desk */}
        {desk && (
          <div className="flex items-start justify-between">
            <div>
              <p className="font-medium text-gray-900">Desk</p>
              <p className="text-sm text-gray-600">{desk.name}</p>
            </div>
            <span className="font-semibold text-gray-900">${desk.price}</span>
          </div>
        )}

        {/* Chair */}
        {chair && (
          <div className="flex items-start justify-between">
            <div>
              <p className="font-medium text-gray-900">Chair</p>
              <p className="text-sm text-gray-600">{chair.name}</p>
            </div>
            <span className="font-semibold text-gray-900">${chair.price}</span>
          </div>
        )}

        {/* Accessories */}
        {accessories.length > 0 && (
          <div>
            <p className="font-medium text-gray-900 mb-2">Accessories ({accessories.length})</p>
            <div className="space-y-1 ml-2">
              {accessories.map((acc) => (
                <div key={acc.id} className="flex justify-between text-sm text-gray-600">
                  <span>{acc.name}</span>
                  <span>${acc.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Validation message */}
      {!isValid && (
        <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-sm text-amber-800">
            ⚠️ Please select at least a desk and chair
          </p>
        </div>
      )}

      {/* Total */}
      <div className="mb-6 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-gray-900">Total</span>
          <span className="text-3xl font-bold text-blue-600">${totalPrice}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        <button
          onClick={onCheckout}
          disabled={!isValid}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
            isValid
              ? 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 cursor-pointer'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isValid ? '🎉 Rent Your Setup!' : 'Complete Your Setup'}
        </button>
        <button
          onClick={onReset}
          className="w-full py-2 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
        >
          Reset
        </button>
      </div>

      {/* Info */}
      <p className="text-xs text-gray-500 mt-4 text-center">
        💡 Starting rental this week | Free delivery in Bali
      </p>
    </div>
  );
}
