'use client'

interface StructuredDataProps {
  type: 'website' | 'article' | 'organization'
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'FunVault',
          description: 'Your ultimate source for Roblox tips, Minecraft guides, anime reviews, and gaming content.',
          url: 'https://funvault.vercel.app',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://funvault.vercel.app/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }
      
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'FunVault',
          description: 'Gaming and anime content hub',
          url: 'https://funvault.vercel.app',
          logo: 'https://funvault.vercel.app/Website_logo-removebg-preview.png',
          sameAs: [
            'https://twitter.com/funvault',
            'https://youtube.com/funvault',
            'https://discord.gg/funvault'
          ]
        }
      
      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: data.title,
          description: data.excerpt || data.content.substring(0, 160),
          image: data.featured_image,
          author: {
            '@type': 'Organization',
            name: 'FunVault Team'
          },
          publisher: {
            '@type': 'Organization',
            name: 'FunVault',
            logo: {
              '@type': 'ImageObject',
              url: 'https://funvault.vercel.app/Website_logo-removebg-preview.png'
            }
          },
          datePublished: data.published_at,
          dateModified: data.updated_at,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://funvault.vercel.app/post/${data.slug}`
          }
        }
      
      default:
        return {}
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}
