import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft,
  Heart,
  Share2,
  MapPin,
  Clock,
  Eye,
  Star,
  Shield,
  Phone,
  MessageCircle,
  Mail,
  User,
  Calendar,
  Tag,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  Flag,
  Info,
  CheckCircle,
  AlertCircle,
  Camera,
  Maximize2,
  X
} from 'lucide-react'
import AdSection from '../shared/AdSection'

const MarketplaceProduct = ({ language = 'en' }) => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showImageModal, setShowImageModal] = useState(false)
  const [isFavorited, setIsFavorited] = useState(false)
  const [showContactInfo, setShowContactInfo] = useState(false)

  const translations = {
    en: {
      backToMarketplace: 'Back to Marketplace',
      backToCategory: 'Back to Category',
      share: 'Share',
      addToFavorites: 'Add to Favorites',
      removeFromFavorites: 'Remove from Favorites',
      contactSeller: 'Contact Seller',
      sendMessage: 'Send Message',
      callSeller: 'Call Seller',
      emailSeller: 'Email Seller',
      reportListing: 'Report Listing',
      
      // Product details
      condition: 'Condition',
      location: 'Location',
      postedOn: 'Posted on',
      views: 'Views',
      productId: 'Product ID',
      category: 'Category',
      negotiable: 'Price Negotiable',
      
      // Seller info
      sellerInfo: 'Seller Information',
      verifiedSeller: 'Verified Seller',
      memberSince: 'Member since',
      totalListings: 'Total Listings',
      responseRate: 'Response Rate',
      avgResponseTime: 'Avg Response Time',
      
      // Actions
      makeOffer: 'Make an Offer',
      buyNow: 'Buy Now',
      addToWatchlist: 'Add to Watchlist',
      
      // Safety tips
      safetyTips: 'Safety Tips',
      meetInPublic: 'Meet in a public place',
      inspectBeforePaying: 'Inspect the item before paying',
      useSecurePayment: 'Use secure payment methods',
      trustYourInstincts: 'Trust your instincts',
      
      // Related products
      relatedProducts: 'Related Products',
      similarItems: 'Similar Items',
      fromSameSeller: 'More from this Seller',
      
      // Conditions
      new: 'New',
      likeNew: 'Like New',
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
      
      // Status
      featured: 'Featured',
      urgent: 'Urgent Sale',
      sold: 'Sold',
      available: 'Available',
      
      // Contact form
      yourMessage: 'Your Message',
      sendMessagePlaceholder: 'Hi, I\'m interested in your item...',
      yourName: 'Your Name',
      yourEmail: 'Your Email',
      yourPhone: 'Your Phone',
      sendMessage: 'Send Message',
      
      // Image gallery
      imageGallery: 'Image Gallery',
      zoomImage: 'Click to zoom',
      closeImage: 'Close image'
    },
    ar: {
      backToMarketplace: 'العودة إلى السوق',
      backToCategory: 'العودة إلى الفئة',
      share: 'مشاركة',
      addToFavorites: 'إضافة إلى المفضلة',
      removeFromFavorites: 'إزالة من المفضلة',
      contactSeller: 'اتصل بالبائع',
      sendMessage: 'إرسال رسالة',
      callSeller: 'اتصل بالبائع',
      emailSeller: 'راسل البائع',
      reportListing: 'الإبلاغ عن الإعلان',
      
      // Product details
      condition: 'الحالة',
      location: 'الموقع',
      postedOn: 'تم النشر في',
      views: 'المشاهدات',
      productId: 'رقم المنتج',
      category: 'الفئة',
      negotiable: 'السعر قابل للتفاوض',
      
      // Seller info
      sellerInfo: 'معلومات البائع',
      verifiedSeller: 'بائع موثق',
      memberSince: 'عضو منذ',
      totalListings: 'إجمالي الإعلانات',
      responseRate: 'معدل الاستجابة',
      avgResponseTime: 'متوسط وقت الاستجابة',
      
      // Actions
      makeOffer: 'تقديم عرض',
      buyNow: 'اشتري الآن',
      addToWatchlist: 'إضافة إلى قائمة المراقبة',
      
      // Safety tips
      safetyTips: 'نصائح الأمان',
      meetInPublic: 'التقي في مكان عام',
      inspectBeforePaying: 'افحص العنصر قبل الدفع',
      useSecurePayment: 'استخدم طرق دفع آمنة',
      trustYourInstincts: 'ثق في غرائزك',
      
      // Related products
      relatedProducts: 'منتجات ذات صلة',
      similarItems: 'عناصر مشابهة',
      fromSameSeller: 'المزيد من هذا البائع',
      
      // Conditions
      new: 'جديد',
      likeNew: 'مثل الجديد',
      excellent: 'ممتاز',
      good: 'جيد',
      fair: 'مقبول',
      
      // Status
      featured: 'مميز',
      urgent: 'بيع عاجل',
      sold: 'تم البيع',
      available: 'متاح',
      
      // Contact form
      yourMessage: 'رسالتك',
      sendMessagePlaceholder: 'مرحباً، أنا مهتم بالعنصر الخاص بك...',
      yourName: 'اسمك',
      yourEmail: 'بريدك الإلكتروني',
      yourPhone: 'رقم هاتفك',
      sendMessage: 'إرسال رسالة',
      
      // Image gallery
      imageGallery: 'معرض الصور',
      zoomImage: 'انقر للتكبير',
      closeImage: 'إغلاق الصورة'
    }
  }

  const t = translations[language]

  // Sample product data
  const product = {
    id: productId,
    title: 'iPhone 14 Pro Max 256GB - Space Black',
    price: 1200,
    originalPrice: 1400,
    condition: 'excellent',
    location: 'atlanta',
    category: 'electronics',
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800',
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800'
    ],
    seller: {
      name: 'Ahmed Hassan',
      verified: true,
      memberSince: '2022-03-15',
      totalListings: 24,
      responseRate: 95,
      avgResponseTime: '2 hours',
      phone: '+1 (555) 123-4567',
      email: 'ahmed.hassan@email.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100'
    },
    featured: true,
    urgent: false,
    negotiable: true,
    views: 1250,
    postedDate: '2024-01-15',
    description: `Excellent condition iPhone 14 Pro Max in Space Black with 256GB storage. 

This phone has been well-maintained and comes with:
• Original box and all accessories
• Screen protector applied since day one
• Protective case included
• 89% battery health
• No scratches or dents
• Always kept in smoke-free environment

Features:
• 6.7-inch Super Retina XDR display
• A16 Bionic chip
• Pro camera system with 48MP Main camera
• Up to 29 hours video playback
• Face ID for secure authentication
• 5G capable

Perfect for photography enthusiasts and professionals. The camera quality is outstanding with ProRAW and ProRes video recording capabilities.

Reason for selling: Upgrading to iPhone 15 Pro Max.

Serious buyers only. Price is slightly negotiable for quick sale.`,
    
    specifications: {
      brand: 'Apple',
      model: 'iPhone 14 Pro Max',
      storage: '256GB',
      color: 'Space Black',
      batteryHealth: '89%',
      warranty: 'Apple Care+ until March 2025'
    }
  }

  const relatedProducts = [
    {
      id: 2,
      title: 'iPhone 13 Pro 128GB',
      price: 900,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300',
      location: 'savannah'
    },
    {
      id: 3,
      title: 'Samsung Galaxy S23 Ultra',
      price: 1100,
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300',
      location: 'atlanta'
    },
    {
      id: 4,
      title: 'iPad Pro 12.9" M2',
      price: 1000,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300',
      location: 'augusta'
    }
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    )
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: `Check out this ${product.title} for $${product.price}`,
          url: window.location.href
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-card border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate('/marketplace')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                {t.backToMarketplace}
              </button>
              <span className="text-muted-foreground">/</span>
              <button
                onClick={() => navigate(`/marketplace/category/${product.category}`)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.backToCategory}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-accent transition-colors"
              >
                <Share2 className="h-4 w-4" />
                {t.share}
              </button>
              <button
                onClick={() => setIsFavorited(!isFavorited)}
                className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
                  isFavorited 
                    ? 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100' 
                    : 'hover:bg-accent'
                }`}
              >
                <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
                {isFavorited ? t.removeFromFavorites : t.addToFavorites}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              {/* Main Image */}
              <div className="relative mb-4">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.title}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={() => setShowImageModal(true)}
                  />
                  
                  {/* Image Navigation */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {product.images.length}
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      {t.featured}
                    </span>
                  )}
                  {product.urgent && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t.urgent}
                    </span>
                  )}
                  {product.negotiable && (
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {t.negotiable}
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                        index === currentImageIndex 
                          ? 'border-primary' 
                          : 'border-transparent hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Product Description */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'ar' ? 'الوصف' : 'Description'}
                </h2>
                <div className="bg-card rounded-2xl p-6 border">
                  <div className="prose max-w-none">
                    {product.description.split('\n').map((paragraph, index) => (
                      <p key={index} className="mb-4 last:mb-0 whitespace-pre-line">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Specifications */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">
                  {language === 'ar' ? 'المواصفات' : 'Specifications'}
                </h2>
                <div className="bg-card rounded-2xl p-6 border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border/50 last:border-b-0">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Product Info & Actions */}
            <div className="space-y-6">
              {/* Product Info Card */}
              <div className="bg-card rounded-2xl p-6 border sticky top-32">
                <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
                
                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl font-bold text-primary">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t.condition}</span>
                    <span className="font-medium">{t[product.condition]}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t.location}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">{product.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t.views}</span>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span className="font-medium">{product.views.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">{t.postedOn}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{product.postedDate}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setShowContactInfo(true)}
                    className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    {t.contactSeller}
                  </button>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-3 border border-primary text-primary rounded-xl font-semibold hover:bg-primary/10 transition-colors">
                      <Phone className="h-4 w-4" />
                      {t.callSeller}
                    </button>
                    <button className="flex items-center justify-center gap-2 py-3 border rounded-xl font-semibold hover:bg-accent transition-colors">
                      <Bookmark className="h-4 w-4" />
                      {t.addToWatchlist}
                    </button>
                  </div>
                </div>

                {/* Report Button */}
                <button className="w-full mt-4 text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2 py-2">
                  <Flag className="h-4 w-4" />
                  {t.reportListing}
                </button>
              </div>

              {/* Seller Info Card */}
              <div className="bg-card rounded-2xl p-6 border">
                <h3 className="text-lg font-semibold mb-4">{t.sellerInfo}</h3>
                
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={product.seller.avatar}
                    alt={product.seller.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{product.seller.name}</h4>
                      {product.seller.verified && (
                        <Shield className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t.memberSince} {product.seller.memberSince}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.totalListings}</span>
                    <span className="font-medium">{product.seller.totalListings}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.responseRate}</span>
                    <span className="font-medium">{product.seller.responseRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{t.avgResponseTime}</span>
                    <span className="font-medium">{product.seller.avgResponseTime}</span>
                  </div>
                </div>
              </div>

              {/* Safety Tips Card */}
              <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl p-6 border border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="h-5 w-5 text-yellow-600" />
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-200">{t.safetyTips}</h3>
                </div>
                <ul className="space-y-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    {t.meetInPublic}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    {t.inspectBeforePaying}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    {t.useSecurePayment}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    {t.trustYourInstincts}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">{t.relatedProducts}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300 cursor-pointer"
                  onClick={() => navigate(`/marketplace/product/${relatedProduct.id}`)}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{relatedProduct.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">
                        ${relatedProduct.price.toLocaleString()}
                      </span>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {relatedProduct.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Ad Section */}
          <AdSection type="banner" className="mt-16" language={language} />
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors z-10"
            >
              <X className="h-6 w-6" />
            </button>
            
            <img
              src={product.images[currentImageIndex]}
              alt={product.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {product.images.length}
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactInfo && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-2xl p-6 max-w-md w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">{t.contactSeller}</h3>
              <button
                onClick={() => setShowContactInfo(false)}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{product.seller.phone}</p>
                  <p className="text-sm text-muted-foreground">{t.callSeller}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{product.seller.email}</p>
                  <p className="text-sm text-muted-foreground">{t.emailSeller}</p>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <textarea
                  placeholder={t.sendMessagePlaceholder}
                  className="w-full p-3 border rounded-lg resize-none h-24 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button className="w-full mt-3 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  {t.sendMessage}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MarketplaceProduct
