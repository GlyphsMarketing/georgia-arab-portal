import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  Calendar,
  User,
  Clock,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Tag,
  TrendingUp,
  BookOpen,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Pagination from '../shared/Pagination'
import AdSection from '../shared/AdSection'

const Blogs = ({ language }) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const navigate = useNavigate();

  const featuredBlog = {
    id: 1,
    title: "Understanding Arab Business Culture in Georgia",
    excerpt: "Georgia's growing Arab business community brings unique perspectives and practices to the local economy. Understanding these cultural nuances is key to successful business relationships.",
    image: "/blog/arab-business-culture.jpg",
    author: "Mohammed Ahmed",
    date: "2025-10-15",
    readTime: "8",
    views: "1.2k",
    category: "Business"
  };
  const navigate = useNavigate()

  const featuredBlog = {
    id: 1,
    title: 'Understanding Arab Business Culture in Georgia',
    excerpt: 'Georgia's growing Arab business community brings unique perspectives and practices to the local economy. Understanding these cultural nuances is key to successful business relationships.',
    image: '/blog/arab-business-culture.jpg',
    author: 'Mohammed Ahmed',
    date: '2025-10-15',
    readTime: '8',
    views: '1.2k',
    category: 'Business'
  }

  const translations = {
    en: {
      title: 'Community Blogs',
      subtitle: 'Stories, news, and insights from our community',
      searchPlaceholder: 'Search articles, topics, authors...',
      allPosts: 'All Posts',
      community: 'Community',
      business: 'Business',
      culture: 'Culture',
      events: 'Events',
      lifestyle: 'Lifestyle',
      news: 'News',
      readMore: 'Read More',
      readTime: 'min read',
      views: 'views',
      comments: 'comments',
      likes: 'likes',
      share: 'Share',
      like: 'Like',
      comment: 'Comment',
      author: 'Author',
      publishedOn: 'Published on',
      tags: 'Tags',
      relatedPosts: 'Related Posts',
      popularPosts: 'Popular Posts',
      recentPosts: 'Recent Posts',
      featuredPost: 'Featured Post',
      trending: 'Trending',
      by: 'by'
    },
    ar: {
      title: 'مدونات المجتمع',
      subtitle: 'قصص وأخبار ورؤى من مجتمعنا',
      searchPlaceholder: 'البحث عن المقالات والمواضيع والكتاب...',
      allPosts: 'جميع المنشورات',
      community: 'المجتمع',
      business: 'الأعمال',
      culture: 'الثقافة',
      events: 'الفعاليات',
      lifestyle: 'نمط الحياة',
      news: 'الأخبار',
      readMore: 'اقرأ المزيد',
      readTime: 'دقيقة قراءة',
      views: 'مشاهدات',
      comments: 'تعليقات',
      likes: 'إعجابات',
      share: 'مشاركة',
      like: 'إعجاب',
      comment: 'تعليق',
      author: 'الكاتب',
      publishedOn: 'نُشر في',
      tags: 'العلامات',
      relatedPosts: 'منشورات ذات صلة',
      popularPosts: 'المنشورات الشائعة',
      recentPosts: 'المنشورات الحديثة',
      featuredPost: 'منشور مميز',
      trending: 'الأكثر رواجاً',
      by: 'بواسطة'
    }
  }

  const t = translations[language]

  const categories = [
    { id: 'all', name: t.allPosts, count: 45 },
    { id: 'community', name: t.community, count: 12 },
    { id: 'business', name: t.business, count: 8 },
    { id: 'culture', name: t.culture, count: 10 },
    { id: 'events', name: t.events, count: 6 },
    { id: 'lifestyle', name: t.lifestyle, count: 5 },
    { id: 'news', name: t.news, count: 4 }
  ]

  const samplePosts = [
    {
      id: 1,
      title: 'Celebrating Eid al-Fitr in Georgia: A Community Gathering',
      excerpt: 'Our community came together to celebrate Eid al-Fitr with traditional foods, prayers, and festivities that brought families closer.',
      content: 'Full article content would go here...',
      category: 'community',
      categoryName: 'Community',
      author: {
        name: 'Fatima Al-Zahra',
        avatar: '/api/placeholder/40/40',
        bio: 'Community organizer and cultural writer'
      },
      publishedAt: '2024-04-15',
      readTime: 5,
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true,
      trending: true,
      tags: ['Eid', 'Community', 'Culture', 'Celebration'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 2,
      title: 'Starting an Arab Business in Georgia: A Success Story',
      excerpt: 'Learn how Ahmed Hassan built his restaurant from a small food truck to a thriving business serving authentic Middle Eastern cuisine.',
      content: 'Full article content would go here...',
      category: 'business',
      categoryName: 'Business',
      author: {
        name: 'Omar Khalil',
        avatar: '/api/placeholder/40/40',
        bio: 'Business consultant and entrepreneur'
      },
      publishedAt: '2024-04-12',
      readTime: 8,
      views: 980,
      likes: 67,
      comments: 15,
      featured: false,
      trending: false,
      tags: ['Business', 'Success Story', 'Restaurant', 'Entrepreneurship'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 3,
      title: 'Preserving Arabic Language in the Next Generation',
      excerpt: 'How Arab families in Georgia are working to maintain their cultural heritage and language through education and community programs.',
      content: 'Full article content would go here...',
      category: 'culture',
      categoryName: 'Culture',
      author: {
        name: 'Layla Ahmed',
        avatar: '/api/placeholder/40/40',
        bio: 'Arabic language teacher and cultural advocate'
      },
      publishedAt: '2024-04-10',
      readTime: 6,
      views: 756,
      likes: 45,
      comments: 18,
      featured: false,
      trending: true,
      tags: ['Arabic Language', 'Culture', 'Education', 'Heritage'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 4,
      title: 'Annual Arab Cultural Festival: A Huge Success',
      excerpt: 'The 2024 Arab Cultural Festival in Atlanta showcased the rich traditions, music, and cuisine of the Arab world to thousands of visitors.',
      content: 'Full article content would go here...',
      category: 'events',
      categoryName: 'Events',
      author: {
        name: 'Youssef Ibrahim',
        avatar: '/api/placeholder/40/40',
        bio: 'Event coordinator and community leader'
      },
      publishedAt: '2024-04-08',
      readTime: 4,
      views: 1100,
      likes: 78,
      comments: 31,
      featured: false,
      trending: false,
      tags: ['Festival', 'Culture', 'Community', 'Atlanta'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 5,
      title: 'Traditional Arab Recipes: Bringing Home to Georgia',
      excerpt: 'Discover authentic family recipes that Arab immigrants have brought to Georgia, keeping culinary traditions alive.',
      content: 'Full article content would go here...',
      category: 'lifestyle',
      categoryName: 'Lifestyle',
      author: {
        name: 'Nadia Mansour',
        avatar: '/api/placeholder/40/40',
        bio: 'Food blogger and cookbook author'
      },
      publishedAt: '2024-04-05',
      readTime: 7,
      views: 890,
      likes: 56,
      comments: 12,
      featured: false,
      trending: false,
      tags: ['Food', 'Recipes', 'Tradition', 'Culture'],
      image: '/api/placeholder/600/400'
    },
    {
      id: 6,
      title: 'New Islamic Center Opens in Marietta',
      excerpt: 'The Arab community celebrates the opening of a new Islamic center that will serve as a place of worship and community gathering.',
      content: 'Full article content would go here...',
      category: 'news',
      categoryName: 'News',
      author: {
        name: 'Hassan Ali',
        avatar: '/api/placeholder/40/40',
        bio: 'Community journalist and reporter'
      },
      publishedAt: '2024-04-03',
      readTime: 3,
      views: 1350,
      likes: 92,
      comments: 28,
      featured: true,
      trending: false,
      tags: ['Islamic Center', 'Marietta', 'Community', 'News'],
      image: '/api/placeholder/600/400'
    }
  ]

  const filteredPosts = activeCategory === 'all' 
    ? samplePosts 
    : samplePosts.filter(post => post.category === activeCategory)

  const featuredPost = samplePosts.find(post => post.featured)
  const trendingPosts = samplePosts.filter(post => post.trending)
  const popularPosts = samplePosts.sort((a, b) => b.views - a.views).slice(0, 5)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(language === 'ar' ? 'ar-SA' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
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

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-yellow-50">
                      {t.featuredPost}
                    </Badge>
                    {featuredPost.trending && (
                      <Badge className="absolute top-4 right-4 bg-red-500 text-red-50 gap-1">
                        <TrendingUp className="h-3 w-3" />
                        {t.trending}
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <Badge variant="outline" className="mb-3">
                    {featuredPost.categoryName}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={featuredPost.author.avatar} />
                        <AvatarFallback>{featuredPost.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span>{t.by} {featuredPost.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{formatDate(featuredPost.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime} {t.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.views.toLocaleString()} {t.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-4 w-4" />
                      <span>{featuredPost.likes} {t.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{featuredPost.comments} {t.comments}</span>
                    </div>
                  </div>

                  <Button>
                    {t.readMore}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}

        {/* Search and Categories */}
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
          </div>

          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-xs">
                  {category.name}
                  <Badge variant="secondary" className="ml-1 text-xs">
                    {category.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </motion.div>

        {/* Main Content */}
        <div className="flex gap-8">
          {/* Posts Grid */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.filter(post => post.id !== featuredPost?.id).map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                      <div className="relative">
                        <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                        {post.trending && (
                          <Badge className="absolute top-2 right-2 bg-red-500 text-red-50 gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {t.trending}
                          </Badge>
                        )}
                        <Badge variant="outline" className="absolute bottom-2 left-2">
                          {post.categoryName}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-4 flex flex-col h-full">
                        <h3 className="font-semibold text-lg mb-2 hover:text-primary cursor-pointer line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={post.author.avatar} />
                              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm text-muted-foreground">
                              {t.by} {post.author.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-3 text-xs text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{post.readTime} {t.readTime}</span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Eye className="h-3 w-3" />
                                <span>{post.views}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="h-3 w-3" />
                                <span>{post.likes}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="h-3 w-3" />
                                <span>{post.comments}</span>
                              </div>
                            </div>
                            <Button size="sm" variant="ghost">
                              {t.readMore}
                            </Button>
                          </div>
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
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <Pagination
                currentPage={currentPage}
                totalPages={5}
                totalItems={filteredPosts.length}
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
              {/* Ad Section */}
              <AdSection type="sidebar" size="medium" language={language} />

              {/* Popular Posts */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    {t.popularPosts}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {popularPosts.slice(0, 5).map((post, index) => (
                    <div key={post.id} className="flex gap-3">
                      <div className="w-16 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm line-clamp-2 hover:text-primary cursor-pointer">
                          {post.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <Eye className="h-3 w-3" />
                          <span>{post.views.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5" />
                    {t.tags}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(samplePosts.flatMap(post => post.tags))).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Another Ad */}
              <AdSection type="card" size="small" language={language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
