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
  Car,
  Home,
  Smartphone,
  Shirt,
  Sofa,
  Laptop,
  Gamepad2,
  Baby,
  Dumbbell,
  Book,
  Wrench,
  Briefcase,
  Music,
  Camera,
  Watch,
  Gem,
  ShoppingBag,
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react'
import AdSection from '../shared/AdSection'

const Marketplace = ({ language = 'en' }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const navigate = useNavigate()

  const translations = {
    en: {
      title: 'Marketplace',
      subtitle: 'Buy and sell items within the Arab community',
      searchPlaceholder: 'Search for products, brands, or keywords...',
      allCategories: 'All Categories',
      browseAll: 'Browse All Products',
      location: 'Location',
      allLocations: 'All Locations',
      atlanta: 'Atlanta',
      savannah: 'Savannah',
      augusta: 'Augusta',
      columbus: 'Columbus',
      macon: 'Macon',
      featured: 'Featured',
      trending: 'Trending',
      recent: 'Recent',
      popular: 'Popular',
      viewAll: 'View All',
      items: 'items',
      categories: 'Categories',
      
      // Categories
      vehicles: 'Vehicles & Transportation',
      realEstate: 'Real Estate',
      electronics: 'Electronics & Technology',
      fashion: 'Fashion & Clothing',
      furniture: 'Furniture & Home',
      computers: 'Computers & Laptops',
      gaming: 'Gaming & Entertainment',
      babyKids: 'Baby & Kids',
      sports: 'Sports & Fitness',
      books: 'Books & Education',
      tools: 'Tools & Equipment',
      business: 'Business & Industrial',
      music: 'Music & Instruments',
      cameras: 'Cameras & Photography',
      jewelry: 'Jewelry & Watches',
      other: 'Other Items',

      // Category descriptions
      vehiclesDesc: 'Cars, motorcycles, boats, and auto parts',
      realEstateDesc: 'Houses, apartments, and commercial properties',
      electronicsDesc: 'Phones, tablets, TVs, and gadgets',
      fashionDesc: 'Clothing, shoes, bags, and accessories',
      furnitureDesc: 'Home furniture, decor, and appliances',
      computersDesc: 'Laptops, desktops, and computer accessories',
      gamingDesc: 'Gaming consoles, games, and accessories',
      babyKidsDesc: 'Baby gear, toys, and children\'s items',
      sportsDesc: 'Sports equipment and fitness gear',
      booksDesc: 'Books, educational materials, and courses',
      toolsDesc: 'Tools, machinery, and equipment',
      businessDesc: 'Business equipment and industrial items',
      musicDesc: 'Musical instruments and audio equipment',
      camerasDesc: 'Cameras, lenses, and photography gear',
      jewelryDesc: 'Jewelry, watches, and luxury accessories',
      otherDesc: 'Miscellaneous items and collectibles'
    },
    ar: {
      title: 'السوق',
      subtitle: 'شراء وبيع العناصر داخل المجتمع العربي',
      searchPlaceholder: 'البحث عن المنتجات أو العلامات التجارية أو الكلمات المفتاحية...',
      allCategories: 'جميع الفئات',
      browseAll: 'تصفح جميع المنتجات',
      location: 'الموقع',
      allLocations: 'جميع المواقع',
      atlanta: 'أتلانتا',
      savannah: 'سافانا',
      augusta: 'أوغوستا',
      columbus: 'كولومبوس',
      macon: 'ماكون',
      featured: 'مميز',
      trending: 'رائج',
      recent: 'حديث',
      popular: 'شائع',
      viewAll: 'عرض الكل',
      items: 'عنصر',
      categories: 'الفئات',
      
      // Categories
      vehicles: 'المركبات والنقل',
      realEstate: 'العقارات',
      electronics: 'الإلكترونيات والتكنولوجيا',
      fashion: 'الأزياء والملابس',
      furniture: 'الأثاث والمنزل',
      computers: 'أجهزة الكمبيوتر والمحمول',
      gaming: 'الألعاب والترفيه',
      babyKids: 'الأطفال والرضع',
      sports: 'الرياضة واللياقة',
      books: 'الكتب والتعليم',
      tools: 'الأدوات والمعدات',
      business: 'الأعمال والصناعة',
      music: 'الموسيقى والآلات',
      cameras: 'الكاميرات والتصوير',
      jewelry: 'المجوهرات والساعات',
      other: 'عناصر أخرى',

      // Category descriptions
      vehiclesDesc: 'السيارات والدراجات النارية والقوارب وقطع غيار السيارات',
      realEstateDesc: 'المنازل والشقق والعقارات التجارية',
      electronicsDesc: 'الهواتف والأجهزة اللوحية وأجهزة التلفزيون والأدوات',
      fashionDesc: 'الملابس والأحذية والحقائب والإكسسوارات',
      furnitureDesc: 'أثاث المنزل والديكور والأجهزة',
      computersDesc: 'أجهزة الكمبيوتر المحمولة والمكتبية وملحقات الكمبيوتر',
      gamingDesc: 'وحدات تحكم الألعاب والألعاب والملحقات',
      babyKidsDesc: 'معدات الأطفال والألعاب وعناصر الأطفال',
      sportsDesc: 'المعدات الرياضية ومعدات اللياقة البدنية',
      booksDesc: 'الكتب والمواد التعليمية والدورات',
      toolsDesc: 'الأدوات والآلات والمعدات',
      businessDesc: 'معدات الأعمال والعناصر الصناعية',
      musicDesc: 'الآلات الموسيقية ومعدات الصوت',
      camerasDesc: 'الكاميرات والعدسات ومعدات التصوير',
      jewelryDesc: 'المجوهرات والساعات والإكسسوارات الفاخرة',
      otherDesc: 'عناصر متنوعة ومقتنيات'
    }
  }

  const t = translations[language]

  const categories = [
    {
      id: 'vehicles',
      name: t.vehicles,
      description: t.vehiclesDesc,
      icon: Car,
      color: 'from-blue-500 to-blue-600',
      count: 1247,
      trending: true
    },
    {
      id: 'real-estate',
      name: t.realEstate,
      description: t.realEstateDesc,
      icon: Home,
      color: 'from-green-500 to-green-600',
      count: 892,
      featured: true
    },
    {
      id: 'electronics',
      name: t.electronics,
      description: t.electronicsDesc,
      icon: Smartphone,
      color: 'from-purple-500 to-purple-600',
      count: 2156,
      trending: true
    },
    {
      id: 'fashion',
      name: t.fashion,
      description: t.fashionDesc,
      icon: Shirt,
      color: 'from-pink-500 to-pink-600',
      count: 1834,
      popular: true
    },
    {
      id: 'furniture',
      name: t.furniture,
      description: t.furnitureDesc,
      icon: Sofa,
      color: 'from-orange-500 to-orange-600',
      count: 967,
      featured: true
    },
    {
      id: 'computers',
      name: t.computers,
      description: t.computersDesc,
      icon: Laptop,
      color: 'from-indigo-500 to-indigo-600',
      count: 743,
      trending: true
    },
    {
      id: 'gaming',
      name: t.gaming,
      description: t.gamingDesc,
      icon: Gamepad2,
      color: 'from-red-500 to-red-600',
      count: 521,
      popular: true
    },
    {
      id: 'baby-kids',
      name: t.babyKids,
      description: t.babyKidsDesc,
      icon: Baby,
      color: 'from-yellow-500 to-yellow-600',
      count: 689,
      recent: true
    },
    {
      id: 'sports',
      name: t.sports,
      description: t.sportsDesc,
      icon: Dumbbell,
      color: 'from-teal-500 to-teal-600',
      count: 456,
      popular: true
    },
    {
      id: 'books',
      name: t.books,
      description: t.booksDesc,
      icon: Book,
      color: 'from-cyan-500 to-cyan-600',
      count: 334,
      recent: true
    },
    {
      id: 'tools',
      name: t.tools,
      description: t.toolsDesc,
      icon: Wrench,
      color: 'from-gray-500 to-gray-600',
      count: 278,
      featured: true
    },
    {
      id: 'business',
      name: t.business,
      description: t.businessDesc,
      icon: Briefcase,
      color: 'from-slate-500 to-slate-600',
      count: 189,
      trending: true
    },
    {
      id: 'music',
      name: t.music,
      description: t.musicDesc,
      icon: Music,
      color: 'from-violet-500 to-violet-600',
      count: 156,
      popular: true
    },
    {
      id: 'cameras',
      name: t.cameras,
      description: t.camerasDesc,
      icon: Camera,
      color: 'from-emerald-500 to-emerald-600',
      count: 123,
      recent: true
    },
    {
      id: 'jewelry',
      name: t.jewelry,
      description: t.jewelryDesc,
      icon: Watch,
      color: 'from-amber-500 to-amber-600',
      count: 98,
      featured: true
    },
    {
      id: 'other',
      name: t.other,
      description: t.otherDesc,
      icon: ShoppingBag,
      color: 'from-rose-500 to-rose-600',
      count: 445,
      popular: true
    }
  ]

  const locations = [
    { value: 'all', label: t.allLocations },
    { value: 'atlanta', label: t.atlanta },
    { value: 'savannah', label: t.savannah },
    { value: 'augusta', label: t.augusta },
    { value: 'columbus', label: t.columbus },
    { value: 'macon', label: t.macon }
  ]

  const handleCategoryClick = (categoryId) => {
    navigate(`/marketplace/category/${categoryId}`)
  }

  const handleBrowseAll = () => {
    navigate('/marketplace/all')
  }

  const getBadge = (category) => {
    if (category.featured) return { text: t.featured, color: 'bg-green-500' }
    if (category.trending) return { text: t.trending, color: 'bg-blue-500' }
    if (category.popular) return { text: t.popular, color: 'bg-purple-500' }
    if (category.recent) return { text: t.recent, color: 'bg-orange-500' }
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl opacity-90 mb-8">{t.subtitle}</p>
          </motion.div>

          {/* Search and Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                </div>

                {/* Location Filter */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="pl-10 pr-8 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 appearance-none min-w-[180px]"
                  >
                    {locations.map((location) => (
                      <option key={location.value} value={location.value} className="text-gray-900">
                        {location.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Browse All Button */}
                <button
                  onClick={handleBrowseAll}
                  className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-white/90 transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <ShoppingBag className="h-5 w-5" />
                  {t.browseAll}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.categories}</h2>
            <p className="text-muted-foreground text-lg">
              {language === 'ar' 
                ? 'اختر فئة لاستكشاف المنتجات المتاحة' 
                : 'Choose a category to explore available products'
              }
            </p>
          </motion.div>

          {/* Ad Section */}
          <AdSection 
            type="banner" 
            className="mb-12"
            language={language}
          />

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const badge = getBadge(category)
              const IconComponent = category.icon

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  onClick={() => handleCategoryClick(category.id)}
                  className="group cursor-pointer"
                >
                  <div className="bg-card hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border hover:border-primary/20 group-hover:scale-[1.02]">
                    {/* Category Header */}
                    <div className={`bg-gradient-to-br ${category.color} p-6 text-white relative overflow-hidden`}>
                      <div className="absolute top-2 right-2 opacity-10">
                        <IconComponent className="h-16 w-16" />
                      </div>
                      
                      {badge && (
                        <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${badge.color} mb-3`}>
                          {badge.text === t.trending && <TrendingUp className="h-3 w-3 mr-1" />}
                          {badge.text === t.recent && <Clock className="h-3 w-3 mr-1" />}
                          {badge.text === t.featured && <Star className="h-3 w-3 mr-1" />}
                          {badge.text}
                        </div>
                      )}
                      
                      <div className="relative z-10">
                        <IconComponent className="h-8 w-8 mb-3" />
                        <h3 className="font-bold text-lg mb-2 line-clamp-2">{category.name}</h3>
                        <div className="flex items-center gap-2 text-white/90">
                          <span className="text-2xl font-bold">{category.count.toLocaleString()}</span>
                          <span className="text-sm">{t.items}</span>
                        </div>
                      </div>
                    </div>

                    {/* Category Content */}
                    <div className="p-6">
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Eye className="h-4 w-4" />
                          <span>{Math.floor(category.count * 0.1)}k {language === 'ar' ? 'مشاهدة' : 'views'}</span>
                        </div>
                        
                        <div className="flex items-center gap-1 text-primary group-hover:translate-x-1 transition-transform">
                          <span className="text-sm font-medium">{t.viewAll}</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Ad Section */}
          <AdSection 
            type="banner" 
            className="mt-16"
            language={language}
          />

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {categories.reduce((sum, cat) => sum + cat.count, 0).toLocaleString()}
                </div>
                <div className="text-muted-foreground">
                  {language === 'ar' ? 'إجمالي المنتجات' : 'Total Products'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {categories.length}
                </div>
                <div className="text-muted-foreground">
                  {language === 'ar' ? 'الفئات' : 'Categories'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  15k+
                </div>
                <div className="text-muted-foreground">
                  {language === 'ar' ? 'المستخدمون النشطون' : 'Active Users'}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  98%
                </div>
                <div className="text-muted-foreground">
                  {language === 'ar' ? 'رضا العملاء' : 'Satisfaction'}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Marketplace
