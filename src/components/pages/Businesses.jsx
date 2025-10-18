import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Plus,
  Heart,
  Share2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Clock,
  Star,
  Building2,
  Users,
  Award,
  Verified
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import SearchFilter from '../shared/SearchFilter'
import Pagination from '../shared/Pagination'
import AdSection from '../shared/AdSection'

const Businesses = ({ language }) => {
  const [searchValue, setSearchValue] = useState('')
  const [activeFilters, setActiveFilters] = useState({})
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [activeCategory, setActiveCategory] = useState('all')

  const translations = {
    en: {
      title: 'Business Directory',
      subtitle: 'Discover Arab businesses and services in Georgia',
      searchPlaceholder: 'Search businesses, services, categories...',
      addBusiness: 'Add Business',
      category: 'Category',
      location: 'Location',
      rating: 'Rating',
      businessServices: 'Services',
      sortBy: 'Sort By',
      newest: 'Newest',
      oldest: 'Oldest',
      ratingHighLow: 'Rating: High to Low',
      ratingLowHigh: 'Rating: Low to High',
      nameAZ: 'Name: A to Z',
      nameZA: 'Name: Z to A',
      allCategories: 'All Categories',
      restaurants: 'Restaurants',
      retail: 'Retail & Shopping',
      services: 'Services',
      healthcare: 'Healthcare',
      automotive: 'Automotive',
      education: 'Education',
      realestate: 'Real Estate',
      finance: 'Finance',
      technology: 'Technology',
      entertainment: 'Entertainment',
      contact: 'Contact Business',
      favorite: 'Add to Favorites',
      share: 'Share',
      viewDetails: 'View Details',
      website: 'Visit Website',
      directions: 'Get Directions',
      reviews: 'reviews',
      review: 'review',
      hours: 'Hours',
      open: 'Open',
      closed: 'Closed',
      opens: 'Opens',
      closes: 'Closes',
      at: 'at',
      verified: 'Verified Business',
      featured: 'Featured',
      newBusiness: 'New Business',
      topRated: 'Top Rated',
      established: 'Established',
      employees: 'employees',
      yearsInBusiness: 'years in business'
    },
    ar: {
      title: 'دليل الأعمال',
      subtitle: 'اكتشف الأعمال والخدمات العربية في جورجيا',
      searchPlaceholder: 'البحث عن الأعمال والخدمات والفئات...',
      addBusiness: 'إضافة عمل',
      category: 'الفئة',
      location: 'الموقع',
      rating: 'التقييم',
      businessServices: 'الخدمات',
      sortBy: 'ترتيب حسب',
      newest: 'الأحدث',
      oldest: 'الأقدم',
      ratingHighLow: 'التقييم: من الأعلى إلى الأقل',
      ratingLowHigh: 'التقييم: من الأقل إلى الأعلى',
      nameAZ: 'الاسم: أ إلى ي',
      nameZA: 'الاسم: ي إلى أ',
      allCategories: 'جميع الفئات',
      restaurants: 'المطاعم',
      retail: 'التجزئة والتسوق',
      services: 'الخدمات',
      healthcare: 'الرعاية الصحية',
      automotive: 'السيارات',
      education: 'التعليم',
      realestate: 'العقارات',
      finance: 'المالية',
      technology: 'التكنولوجيا',
      entertainment: 'الترفيه',
      contact: 'اتصل بالعمل',
      favorite: 'إضافة للمفضلة',
      share: 'مشاركة',
      viewDetails: 'عرض التفاصيل',
      website: 'زيارة الموقع',
      directions: 'الحصول على الاتجاهات',
      reviews: 'مراجعات',
      review: 'مراجعة',
      hours: 'ساعات العمل',
      open: 'مفتوح',
      closed: 'مغلق',
      opens: 'يفتح',
      closes: 'يغلق',
      at: 'في',
      verified: 'عمل موثق',
      featured: 'مميز',
      newBusiness: 'عمل جديد',
      topRated: 'الأعلى تقييماً',
      established: 'تأسس',
      employees: 'موظفين',
      yearsInBusiness: 'سنوات في العمل'
    }
  }

  const t = translations[language]

  const categories = [
    { id: 'all', name: t.allCategories, icon: Building2, count: 250 },
    { id: 'restaurants', name: t.restaurants, icon: Building2, count: 45 },
    { id: 'retail', name: t.retail, icon: Building2, count: 38 },
    { id: 'services', name: t.services, icon: Building2, count: 52 },
    { id: 'healthcare', name: t.healthcare, icon: Building2, count: 28 },
    { id: 'automotive', name: t.automotive, icon: Building2, count: 22 },
    { id: 'education', name: t.education, icon: Building2, count: 18 },
    { id: 'realestate', name: t.realestate, icon: Building2, count: 15 },
    { id: 'finance', name: t.finance, icon: Building2, count: 12 },
    { id: 'technology', name: t.technology, icon: Building2, count: 20 }
  ]

  const filters = [
    {
      key: 'category',
      label: t.category,
      type: 'select',
      placeholder: t.category,
      options: categories.slice(1).map(cat => ({ value: cat.id, label: cat.name }))
    },
    {
      key: 'location',
      label: t.location,
      type: 'select',
      placeholder: t.location,
      options: [
        { value: 'atlanta', label: 'Atlanta' },
        { value: 'marietta', label: 'Marietta' },
        { value: 'duluth', label: 'Duluth' },
        { value: 'roswell', label: 'Roswell' },
        { value: 'alpharetta', label: 'Alpharetta' },
        { value: 'sandy-springs', label: 'Sandy Springs' }
      ]
    },
    {
      key: 'rating',
      label: t.rating,
      type: 'select',
      placeholder: t.rating,
      options: [
        { value: '4', label: '4+ Stars' },
        { value: '3', label: '3+ Stars' },
        { value: '2', label: '2+ Stars' },
        { value: '1', label: '1+ Stars' }
      ]
    },
    {
      key: 'services',
      label: t.services,
      type: 'checkbox',
      options: [
        { value: 'delivery', label: 'Delivery' },
        { value: 'takeout', label: 'Takeout' },
        { value: 'parking', label: 'Parking Available' },
        { value: 'wheelchair', label: 'Wheelchair Accessible' },
        { value: 'wifi', label: 'Free WiFi' },
        { value: 'credit-cards', label: 'Credit Cards Accepted' }
      ]
    }
  ]

  const sampleBusinesses = [
    {
      id: 1,
      name: 'Al-Salam Restaurant',
      category: 'restaurants',
      categoryName: 'Restaurant',
      location: 'Atlanta, GA',
      address: '123 Main St, Atlanta, GA 30309',
      phone: '+1 (555) 123-4567',
      email: 'info@alsalam.com',
      website: 'www.alsalam.com',
      rating: 4.8,
      reviewCount: 124,
      description: 'Authentic Middle Eastern cuisine with traditional recipes passed down through generations.',
      services: ['Delivery', 'Takeout', 'Dine-in', 'Catering'],
      hours: {
        current: 'Open',
        today: 'Open until 10:00 PM',
        schedule: 'Mon-Sun: 11:00 AM - 10:00 PM'
      },
      verified: true,
      featured: true,
      established: 2015,
      employees: '10-25',
      images: ['/api/placeholder/400/300']
    },
    {
      id: 2,
      name: 'Middle East Market',
      category: 'retail',
      categoryName: 'Grocery Store',
      location: 'Marietta, GA',
      address: '456 Oak Ave, Marietta, GA 30060',
      phone: '+1 (555) 987-6543',
      email: 'contact@middleeastmarket.com',
      website: 'www.middleeastmarket.com',
      rating: 4.9,
      reviewCount: 89,
      description: 'Your one-stop shop for Middle Eastern groceries, spices, and specialty items.',
      services: ['Delivery', 'Parking', 'Credit Cards'],
      hours: {
        current: 'Open',
        today: 'Open until 9:00 PM',
        schedule: 'Mon-Sat: 9:00 AM - 9:00 PM, Sun: 10:00 AM - 7:00 PM'
      },
      verified: true,
      featured: false,
      topRated: true,
      established: 2010,
      employees: '5-10',
      images: ['/api/placeholder/400/300']
    },
    {
      id: 3,
      name: 'Habibi Auto Repair',
      category: 'automotive',
      categoryName: 'Auto Service',
      location: 'Duluth, GA',
      address: '789 Elm St, Duluth, GA 30096',
      phone: '+1 (555) 456-7890',
      email: 'service@habibiauto.com',
      website: 'www.habibiauto.com',
      rating: 4.7,
      reviewCount: 156,
      description: 'Professional automotive repair and maintenance services with honest pricing.',
      services: ['Parking', 'Credit Cards', 'Warranty'],
      hours: {
        current: 'Closed',
        today: 'Opens tomorrow at 8:00 AM',
        schedule: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM'
      },
      verified: true,
      featured: false,
      established: 2018,
      employees: '3-5',
      images: ['/api/placeholder/400/300']
    },
    {
      id: 4,
      name: 'Arabic Learning Center',
      category: 'education',
      categoryName: 'Education',
      location: 'Roswell, GA',
      address: '321 Pine St, Roswell, GA 30075',
      phone: '+1 (555) 321-0987',
      email: 'info@arabiclearning.com',
      website: 'www.arabiclearning.com',
      rating: 4.6,
      reviewCount: 67,
      description: 'Learn Arabic language and culture with experienced native speakers.',
      services: ['Parking', 'WiFi', 'Online Classes'],
      hours: {
        current: 'Open',
        today: 'Open until 8:00 PM',
        schedule: 'Mon-Thu: 4:00 PM - 8:00 PM, Sat: 10:00 AM - 4:00 PM'
      },
      verified: false,
      featured: false,
      newBusiness: true,
      established: 2022,
      employees: '1-3',
      images: ['/api/placeholder/400/300']
    },
    {
      id: 5,
      name: 'Noor Medical Clinic',
      category: 'healthcare',
      categoryName: 'Healthcare',
      location: 'Alpharetta, GA',
      address: '654 Maple Dr, Alpharetta, GA 30009',
      phone: '+1 (555) 654-3210',
      email: 'appointments@noormedical.com',
      website: 'www.noormedical.com',
      rating: 4.9,
      reviewCount: 203,
      description: 'Comprehensive healthcare services with Arabic-speaking medical professionals.',
      services: ['Parking', 'Wheelchair Accessible', 'Insurance Accepted'],
      hours: {
        current: 'Open',
        today: 'Open until 6:00 PM',
        schedule: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
      },
      verified: true,
      featured: true,
      topRated: true,
      established: 2012,
      employees: '25-50',
      images: ['/api/placeholder/400/300']
    },
    {
      id: 6,
      name: 'Barakah Financial Services',
      category: 'finance',
      categoryName: 'Financial Services',
      location: 'Sandy Springs, GA',
      address: '987 Cedar Ln, Sandy Springs, GA 30328',
      phone: '+1 (555) 789-0123',
      email: 'info@barakahfinance.com',
      website: 'www.barakahfinance.com',
      rating: 4.5,
      reviewCount: 91,
      description: 'Islamic banking and financial services compliant with Sharia principles.',
      services: ['Parking', 'Credit Cards', 'Consultation'],
      hours: {
        current: 'Open',
        today: 'Open until 5:00 PM',
        schedule: 'Mon-Fri: 9:00 AM - 5:00 PM'
      },
      verified: true,
      featured: false,
      established: 2016,
      employees: '10-25',
      images: ['/api/placeholder/400/300']
    }
  ]

  const handleFilterChange = (key, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleClearFilters = () => {
    setActiveFilters({})
  }

  const filteredBusinesses = activeCategory === 'all' 
    ? sampleBusinesses 
    : sampleBusinesses.filter(business => business.category === activeCategory)

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
                    activeCategory === category.id ? 'ring-2 ring-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <CardContent className="p-4 text-center">
                    <category.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h3 className="font-medium text-sm mb-1">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">{category.count}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ad Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <AdSection type="banner" size="medium" language={language} />
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button className="lg:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              {t.addBusiness}
            </Button>
          </div>

          <SearchFilter
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            filters={filters}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            language={language}
          />
        </motion.div>

        {/* Businesses Grid */}
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredBusinesses.map((business, index) => (
                  <motion.div
                    key={business.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                        
                        {/* Business Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {business.verified && (
                            <Badge className="bg-blue-500 text-blue-50 gap-1">
                              <Verified className="h-3 w-3" />
                              {t.verified}
                            </Badge>
                          )}
                          {business.featured && (
                            <Badge className="bg-yellow-500 text-yellow-50">
                              {t.featured}
                            </Badge>
                          )}
                          {business.topRated && (
                            <Badge className="bg-green-500 text-green-50 gap-1">
                              <Award className="h-3 w-3" />
                              {t.topRated}
                            </Badge>
                          )}
                          {business.newBusiness && (
                            <Badge className="bg-purple-500 text-purple-50">
                              {t.newBusiness}
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-2 right-2 flex gap-2">
                          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Hours Status */}
                        <div className="absolute bottom-2 left-2">
                          <Badge 
                            variant={business.hours.current === 'Open' ? 'default' : 'secondary'}
                            className={business.hours.current === 'Open' ? 'bg-green-500' : 'bg-red-500'}
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            {business.hours.current}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg mb-1">
                              {business.name}
                            </h3>
                            <Badge variant="outline" className="mb-2">
                              {business.categoryName}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {business.location}
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-4 w-4 ${
                                    i < Math.floor(business.rating)
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm font-medium">{business.rating}</span>
                            <span className="text-sm text-muted-foreground">
                              ({business.reviewCount} {business.reviewCount === 1 ? t.review : t.reviews})
                            </span>
                          </div>
                          
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {business.hours.today}
                          </div>

                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{t.established} {business.established}</span>
                            <span>{business.employees} {t.employees}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {business.description}
                        </p>

                        {/* Services */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {business.services.slice(0, 3).map((service, serviceIndex) => (
                            <Badge key={serviceIndex} variant="secondary" className="text-xs">
                              {service}
                            </Badge>
                          ))}
                          {business.services.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{business.services.length - 3}
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">
                            {t.viewDetails}
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4 mr-1" />
                            {t.contact}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pagination */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <Pagination
                currentPage={currentPage}
                totalPages={8}
                totalItems={filteredBusinesses.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
                language={language}
              />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-80">
            <div className="sticky top-24 space-y-6">
              <AdSection type="sidebar" size="large" language={language} />
              <AdSection type="card" size="medium" language={language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Businesses
