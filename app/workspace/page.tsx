'use client';

import React from 'react';
import Link from 'next/link';
import { useWorkspace } from '@/app/context/WorkspaceContext';
import { DESKS, CHAIRS, ACCESSORIES } from '@/app/data/furniture';
import SelectorSection from '@/app/components/SelectorSection';
import AccessoriesSection from '@/app/components/AccessoriesSection';
import WorkspacePreview from '@/app/components/WorkspacePreview';
import CheckoutSummary from '@/app/components/CheckoutSummary';

export default function WorkspacePage() {
  const { setup, selectDesk, selectChair, addAccessory, removeAccessory, getTotalPrice, reset } =
    useWorkspace();

  const isValid = setup.desk !== null && setup.chair !== null;
  const totalPrice = getTotalPrice();

  const handleCheckout = () => {
    if (isValid) {
      // Show success message
      alert(
        `✓ Order created!\n\nDesktop: ${setup.desk?.name}\nChair: ${setup.chair?.name}\nAccessories: ${setup.accessories.length}\n\nTotal: $${totalPrice}`
      );
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 font-medium mb-4"
          >
            ← Kembali ke Awal
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">🎉 Design Your Workspace</h1>
            <p className="text-gray-600">Pick a desk, choose a chair, add your accessories, and rent your perfect setup</p>
          </div>
        </div>
      </div>

      {/* Main layout - Flex container */}
      <div className="flex flex-1">
        {/* Left Sidebar - Selection Panel (Full Height) */}
        <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Desks */}
            <SelectorSection
              title="Select a Desk"
              items={DESKS}
              selected={setup.desk}
              onSelect={selectDesk}
            />

            {/* Chairs */}
            <SelectorSection
              title="Select a Chair"
              items={CHAIRS}
              selected={setup.chair}
              onSelect={selectChair}
            />

            {/* Accessories */}
            <AccessoriesSection
              items={ACCESSORIES}
              selected={setup.accessories}
              onAdd={addAccessory}
              onRemove={removeAccessory}
            />
          </div>

        </div>

        {/* Right Side - Canvas Preview (Full Height) */}
        <div className="flex-1 bg-gray-50 overflow-y-auto">
          <div className="p-8">
            <WorkspacePreview
              desk={setup.desk}
              chair={setup.chair}
              accessories={setup.accessories}
            />
          </div>

          {/* Bottom Section - Checkout Summary (Full Width) */}
          <div className="bg-white border-t border-gray-200 px-6 py-6">
            <div className="flex gap-6">
              {/* Left spacer to align with sidebar */}
              <div className="w-80 flex-shrink-0"></div>

              {/* Checkout summary content */}
              <div className="flex-1">
                <CheckoutSummary
                    desk={setup.desk}
                    chair={setup.chair}
                    accessories={setup.accessories}
                    totalPrice={totalPrice}
                    onCheckout={handleCheckout}
                    onReset={reset}
                    isValid={isValid}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
