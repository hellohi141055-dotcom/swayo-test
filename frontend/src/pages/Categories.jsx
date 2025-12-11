import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";
import './Categories.css';

export default function Categories() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const categories = [
    {
      id: 1,
      title: "Kaca",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam ab magni voluptates voluptatum nesciunt, vel a qui earum"
    },
    {
      id: 2,
      title: "Logam",
      image: "https://images.unsplash.com/photo-1564951434112-64d74cc2a2d7?w=600&h=400&fit=crop",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam ab magni voluptates voluptatum nesciunt, vel a qui earum"
    },
    {
      id: 3,
      title: "Sampah Lain",
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=400&fit=crop",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint magnam ab magni voluptates voluptatum nesciunt, vel a qui earum"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="category-page">
      {/* Header */}
      <header className="category-header">
        <a href="/" className="category-logo">
          Smart Waste<br />Classifier With YOLO
        </a>
        <nav className="category-nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/detect" className="nav-link">Detection</a>
          <a href="/categories" className="nav-link active">Category</a>
        </nav>
        <button className="profile-btn">nama plofile</button>
      </header>

      {/* Main Content */}
      <main className="category-main">
        <h1 className="category-title">Kategori</h1>

        {/* Hero Banner */}
        <div className="hero-banner">
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1200&h=400&fit=crop" 
              alt="Cleaning staff"
            />
          </div>
          <div className="hero-text">
            <h2>Mulai sayangi<br />Lingkungan Dari<br />Sekarang!</h2>
          </div>
        </div>

        {/* Category Cards */}
        <div className="category-cards-container">
          <div className="category-cards">
            {categories.map((category, index) => (
              <div 
                key={category.id} 
                className={`category-card ${index === currentSlide ? 'active' : ''}`}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                  transition: 'transform 0.5s ease'
                }}
              >
                <div className="card-image">
                  <img src={category.image} alt={category.title} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{category.title}</h3>
                  <p className="card-description">{category.description}</p>
                  <button className="see-more-btn">See More</button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="category-navigation">
            <button onClick={prevSlide} className="nav-btn" aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <div className="nav-dots">
              {categories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="nav-btn" aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Floating Add Button */}
        <button className="floating-add-btn" aria-label="Add new">
          <Plus size={32} />
        </button>
      </main>
    </div>
  );
}