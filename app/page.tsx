'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-blue-600">🏢 Monis Rent</h1>
          <p className="text-sm sm:text-base text-gray-600 font-medium">Workspace Rental Configurator</p>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Design Your Perfect Workspace</h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6">
                Rent a fully equipped office setup in Bali. Pick your desk, choose your chair, add accessories, and start working. No long-term commitment. Your workspace, your way.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <p className="font-semibold text-gray-900">For Digital Nomads</p>
                  <p className="text-sm text-gray-600">Need a workspace when you land? Rent instantly.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="font-semibold text-gray-900">For Startups</p>
                  <p className="text-sm text-gray-600">Fully equipped office. No furniture investment.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <p className="font-semibold text-gray-900">Build Visually</p>
                  <p className="text-sm text-gray-600">See your setup come to life. Get excited.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="font-semibold text-gray-900">Flexible Rental</p>
                  <p className="text-sm text-gray-600">1 week, 1 month, or longer. You decide.</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2 sm:pt-4">
              <Link
                href="/workspace"
                className="inline-block w-full sm:w-auto text-center bg-blue-600 text-white px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:shadow-lg active:scale-95"
              >
                Start Designing →
              </Link>
            </div>
          </div>

          {/* Right content - Visual mockup */}
          <div className="bg-gradient-to-b from-blue-100 to-blue-50 rounded-xl border-2 border-blue-200 p-8 sm:p-10 lg:p-12 flex items-center justify-center min-h-64 sm:min-h-80 lg:min-h-96">
            <div className="text-center">
              <div className="text-5xl sm:text-6xl mb-4">🖼️</div>
              <p className="text-gray-600 text-base sm:text-lg mb-4">Your Workspace Preview</p>
              <p className="text-gray-500 text-sm">
                Visualize your setup before ordering
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-14 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">3+</p>
            <p className="text-gray-600">Desk Options</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">3+</p>
            <p className="text-gray-600">Chair Styles</p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-6 text-center sm:col-span-2 lg:col-span-1">
            <p className="text-3xl font-bold text-blue-600 mb-2">10+</p>
            <p className="text-gray-600">Accessories</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-10 sm:py-12 mt-14 sm:mt-16 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 mb-4">© 2026 Monis Rent - Workspace Alfredo Solutions</p>
          <p className="text-sm text-gray-500">Free shipping | 30-day returns | 1-year warranty</p>
        </div>
      </div>
    </div>
  );
}
