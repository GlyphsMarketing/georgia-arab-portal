import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
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
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AdSection from '../shared/AdSection'

const Directory = ({ language = 'en' }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [viewMode, setViewMode] = useState('grid')
  const navigate = useNavigate()
  const { category, subcategory, specialization } = useParams()

  const translations = {
    en: {
      title: 'Arab Directory',
      subtitle: 'Discover Arab businesses and services across Georgia',
      searchPlaceholder: 'Search businesses, services, categories...',
      searchButton: 'Search',
      allCategories: 'All Categories',
      viewAll: 'View All',
      businesses: 'businesses',
      members: 'members',
      verified: 'Verified',
      topRated: 'Top Rated',
      newBusiness: 'New',
      featured: 'Featured',
      
      // Main Categories
      foodShopping: 'Food & Shopping',
      autoTransportation: 'Auto & Transportation',
      healthBeauty: 'Health & Beauty',
      homeServices: 'Home Services',
      professionalBusiness: 'Professional & Business Services',
      lifestyleEvents: 'Lifestyle & Events',
      
      // Food & Shopping Subcategories
      restaurantsMarkets: 'Restaurants & Markets',
      apparelJewelry: 'Apparel & Jewelry',
      cosmeticsSkincare: 'Cosmetics & Skincare',
      furniture: 'Furniture',
      electronics: 'Electronics',
      
      // Auto & Transportation Subcategories
      autoRepair: 'Auto Repair',
      carDealerships: 'Car Dealerships',
      transportation: 'Transportation Services',
      
      // Health & Beauty Subcategories
      medicalServices: 'Medical Services',
      beautyServices: 'Beauty Services',
      fitness: 'Fitness',
      
      // Home Services Subcategories
      handyman: 'Handyman',
      cleaningBabysitting: 'Cleaning & Baby-sitting',
      homeImprovement: 'Home Improvement',
      
      // Professional & Business Services Subcategories
      lawFirm: 'Law Firm',
      accountingServices: 'Accounting Services',
      insurance: 'Insurance',
      
      // Lifestyle & Events Subcategories
      photographyEventPlanner: 'Photography & Event Planner',
      educationTeaching: 'Education & Teaching',
      entertainment: 'Entertainment',
      
      // Actions
      exploreCategory: 'Explore Category',
      viewBusiness: 'View Business',
      contactBusiness: 'Contact Business',
      getDirections: 'Get Directions',
      callNow: 'Call Now',
      visitWebsite: 'Visit Website',
      
      // Stats
      totalBusinesses: 'Total Businesses',
      activeListings: 'Active Listings',
      verifiedBusinesses: 'Verified Businesses',
      communityMembers: 'Community Members'
    },
    ar: {
      title: 'الدليل العربي',
      subtitle: 'اكتشف الأعمال والخدمات العربية في جميع أنحاء جورجيا',
      searchPlaceholder: 'البحث عن الأعمال والخدمات والفئات...',
      searchButton: 'بحث',
      allCategories: 'جميع الفئات',
      viewAll: 'عرض الكل',
      businesses: 'أعمال',
      members: 'أعضاء',
      verified: 'موثق',
      topRated: 'الأعلى تقييماً',
      newBusiness: 'جديد',
      featured: 'مميز',
      
      // Main Categories
      foodShopping: 'الطعام والتسوق',
      autoTransportation: 'السيارات والنقل',
      healthBeauty: 'الصحة والجمال',
      homeServices: 'خدمات المنزل',
      professionalBusiness: 'الخدمات المهنية والتجارية',
      lifestyleEvents: 'نمط الحياة والفعاليات',
      
      // Food & Shopping Subcategories
      restaurantsMarkets: 'المطاعم والأسواق',
      apparelJewelry: 'الملابس والمجوهرات',
      cosmeticsSkincare: 'مستحضرات التجميل والعناية بالبشرة',
      furniture: 'الأثاث',
      electronics: 'الإلكترونيات',
      
      // Auto & Transportation Subcategories
      autoRepair: 'إصلاح السيارات',
      carDealerships: 'وكالات السيارات',
      transportation: 'خدمات النقل',
      
      // Health & Beauty Subcategories
      medicalServices: 'الخدمات الطبية',
      beautyServices: 'خدمات التجميل',
      fitness: 'اللياقة البدنية',
      
      // Home Services Subcategories
      handyman: 'الحرفي',
      cleaningBabysitting: 'التنظيف ورعاية الأطفال',
      homeImprovement: 'تحسين المنزل',
      
      // Professional & Business Services Subcategories
      lawFirm: 'مكتب محاماة',
      accountingServices: 'خدمات المحاسبة',
      insurance: 'التأمين',
      
      // Lifestyle & Events Subcategories
      photographyEventPlanner: 'التصوير وتنظيم الفعاليات',
      educationTeaching: 'التعليم والتدريس',
      entertainment: 'الترفيه',
      
      // Actions
      exploreCategory: 'استكشف الفئة',
      viewBusiness: 'عرض العمل',
      contactBusiness: 'اتصل بالعمل',
      getDirections: 'الحصول على الاتجاهات',
      callNow: 'اتصل الآن',
      visitWebsite: 'زيارة الموقع',
      
      // Stats
      totalBusinesses: 'إجمالي الأعمال',
      activeListings: 'القوائم النشطة',
      verifiedBusinesses: 'الأعمال الموثقة',
      communityMembers: 'أعضاء المجتمع'
    }
  }

  const t = translations[language]

  // Directory Structure Data
  const directoryCategories = [
    {
      id: 'food-shopping',
      name: t.foodShopping,
      icon: Utensils,
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      businessCount: 285,
      subcategories: [
        {
          id: 'restaurants-markets',
          name: t.restaurantsMarkets,
          icon: Utensils,
          businessCount: 125,
          specializations: [
            'Lebanese Restaurants',
            'Syrian Restaurants', 
            'Egyptian Restaurants',
            'Halal Markets',
            'Middle Eastern Groceries',
            'Bakeries'
          ]
        },
        {
          id: 'apparel-jewelry',
          name: t.apparelJewelry,
          icon: ShoppingBag,
          businessCount: 68,
          specializations: [
            'Traditional Clothing',
            'Modern Fashion',
            'Gold Jewelry',
            'Wedding Dresses',
            'Accessories'
          ]
        },
        {
          id: 'cosmetics-skincare',
          name: t.cosmeticsSkincare,
          icon: Sparkles,
          businessCount: 42,
          specializations: [
            'Natural Cosmetics',
            'Skincare Products',
            'Perfumes',
            'Hair Care',
            'Beauty Supplies'
          ]
        },
        {
          id: 'furniture',
          name: t.furniture,
          icon: Home,
          businessCount: 35,
          specializations: [
            'Living Room Furniture',
            'Bedroom Sets',
            'Kitchen Furniture',
            'Office Furniture',
            'Antiques'
          ]
        },
        {
          id: 'electronics',
          name: t.electronics,
          icon: Sparkles,
          businessCount: 15,
          specializations: [
            'Mobile Phones',
            'Computers',
            'Home Electronics',
            'Audio Systems',
            'Repair Services'
          ]
        }
      ]
    },
    {
      id: 'auto-transportation',
      name: t.autoTransportation,
      icon: Car,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      businessCount: 156,
      subcategories: [
        {
          id: 'auto-repair',
          name: t.autoRepair,
          icon: Wrench,
          businessCount: 89,
          specializations: [
            'General Auto Repair',
            'Engine Repair',
            'Transmission',
            'Brakes',
            'Oil Change',
            'Tires'
          ]
        },
        {
          id: 'car-dealerships',
          name: t.carDealerships,
          icon: Car,
          businessCount: 45,
          specializations: [
            'Used Cars',
            'New Cars',
            'Luxury Cars',
            'Trucks',
            'Motorcycles'
          ]
        },
        {
          id: 'transportation',
          name: t.transportation,
          icon: Car,
          businessCount: 22,
          specializations: [
            'Taxi Services',
            'Ride Share',
            'Moving Services',
            'Delivery',
            'Airport Shuttle'
          ]
        }
      ]
    },
    {
      id: 'health-beauty',
      name: t.healthBeauty,
      icon: Heart,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      businessCount: 198,
      subcategories: [
        {
          id: 'medical-services',
          name: t.medicalServices,
          icon: Stethoscope,
          businessCount: 95,
          specializations: [
            'Family Medicine',
            'Dentistry',
            'Pediatrics',
            'Cardiology',
            'Dermatology',
            'Pharmacy'
          ]
        },
        {
          id: 'beauty-services',
          name: t.beautyServices,
          icon: Sparkles,
          businessCount: 78,
          specializations: [
            'Hair Salons',
            'Nail Salons',
            'Spa Services',
            'Makeup Artists',
            'Eyebrow Threading',
            'Massage Therapy'
          ]
        },
        {
          id: 'fitness',
          name: t.fitness,
          icon: Heart,
          businessCount: 25,
          specializations: [
            'Gyms',
            'Personal Training',
            'Yoga Studios',
            'Martial Arts',
            'Dance Studios'
          ]
        }
      ]
    },
    {
      id: 'home-services',
      name: t.homeServices,
      icon: Home,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      businessCount: 142,
      subcategories: [
        {
          id: 'handyman',
          name: t.handyman,
          icon: Wrench,
          businessCount: 67,
          specializations: [
            'General Repairs',
            'Plumbing',
            'Electrical',
            'Painting',
            'Carpentry',
            'HVAC'
          ]
        },
        {
          id: 'cleaning-babysitting',
          name: t.cleaningBabysitting,
          icon: Home,
          businessCount: 48,
          specializations: [
            'House Cleaning',
            'Office Cleaning',
            'Babysitting',
            'Elderly Care',
            'Pet Care'
          ]
        },
        {
          id: 'home-improvement',
          name: t.homeImprovement,
          icon: Home,
          businessCount: 27,
          specializations: [
            'Kitchen Remodeling',
            'Bathroom Renovation',
            'Flooring',
            'Roofing',
            'Landscaping'
          ]
        }
      ]
    },
    {
      id: 'professional-business',
      name: t.professionalBusiness,
      icon: Briefcase,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      businessCount: 89,
      subcategories: [
        {
          id: 'law-firm',
          name: t.lawFirm,
          icon: Scale,
          businessCount: 35,
          specializations: [
            'Immigration Law',
            'Family Law',
            'Business Law',
            'Real Estate Law',
            'Personal Injury'
          ]
        },
        {
          id: 'accounting-services',
          name: t.accountingServices,
          icon: Calculator,
          businessCount: 28,
          specializations: [
            'Tax Preparation',
            'Bookkeeping',
            'Business Accounting',
            'Financial Planning',
            'Payroll Services'
          ]
        },
        {
          id: 'insurance',
          name: t.insurance,
          icon: Shield,
          businessCount: 26,
          specializations: [
            'Auto Insurance',
            'Health Insurance',
            'Life Insurance',
            'Home Insurance',
            'Business Insurance'
          ]
        }
      ]
    },
    {
      id: 'lifestyle-events',
      name: t.lifestyleEvents,
      icon: Camera,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50',
      businessCount: 76,
      subcategories: [
        {
          id: 'photography-event-planner',
          name: t.photographyEventPlanner,
          icon: Camera,
          businessCount: 42,
          specializations: [
            'Wedding Photography',
            'Event Planning',
            'Portrait Photography',
            'Commercial Photography',
            'Video Production'
          ]
        },
        {
          id: 'education-teaching',
          name: t.educationTeaching,
          icon: GraduationCap,
          businessCount: 24,
          specializations: [
            'Arabic Language',
            'Quran Teaching',
            'Tutoring',
            'Music Lessons',
            'Art Classes'
          ]
        },
        {
          id: 'entertainment',
          name: t.entertainment,
          icon: Users,
          businessCount: 10,
          specializations: [
            'DJ Services',
            'Live Music',
            'Event Entertainment',
            'Cultural Shows',
            'Party Planning'
          ]
        }
      ]
    }
  ]

  // Mock featured businesses
  const featuredBusinesses = [
    {
      id: 1,
      name: 'Al-Salam Restaurant',
      category: 'Lebanese Restaurant',
      rating: 4.8,
      reviews: 124,
      image: '/api/placeholder/300/200',
      location: 'Atlanta, GA',
      phone: '(404) 555-0123',
      verified: true,
      featured: true,
      description: 'Authentic Lebanese cuisine with traditional flavors'
    },
    {
      id: 2,
      name: 'Noor Beauty Salon',
      category: 'Beauty Services',
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/200',
      location: 'Marietta, GA',
      phone: '(770) 555-0456',
      verified: true,
      topRated: true,
      description: 'Professional beauty services for the modern woman'
    },
    {
      id: 3,
      name: 'Barakah Market',
      category: 'Halal Grocery',
      rating: 4.7,
      reviews: 156,
      image: '/api/placeholder/300/200',
      location: 'Decatur, GA',
      phone: '(678) 555-0789',
      verified: true,
      newBusiness: true,
      description: 'Fresh halal meat and Middle Eastern groceries'
    }
  ]

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

  const handleCategoryClick = (categoryId) => {
    navigate(`/directory/${categoryId}`)
  }

  const handleSubcategoryClick = (categoryId, subcategoryId) => {
    navigate(`/directory/${categoryId}/${subcategoryId}`)
  }

  const handleSpecializationClick = (categoryId, subcategoryId, specialization) => {
    navigate(`/directory/${categoryId}/${subcategoryId}/${specialization.toLowerCase().replace(/\s+/g, '-')}`)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                <Building2 className="h-4 w-4 mr-2" />
                {t.title}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t.subtitle}
              </h1>
            </motion.div>

            {/* Search Bar */}
            <motion.div variants={fadeInUp} className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-32 py-4 text-lg rounded-full border-0 bg-white/95 backdrop-blur-sm shadow-2xl focus:ring-2 focus:ring-blue-400"
                />
                <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  {t.searchButton}
                </Button>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1,250+</div>
                <div className="text-blue-200 text-sm">{t.totalBusinesses}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">3,500+</div>
                <div className="text-blue-200 text-sm">{t.activeListings}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">890+</div>
                <div className="text-blue-200 text-sm">{t.verifiedBusinesses}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15,000+</div>
                <div className="text-blue-200 text-sm">{t.communityMembers}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Categories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                <Grid className="h-4 w-4 mr-2" />
                {t.allCategories}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Explore Business Categories
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {directoryCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={fadeInUp}
                  {...scaleOnHover}
                  className="group cursor-pointer"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <Card className={`h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br ${category.bgColor}`}>
                    <CardHeader className="text-center pb-4">
                      <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {category.businessCount} {t.businesses}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {category.subcategories.slice(0, 3).map((sub) => (
                          <div key={sub.id} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">{sub.name}</span>
                            <Badge variant="secondary" className="text-xs">
                              {sub.businessCount}
                            </Badge>
                          </div>
                        ))}
                        {category.subcategories.length > 3 && (
                          <div className="text-sm text-gray-500 text-center pt-2">
                            +{category.subcategories.length - 3} more categories
                          </div>
                        )}
                      </div>
                      <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 font-medium">
                        <span className="mr-2">{t.exploreCategory}</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex justify-between items-center mb-12">
              <div>
                <Badge className="mb-4 bg-yellow-100 text-yellow-800">
                  <Star className="h-4 w-4 mr-2" />
                  Featured Businesses
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Top-Rated Community Businesses
                </h2>
              </div>
              <Button variant="outline" className="hidden md:flex">
                {t.viewAll}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBusinesses.map((business, index) => (
                <motion.div
                  key={business.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="relative">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
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
                        {business.newBusiness && (
                          <Badge className="bg-blue-500 text-white">
                            <Sparkles className="h-3 w-3 mr-1" />
                            {t.newBusiness}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
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
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {business.location}
                        <span className="mx-2">•</span>
                        <Phone className="h-4 w-4 mr-1" />
                        {business.phone}
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1 group-hover:bg-blue-600 transition-colors">
                          {t.viewBusiness}
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          {t.callNow}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
        <AdSection type="banner" size="large" language={language} />
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
                Join Our Directory
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                List Your Business Today
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Connect with thousands of community members and grow your business with our comprehensive directory platform.
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
                >
                  Learn More
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

export default Directory
