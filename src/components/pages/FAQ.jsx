import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  User,
  Building2,
  Home,
  Briefcase,
  Settings,
  Shield,
  MessageCircle
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import AdSection from '../shared/AdSection'

const FAQ = ({ language }) => {
  const [searchValue, setSearchValue] = useState('')
  const [openItems, setOpenItems] = useState({})
  const [activeCategory, setActiveCategory] = useState('general')

  const translations = {
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about our platform',
      searchPlaceholder: 'Search for questions...',
      general: 'General',
      account: 'Account',
      business: 'Business',
      marketplace: 'Marketplace',
      realestate: 'Real Estate',
      jobs: 'Jobs',
      technical: 'Technical',
      privacy: 'Privacy & Security',
      stillNeedHelp: 'Still need help?',
      contactSupport: 'Contact Support',
      contactSupportText: 'Can\'t find what you\'re looking for? Our support team is here to help.',
      popularQuestions: 'Popular Questions',
      recentlyUpdated: 'Recently Updated',
      categories: 'Categories',
      allCategories: 'All Categories',
      searchResults: 'Search Results',
      noResults: 'No results found',
      noResultsText: 'Try adjusting your search terms or browse our categories.',
      helpful: 'Was this helpful?',
      yes: 'Yes',
      no: 'No',
      thankYou: 'Thank you for your feedback!'
    },
    ar: {
      title: 'الأسئلة الشائعة',
      subtitle: 'اعثر على إجابات للأسئلة الشائعة حول منصتنا',
      searchPlaceholder: 'البحث عن الأسئلة...',
      general: 'عام',
      account: 'الحساب',
      business: 'الأعمال',
      marketplace: 'السوق',
      realestate: 'العقارات',
      jobs: 'الوظائف',
      technical: 'تقني',
      privacy: 'الخصوصية والأمان',
      stillNeedHelp: 'لا تزال بحاجة لمساعدة؟',
      contactSupport: 'اتصل بالدعم',
      contactSupportText: 'لا يمكنك العثور على ما تبحث عنه؟ فريق الدعم لدينا هنا للمساعدة.',
      popularQuestions: 'الأسئلة الشائعة',
      recentlyUpdated: 'محدث حديثاً',
      categories: 'الفئات',
      allCategories: 'جميع الفئات',
      searchResults: 'نتائج البحث',
      noResults: 'لم يتم العثور على نتائج',
      noResultsText: 'حاول تعديل مصطلحات البحث أو تصفح فئاتنا.',
      helpful: 'هل كان هذا مفيداً؟',
      yes: 'نعم',
      no: 'لا',
      thankYou: 'شكراً لك على ملاحظاتك!'
    }
  }

  const t = translations[language]

  const categories = [
    { id: 'general', name: t.general, icon: HelpCircle, count: 8 },
    { id: 'account', name: t.account, icon: User, count: 12 },
    { id: 'business', name: t.business, icon: Building2, count: 10 },
    { id: 'marketplace', name: t.marketplace, icon: Settings, count: 9 },
    { id: 'realestate', name: t.realestate, icon: Home, count: 7 },
    { id: 'jobs', name: t.jobs, icon: Briefcase, count: 6 },
    { id: 'technical', name: t.technical, icon: Settings, count: 8 },
    { id: 'privacy', name: t.privacy, icon: Shield, count: 5 }
  ]

  const faqData = {
    general: [
      {
        id: 'g1',
        question: 'What is the Georgia Arab Community Portal?',
        answer: 'The Georgia Arab Community Portal is a comprehensive platform designed to connect Arab individuals, families, and businesses in Georgia. We provide services including business directory, marketplace, job listings, real estate, and community events.',
        popular: true
      },
      {
        id: 'g2',
        question: 'How do I join the community?',
        answer: 'Joining is free and easy! Simply click the "Sign Up" button and create your account. You can then access all community features including the marketplace, job board, and business directory.',
        popular: true
      },
      {
        id: 'g3',
        question: 'Is the platform available in Arabic?',
        answer: 'Yes! Our platform supports both English and Arabic languages. You can switch between languages using the language toggle in the header.',
        popular: false
      },
      {
        id: 'g4',
        question: 'How do I report inappropriate content?',
        answer: 'If you encounter inappropriate content, please use the "Report" button available on listings and posts, or contact our support team directly.',
        popular: false
      }
    ],
    account: [
      {
        id: 'a1',
        question: 'How do I create an account?',
        answer: 'Click "Sign Up" in the top navigation, fill out the registration form with your details, verify your email address, and you\'re ready to go!',
        popular: true
      },
      {
        id: 'a2',
        question: 'I forgot my password. How do I reset it?',
        answer: 'Click "Forgot Password" on the login page, enter your email address, and we\'ll send you instructions to reset your password.',
        popular: true
      },
      {
        id: 'a3',
        question: 'How do I update my profile information?',
        answer: 'Go to your Dashboard, click on "Profile Settings", and update your information. Don\'t forget to save your changes!',
        popular: false
      },
      {
        id: 'a4',
        question: 'Can I delete my account?',
        answer: 'Yes, you can delete your account from the Account Settings page. Please note that this action is permanent and cannot be undone.',
        popular: false
      }
    ],
    business: [
      {
        id: 'b1',
        question: 'How do I list my business?',
        answer: 'Create an account, go to the Business Directory section, and click "Add Business". Fill out your business information, upload photos, and submit for review.',
        popular: true
      },
      {
        id: 'b2',
        question: 'Is there a fee for business listings?',
        answer: 'Basic business listings are free. We also offer premium listing options with enhanced features for a monthly fee.',
        popular: true
      },
      {
        id: 'b3',
        question: 'How long does it take for my business to be approved?',
        answer: 'Most business listings are reviewed and approved within 24-48 hours. We may contact you if we need additional information.',
        popular: false
      }
    ],
    marketplace: [
      {
        id: 'm1',
        question: 'How do I sell items on the marketplace?',
        answer: 'Create an account, go to the Marketplace section, click "Add Product", fill out the item details, upload photos, and publish your listing.',
        popular: true
      },
      {
        id: 'm2',
        question: 'Are there any fees for selling?',
        answer: 'Listing items is free. We only charge a small commission when your item sells successfully.',
        popular: true
      },
      {
        id: 'm3',
        question: 'How do I contact a seller?',
        answer: 'Click on any listing and use the "Contact Seller" button to send a message directly through our platform.',
        popular: false
      }
    ],
    realestate: [
      {
        id: 'r1',
        question: 'How do I list my property?',
        answer: 'Go to the Real Estate section, click "Add Property", provide detailed information about your property, upload high-quality photos, and submit for review.',
        popular: true
      },
      {
        id: 'r2',
        question: 'Can I list both rental and sale properties?',
        answer: 'Yes, you can list properties for both rent and sale. Simply select the appropriate option when creating your listing.',
        popular: false
      }
    ],
    jobs: [
      {
        id: 'j1',
        question: 'How do I post a job opening?',
        answer: 'Create a business account, go to the Jobs section, click "Post Job", fill out the job details including requirements and benefits, and publish your listing.',
        popular: true
      },
      {
        id: 'j2',
        question: 'How do I apply for jobs?',
        answer: 'Browse job listings, click on positions that interest you, and use the "Apply Now" button to submit your application.',
        popular: true
      }
    ],
    technical: [
      {
        id: 't1',
        question: 'The website is not loading properly. What should I do?',
        answer: 'Try refreshing the page, clearing your browser cache, or using a different browser. If the problem persists, contact our technical support.',
        popular: true
      },
      {
        id: 't2',
        question: 'Do you have a mobile app?',
        answer: 'Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play.',
        popular: false
      }
    ],
    privacy: [
      {
        id: 'p1',
        question: 'How do you protect my personal information?',
        answer: 'We use industry-standard encryption and security measures to protect your data. We never sell your personal information to third parties.',
        popular: true
      },
      {
        id: 'p2',
        question: 'Can I control who sees my contact information?',
        answer: 'Yes, you can adjust your privacy settings to control what information is visible to other users.',
        popular: false
      }
    ]
  }

  const toggleItem = (itemId) => {
    setOpenItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  const filteredFAQs = searchValue
    ? Object.values(faqData).flat().filter(faq =>
        faq.question.toLowerCase().includes(searchValue.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchValue.toLowerCase())
      )
    : faqData[activeCategory] || []

  const popularFAQs = Object.values(faqData).flat().filter(faq => faq.popular)

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

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.categories}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? 'default' : 'ghost'}
                      className="w-full justify-start"
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <category.icon className="h-4 w-4 mr-2" />
                      {category.name}
                      <Badge variant="secondary" className="ml-auto">
                        {category.count}
                      </Badge>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              {/* Popular Questions */}
              <Card>
                <CardHeader>
                  <CardTitle>{t.popularQuestions}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {popularFAQs.slice(0, 5).map((faq) => (
                    <div key={faq.id} className="text-sm">
                      <button
                        className="text-left hover:text-primary transition-colors"
                        onClick={() => {
                          // Find the category and set it active
                          const category = Object.keys(faqData).find(cat =>
                            faqData[cat].some(item => item.id === faq.id)
                          )
                          if (category) setActiveCategory(category)
                          toggleItem(faq.id)
                        }}
                      >
                        {faq.question}
                      </button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Ad Section */}
              <AdSection type="sidebar" size="medium" language={language} />
            </motion.div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {searchValue ? (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {t.searchResults} "{searchValue}"
                  </h2>
                  {filteredFAQs.length === 0 && (
                    <div className="text-center py-12">
                      <HelpCircle className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{t.noResults}</h3>
                      <p className="text-muted-foreground">{t.noResultsText}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-4">
                    {categories.find(cat => cat.id === activeCategory)?.name}
                  </h2>
                </div>
              )}

              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card>
                      <Collapsible
                        open={openItems[faq.id]}
                        onOpenChange={() => toggleItem(faq.id)}
                      >
                        <CollapsibleTrigger asChild>
                          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg font-medium text-left">
                                {faq.question}
                                {faq.popular && (
                                  <Badge variant="secondary" className="ml-2">
                                    Popular
                                  </Badge>
                                )}
                              </CardTitle>
                              {openItems[faq.id] ? (
                                <ChevronUp className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                          </CardHeader>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-0">
                            <p className="text-muted-foreground leading-relaxed mb-4">
                              {faq.answer}
                            </p>
                            <div className="flex items-center gap-4 pt-4 border-t">
                              <span className="text-sm text-muted-foreground">
                                {t.helpful}
                              </span>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  {t.yes}
                                </Button>
                                <Button size="sm" variant="outline">
                                  {t.no}
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Contact Support */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-12"
              >
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{t.stillNeedHelp}</h3>
                    <p className="text-muted-foreground mb-6">
                      {t.contactSupportText}
                    </p>
                    <Button size="lg">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      {t.contactSupport}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
