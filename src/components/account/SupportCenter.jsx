import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  MessageCircle, 
  HelpCircle, 
  Send, 
  Paperclip, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  User,
  Bot,
  Search,
  Plus,
  Filter,
  MoreVertical,
  Star,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import AdSection from '../shared/AdSection'

const SupportCenter = ({ language = 'en' }) => {
  const [activeTab, setActiveTab] = useState('tickets')
  const [chatOpen, setChatOpen] = useState(false)
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      message: 'Hello! How can I help you today?',
      time: '10:00 AM',
      type: 'text'
    }
  ])

  const translations = {
    en: {
      title: 'Support Center',
      subtitle: 'Get help and support for your account',
      tickets: 'Support Tickets',
      chat: 'Live Chat',
      faq: 'FAQ',
      contact: 'Contact Us',
      
      // Tickets
      myTickets: 'My Support Tickets',
      createTicket: 'Create New Ticket',
      ticketSubject: 'Subject',
      ticketCategory: 'Category',
      ticketPriority: 'Priority',
      ticketDescription: 'Description',
      submitTicket: 'Submit Ticket',
      ticketCreated: 'Ticket created successfully',
      
      // Categories
      technical: 'Technical Issue',
      billing: 'Billing',
      account: 'Account',
      listing: 'Listing',
      general: 'General',
      
      // Priority
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      urgent: 'Urgent',
      
      // Status
      open: 'Open',
      inProgress: 'In Progress',
      resolved: 'Resolved',
      closed: 'Closed',
      
      // Chat
      startChat: 'Start Live Chat',
      chatWithSupport: 'Chat with Support',
      typeMessage: 'Type your message...',
      sendMessage: 'Send',
      attachFile: 'Attach File',
      chatOnline: 'Support is online',
      chatOffline: 'Support is offline',
      avgResponseTime: 'Average response time: 5 minutes',
      
      // FAQ
      frequentlyAsked: 'Frequently Asked Questions',
      searchFAQ: 'Search FAQ...',
      helpful: 'Was this helpful?',
      yes: 'Yes',
      no: 'No',
      
      // Contact
      contactSupport: 'Contact Support',
      businessHours: 'Business Hours',
      mondayFriday: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
      weekend: 'Saturday - Sunday: 10:00 AM - 4:00 PM EST',
      emergencySupport: 'Emergency Support',
      emergencyNote: 'For urgent issues outside business hours',
      
      // Messages
      ticketSubmitted: 'Your ticket has been submitted successfully',
      messageSent: 'Message sent',
      fileAttached: 'File attached successfully'
    },
    ar: {
      title: 'مركز الدعم',
      subtitle: 'احصل على المساعدة والدعم لحسابك',
      tickets: 'تذاكر الدعم',
      chat: 'الدردشة المباشرة',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      
      // Tickets
      myTickets: 'تذاكر الدعم الخاصة بي',
      createTicket: 'إنشاء تذكرة جديدة',
      ticketSubject: 'الموضوع',
      ticketCategory: 'الفئة',
      ticketPriority: 'الأولوية',
      ticketDescription: 'الوصف',
      submitTicket: 'إرسال التذكرة',
      ticketCreated: 'تم إنشاء التذكرة بنجاح',
      
      // Categories
      technical: 'مشكلة تقنية',
      billing: 'الفوترة',
      account: 'الحساب',
      listing: 'القائمة',
      general: 'عام',
      
      // Priority
      low: 'منخفضة',
      medium: 'متوسطة',
      high: 'عالية',
      urgent: 'عاجلة',
      
      // Status
      open: 'مفتوحة',
      inProgress: 'قيد المعالجة',
      resolved: 'محلولة',
      closed: 'مغلقة',
      
      // Chat
      startChat: 'بدء الدردشة المباشرة',
      chatWithSupport: 'الدردشة مع الدعم',
      typeMessage: 'اكتب رسالتك...',
      sendMessage: 'إرسال',
      attachFile: 'إرفاق ملف',
      chatOnline: 'الدعم متاح',
      chatOffline: 'الدعم غير متاح',
      avgResponseTime: 'متوسط وقت الاستجابة: 5 دقائق',
      
      // FAQ
      frequentlyAsked: 'الأسئلة الشائعة',
      searchFAQ: 'البحث في الأسئلة الشائعة...',
      helpful: 'هل كان هذا مفيداً؟',
      yes: 'نعم',
      no: 'لا',
      
      // Contact
      contactSupport: 'اتصل بالدعم',
      businessHours: 'ساعات العمل',
      mondayFriday: 'الاثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً بتوقيت شرق أمريكا',
      weekend: 'السبت - الأحد: 10:00 صباحاً - 4:00 مساءً بتوقيت شرق أمريكا',
      emergencySupport: 'الدعم الطارئ',
      emergencyNote: 'للمسائل العاجلة خارج ساعات العمل',
      
      // Messages
      ticketSubmitted: 'تم إرسال تذكرتك بنجاح',
      messageSent: 'تم إرسال الرسالة',
      fileAttached: 'تم إرفاق الملف بنجاح'
    }
  }

  const t = translations[language]

  // Mock data
  const tickets = [
    {
      id: 'T-001',
      subject: 'Unable to update business listing',
      category: 'technical',
      priority: 'medium',
      status: 'open',
      created: '2024-01-15',
      lastUpdate: '2024-01-16',
      messages: [
        {
          id: 1,
          sender: 'user',
          message: 'I am unable to update my business listing. The save button is not working.',
          time: '2:30 PM',
          date: '2024-01-15'
        },
        {
          id: 2,
          sender: 'support',
          message: 'Thank you for contacting us. We are looking into this issue and will get back to you shortly.',
          time: '3:45 PM',
          date: '2024-01-15'
        }
      ]
    },
    {
      id: 'T-002',
      subject: 'Billing question about premium listing',
      category: 'billing',
      priority: 'low',
      status: 'resolved',
      created: '2024-01-10',
      lastUpdate: '2024-01-12',
      messages: []
    }
  ]

  const faqItems = [
    {
      id: 1,
      question: 'How do I create a business listing?',
      answer: 'To create a business listing, go to the Business Directory section and click "Add Business". Fill out all required information including business name, category, description, and contact details.',
      category: 'listings',
      helpful: 15,
      notHelpful: 2
    },
    {
      id: 2,
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page, enter your email address, and follow the instructions sent to your email.',
      category: 'account',
      helpful: 23,
      notHelpful: 1
    },
    {
      id: 3,
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for premium services.',
      category: 'billing',
      helpful: 18,
      notHelpful: 0
    }
  ]

  const sendChatMessage = () => {
    if (!newMessage.trim()) return

    const userMessage = {
      id: chatMessages.length + 1,
      sender: 'user',
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text'
    }

    setChatMessages([...chatMessages, userMessage])
    setNewMessage('')

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: chatMessages.length + 2,
        sender: 'bot',
        message: 'Thank you for your message. A support agent will be with you shortly.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'text'
      }
      setChatMessages(prev => [...prev, botResponse])
    }, 1000)
  }

  const TicketsTab = () => (
    <div className="space-y-6">
      {/* Create New Ticket */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            {t.createTicket}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="subject">{t.ticketSubject}</Label>
                <Input id="subject" placeholder="Brief description of your issue" />
              </div>
              <div>
                <Label htmlFor="category">{t.ticketCategory}</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technical">{t.technical}</SelectItem>
                    <SelectItem value="billing">{t.billing}</SelectItem>
                    <SelectItem value="account">{t.account}</SelectItem>
                    <SelectItem value="listing">{t.listing}</SelectItem>
                    <SelectItem value="general">{t.general}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="priority">{t.ticketPriority}</Label>
              <Select>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">{t.low}</SelectItem>
                  <SelectItem value="medium">{t.medium}</SelectItem>
                  <SelectItem value="high">{t.high}</SelectItem>
                  <SelectItem value="urgent">{t.urgent}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description">{t.ticketDescription}</Label>
              <Textarea
                id="description"
                placeholder="Please provide detailed information about your issue"
                rows={4}
              />
            </div>
            <Button>
              <Send className="h-4 w-4 mr-2" />
              {t.submitTicket}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Existing Tickets */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            {t.myTickets}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setSelectedTicket(ticket)}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-muted-foreground">
                      {ticket.id}
                    </span>
                    <Badge
                      variant={
                        ticket.status === 'open' ? 'destructive' :
                        ticket.status === 'inProgress' ? 'default' :
                        ticket.status === 'resolved' ? 'secondary' : 'outline'
                      }
                    >
                      {t[ticket.status]}
                    </Badge>
                    <Badge variant="outline">
                      {t[ticket.priority]}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {ticket.lastUpdate}
                  </span>
                </div>
                <h3 className="font-medium mb-1">{ticket.subject}</h3>
                <p className="text-sm text-muted-foreground">
                  Category: {t[ticket.category]} • Created: {ticket.created}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const ChatTab = () => (
    <div className="space-y-6">
      {/* Chat Status */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <p className="font-medium">{t.chatOnline}</p>
                <p className="text-sm text-muted-foreground">{t.avgResponseTime}</p>
              </div>
            </div>
            <Button onClick={() => setChatOpen(true)}>
              <MessageCircle className="h-4 w-4 mr-2" />
              {t.startChat}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 w-96 h-96 bg-background border rounded-lg shadow-lg z-50"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span className="font-medium">{t.chatWithSupport}</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setChatOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <ScrollArea className="h-64 p-4">
              <div className="space-y-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start gap-2 max-w-[80%] ${
                      message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
                    }`}>
                      <Avatar className="h-6 w-6">
                        {message.sender === 'user' ? (
                          <AvatarFallback className="text-xs">U</AvatarFallback>
                        ) : (
                          <AvatarFallback className="text-xs">
                            <Bot className="h-3 w-3" />
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div className={`p-3 rounded-lg ${
                        message.sender === 'user' 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' 
                            ? 'text-primary-foreground/70' 
                            : 'text-muted-foreground'
                        }`}>
                          {message.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder={t.typeMessage}
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                />
                <Button size="sm" onClick={sendChatMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  const FAQTab = () => (
    <div className="space-y-6">
      {/* Search FAQ */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={t.searchFAQ}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqItems.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <CardTitle className="text-lg">{item.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{item.answer}</p>
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">{t.helpful}</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      {t.yes} ({item.helpful})
                    </Button>
                    <Button variant="outline" size="sm">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      {t.no} ({item.notHelpful})
                    </Button>
                  </div>
                </div>
                <Badge variant="secondary">{item.category}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const ContactTab = () => (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              {t.contactSupport}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">+1 (555) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Support Hotline</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">support@georgia-arab.com</p>
                  <p className="text-sm text-muted-foreground">Email Support</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              {t.businessHours}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="font-medium">{t.mondayFriday}</p>
              </div>
              <div>
                <p className="font-medium">{t.weekend}</p>
              </div>
              <Separator />
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>{t.emergencySupport}:</strong><br />
                  {t.emergencyNote}
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </div>
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

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="tickets" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                {t.tickets}
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                {t.chat}
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                {t.faq}
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {t.contact}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tickets">
              <TicketsTab />
            </TabsContent>
            <TabsContent value="chat">
              <ChatTab />
            </TabsContent>
            <TabsContent value="faq">
              <FAQTab />
            </TabsContent>
            <TabsContent value="contact">
              <ContactTab />
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Ad Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <AdSection type="banner" size="large" language={language} />
        </motion.div>
      </div>
    </div>
  )
}

export default SupportCenter
