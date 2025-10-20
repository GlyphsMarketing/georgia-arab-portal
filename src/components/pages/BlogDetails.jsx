import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const BlogDetails = ({ language = 'en' }) => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  const translations = {
    en: {
      backToBlogs: 'Back to Blogs',
      publishedOn: 'Published on',
      author: 'Author',
      share: 'Share',
      relatedArticles: 'Related Articles',
      readMore: 'Read More'
    },
    ar: {
      backToBlogs: 'العودة إلى المدونة',
      publishedOn: 'نشر في',
      author: 'الكاتب',
      share: 'مشاركة',
      relatedArticles: 'مقالات ذات صلة',
      readMore: 'اقرأ المزيد'
    }
  };

  const t = translations[language];

  useEffect(() => {
    // TODO: Fetch blog details from API
    // This is mock data, replace with actual API call
    setBlog({
      id: blogId,
      title: 'Understanding Arab Business Culture in Georgia',
      content: `
        <p>Georgia's growing Arab business community brings unique perspectives and practices to the local economy. Understanding these cultural nuances is key to successful business relationships.</p>
        
        <h2>Key Aspects of Arab Business Culture</h2>
        
        <p>Building personal relationships is fundamental in Arab business culture. Initial meetings often focus more on getting to know each other than discussing business matters. This investment in relationships creates a foundation of trust essential for long-term business success.</p>
        
        <h3>Communication Styles</h3>
        
        <p>Communication in Arab business culture tends to be more indirect and relationship-focused compared to Western styles. Understanding and adapting to these differences can greatly improve business interactions.</p>
        
        <h3>Decision Making Process</h3>
        
        <p>Decisions in Arab business culture often involve multiple stakeholders and require building consensus. Patience and understanding of this process is crucial for successful business relationships.</p>
        
        <h2>Practical Tips for Business Success</h2>
        
        <ul>
          <li>Take time to build personal relationships</li>
          <li>Show respect for hierarchy and seniority</li>
          <li>Be patient during negotiations</li>
          <li>Understand the importance of face-to-face meetings</li>
        </ul>
      `,
      image: '/blog/arab-business-culture.jpg',
      author: 'Mohammed Ahmed',
      date: '2025-10-15',
      category: 'Business Culture',
      tags: ['business', 'culture', 'arab community'],
      relatedArticles: [
        {
          id: 2,
          title: 'Top Arab Restaurants in Atlanta',
          excerpt: 'Discover the best Arab cuisine Atlanta has to offer...',
          image: '/blog/arab-restaurants.jpg',
          date: '2025-10-10'
        },
        {
          id: 3,
          title: 'Arab Community Events This Month',
          excerpt: 'Stay updated with the latest community gatherings...',
          image: '/blog/community-events.jpg',
          date: '2025-10-08'
        }
      ]
    });
  }, [blogId]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8 px-4"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Header with back button */}
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            className="mr-4"
            onClick={() => navigate('/blogs')}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t.backToBlogs}
          </Button>
        </div>

        {/* Main blog content */}
        <article className="bg-background rounded-lg shadow-lg overflow-hidden">
          {/* Blog header image */}
          <div className="w-full h-[400px] relative">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Blog content */}
          <div className="p-8">
            {/* Meta information */}
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{blog.author}</span>
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                {t.share}
              </Button>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>

            {/* Main content */}
            <div 
              className="prose dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </article>

        {/* Related articles */}
        {blog.relatedArticles && blog.relatedArticles.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">{t.relatedArticles}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blog.relatedArticles.map((article) => (
                <Card 
                  key={article.id}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => navigate(`/blogs/${article.id}`)}
                >
                  <div className="h-48 relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(article.date).toLocaleDateString()}
                    </p>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </motion.div>
  );
};

export default BlogDetails;