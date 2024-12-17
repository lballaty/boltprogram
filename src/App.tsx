import React from 'react';
import { Layout } from './components/Layout';
import { DeviceGrid } from './components/devices/DeviceGrid';
import { HASettings } from './components/settings/HASettings';

function App() {
  return (
    <Layout>
      <div className="space-y-6">
        <HASettings />
        <DeviceGrid />
      </div>
    </Layout>
  );
}

export default App;