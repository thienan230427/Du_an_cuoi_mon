import { Code2, Facebook, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/");
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
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
                IT Future
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Khám phá và phát triển sự nghiệp trong lĩnh vực Công nghệ Thông
              tin - ngành của tương lai.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#0066FF] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#0066FF] rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#0066FF] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-[#0066FF] rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors cursor-pointer"
                >
                  Trang chủ
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors cursor-pointer"
                >
                  Giới thiệu
                </a>
              </li>
              <li>
                <a
                  href="#specializations"
                  onClick={(e) => handleNavClick(e, "specializations")}
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors cursor-pointer"
                >
                  Chuyên ngành
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  onClick={(e) => handleNavClick(e, "roadmap")}
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors cursor-pointer"
                >
                  Lộ trình học
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  onClick={(e) => handleNavClick(e, "careers")}
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors cursor-pointer"
                >
                  Nghề nghiệp
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors cursor-pointer"
                >
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Chuyên ngành CNTT</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/chuyen-nganh/khoa-hoc-may-tinh"
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors"
                >
                  Khoa học Máy tính
                </Link>
              </li>
              <li>
                <Link
                  to="/chuyen-nganh/ky-thuat-phan-mem"
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors"
                >
                  Kỹ thuật Phần mềm
                </Link>
              </li>
              <li>
                <Link
                  to="/chuyen-nganh/an-ninh-mang"
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors"
                >
                  An ninh Mạng
                </Link>
              </li>
              <li>
                <Link
                  to="/chuyen-nganh/tri-tue-nhan-tao"
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors"
                >
                  Trí tuệ Nhân tạo
                </Link>
              </li>
              <li>
                <Link
                  to="/chuyen-nganh/khoa-hoc-du-lieu"
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors"
                >
                  Khoa học Dữ liệu
                </Link>
              </li>
              <li>
                <Link
                  to="/chuyen-nganh/web-development"
                  className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors"
                >
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-[#0066FF]" />
                contact@itfuture.edu.vn
              </li>
              <li className="text-gray-400 text-sm">
                <div className="text-white mb-1">Giờ làm việc</div>
                Thứ 2 - Thứ 6: 8:00 - 17:00
                <br />
                Thứ 7: 8:00 - 12:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 IT Future. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors"
              >
                Chính sách bảo mật
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#0066FF] text-sm transition-colors"
              >
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
