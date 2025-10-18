import { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { 
  ArrowLeft,
  Briefcase,
  Building2,
  MapPin,
  DollarSign,
  User,
  Mail,
  Phone,
  Upload,
  CheckCircle
} from 'lucide-react'

const AddJob = ({ language = 'en' }) => {
  const navigate = useNavigate()
  const [jobType, setJobType] = useState('opportunity') // 'opportunity' or 'seeking'
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    experienceLevel: '',
    city: '',
    jobTypeCategory: '',
    salary: '',
    salaryType: 'monthly',
    portfolioLink: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    companyLogo: null,
    requirements: '',
    benefits: ''
  })

  const translations = {
    en: {
      addJob: 'Add Job',
      backToJobs: 'Back to Jobs',
      jobOpportunity: 'Job Opportunity',
      jobSeeking: 'Job Seeking',
      postingAs: 'I am posting as',
      jobDetails: 'Job Details',
      title: 'Job Title',
      titlePlaceholder: 'e.g. Senior React Developer',
      description: 'Job Description',
      descriptionPlaceholder: 'Describe the job requirements, responsibilities, and qualifications...',
      experienceLevel: 'Experience Level',
      entryLevel: 'Entry Level',
      midLevel: 'Mid Level',
      seniorLevel: 'Senior Level',
      executive: 'Executive',
      city: 'City',
      cityPlaceholder: 'e.g. Atlanta, GA',
      jobTypeCategory: 'Job Type',
      fullTime: 'Full Time',
      partTime: 'Part Time',
      contract: 'Contract',
      freelance: 'Freelance',
      internship: 'Internship',
      salary: 'Salary',
      salaryPlaceholder: 'e.g. 80000',
      salaryType: 'Salary Type',
      monthly: 'Monthly',
      weekly: 'Weekly',
      daily: 'Daily',
      hourly: 'Hourly',
      portfolioLink: 'Portfolio Link',
      portfolioPlaceholder: 'https://your-portfolio.com',
      phoneNumber: 'Phone Number',
      phonePlaceholder: '+1 (555) 123-4567',
      email: 'Email Address',
      emailPlaceholder: 'your.email@example.com',
      companyName: 'Company Name',
      companyPlaceholder: 'e.g. TechCorp Solutions',
      companyLogo: 'Company Logo',
      uploadLogo: 'Upload Logo',
      requirements: 'Job Requirements',
      requirementsPlaceholder: 'List the key requirements and qualifications needed for this position...',
      benefits: 'Job Benefits',
      benefitsPlaceholder: 'List the benefits and perks offered with this position...',
      postJob: 'Post Job',
      cancel: 'Cancel',
      required: 'Required',
      optional: 'Optional'
    },
    ar: {
      addJob: 'إضافة وظيفة',
      backToJobs: 'العودة إلى الوظائف',
      jobOpportunity: 'فرصة عمل',
      jobSeeking: 'البحث عن عمل',
      postingAs: 'أقوم بالنشر كـ',
      jobDetails: 'تفاصيل الوظيفة',
      title: 'عنوان الوظيفة',
      titlePlaceholder: 'مثال: مطور React كبير',
      description: 'وصف الوظيفة',
      descriptionPlaceholder: 'اوصف متطلبات الوظيفة والمسؤوليات والمؤهلات...',
      experienceLevel: 'مستوى الخبرة',
      entryLevel: 'مستوى مبتدئ',
      midLevel: 'مستوى متوسط',
      seniorLevel: 'مستوى كبير',
      executive: 'تنفيذي',
      city: 'المدينة',
      cityPlaceholder: 'مثال: أتلانتا، جورجيا',
      jobTypeCategory: 'نوع الوظيفة',
      fullTime: 'دوام كامل',
      partTime: 'دوام جزئي',
      contract: 'عقد',
      freelance: 'عمل حر',
      internship: 'تدريب',
      salary: 'الراتب',
      salaryPlaceholder: 'مثال: 80000',
      salaryType: 'نوع الراتب',
      monthly: 'شهري',
      weekly: 'أسبوعي',
      daily: 'يومي',
      hourly: 'بالساعة',
      portfolioLink: 'رابط المحفظة',
      portfolioPlaceholder: 'https://your-portfolio.com',
      phoneNumber: 'رقم الهاتف',
      phonePlaceholder: '+1 (555) 123-4567',
      email: 'عنوان البريد الإلكتروني',
      emailPlaceholder: 'your.email@example.com',
      companyName: 'اسم الشركة',
      companyPlaceholder: 'مثال: حلول تك كورب',
      companyLogo: 'شعار الشركة',
      uploadLogo: 'تحميل الشعار',
      requirements: 'متطلبات الوظيفة',
      requirementsPlaceholder: 'اذكر المتطلبات والمؤهلات الرئيسية المطلوبة لهذا المنصب...',
      benefits: 'مزايا الوظيفة',
      benefitsPlaceholder: 'اذكر المزايا والفوائد المقدمة مع هذا المنصب...',
      postJob: 'نشر الوظيفة',
      cancel: 'إلغاء',
      required: 'مطلوب',
      optional: 'اختياري'
    }
  }

  const t = translations[language]

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Job posted:', { jobType, ...formData })
    // Navigate back to jobs page
    navigate('/jobs')
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
              
              <h1 className="text-2xl font-bold text-gray-900">
                {t.addJob}
              </h1>
              
              <div></div>
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
            {/* Job Type Toggle */}
            <div className="bg-white rounded-lg shadow-lg border-0 p-8 mb-8">
              <h2 className="text-xl font-semibold mb-6">{t.postingAs}</h2>
              
              <div className="flex gap-4 mb-6">
                <button
                  onClick={() => setJobType('opportunity')}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    jobType === 'opportunity'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Building2 className="h-6 w-6" />
                    <span className="font-medium">{t.jobOpportunity}</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setJobType('seeking')}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    jobType === 'seeking'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <User className="h-6 w-6" />
                    <span className="font-medium">{t.jobSeeking}</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Job Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg border-0 p-8">
              <h2 className="text-xl font-semibold mb-6">{t.jobDetails}</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Job Title */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.title} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder={t.titlePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Company Name (only for job opportunities) */}
                {jobType === 'opportunity' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.companyName} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                      placeholder={t.companyPlaceholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                )}

                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.city} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder={t.cityPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.experienceLevel} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => handleInputChange('experienceLevel', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">{t.experienceLevel}</option>
                    <option value="entry">{t.entryLevel}</option>
                    <option value="mid">{t.midLevel}</option>
                    <option value="senior">{t.seniorLevel}</option>
                    <option value="executive">{t.executive}</option>
                  </select>
                </div>

                {/* Job Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.jobTypeCategory} <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.jobTypeCategory}
                    onChange={(e) => handleInputChange('jobTypeCategory', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">{t.jobTypeCategory}</option>
                    <option value="full-time">{t.fullTime}</option>
                    <option value="part-time">{t.partTime}</option>
                    <option value="contract">{t.contract}</option>
                    <option value="freelance">{t.freelance}</option>
                    <option value="internship">{t.internship}</option>
                  </select>
                </div>

                {/* Salary */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.salary}
                  </label>
                  <input
                    type="number"
                    value={formData.salary}
                    onChange={(e) => handleInputChange('salary', e.target.value)}
                    placeholder={t.salaryPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Salary Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.salaryType}
                  </label>
                  <select
                    value={formData.salaryType}
                    onChange={(e) => handleInputChange('salaryType', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="monthly">{t.monthly}</option>
                    <option value="weekly">{t.weekly}</option>
                    <option value="daily">{t.daily}</option>
                    <option value="hourly">{t.hourly}</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.phoneNumber} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    placeholder={t.phonePlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Portfolio Link */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.portfolioLink} <span className="text-gray-500">({t.optional})</span>
                  </label>
                  <input
                    type="url"
                    value={formData.portfolioLink}
                    onChange={(e) => handleInputChange('portfolioLink', e.target.value)}
                    placeholder={t.portfolioPlaceholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.description} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    placeholder={t.descriptionPlaceholder}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Requirements */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.requirements} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    placeholder={t.requirementsPlaceholder}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Benefits */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.benefits} <span className="text-gray-500">({t.optional})</span>
                  </label>
                  <textarea
                    value={formData.benefits}
                    onChange={(e) => handleInputChange('benefits', e.target.value)}
                    placeholder={t.benefitsPlaceholder}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Company Logo (only for job opportunities) */}
                {jobType === 'opportunity' && (
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.companyLogo} <span className="text-gray-500">({t.optional})</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">{t.uploadLogo}</p>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleInputChange('companyLogo', e.target.files[0])}
                        className="hidden"
                        id="logo-upload"
                      />
                      <label
                        htmlFor="logo-upload"
                        className="mt-2 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
                      >
                        Choose File
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Submit Buttons */}
              <div className="flex gap-4 mt-8 pt-6 border-t">
                <button
                  type="button"
                  onClick={() => navigate('/jobs')}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  {t.cancel}
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  {t.postJob}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AddJob
