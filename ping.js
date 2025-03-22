const axios = require('axios');

const targetUrls = [
  "https://onekychub.onrender.com", 
  "https://fundgaze.onrender.com",
];

(async () => {
  for (const url of targetUrls) {
    try {
      const response = await axios.get(url);
      console.log(`[${new Date().toISOString()}] Successfully pinged ${url} - Status: ${response.status}`);
    } catch (error) {
      console.error(`[${new Date().toISOString()}] Failed to ping ${url}: ${error.message}`);
    }
  }
})();
