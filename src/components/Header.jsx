import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Moon, 
  Sun, 
  Globe, 
  Menu, 
  X, 
  Building2, 
  User,
  LogIn
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import lightLogo from '../assets/light_bk_ga.png'
import darkLogo from '../assets/dark_bk_ga.png'

const Header = ({ darkMode, toggleDarkMode, language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const translations = {
    en: {
      home: 'Home',
      directory: 'Directory',
      marketplace: 'Marketplace',
      realEstate: 'Real Estate',
      jobs: 'Jobs',
      about: 'About',
      blogs: 'Blogs',
      addBusiness: 'Add Business',
      login: 'Login',
      register: 'Register'
    },
    ar: {
      home: 'الرئيسية',
      directory: 'الدليل',
      marketplace: 'السوق',
      realEstate: 'العقارات',
      jobs: 'الوظائف',
      about: 'من نحن',
      blogs: 'المدونات',
      addBusiness: 'إضافة عمل',
      login: 'تسجيل دخول',
      register: 'إنشاء حساب'
    }
  }

  const t = translations[language]

  const navItems = [
    { path: '/', label: t.home },
    { path: '/directory', label: t.directory },
    { path: '/marketplace', label: t.marketplace },
    { path: '/real-estate', label: t.realEstate },
    { path: '/jobs', label: t.jobs },
    { path: '/about', label: t.about },
    { path: '/blogs', label: t.blogs },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src={darkMode ? lightLogo : darkLogo}
              alt="Georgia Arab Community"
              className="h-10 w-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  isActive(item.path) 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    initial={false}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex"
            >
              <Globe className="h-4 w-4 mr-2" />
              {language.toUpperCase()}
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleDarkMode}
              className="hidden sm:flex"
            >
              {darkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Add Business Button */}
            <Button className="hidden md:flex" size="sm">
              <Building2 className="h-4 w-4 mr-2" />
              {t.addBusiness}
            </Button>

            {/* Login Button */}
            <Button variant="outline" size="sm" className="hidden md:flex">
              <LogIn className="h-4 w-4 mr-2" />
              {t.login}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'ar' ? 'left' : 'right'} className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  {/* Mobile Logo */}
                  <div className="flex items-center justify-center pb-4 border-b">
                    <img
                      src={darkMode ? lightLogo : darkLogo}
                      alt="Georgia Arab Community"
                      className="h-12 w-auto"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        isActive(item.path)
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent hover:text-accent-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Mobile Actions */}
                  <div className="pt-4 border-t space-y-2">
                    <Button 
                      onClick={toggleLanguage} 
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      <Globe className="h-4 w-4 mr-2" />
                      {language === 'en' ? 'العربية' : 'English'}
                    </Button>
                    
                    <Button 
                      onClick={toggleDarkMode} 
                      variant="outline" 
                      className="w-full justify-start"
                    >
                      {darkMode ? (
                        <>
                          <Sun className="h-4 w-4 mr-2" />
                          Light Mode
                        </>
                      ) : (
                        <>
                          <Moon className="h-4 w-4 mr-2" />
                          Dark Mode
                        </>
                      )}
                    </Button>
                    
                    <Button className="w-full justify-start">
                      <Building2 className="h-4 w-4 mr-2" />
                      {t.addBusiness}
                    </Button>
                    
                    <Button variant="outline" className="w-full justify-start">
                      <LogIn className="h-4 w-4 mr-2" />
                      {t.login}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
