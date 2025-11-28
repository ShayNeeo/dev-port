import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://shayneeo.id.vn',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },

    ];
}
