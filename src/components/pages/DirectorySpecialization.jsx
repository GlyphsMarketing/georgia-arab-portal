import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  Grid, 
  List,
  MapPin,
  Star,
  ArrowRight,
  ChevronRight,
  Building2,
  Utensils,
  Car,
  Heart,
  Home,
  Briefcase,
  Camera,
  ShoppingBag,
  Stethoscope,
  Wrench,
  Scale,
  Calculator,
  Shield,
  GraduationCap,
  Sparkles,
  Clock,
  Phone,
  Globe,
  Users,
  Award,
  CheckCircle,
  ArrowLeft,
  SlidersHorizontal,
  Eye
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AdSection from '../shared/AdSection'
import SearchFilter from '../shared/SearchFilter'
import Pagination from '../shared/Pagination'

const DirectorySpecialization = ({ language = 'en' }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('rating')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const navigate = useNavigate()
  const { category, subcategory, specialization } = useParams()

  const translations = {
    en: {
      backToSubcategory: 'Back to Subcategory',
      searchPlaceholder: 'Search businesses...',
      searchButton: 'Search',
      businesses: 'businesses',
      viewAll: 'View All',
      viewBusiness: 'View Business',
      contactBusiness: 'Contact Business',
      getDirections: 'Get Directions',
      callNow: 'Call Now',
      visitWebsite: 'Visit Website',
      verified: 'Verified',
      topRated: 'Top Rated',
      newBusiness: 'New',
      featured: 'Featured',
      sortBy: 'Sort By',
      rating: 'Rating',
      newest: 'Newest',
      oldest: 'Oldest',
      nameAZ: 'Name A-Z',
      nameZA: 'Name Z-A',
      filters: 'Filters',
      location: 'Location',
      priceRange: 'Price Range',
      openNow: 'Open Now',
      reviews: 'reviews',
      review: 'review',
      hours: 'Hours',
      open: 'Open',
      closed: 'Closed',
      
      // Categories
      'food-shopping': 'Food & Shopping',
      'auto-transportation': 'Auto & Transportation',
      'health-beauty': 'Health & Beauty',
      'home-services': 'Home Services',
      'professional-business': 'Professional & Business Services',
      'lifestyle-events': 'Lifestyle & Events',
      
      // Subcategories
      'restaurants-markets': 'Restaurants & Markets',
      'apparel-jewelry': 'Apparel & Jewelry',
      'cosmetics-skincare': 'Cosmetics & Skincare',
      'furniture': 'Furniture',
      'electronics': 'Electronics',
      'auto-repair': 'Auto Repair',
      'car-dealerships': 'Car Dealerships',
      'transportation': 'Transportation Services',
      'medical-services': 'Medical Services',
      'beauty-services': 'Beauty Services',
      'fitness': 'Fitness',
      'handyman': 'Handyman',
      'cleaning-babysitting': 'Cleaning & Baby-sitting',
      'home-improvement': 'Home Improvement',
      'law-firm': 'Law Firm',
      'accounting-services': 'Accounting Services',
      'insurance': 'Insurance',
      'photography-event-planner': 'Photography & Event Planner',
      'education-teaching': 'Education & Teaching',
      'entertainment': 'Entertainment'
    },
    ar: {
      backToSubcategory: 'العودة إلى الفئة الفرعية',
      searchPlaceholder: 'البحث في الأعمال...',
      searchButton: 'بحث',
      businesses: 'أعمال',
      viewAll: 'عرض الكل',
      viewBusiness: 'عرض العمل',
      contactBusiness: 'اتصل بالعمل',
      getDirections: 'الحصول على الاتجاهات',
      callNow: 'اتصل الآن',
      visitWebsite: 'زيارة الموقع',
      verified: 'موثق',
      topRated: 'الأعلى تقييماً',
      newBusiness: 'جديد',
      featured: 'مميز',
      sortBy: 'ترتيب حسب',
      rating: 'التقييم',
      newest: 'الأحدث',
      oldest: 'الأقدم',
      nameAZ: 'الاسم أ-ي',
      nameZA: 'الاسم ي-أ',
      filters: 'المرشحات',
      location: 'الموقع',
      priceRange: 'نطاق السعر',
      openNow: 'مفتوح الآن',
      reviews: 'مراجعات',
      review: 'مراجعة',
      hours: 'ساعات العمل',
      open: 'مفتوح',
      closed: 'مغلق',
      
      // Categories
      'food-shopping': 'الطعام والتسوق',
      'auto-transportation': 'السيارات والنقل',
      'health-beauty': 'الصحة والجمال',
      'home-services': 'خدمات المنزل',
      'professional-business': 'الخدمات المهنية والتجارية',
      'lifestyle-events': 'نمط الحياة والفعاليات',
      
      // Subcategories
      'restaurants-markets': 'المطاعم والأسواق',
      'apparel-jewelry': 'الملابس والمجوهرات',
      'cosmetics-skincare': 'مستحضرات التجميل والعناية بالبشرة',
      'furniture': 'الأثاث',
      'electronics': 'الإلكترونيات',
      'auto-repair': 'إصلاح السيارات',
      'car-dealerships': 'وكالات السيارات',
      'transportation': 'خدمات النقل',
      'medical-services': 'الخدمات الطبية',
      'beauty-services': 'خدمات التجميل',
      'fitness': 'اللياقة البدنية',
      'handyman': 'الحرفي',
      'cleaning-babysitting': 'التنظيف ورعاية الأطفال',
      'home-improvement': 'تحسين المنزل',
      'law-firm': 'مكتب محاماة',
      'accounting-services': 'خدمات المحاسبة',
      'insurance': 'التأمين',
      'photography-event-planner': 'التصوير وتنظيم الفعاليات',
      'education-teaching': 'التعليم والتدريس',
      'entertainment': 'الترفيه'
    }
  }

  const t = translations[language]

  // Mock business data based on specialization
  const getBusinesses = (specializationSlug) => {
    const businessesData = {
      'lebanese-restaurants': [
        {
          id: 1,
          name: 'Al-Salam Lebanese Restaurant',
          category: 'Lebanese Restaurant',
          rating: 4.8,
          reviews: 124,
          image: '/api/placeholder/300/200',
          location: 'Atlanta, GA',
          address: '1234 Peachtree St, Atlanta, GA 30309',
          phone: '(404) 555-0123',
          website: 'www.alsalam.com',
          verified: true,
          featured: true,
          hours: 'Open until 10:00 PM',
          isOpen: true,
          priceRange: '$$',
          description: 'Authentic Lebanese cuisine with traditional flavors and modern presentation'
        },
        {
          id: 2,
          name: 'Cedar Land Restaurant',
          category: 'Lebanese Restaurant',
          rating: 4.6,
          reviews: 89,
          image: '/api/placeholder/300/200',
          location: 'Marietta, GA',
          address: '567 Roswell Rd, Marietta, GA 30060',
          phone: '(770) 555-0456',
          website: 'www.cedarland.com',
          verified: true,
          topRated: true,
          hours: 'Open until 9:00 PM',
          isOpen: true,
          priceRange: '$$$',
          description: 'Family-owned Lebanese restaurant serving authentic dishes since 1995'
        },
        {
          id: 3,
          name: 'Beirut Nights',
          category: 'Lebanese Restaurant',
          rating: 4.7,
          reviews: 156,
          image: '/api/placeholder/300/200',
          location: 'Decatur, GA',
          address: '890 Clairmont Rd, Decatur, GA 30030',
          phone: '(678) 555-0789',
          website: 'www.beirutnights.com',
          verified: true,
          newBusiness: false,
          hours: 'Closed',
          isOpen: false,
          priceRange: '$$',
          description: 'Experience the flavors of Beirut in a warm, welcoming atmosphere'
        }
      ],
      'hair-salons': [
        {
          id: 4,
          name: 'Noor Beauty Salon',
          category: 'Hair Salon',
          rating: 4.9,
          reviews: 89,
          image: '/api/placeholder/300/200',
          location: 'Marietta, GA',
          address: '123 Johnson Ferry Rd, Marietta, GA 30068',
          phone: '(770) 555-0456',
          website: 'www.noorbeauty.com',
          verified: true,
          topRated: true,
          hours: 'Open until 7:00 PM',
          isOpen: true,
          priceRange: '$$',
          description: 'Professional hair styling and beauty services for the modern woman'
        },
        {
          id: 5,
          name: 'Layla Hair Studio',
          category: 'Hair Salon',
          rating: 4.5,
          reviews: 67,
          image: '/api/placeholder/300/200',
          location: 'Atlanta, GA',
          address: '456 Piedmont Ave, Atlanta, GA 30309',
          phone: '(404) 555-0234',
          website: 'www.laylahair.com',
          verified: true,
          featured: true,
          hours: 'Open until 8:00 PM',
          isOpen: true,
          priceRange: '$$$',
          description: 'Luxury hair salon specializing in cuts, color, and styling'
        }
      ]
    }

    return businessesData[specializationSlug] || []
  }

  const businesses = getBusinesses(specialization)
  const totalBusinesses = businesses.length
  const totalPages = Math.ceil(totalBusinesses / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentBusinesses = businesses.slice(startIndex, endIndex)

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const scaleOnHover = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 }
  }

  const handleBusinessClick = (businessId) => {
    navigate(`/directory/${category}/${subcategory}/${specialization}/${businessId}`)
  }

  const formatSpecializationName = (slug) => {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeInUp} className="mb-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/directory">Directory</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/directory/${category}`}>{t[category]}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={`/directory/${category}/${subcategory}`}>{t[subcategory]}</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{formatSpecializationName(specialization)}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            {/* Back Button */}
            <motion.div variants={fadeInUp} className="mb-6">
              <Button
                variant="outline"
                onClick={() => navigate(`/directory/${category}/${subcategory}`)}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.backToSubcategory}
              </Button>
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                <Building2 className="h-4 w-4 mr-2" />
                {t[subcategory]}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {formatSpecializationName(specialization)}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {totalBusinesses} {t.businesses} found in your area
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <SearchFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                searchPlaceholder={t.searchPlaceholder}
                filters={[
                  {
                    key: 'location',
                    label: t.location,
                    type: 'select',
                    options: [
                      { value: 'all', label: 'All Locations' },
                      { value: 'atlanta', label: 'Atlanta' },
                      { value: 'marietta', label: 'Marietta' },
                      { value: 'decatur', label: 'Decatur' }
                    ]
                  },
                  {
                    key: 'rating',
                    label: t.rating,
                    type: 'select',
                    options: [
                      { value: 'all', label: 'All Ratings' },
                      { value: '4+', label: '4+ Stars' },
                      { value: '3+', label: '3+ Stars' }
                    ]
                  },
                  {
                    key: 'openNow',
                    label: t.openNow,
                    type: 'checkbox'
                  }
                ]}
                sortOptions={[
                  { value: 'rating', label: t.rating },
                  { value: 'newest', label: t.newest },
                  { value: 'nameAZ', label: t.nameAZ }
                ]}
                sortBy={sortBy}
                onSortChange={setSortBy}
                viewMode={viewMode}
                onViewModeChange={setViewMode}
                language={language}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Businesses Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {currentBusinesses.length > 0 ? (
              <>
                <div className={`grid gap-8 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-4xl mx-auto'}`}>
                  {currentBusinesses.map((business, index) => (
                    <motion.div
                      key={business.id}
                      variants={fadeInUp}
                      whileHover={{ y: -5 }}
                      className="group cursor-pointer"
                      onClick={() => handleBusinessClick(business.id)}
                    >
                      <Card className={`overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                        viewMode === 'list' ? 'flex flex-row' : ''
                      }`}>
                        <div className={`relative ${viewMode === 'list' ? 'w-1/3' : ''}`}>
                          <img
                            src={business.image}
                            alt={business.name}
                            className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                              viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                            }`}
                          />
                          <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                            {business.verified && (
                              <Badge className="bg-green-500 text-white">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                {t.verified}
                              </Badge>
                            )}
                            {business.topRated && (
                              <Badge className="bg-yellow-500 text-white">
                                <Star className="h-3 w-3 mr-1" />
                                {t.topRated}
                              </Badge>
                            )}
                            {business.featured && (
                              <Badge className="bg-purple-500 text-white">
                                <Sparkles className="h-3 w-3 mr-1" />
                                {t.featured}
                              </Badge>
                            )}
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge className={`${business.isOpen ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                              {business.isOpen ? t.open : t.closed}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {business.name}
                            </h3>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="ml-1 text-sm font-medium">{business.rating}</span>
                            </div>
                          </div>
                          <p className="text-blue-600 text-sm font-medium mb-2">{business.category}</p>
                          <p className="text-gray-600 mb-3">{business.description}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            {business.location}
                            <span className="mx-2">•</span>
                            <span>{business.reviews} {business.reviews === 1 ? t.review : t.reviews}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Clock className="h-4 w-4 mr-1" />
                            {business.hours}
                            <span className="mx-2">•</span>
                            <span>{business.priceRange}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 group-hover:bg-blue-600 transition-colors">
                              <Eye className="h-4 w-4 mr-2" />
                              {t.viewBusiness}
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1">
                              <Phone className="h-4 w-4 mr-2" />
                              {t.callNow}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                <motion.div variants={fadeInUp} className="mt-12">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    itemsPerPage={itemsPerPage}
                    totalItems={totalBusinesses}
                    onPageChange={setCurrentPage}
                    onItemsPerPageChange={setItemsPerPage}
                    language={language}
                  />
                </motion.div>
              </>
            ) : (
              <motion.div variants={fadeInUp} className="text-center py-20">
                <Building2 className="h-24 w-24 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-600 mb-4">
                  No Businesses Found
                </h3>
                <p className="text-gray-500 mb-8">
                  We couldn't find any {formatSpecializationName(specialization).toLowerCase()} businesses in this area. Try adjusting your search or filters.
                </p>
                <Button onClick={() => navigate(`/directory/${category}/${subcategory}`)}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to {t[subcategory]}
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Ad Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <AdSection type="banner" size="medium" language={language} />
      </motion.div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                <Building2 className="h-4 w-4 mr-2" />
                List Your Business
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Own a {formatSpecializationName(specialization)} Business?
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Join our directory and connect with customers in the Arab community looking for your services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                >
                  <Building2 className="h-5 w-5 mr-2" />
                  Add Your Business
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold"
                  onClick={() => navigate('/directory')}
                >
                  Browse Directory
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default DirectorySpecialization
