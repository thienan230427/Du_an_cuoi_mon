import React from "react";
import { Button } from "./ui/button";
import { Code2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCtaClick = () => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection('specializations');
      }, 100);
    } else {
      scrollToSection('specializations');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
              IT Future
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-gray-700 hover:text-[#0066FF] transition-colors"
            >
              Trang chủ
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-gray-700 hover:text-[#0066FF] transition-colors"
            >
              Giới thiệu
            </a>
            <a
              href="#specializations"
              onClick={(e) => handleNavClick(e, 'specializations')}
              className="text-gray-700 hover:text-[#0066FF] transition-colors"
            >
              Chuyên ngành
            </a>
            <a
              href="#roadmap"
              onClick={(e) => handleNavClick(e, 'roadmap')}
              className="text-gray-700 hover:text-[#0066FF] transition-colors"
            >
              Lộ trình học
            </a>
            <a
              href="#careers"
              onClick={(e) => handleNavClick(e, 'careers')}
              className="text-gray-700 hover:text-[#0066FF] transition-colors"
            >
              Nghề nghiệp
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-gray-700 hover:text-[#0066FF] transition-colors"
            >
              Liên hệ
            </a>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={handleCtaClick}
              className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] hover:opacity-90 rounded-xl"
            >
              Tìm hiểu ngay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="text-gray-700 hover:text-[#0066FF] transition-colors"
              >
                Trang chủ
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className="text-gray-700 hover:text-[#0066FF] transition-colors"
              >
                Giới thiệu
              </a>
              <a
                href="#specializations"
                onClick={(e) => handleNavClick(e, 'specializations')}
                className="text-gray-700 hover:text-[#0066FF] transition-colors"
              >
                Chuyên ngành
              </a>
              <a
                href="#roadmap"
                onClick={(e) => handleNavClick(e, 'roadmap')}
                className="text-gray-700 hover:text-[#0066FF] transition-colors"
              >
                Lộ trình học
              </a>
              <a
                href="#careers"
                onClick={(e) => handleNavClick(e, 'careers')}
                className="text-gray-700 hover:text-[#0066FF] transition-colors"
              >
                Nghề nghiệp
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-gray-700 hover:text-[#0066FF] transition-colors"
              >
                Liên hệ
              </a>
              <Button
                onClick={handleCtaClick}
                className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] hover:opacity-90 rounded-xl w-full"
              >
                Tìm hiểu ngay
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
