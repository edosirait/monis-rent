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
        <div className="px-4 py-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 font-medium mb-3"
          >
            ← Kembali ke Awal
          </Link>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">Design Your Workspace</h1>
            <p className="text-sm sm:text-base text-gray-600">Pick a desk, choose a chair, add your accessories, and rent your perfect setup</p>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row">
        {/* Left Sidebar - Selection Panel */}
        <div className="w-full lg:w-96 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 lg:h-[calc(100vh-133px)] lg:overflow-y-auto">
          <div className="p-4 sm:p-6 space-y-6">
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

        {/* Right Side - Preview + Checkout */}
        <div className="flex-1 min-h-0 bg-gray-50 lg:h-[calc(100vh-133px)] lg:overflow-y-auto">
          <div className="p-4 sm:p-6 lg:p-8">
            <WorkspacePreview
              desk={setup.desk}
              chair={setup.chair}
              accessories={setup.accessories}
            />
          </div>

          {/* Checkout Summary */}
          <div className="bg-white border-t border-gray-200 px-4 py-4 sm:px-6 sm:py-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left spacer to align with sidebar */}
              <div className="hidden lg:block lg:w-96 lg:flex-shrink-0"></div>

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
