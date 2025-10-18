import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  MessageCircle,
  User,
  Building2,
  Globe,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import FormField from '../shared/FormField'
import AdSection from '../shared/AdSection'

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    newsletter: false
  })
  const [errors, setErrors] = useState({})

  const translations = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with our community team',
      getInTouch: 'Get in Touch',
      contactForm: 'Contact Form',
      contactInfo: 'Contact Information',
      officeHours: 'Office Hours',
      socialMedia: 'Follow Us',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Subject',
      category: 'Category',
      message: 'Message',
      newsletter: 'Subscribe to our newsletter',
      sendMessage: 'Send Message',
      sending: 'Sending...',
      messageSent: 'Message sent successfully!',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address',
      selectCategory: 'Select a category',
      generalInquiry: 'General Inquiry',
      businessListing: 'Business Listing',
      technicalSupport: 'Technical Support',
      partnership: 'Partnership',
      eventInquiry: 'Event Inquiry',
      feedback: 'Feedback',
      other: 'Other',
      address: 'Address',
      phoneNumber: 'Phone',
      emailAddress: 'Email',
      mondayFriday: 'Monday - Friday',
      saturday: 'Saturday',
      sunday: 'Sunday',
      closed: 'Closed',
      officeLocation: 'Office Location',
      mailingAddress: 'Mailing Address',
      emergencyContact: 'Emergency Contact',
      businessHours: 'Business Hours',
      responseTime: 'Response Time',
      responseTimeText: 'We typically respond within 24 hours during business days.',
      locations: 'Our Locations',
      mainOffice: 'Main Office',
      communityCenter: 'Community Center',
      meetingRooms: 'Meeting Rooms Available',
      parking: 'Free Parking',
      publicTransit: 'Public Transit Access'
    },
    ar: {
      title: 'اتصل بنا',
      subtitle: 'تواصل مع فريق المجتمع',
      getInTouch: 'تواصل معنا',
      contactForm: 'نموذج الاتصال',
      contactInfo: 'معلومات الاتصال',
      officeHours: 'ساعات العمل',
      socialMedia: 'تابعنا',
      name: 'الاسم الكامل',
      email: 'عنوان البريد الإلكتروني',
      phone: 'رقم الهاتف',
      subject: 'الموضوع',
      category: 'الفئة',
      message: 'الرسالة',
      newsletter: 'اشترك في نشرتنا الإخبارية',
      sendMessage: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      messageSent: 'تم إرسال الرسالة بنجاح!',
      required: 'هذا الحقل مطلوب',
      invalidEmail: 'يرجى إدخال عنوان بريد إلكتروني صحيح',
      selectCategory: 'اختر فئة',
      generalInquiry: 'استفسار عام',
      businessListing: 'قائمة الأعمال',
      technicalSupport: 'الدعم الفني',
      partnership: 'الشراكة',
      eventInquiry: 'استفسار الفعاليات',
      feedback: 'التعليقات',
      other: 'أخرى',
      address: 'العنوان',
      phoneNumber: 'الهاتف',
      emailAddress: 'البريد الإلكتروني',
      mondayFriday: 'الاثنين - الجمعة',
      saturday: 'السبت',
      sunday: 'الأحد',
      closed: 'مغلق',
      officeLocation: 'موقع المكتب',
      mailingAddress: 'عنوان البريد',
      emergencyContact: 'جهة الاتصال الطارئة',
      businessHours: 'ساعات العمل',
      responseTime: 'وقت الاستجابة',
      responseTimeText: 'نحن نرد عادة خلال 24 ساعة خلال أيام العمل.',
      locations: 'مواقعنا',
      mainOffice: 'المكتب الرئيسي',
      communityCenter: 'مركز المجتمع',
      meetingRooms: 'غرف اجتماعات متاحة',
      parking: 'موقف مجاني',
      publicTransit: 'وصول النقل العام'
    }
  }

  const t = translations[language]

  const categoryOptions = [
    { value: 'general', label: t.generalInquiry },
    { value: 'business', label: t.businessListing },
    { value: 'support', label: t.technicalSupport },
    { value: 'partnership', label: t.partnership },
    { value: 'event', label: t.eventInquiry },
    { value: 'feedback', label: t.feedback },
    { value: 'other', label: t.other }
  ]

  const contactInfo = [
    {
      icon: MapPin,
      title: t.address,
      details: ['123 Peachtree Street', 'Atlanta, GA 30309', 'United States'],
      type: 'address'
    },
    {
      icon: Phone,
      title: t.phoneNumber,
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Arabic)'],
      type: 'phone'
    },
    {
      icon: Mail,
      title: t.emailAddress,
      details: ['info@georgia-arab.com', 'support@georgia-arab.com'],
      type: 'email'
    }
  ]

  const officeHours = [
    { day: t.mondayFriday, hours: '9:00 AM - 6:00 PM' },
    { day: t.saturday, hours: '10:00 AM - 4:00 PM' },
    { day: t.sunday, hours: t.closed }
  ]

  const locations = [
    {
      name: t.mainOffice,
      address: '123 Peachtree Street, Atlanta, GA 30309',
      features: [t.meetingRooms, t.parking, t.publicTransit],
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
    },
    {
      name: t.communityCenter,
      address: '456 Oak Avenue, Marietta, GA 30060',
      features: [t.parking, 'Event Space', 'Prayer Room'],
      hours: 'Mon-Sun: 8:00 AM - 10:00 PM'
    }
  ]

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', url: '#', color: 'text-blue-600' },
    { icon: Twitter, name: 'Twitter', url: '#', color: 'text-blue-400' },
    { icon: Instagram, name: 'Instagram', url: '#', color: 'text-pink-600' },
    { icon: Linkedin, name: 'LinkedIn', url: '#', color: 'text-blue-700' }
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = t.required
    if (!formData.email.trim()) {
      newErrors.email = t.required
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.invalidEmail
    }
    if (!formData.subject.trim()) newErrors.subject = t.required
    if (!formData.category) newErrors.category = t.required
    if (!formData.message.trim()) newErrors.message = t.required
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData)
      // Show success message or redirect
    }
  }

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

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    {t.contactForm}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        type="text"
                        name="name"
                        label={t.name}
                        placeholder={t.name}
                        value={formData.name}
                        onChange={handleInputChange}
                        error={errors.name}
                        required
                        language={language}
                      />
                      <FormField
                        type="email"
                        name="email"
                        label={t.email}
                        placeholder={t.email}
                        value={formData.email}
                        onChange={handleInputChange}
                        error={errors.email}
                        required
                        language={language}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        type="tel"
                        name="phone"
                        label={t.phone}
                        placeholder={t.phone}
                        value={formData.phone}
                        onChange={handleInputChange}
                        error={errors.phone}
                        language={language}
                      />
                      <FormField
                        type="select"
                        name="category"
                        label={t.category}
                        placeholder={t.selectCategory}
                        value={formData.category}
                        onChange={handleInputChange}
                        error={errors.category}
                        options={categoryOptions}
                        required
                        language={language}
                      />
                    </div>

                    <FormField
                      type="text"
                      name="subject"
                      label={t.subject}
                      placeholder={t.subject}
                      value={formData.subject}
                      onChange={handleInputChange}
                      error={errors.subject}
                      required
                      language={language}
                    />

                    <FormField
                      type="textarea"
                      name="message"
                      label={t.message}
                      placeholder={t.message}
                      value={formData.message}
                      onChange={handleInputChange}
                      error={errors.message}
                      rows={6}
                      required
                      language={language}
                    />

                    <FormField
                      type="checkbox"
                      name="newsletter"
                      label={t.newsletter}
                      value={formData.newsletter}
                      onChange={handleInputChange}
                      language={language}
                    />

                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      {t.sendMessage}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{t.contactInfo}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <info.icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium mb-1">{info.title}</h4>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {t.businessHours}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.hours}</span>
                    </div>
                  ))}
                  <div className="pt-3 border-t">
                    <h4 className="font-medium mb-2">{t.responseTime}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.responseTimeText}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{t.socialMedia}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start"
                        asChild
                      >
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <social.icon className={`h-4 w-4 mr-2 ${social.color}`} />
                          {social.name}
                        </a>
                      </Button>
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

        {/* Locations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">{t.locations}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    {location.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    <MapPin className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
