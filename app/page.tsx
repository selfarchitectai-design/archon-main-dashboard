'use client'

import { useState } from 'react'

const MODULES = {
  health: 'https://health.selfarchitectai.com',
  telemetry: 'https://telemetry.selfarchitectai.com', 
  cost: 'https://cost.selfarchitectai.com',
  mcp: 'https://mcp.selfarchitectai.com',
  verify: 'https://verify.selfarchitectai.com'
}

export default function Dashboard() {
  const [activeModule, setActiveModule] = useState('health')

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800 border-b border-gray-700 p-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-white">ARCHON V7.0.0</h1>
          <div className="flex gap-2">
            {Object.keys(MODULES).map(module => (
              <button
                key={module}
                onClick={() => setActiveModule(module)}
                className={`px-3 py-1 rounded ${
                  activeModule === module 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700 text-gray-300'
                }`}
              >
                {module.charAt(0).toUpperCase() + module.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Module Container */}
      <div className="h-[calc(100vh-80px)]">
        <iframe
          src={MODULES[activeModule]}
          className="w-full h-full border-0"
          title={`ARCHON ${activeModule} Module`}
        />
      </div>
    </div>
  ;
}