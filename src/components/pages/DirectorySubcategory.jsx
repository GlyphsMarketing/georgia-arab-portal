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
  ArrowLeft
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AdSection from '../shared/AdSection'

const DirectorySubcategory = ({ language = 'en' }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState('grid')
  const navigate = useNavigate()
  const { category, subcategory } = useParams()

  const translations = {
    en: {
      backToDirectory: 'Back to Directory',
      searchPlaceholder: 'Search specializations...',
      searchButton: 'Search',
      specializations: 'Specializations',
      businesses: 'businesses',
      viewAll: 'View All',
      exploreSpecialization: 'Explore Specialization',
      
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
      backToDirectory: 'العودة إلى الدليل',
      searchPlaceholder: 'البحث في التخصصات...',
      searchButton: 'بحث',
      specializations: 'التخصصات',
      businesses: 'أعمال',
      viewAll: 'عرض الكل',
      exploreSpecialization: 'استكشف التخصص',
      
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

  // Specializations data based on subcategory
  const getSpecializations = (subcategoryId) => {
    const specializationsData = {
      'restaurants-markets': [
        { name: 'Lebanese Restaurants', count: 45, icon: Utensils, color: 'from-red-500 to-orange-500' },
        { name: 'Syrian Restaurants', count: 32, icon: Utensils, color: 'from-green-500 to-blue-500' },
        { name: 'Egyptian Restaurants', count: 28, icon: Utensils, color: 'from-yellow-500 to-red-500' },
        { name: 'Halal Markets', count: 15, icon: ShoppingBag, color: 'from-green-500 to-emerald-500' },
        { name: 'Middle Eastern Groceries', count: 12, icon: ShoppingBag, color: 'from-blue-500 to-purple-500' },
        { name: 'Bakeries', count: 8, icon: Utensils, color: 'from-orange-500 to-yellow-500' }
      ],
      'apparel-jewelry': [
        { name: 'Traditional Clothing', count: 25, icon: ShoppingBag, color: 'from-purple-500 to-pink-500' },
        { name: 'Modern Fashion', count: 18, icon: ShoppingBag, color: 'from-blue-500 to-cyan-500' },
        { name: 'Gold Jewelry', count: 15, icon: Sparkles, color: 'from-yellow-500 to-orange-500' },
        { name: 'Wedding Dresses', count: 8, icon: Heart, color: 'from-pink-500 to-rose-500' },
        { name: 'Accessories', count: 12, icon: ShoppingBag, color: 'from-indigo-500 to-purple-500' }
      ],
      'auto-repair': [
        { name: 'General Auto Repair', count: 35, icon: Wrench, color: 'from-blue-500 to-cyan-500' },
        { name: 'Engine Repair', count: 22, icon: Wrench, color: 'from-red-500 to-orange-500' },
        { name: 'Transmission', count: 18, icon: Wrench, color: 'from-purple-500 to-indigo-500' },
        { name: 'Brakes', count: 25, icon: Wrench, color: 'from-green-500 to-emerald-500' },
        { name: 'Oil Change', count: 28, icon: Wrench, color: 'from-yellow-500 to-orange-500' },
        { name: 'Tires', count: 20, icon: Wrench, color: 'from-gray-500 to-slate-500' }
      ],
      'medical-services': [
        { name: 'Family Medicine', count: 28, icon: Stethoscope, color: 'from-blue-500 to-cyan-500' },
        { name: 'Dentistry', count: 22, icon: Stethoscope, color: 'from-green-500 to-emerald-500' },
        { name: 'Pediatrics', count: 18, icon: Heart, color: 'from-pink-500 to-rose-500' },
        { name: 'Cardiology', count: 12, icon: Heart, color: 'from-red-500 to-pink-500' },
        { name: 'Dermatology', count: 15, icon: Sparkles, color: 'from-purple-500 to-indigo-500' },
        { name: 'Pharmacy', count: 25, icon: Shield, color: 'from-green-500 to-blue-500' }
      ],
      'beauty-services': [
        { name: 'Hair Salons', count: 32, icon: Sparkles, color: 'from-pink-500 to-rose-500' },
        { name: 'Nail Salons', count: 18, icon: Sparkles, color: 'from-purple-500 to-pink-500' },
        { name: 'Spa Services', count: 15, icon: Heart, color: 'from-blue-500 to-cyan-500' },
        { name: 'Makeup Artists', count: 12, icon: Sparkles, color: 'from-yellow-500 to-orange-500' },
        { name: 'Eyebrow Threading', count: 22, icon: Sparkles, color: 'from-green-500 to-emerald-500' },
        { name: 'Massage Therapy', count: 8, icon: Heart, color: 'from-indigo-500 to-purple-500' }
      ],
      'law-firm': [
        { name: 'Immigration Law', count: 18, icon: Scale, color: 'from-blue-500 to-cyan-500' },
        { name: 'Family Law', count: 12, icon: Heart, color: 'from-pink-500 to-rose-500' },
        { name: 'Business Law', count: 15, icon: Briefcase, color: 'from-purple-500 to-indigo-500' },
        { name: 'Real Estate Law', count: 8, icon: Home, color: 'from-green-500 to-emerald-500' },
        { name: 'Personal Injury', count: 10, icon: Shield, color: 'from-red-500 to-orange-500' }
      ]
    }

    return specializationsData[subcategoryId] || []
  }

  const specializations = getSpecializations(subcategory)

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

  const handleSpecializationClick = (specialization) => {
    const specializationSlug = specialization.name.toLowerCase().replace(/\s+/g, '-')
    navigate(`/directory/${category}/${subcategory}/${specializationSlug}`)
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
                    <BreadcrumbPage>{t[subcategory]}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            {/* Back Button */}
            <motion.div variants={fadeInUp} className="mb-6">
              <Button
                variant="outline"
                onClick={() => navigate('/directory')}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.backToDirectory}
              </Button>
            </motion.div>

            {/* Title */}
            <motion.div variants={fadeInUp} className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 bg-blue-100 text-blue-800">
                <Building2 className="h-4 w-4 mr-2" />
                {t[category]}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t[subcategory]}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover specialized {t[subcategory].toLowerCase()} services in our community
              </p>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 pr-32 py-4 text-lg rounded-full border shadow-lg focus:ring-2 focus:ring-blue-400"
                  />
                  <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-8 py-2">
                    {t.searchButton}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800">
                <Grid className="h-4 w-4 mr-2" />
                {t.specializations}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Specialization
              </h2>
              <p className="text-xl text-gray-600">
                Find exactly what you're looking for with our specialized categories
              </p>
            </motion.div>

            {specializations.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {specializations.map((specialization, index) => (
                  <motion.div
                    key={specialization.name}
                    variants={fadeInUp}
                    {...scaleOnHover}
                    className="group cursor-pointer"
                    onClick={() => handleSpecializationClick(specialization)}
                  >
                    <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                      <CardHeader className="text-center pb-4">
                        <div className={`w-20 h-20 bg-gradient-to-br ${specialization.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <specialization.icon className="h-10 w-10 text-white" />
                        </div>
                        <CardTitle className="text-xl font-bold group-hover:text-blue-600 transition-colors">
                          {specialization.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {specialization.count} {t.businesses}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 font-medium">
                          <span className="mr-2">{t.exploreSpecialization}</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div variants={fadeInUp} className="text-center py-20">
                <Building2 className="h-24 w-24 text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-600 mb-4">
                  No Specializations Available
                </h3>
                <p className="text-gray-500 mb-8">
                  This subcategory is being developed. Check back soon for specialized listings.
                </p>
                <Button onClick={() => navigate('/directory')}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Directory
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
                Join Our {t[subcategory]} Directory
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                Connect with customers looking for {t[subcategory].toLowerCase()} services in the Arab community.
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

export default DirectorySubcategory
