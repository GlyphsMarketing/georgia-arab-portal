import { motion } from 'framer-motion'
import { 
  Users, 
  Heart, 
  Globe, 
  Award,
  Target,
  Eye,
  Handshake,
  MapPin,
  Calendar,
  Star,
  Building2,
  Phone,
  Mail
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import AdSection from '../shared/AdSection'

const About = ({ language }) => {
  const translations = {
    en: {
      title: 'About Us',
      subtitle: 'Connecting the Arab community in Georgia',
      ourMission: 'Our Mission',
      ourVision: 'Our Vision',
      ourValues: 'Our Values',
      missionText: 'To create a thriving platform that connects Arab individuals, families, and businesses in Georgia, fostering community growth, cultural preservation, and economic prosperity.',
      visionText: 'To be the leading digital hub for the Arab community in Georgia, where culture meets opportunity and connections create lasting impact.',
      valuesText: 'We believe in unity, authenticity, respect, and empowerment. Our platform is built on the foundation of bringing people together while honoring our rich cultural heritage.',
      communityStats: 'Community Statistics',
      registeredUsers: 'Registered Users',
      businesses: 'Businesses',
      jobPostings: 'Job Postings',
      properties: 'Properties',
      events: 'Events Hosted',
      connections: 'Connections Made',
      ourTeam: 'Our Team',
      leadership: 'Leadership Team',
      boardMembers: 'Board Members',
      volunteers: 'Volunteers',
      ourStory: 'Our Story',
      storyText: 'Founded in 2020 by a group of passionate Arab professionals in Georgia, our platform was born from the need to create stronger connections within our community. What started as a simple idea to help Arab families find local businesses has grown into a comprehensive platform serving thousands of community members.',
      milestones: 'Key Milestones',
      partnerships: 'Community Partnerships',
      getInvolved: 'Get Involved',
      volunteer: 'Volunteer',
      donate: 'Donate',
      partner: 'Partner with Us',
      contactUs: 'Contact Us',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      socialMedia: 'Follow Us'
    },
    ar: {
      title: 'من نحن',
      subtitle: 'ربط المجتمع العربي في جورجيا',
      ourMission: 'مهمتنا',
      ourVision: 'رؤيتنا',
      ourValues: 'قيمنا',
      missionText: 'إنشاء منصة مزدهرة تربط الأفراد والعائلات والشركات العربية في جورجيا، وتعزز نمو المجتمع والحفاظ على الثقافة والازدهار الاقتصادي.',
      visionText: 'أن نكون المحور الرقمي الرائد للمجتمع العربي في جورجيا، حيث تلتقي الثقافة بالفرص وتخلق الروابط تأثيراً دائماً.',
      valuesText: 'نؤمن بالوحدة والأصالة والاحترام والتمكين. منصتنا مبنية على أساس جمع الناس معاً مع تكريم تراثنا الثقافي الغني.',
      communityStats: 'إحصائيات المجتمع',
      registeredUsers: 'المستخدمون المسجلون',
      businesses: 'الأعمال',
      jobPostings: 'فرص العمل',
      properties: 'العقارات',
      events: 'الفعاليات المستضافة',
      connections: 'الروابط المكونة',
      ourTeam: 'فريقنا',
      leadership: 'فريق القيادة',
      boardMembers: 'أعضاء مجلس الإدارة',
      volunteers: 'المتطوعون',
      ourStory: 'قصتنا',
      storyText: 'تأسست في عام 2020 من قبل مجموعة من المهنيين العرب المتحمسين في جورجيا، وُلدت منصتنا من الحاجة إلى إنشاء روابط أقوى داخل مجتمعنا. ما بدأ كفكرة بسيطة لمساعدة العائلات العربية في العثور على الأعمال المحلية نما ليصبح منصة شاملة تخدم آلاف أعضاء المجتمع.',
      milestones: 'المعالم الرئيسية',
      partnerships: 'شراكات المجتمع',
      getInvolved: 'شارك معنا',
      volunteer: 'تطوع',
      donate: 'تبرع',
      partner: 'شاركنا',
      contactUs: 'اتصل بنا',
      address: 'العنوان',
      phone: 'الهاتف',
      email: 'البريد الإلكتروني',
      socialMedia: 'تابعنا'
    }
  }

  const t = translations[language]

  const stats = [
    { label: t.registeredUsers, value: '5,200+', icon: Users },
    { label: t.businesses, value: '250+', icon: Building2 },
    { label: t.jobPostings, value: '180+', icon: Target },
    { label: t.properties, value: '120+', icon: MapPin },
    { label: t.events, value: '45+', icon: Calendar },
    { label: t.connections, value: '10,000+', icon: Handshake }
  ]

  const teamMembers = [
    {
      name: 'Ahmed Al-Hassan',
      role: 'Founder & CEO',
      bio: 'Technology entrepreneur with 15+ years of experience building community platforms.',
      image: '/api/placeholder/150/150',
      email: 'ahmed@georgia-arab.com'
    },
    {
      name: 'Fatima Khalil',
      role: 'Community Director',
      bio: 'Community organizer passionate about connecting Arab families and preserving culture.',
      image: '/api/placeholder/150/150',
      email: 'fatima@georgia-arab.com'
    },
    {
      name: 'Omar Mansour',
      role: 'Business Development',
      bio: 'Business consultant helping Arab entrepreneurs succeed in Georgia.',
      image: '/api/placeholder/150/150',
      email: 'omar@georgia-arab.com'
    },
    {
      name: 'Layla Ibrahim',
      role: 'Cultural Programs',
      bio: 'Cultural educator dedicated to preserving Arab heritage and traditions.',
      image: '/api/placeholder/150/150',
      email: 'layla@georgia-arab.com'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Platform Launch',
      description: 'Launched with 50 founding members and 10 local businesses.'
    },
    {
      year: '2021',
      title: 'First Community Event',
      description: 'Organized the first Arab Cultural Festival with 500+ attendees.'
    },
    {
      year: '2022',
      title: 'Business Directory Expansion',
      description: 'Reached 100+ registered businesses across Georgia.'
    },
    {
      year: '2023',
      title: 'Mobile App Launch',
      description: 'Launched mobile app with enhanced features and accessibility.'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Reached 5,000+ registered users and expanded to new cities.'
    }
  ]

  const partners = [
    'Georgia Arab American Association',
    'Atlanta Islamic Center',
    'Middle East Cultural Center',
    'Arab Business Council',
    'Georgia Immigration Services',
    'Cultural Heritage Foundation'
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Mission, Vision, Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Target className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>{t.ourMission}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.missionText}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Eye className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>{t.ourVision}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.visionText}</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Heart className="h-12 w-12 mx-auto text-primary mb-4" />
              <CardTitle>{t.ourValues}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{t.valuesText}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Community Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">{t.communityStats}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <stat.icon className="h-8 w-8 mx-auto text-primary mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ad Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <AdSection type="banner" size="medium" language={language} />
        </motion.div>

        {/* Our Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">{t.ourStory}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.storyText}
            </p>
          </div>
        </motion.div>

        {/* Milestones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">{t.milestones}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {milestone.year}
                    </div>
                  </div>
                  <Card className="flex-1">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">{t.ourTeam}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="text-center hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.image} />
                      <AvatarFallback className="text-lg">{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                    <Badge variant="outline" className="mb-3">{member.role}</Badge>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">{t.partnerships}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Handshake className="h-8 w-8 mx-auto text-primary mb-3" />
                    <h3 className="font-medium">{partner}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Get Involved & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Get Involved */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                {t.getInvolved}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground mb-6">
                Join our mission to strengthen the Arab community in Georgia.
              </p>
              <div className="space-y-3">
                <Button className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  {t.volunteer}
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="h-4 w-4 mr-2" />
                  {t.donate}
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Handshake className="h-4 w-4 mr-2" />
                  {t.partner}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Contact Us */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                {t.contactUs}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <div className="font-medium">{t.address}</div>
                    <div className="text-sm text-muted-foreground">
                      123 Peachtree Street<br />
                      Atlanta, GA 30309
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{t.phone}</div>
                    <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{t.email}</div>
                    <div className="text-sm text-muted-foreground">info@georgia-arab.com</div>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-6">
                {t.contactUs}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default About
