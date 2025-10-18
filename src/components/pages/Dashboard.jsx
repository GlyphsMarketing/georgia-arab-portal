import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  ShoppingBag,
  Home,
  Briefcase,
  MessageSquare,
  Bell,
  Plus,
  Eye,
  Edit,
  Star,
  Calendar,
  DollarSign,
  Activity,
  Settings,
  HelpCircle,
  Clock
} from 'lucide-react'
import { useAuth } from '@/lib/useAuth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AdSection from '../shared/AdSection'

const Dashboard = ({ language }) => {
  const [activeTab, setActiveTab] = useState('overview')

  const translations = {
    en: {
      title: 'Dashboard',
      subtitle: 'Welcome back! Here\'s what\'s happening with your account.',
      overview: 'Overview',
      myListings: 'My Listings',
      applications: 'Applications',
      messages: 'Messages',
      notifications: 'Notifications',
      quickActions: 'Quick Actions',
      recentActivity: 'Recent Activity',
      statistics: 'Your Statistics',
      profileCompletion: 'Profile Completion',
      completeProfile: 'Complete Profile',
      businessListings: 'Business Listings',
      marketplaceItems: 'Marketplace Items',
      realEstateProperties: 'Real Estate Properties',
      jobPostings: 'Job Postings',
      totalViews: 'Total Views',
      totalInquiries: 'Total Inquiries',
      activeListings: 'Active Listings',
      pendingApprovals: 'Pending Approvals',
      addBusiness: 'Add Business',
      addProduct: 'Add Product',
      addProperty: 'Add Property',
      postJob: 'Post Job',
      viewAll: 'View All',
      edit: 'Edit',
      view: 'View',
      delete: 'Delete',
      approve: 'Approve',
      reject: 'Reject',
      reply: 'Reply',
      markRead: 'Mark as Read',
      today: 'Today',
      yesterday: 'Yesterday',
      thisWeek: 'This Week',
      thisMonth: 'This Month',
      noActivity: 'No recent activity',
      noListings: 'No listings yet',
      noMessages: 'No messages',
      getStarted: 'Get Started',
      createFirstListing: 'Create your first listing',
      welcomeMessage: 'Welcome to your dashboard! Start by completing your profile and creating your first listing.',
      profileIncomplete: 'Your profile is incomplete',
      addProfilePhoto: 'Add profile photo',
      addContactInfo: 'Add contact information',
      verifyEmail: 'Verify email address',
      addBusinessInfo: 'Add business information'
    },
    ar: {
      title: 'لوحة التحكم',
      subtitle: 'مرحباً بعودتك! إليك ما يحدث مع حسابك.',
      overview: 'نظرة عامة',
      myListings: 'قوائمي',
      applications: 'الطلبات',
      messages: 'الرسائل',
      notifications: 'الإشعارات',
      quickActions: 'إجراءات سريعة',
      recentActivity: 'النشاط الأخير',
      statistics: 'إحصائياتك',
      profileCompletion: 'اكتمال الملف الشخصي',
      completeProfile: 'إكمال الملف الشخصي',
      businessListings: 'قوائم الأعمال',
      marketplaceItems: 'عناصر السوق',
      realEstateProperties: 'العقارات',
      jobPostings: 'إعلانات الوظائف',
      totalViews: 'إجمالي المشاهدات',
      totalInquiries: 'إجمالي الاستفسارات',
      activeListings: 'القوائم النشطة',
      pendingApprovals: 'في انتظار الموافقة',
      addBusiness: 'إضافة عمل',
      addProduct: 'إضافة منتج',
      addProperty: 'إضافة عقار',
      postJob: 'نشر وظيفة',
      viewAll: 'عرض الكل',
      edit: 'تحرير',
      view: 'عرض',
      delete: 'حذف',
      approve: 'موافقة',
      reject: 'رفض',
      reply: 'رد',
      markRead: 'تحديد كمقروء',
      today: 'اليوم',
      yesterday: 'أمس',
      thisWeek: 'هذا الأسبوع',
      thisMonth: 'هذا الشهر',
      noActivity: 'لا يوجد نشاط حديث',
      noListings: 'لا توجد قوائم بعد',
      noMessages: 'لا توجد رسائل',
      getStarted: 'ابدأ',
      createFirstListing: 'إنشاء قائمتك الأولى',
      welcomeMessage: 'مرحباً بك في لوحة التحكم! ابدأ بإكمال ملفك الشخصي وإنشاء قائمتك الأولى.',
      profileIncomplete: 'ملفك الشخصي غير مكتمل',
      addProfilePhoto: 'إضافة صورة شخصية',
      addContactInfo: 'إضافة معلومات الاتصال',
      verifyEmail: 'تأكيد عنوان البريد الإلكتروني',
      addBusinessInfo: 'إضافة معلومات العمل'
    }
  }

  const t = translations[language]

  // Get user data from auth context
  const { user } = useAuth()
  
  // Calculate profile completion
  const calculateProfileCompletion = () => {
    if (!user) return 0;
    
    let completedFields = 0;
    let totalFields = 4; // email, firstName, lastName, phone
    
    if (user.email) completedFields++;
    if (user.firstName) completedFields++;
    if (user.lastName) completedFields++;
    if (user.phone) completedFields++;
    
    return Math.round((completedFields / totalFields) * 100);
  }
  
  const profileCompletion = calculateProfileCompletion();
  
  const userData = {
    name: user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() : 'Guest',
    email: user?.email || 'No email',
    avatar: user?.profileImage || '/api/placeholder/100/100',
    profileCompletion: profileCompletion,
    memberSince: user?.createdAt ? new Date(user.createdAt).getFullYear() : new Date().getFullYear(),
    verified: !!user?.email
  }

  const statistics = [
    {
      title: t.businessListings,
      value: '3',
      change: '+1',
      changeType: 'positive',
      icon: Building2,
      color: 'text-blue-600'
    },
    {
      title: t.marketplaceItems,
      value: '12',
      change: '+3',
      changeType: 'positive',
      icon: ShoppingBag,
      color: 'text-green-600'
    },
    {
      title: t.realEstateProperties,
      value: '2',
      change: '0',
      changeType: 'neutral',
      icon: Home,
      color: 'text-purple-600'
    },
    {
      title: t.jobPostings,
      value: '5',
      change: '+2',
      changeType: 'positive',
      icon: Briefcase,
      color: 'text-orange-600'
    }
  ]

  const metrics = [
    {
      title: t.totalViews,
      value: '2,847',
      icon: Eye,
      trend: '+12%'
    },
    {
      title: t.totalInquiries,
      value: '156',
      icon: MessageSquare,
      trend: '+8%'
    },
    {
      title: t.activeListings,
      value: '22',
      icon: Activity,
      trend: '+5%'
    },
    {
      title: t.pendingApprovals,
      value: '3',
      icon: Clock,
      trend: '-2%'
    }
  ]

  const quickActions = [
    {
      title: t.addBusiness,
      description: 'List your business in our directory',
      icon: Building2,
      color: 'bg-blue-500',
      href: '/businesses/add'
    },
    {
      title: t.addProduct,
      description: 'Sell items on our marketplace',
      icon: ShoppingBag,
      color: 'bg-green-500',
      href: '/marketplace/add'
    },
    {
      title: t.addProperty,
      description: 'List property for sale or rent',
      icon: Home,
      color: 'bg-purple-500',
      href: '/real-estate/add'
    },
    {
      title: t.postJob,
      description: 'Find the right candidates',
      icon: Briefcase,
      color: 'bg-orange-500',
      href: '/jobs/add'
    }
  ]

  const recentActivity = [
    {
      id: 1,
      type: 'listing',
      title: 'New inquiry for "Al-Salam Restaurant"',
      time: '2 hours ago',
      icon: MessageSquare,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'sale',
      title: 'iPhone 14 Pro Max sold successfully',
      time: '5 hours ago',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'application',
      title: '3 new job applications received',
      time: '1 day ago',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      id: 4,
      type: 'review',
      title: 'New 5-star review for your business',
      time: '2 days ago',
      icon: Star,
      color: 'text-yellow-600'
    },
    {
      id: 5,
      type: 'listing',
      title: 'Property listing approved',
      time: '3 days ago',
      icon: Home,
      color: 'text-indigo-600'
    }
  ]

  const recentListings = [
    {
      id: 1,
      title: 'Al-Salam Restaurant',
      type: 'Business',
      status: 'Active',
      views: 234,
      inquiries: 12,
      image: '/api/placeholder/60/60'
    },
    {
      id: 2,
      title: 'iPhone 14 Pro Max',
      type: 'Marketplace',
      status: 'Sold',
      views: 89,
      inquiries: 8,
      image: '/api/placeholder/60/60'
    },
    {
      id: 3,
      title: 'Software Developer Position',
      type: 'Job',
      status: 'Active',
      views: 156,
      inquiries: 23,
      image: '/api/placeholder/60/60'
    }
  ]

  const notifications = [
    {
      id: 1,
      title: 'Profile verification required',
      message: 'Please verify your email address to complete your profile.',
      time: '1 hour ago',
      type: 'warning',
      unread: true
    },
    {
      id: 2,
      title: 'New message received',
      message: 'You have a new inquiry about your restaurant listing.',
      time: '3 hours ago',
      type: 'info',
      unread: true
    },
    {
      id: 3,
      title: 'Listing approved',
      message: 'Your property listing has been approved and is now live.',
      time: '1 day ago',
      type: 'success',
      unread: false
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <Avatar className="h-16 w-16">
                <AvatarImage src={userData.avatar} />
                <AvatarFallback className="text-lg">{userData.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-3xl font-bold text-foreground">
                  {t.title}
                </h1>
                <p className="text-muted-foreground">
                  {t.subtitle}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <HelpCircle className="h-4 w-4 mr-2" />
                Help
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Profile Completion Alert */}
        {userData.profileCompletion < 100 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-8"
          >
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-orange-800">{t.profileIncomplete}</h3>
                    <p className="text-sm text-orange-600">
                      Complete your profile to get better visibility and more inquiries.
                    </p>
                  </div>
                  <Button size="sm">
                    {t.completeProfile}
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{t.profileCompletion}</span>
                    <span>{userData.profileCompletion}%</span>
                  </div>
                  <Progress value={userData.profileCompletion} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {statistics.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      {stat.change !== '0' && (
                        <Badge 
                          variant={stat.changeType === 'positive' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {stat.change}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    {t.quickActions}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quickActions.map((action, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto p-4 justify-start"
                        asChild
                      >
                        <a href={action.href}>
                          <div className={`p-2 rounded-md ${action.color} text-white mr-3`}>
                            <action.icon className="h-4 w-4" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">{action.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {action.description}
                            </div>
                          </div>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    {t.statistics}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <metric.icon className="h-8 w-8 mx-auto text-primary mb-2" />
                        <div className="text-2xl font-bold mb-1">{metric.value}</div>
                        <div className="text-sm text-muted-foreground mb-1">
                          {metric.title}
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {metric.trend}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Listings */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{t.myListings}</CardTitle>
                    <Button variant="outline" size="sm">
                      {t.viewAll}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentListings.map((listing) => (
                      <div key={listing.id} className="flex items-center gap-4 p-3 rounded-lg border">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
                        <div className="flex-1">
                          <h4 className="font-medium">{listing.title}</h4>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>{listing.type}</span>
                            <Badge variant={listing.status === 'Active' ? 'default' : 'secondary'}>
                              {listing.status}
                            </Badge>
                            <span>{listing.views} views</span>
                            <span>{listing.inquiries} inquiries</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    {t.recentActivity}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3">
                        <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                          <activity.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    {t.notifications}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-3 rounded-lg border ${
                          notification.unread ? 'bg-primary/5 border-primary/20' : 'bg-muted/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-sm font-medium">{notification.title}</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              {notification.message}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {notification.time}
                            </p>
                          </div>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Ad Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <AdSection type="sidebar" size="medium" language={language} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
