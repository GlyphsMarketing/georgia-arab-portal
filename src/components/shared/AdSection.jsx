import { motion } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const AdSection = ({
  type = 'banner', // banner, sidebar, inline, card
  size = 'medium', // small, medium, large
  position = 'top', // top, bottom, left, right, center
  language = 'en',
  className = '',
  closable = false,
  onClose
}) => {
  const translations = {
    en: {
      sponsored: 'Sponsored',
      ad: 'Advertisement',
      learnMore: 'Learn More',
      visitWebsite: 'Visit Website',
      closeAd: 'Close Ad'
    },
    ar: {
      sponsored: 'مُموَّل',
      ad: 'إعلان',
      learnMore: 'اعرف المزيد',
      visitWebsite: 'زيارة الموقع',
      closeAd: 'إغلاق الإعلان'
    }
  }

  const t = translations[language]

  // Sample ad data - in real app this would come from props or API
  const sampleAds = {
    banner: {
      title: 'Premium Business Listing',
      description: 'Get your business featured at the top of search results',
      image: '/api/placeholder/800/200',
      cta: t.learnMore,
      url: '#'
    },
    sidebar: {
      title: 'Arabic Language Classes',
      description: 'Learn Arabic with native speakers in Atlanta',
      image: '/api/placeholder/300/250',
      cta: t.visitWebsite,
      url: '#'
    },
    inline: {
      title: 'Middle Eastern Restaurant',
      description: 'Authentic cuisine in the heart of Georgia',
      image: '/api/placeholder/400/150',
      cta: t.visitWebsite,
      url: '#'
    },
    card: {
      title: 'Real Estate Services',
      description: 'Find your dream home with our expert agents',
      image: '/api/placeholder/300/200',
      cta: t.learnMore,
      url: '#'
    }
  }

  const ad = sampleAds[type] || sampleAds.banner

  const getSizeClasses = () => {
    const sizes = {
      banner: {
        small: 'h-20',
        medium: 'h-32',
        large: 'h-48'
      },
      sidebar: {
        small: 'h-40',
        medium: 'h-60',
        large: 'h-80'
      },
      inline: {
        small: 'h-24',
        medium: 'h-32',
        large: 'h-40'
      },
      card: {
        small: 'h-48',
        medium: 'h-64',
        large: 'h-80'
      }
    }
    return sizes[type]?.[size] || sizes.banner.medium
  }

  const renderBannerAd = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg overflow-hidden ${getSizeClasses()} ${className}`}
    >
      {closable && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-2 right-2 z-10 h-6 w-6 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      )}
      
      <div className="absolute top-2 left-2 z-10">
        <Badge variant="secondary" className="text-xs">
          {t.sponsored}
        </Badge>
      </div>

      <div className="flex h-full">
        <div className="flex-1 p-4 flex flex-col justify-center">
          <h3 className="font-semibold text-lg mb-2">{ad.title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{ad.description}</p>
          <Button size="sm" className="w-fit">
            {ad.cta}
            <ExternalLink className="h-3 w-3 ml-1" />
          </Button>
        </div>
        <div className="w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
      </div>
    </motion.div>
  )

  const renderSidebarAd = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`${getSizeClasses()} ${className}`}>
        <CardContent className="p-0 h-full">
          {closable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-2 right-2 z-10 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          
          <div className="relative h-full">
            <Badge className="absolute top-2 left-2 z-10 text-xs">
              {t.ad}
            </Badge>
            
            <div className="h-2/3 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            
            <div className="p-3 h-1/3 flex flex-col justify-between">
              <div>
                <h4 className="font-medium text-sm mb-1">{ad.title}</h4>
                <p className="text-xs text-muted-foreground">{ad.description}</p>
              </div>
              <Button size="sm" variant="outline" className="w-full mt-2">
                {ad.cta}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  const renderInlineAd = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`${getSizeClasses()} ${className}`}>
        <CardContent className="p-0 h-full">
          {closable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-2 right-2 z-10 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          
          <div className="flex h-full">
            <div className="w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            <div className="flex-1 p-3 flex flex-col justify-center">
              <Badge className="w-fit mb-2 text-xs">
                {t.sponsored}
              </Badge>
              <h4 className="font-medium text-sm mb-1">{ad.title}</h4>
              <p className="text-xs text-muted-foreground mb-2">{ad.description}</p>
              <Button size="sm" variant="outline" className="w-fit">
                {ad.cta}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  const renderCardAd = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`${getSizeClasses()} ${className} hover:shadow-lg transition-shadow`}>
        <CardContent className="p-0 h-full">
          {closable && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="absolute top-2 right-2 z-10 h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          
          <div className="relative h-full">
            <Badge className="absolute top-2 left-2 z-10 text-xs">
              {t.ad}
            </Badge>
            
            <div className="h-2/3 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
            
            <div className="p-4 h-1/3 flex flex-col justify-between">
              <div>
                <h4 className="font-medium mb-1">{ad.title}</h4>
                <p className="text-sm text-muted-foreground">{ad.description}</p>
              </div>
              <Button size="sm" className="w-full mt-2">
                {ad.cta}
                <ExternalLink className="h-3 w-3 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )

  switch (type) {
    case 'sidebar':
      return renderSidebarAd()
    case 'inline':
      return renderInlineAd()
    case 'card':
      return renderCardAd()
    default:
      return renderBannerAd()
  }
}

export default AdSection
