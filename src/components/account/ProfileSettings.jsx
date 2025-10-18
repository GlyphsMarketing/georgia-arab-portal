import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Globe, 
  Camera, 
  Save, 
  Lock, 
  Bell, 
  Shield, 
  CreditCard,
  Trash2,
  Edit,
  Plus,
  X
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Separator } from '@/components/ui/separator'
import AdSection from '../shared/AdSection'

const ProfileSettings = ({ language = 'en' }) => {
  const [activeTab, setActiveTab] = useState('profile')
  const [isEditing, setIsEditing] = useState(false)
  const [addresses, setAddresses] = useState([
    { id: 1, type: 'Home', address: '123 Main St, Atlanta, GA 30309', isDefault: true },
    { id: 2, type: 'Work', address: '456 Business Ave, Atlanta, GA 30309', isDefault: false }
  ])

  const translations = {
    en: {
      title: 'Profile Settings',
      subtitle: 'Manage your account information and preferences',
      profile: 'Profile',
      security: 'Security',
      notifications: 'Notifications',
      addresses: 'Addresses',
      billing: 'Billing',
      
      // Profile
      profileInfo: 'Profile Information',
      personalDetails: 'Personal Details',
      firstName: 'First Name',
      lastName: 'Last Name',
      email: 'Email Address',
      phone: 'Phone Number',
      bio: 'Bio',
      location: 'Location',
      website: 'Website',
      profilePhoto: 'Profile Photo',
      changePhoto: 'Change Photo',
      
      // Business Info
      businessInfo: 'Business Information',
      businessName: 'Business Name',
      businessCategory: 'Category',
      businessDescription: 'Description',
      businessAddress: 'Business Address',
      businessPhone: 'Business Phone',
      businessWebsite: 'Business Website',
      businessHours: 'Business Hours',
      
      // Security
      changePassword: 'Change Password',
      currentPassword: 'Current Password',
      newPassword: 'New Password',
      confirmPassword: 'Confirm New Password',
      twoFactor: 'Two-Factor Authentication',
      twoFactorDesc: 'Add an extra layer of security to your account',
      enable: 'Enable',
      disable: 'Disable',
      loginActivity: 'Login Activity',
      recentLogins: 'Recent Logins',
      
      // Notifications
      emailNotifications: 'Email Notifications',
      pushNotifications: 'Push Notifications',
      marketingEmails: 'Marketing Emails',
      newMessages: 'New Messages',
      listingUpdates: 'Listing Updates',
      jobAlerts: 'Job Alerts',
      communityNews: 'Community News',
      
      // Addresses
      savedAddresses: 'Saved Addresses',
      addAddress: 'Add New Address',
      editAddress: 'Edit Address',
      addressType: 'Address Type',
      streetAddress: 'Street Address',
      city: 'City',
      state: 'State',
      zipCode: 'ZIP Code',
      setDefault: 'Set as Default',
      home: 'Home',
      work: 'Work',
      other: 'Other',
      
      // Billing
      paymentMethods: 'Payment Methods',
      addPaymentMethod: 'Add Payment Method',
      billingHistory: 'Billing History',
      
      // Actions
      save: 'Save Changes',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      add: 'Add',
      update: 'Update',
      
      // Messages
      profileUpdated: 'Profile updated successfully',
      passwordChanged: 'Password changed successfully',
      addressAdded: 'Address added successfully',
      addressUpdated: 'Address updated successfully',
      addressDeleted: 'Address deleted successfully'
    },
    ar: {
      title: 'إعدادات الملف الشخصي',
      subtitle: 'إدارة معلومات حسابك وتفضيلاتك',
      profile: 'الملف الشخصي',
      security: 'الأمان',
      notifications: 'الإشعارات',
      addresses: 'العناوين',
      billing: 'الفوترة',
      
      // Profile
      profileInfo: 'معلومات الملف الشخصي',
      personalDetails: 'التفاصيل الشخصية',
      firstName: 'الاسم الأول',
      lastName: 'الاسم الأخير',
      email: 'عنوان البريد الإلكتروني',
      phone: 'رقم الهاتف',
      bio: 'نبذة شخصية',
      location: 'الموقع',
      website: 'الموقع الإلكتروني',
      profilePhoto: 'الصورة الشخصية',
      changePhoto: 'تغيير الصورة',
      
      // Business Info
      businessInfo: 'معلومات العمل',
      businessName: 'اسم العمل',
      businessCategory: 'الفئة',
      businessDescription: 'الوصف',
      businessAddress: 'عنوان العمل',
      businessPhone: 'هاتف العمل',
      businessWebsite: 'موقع العمل الإلكتروني',
      businessHours: 'ساعات العمل',
      
      // Security
      changePassword: 'تغيير كلمة المرور',
      currentPassword: 'كلمة المرور الحالية',
      newPassword: 'كلمة المرور الجديدة',
      confirmPassword: 'تأكيد كلمة المرور الجديدة',
      twoFactor: 'المصادقة الثنائية',
      twoFactorDesc: 'أضف طبقة إضافية من الأمان لحسابك',
      enable: 'تفعيل',
      disable: 'إلغاء التفعيل',
      loginActivity: 'نشاط تسجيل الدخول',
      recentLogins: 'عمليات الدخول الأخيرة',
      
      // Notifications
      emailNotifications: 'إشعارات البريد الإلكتروني',
      pushNotifications: 'الإشعارات المباشرة',
      marketingEmails: 'رسائل التسويق',
      newMessages: 'الرسائل الجديدة',
      listingUpdates: 'تحديثات القوائم',
      jobAlerts: 'تنبيهات الوظائف',
      communityNews: 'أخبار المجتمع',
      
      // Addresses
      savedAddresses: 'العناوين المحفوظة',
      addAddress: 'إضافة عنوان جديد',
      editAddress: 'تحرير العنوان',
      addressType: 'نوع العنوان',
      streetAddress: 'عنوان الشارع',
      city: 'المدينة',
      state: 'الولاية',
      zipCode: 'الرمز البريدي',
      setDefault: 'تعيين كافتراضي',
      home: 'المنزل',
      work: 'العمل',
      other: 'أخرى',
      
      // Billing
      paymentMethods: 'طرق الدفع',
      addPaymentMethod: 'إضافة طريقة دفع',
      billingHistory: 'تاريخ الفوترة',
      
      // Actions
      save: 'حفظ التغييرات',
      cancel: 'إلغاء',
      edit: 'تحرير',
      delete: 'حذف',
      add: 'إضافة',
      update: 'تحديث',
      
      // Messages
      profileUpdated: 'تم تحديث الملف الشخصي بنجاح',
      passwordChanged: 'تم تغيير كلمة المرور بنجاح',
      addressAdded: 'تم إضافة العنوان بنجاح',
      addressUpdated: 'تم تحديث العنوان بنجاح',
      addressDeleted: 'تم حذف العنوان بنجاح'
    }
  }

  const t = translations[language]

  // Mock user data
  const userData = {
    firstName: 'Ahmed',
    lastName: 'Al-Hassan',
    email: 'ahmed@example.com',
    phone: '+1 (555) 123-4567',
    bio: 'Passionate entrepreneur and community advocate in Atlanta.',
    location: 'Atlanta, Georgia',
    website: 'https://www.ahmed-hassan.com',
    avatar: '/api/placeholder/100/100',
    businessName: 'Al-Salam Restaurant',
    businessCategory: 'Restaurant',
    businessDescription: 'Authentic Middle Eastern cuisine in the heart of Atlanta.',
    businessAddress: '123 Peachtree Street, Atlanta, GA 30309',
    businessPhone: '+1 (555) 987-6543',
    businessWebsite: 'https://www.al-salam.com'
  }

  const ProfileTab = () => (
    <div className="space-y-8">
      {/* Profile Photo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            {t.profilePhoto}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src={userData.avatar} />
              <AvatarFallback className="text-2xl">
                {userData.firstName.charAt(0)}{userData.lastName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <Button variant="outline">
                <Camera className="h-4 w-4 mr-2" />
                {t.changePhoto}
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                JPG, PNG or GIF. Max size 5MB.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Details */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {t.personalDetails}
            </CardTitle>
            <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
              <Edit className="h-4 w-4 mr-2" />
              {isEditing ? t.cancel : t.edit}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName">{t.firstName}</Label>
              <Input
                id="firstName"
                defaultValue={userData.firstName}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="lastName">{t.lastName}</Label>
              <Input
                id="lastName"
                defaultValue={userData.lastName}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="email">{t.email}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  defaultValue={userData.email}
                  className="pl-10"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone">{t.phone}</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  defaultValue={userData.phone}
                  className="pl-10"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="bio">{t.bio}</Label>
              <Textarea
                id="bio"
                defaultValue={userData.bio}
                rows={3}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="location">{t.location}</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="location"
                  defaultValue={userData.location}
                  className="pl-10"
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div>
              <Label htmlFor="website">{t.website}</Label>
              <div className="relative">
                <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="website"
                  type="url"
                  defaultValue={userData.website}
                  className="pl-10"
                  disabled={!isEditing}
                />
              </div>
            </div>
          </div>
          {isEditing && (
            <div className="flex justify-end gap-2 mt-6">
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                {t.cancel}
              </Button>
              <Button>
                <Save className="h-4 w-4 mr-2" />
                {t.save}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Business Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="h-5 w-5" />
            {t.businessInfo}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="businessName">{t.businessName}</Label>
              <Input
                id="businessName"
                defaultValue={userData.businessName}
              />
            </div>
            <div>
              <Label htmlFor="businessCategory">{t.businessCategory}</Label>
              <Select defaultValue="restaurant">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="businessDescription">{t.businessDescription}</Label>
              <Textarea
                id="businessDescription"
                defaultValue={userData.businessDescription}
                rows={3}
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="businessAddress">{t.businessAddress}</Label>
              <Input
                id="businessAddress"
                defaultValue={userData.businessAddress}
              />
            </div>
            <div>
              <Label htmlFor="businessPhone">{t.businessPhone}</Label>
              <Input
                id="businessPhone"
                defaultValue={userData.businessPhone}
              />
            </div>
            <div>
              <Label htmlFor="businessWebsite">{t.businessWebsite}</Label>
              <Input
                id="businessWebsite"
                type="url"
                defaultValue={userData.businessWebsite}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button>
              <Save className="h-4 w-4 mr-2" />
              {t.save}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const SecurityTab = () => (
    <div className="space-y-8">
      {/* Change Password */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            {t.changePassword}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-w-md">
            <div>
              <Label htmlFor="currentPassword">{t.currentPassword}</Label>
              <Input id="currentPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="newPassword">{t.newPassword}</Label>
              <Input id="newPassword" type="password" />
            </div>
            <div>
              <Label htmlFor="confirmPassword">{t.confirmPassword}</Label>
              <Input id="confirmPassword" type="password" />
            </div>
            <Button>
              <Lock className="h-4 w-4 mr-2" />
              {t.update}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Two-Factor Authentication */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            {t.twoFactor}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Two-Factor Authentication</p>
              <p className="text-sm text-muted-foreground">{t.twoFactorDesc}</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Login Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            {t.loginActivity}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { device: 'Chrome on Windows', location: 'Atlanta, GA', time: '2 hours ago', current: true },
              { device: 'Safari on iPhone', location: 'Atlanta, GA', time: '1 day ago', current: false },
              { device: 'Chrome on Mac', location: 'Atlanta, GA', time: '3 days ago', current: false }
            ].map((login, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{login.device}</p>
                  <p className="text-sm text-muted-foreground">
                    {login.location} • {login.time}
                  </p>
                </div>
                {login.current && (
                  <Badge variant="secondary">Current</Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const NotificationsTab = () => (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            {t.emailNotifications}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { id: 'messages', label: t.newMessages, description: 'Get notified when you receive new messages' },
              { id: 'listings', label: t.listingUpdates, description: 'Updates about your listings and inquiries' },
              { id: 'jobs', label: t.jobAlerts, description: 'New job opportunities matching your criteria' },
              { id: 'community', label: t.communityNews, description: 'Community events and announcements' },
              { id: 'marketing', label: t.marketingEmails, description: 'Promotional emails and special offers' }
            ].map((notification) => (
              <div key={notification.id} className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-medium">{notification.label}</p>
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                </div>
                <Switch defaultChecked={notification.id !== 'marketing'} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            {t.pushNotifications}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              { id: 'push-messages', label: t.newMessages },
              { id: 'push-listings', label: t.listingUpdates },
              { id: 'push-jobs', label: t.jobAlerts }
            ].map((notification) => (
              <div key={notification.id} className="flex items-center justify-between">
                <p className="font-medium">{notification.label}</p>
                <Switch defaultChecked />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const AddressesTab = () => (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              {t.savedAddresses}
            </CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {t.addAddress}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {addresses.map((address) => (
              <div key={address.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium">{address.type}</p>
                    {address.isDefault && (
                      <Badge variant="secondary">Default</Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{address.address}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const BillingTab = () => (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" />
              {t.paymentMethods}
            </CardTitle>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              {t.addPaymentMethod}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Default</Badge>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t.billingHistory}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: 'Jan 15, 2024', amount: '$29.99', description: 'Premium Listing - Al-Salam Restaurant', status: 'Paid' },
              { date: 'Dec 15, 2023', amount: '$19.99', description: 'Featured Job Posting', status: 'Paid' },
              { date: 'Nov 15, 2023', amount: '$9.99', description: 'Marketplace Boost', status: 'Paid' }
            ].map((transaction, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{transaction.amount}</p>
                  <Badge variant="secondary">{transaction.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

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
          <h1 className="text-3xl font-bold text-foreground mb-2">
            {t.title}
          </h1>
          <p className="text-muted-foreground">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="sticky top-24"
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} orientation="vertical">
                <TabsList className="grid w-full grid-rows-5">
                  <TabsTrigger value="profile" className="justify-start">
                    <User className="h-4 w-4 mr-2" />
                    {t.profile}
                  </TabsTrigger>
                  <TabsTrigger value="security" className="justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    {t.security}
                  </TabsTrigger>
                  <TabsTrigger value="notifications" className="justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    {t.notifications}
                  </TabsTrigger>
                  <TabsTrigger value="addresses" className="justify-start">
                    <MapPin className="h-4 w-4 mr-2" />
                    {t.addresses}
                  </TabsTrigger>
                  <TabsTrigger value="billing" className="justify-start">
                    <CreditCard className="h-4 w-4 mr-2" />
                    {t.billing}
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsContent value="profile">
                  <ProfileTab />
                </TabsContent>
                <TabsContent value="security">
                  <SecurityTab />
                </TabsContent>
                <TabsContent value="notifications">
                  <NotificationsTab />
                </TabsContent>
                <TabsContent value="addresses">
                  <AddressesTab />
                </TabsContent>
                <TabsContent value="billing">
                  <BillingTab />
                </TabsContent>
              </Tabs>
            </motion.div>

            {/* Ad Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <AdSection type="banner" size="medium" language={language} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSettings
