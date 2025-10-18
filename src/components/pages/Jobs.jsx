import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign,
  Building2,
  Plus,
  Bookmark,
  Share2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const Jobs = ({ language }) => {
  const translations = {
    en: {
      title: 'Job Opportunities',
      subtitle: 'Find your next career opportunity in the Arab community',
      searchPlaceholder: 'Search jobs, companies, skills...',
      postJob: 'Post a Job',
      createJob: 'Create Job',
      jobType: 'Job Type',
      location: 'Location',
      experience: 'Experience Level',
      salary: 'Salary Range',
      sortBy: 'Sort By',
      newest: 'Newest',
      oldest: 'Oldest',
      salaryHighLow: 'Salary: High to Low',
      salaryLowHigh: 'Salary: Low to High',
      fullTime: 'Full Time',
      partTime: 'Part Time',
      contract: 'Contract',
      internship: 'Internship',
      remote: 'Remote',
      entryLevel: 'Entry Level',
      midLevel: 'Mid Level',
      seniorLevel: 'Senior Level',
      executive: 'Executive',
      apply: 'Apply Now',
      save: 'Save Job',
      share: 'Share',
      posted: 'Posted',
      ago: 'ago',
      company: 'Company'
    },
    ar: {
      title: 'فرص العمل',
      subtitle: 'اعثر على فرصتك المهنية التالية في المجتمع العربي',
      searchPlaceholder: 'البحث عن الوظائف والشركات والمهارات...',
      postJob: 'نشر وظيفة',
      jobType: 'نوع الوظيفة',
      location: 'الموقع',
      experience: 'مستوى الخبرة',
      salary: 'نطاق الراتب',
      sortBy: 'ترتيب حسب',
      newest: 'الأحدث',
      oldest: 'الأقدم',
      salaryHighLow: 'الراتب: من الأعلى إلى الأقل',
      salaryLowHigh: 'الراتب: من الأقل إلى الأعلى',
      fullTime: 'دوام كامل',
      partTime: 'دوام جزئي',
      contract: 'عقد',
      internship: 'تدريب',
      remote: 'عن بُعد',
      entryLevel: 'مستوى مبتدئ',
      midLevel: 'مستوى متوسط',
      seniorLevel: 'مستوى كبير',
      executive: 'تنفيذي',
      apply: 'تقدم الآن',
      save: 'حفظ الوظيفة',
      share: 'مشاركة',
      posted: 'تم النشر',
      ago: 'منذ',
      company: 'الشركة'
    }
  }

  const t = translations[language]

  const sampleJobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Solutions LLC',
      location: 'Atlanta, GA',
      type: 'Full Time',
      experience: 'Senior Level',
      salary: '$90,000 - $120,000',
      posted: '2 days ago',
      description: 'We are looking for a senior software engineer to join our growing team...',
      skills: ['React', 'Node.js', 'AWS', 'TypeScript']
    },
    {
      id: 2,
      title: 'Marketing Manager',
      company: 'Arab Business Network',
      location: 'Marietta, GA',
      type: 'Full Time',
      experience: 'Mid Level',
      salary: '$65,000 - $80,000',
      posted: '1 week ago',
      description: 'Join our marketing team to help grow our community network...',
      skills: ['Digital Marketing', 'Social Media', 'Analytics', 'Content Creation']
    },
    {
      id: 3,
      title: 'Restaurant Manager',
      company: 'Al-Salam Restaurant',
      location: 'Duluth, GA',
      type: 'Full Time',
      experience: 'Mid Level',
      salary: '$45,000 - $55,000',
      posted: '3 days ago',
      description: 'Manage daily operations of our popular Middle Eastern restaurant...',
      skills: ['Management', 'Customer Service', 'Food Service', 'Leadership']
    },
    {
      id: 4,
      title: 'Arabic Translator',
      company: 'Language Services Inc',
      location: 'Remote',
      type: 'Contract',
      experience: 'Entry Level',
      salary: '$25 - $35/hour',
      posted: '5 days ago',
      description: 'Provide translation services for legal and business documents...',
      skills: ['Arabic', 'English', 'Translation', 'Legal Documents']
    },
    {
      id: 5,
      title: 'Real Estate Agent',
      company: 'Georgia Homes Realty',
      location: 'Alpharetta, GA',
      type: 'Full Time',
      experience: 'Entry Level',
      salary: 'Commission Based',
      posted: '1 day ago',
      description: 'Help Arab families find their dream homes in Georgia...',
      skills: ['Sales', 'Real Estate', 'Customer Service', 'Arabic Speaking']
    },
    {
      id: 6,
      title: 'Accountant',
      company: 'Financial Partners CPA',
      location: 'Sandy Springs, GA',
      type: 'Full Time',
      experience: 'Mid Level',
      salary: '$55,000 - $70,000',
      posted: '4 days ago',
      description: 'Join our accounting firm serving the Arab business community...',
      skills: ['Accounting', 'QuickBooks', 'Tax Preparation', 'Financial Analysis']
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  className="pl-10"
                />
              </div>
            </div>
            <Button asChild className="lg:w-auto">
              <Link to="/jobs/add">
                <Plus className="h-4 w-4 mr-2" />
                {t.postJob}
              </Link>
            </Button>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.jobType} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="full-time">{t.fullTime}</SelectItem>
                <SelectItem value="part-time">{t.partTime}</SelectItem>
                <SelectItem value="contract">{t.contract}</SelectItem>
                <SelectItem value="internship">{t.internship}</SelectItem>
                <SelectItem value="remote">{t.remote}</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.location} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="atlanta">Atlanta</SelectItem>
                <SelectItem value="marietta">Marietta</SelectItem>
                <SelectItem value="duluth">Duluth</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.experience} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="entry">{t.entryLevel}</SelectItem>
                <SelectItem value="mid">{t.midLevel}</SelectItem>
                <SelectItem value="senior">{t.seniorLevel}</SelectItem>
                <SelectItem value="executive">{t.executive}</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.salary} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-30k">$0 - $30,000</SelectItem>
                <SelectItem value="30-50k">$30,000 - $50,000</SelectItem>
                <SelectItem value="50-75k">$50,000 - $75,000</SelectItem>
                <SelectItem value="75-100k">$75,000 - $100,000</SelectItem>
                <SelectItem value="100k+">$100,000+</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder={t.sortBy} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">{t.newest}</SelectItem>
                <SelectItem value="oldest">{t.oldest}</SelectItem>
                <SelectItem value="salary-high">{t.salaryHighLow}</SelectItem>
                <SelectItem value="salary-low">{t.salaryLowHigh}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </motion.div>

        {/* Jobs List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          {sampleJobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {job.title}
                          </h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Building2 className="h-4 w-4 mr-1" />
                            <span className="font-medium">{job.company}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Bookmark className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {job.salary}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="secondary">{job.experience}</Badge>
                        {job.skills.slice(0, 3).map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline">
                            {skill}
                          </Badge>
                        ))}
                        {job.skills.length > 3 && (
                          <Badge variant="outline">
                            +{job.skills.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                        {job.description}
                      </p>

                      <div className="text-xs text-muted-foreground">
                        {t.posted} {job.posted}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 lg:w-auto w-full">
                      <Button className="w-full lg:w-auto">
                        {t.apply}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default Jobs
