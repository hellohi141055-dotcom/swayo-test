import { Link } from "react-router-dom";
import { Search, Facebook, Twitter, Youtube, Instagram } from "lucide-react";
import './Welcome.css';

export default function Welcome() {
  return (
    <div className="welcome-container">
      {/* Header */}
      <header className="header">
        <h1 className="header-title">
          Smart Waste<br />Classifier With YOLO
        </h1>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        {/* Left Content */}
        <div className="hero-content">
          <h2 className="hero-title">
            Welcome to Smart Waste<br />Classifier With YOLO
          </h2>
          <p className="hero-subtitle">
            The Best Solutions for Sustainable Waste Management!
          </p>
          <Link
            to="/categories"
            className="start-btn"
          >
            START
          </Link>
        </div>

        {/* Right Illustration */}
        <div className="hero-illustration">
          <div className="illustration-blur"></div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="wave-container">
        <svg viewBox="0 0 1440 320" className="wave-svg">
          <path
            fill="#f5f5f5"
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,138.7C960,160,1056,192,1152,186.7C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="about-container">
          <h3 className="about-title">ABOUT</h3>
          <p className="about-text">
            <strong>Smart Waste Classifier menggunakan YOLO (SWAYO)</strong> adalah sistem berbasis kecerdasan buatan yang mampu 
            mengidentifikasi dan mengklasifikasikan jenis sampah secara otomatis melalui gambar atau kamera. Teknologi 
            YOLO (You Only Look Once) memungkinkan deteksi objek secara cepat dan akurat dalam satu proses pemindaian, 
            sehingga pengguna hanya perlu memotret sampah untuk mengetahui kategorinya seperti kardus, plastik, kertas, 
            kaca, logam, dan sampah lain. serta mendapatkan rekomendasi penanganan yang tepat.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <h4 className="footer-brand">
                Smart Waste<br />Classifier With YOLO
              </h4>
            </div>

            {/* Services */}
            <div>
              <h5 className="footer-heading">Layanan Kami</h5>
              <ul className="footer-list">
                <li>Bantuan</li>
                <li>Notifikasi</li>
                <li>Kontak Kami</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h5 className="footer-heading">ikuti kami</h5>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <Facebook size={16} />
                </a>
                <a href="#" className="social-icon">
                  <Twitter size={16} />
                </a>
                <a href="#" className="social-icon">
                  <Youtube size={16} />
                </a>
                <a href="#" className="social-icon">
                  <Instagram size={16} />
                </a>
              </div>
            </div>

            {/* Search */}
            <div>
              <h5 className="footer-heading">Cari</h5>
              <div className="search-container">
                <input
                  type="text"
                  placeholder="Cari..."
                  className="search-input"
                />
                <Search className="search-icon" size={20} />
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="footer-bottom">
            <div className="footer-links">
              <a href="#" className="footer-link">Tentang Aplikasi</a>
              <a href="#" className="footer-link">Hubungi Kami</a>
              <a href="#" className="footer-link">Kebijakan Privasi</a>
            </div>
            <p className="footer-copyright">© 2023 paytrash. All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}