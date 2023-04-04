export async function GET() {
  return new Response(`User-agent: *
  Allow: /
  
  Sitemap: https://www.su-pull.net/sitemap.xml`);
}
