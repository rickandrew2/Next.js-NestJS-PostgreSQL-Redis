'use client'; // This makes it a Client Component

import { useState } from 'react';

export default function ClientComponent() {
  // This runs in the BROWSER
  const [count, setCount] = useState(0);
  const clientTime = new Date().toISOString();
  
  return (
    <div className="bg-blue-100 p-4 rounded">
      <h3>Client Component</h3>
      <p>This renders in the browser</p>
      <p>Client time: {clientTime}</p>
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
      >
        Increment
      </button>
      <p className="text-sm text-gray-600 mt-2">
        ✅ Interactive, can use hooks, event handlers
      </p>
    </div>
  );
}
