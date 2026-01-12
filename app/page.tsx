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
    <div style={{minHeight: '100vh', background: '#111111', color: 'white'}}>
      <nav style={{background: '#222222', padding: '16px', borderBottom: '1px solid #333'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <h1 style={{fontSize: '24px', fontWeight: 'bold'}}>ARCHON V7.0.0</h1>
          <div style={{display: 'flex', gap: '8px'}}>
            {Object.keys(MODULES).map(module => (
              <button
                key={module}
                onClick={() => setActiveModule(module)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '4px',
                  border: 'none',
                  background: activeModule === module ? '#0070f3' : '#373737',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                {module.charAt(0).toUpperCase() + module.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div style={{height: 'calc(100vh - 80px)'}}>
        <iframe
          src={MODULES[activeModule]}
          style={{width: '100%', height: '100%', border: 'none'}}
          title={`ARCHON ${activeModule} Module`}
        />
      </div>
    </div>
  ;
}