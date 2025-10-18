import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Menu, 
  X, 
  Building2, 
  User,
  LogIn,
  LogOut,
  Settings,
  Bell,
  ChevronDown
} from 'lucide-react'
import { useAuth } from '@/lib/useAuth'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'
// import lightLogo from '../assets/light_bk_ga.png'
// import darkLogo from '../assets/dark_bk_ga.png'
import lightLogo from '../assets/light_bk_ga.ico'
import darkLogo from '../assets/dark_bk_ga.ico'

const Header = ({ darkMode, toggleDarkMode, language, toggleLanguage, onLogin, onRegister }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const location = useLocation()
  const { isAuthenticated, user, logout } = useAuth()

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
            <ThemeSwitcher 
              darkMode={darkMode} 
              toggleDarkMode={toggleDarkMode} 
              className="hidden sm:flex"
            />

            {/* Add Business Button */}
            <Button className="hidden md:flex" size="sm">
              <Building2 className="h-4 w-4 mr-2" />
              {t.addBusiness}
            </Button>

            {/* Authentication Buttons */}
            {isAuthenticated ? (
              <div className="hidden md:flex relative">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    {user?.firstName?.charAt(0) || user?.email?.charAt(0) || 'U'}
                  </div>
                  <span>{user?.firstName || user?.email}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                {userMenuOpen && (
                  <div className="absolute top-full right-0 mt-1 w-64 bg-card rounded-xl border shadow-lg overflow-hidden z-50">
                    <div className="p-4 border-b">
                      <p className="font-medium">{user?.firstName} {user?.lastName}</p>
                      <p className="text-sm text-muted-foreground">{user?.email}</p>
                    </div>
                    <div className="p-2">
                      <Link 
                        to="/dashboard" 
                        className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg transition-colors w-full text-left"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <User className="h-4 w-4" />
                        Dashboard
                      </Link>
                      <Link 
                        to="/profile" 
                        className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg transition-colors w-full text-left"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <Settings className="h-4 w-4" />
                        Profile Settings
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setUserMenuOpen(false);
                        }}
                        className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg transition-colors w-full text-left"
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={onLogin}>
                  <LogIn className="h-4 w-4 mr-2" />
                  {t.login}
                </Button>
                <Button size="sm" onClick={onRegister}>
                  {t.register}
                </Button>
              </div>
            )}

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
                    
                    <ThemeSwitcher 
                      darkMode={darkMode} 
                      toggleDarkMode={toggleDarkMode}
                      variant="outline"
                      showText={true}
                      className="w-full justify-start"
                    />
                    
                    <Button className="w-full justify-start">
                      <Building2 className="h-4 w-4 mr-2" />
                      {t.addBusiness}
                    </Button>
                    
                    {isAuthenticated ? (
                      <>
                        <Link to="/dashboard">
                          <Button variant="outline" className="w-full justify-start">
                            <User className="h-4 w-4 mr-2" />
                            Dashboard
                          </Button>
                        </Link>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start"
                          onClick={logout}
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start"
                          onClick={() => {
                            setIsOpen(false);
                            onLogin();
                          }}
                        >
                          <LogIn className="h-4 w-4 mr-2" />
                          {t.login}
                        </Button>
                        <Button 
                          className="w-full justify-start"
                          onClick={() => {
                            setIsOpen(false);
                            onRegister();
                          }}
                        >
                          {t.register}
                        </Button>
                      </>
                    )}
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
