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
  Share2,
  Bookmark,
  MessageCircle,
  Mail,
  Calendar,
  Navigation,
  ExternalLink,
  Image as ImageIcon,
  Play,
  ThumbsUp,
  Flag,
  Send
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Link, useNavigate, useParams } from 'react-router-dom'
import AdSection from '../shared/AdSection'

const BusinessProfile = ({ language = 'en' }) => {
  const [activeTab, setActiveTab] = useState('overview')
  const [reviewText, setReviewText] = useState('')
  const [userRating, setUserRating] = useState(0)
  const navigate = useNavigate()
  const { category, subcategory, specialization, businessId } = useParams()

  const translations = {
    en: {
      backToResults: 'Back to Results',
      verified: 'Verified Business',
      topRated: 'Top Rated',
      featured: 'Featured',
      newBusiness: 'New Business',
      callNow: 'Call Now',
      getDirections: 'Get Directions',
      visitWebsite: 'Visit Website',
      shareProfile: 'Share Profile',
      saveToFavorites: 'Save to Favorites',
      writeReview: 'Write a Review',
      sendMessage: 'Send Message',
      bookAppointment: 'Book Appointment',
      
      // Tabs
      overview: 'Overview',
      reviews: 'Reviews',
      photos: 'Photos',
      about: 'About',
      contact: 'Contact',
      
      // Business Info
      businessHours: 'Business Hours',
      contactInfo: 'Contact Information',
      location: 'Location',
      services: 'Services',
      specialties: 'Specialties',
      paymentMethods: 'Payment Methods',
      languages: 'Languages Spoken',
      established: 'Established',
      employees: 'Employees',
      
      // Reviews
      overallRating: 'Overall Rating',
      basedOnReviews: 'based on reviews',
      writeAReview: 'Write a Review',
      yourRating: 'Your Rating',
      yourReview: 'Your Review',
      submitReview: 'Submit Review',
      helpful: 'Helpful',
      notHelpful: 'Not Helpful',
      reportReview: 'Report',
      
      // Days
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      
      // Status
      open: 'Open',
      closed: 'Closed',
      opensAt: 'Opens at',
      closesAt: 'Closes at',
      
      // Common
      reviews: 'reviews',
      review: 'review',
      photos: 'photos',
      photo: 'photo',
      viewAll: 'View All',
      showMore: 'Show More',
      showLess: 'Show Less'
    },
    ar: {
      backToResults: 'العودة إلى النتائج',
      verified: 'عمل موثق',
      topRated: 'الأعلى تقييماً',
      featured: 'مميز',
      newBusiness: 'عمل جديد',
      callNow: 'اتصل الآن',
      getDirections: 'الحصول على الاتجاهات',
      visitWebsite: 'زيارة الموقع',
      shareProfile: 'مشاركة الملف الشخصي',
      saveToFavorites: 'حفظ في المفضلة',
      writeReview: 'كتابة مراجعة',
      sendMessage: 'إرسال رسالة',
      bookAppointment: 'حجز موعد',
      
      // Tabs
      overview: 'نظرة عامة',
      reviews: 'المراجعات',
      photos: 'الصور',
      about: 'حول',
      contact: 'اتصال',
      
      // Business Info
      businessHours: 'ساعات العمل',
      contactInfo: 'معلومات الاتصال',
      location: 'الموقع',
      services: 'الخدمات',
      specialties: 'التخصصات',
      paymentMethods: 'طرق الدفع',
      languages: 'اللغات المتحدثة',
      established: 'تأسس',
      employees: 'الموظفين',
      
      // Reviews
      overallRating: 'التقييم العام',
      basedOnReviews: 'بناءً على المراجعات',
      writeAReview: 'كتابة مراجعة',
      yourRating: 'تقييمك',
      yourReview: 'مراجعتك',
      submitReview: 'إرسال المراجعة',
      helpful: 'مفيد',
      notHelpful: 'غير مفيد',
      reportReview: 'إبلاغ',
      
      // Days
      monday: 'الاثنين',
      tuesday: 'الثلاثاء',
      wednesday: 'الأربعاء',
      thursday: 'الخميس',
      friday: 'الجمعة',
      saturday: 'السبت',
      sunday: 'الأحد',
      
      // Status
      open: 'مفتوح',
      closed: 'مغلق',
      opensAt: 'يفتح في',
      closesAt: 'يغلق في',
      
      // Common
      reviews: 'مراجعات',
      review: 'مراجعة',
      photos: 'صور',
      photo: 'صورة',
      viewAll: 'عرض الكل',
      showMore: 'عرض المزيد',
      showLess: 'عرض أقل'
    }
  }

  const t = translations[language]

  // Mock business data
  const business = {
    id: businessId,
    name: 'Al-Salam Lebanese Restaurant',
    category: 'Lebanese Restaurant',
    rating: 4.8,
    reviews: 124,
    photos: 45,
    image: '/api/placeholder/800/400',
    gallery: [
      '/api/placeholder/300/200',
      '/api/placeholder/300/200',
      '/api/placeholder/300/200',
      '/api/placeholder/300/200',
      '/api/placeholder/300/200',
      '/api/placeholder/300/200'
    ],
    location: 'Atlanta, GA',
    address: '1234 Peachtree Street NE, Atlanta, GA 30309',
    phone: '(404) 555-0123',
    website: 'www.alsalam-restaurant.com',
    email: 'info@alsalam-restaurant.com',
    verified: true,
    featured: true,
    established: '1995',
    employees: '15-25',
    priceRange: '$$',
    description: 'Al-Salam Lebanese Restaurant has been serving authentic Lebanese cuisine to the Atlanta community for over 25 years. Our family-owned restaurant offers traditional dishes prepared with the finest ingredients and time-honored recipes passed down through generations.',
    specialties: [
      'Hummus & Mezze',
      'Grilled Kebabs',
      'Fresh Seafood',
      'Vegetarian Options',
      'Traditional Desserts',
      'Hookah Lounge'
    ],
    services: [
      'Dine-in',
      'Takeout',
      'Delivery',
      'Catering',
      'Private Events',
      'Hookah Service'
    ],
    paymentMethods: [
      'Cash',
      'Credit Cards',
      'Debit Cards',
      'Mobile Payments'
    ],
    languages: ['English', 'Arabic', 'French'],
    hours: {
      monday: { open: '11:00 AM', close: '10:00 PM', isOpen: true },
      tuesday: { open: '11:00 AM', close: '10:00 PM', isOpen: true },
      wednesday: { open: '11:00 AM', close: '10:00 PM', isOpen: true },
      thursday: { open: '11:00 AM', close: '10:00 PM', isOpen: true },
      friday: { open: '11:00 AM', close: '11:00 PM', isOpen: true },
      saturday: { open: '11:00 AM', close: '11:00 PM', isOpen: true },
      sunday: { open: '12:00 PM', close: '9:00 PM', isOpen: true }
    },
    currentStatus: {
      isOpen: true,
      message: 'Open until 10:00 PM'
    },
    ratingBreakdown: {
      5: 78,
      4: 32,
      3: 10,
      2: 3,
      1: 1
    }
  }

  // Mock reviews data
  const reviewsData = [
    {
      id: 1,
      author: 'Sarah Ahmed',
      avatar: '/api/placeholder/50/50',
      rating: 5,
      date: '2 days ago',
      text: 'Amazing authentic Lebanese food! The hummus is the best I\'ve had outside of Lebanon. The staff is incredibly friendly and the atmosphere is warm and welcoming.',
      helpful: 12,
      photos: ['/api/placeholder/100/100', '/api/placeholder/100/100']
    },
    {
      id: 2,
      author: 'Omar Hassan',
      avatar: '/api/placeholder/50/50',
      rating: 4,
      date: '1 week ago',
      text: 'Great food and service. The grilled lamb was perfectly cooked and the portions are generous. Will definitely be coming back!',
      helpful: 8,
      photos: []
    },
    {
      id: 3,
      author: 'Layla Mahmoud',
      avatar: '/api/placeholder/50/50',
      rating: 5,
      date: '2 weeks ago',
      text: 'This place feels like home! The owner is so welcoming and the food is consistently excellent. Their baklava is to die for.',
      helpful: 15,
      photos: ['/api/placeholder/100/100']
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

  const formatSpecializationName = (slug) => {
    return slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

  const handleStarClick = (rating) => {
    setUserRating(rating)
  }

  const handleSubmitReview = () => {
    if (userRating > 0 && reviewText.trim()) {
      // Handle review submission
      console.log('Review submitted:', { rating: userRating, text: reviewText })
      setUserRating(0)
      setReviewText('')
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-8 bg-gradient-to-br from-gray-50 to-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Breadcrumb */}
            <motion.div variants={fadeInUp} className="mb-6">
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
                      <Link to={`/directory/${category}/${subcategory}/${specialization}`}>
                        {formatSpecializationName(specialization)}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{business.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </motion.div>

            {/* Back Button */}
            <motion.div variants={fadeInUp} className="mb-6">
              <Button
                variant="outline"
                onClick={() => navigate(`/directory/${category}/${subcategory}/${specialization}`)}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t.backToResults}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Header */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Info */}
              <motion.div variants={fadeInUp} className="lg:col-span-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {business.verified && (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {t.verified}
                    </Badge>
                  )}
                  {business.featured && (
                    <Badge className="bg-purple-500 text-white">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {t.featured}
                    </Badge>
                  )}
                  <Badge className={`${business.currentStatus.isOpen ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                    {business.currentStatus.isOpen ? t.open : t.closed}
                  </Badge>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {business.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(business.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-lg font-semibold">{business.rating}</span>
                    <span className="ml-2 text-gray-600">
                      ({business.reviews} {business.reviews === 1 ? t.review : t.reviews})
                    </span>
                  </div>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{business.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-600">{business.priceRange}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-6">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{business.address}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-6">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{business.currentStatus.message}</span>
                </div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  {business.description}
                </p>
              </motion.div>

              {/* Action Buttons */}
              <motion.div variants={fadeInUp} className="lg:col-span-1">
                <Card className="sticky top-8">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <Button className="w-full">
                        <Phone className="h-4 w-4 mr-2" />
                        {t.callNow}
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Navigation className="h-4 w-4 mr-2" />
                        {t.getDirections}
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Globe className="h-4 w-4 mr-2" />
                        {t.visitWebsite}
                      </Button>
                      <Button variant="outline" className="w-full">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {t.sendMessage}
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <Button variant="outline" className="w-full">
                        <Share2 className="h-4 w-4 mr-2" />
                        {t.shareProfile}
                      </Button>
                      <Button variant="outline" className="w-full">
                        <Bookmark className="h-4 w-4 mr-2" />
                        {t.saveToFavorites}
                      </Button>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      {t.bookAppointment}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Image */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={business.image}
                alt={business.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-4 right-4">
                <Badge className="bg-black/70 text-white">
                  <ImageIcon className="h-3 w-3 mr-1" />
                  {business.photos} {business.photos === 1 ? t.photo : t.photos}
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-8">
                  <TabsTrigger value="overview">{t.overview}</TabsTrigger>
                  <TabsTrigger value="reviews">{t.reviews}</TabsTrigger>
                  <TabsTrigger value="photos">{t.photos}</TabsTrigger>
                  <TabsTrigger value="about">{t.about}</TabsTrigger>
                  <TabsTrigger value="contact">{t.contact}</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Business Hours */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Clock className="h-5 w-5 mr-2" />
                          {t.businessHours}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {Object.entries(business.hours).map(([day, hours]) => (
                            <div key={day} className="flex justify-between items-center">
                              <span className="font-medium capitalize">{t[day]}</span>
                              <span className={`${hours.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                                {hours.isOpen ? `${hours.open} - ${hours.close}` : t.closed}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Services */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Building2 className="h-5 w-5 mr-2" />
                          {t.services}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {business.services.map((service, index) => (
                            <Badge key={index} variant="secondary">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Specialties */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Award className="h-5 w-5 mr-2" />
                          {t.specialties}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {business.specialties.map((specialty, index) => (
                            <Badge key={index} variant="outline">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Payment Methods */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Calculator className="h-5 w-5 mr-2" />
                          {t.paymentMethods}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {business.paymentMethods.map((method, index) => (
                            <Badge key={index} variant="secondary">
                              {method}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent value="reviews" className="space-y-8">
                  {/* Rating Overview */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="text-6xl font-bold text-gray-900 mb-2">
                            {business.rating}
                          </div>
                          <div className="flex justify-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-6 w-6 ${
                                  i < Math.floor(business.rating)
                                    ? 'text-yellow-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-gray-600">
                            {t.basedOnReviews.replace('reviews', `${business.reviews} ${t.reviews}`)}
                          </p>
                        </div>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map((rating) => (
                            <div key={rating} className="flex items-center gap-2">
                              <span className="w-3">{rating}</span>
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <Progress
                                value={(business.ratingBreakdown[rating] / business.reviews) * 100}
                                className="flex-1"
                              />
                              <span className="w-8 text-sm text-gray-600">
                                {business.ratingBreakdown[rating]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Write Review */}
                  <Card>
                    <CardHeader>
                      <CardTitle>{t.writeAReview}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">{t.yourRating}</label>
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((rating) => (
                              <button
                                key={rating}
                                onClick={() => handleStarClick(rating)}
                                className="focus:outline-none"
                              >
                                <Star
                                  className={`h-8 w-8 cursor-pointer transition-colors ${
                                    rating <= userRating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300 hover:text-yellow-200'
                                  }`}
                                />
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">{t.yourReview}</label>
                          <Textarea
                            placeholder="Share your experience..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            rows={4}
                          />
                        </div>
                        <Button
                          onClick={handleSubmitReview}
                          disabled={userRating === 0 || !reviewText.trim()}
                        >
                          <Send className="h-4 w-4 mr-2" />
                          {t.submitReview}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Reviews List */}
                  <div className="space-y-6">
                    {reviewsData.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <Avatar>
                              <AvatarImage src={review.avatar} />
                              <AvatarFallback>
                                {review.author.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="font-semibold">{review.author}</h4>
                                <span className="text-sm text-gray-500">{review.date}</span>
                              </div>
                              <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating
                                        ? 'text-yellow-400 fill-current'
                                        : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-gray-700 mb-4">{review.text}</p>
                              {review.photos.length > 0 && (
                                <div className="flex gap-2 mb-4">
                                  {review.photos.map((photo, index) => (
                                    <img
                                      key={index}
                                      src={photo}
                                      alt="Review photo"
                                      className="w-20 h-20 object-cover rounded-lg"
                                    />
                                  ))}
                                </div>
                              )}
                              <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm">
                                  <ThumbsUp className="h-4 w-4 mr-2" />
                                  {t.helpful} ({review.helpful})
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Flag className="h-4 w-4 mr-2" />
                                  {t.reportReview}
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Photos Tab */}
                <TabsContent value="photos">
                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {business.gallery.map((photo, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer"
                      >
                        <img
                          src={photo}
                          alt={`${business.name} photo ${index + 1}`}
                          className="w-full h-48 object-cover rounded-lg shadow-md"
                        />
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                {/* About Tab */}
                <TabsContent value="about" className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">About {business.name}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {business.description}
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">{t.established}</h4>
                          <p className="text-gray-600">{business.established}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{t.employees}</h4>
                          <p className="text-gray-600">{business.employees}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{t.languages}</h4>
                          <div className="flex flex-wrap gap-2">
                            {business.languages.map((language, index) => (
                              <Badge key={index} variant="secondary">
                                {language}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Contact Tab */}
                <TabsContent value="contact" className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle>{t.contactInfo}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">{business.phone}</p>
                            <p className="text-sm text-gray-600">Phone</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">{business.email}</p>
                            <p className="text-sm text-gray-600">Email</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Globe className="h-5 w-5 text-blue-600" />
                          <div>
                            <p className="font-medium">{business.website}</p>
                            <p className="text-sm text-gray-600">Website</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                          <div>
                            <p className="font-medium">{business.address}</p>
                            <p className="text-sm text-gray-600">Address</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>{t.location}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                          <p className="text-gray-600">Map placeholder</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
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
        <AdSection type="banner" size="medium" language={language} />
      </motion.div>

      {/* Related Businesses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Similar Businesses
              </h2>
              <p className="text-gray-600">
                Discover other {formatSpecializationName(specialization).toLowerCase()} businesses in your area
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <Button
                onClick={() => navigate(`/directory/${category}/${subcategory}/${specialization}`)}
                size="lg"
              >
                View All {formatSpecializationName(specialization)} Businesses
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BusinessProfile
