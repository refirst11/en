import getAllPosts from 'lib/getAllPosts';

const getPosts = async () => {
  const posts = await getAllPosts();
  return posts;
};

export async function GET() {
  const site_url = process.env.PROD_URL;
  const posts = await getPosts();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>${site_url}</loc>
       </url>
       ${posts
         .map(({ slug }) => {
           return `
         <url>
             <loc>${`${site_url}/${slug}`}</loc>
         </url>
       `;
         })
         .join('')}
     </urlset>
   `;
  return new Response(xml, { headers: { 'content-type': 'application/xml' } });
}
