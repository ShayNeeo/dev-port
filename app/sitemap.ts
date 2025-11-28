import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://0.id.vn',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },

    ];
}
