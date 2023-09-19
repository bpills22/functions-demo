function handleRequest(request) {
    const userAgent = request.headers.get('User-Agent');
  
    // Check User-Agent header
    let responseBody = 'Hello World';  // default message
    if (userAgent.includes('Firefox')) {
      responseBody = 'Hello Firefox';
    } else if (userAgent.includes('Chrome') && !userAgent.includes('Chromium')) {
      // The additional check for '!userAgent.includes('Chromium')' is to distinguish Chrome from other Chromium-based browsers
      responseBody = 'Hello Chrome';
    }
  
    return new Response(responseBody, { status: 200 });
  }
  
  // Event listener for the fetch event
  addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  