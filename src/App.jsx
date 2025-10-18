import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/pages/HomePage'
import Directory from './components/pages/Directory'
import DirectorySubcategory from './components/pages/DirectorySubcategory'
import DirectorySpecialization from './components/pages/DirectorySpecialization'
import BusinessProfile from './components/pages/BusinessProfile'
import Marketplace from './components/pages/Marketplace'
import MarketplaceCategory from './components/pages/MarketplaceCategory'
import MarketplaceAll from './components/pages/MarketplaceAll'
import MarketplaceProduct from './components/pages/MarketplaceProduct'
import RealEstate from './components/pages/RealEstate'
import Jobs from './components/pages/Jobs'
import AddJob from './components/pages/AddJob'
import JobDetails from './components/pages/JobDetails'
import Businesses from './components/pages/Businesses'
import About from './components/pages/About'
import Blogs from './components/pages/Blogs'
import Contact from './components/pages/Contact'
import FAQ from './components/pages/FAQ'
import Privacy from './components/pages/Privacy'
import Terms from './components/pages/Terms'
import Dashboard from './components/pages/Dashboard'
import ProfileSettings from './components/account/ProfileSettings'
import SupportCenter from './components/account/SupportCenter'
import AuthDialogs from './components/auth/AuthDialogs'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [language, setLanguage] = useState('en')
  const [authDialog, setAuthDialog] = useState({ isOpen: false, tab: 'login' })
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const savedLanguage = localStorage.getItem('language')
    const savedAuth = localStorage.getItem('isAuthenticated') === 'true'
    const savedUser = JSON.parse(localStorage.getItem('user') || 'null')
    
    if (savedTheme === 'dark') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    
    if (savedLanguage) {
      setLanguage(savedLanguage)
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr'
    }

    setIsAuthenticated(savedAuth)
    setUser(savedUser)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'
  }

  const openAuthDialog = (tab = 'login') => {
    setAuthDialog({ isOpen: true, tab })
  }

  const closeAuthDialog = () => {
    setAuthDialog({ isOpen: false, tab: 'login' })
  }

  const handleAuth = (userData) => {
    setIsAuthenticated(true)
    setUser(userData)
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('user', JSON.stringify(userData))
    closeAuthDialog()
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    localStorage.removeItem('isAuthenticated')
    localStorage.removeItem('user')
  }

  return (
    <Router>
      <div className={`min-h-screen bg-background text-foreground transition-colors duration-300 ${language === 'ar' ? 'font-arabic' : ''}`}>
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode}
          language={language}
          toggleLanguage={toggleLanguage}
          isAuthenticated={isAuthenticated}
          user={user}
          onLogin={() => openAuthDialog('login')}
          onRegister={() => openAuthDialog('register')}
          onLogout={handleLogout}
        />
        
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Routes>
              <Route path="/" element={<HomePage language={language} />} />
              <Route path="/directory" element={<Directory language={language} />} />
              <Route path="/directory/:category" element={<DirectorySubcategory language={language} />} />
              <Route path="/directory/:category/:subcategory" element={<DirectorySubcategory language={language} />} />
              <Route path="/directory/:category/:subcategory/:specialization" element={<DirectorySpecialization language={language} />} />
              <Route path="/directory/:category/:subcategory/:specialization/:businessId" element={<BusinessProfile language={language} />} />
              <Route path="/marketplace" element={<Marketplace language={language} />} />
              <Route path="/marketplace/all" element={<MarketplaceAll language={language} />} />
              <Route path="/marketplace/category/:categoryId" element={<MarketplaceCategory language={language} />} />
              <Route path="/marketplace/product/:productId" element={<MarketplaceProduct language={language} />} />
              <Route path="/real-estate" element={<RealEstate language={language} />} />
              <Route path="/jobs" element={<Jobs language={language} />} />
              <Route path="/jobs/add" element={<AddJob language={language} />} />
              <Route path="/jobs/:jobId" element={<JobDetails language={language} />} />
              <Route path="/businesses" element={<Businesses language={language} />} />
              <Route path="/about" element={<About language={language} />} />
              <Route path="/blogs" element={<Blogs language={language} />} />
              <Route path="/contact" element={<Contact language={language} />} />
              <Route path="/faq" element={<FAQ language={language} />} />
              <Route path="/privacy" element={<Privacy language={language} />} />
              <Route path="/terms" element={<Terms language={language} />} />
              <Route path="/support" element={<SupportCenter language={language} />} />
              
              {/* Protected Routes */}
              <Route 
                path="/dashboard" 
                element={
                  isAuthenticated ? (
                    <Dashboard language={language} user={user} />
                  ) : (
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Access Restricted</h1>
                        <p className="text-muted-foreground mb-6">
                          Please log in to access your dashboard.
                        </p>
                        <button
                          onClick={() => openAuthDialog('login')}
                          className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  )
                } 
              />
              <Route 
                path="/profile" 
                element={
                  isAuthenticated ? (
                    <ProfileSettings language={language} user={user} />
                  ) : (
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-2xl font-bold mb-4">Access Restricted</h1>
                        <p className="text-muted-foreground mb-6">
                          Please log in to access your profile settings.
                        </p>
                        <button
                          onClick={() => openAuthDialog('login')}
                          className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  )
                } 
              />
            </Routes>
          </motion.main>
        </AnimatePresence>
        
        <Footer language={language} />

        {/* Authentication Dialogs */}
        <AuthDialogs
          isOpen={authDialog.isOpen}
          onClose={closeAuthDialog}
          initialTab={authDialog.tab}
          language={language}
          onAuth={handleAuth}
        />
      </div>
    </Router>
  )
}

export default App
