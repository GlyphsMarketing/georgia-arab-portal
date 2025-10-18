import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Search, 
  Filter, 
  Grid3X3, 
  List, 
  MapPin, 
  Star,
  Heart,
  Eye,
  Share2,
  ArrowLeft,
  SlidersHorizontal,
  ChevronDown,
  Clock,
  DollarSign,
  User,
  Phone,
  MessageCircle,
  Bookmark,
  TrendingUp,
  Award,
  Shield,
  Tag,
  ShoppingBag
} from 'lucide-react'
import AdSection from '../shared/AdSection'
import Pagination from '../shared/Pagination'

const MarketplaceAll = ({ language = 'en' }) => {
  const navigate = useNavigate()
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('newest')
  const [priceRange, setPriceRange] = useState('all')
  const [condition, setCondition] = useState('all')
  const [location, setLocation] = useState('all')
  const [category, setCategory] = useState('all')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const translations = {
    en: {
      backToMarketplace: 'Back to Marketplace',
      allProducts: 'All Products',
      searchAllProducts: 'Search all products...',
      filters: 'Filters',
      sortBy: 'Sort By',
      viewMode: 'View Mode',
      gridView: 'Grid View',
      listView: 'List View',
      priceRange: 'Price Range',
      condition: 'Condition',
      location: 'Location',
      category: 'Category',
      
      // Sort options
      newest: 'Newest First',
      oldest: 'Oldest First',
      priceLowHigh: 'Price: Low to High',
      priceHighLow: 'Price: High to Low',
      mostViewed: 'Most Viewed',
      featured: 'Featured First',
      
      // Price ranges
      allPrices: 'All Prices',
      under100: 'Under $100',
      '100to500': '$100 - $500',
      '500to1000': '$500 - $1,000',
      '1000to5000': '$1,000 - $5,000',
      over5000: 'Over $5,000',
      
      // Conditions
      allConditions: 'All Conditions',
      new: 'New',
      likeNew: 'Like New',
      excellent: 'Excellent',
      good: 'Good',
      fair: 'Fair',
      
      // Locations
      allLocations: 'All Locations',
      atlanta: 'Atlanta',
      savannah: 'Savannah',
      augusta: 'Augusta',
      columbus: 'Columbus',
      macon: 'Macon',
      
      // Categories
      allCategories: 'All Categories',
      vehicles: 'Vehicles',
      realEstate: 'Real Estate',
      electronics: 'Electronics',
      fashion: 'Fashion',
      furniture: 'Furniture',
      computers: 'Computers',
      gaming: 'Gaming',
      babyKids: 'Baby & Kids',
      sports: 'Sports',
      books: 'Books',
      tools: 'Tools',
      business: 'Business',
      music: 'Music',
      cameras: 'Cameras',
      jewelry: 'Jewelry',
      other: 'Other',
      
      // Product actions
      contactSeller: 'Contact Seller',
      viewDetails: 'View Details',
      addToFavorites: 'Add to Favorites',
      share: 'Share',
      
      // Status
      verified: 'Verified Seller',
      featuredStatus: 'Featured',
      urgent: 'Urgent Sale',
      negotiable: 'Negotiable',
      
      // Stats
      results: 'results',
      views: 'views',
      postedOn: 'Posted on',
      clearFilters: 'Clear Filters'
    },
    ar: {
      backToMarketplace: 'العودة إلى السوق',
      allProducts: 'جميع المنتجات',
      searchAllProducts: 'البحث في جميع المنتجات...',
      filters: 'المرشحات',
      sortBy: 'ترتيب حسب',
      viewMode: 'وضع العرض',
      gridView: 'عرض الشبكة',
      listView: 'عرض القائمة',
      priceRange: 'نطاق السعر',
      condition: 'الحالة',
      location: 'الموقع',
      category: 'الفئة',
      
      // Sort options
      newest: 'الأحدث أولاً',
      oldest: 'الأقدم أولاً',
      priceLowHigh: 'السعر: من الأقل إلى الأعلى',
      priceHighLow: 'السعر: من الأعلى إلى الأقل',
      mostViewed: 'الأكثر مشاهدة',
      featured: 'المميز أولاً',
      
      // Price ranges
      allPrices: 'جميع الأسعار',
      under100: 'أقل من 100 دولار',
      '100to500': '100 - 500 دولار',
      '500to1000': '500 - 1000 دولار',
      '1000to5000': '1000 - 5000 دولار',
      over5000: 'أكثر من 5000 دولار',
      
      // Conditions
      allConditions: 'جميع الحالات',
      new: 'جديد',
      likeNew: 'مثل الجديد',
      excellent: 'ممتاز',
      good: 'جيد',
      fair: 'مقبول',
      
      // Locations
      allLocations: 'جميع المواقع',
      atlanta: 'أتلانتا',
      savannah: 'سافانا',
      augusta: 'أوغوستا',
      columbus: 'كولومبوس',
      macon: 'ماكون',
      
      // Categories
      allCategories: 'جميع الفئات',
      vehicles: 'المركبات',
      realEstate: 'العقارات',
      electronics: 'الإلكترونيات',
      fashion: 'الأزياء',
      furniture: 'الأثاث',
      computers: 'الكمبيوتر',
      gaming: 'الألعاب',
      babyKids: 'الأطفال',
      sports: 'الرياضة',
      books: 'الكتب',
      tools: 'الأدوات',
      business: 'الأعمال',
      music: 'الموسيقى',
      cameras: 'الكاميرات',
      jewelry: 'المجوهرات',
      other: 'أخرى',
      
      // Product actions
      contactSeller: 'اتصل بالبائع',
      viewDetails: 'عرض التفاصيل',
      addToFavorites: 'إضافة إلى المفضلة',
      share: 'مشاركة',
      
      // Status
      verified: 'بائع موثق',
      featuredStatus: 'مميز',
      urgent: 'بيع عاجل',
      negotiable: 'قابل للتفاوض',
      
      // Stats
      results: 'نتيجة',
      views: 'مشاهدة',
      postedOn: 'تم النشر في',
      clearFilters: 'مسح المرشحات'
    }
  }

  const t = translations[language]

  // Sample products data from all categories
  const sampleProducts = [
    {
      id: 1,
      title: 'iPhone 14 Pro Max 256GB',
      price: 1200,
      originalPrice: 1400,
      condition: 'excellent',
      location: 'atlanta',
      category: 'electronics',
      images: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400'],
      seller: 'Ahmed Hassan',
      verified: true,
      featured: true,
      views: 1250,
      postedDate: '2024-01-15',
      negotiable: true,
      description: 'Excellent condition iPhone 14 Pro Max with original box and accessories.'
    },
    {
      id: 2,
      title: '2020 Honda Civic LX',
      price: 22000,
      condition: 'good',
      location: 'savannah',
      category: 'vehicles',
      images: ['https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400'],
      seller: 'Omar Al-Rashid',
      verified: true,
      views: 890,
      postedDate: '2024-01-12',
      urgent: true,
      description: 'Well-maintained Honda Civic with low mileage and full service history.'
    },
    {
      id: 3,
      title: 'MacBook Pro 16" M2 Max',
      price: 2800,
      condition: 'likeNew',
      location: 'atlanta',
      category: 'computers',
      images: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400'],
      seller: 'Fatima Al-Zahra',
      verified: true,
      featured: true,
      views: 2100,
      postedDate: '2024-01-18',
      negotiable: true,
      description: 'Like new MacBook Pro with M2 Max chip, perfect for professional work.'
    },
    {
      id: 4,
      title: 'Modern Sectional Sofa',
      price: 800,
      originalPrice: 1200,
      condition: 'good',
      location: 'augusta',
      category: 'furniture',
      images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400'],
      seller: 'Yusuf Ibrahim',
      views: 456,
      postedDate: '2024-01-10',
      description: 'Comfortable sectional sofa in excellent condition, perfect for living room.'
    },
    {
      id: 5,
      title: 'PlayStation 5 Console',
      price: 500,
      condition: 'excellent',
      location: 'columbus',
      category: 'gaming',
      images: ['https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400'],
      seller: 'Khalid Mansour',
      verified: true,
      views: 1800,
      postedDate: '2024-01-16',
      urgent: true,
      description: 'PlayStation 5 console with extra controller and popular games included.'
    },
    {
      id: 6,
      title: 'Canon EOS R5 Camera',
      price: 3200,
      condition: 'excellent',
      location: 'macon',
      category: 'cameras',
      images: ['https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400'],
      seller: 'Layla Qasemi',
      verified: true,
      featured: true,
      views: 720,
      postedDate: '2024-01-14',
      negotiable: true,
      description: 'Professional camera with lens kit, perfect for photography enthusiasts.'
    },
    {
      id: 7,
      title: 'Designer Handbag Collection',
      price: 450,
      condition: 'likeNew',
      location: 'atlanta',
      category: 'fashion',
      images: ['https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400'],
      seller: 'Nadia Khalil',
      verified: true,
      views: 680,
      postedDate: '2024-01-13',
      description: 'Authentic designer handbags in excellent condition.'
    },
    {
      id: 8,
      title: 'Baby Stroller System',
      price: 280,
      originalPrice: 400,
      condition: 'good',
      location: 'savannah',
      category: 'babyKids',
      images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400'],
      seller: 'Amira Farouk',
      views: 340,
      postedDate: '2024-01-11',
      description: 'Complete baby stroller system with car seat and base.'
    }
  ]

  const filteredProducts = sampleProducts.filter(product => {
    if (searchQuery && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    if (category !== 'all' && product.category !== category) return false
    if (priceRange !== 'all') {
      const price = product.price
      switch (priceRange) {
        case 'under100': return price < 100
        case '100to500': return price >= 100 && price <= 500
        case '500to1000': return price >= 500 && price <= 1000
        case '1000to5000': return price >= 1000 && price <= 5000
        case 'over5000': return price > 5000
        default: return true
      }
    }
    if (condition !== 'all' && product.condition !== condition) return false
    if (location !== 'all' && product.location !== location) return false
    return true
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest': return new Date(b.postedDate) - new Date(a.postedDate)
      case 'oldest': return new Date(a.postedDate) - new Date(b.postedDate)
      case 'priceLowHigh': return a.price - b.price
      case 'priceHighLow': return b.price - a.price
      case 'mostViewed': return b.views - a.views
      case 'featured': return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
      default: return 0
    }
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/marketplace')}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              {t.backToMarketplace}
            </button>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-white/20 p-3 rounded-xl">
              <ShoppingBag className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{t.allProducts}</h1>
              <p className="text-white/80 mt-1">
                {sortedProducts.length} {t.results}
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
            <input
              type="text"
              placeholder={t.searchAllProducts}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="bg-card border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Left Controls */}
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                {t.filters}
                <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {/* Quick Filters */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="newest">{t.newest}</option>
                <option value="oldest">{t.oldest}</option>
                <option value="priceLowHigh">{t.priceLowHigh}</option>
                <option value="priceHighLow">{t.priceHighLow}</option>
                <option value="mostViewed">{t.mostViewed}</option>
                <option value="featured">{t.featured}</option>
              </select>
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent'
                }`}
              >
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'hover:bg-accent'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.category}</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="all">{t.allCategories}</option>
                    <option value="vehicles">{t.vehicles}</option>
                    <option value="realEstate">{t.realEstate}</option>
                    <option value="electronics">{t.electronics}</option>
                    <option value="fashion">{t.fashion}</option>
                    <option value="furniture">{t.furniture}</option>
                    <option value="computers">{t.computers}</option>
                    <option value="gaming">{t.gaming}</option>
                    <option value="babyKids">{t.babyKids}</option>
                    <option value="sports">{t.sports}</option>
                    <option value="books">{t.books}</option>
                    <option value="tools">{t.tools}</option>
                    <option value="business">{t.business}</option>
                    <option value="music">{t.music}</option>
                    <option value="cameras">{t.cameras}</option>
                    <option value="jewelry">{t.jewelry}</option>
                    <option value="other">{t.other}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.priceRange}</label>
                  <select
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="all">{t.allPrices}</option>
                    <option value="under100">{t.under100}</option>
                    <option value="100to500">{t['100to500']}</option>
                    <option value="500to1000">{t['500to1000']}</option>
                    <option value="1000to5000">{t['1000to5000']}</option>
                    <option value="over5000">{t.over5000}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.condition}</label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="all">{t.allConditions}</option>
                    <option value="new">{t.new}</option>
                    <option value="likeNew">{t.likeNew}</option>
                    <option value="excellent">{t.excellent}</option>
                    <option value="good">{t.good}</option>
                    <option value="fair">{t.fair}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.location}</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="all">{t.allLocations}</option>
                    <option value="atlanta">{t.atlanta}</option>
                    <option value="savannah">{t.savannah}</option>
                    <option value="augusta">{t.augusta}</option>
                    <option value="columbus">{t.columbus}</option>
                    <option value="macon">{t.macon}</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setCategory('all')
                      setPriceRange('all')
                      setCondition('all')
                      setLocation('all')
                      setSearchQuery('')
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-accent transition-colors"
                  >
                    {t.clearFilters}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Products Grid/List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {/* Ad Section */}
          <AdSection type="banner" className="mb-8" language={language} />

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  <div className="bg-card rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                          <Tag className="h-3 w-3" />
                          {t[product.category]}
                        </span>
                      </div>

                      {/* Status Badges */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        {product.featured && (
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                            <Star className="h-3 w-3" />
                            {t.featuredStatus}
                          </span>
                        )}
                        {product.urgent && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {t.urgent}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                          <Heart className="h-4 w-4 text-gray-600" />
                        </button>
                        <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-colors">
                          <Share2 className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {product.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-2xl font-bold text-primary">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                        {product.negotiable && (
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {t.negotiable}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {t[product.location]}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {product.views}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            {product.seller.charAt(0)}
                          </div>
                          <span className="text-sm font-medium">{product.seller}</span>
                          {product.verified && (
                            <Shield className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        
                        <button
                          onClick={() => navigate(`/marketplace/product/${product.id}`)}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                        >
                          {t.viewDetails}
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-card rounded-2xl overflow-hidden border hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Product Image */}
                    <div className="md:w-64 aspect-square md:aspect-auto relative overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {t[product.category]}
                        </span>
                      </div>

                      {/* Status Badges */}
                      <div className="absolute top-3 right-3 flex flex-col gap-2">
                        {product.featured && (
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {t.featuredStatus}
                          </span>
                        )}
                        {product.urgent && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {t.urgent}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-xl mb-2 hover:text-primary transition-colors cursor-pointer">
                            {product.title}
                          </h3>
                          <p className="text-muted-foreground mb-3 line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                        
                        <div className="flex gap-2 ml-4">
                          <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                            <Share2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-3xl font-bold text-primary">
                          ${product.price.toLocaleString()}
                        </span>
                        {product.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            ${product.originalPrice.toLocaleString()}
                          </span>
                        )}
                        {product.negotiable && (
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {t.negotiable}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Tag className="h-4 w-4" />
                            {t[product.category]}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {t[product.location]}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {product.views} {t.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {t.postedOn} {product.postedDate}
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                              {product.seller.charAt(0)}
                            </div>
                            <span className="text-sm font-medium">{product.seller}</span>
                            {product.verified && (
                              <Shield className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                          
                          <button
                            onClick={() => navigate(`/marketplace/product/${product.id}`)}
                            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                          >
                            {t.viewDetails}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(sortedProducts.length / 12)}
              onPageChange={setCurrentPage}
              language={language}
            />
          </div>

          {/* Bottom Ad */}
          <AdSection type="banner" className="mt-12" language={language} />
        </div>
      </section>
    </div>
  )
}

export default MarketplaceAll
