import http from 'http';

async function detectDevServerPort() {
  const possiblePorts = [5173, 5174, 5175, 5176, 5177];
  
  for (const port of possiblePorts) {
    try {
      const url = `http://localhost:${port}/1`;
      const response = await fetch(url);
      if (response.ok) {
        console.log(`Dev server detected on port ${port}`);
        return `http://localhost:${port}`;
      }
    } catch (error) {
      // Port not available, try next
    }
  }
  
  throw new Error('Dev server not found. Please make sure "npm run dev" is running.');
}

export { detectDevServerPort }; 