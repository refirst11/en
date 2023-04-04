export async function GET() {
  return new Response(`User-agent: *
  Allow: /
  
  Sitemap: ${process.env.PROD_URL}`);
}
