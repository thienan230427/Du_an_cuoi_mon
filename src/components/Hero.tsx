import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  const navigate = useNavigate();

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

  const handleExploreClick = () => {
    scrollToSection("specializations");
  };

  const handleRoadmapClick = () => {
    scrollToSection("roadmap");
  };

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#0066FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#9A5CFF]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#0066FF]/10 to-[#9A5CFF]/10 rounded-full mb-6 border border-[#0066FF]/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Sparkles className="w-4 h-4 text-[#0066FF]" />
              <span className="text-sm text-[#0066FF]">
                Lĩnh vực của tương lai
              </span>
            </motion.div>

            <motion.h1
              className="mb-6 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Ngành Công Nghệ Thông Tin
            </motion.h1>

            <motion.p
              className="mb-8 text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Khám phá thế giới công nghệ đầy tiềm năng với cơ hội nghề nghiệp
              rộng mở, mức lương hấp dẫn và khả năng phát triển không giới hạn.
              CNTT không chỉ là một ngành nghề, mà là chìa khóa mở ra tương lai.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                onClick={handleExploreClick}
                className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] hover:opacity-90 rounded-xl group"
              >
                Tìm hiểu ngay
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleRoadmapClick}
                className="rounded-xl border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white"
              >
                Xem lộ trình học
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { number: "150+", label: "Vị trí tuyển dụng" },
                { number: "80M+", label: "Mức lương cao nhất" },
                { number: "#1", label: "Ngành hot nhất" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative lg:h-[600px] h-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-[#0066FF]/20 to-[#9A5CFF]/20 rounded-3xl"
              animate={{
                scale: [1, 1.02, 1],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <ImageWithFallback
              src="/images/hero-tech.jpg"
              alt="Technology Network"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            {/* Floating card */}
            <motion.div
              className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-lg rounded-2xl p-4 shadow-xl border border-white/20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              animate-floating={{
                y: [0, -10, 0],
              }}
              transition-floating={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>
                <div>
                  <div className="text-gray-900">AI & Machine Learning</div>
                  <p className="text-sm text-gray-600">Xu hướng 2025</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
