import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Users, Database, Globe, Mail, Phone, MapPin, Building2, TrendingUp, Scale, Key, Edit, Trash2, Download } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import AdSection from '../shared/AdSection'

const Privacy = ({ language }) => {
  const translations = {
    en: {
      title: 'Privacy Policy',
      subtitle: 'How we collect, use, and protect your personal information',
      lastUpdated: 'Last updated',
      effectiveDate: 'January 1, 2024',
      tableOfContents: 'Table of Contents',
      informationWeCollect: 'Information We Collect',
      howWeUseInformation: 'How We Use Your Information',
      informationSharing: 'Information Sharing and Disclosure',
      dataSecurity: 'Data Security',
      yourRights: 'Your Rights and Choices',
      cookiesAndTracking: 'Cookies and Tracking Technologies',
      childrenPrivacy: 'Children\'s Privacy',
      internationalTransfers: 'International Data Transfers',
      policyChanges: 'Changes to This Policy',
      contactUs: 'Contact Us',
      personalInfo: 'Personal Information',
      personalInfoDesc: 'Name, email address, phone number, and profile information you provide when creating an account.',
      businessInfo: 'Business Information',
      businessInfoDesc: 'Business details, contact information, and descriptions when you list your business.',
      usageData: 'Usage Data',
      usageDataDesc: 'Information about how you use our platform, including pages visited and features used.',
      deviceInfo: 'Device Information',
      deviceInfoDesc: 'IP address, browser type, device type, and operating system information.',
      provideServices: 'Provide Services',
      provideServicesDesc: 'To operate our platform, process transactions, and provide customer support.',
      communication: 'Communication',
      communicationDesc: 'To send you updates, notifications, and respond to your inquiries.',
      improvement: 'Platform Improvement',
      improvementDesc: 'To analyze usage patterns and improve our services and user experience.',
      legal: 'Legal Compliance',
      legalDesc: 'To comply with legal obligations and protect our rights and the rights of our users.',
      noSelling: 'We Do Not Sell Your Data',
      noSellingDesc: 'We never sell your personal information to third parties.',
      serviceProviders: 'Service Providers',
      serviceProvidersDesc: 'We may share information with trusted service providers who help us operate our platform.',
      legalRequirements: 'Legal Requirements',
      legalRequirementsDesc: 'We may disclose information when required by law or to protect our rights.',
      businessTransfers: 'Business Transfers',
      businessTransfersDesc: 'Information may be transferred in connection with mergers or acquisitions.',
      encryption: 'Data Encryption',
      encryptionDesc: 'We use industry-standard encryption to protect your data in transit and at rest.',
      accessControls: 'Access Controls',
      accessControlsDesc: 'We limit access to your personal information to authorized personnel only.',
      regularAudits: 'Security Audits',
      regularAuditsDesc: 'We conduct regular security assessments and updates to our systems.',
      accessRight: 'Access Your Data',
      accessRightDesc: 'You can request access to the personal information we have about you.',
      correctionRight: 'Correct Your Data',
      correctionRightDesc: 'You can update or correct your personal information at any time.',
      deletionRight: 'Delete Your Data',
      deletionRightDesc: 'You can request deletion of your personal information, subject to legal requirements.',
      portabilityRight: 'Data Portability',
      portabilityRightDesc: 'You can request a copy of your data in a portable format.',
      cookieTypes: 'Types of Cookies',
      cookieTypesDesc: 'We use essential, functional, and analytics cookies to improve your experience.',
      cookieControl: 'Cookie Control',
      cookieControlDesc: 'You can control cookie settings through your browser preferences.',
      thirdPartyCookies: 'Third-Party Cookies',
      thirdPartyCookiesDesc: 'Some cookies are set by third-party services we use for analytics and advertising.',
      childrenAge: 'Age Requirement',
      childrenAgeDesc: 'Our services are not intended for children under 13 years of age.',
      parentalConsent: 'Parental Consent',
      parentalConsentDesc: 'If we learn we have collected information from a child under 13, we will delete it.',
      dataTransfers: 'International Transfers',
      dataTransfersDesc: 'Your information may be transferred to and processed in countries other than your own.',
      adequateProtection: 'Protection Standards',
      adequateProtectionDesc: 'We ensure adequate protection measures are in place for international transfers.',
      policyUpdates: 'Policy Updates',
      policyUpdatesDesc: 'We may update this policy from time to time. We will notify you of significant changes.',
      continuedUse: 'Continued Use',
      continuedUseDesc: 'Your continued use of our services after policy changes constitutes acceptance.',
      privacyOfficer: 'Privacy Officer',
      address: 'Address',
      email: 'Email',
      phone: 'Phone',
      responseTime: 'Response Time',
      responseTimeDesc: 'We will respond to privacy inquiries within 30 days.',
      gdprCompliance: 'GDPR Compliance',
      gdprComplianceDesc: 'We comply with the General Data Protection Regulation for EU users.',
      ccpaCompliance: 'CCPA Compliance',
      ccpaComplianceDesc: 'We comply with the California Consumer Privacy Act for California residents.'
    },
    ar: {
      title: 'سياسة الخصوصية',
      subtitle: 'كيف نجمع ونستخدم ونحمي معلوماتك الشخصية',
      lastUpdated: 'آخر تحديث',
      effectiveDate: '1 يناير 2024',
      tableOfContents: 'جدول المحتويات',
      informationWeCollect: 'المعلومات التي نجمعها',
      howWeUseInformation: 'كيف نستخدم معلوماتك',
      informationSharing: 'مشاركة المعلومات والإفصاح عنها',
      dataSecurity: 'أمان البيانات',
      yourRights: 'حقوقك وخياراتك',
      cookiesAndTracking: 'ملفات تعريف الارتباط وتقنيات التتبع',
      childrenPrivacy: 'خصوصية الأطفال',
      internationalTransfers: 'النقل الدولي للبيانات',
      policyChanges: 'التغييرات على هذه السياسة',
      contactUs: 'اتصل بنا',
      personalInfo: 'المعلومات الشخصية',
      personalInfoDesc: 'الاسم وعنوان البريد الإلكتروني ورقم الهاتف ومعلومات الملف الشخصي التي تقدمها عند إنشاء حساب.',
      businessInfo: 'معلومات العمل',
      businessInfoDesc: 'تفاصيل العمل ومعلومات الاتصال والأوصاف عند إدراج عملك.',
      usageData: 'بيانات الاستخدام',
      usageDataDesc: 'معلومات حول كيفية استخدامك لمنصتنا، بما في ذلك الصفحات المزارة والميزات المستخدمة.',
      deviceInfo: 'معلومات الجهاز',
      deviceInfoDesc: 'عنوان IP ونوع المتصفح ونوع الجهاز ومعلومات نظام التشغيل.',
      provideServices: 'تقديم الخدمات',
      provideServicesDesc: 'لتشغيل منصتنا ومعالجة المعاملات وتقديم دعم العملاء.',
      communication: 'التواصل',
      communicationDesc: 'لإرسال التحديثات والإشعارات والرد على استفساراتك.',
      improvement: 'تحسين المنصة',
      improvementDesc: 'لتحليل أنماط الاستخدام وتحسين خدماتنا وتجربة المستخدم.',
      legal: 'الامتثال القانوني',
      legalDesc: 'للامتثال للالتزامات القانونية وحماية حقوقنا وحقوق مستخدمينا.',
      noSelling: 'لا نبيع بياناتك',
      noSellingDesc: 'نحن لا نبيع معلوماتك الشخصية لأطراف ثالثة أبداً.',
      serviceProviders: 'مقدمو الخدمات',
      serviceProvidersDesc: 'قد نشارك المعلومات مع مقدمي الخدمات الموثوقين الذين يساعدوننا في تشغيل منصتنا.',
      legalRequirements: 'المتطلبات القانونية',
      legalRequirementsDesc: 'قد نكشف عن المعلومات عندما يتطلب القانون ذلك أو لحماية حقوقنا.',
      businessTransfers: 'نقل الأعمال',
      businessTransfersDesc: 'قد يتم نقل المعلومات في إطار عمليات الاندماج أو الاستحواذ.',
      encryption: 'تشفير البيانات',
      encryptionDesc: 'نستخدم التشفير المعياري في الصناعة لحماية بياناتك أثناء النقل والتخزين.',
      accessControls: 'ضوابط الوصول',
      accessControlsDesc: 'نحد من الوصول إلى معلوماتك الشخصية للموظفين المخولين فقط.',
      regularAudits: 'تدقيق الأمان',
      regularAuditsDesc: 'نجري تقييمات أمنية منتظمة وتحديثات لأنظمتنا.',
      accessRight: 'الوصول إلى بياناتك',
      accessRightDesc: 'يمكنك طلب الوصول إلى المعلومات الشخصية التي لدينا عنك.',
      correctionRight: 'تصحيح بياناتك',
      correctionRightDesc: 'يمكنك تحديث أو تصحيح معلوماتك الشخصية في أي وقت.',
      deletionRight: 'حذف بياناتك',
      deletionRightDesc: 'يمكنك طلب حذف معلوماتك الشخصية، مع مراعاة المتطلبات القانونية.',
      portabilityRight: 'قابلية نقل البيانات',
      portabilityRightDesc: 'يمكنك طلب نسخة من بياناتك بتنسيق قابل للنقل.',
      cookieTypes: 'أنواع ملفات تعريف الارتباط',
      cookieTypesDesc: 'نستخدم ملفات تعريف الارتباط الأساسية والوظيفية والتحليلية لتحسين تجربتك.',
      cookieControl: 'التحكم في ملفات تعريف الارتباط',
      cookieControlDesc: 'يمكنك التحكم في إعدادات ملفات تعريف الارتباط من خلال تفضيلات متصفحك.',
      thirdPartyCookies: 'ملفات تعريف الارتباط للطرف الثالث',
      thirdPartyCookiesDesc: 'يتم تعيين بعض ملفات تعريف الارتباط بواسطة خدمات الطرف الثالث التي نستخدمها للتحليلات والإعلانات.',
      childrenAge: 'متطلبات العمر',
      childrenAgeDesc: 'خدماتنا غير مخصصة للأطفال دون سن 13 عاماً.',
      parentalConsent: 'موافقة الوالدين',
      parentalConsentDesc: 'إذا علمنا أننا جمعنا معلومات من طفل دون سن 13، فسنحذفها.',
      dataTransfers: 'النقل الدولي',
      dataTransfersDesc: 'قد يتم نقل معلوماتك ومعالجتها في بلدان أخرى غير بلدك.',
      adequateProtection: 'معايير الحماية',
      adequateProtectionDesc: 'نضمن وجود تدابير حماية كافية للنقل الدولي.',
      policyUpdates: 'تحديثات السياسة',
      policyUpdatesDesc: 'قد نحدث هذه السياسة من وقت لآخر. سنخطرك بالتغييرات المهمة.',
      continuedUse: 'الاستخدام المستمر',
      continuedUseDesc: 'استمرارك في استخدام خدماتنا بعد تغييرات السياسة يشكل قبولاً.',
      privacyOfficer: 'مسؤول الخصوصية',
      address: 'العنوان',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      responseTime: 'وقت الاستجابة',
      responseTimeDesc: 'سنرد على استفسارات الخصوصية خلال 30 يوماً.',
      gdprCompliance: 'الامتثال للائحة العامة لحماية البيانات',
      gdprComplianceDesc: 'نحن نمتثل للائحة العامة لحماية البيانات للمستخدمين الأوروبيين.',
      ccpaCompliance: 'الامتثال لقانون خصوصية المستهلك في كاليفورنيا',
      ccpaComplianceDesc: 'نحن نمتثل لقانون خصوصية المستهلك في كاليفورنيا لسكان كاليفورنيا.'
    }
  }

  const t = translations[language]

  const sections = [
    { id: 'information-collect', title: t.informationWeCollect },
    { id: 'how-use', title: t.howWeUseInformation },
    { id: 'sharing', title: t.informationSharing },
    { id: 'security', title: t.dataSecurity },
    { id: 'rights', title: t.yourRights },
    { id: 'cookies', title: t.cookiesAndTracking },
    { id: 'children', title: t.childrenPrivacy },
    { id: 'transfers', title: t.internationalTransfers },
    { id: 'changes', title: t.policyChanges },
    { id: 'contact', title: t.contactUs }
  ]

  const informationTypes = [
    {
      title: t.personalInfo,
      description: t.personalInfoDesc,
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: t.businessInfo,
      description: t.businessInfoDesc,
      icon: Building2,
      color: 'text-green-600'
    },
    {
      title: t.usageData,
      description: t.usageDataDesc,
      icon: Eye,
      color: 'text-purple-600'
    },
    {
      title: t.deviceInfo,
      description: t.deviceInfoDesc,
      icon: Globe,
      color: 'text-orange-600'
    }
  ]

  const usageReasons = [
    {
      title: t.provideServices,
      description: t.provideServicesDesc,
      icon: Shield
    },
    {
      title: t.communication,
      description: t.communicationDesc,
      icon: Mail
    },
    {
      title: t.improvement,
      description: t.improvementDesc,
      icon: TrendingUp
    },
    {
      title: t.legal,
      description: t.legalDesc,
      icon: Scale
    }
  ]

  const securityMeasures = [
    {
      title: t.encryption,
      description: t.encryptionDesc,
      icon: Lock
    },
    {
      title: t.accessControls,
      description: t.accessControlsDesc,
      icon: Key
    },
    {
      title: t.regularAudits,
      description: t.regularAuditsDesc,
      icon: Shield
    }
  ]

  const userRights = [
    {
      title: t.accessRight,
      description: t.accessRightDesc,
      icon: Eye
    },
    {
      title: t.correctionRight,
      description: t.correctionRightDesc,
      icon: Edit
    },
    {
      title: t.deletionRight,
      description: t.deletionRightDesc,
      icon: Trash2
    },
    {
      title: t.portabilityRight,
      description: t.portabilityRightDesc,
      icon: Download
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
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="h-12 w-12 text-primary" />
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

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
            {/* Information We Collect */}
            <motion.section
              id="information-collect"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.informationWeCollect}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {informationTypes.map((type, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <type.icon className={`h-8 w-8 ${type.color} flex-shrink-0 mt-1`} />
                        <div>
                          <h3 className="font-semibold mb-2">{type.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* How We Use Information */}
            <motion.section
              id="how-use"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.howWeUseInformation}</h2>
              <div className="space-y-4">
                {usageReasons.map((reason, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <reason.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{reason.title}</h3>
                          <p className="text-muted-foreground">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Information Sharing */}
            <motion.section
              id="sharing"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.informationSharing}</h2>
              <Card className="mb-6 bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <h3 className="font-semibold text-green-800">{t.noSelling}</h3>
                  </div>
                  <p className="text-green-700">{t.noSellingDesc}</p>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t.serviceProviders}</h3>
                    <p className="text-muted-foreground">{t.serviceProvidersDesc}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t.legalRequirements}</h3>
                    <p className="text-muted-foreground">{t.legalRequirementsDesc}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{t.businessTransfers}</h3>
                    <p className="text-muted-foreground">{t.businessTransfersDesc}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              id="rights"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.yourRights}</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {userRights.map((right, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <right.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold mb-2">{right.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {right.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Ad Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <AdSection type="banner" size="medium" language={language} />
            </motion.div>

            {/* Contact Information */}
            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold mb-6">{t.contactUs}</h2>
              <Card>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">{t.privacyOfficer}</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <MapPin className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">{t.address}</div>
                            <div className="text-sm text-muted-foreground">
                              123 Peachtree Street<br />
                              Atlanta, GA 30309
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">{t.email}</div>
                            <div className="text-sm text-muted-foreground">
                              privacy@georgia-arab.com
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="h-5 w-5 text-primary" />
                          <div>
                            <div className="font-medium">{t.phone}</div>
                            <div className="text-sm text-muted-foreground">
                              +1 (555) 123-4567
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">{t.responseTime}</h3>
                      <p className="text-muted-foreground mb-6">
                        {t.responseTimeDesc}
                      </p>
                      <div className="space-y-3">
                        <Badge variant="outline" className="block w-fit">
                          {t.gdprCompliance}
                        </Badge>
                        <Badge variant="outline" className="block w-fit">
                          {t.ccpaCompliance}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t">
                    <Button>
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Privacy Team
                    </Button>
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

export default Privacy
