import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Home,
  MapPin,
  DollarSign,
  Mail,
  Phone,
  Upload,
  Square,
  BedDouble,
  Bath,
  Link as LinkIcon,
  Search
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';

const AddProperty = ({ language = 'en' }) => {
  const navigate = useNavigate();
  const [listingType, setListingType] = useState('accommodation'); // 'accommodation' or 'looking'
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    mainImage: null,
    multimedia: [],
    city: '',
    propertyType: '',
    isSharedBathroom: false,
    numRooms: '',
    numBathrooms: '',
    price: '',
    areaSquareFeet: '',
    referenceUrl: '',
    email: '',
    phone: ''
  });

  const translations = {
    en: {
      addProperty: 'Add Property',
      backToProperties: 'Back to Properties',
      accommodation: 'Offering Accommodation',
      looking: 'Looking for Accommodation',
      postingAs: 'I am posting as',
      propertyDetails: 'Property Details',
      mainImage: 'Main Image',
      multimedia: 'Additional Images',
      title: 'Property Title',
      titlePlaceholder: 'e.g. Spacious 2-Bedroom Apartment in Midtown',
      description: 'Property Description',
      descriptionPlaceholder: 'Describe the property, its features, and location...',
      city: 'City',
      cityPlaceholder: 'e.g. Atlanta, GA',
      propertyType: 'Property Type',
      room: 'Room',
      apartment: 'Apartment',
      house: 'House',
      condo: 'Condo',
      sharedBathroom: 'Shared Bathroom',
      numRooms: 'Number of Rooms',
      numBathrooms: 'Number of Bathrooms',
      price: 'Price',
      pricePlaceholder: 'e.g. 1500',
      areaSquareFeet: 'Area (Square Feet)',
      areaPlaceholder: 'e.g. 1200',
      referenceUrl: 'Reference URL',
      referenceUrlPlaceholder: 'e.g. https://your-listing.com',
      email: 'Email Address',
      emailPlaceholder: 'your.email@example.com',
      phone: 'Phone Number',
      phonePlaceholder: '+1 (555) 123-4567',
      uploadImage: 'Upload Image',
      uploadMore: 'Upload More Images',
      submit: 'Submit Property Listing',
      cancel: 'Cancel',
      required: 'Required',
      optional: 'Optional'
    },
    ar: {
      addProperty: 'إضافة عقار',
      backToProperties: 'العودة إلى العقارات',
      accommodation: 'عرض سكن',
      looking: 'البحث عن سكن',
      postingAs: 'أقوم بالنشر كـ',
      propertyDetails: 'تفاصيل العقار',
      mainImage: 'الصورة الرئيسية',
      multimedia: 'صور إضافية',
      title: 'عنوان العقار',
      titlePlaceholder: 'مثال: شقة واسعة بغرفتي نوم في وسط المدينة',
      description: 'وصف العقار',
      descriptionPlaceholder: 'صف العقار، ميزاته، وموقعه...',
      city: 'المدينة',
      cityPlaceholder: 'مثال: أتلانتا، جورجيا',
      propertyType: 'نوع العقار',
      room: 'غرفة',
      apartment: 'شقة',
      house: 'منزل',
      condo: 'كوندو',
      sharedBathroom: 'حمام مشترك',
      numRooms: 'عدد الغرف',
      numBathrooms: 'عدد الحمامات',
      price: 'السعر',
      pricePlaceholder: 'مثال: 1500',
      areaSquareFeet: 'المساحة (قدم مربع)',
      areaPlaceholder: 'مثال: 1200',
      referenceUrl: 'رابط مرجعي',
      referenceUrlPlaceholder: 'مثال: https://your-listing.com',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'your.email@example.com',
      phone: 'رقم الهاتف',
      phonePlaceholder: '+1 (555) 123-4567',
      uploadImage: 'تحميل صورة',
      uploadMore: 'تحميل المزيد من الصور',
      submit: 'نشر العقار',
      cancel: 'إلغاء',
      required: 'مطلوب',
      optional: 'اختياري'
    }
  };

  const t = translations[language];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMainImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // TODO: Handle image upload
      handleInputChange('mainImage', file);
    }
  };

  const handleMultimediaUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      // TODO: Handle multiple image upload
      handleInputChange('multimedia', [...formData.multimedia, ...files]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle form submission
    console.log('Form data:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            className="mr-4"
            onClick={() => navigate('/real-estate')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.backToProperties}
          </Button>
          <h1 className="text-3xl font-bold">{t.addProperty}</h1>
        </div>

        <Card className="p-6 bg-background">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Property Type Toggle */}
            <div className="rounded-lg p-4 mb-8">
              <h2 className="text-xl font-semibold mb-6">{t.postingAs}</h2>
              
              <div className="flex gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setListingType('accommodation')}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    listingType === 'accommodation'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Home className="h-6 w-6" />
                    <span className="font-medium">{t.accommodation}</span>
                  </div>
                </button>
                
                <button
                  type="button"
                  onClick={() => setListingType('looking')}
                  className={`flex-1 p-4 rounded-lg border-2 transition-all ${
                    listingType === 'looking'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-3">
                    <Search className="h-6 w-6" />
                    <span className="font-medium">{t.looking}</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Image Upload Section */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.mainImage} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageUpload}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.multimedia} <span className="text-gray-500">({t.optional})</span>
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleMultimediaUpload}
                />
              </div>
            </div>

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  {t.title} <span className="text-red-500">*</span>
                </label>
                <Input
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder={t.titlePlaceholder}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  {t.description} <span className="text-red-500">*</span>
                </label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder={t.descriptionPlaceholder}
                  rows={6}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.city} <span className="text-red-500">*</span>
                </label>
                <Input
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder={t.cityPlaceholder}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.propertyType} <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => handleInputChange('propertyType', e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                >
                  <option value="">{t.propertyType}</option>
                  <option value="room">{t.room}</option>
                  <option value="apartment">{t.apartment}</option>
                  <option value="house">{t.house}</option>
                  <option value="condo">{t.condo}</option>
                </select>
              </div>

              {formData.propertyType === 'room' && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sharedBathroom"
                    checked={formData.isSharedBathroom}
                    onCheckedChange={(checked) => 
                      handleInputChange('isSharedBathroom', checked)
                    }
                  />
                  <label
                    htmlFor="sharedBathroom"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {t.sharedBathroom}
                  </label>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.numRooms} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  value={formData.numRooms}
                  onChange={(e) => handleInputChange('numRooms', e.target.value)}
                  min="1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.numBathrooms} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  value={formData.numBathrooms}
                  onChange={(e) => handleInputChange('numBathrooms', e.target.value)}
                  min="1"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.price} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  value={formData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  placeholder={t.pricePlaceholder}
                  min="0"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.areaSquareFeet} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="number"
                  value={formData.areaSquareFeet}
                  onChange={(e) => handleInputChange('areaSquareFeet', e.target.value)}
                  placeholder={t.areaPlaceholder}
                  min="0"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-2">
                  {t.referenceUrl} <span className="text-gray-500">({t.optional})</span>
                </label>
                <Input
                  type="url"
                  value={formData.referenceUrl}
                  onChange={(e) => handleInputChange('referenceUrl', e.target.value)}
                  placeholder={t.referenceUrlPlaceholder}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.email} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder={t.emailPlaceholder}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  {t.phone} <span className="text-red-500">*</span>
                </label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder={t.phonePlaceholder}
                  required
                />
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex justify-end space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/real-estate')}
              >
                {t.cancel}
              </Button>
              <Button type="submit">
                {t.submit}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </motion.div>
  );
};

export default AddProperty;