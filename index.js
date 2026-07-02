export default {
  async fetch(request) {
    const TRAFFIC_URL = "https://api.project-flight.com/v3/traffic/fetch";
    
    const response = await fetch(TRAFFIC_URL, {
      headers: {
        "Origin": "https://tracker.project-flight.com",
        "Referer": "https://tracker.project-flight.com/",
        "User-Agent": "Mozilla/5.0"
      }
    });
    
    const buffer = await response.arrayBuffer();
    
    return new Response(buffer, {
      headers: {
        "Content-Type": "application/octet-stream",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Cache-Control": "no-cache"
      }
    });
  }
}
