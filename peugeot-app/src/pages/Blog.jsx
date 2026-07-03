import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Modular components
import BlogHeader from '../components/Blog/BlogHeader';
import BlogSidebar from '../components/Blog/BlogSidebar';
import BlogList from '../components/Blog/BlogList';

// Local images mapping
import img1 from '../assets/images/blog-4-img-1.jpg';
import img2 from '../assets/images/blog-4-img-2.jpg';
import img3 from '../assets/images/blog-4-img-3.jpg';
import img4 from '../assets/images/h4-slider-img-1.jpg';
import img5 from '../assets/images/h4-slider-img-2.jpg';

// Blog Posts Dataset
const initialPosts = [
  { 
    id: 1, 
    format: "standard",
    title: "Pure Adrenalin Rush", 
    date: "September 2, 2019", 
    category: "Mobile", 
    img: img1, 
    excerpt: "Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue.", 
    tags: ["apps", "Blogging", "trackday"] 
  },
  { 
    id: 2, 
    format: "gallery",
    title: "Announces Returning 2020", 
    date: "September 2, 2019", 
    category: "Mobile", 
    galleryImages: [img2, img3, img4], 
    excerpt: "Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue dapibus in, viverra quis srtrum aenean.", 
    tags: ["Creativ", "Future", "trackday"] 
  },
  { 
    id: 3, 
    format: "quote",
    title: "Tested: Performance Accessories", 
    quote: "Lorem ipsum dolor sit amet, consectet dolor sit amet our adipiscing elit.",
    quoteAuthor: "Peter Green",
    tags: ["Abstract", "Art", "Blogging"] 
  },
  { 
    id: 4, 
    format: "audio",
    title: "MotoGP Silverstone Results 2019", 
    date: "September 2, 2019", 
    category: "Mobile", 
    img: img5, 
    excerpt: "Etiam ultricies nisi vel augue dapibus in, viverra quis srtrum aenean imperdiet. Phasellus viverra nulla ut metus varius.", 
    tags: ["apps", "Moto sport", "trackday"] 
  },
  { 
    id: 5, 
    format: "link",
    title: "Patent Filing Reveals New Harley-Davidson Pushrod Engine Design", 
    tags: ["Future", "trackday"] 
  }
];

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Derived filtered posts
  const filteredPosts = initialPosts.filter(post => {
    // 1. Search Query filter
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (post.excerpt && post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (post.quote && post.quote.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // 2. Category filter
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;

    // 3. Tag filter
    const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="blog-page">
      <Navbar />
      <BlogHeader />

      <section className="blog-layout-section">
        <div className="section-container">
          <div className="blog-grid-container">
            
            {/* Blog list occupies the left side (~75%) */}
            <div className="blog-grid-main">
              <BlogList posts={filteredPosts} />
            </div>

            {/* Sidebar occupies the right side (~25%) */}
            <div className="blog-grid-sidebar">
              <BlogSidebar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
