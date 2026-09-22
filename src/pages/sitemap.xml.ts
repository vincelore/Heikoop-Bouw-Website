import { services, projects } from '../data/content';
export function GET({site}:{site:URL}) {
  const paths=['/','/diensten/','/projecten/','/over-heikoop/','/contact/','/privacy/',...services.map(s=>`/diensten/${s.slug}/`),...projects.map(p=>`/projecten/${p.slug}/`)];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path=>`<url><loc>${new URL(path,site).href}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});
}
