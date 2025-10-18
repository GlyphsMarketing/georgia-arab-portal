import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { 
  Search, 
  Building2, 
  Home, 
  Briefcase, 
  ShoppingBag,
  Users,
  Star,
  ArrowRight,
  MapPin,
  Phone,
  Globe,
  Download,
  Smartphone,
  Play,
  Apple,
  CheckCircle,
  TrendingUp,
  Award,
  Heart,
  Eye,
  MessageCircle,
  Calendar,
  Clock,
  Target,
  Zap,
  Shield,
  Sparkles
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Link } from 'react-router-dom'
import AdSection from '../shared/AdSection'

const HomePage = ({ language = 'en' }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const controls = useAnimation()

  const translations = {
    en: {
      // Hero Section
      heroTitle: 'Connect with the Arab Community in Georgia',
      heroSubtitle: 'Your premier gateway to businesses, opportunities, and community connections across the Peach State',
      searchPlaceholder: 'Search businesses, jobs, properties, services...',
      searchButton: 'Search',
      joinCommunity: 'Join Our Community',
      watchVideo: 'Watch Video',
      
      // About Us Section
      aboutTitle: 'About Our Community',
      aboutSubtitle: 'Building bridges and fostering connections within the Arab community in Georgia',
      aboutDescription: 'We are dedicated to creating a thriving ecosystem where Arab families, professionals, and businesses can connect, grow, and succeed together in Georgia. Our platform serves as the central hub for community engagement, business networking, and cultural preservation.',
      ourMission: 'Our Mission',
      missionText: 'To empower the Arab community in Georgia by providing comprehensive resources, fostering meaningful connections, and celebrating our rich cultural heritage.',
      ourVision: 'Our Vision',
      visionText: 'A united and prosperous Arab community that contributes to Georgia\'s diverse cultural landscape while maintaining strong cultural roots.',
      ourValues: 'Our Values',
      communityFirst: 'Community First',
      authenticity: 'Authenticity',
      excellence: 'Excellence',
      
      // Categories Section
      exploreCategories: 'Explore Categories',
      categoriesSubtitle: 'Discover everything our community has to offer',
      businessDirectory: 'Business Directory',
      businessDesc: 'Find trusted Arab businesses and services in your area',
      marketplace: 'Marketplace',
      marketplaceDesc: 'Buy and sell items within the community',
      realEstate: 'Real Estate',
      realEstateDesc: 'Discover homes and properties for rent or sale',
      jobs: 'Job Opportunities',
      jobsDesc: 'Find career opportunities and connect with employers',
      
      // Featured Businesses
      featuredBusinesses: 'Featured Businesses',
      featuredSubtitle: 'Discover top-rated businesses in our community',
      viewAll: 'View All',
      viewBusiness: 'View Business',
      verified: 'Verified',
      topRated: 'Top Rated',
      newBusiness: 'New',
      
      // Main Functions
      mainFunctions: 'Main Functions',
      functionsSubtitle: 'Everything you need in one place',
      marketplaceFunction: 'Marketplace',
      marketplaceFunctionDesc: 'Buy, sell, and trade within our trusted community network',
      jobsFunction: 'Job Listings',
      jobsFunctionDesc: 'Connect with employers and find your next career opportunity',
      realEstateFunction: 'Real Estate',
      realEstateFunctionDesc: 'Find your dream home or investment property',
      
      // Community Stats
      communityStats: 'Community Statistics',
      statsSubtitle: 'Growing stronger together',
      businesses: 'Businesses',
      activeListings: 'Active Listings',
      jobPostings: 'Job Postings',
      communityMembers: 'Community Members',
      
      // States Directory
      statesDirectory: 'States Directory',
      statesSubtitle: 'Find Arab communities across the United States',
      statesDesc: 'Connect with Arab communities in different states and expand your network nationwide',
      exploreStates: 'Explore States',
      
      // Download App
      downloadApp: 'Download Our App',
      appSubtitle: 'Stay connected on the go',
      appDesc: 'Access our community platform anywhere, anytime with our mobile app. Get instant notifications, browse listings, and stay connected with your community.',
      downloadIOS: 'Download for iOS',
      downloadAndroid: 'Download for Android',
      comingSoon: 'Coming Soon',
      
      // Testimonials
      testimonials: 'What Our Community Says',
      testimonialsSubtitle: 'Real stories from real community members',
      
      // CTA Section
      ctaTitle: 'Ready to Join Our Community?',
      ctaSubtitle: 'Start connecting with Arab businesses, professionals, and families in Georgia today',
      getStarted: 'Get Started Today',
      learnMore: 'Learn More'
    },
    ar: {
      // Hero Section
      heroTitle: 'تواصل مع المجتمع العربي في جورجيا',
      heroSubtitle: 'بوابتك الرئيسية للأعمال والفرص والاتصالات المجتمعية في جميع أنحاء ولاية الخوخ',
      searchPlaceholder: 'البحث عن الأعمال والوظائف والعقارات والخدمات...',
      searchButton: 'بحث',
      joinCommunity: 'انضم إلى مجتمعنا',
      watchVideo: 'شاهد الفيديو',
      
      // About Us Section
      aboutTitle: 'عن مجتمعنا',
      aboutSubtitle: 'بناء الجسور وتعزيز الروابط داخل المجتمع العربي في جورجيا',
      aboutDescription: 'نحن ملتزمون بإنشاء نظام بيئي مزدهر حيث يمكن للعائلات والمهنيين والشركات العربية التواصل والنمو والنجاح معًا في جورجيا. منصتنا تعمل كمركز مركزي للمشاركة المجتمعية وشبكات الأعمال والحفاظ على الثقافة.',
      ourMission: 'مهمتنا',
      missionText: 'تمكين المجتمع العربي في جورجيا من خلال توفير موارد شاملة وتعزيز الروابط المعنوية والاحتفال بتراثنا الثقافي الغني.',
      ourVision: 'رؤيتنا',
      visionText: 'مجتمع عربي متحد ومزدهر يساهم في المشهد الثقافي المتنوع في جورجيا مع الحفاظ على جذور ثقافية قوية.',
      ourValues: 'قيمنا',
      communityFirst: 'المجتمع أولاً',
      authenticity: 'الأصالة',
      excellence: 'التميز',
      
      // Categories Section
      exploreCategories: 'استكشف الفئات',
      categoriesSubtitle: 'اكتشف كل ما يقدمه مجتمعنا',
      businessDirectory: 'دليل الأعمال',
      businessDesc: 'اعثر على الأعمال والخدمات العربية الموثوقة في منطقتك',
      marketplace: 'السوق',
      marketplaceDesc: 'شراء وبيع العناصر داخل المجتمع',
      realEstate: 'العقارات',
      realEstateDesc: 'اكتشف المنازل والعقارات للإيجار أو البيع',
      jobs: 'فرص العمل',
      jobsDesc: 'اعثر على فرص مهنية وتواصل مع أصحاب العمل',
      
      // Featured Businesses
      featuredBusinesses: 'الأعمال المميزة',
      featuredSubtitle: 'اكتشف الأعمال الأعلى تقييماً في مجتمعنا',
      viewAll: 'عرض الكل',
      viewBusiness: 'عرض العمل',
      verified: 'موثق',
      topRated: 'الأعلى تقييماً',
      newBusiness: 'جديد',
      
      // Main Functions
      mainFunctions: 'الوظائف الرئيسية',
      functionsSubtitle: 'كل ما تحتاجه في مكان واحد',
      marketplaceFunction: 'السوق',
      marketplaceFunctionDesc: 'شراء وبيع والتجارة داخل شبكة مجتمعنا الموثوقة',
      jobsFunction: 'قوائم الوظائف',
      jobsFunctionDesc: 'تواصل مع أصحاب العمل واعثر على فرصتك المهنية التالية',
      realEstateFunction: 'العقارات',
      realEstateFunctionDesc: 'اعثر على منزل أحلامك أو عقار استثماري',
      
      // Community Stats
      communityStats: 'إحصائيات المجتمع',
      statsSubtitle: 'نصبح أقوى معاً',
      businesses: 'الأعمال',
      activeListings: 'القوائم النشطة',
      jobPostings: 'إعلانات الوظائف',
      communityMembers: 'أعضاء المجتمع',
      
      // States Directory
      statesDirectory: 'دليل الولايات',
      statesSubtitle: 'اعثر على المجتمعات العربية في جميع أنحاء الولايات المتحدة',
      statesDesc: 'تواصل مع المجتمعات العربية في ولايات مختلفة ووسع شبكتك على الصعيد الوطني',
      exploreStates: 'استكشف الولايات',
      
      // Download App
      downloadApp: 'تحميل تطبيقنا',
      appSubtitle: 'ابق متصلاً أثناء التنقل',
      appDesc: 'الوصول إلى منصة مجتمعنا في أي مكان وفي أي وقت مع تطبيقنا المحمول. احصل على إشعارات فورية وتصفح القوائم وابق متصلاً مع مجتمعك.',
      downloadIOS: 'تحميل لنظام iOS',
      downloadAndroid: 'تحميل لنظام Android',
      comingSoon: 'قريباً',
      
      // Testimonials
      testimonials: 'ما يقوله مجتمعنا',
      testimonialsSubtitle: 'قصص حقيقية من أعضاء المجتمع الحقيقيين',
      
      // CTA Section
      ctaTitle: 'مستعد للانضمام إلى مجتمعنا؟',
      ctaSubtitle: 'ابدأ في التواصل مع الأعمال والمهنيين والعائلات العربية في جورجيا اليوم',
      getStarted: 'ابدأ اليوم',
      learnMore: 'تعلم المزيد'
    }
  }

  const t = translations[language]

  // Mock data
  const featuredBusinesses = [
    {
      id: 1,
      name: 'Al-Salam Restaurant',
      category: 'Restaurant',
      rating: 4.8,
      reviews: 124,
      image: '/api/placeholder/300/200',
      location: 'Atlanta, GA',
      verified: true,
      featured: true,
      description: 'Authentic Middle Eastern cuisine'
    },
    {
      id: 2,
      name: 'Noor Beauty Salon',
      category: 'Beauty',
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/200',
      location: 'Marietta, GA',
      verified: true,
      topRated: true,
      description: 'Professional beauty services'
    },
    {
      id: 3,
      name: 'Barakah Market',
      category: 'Grocery',
      rating: 4.7,
      reviews: 156,
      image: '/api/placeholder/300/200',
      location: 'Decatur, GA',
      verified: true,
      newBusiness: true,
      description: 'Halal groceries and Middle Eastern products'
    }
  ]

  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Hassan',
      role: 'Business Owner',
      avatar: '/api/placeholder/60/60',
      content: 'This platform has helped me connect with the Arab community and grow my restaurant business significantly.',
      rating: 5
    },
    {
      id: 2,
      name: 'Fatima Khalil',
      role: 'Community Member',
      avatar: '/api/placeholder/60/60',
      content: 'I found my dream job through this platform. The community support is incredible.',
      rating: 5
    },
    {
      id: 3,
      name: 'Omar Mansour',
      role: 'Real Estate Agent',
      avatar: '/api/placeholder/60/60',
      content: 'An excellent resource for connecting Arab families with their perfect homes in Georgia.',
      rating: 5
    }
  ]

  const states = [
    { name: 'Georgia', count: 1250, active: true },
    { name: 'Florida', count: 890 },
    { name: 'Texas', count: 1100 },
    { name: 'California', count: 2300 },
    { name: 'New York', count: 1800 },
    { name: 'Michigan', count: 650 }
  ]

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 200, 255, 0.3) 0%, transparent 50%)',
              backgroundSize: '100% 100%',
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <Badge className="mb-4 bg-white/10 text-white border-white/20 hover:bg-white/20">
                <Sparkles className="h-4 w-4 mr-2" />
                Welcome to Georgia's Premier Arab Community Platform
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {t.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                {t.heroSubtitle}
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-32 py-4 text-lg rounded-full border-0 bg-white/95 backdrop-blur-sm shadow-2xl focus:ring-2 focus:ring-blue-400"
                />
                <Button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {t.searchButton}
                </Button>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
                {...scaleOnHover}
              >
                <Users className="h-5 w-5 mr-2" />
                {t.joinCommunity}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-full"
                {...scaleOnHover}
              >
                <Play className="h-5 w-5 mr-2" />
                {t.watchVideo}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                <Heart className="h-4 w-4 mr-2" />
                {t.aboutTitle}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t.aboutSubtitle}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t.aboutDescription}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:border-gray-800 dark:bg-gray-900/90">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-600 dark:to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold dark:text-gray-100">{t.ourMission}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center dark:text-gray-300">{t.missionText}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:border-gray-800 dark:bg-gray-900/90">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 dark:from-green-600 dark:to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold dark:text-gray-100">{t.ourVision}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center dark:text-gray-300">{t.visionText}</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 dark:border-gray-800 dark:bg-gray-900/90">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold dark:text-gray-100">{t.ourValues}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{t.communityFirst}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{t.authenticity}</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
                        <span className="text-gray-700 dark:text-gray-300">{t.excellence}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                <Building2 className="h-4 w-4 mr-2" />
                {t.exploreCategories}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t.categoriesSubtitle}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp}>
                <Link to="/businesses">
                  <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/30">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Building2 className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400 transition-colors">
                        {t.businessDirectory}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{t.businessDesc}</p>
                      <div className="flex items-center justify-center text-blue-600 group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
                        <span className="mr-2">Explore</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/marketplace">
                  <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/30">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <ShoppingBag className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-green-600 dark:text-gray-100 dark:group-hover:text-green-400 transition-colors">
                        {t.marketplace}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{t.marketplaceDesc}</p>
                      <div className="flex items-center justify-center text-green-600 group-hover:text-green-700 dark:text-green-400 dark:group-hover:text-green-300">
                        <span className="mr-2">Explore</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/real-estate">
                  <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/30">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Home className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400 transition-colors">
                        {t.realEstate}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{t.realEstateDesc}</p>
                      <div className="flex items-center justify-center text-purple-600 group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300">
                        <span className="mr-2">Explore</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/jobs">
                  <Card className="group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/30">
                    <CardHeader className="text-center pb-4">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="h-10 w-10 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-orange-600 dark:text-gray-100 dark:group-hover:text-orange-400 transition-colors">
                        {t.jobs}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{t.jobsDesc}</p>
                      <div className="flex items-center justify-center text-orange-600 group-hover:text-orange-700 dark:text-orange-400 dark:group-hover:text-orange-300">
                        <span className="mr-2">Explore</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Businesses Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex justify-between items-center mb-12">
              <div>
                <Badge className="mb-4 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                  <Star className="h-4 w-4 mr-2" />
                  {t.featuredBusinesses}
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                  {t.featuredSubtitle}
                </h2>
              </div>
              <Link to="/businesses">
                <Button variant="outline" className="hidden md:flex dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                  {t.viewAll}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBusinesses.map((business, index) => (
                <motion.div
                  key={business.id}
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/30">
                    <div className="relative">
                      <img
                        src={business.image}
                        alt={business.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {business.verified && (
                          <Badge className="bg-green-500 text-white dark:bg-green-600 dark:text-white">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {t.verified}
                          </Badge>
                        )}
                        {business.topRated && (
                          <Badge className="bg-yellow-500 text-white dark:bg-yellow-600 dark:text-white">
                            <Star className="h-3 w-3 mr-1" />
                            {t.topRated}
                          </Badge>
                        )}
                        {business.newBusiness && (
                          <Badge className="bg-blue-500 text-white dark:bg-blue-600 dark:text-white">
                            <Sparkles className="h-3 w-3 mr-1" />
                            {t.newBusiness}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {business.name}
                        </h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium dark:text-gray-300">{business.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{business.description}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        {business.location}
                        <span className="mx-2">•</span>
                        <span>{business.reviews} reviews</span>
                      </div>
                      <Button className="w-full group-hover:bg-blue-600 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-600 transition-colors">
                        {t.viewBusiness}
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center mt-12 md:hidden">
              <Link to="/businesses">
                <Button size="lg" className="dark:bg-blue-700 dark:hover:bg-blue-600">
                  {t.viewAll}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Functions Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                <Zap className="h-4 w-4 mr-2" />
                {t.mainFunctions}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t.functionsSubtitle}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              <motion.div variants={fadeInUp}>
                <Link to="/marketplace">
                  <Card className="group cursor-pointer h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30 dark:border-green-800/30 dark:shadow-gray-900/30">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <ShoppingBag className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {t.marketplaceFunction}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {t.marketplaceFunctionDesc}
                      </p>
                      <div className="flex items-center justify-center text-green-600 group-hover:text-green-700 dark:text-green-400 dark:group-hover:text-green-300 font-medium">
                        <span className="mr-2">Get Started</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/jobs">
                  <Card className="group cursor-pointer h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30 dark:border-orange-800/30 dark:shadow-gray-900/30">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Briefcase className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {t.jobsFunction}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {t.jobsFunctionDesc}
                      </p>
                      <div className="flex items-center justify-center text-orange-600 group-hover:text-orange-700 dark:text-orange-400 dark:group-hover:text-orange-300 font-medium">
                        <span className="mr-2">Find Jobs</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Link to="/real-estate">
                  <Card className="group cursor-pointer h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 dark:border-purple-800/30 dark:shadow-gray-900/30">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Home className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {t.realEstateFunction}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {t.realEstateFunctionDesc}
                      </p>
                      <div className="flex items-center justify-center text-purple-600 group-hover:text-purple-700 dark:text-purple-400 dark:group-hover:text-purple-300 font-medium">
                        <span className="mr-2">Browse Properties</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                <TrendingUp className="h-4 w-4 mr-2" />
                {t.communityStats}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t.statsSubtitle}
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">1,250+</div>
                <div className="text-blue-200">{t.businesses}</div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">3,500+</div>
                <div className="text-blue-200">{t.activeListings}</div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">850+</div>
                <div className="text-blue-200">{t.jobPostings}</div>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">15,000+</div>
                <div className="text-blue-200">{t.communityMembers}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* States Directory Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="mb-4 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                <MapPin className="h-4 w-4 mr-2" />
                {t.statesDirectory}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t.statesSubtitle}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                {t.statesDesc}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {states.map((state, index) => (
                <motion.div
                  key={state.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02 }}
                  className="group cursor-pointer"
                >
                  <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    state.active ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 dark:border-blue-700/30' : 'dark:bg-gray-800 dark:border-gray-700'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className={`text-xl font-bold mb-2 ${
                            state.active ? 'text-blue-900 dark:text-blue-300' : 'text-gray-900 dark:text-gray-100'
                          } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                            {state.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {state.count.toLocaleString()} community members
                          </p>
                        </div>
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          state.active ? 'bg-blue-500 dark:bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                        } group-hover:bg-blue-500 dark:group-hover:bg-blue-600 transition-colors`}>
                          <MapPin className={`h-6 w-6 ${
                            state.active ? 'text-white' : 'text-gray-500 dark:text-gray-300'
                          } group-hover:text-white transition-colors`} />
                        </div>
                      </div>
                      {state.active && (
                        <Badge className="mt-3 bg-blue-500 text-white dark:bg-blue-600 dark:text-white">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Current Location
                        </Badge>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp} className="text-center">
              <Link to="/directory">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 dark:from-purple-700 dark:to-blue-700 dark:hover:from-purple-800 dark:hover:to-blue-800 dark:text-white">
                  {t.exploreStates}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp} className="mb-12">
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                <Smartphone className="h-4 w-4 mr-2" />
                {t.downloadApp}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                {t.appSubtitle}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {t.appDesc}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-12">
              <div className="relative max-w-sm mx-auto">
                <div className="w-64 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl mx-auto shadow-2xl border-4 border-gray-700">
                  <div className="p-6 h-full flex items-center justify-center">
                    <div className="text-center">
                      <Smartphone className="h-20 w-20 text-white/50 mx-auto mb-4" />
                      <p className="text-white/70">{t.comingSoon}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4"
                disabled
              >
                <Apple className="h-6 w-6 mr-3" />
                {t.downloadIOS}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4"
                disabled
              >
                <Play className="h-6 w-6 mr-3" />
                {t.downloadAndroid}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <Badge className="mb-4 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
                <MessageCircle className="h-4 w-4 mr-2" />
                {t.testimonials}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                {t.testimonialsSubtitle}
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 dark:border-blue-800/30 dark:shadow-gray-900/30">
                <CardContent className="p-12 text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-2xl text-gray-700 dark:text-gray-200 mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <Avatar className="h-16 w-16 mr-4 border-2 border-white/50 dark:border-gray-700">
                      <AvatarImage src={testimonials[currentTestimonial].avatar} />
                      <AvatarFallback className="bg-blue-500 dark:bg-blue-700 text-white">
                        {testimonials[currentTestimonial].name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 dark:text-gray-100 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
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
                <Users className="h-4 w-4 mr-2" />
                Join Our Community
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                {t.ctaTitle}
              </h2>
              <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                {t.ctaSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                  {...scaleOnHover}
                >
                  <Users className="h-5 w-5 mr-2" />
                  {t.getStarted}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold"
                  {...scaleOnHover}
                >
                  {t.learnMore}
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

export default HomePage
