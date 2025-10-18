import { useState } from 'react'
import { motion } from 'framer-motion'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  ArrowLeft,
  MapPin,
  DollarSign,
  Clock,
  Building2,
  User,
  Mail,
  Phone,
  Share2,
  Heart,
  ExternalLink,
  Calendar,
  Briefcase,
  Star,
  CheckCircle
} from 'lucide-react'

const JobDetails = ({ language = 'en' }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isFavorited, setIsFavorited] = useState(false)
  const [showApplyDialog, setShowApplyDialog] = useState(false)

  const translations = {
    en: {
      backToJobs: 'Back to Jobs',
      shareJob: 'Share Job',
      addToFavorites: 'Add to Favorites',
      removeFromFavorites: 'Remove from Favorites',
      applyNow: 'Apply Now',
      jobDetails: 'Job Details',
      companyInfo: 'Company Information',
      requirements: 'Requirements',
      description: 'Description',
      salary: 'Salary',
      jobType: 'Job Type',
      experienceLevel: 'Experience Level',
      location: 'Location',
      postedDate: 'Posted Date',
      applicationDeadline: 'Application Deadline',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      website: 'Website',
      portfolio: 'Portfolio',
      fullTime: 'Full Time',
      partTime: 'Part Time',
      contract: 'Contract',
      freelance: 'Freelance',
      internship: 'Internship',
      entryLevel: 'Entry Level',
      midLevel: 'Mid Level',
      seniorLevel: 'Senior Level',
      executive: 'Executive',
      monthly: 'Monthly',
      weekly: 'Weekly',
      daily: 'Daily',
      hourly: 'Hourly',
      applicationSent: 'Application Sent Successfully!',
      applyForJob: 'Apply for this Job',
      yourMessage: 'Your Message',
      messagePlaceholder: 'Write a brief message about why you are interested in this position...',
      attachResume: 'Attach Resume',
      sendApplication: 'Send Application',
      cancel: 'Cancel'
    },
    ar: {
      backToJobs: 'العودة إلى الوظائف',
      shareJob: 'مشاركة الوظيفة',
      addToFavorites: 'إضافة إلى المفضلة',
      removeFromFavorites: 'إزالة من المفضلة',
      applyNow: 'تقدم الآن',
      jobDetails: 'تفاصيل الوظيفة',
      companyInfo: 'معلومات الشركة',
      requirements: 'المتطلبات',
      description: 'الوصف',
      salary: 'الراتب',
      jobType: 'نوع الوظيفة',
      experienceLevel: 'مستوى الخبرة',
      location: 'الموقع',
      postedDate: 'تاريخ النشر',
      applicationDeadline: 'الموعد النهائي للتقديم',
      contactInfo: 'معلومات الاتصال',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      website: 'الموقع الإلكتروني',
      portfolio: 'المحفظة',
      fullTime: 'دوام كامل',
      partTime: 'دوام جزئي',
      contract: 'عقد',
      freelance: 'عمل حر',
      internship: 'تدريب',
      entryLevel: 'مستوى مبتدئ',
      midLevel: 'مستوى متوسط',
      seniorLevel: 'مستوى كبير',
      executive: 'تنفيذي',
      monthly: 'شهري',
      weekly: 'أسبوعي',
      daily: 'يومي',
      hourly: 'بالساعة',
      applicationSent: 'تم إرسال الطلب بنجاح!',
      applyForJob: 'تقدم لهذه الوظيفة',
      yourMessage: 'رسالتك',
      messagePlaceholder: 'اكتب رسالة مختصرة عن سبب اهتمامك بهذا المنصب...',
      attachResume: 'إرفاق السيرة الذاتية',
      sendApplication: 'إرسال الطلب',
      cancel: 'إلغاء'
    }
  }

  const t = translations[language]

  // Sample job data (in real app, this would come from API)
  const jobData = {
    id: id,
    title: language === 'ar' ? 'مطور React كبير' : 'Senior React Developer',
    company: {
      name: 'TechCorp Solutions',
      logo: '/api/placeholder/80/80',
      website: 'https://techcorp.com',
      description: language === 'ar' 
        ? 'شركة تقنية رائدة متخصصة في تطوير الحلول المبتكرة'
        : 'Leading technology company specializing in innovative solutions'
    },
    location: language === 'ar' ? 'أتلانتا، جورجيا' : 'Atlanta, GA',
    salary: '$80,000 - $120,000',
    salaryType: 'yearly',
    jobType: 'full-time',
    experienceLevel: 'senior',
    postedDate: '2024-01-15',
    deadline: '2024-02-15',
    description: language === 'ar'
      ? 'نحن نبحث عن مطور React كبير للانضمام إلى فريقنا المتنامي. ستكون مسؤولاً عن تطوير تطبيقات ويب حديثة وعالية الجودة باستخدام React وتقنيات الويب الحديثة.'
      : 'We are looking for a Senior React Developer to join our growing team. You will be responsible for developing modern, high-quality web applications using React and modern web technologies.',
    requirements: language === 'ar' ? [
      '5+ سنوات من الخبرة في تطوير React',
      'خبرة قوية في JavaScript و TypeScript',
      'معرفة بـ Redux أو Context API',
      'خبرة في تطوير APIs RESTful',
      'فهم جيد لـ Git و CI/CD'
    ] : [
      '5+ years of React development experience',
      'Strong JavaScript and TypeScript skills',
      'Experience with Redux or Context API',
      'RESTful API development experience',
      'Good understanding of Git and CI/CD'
    ],
    contact: {
      email: 'careers@techcorp.com',
      phone: '+1 (555) 123-4567',
      portfolio: 'https://portfolio.techcorp.com'
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: jobData.title,
        text: `Check out this job opportunity: ${jobData.title} at ${jobData.company.name}`,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert(language === 'ar' ? 'تم نسخ الرابط!' : 'Link copied!')
    }
  }

  const handleFavorite = () => {
    setIsFavorited(!isFavorited)
  }

  const handleApply = () => {
    setShowApplyDialog(true)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/jobs')}
                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {t.backToJobs}
              </button>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Share2 className="h-4 w-4" />
                  {t.shareJob}
                </button>
                
                <button
                  onClick={handleFavorite}
                  className={`flex items-center gap-2 px-4 py-2 transition-colors ${
                    isFavorited 
                      ? 'text-red-600 hover:text-red-700' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Heart className={`h-4 w-4 ${isFavorited ? 'fill-current' : ''}`} />
                  {isFavorited ? t.removeFromFavorites : t.addToFavorites}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-lg border-0 p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-10 w-10 text-gray-400" />
                </div>
                
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {jobData.title}
                  </h1>
                  
                  <div className="flex items-center gap-4 text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      <span>{jobData.company.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{jobData.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{jobData.salary}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {t[jobData.jobType.replace('-', '')]}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {t[jobData.experienceLevel + 'Level']}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <div className="bg-white rounded-lg shadow-lg border-0 p-8">
                  <h2 className="text-xl font-semibold mb-4">{t.description}</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {jobData.description}
                  </p>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-lg shadow-lg border-0 p-8">
                  <h2 className="text-xl font-semibold mb-4">{t.requirements}</h2>
                  <ul className="space-y-3">
                    {jobData.requirements.map((req, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Info */}
                <div className="bg-white rounded-lg shadow-lg border-0 p-8">
                  <h2 className="text-xl font-semibold mb-4">{t.companyInfo}</h2>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Building2 className="h-8 w-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{jobData.company.name}</h3>
                      <p className="text-gray-600 mb-3">{jobData.company.description}</p>
                      <a
                        href={jobData.company.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4" />
                        {t.website}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Job Info */}
                <div className="bg-white rounded-lg shadow-lg border-0 p-6">
                  <h3 className="font-semibold mb-4">{t.jobDetails}</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">{t.salary}</div>
                        <div className="text-sm text-gray-600">{jobData.salary}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">{t.jobType}</div>
                        <div className="text-sm text-gray-600">{t[jobData.jobType.replace('-', '')]}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">{t.experienceLevel}</div>
                        <div className="text-sm text-gray-600">{t[jobData.experienceLevel + 'Level']}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-gray-400" />
                      <div>
                        <div className="font-medium">{t.postedDate}</div>
                        <div className="text-sm text-gray-600">{jobData.postedDate}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-white rounded-lg shadow-lg border-0 p-6">
                  <h3 className="font-semibold mb-4">{t.contactInfo}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <a href={`mailto:${jobData.contact.email}`} className="text-blue-600 hover:text-blue-700">
                        {jobData.contact.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <a href={`tel:${jobData.contact.phone}`} className="text-blue-600 hover:text-blue-700">
                        {jobData.contact.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                      <a href={jobData.contact.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        {t.portfolio}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <button
                  onClick={handleApply}
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2 font-semibold text-lg"
                >
                  <Briefcase className="h-5 w-5" />
                  {t.applyNow}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Apply Dialog */}
      {showApplyDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg p-6 w-full max-w-md"
          >
            <h3 className="text-lg font-semibold mb-4">{t.applyForJob}</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.yourMessage}
                </label>
                <textarea
                  placeholder={t.messagePlaceholder}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.attachResume}
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowApplyDialog(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t.cancel}
              </button>
              <button
                onClick={() => {
                  setShowApplyDialog(false)
                  alert(t.applicationSent)
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.sendApplication}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default JobDetails
