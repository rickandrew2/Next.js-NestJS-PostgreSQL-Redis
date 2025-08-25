import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://funvault.vercel.app'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]

  // Dynamic pages - categories and posts
  let dynamicPages: MetadataRoute.Sitemap = []

  try {
    const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3002'
    
    // Fetch categories
    const categoriesRes = await fetch(`${api}/categories`, { 
      next: { revalidate: 3600 } // Cache for 1 hour
    })
    if (categoriesRes.ok) {
      const categories = await categoriesRes.json()
      const categoryPages = categories.map((category: any) => ({
        url: `${baseUrl}/category/${category.slug}`,
        lastModified: new Date(category.updated_at || category.created_at),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
      dynamicPages.push(...categoryPages)
    }

    // Fetch posts
    const postsRes = await fetch(`${api}/posts`, { 
      next: { revalidate: 1800 } // Cache for 30 minutes
    })
    if (postsRes.ok) {
      const posts = await postsRes.json()
      const postPages = posts.map((post: any) => ({
        url: `${baseUrl}/post/${post.slug}`,
        lastModified: new Date(post.updated_at || post.published_at || post.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
      }))
      dynamicPages.push(...postPages)
    }
  } catch (error) {
    console.error('Error generating sitemap:', error)
  }

  return [...staticPages, ...dynamicPages]
}
