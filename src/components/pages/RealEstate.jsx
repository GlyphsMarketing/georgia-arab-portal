import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search, 
  Plus,
  Heart,
  Share2,
  MapPin,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  Eye,
  Phone,
  Mail,
  DollarSign
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import SearchFilter from '../shared/SearchFilter'
import Pagination from '../shared/Pagination'
import AdSection from '../shared/AdSection'

const RealEstate = ({ language }) => {
  const [searchValue, setSearchValue] = useState('')
  const [activeFilters, setActiveFilters] = useState({})
  const [viewMode, setViewMode] = useState('grid')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)

  const translations = {
    en: {
      title: 'Real Estate',
      subtitle: 'Find your perfect home in Georgia',
      searchPlaceholder: 'Search properties, locations, features...',
      addProperty: 'Add Property',
      listingType: 'Listing Type',
      propertyType: 'Property Type',
      location: 'Location',
      priceRange: 'Price Range',
      bedrooms: 'Bedrooms',
      bathrooms: 'Bathrooms',
      area: 'Area (sq ft)',
      sortBy: 'Sort By',
      newest: 'Newest',
      oldest: 'Oldest',
      priceLowHigh: 'Price: Low to High',
      priceHighLow: 'Price: High to Low',
      areaLargeSmall: 'Area: Large to Small',
      forSale: 'For Sale',
      forRent: 'For Rent',
      house: 'House',
      apartment: 'Apartment',
      condo: 'Condo',
      townhouse: 'Townhouse',
      villa: 'Villa',
      studio: 'Studio',
      contact: 'Contact Agent',
      favorite: 'Add to Favorites',
      share: 'Share',
      viewDetails: 'View Details',
      schedule: 'Schedule Tour',
      posted: 'Posted',
      ago: 'ago',
      bed: 'bed',
      beds: 'beds',
      bath: 'bath',
      baths: 'baths',
      sqft: 'sq ft',
      parking: 'parking',
      month: '/month',
      featuredProperties: 'Featured Properties',
      recentlyAdded: 'Recently Added',
      priceReduced: 'Price Reduced'
    },
    ar: {
      title: 'العقارات',
      subtitle: 'اعثر على منزلك المثالي في جورجيا',
      searchPlaceholder: 'البحث عن العقارات والمواقع والميزات...',
      addProperty: 'إضافة عقار',
      listingType: 'نوع القائمة',
      propertyType: 'نوع العقار',
      location: 'الموقع',
      priceRange: 'نطاق السعر',
      bedrooms: 'غرف النوم',
      bathrooms: 'الحمامات',
      area: 'المساحة (قدم مربع)',
      sortBy: 'ترتيب حسب',
      newest: 'الأحدث',
      oldest: 'الأقدم',
      priceLowHigh: 'السعر: من الأقل إلى الأعلى',
      priceHighLow: 'السعر: من الأعلى إلى الأقل',
      areaLargeSmall: 'المساحة: من الأكبر إلى الأصغر',
      forSale: 'للبيع',
      forRent: 'للإيجار',
      house: 'منزل',
      apartment: 'شقة',
      condo: 'شقة فاخرة',
      townhouse: 'منزل مدرج',
      villa: 'فيلا',
      studio: 'استوديو',
      contact: 'اتصل بالوكيل',
      favorite: 'إضافة للمفضلة',
      share: 'مشاركة',
      viewDetails: 'عرض التفاصيل',
      schedule: 'جدولة جولة',
      posted: 'تم النشر',
      ago: 'منذ',
      bed: 'غرفة نوم',
      beds: 'غرف نوم',
      bath: 'حمام',
      baths: 'حمامات',
      sqft: 'قدم مربع',
      parking: 'موقف سيارات',
      month: '/شهر',
      featuredProperties: 'العقارات المميزة',
      recentlyAdded: 'المضافة حديثاً',
      priceReduced: 'تم تخفيض السعر'
    }
  }

  const t = translations[language]

  const filters = [
    {
      key: 'listingType',
      label: t.listingType,
      type: 'select',
      placeholder: t.listingType,
      options: [
        { value: 'sale', label: t.forSale },
        { value: 'rent', label: t.forRent }
      ]
    },
    {
      key: 'propertyType',
      label: t.propertyType,
      type: 'select',
      placeholder: t.propertyType,
      options: [
        { value: 'house', label: t.house },
        { value: 'apartment', label: t.apartment },
        { value: 'condo', label: t.condo },
        { value: 'townhouse', label: t.townhouse },
        { value: 'villa', label: t.villa },
        { value: 'studio', label: t.studio }
      ]
    },
    {
      key: 'location',
      label: t.location,
      type: 'select',
      placeholder: t.location,
      options: [
        { value: 'atlanta', label: 'Atlanta' },
        { value: 'marietta', label: 'Marietta' },
        { value: 'duluth', label: 'Duluth' },
        { value: 'roswell', label: 'Roswell' },
        { value: 'alpharetta', label: 'Alpharetta' },
        { value: 'sandy-springs', label: 'Sandy Springs' }
      ]
    },
    {
      key: 'price',
      label: t.priceRange,
      type: 'range',
      minPlaceholder: 'Min Price',
      maxPlaceholder: 'Max Price'
    },
    {
      key: 'bedrooms',
      label: t.bedrooms,
      type: 'select',
      placeholder: t.bedrooms,
      options: [
        { value: '1', label: '1+' },
        { value: '2', label: '2+' },
        { value: '3', label: '3+' },
        { value: '4', label: '4+' },
        { value: '5', label: '5+' }
      ]
    },
    {
      key: 'bathrooms',
      label: t.bathrooms,
      type: 'select',
      placeholder: t.bathrooms,
      options: [
        { value: '1', label: '1+' },
        { value: '2', label: '2+' },
        { value: '3', label: '3+' },
        { value: '4', label: '4+' }
      ]
    }
  ]

  const sampleProperties = [
    {
      id: 1,
      title: 'Modern Family Home',
      price: '$450,000',
      type: 'sale',
      propertyType: 'House',
      location: 'Atlanta, GA',
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      parking: 2,
      posted: '2 days ago',
      featured: true,
      images: ['/api/placeholder/400/300'],
      agent: {
        name: 'Sarah Johnson',
        phone: '+1 (555) 123-4567',
        email: 'sarah@realty.com'
      },
      description: 'Beautiful modern home in quiet neighborhood with updated kitchen and spacious backyard.'
    },
    {
      id: 2,
      title: 'Downtown Luxury Apartment',
      price: '$2,200',
      type: 'rent',
      propertyType: 'Apartment',
      location: 'Marietta, GA',
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      parking: 1,
      posted: '1 week ago',
      featured: false,
      images: ['/api/placeholder/400/300'],
      agent: {
        name: 'Ahmed Hassan',
        phone: '+1 (555) 987-6543',
        email: 'ahmed@properties.com'
      },
      description: 'Luxury apartment with city views, modern amenities, and walking distance to restaurants.'
    },
    {
      id: 3,
      title: 'Spacious Villa',
      price: '$750,000',
      type: 'sale',
      propertyType: 'Villa',
      location: 'Alpharetta, GA',
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      parking: 3,
      posted: '3 days ago',
      featured: true,
      priceReduced: true,
      images: ['/api/placeholder/400/300'],
      agent: {
        name: 'Omar Khalil',
        phone: '+1 (555) 456-7890',
        email: 'omar@luxuryrealty.com'
      },
      description: 'Stunning villa with pool, large garden, and premium finishes throughout.'
    },
    {
      id: 4,
      title: 'Cozy Townhouse',
      price: '$1,800',
      type: 'rent',
      propertyType: 'Townhouse',
      location: 'Duluth, GA',
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      parking: 2,
      posted: '5 days ago',
      featured: false,
      images: ['/api/placeholder/400/300'],
      agent: {
        name: 'Layla Ahmed',
        phone: '+1 (555) 321-0987',
        email: 'layla@homes.com'
      },
      description: 'Charming townhouse in family-friendly community with great schools nearby.'
    },
    {
      id: 5,
      title: 'Modern Condo',
      price: '$320,000',
      type: 'sale',
      propertyType: 'Condo',
      location: 'Sandy Springs, GA',
      bedrooms: 2,
      bathrooms: 2,
      area: 1100,
      parking: 1,
      posted: '1 day ago',
      featured: false,
      recentlyAdded: true,
      images: ['/api/placeholder/400/300'],
      agent: {
        name: 'Youssef Ibrahim',
        phone: '+1 (555) 654-3210',
        email: 'youssef@condos.com'
      },
      description: 'Contemporary condo with high-end finishes and building amenities.'
    },
    {
      id: 6,
      title: 'Studio Apartment',
      price: '$1,200',
      type: 'rent',
      propertyType: 'Studio',
      location: 'Roswell, GA',
      bedrooms: 0,
      bathrooms: 1,
      area: 600,
      parking: 1,
      posted: '4 days ago',
      featured: false,
      images: ['/api/placeholder/400/300'],
      agent: {
        name: 'Nadia Mansour',
        phone: '+1 (555) 789-0123',
        email: 'nadia@apartments.com'
      },
      description: 'Efficient studio with modern design and convenient location.'
    }
  ]

  const handleFilterChange = (key, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [key]: value
    }))
  }

  const handleClearFilters = () => {
    setActiveFilters({})
  }

  const formatBedBath = (bedrooms, bathrooms) => {
    const bedText = bedrooms === 0 ? 'Studio' : bedrooms === 1 ? `1 ${t.bed}` : `${bedrooms} ${t.beds}`
    const bathText = bathrooms === 1 ? `1 ${t.bath}` : `${bathrooms} ${t.baths}`
    return bedrooms === 0 ? 'Studio' : `${bedText} • ${bathText}`
  }

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

        {/* Ad Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <AdSection type="banner" size="medium" language={language} />
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
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button className="lg:w-auto">
              <Plus className="h-4 w-4 mr-2" />
              {t.addProperty}
            </Button>
          </div>

          <SearchFilter
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            filters={filters}
            activeFilters={activeFilters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            language={language}
          />
        </motion.div>

        {/* Properties Grid */}
        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {sampleProperties.map((property, index) => (
                  <motion.div
                    key={property.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                        
                        {/* Property Badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                          {property.featured && (
                            <Badge className="bg-yellow-500 text-yellow-50">
                              {t.featuredProperties}
                            </Badge>
                          )}
                          {property.recentlyAdded && (
                            <Badge className="bg-green-500 text-green-50">
                              {t.recentlyAdded}
                            </Badge>
                          )}
                          {property.priceReduced && (
                            <Badge className="bg-red-500 text-red-50">
                              {t.priceReduced}
                            </Badge>
                          )}
                        </div>

                        {/* Action Buttons */}
                        <div className="absolute top-2 right-2 flex gap-2">
                          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>

                        {/* Property Type Badge */}
                        <Badge className="absolute bottom-2 left-2" variant="secondary">
                          {property.propertyType}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg truncate flex-1">
                            {property.title}
                          </h3>
                          <div className="text-right ml-2">
                            <span className="text-lg font-bold text-primary">
                              {property.price}
                            </span>
                            {property.type === 'rent' && (
                              <span className="text-sm text-muted-foreground">
                                {t.month}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {property.location}
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Bed className="h-4 w-4 mr-1" />
                              {formatBedBath(property.bedrooms, property.bathrooms)}
                            </div>
                            <div className="flex items-center">
                              <Square className="h-4 w-4 mr-1" />
                              {property.area.toLocaleString()} {t.sqft}
                            </div>
                            {property.parking > 0 && (
                              <div className="flex items-center">
                                <Car className="h-4 w-4 mr-1" />
                                {property.parking} {t.parking}
                              </div>
                            )}
                          </div>
                          
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {t.posted} {property.posted}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {property.description}
                        </p>
                        
                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            {t.viewDetails}
                          </Button>
                          <Button variant="outline" size="sm">
                            <Phone className="h-4 w-4 mr-1" />
                            {t.contact}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pagination */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12"
            >
              <Pagination
                currentPage={currentPage}
                totalPages={5}
                totalItems={60}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
                onItemsPerPageChange={setItemsPerPage}
                language={language}
              />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-80">
            <div className="sticky top-24 space-y-6">
              <AdSection type="sidebar" size="large" language={language} />
              <AdSection type="card" size="medium" language={language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealEstate
