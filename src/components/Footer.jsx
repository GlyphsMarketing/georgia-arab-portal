import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// import lightLogo from '../assets/light_bk_ga.png'
// import darkLogo from '../assets/dark_bk_ga.png'
import lightLogo from '../assets/light_bk_ga.ico'
import darkLogo from '../assets/dark_bk_ga.ico'

const Footer = ({ language }) => {
  const translations = {
    en: {
      about: 'About Us',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact Info',
      newsletter: 'Newsletter',
      newsletterText: 'Subscribe to get updates on community events and news',
      subscribe: 'Subscribe',
      emailPlaceholder: 'Enter your email',
      home: 'Home',
      directory: 'Directory',
      marketplace: 'Marketplace',
      realEstate: 'Real Estate',
      jobs: 'Jobs',
      blogs: 'Blogs',
      businesses: 'Business Directory',
      faq: 'FAQ',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      aboutText: 'Georgia Arab Community Portal is your gateway to connecting with the vibrant Arab community in Georgia. Find businesses, jobs, real estate, and more.',
      phone: '+1 (555) 123-4567',
      email: 'info@georgia-arab.com',
      address: 'Atlanta, Georgia, USA',
      copyright: 'Made with',
      by: 'by Georgia Arab Community',
      allRights: 'All rights reserved.'
    },
    ar: {
      about: 'من نحن',
      quickLinks: 'روابط سريعة',
      services: 'الخدمات',
      contact: 'معلومات الاتصال',
      newsletter: 'النشرة الإخبارية',
      newsletterText: 'اشترك للحصول على تحديثات حول فعاليات وأخبار المجتمع',
      subscribe: 'اشتراك',
      emailPlaceholder: 'أدخل بريدك الإلكتروني',
      home: 'الرئيسية',
      directory: 'الدليل',
      marketplace: 'السوق',
      realEstate: 'العقارات',
      jobs: 'الوظائف',
      blogs: 'المدونات',
      businesses: 'دليل الأعمال',
      faq: 'الأسئلة الشائعة',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      aboutText: 'بوابة المجتمع العربي في جورجيا هي بوابتك للتواصل مع المجتمع العربي النابض بالحياة في جورجيا. اعثر على الأعمال والوظائف والعقارات والمزيد.',
      phone: '+1 (555) 123-4567',
      email: 'info@georgia-arab.com',
      address: 'أتلانتا، جورجيا، الولايات المتحدة',
      copyright: 'صُنع بـ',
      by: 'من قبل مجتمع العرب في جورجيا',
      allRights: 'جميع الحقوق محفوظة.'
    }
  }

  const t = translations[language]

  const quickLinks = [
    { path: '/', label: t.home },
    { path: '/directory', label: t.directory },
    { path: '/about', label: t.about },
    { path: '/contact', label: 'Contact' },
  ]

  const services = [
    { path: '/marketplace', label: t.marketplace },
    { path: '/real-estate', label: t.realEstate },
    { path: '/jobs', label: t.jobs },
    { path: '/businesses', label: t.businesses },
  ]

  const legal = [
    { path: '/faq', label: t.faq },
    { path: '/privacy', label: t.privacy },
    { path: '/terms', label: t.terms },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={darkLogo}
                alt="Georgia Arab Community"
                className="h-12 w-auto dark:hidden"
              />
              <img
                src={lightLogo}
                alt="Georgia Arab Community"
                className="h-12 w-auto hidden dark:block"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t.aboutText}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.services}</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
              {legal.map((item, index) => (
                <li key={`legal-${index}`}>
                  <Link
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.contact}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>{t.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>{t.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>{t.address}</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="font-medium text-foreground mb-2">{t.newsletter}</h4>
              <p className="text-xs text-muted-foreground mb-3">
                {t.newsletterText}
              </p>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  className="flex-1 text-sm"
                />
                <Button size="sm">
                  {t.subscribe}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>{t.copyright}</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>{t.by}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 {t.allRights}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
