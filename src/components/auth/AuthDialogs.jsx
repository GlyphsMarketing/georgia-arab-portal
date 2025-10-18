import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  Lock, 
  User, 
  Phone, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  AlertCircle,
  Building2,
  MapPin,
  Globe
} from 'lucide-react'
import { useAuth } from '@/lib/useAuth'
import authService from '@/lib/authService'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const AuthDialogs = ({ isOpen, onClose, initialTab = 'login', language = 'en', onAuth }) => {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [accountType, setAccountType] = useState('individual')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: '',
    businessName: '',
    businessCategory: '',
    businessAddress: '',
    businessWebsite: '',
    agreeToTerms: false
  })
  const [formError, setFormError] = useState('')
  
  // Get auth context
  const { login, register, resetPassword, authError, clearError } = useAuth()

  const translations = {
    en: {
      // Login
      login: 'Login',
      loginTitle: 'Welcome Back',
      loginSubtitle: 'Sign in to your account to continue',
      email: 'Email Address',
      password: 'Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password?',
      loginButton: 'Sign In',
      noAccount: 'Don\'t have an account?',
      signUp: 'Sign up',
      
      // Register
      register: 'Register',
      registerTitle: 'Create Account',
      registerSubtitle: 'Join our community today',
      firstName: 'First Name',
      lastName: 'Last Name',
      phone: 'Phone Number',
      confirmPassword: 'Confirm Password',
      accountType: 'Account Type',
      individual: 'Individual',
      business: 'Business',
      businessName: 'Business Name',
      businessCategory: 'Business Category',
      businessAddress: 'Business Address',
      businessWebsite: 'Website (Optional)',
      agreeTerms: 'I agree to the Terms of Service and Privacy Policy',
      createAccount: 'Create Account',
      haveAccount: 'Already have an account?',
      signIn: 'Sign in',
      
      // Reset Password
      resetPassword: 'Reset Password',
      resetTitle: 'Forgot Password?',
      resetSubtitle: 'Enter your email to reset your password',
      sendReset: 'Send Reset Link',
      backToLogin: 'Back to Login',
      resetSent: 'Reset Link Sent',
      resetSentMessage: 'Check your email for password reset instructions',
      
      // Steps
      step1: 'Account Information',
      step2: 'Profile Details',
      step3: 'Verification',
      next: 'Next',
      previous: 'Previous',
      finish: 'Finish',
      
      // Validation
      emailRequired: 'Email is required',
      passwordRequired: 'Password is required',
      passwordMismatch: 'Passwords do not match',
      termsRequired: 'You must agree to the terms',
      
      // Business Categories
      restaurant: 'Restaurant',
      retail: 'Retail',
      services: 'Services',
      healthcare: 'Healthcare',
      education: 'Education',
      technology: 'Technology',
      construction: 'Construction',
      automotive: 'Automotive',
      finance: 'Finance',
      other: 'Other',
      
      // Success Messages
      loginSuccess: 'Login successful!',
      registerSuccess: 'Account created successfully!',
      
      // Social Login
      continueWithGoogle: 'Continue with Google',
      continueWithFacebook: 'Continue with Facebook',
      orContinueWith: 'Or continue with email'
    },
    ar: {
      // Login
      login: 'تسجيل الدخول',
      loginTitle: 'مرحباً بعودتك',
      loginSubtitle: 'سجل دخولك إلى حسابك للمتابعة',
      email: 'عنوان البريد الإلكتروني',
      password: 'كلمة المرور',
      rememberMe: 'تذكرني',
      forgotPassword: 'نسيت كلمة المرور؟',
      loginButton: 'تسجيل الدخول',
      noAccount: 'ليس لديك حساب؟',
      signUp: 'إنشاء حساب',
      
      // Register
      register: 'إنشاء حساب',
      registerTitle: 'إنشاء حساب',
      registerSubtitle: 'انضم إلى مجتمعنا اليوم',
      firstName: 'الاسم الأول',
      lastName: 'الاسم الأخير',
      phone: 'رقم الهاتف',
      confirmPassword: 'تأكيد كلمة المرور',
      accountType: 'نوع الحساب',
      individual: 'فردي',
      business: 'تجاري',
      businessName: 'اسم العمل',
      businessCategory: 'فئة العمل',
      businessAddress: 'عنوان العمل',
      businessWebsite: 'الموقع الإلكتروني (اختياري)',
      agreeTerms: 'أوافق على شروط الخدمة وسياسة الخصوصية',
      createAccount: 'إنشاء حساب',
      haveAccount: 'لديك حساب بالفعل؟',
      signIn: 'تسجيل الدخول',
      
      // Reset Password
      resetPassword: 'إعادة تعيين كلمة المرور',
      resetTitle: 'نسيت كلمة المرور؟',
      resetSubtitle: 'أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور',
      sendReset: 'إرسال رابط الإعادة',
      backToLogin: 'العودة لتسجيل الدخول',
      resetSent: 'تم إرسال رابط الإعادة',
      resetSentMessage: 'تحقق من بريدك الإلكتروني للحصول على تعليمات إعادة تعيين كلمة المرور',
      
      // Steps
      step1: 'معلومات الحساب',
      step2: 'تفاصيل الملف الشخصي',
      step3: 'التحقق',
      next: 'التالي',
      previous: 'السابق',
      finish: 'إنهاء',
      
      // Validation
      emailRequired: 'البريد الإلكتروني مطلوب',
      passwordRequired: 'كلمة المرور مطلوبة',
      passwordMismatch: 'كلمات المرور غير متطابقة',
      termsRequired: 'يجب الموافقة على الشروط',
      
      // Business Categories
      restaurant: 'مطعم',
      retail: 'تجارة التجزئة',
      services: 'خدمات',
      healthcare: 'رعاية صحية',
      education: 'تعليم',
      technology: 'تكنولوجيا',
      construction: 'إنشاءات',
      automotive: 'سيارات',
      finance: 'مالية',
      other: 'أخرى',
      
      // Success Messages
      loginSuccess: 'تم تسجيل الدخول بنجاح!',
      registerSuccess: 'تم إنشاء الحساب بنجاح!',
      
      // Social Login
      continueWithGoogle: 'المتابعة مع Google',
      continueWithFacebook: 'المتابعة مع Facebook',
      orContinueWith: 'أو المتابعة بالبريد الإلكتروني'
    }
  }

  const t = translations[language]

  const businessCategories = [
    { value: 'restaurant', label: t.restaurant },
    { value: 'retail', label: t.retail },
    { value: 'services', label: t.services },
    { value: 'healthcare', label: t.healthcare },
    { value: 'education', label: t.education },
    { value: 'technology', label: t.technology },
    { value: 'construction', label: t.construction },
    { value: 'automotive', label: t.automotive },
    { value: 'finance', label: t.finance },
    { value: 'other', label: t.other }
  ]

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear any form errors when user starts typing
    if (formError) {
      setFormError('');
    }
    if (authError) {
      clearError();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    
    try {
      setIsLoading(true);
      
      if (activeTab === 'login') {
        // Handle login
        const userData = await login(formData.email, formData.password);
        onAuth(userData);
        onClose();
      } 
      else if (activeTab === 'register') {
        if (step < 3) {
          // Validation for registration step 1
          if (step === 1) {
            if (formData.password !== formData.confirmPassword) {
              setFormError(t.passwordMismatch);
              return;
            }
            setStep(step + 1);
          }
          // Validation for registration step 2
          else if (step === 2) {
            if (!formData.agreeToTerms) {
              setFormError(t.termsRequired);
              return;
            }
            
            // Register the user
            const userData = {
              email: formData.email,
              password: formData.password,
              firstName: formData.firstName,
              lastName: formData.lastName,
              phone: formData.phone,
              accountType: accountType,
              businessDetails: accountType === 'business' ? {
                name: formData.businessName,
                category: formData.businessCategory,
                address: formData.businessAddress,
                website: formData.businessWebsite
              } : null
            };
            
            await register(userData);
            setStep(3);
          }
        } else {
          // Final step complete - close dialog and notify parent
          onAuth(await authService.getCurrentUser());
          onClose();
        }
      }
      else if (activeTab === 'reset') {
        // Handle password reset
        await resetPassword(formData.email);
        // Show success message or close
        onClose();
      }
    } catch (error) {
      setFormError(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const LoginForm = () => (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {formError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      
      {authError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{authError}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">{t.email}</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="ahmed@example.com"
              className="pl-10"
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="password">{t.password}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              className="pl-10 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm">
            {t.rememberMe}
          </Label>
        </div>
        <button
          type="button"
          onClick={() => setActiveTab('reset')}
          className="text-sm text-primary hover:underline"
        >
          {t.forgotPassword}
        </button>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Loading...
          </div>
        ) : (
          <>
            {t.loginButton}
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      <div className="text-center text-sm">
        <span className="text-muted-foreground">{t.noAccount} </span>
        <button
          type="button"
          onClick={() => setActiveTab('register')}
          className="text-primary hover:underline"
        >
          {t.signUp}
        </button>
      </div>
    </motion.form>
  )

  const RegisterStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {formError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      
      {authError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{authError}</AlertDescription>
        </Alert>
      )}
      
      <div>
        <Label>{t.accountType}</Label>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <Card 
            className={`cursor-pointer transition-colors ${
              accountType === 'individual' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
            }`}
            onClick={() => setAccountType('individual')}
          >
            <CardContent className="p-4 text-center">
              <User className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="font-medium">{t.individual}</div>
            </CardContent>
          </Card>
          <Card 
            className={`cursor-pointer transition-colors ${
              accountType === 'business' ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
            }`}
            onClick={() => setAccountType('business')}
          >
            <CardContent className="p-4 text-center">
              <Building2 className="h-8 w-8 mx-auto mb-2 text-primary" />
              <div className="font-medium">{t.business}</div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">{t.firstName}</Label>
          <div className="relative">
            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Ahmed"
              className="pl-10"
              required
            />
          </div>
        </div>
        <div>
          <Label htmlFor="lastName">{t.lastName}</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Al-Hassan"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="email">{t.email}</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ahmed@example.com"
            className="pl-10"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="phone">{t.phone}</Label>
        <div className="relative">
          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+1 (555) 123-4567"
            className="pl-10"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="password">{t.password}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleInputChange}
              className="pl-10 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <div>
          <Label htmlFor="confirmPassword">{t.confirmPassword}</Label>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="pl-10 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const RegisterStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      {formError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      
      {accountType === 'business' && (
        <>
          <div>
            <Label htmlFor="businessName">{t.businessName}</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="businessName"
                name="businessName"
                value={formData.businessName}
                onChange={handleInputChange}
                placeholder="Al-Salam Restaurant"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="businessCategory">{t.businessCategory}</Label>
            <Select 
              value={formData.businessCategory} 
              onValueChange={(value) => setFormData({...formData, businessCategory: value})}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {businessCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="businessAddress">{t.businessAddress}</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="businessAddress"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleInputChange}
                placeholder="123 Main Street, Atlanta, GA"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="businessWebsite">{t.businessWebsite}</Label>
            <div className="relative">
              <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="businessWebsite"
                name="businessWebsite"
                type="url"
                value={formData.businessWebsite}
                onChange={handleInputChange}
                placeholder="https://www.example.com"
                className="pl-10"
              />
            </div>
          </div>
        </>
      )}

      <div className="flex items-start space-x-2">
        <Checkbox 
          id="agreeToTerms" 
          name="agreeToTerms" 
          checked={formData.agreeToTerms}
          onCheckedChange={(checked) => setFormData({...formData, agreeToTerms: checked})}
          required 
        />
        <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
          {t.agreeTerms}
        </Label>
      </div>
    </motion.div>
  )

  const RegisterStep3 = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="text-center space-y-6"
    >
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
        <CheckCircle className="h-8 w-8 text-green-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{t.registerSuccess}</h3>
        <p className="text-muted-foreground mb-4">
          Welcome to the Georgia Arab Community Portal! Your account has been created successfully.
        </p>
        <Button onClick={onClose}>
          Get Started
        </Button>
      </div>
    </motion.div>
  )

  const RegisterForm = () => (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= stepNumber 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-12 h-0.5 mx-2 ${
                  step > stepNumber ? 'bg-primary' : 'bg-muted'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-sm text-muted-foreground">
          Step {step} of 3
        </div>
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && <RegisterStep1 key="step1" />}
        {step === 2 && <RegisterStep2 key="step2" />}
        {step === 3 && <RegisterStep3 key="step3" />}
      </AnimatePresence>

      {step < 3 && (
        <div className="flex justify-between">
          {step > 1 ? (
            <Button
              type="button"
              variant="outline"
              onClick={() => setStep(step - 1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t.previous}
            </Button>
          ) : (
            <div />
          )}
          
          <Button type="submit" disabled={isLoading}>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Loading...
              </div>
            ) : (
              <>
                {step === 2 ? t.finish : t.next}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </div>
      )}

      {step === 1 && (
        <div className="text-center text-sm">
          <span className="text-muted-foreground">{t.haveAccount} </span>
          <button
            type="button"
            onClick={() => setActiveTab('login')}
            className="text-primary hover:underline"
          >
            {t.signIn}
          </button>
        </div>
      )}
    </motion.form>
  )

  const ResetPasswordForm = () => (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {formError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}
      
      {authError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{authError}</AlertDescription>
        </Alert>
      )}
      
      <div>
        <Label htmlFor="resetEmail">{t.email}</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            id="resetEmail"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="ahmed@example.com"
            className="pl-10"
            required
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Sending...
          </div>
        ) : (
          t.sendReset
        )}
      </Button>

      <div className="text-center">
        <button
          type="button"
          onClick={() => setActiveTab('login')}
          className="text-sm text-primary hover:underline flex items-center justify-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.backToLogin}
        </button>
      </div>
    </motion.form>
  )

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">
            {activeTab === 'login' && t.loginTitle}
            {activeTab === 'register' && t.registerTitle}
            {activeTab === 'reset' && t.resetTitle}
          </DialogTitle>
          <p className="text-center text-muted-foreground">
            {activeTab === 'login' && t.loginSubtitle}
            {activeTab === 'register' && t.registerSubtitle}
            {activeTab === 'reset' && t.resetSubtitle}
          </p>
        </DialogHeader>

        <div className="mt-6">
          {activeTab === 'login' && <LoginForm />}
          {activeTab === 'register' && <RegisterForm />}
          {activeTab === 'reset' && <ResetPasswordForm />}
        </div>

        {/* Social Login Options */}
        {(activeTab === 'login' || activeTab === 'register') && step === 1 && (
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {t.orContinueWith}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Button variant="outline" className="w-full">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" className="w-full">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialogs
