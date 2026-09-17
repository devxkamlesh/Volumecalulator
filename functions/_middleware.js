/**
 * Cloudflare Pages Middleware
 * Intercepts requests to block *.pages.dev from being indexed by search engines.
 * Once a custom domain (e.g. thevolumecalculator.com) is used, indexing is fully permitted.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const isPagesDev = url.hostname.endsWith('.pages.dev');

  // 1. If crawlers request /robots.txt on *.pages.dev, completely disallow crawling
  if (isPagesDev && url.pathname === '/robots.txt') {
    return new Response("User-agent: *\nDisallow: /\n", {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow, noarchive',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  }

  // 2. Fetch the requested page/asset
  const response = await context.next();

  // 3. If accessed via *.pages.dev, inject X-Robots-Tag header to prevent indexing
  if (isPagesDev) {
    const newHeaders = new Headers(response.headers);
    newHeaders.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  }

  // 4. On real custom domain (e.g. thevolumecalculator.com), explicitly set index, follow for Google
  const cleanHeaders = new Headers(response.headers);
  cleanHeaders.set('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: cleanHeaders,
  });
}
