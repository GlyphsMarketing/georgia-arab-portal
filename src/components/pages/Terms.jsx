import { motion } from 'framer-motion'
import { FileText, Scale, Shield, AlertTriangle, Users, Building2, Globe, Mail, Phone, MapPin, ShoppingBag, Briefcase, Home } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import AdSection from '../shared/AdSection'

const Terms = ({ language }) => {
  const translations = {
    en: {
      title: 'Terms of Service',
      subtitle: 'Terms and conditions for using our platform',
      lastUpdated: 'Last updated',
      effectiveDate: 'January 1, 2024',
      tableOfContents: 'Table of Contents',
      acceptance: 'Acceptance of Terms',
      acceptanceDesc: 'By accessing and using this platform, you accept and agree to be bound by the terms and provision of this agreement.',
      description: 'Description of Service',
      descriptionDesc: 'Georgia Arab Community Portal is a platform that connects Arab individuals, families, and businesses in Georgia through various services including business directory, marketplace, job listings, and real estate.',
      userAccounts: 'User Accounts',
      userAccountsDesc: 'You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.',
      userConduct: 'User Conduct',
      userConductDesc: 'You agree to use our platform in accordance with all applicable laws and regulations.',
      contentPolicy: 'Content Policy',
      contentPolicyDesc: 'Users are responsible for the content they post and must ensure it complies with our community guidelines.',
      intellectualProperty: 'Intellectual Property',
      intellectualPropertyDesc: 'All content on this platform is protected by copyright and other intellectual property laws.',
      privacy: 'Privacy',
      privacyDesc: 'Your privacy is important to us. Please review our Privacy Policy to understand how we collect and use your information.',
      termination: 'Termination',
      terminationDesc: 'We reserve the right to terminate or suspend your account at any time for violations of these terms.',
      disclaimers: 'Disclaimers',
      disclaimersDesc: 'This platform is provided "as is" without any warranties, express or implied.',
      limitation: 'Limitation of Liability',
      limitationDesc: 'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
      governing: 'Governing Law',
      governingDesc: 'These terms shall be governed by and construed in accordance with the laws of the State of Georgia.',
      changes: 'Changes to Terms',
      changesDesc: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.',
      contact: 'Contact Information',
      contactDesc: 'If you have any questions about these Terms of Service, please contact us.',
      prohibited: 'Prohibited Activities',
      prohibitedList: [
        'Posting false, misleading, or fraudulent content',
        'Harassing, threatening, or intimidating other users',
        'Violating any applicable laws or regulations',
        'Infringing on intellectual property rights',
        'Distributing spam or unsolicited communications',
        'Attempting to gain unauthorized access to our systems',
        'Using automated tools to access our platform',
        'Posting content that is offensive, discriminatory, or harmful'
      ],
      userRights: 'User Rights',
      userRightsList: [
        'Access and use our platform in accordance with these terms',
        'Post content that complies with our guidelines',
        'Receive customer support for platform-related issues',
        'Request deletion of your account and associated data',
        'Report violations of our terms or community guidelines'
      ],
      platformRights: 'Platform Rights',
      platformRightsList: [
        'Modify, suspend, or discontinue any part of our service',
        'Remove content that violates our terms or guidelines',
        'Terminate accounts that violate our terms',
        'Update our terms of service as needed',
        'Collect and use data as described in our Privacy Policy'
      ],
      businessListings: 'Business Listings',
      businessListingsDesc: 'Business owners are responsible for the accuracy of their listing information and must comply with all applicable business regulations.',
      marketplace: 'Marketplace Terms',
      marketplaceDesc: 'Users engaging in marketplace transactions do so at their own risk. We do not guarantee the quality, safety, or legality of items listed.',
      jobs: 'Job Listings',
      jobsDesc: 'Employers must comply with all applicable employment laws and regulations when posting job listings.',
      realEstate: 'Real Estate Listings',
      realEstateDesc: 'Real estate listings must be accurate and comply with all applicable real estate laws and regulations.',
      disputeResolution: 'Dispute Resolution',
      disputeResolutionDesc: 'Any disputes arising from these terms will be resolved through binding arbitration in accordance with Georgia law.',
      severability: 'Severability',
      severabilityDesc: 'If any provision of these terms is found to be unenforceable, the remaining provisions will remain in full force and effect.',
      entireAgreement: 'Entire Agreement',
      entireAgreementDesc: 'These terms constitute the entire agreement between you and us regarding the use of our platform.',
      importantNotice: 'Important Notice',
      importantNoticeDesc: 'Please read these terms carefully before using our platform. By using our services, you agree to be bound by these terms.'
    },
    ar: {
      title: 'شروط الخدمة',
      subtitle: 'الشروط والأحكام لاستخدام منصتنا',
      lastUpdated: 'آخر تحديث',
      effectiveDate: '1 يناير 2024',
      tableOfContents: 'جدول المحتويات',
      acceptance: 'قبول الشروط',
      acceptanceDesc: 'من خلال الوصول إلى هذه المنصة واستخدامها، فإنك تقبل وتوافق على الالتزام بشروط وأحكام هذه الاتفاقية.',
      description: 'وصف الخدمة',
      descriptionDesc: 'بوابة المجتمع العربي في جورجيا هي منصة تربط الأفراد والعائلات والشركات العربية في جورجيا من خلال خدمات مختلفة بما في ذلك دليل الأعمال والسوق وقوائم الوظائف والعقارات.',
      userAccounts: 'حسابات المستخدمين',
      userAccountsDesc: 'أنت مسؤول عن الحفاظ على سرية حسابك وكلمة المرور وتقييد الوصول إلى جهاز الكمبيوتر الخاص بك.',
      userConduct: 'سلوك المستخدم',
      userConductDesc: 'توافق على استخدام منصتنا وفقاً لجميع القوانين واللوائح المعمول بها.',
      contentPolicy: 'سياسة المحتوى',
      contentPolicyDesc: 'المستخدمون مسؤولون عن المحتوى الذي ينشرونه ويجب أن يضمنوا امتثاله لإرشادات مجتمعنا.',
      intellectualProperty: 'الملكية الفكرية',
      intellectualPropertyDesc: 'جميع المحتويات على هذه المنصة محمية بحقوق الطبع والنشر وقوانين الملكية الفكرية الأخرى.',
      privacy: 'الخصوصية',
      privacyDesc: 'خصوصيتك مهمة بالنسبة لنا. يرجى مراجعة سياسة الخصوصية الخاصة بنا لفهم كيفية جمع واستخدام معلوماتك.',
      termination: 'الإنهاء',
      terminationDesc: 'نحتفظ بالحق في إنهاء أو تعليق حسابك في أي وقت لانتهاك هذه الشروط.',
      disclaimers: 'إخلاء المسؤولية',
      disclaimersDesc: 'يتم توفير هذه المنصة "كما هي" دون أي ضمانات، صريحة أو ضمنية.',
      limitation: 'تحديد المسؤولية',
      limitationDesc: 'لن نكون مسؤولين عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية.',
      governing: 'القانون الحاكم',
      governingDesc: 'تخضع هذه الشروط وتفسر وفقاً لقوانين ولاية جورجيا.',
      changes: 'التغييرات على الشروط',
      changesDesc: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. ستكون التغييرات سارية فور النشر.',
      contact: 'معلومات الاتصال',
      contactDesc: 'إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا.',
      prohibited: 'الأنشطة المحظورة',
      prohibitedList: [
        'نشر محتوى كاذب أو مضلل أو احتيالي',
        'مضايقة أو تهديد أو ترهيب المستخدمين الآخرين',
        'انتهاك أي قوانين أو لوائح معمول بها',
        'التعدي على حقوق الملكية الفكرية',
        'توزيع الرسائل غير المرغوب فيها أو الاتصالات غير المطلوبة',
        'محاولة الحصول على وصول غير مصرح به لأنظمتنا',
        'استخدام أدوات آلية للوصول إلى منصتنا',
        'نشر محتوى مسيء أو تمييزي أو ضار'
      ],
      userRights: 'حقوق المستخدم',
      userRightsList: [
        'الوصول واستخدام منصتنا وفقاً لهذه الشروط',
        'نشر محتوى يتوافق مع إرشاداتنا',
        'تلقي دعم العملاء للقضايا المتعلقة بالمنصة',
        'طلب حذف حسابك والبيانات المرتبطة به',
        'الإبلاغ عن انتهاكات شروطنا أو إرشادات المجتمع'
      ],
      platformRights: 'حقوق المنصة',
      platformRightsList: [
        'تعديل أو تعليق أو إيقاف أي جزء من خدمتنا',
        'إزالة المحتوى الذي ينتهك شروطنا أو إرشاداتنا',
        'إنهاء الحسابات التي تنتهك شروطنا',
        'تحديث شروط الخدمة الخاصة بنا حسب الحاجة',
        'جمع واستخدام البيانات كما هو موضح في سياسة الخصوصية'
      ],
      businessListings: 'قوائم الأعمال',
      businessListingsDesc: 'أصحاب الأعمال مسؤولون عن دقة معلومات قوائمهم ويجب أن يمتثلوا لجميع لوائح الأعمال المعمول بها.',
      marketplace: 'شروط السوق',
      marketplaceDesc: 'المستخدمون الذين يشاركون في معاملات السوق يفعلون ذلك على مسؤوليتهم الخاصة. نحن لا نضمن جودة أو سلامة أو قانونية العناصر المدرجة.',
      jobs: 'قوائم الوظائف',
      jobsDesc: 'يجب على أصحاب العمل الامتثال لجميع قوانين ولوائح العمل المعمول بها عند نشر قوائم الوظائف.',
      realEstate: 'قوائم العقارات',
      realEstateDesc: 'يجب أن تكون قوائم العقارات دقيقة وتتوافق مع جميع قوانين ولوائح العقارات المعمول بها.',
      disputeResolution: 'حل النزاعات',
      disputeResolutionDesc: 'سيتم حل أي نزاعات تنشأ من هذه الشروط من خلال التحكيم الملزم وفقاً لقانون جورجيا.',
      severability: 'القابلية للفصل',
      severabilityDesc: 'إذا تبين أن أي حكم من هذه الشروط غير قابل للتنفيذ، فستبقى الأحكام المتبقية سارية المفعول.',
      entireAgreement: 'الاتفاقية الكاملة',
      entireAgreementDesc: 'تشكل هذه الشروط الاتفاقية الكاملة بينك وبيننا فيما يتعلق باستخدام منصتنا.',
      importantNotice: 'إشعار مهم',
      importantNoticeDesc: 'يرجى قراءة هذه الشروط بعناية قبل استخدام منصتنا. باستخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط.'
    }
  }

  const t = translations[language]

  const sections = [
    { id: 'acceptance', title: t.acceptance },
    { id: 'description', title: t.description },
    { id: 'user-accounts', title: t.userAccounts },
    { id: 'user-conduct', title: t.userConduct },
    { id: 'content-policy', title: t.contentPolicy },
    { id: 'intellectual-property', title: t.intellectualProperty },
    { id: 'privacy', title: t.privacy },
    { id: 'termination', title: t.termination },
    { id: 'disclaimers', title: t.disclaimers },
    { id: 'limitation', title: t.limitation },
    { id: 'governing', title: t.governing },
    { id: 'changes', title: t.changes },
    { id: 'contact', title: t.contact }
  ]

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
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="h-12 w-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t.title}
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            {t.subtitle}
          </p>
          <Badge variant="outline" className="text-sm">
            {t.lastUpdated}: {t.effectiveDate}
          </Badge>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Alert className="border-orange-200 bg-orange-50">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800">
              <strong>{t.importantNotice}:</strong> {t.importantNoticeDesc}
            </AlertDescription>
          </Alert>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sticky top-24"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{t.tableOfContents}</CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {index + 1}. {section.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Acceptance of Terms */}
            <motion.section
              id="acceptance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.acceptance}</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {t.acceptanceDesc}
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* Description of Service */}
            <motion.section
              id="description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.description}</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {t.descriptionDesc}
                  </p>
                </CardContent>
              </Card>
            </motion.section>

            {/* User Conduct */}
            <motion.section
              id="user-conduct"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.userConduct}</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t.userConductDesc}
                    </p>
                  </CardContent>
                </Card>

                {/* Prohibited Activities */}
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-800">
                      <AlertTriangle className="h-5 w-5" />
                      {t.prohibited}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {t.prohibitedList.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-red-700">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* User Rights and Platform Rights */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* User Rights */}
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-800">
                      <Users className="h-5 w-5" />
                      {t.userRights}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {t.userRightsList.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-green-700">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Platform Rights */}
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                      <Shield className="h-5 w-5" />
                      {t.platformRights}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {t.platformRightsList.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-blue-700">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Service-Specific Terms */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6">Service-Specific Terms</h2>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      {t.businessListings}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t.businessListingsDesc}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ShoppingBag className="h-5 w-5" />
                      {t.marketplace}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t.marketplaceDesc}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5" />
                      {t.jobs}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t.jobsDesc}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="h-5 w-5" />
                      {t.realEstate}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t.realEstateDesc}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Legal Sections */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Scale className="h-5 w-5" />
                      {t.disputeResolution}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t.disputeResolutionDesc}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t.governing}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t.governingDesc}</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>{t.changes}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{t.changesDesc}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Ad Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <AdSection type="banner" size="medium" language={language} />
            </motion.div>

            {/* Contact Information */}
            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.contact}</h2>
              <Card>
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6">{t.contactDesc}</p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Address</div>
                          <div className="text-sm text-muted-foreground">
                            123 Peachtree Street<br />
                            Atlanta, GA 30309
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Email</div>
                          <div className="text-sm text-muted-foreground">
                            legal@georgia-arab.com
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <div className="font-medium">Phone</div>
                          <div className="text-sm text-muted-foreground">
                            +1 (555) 123-4567
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Button className="w-full">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Legal Team
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Terms
