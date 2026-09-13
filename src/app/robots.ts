import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const SITE_URL = 'https://howtolearnhacking-ethicalhackingcourse-ethicalhackingtutorial.site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
