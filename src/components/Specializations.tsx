import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Cpu,
  Code,
  Database,
  Network,
  Shield,
  Brain,
  BarChart3,
  Smartphone,
  Gamepad2,
  Globe,
} from "lucide-react";

export function Specializations() {
  const specializations = [
    {
      icon: Cpu,
      title: "Khoa học Máy tính",
      description:
        "Nghiên cứu thuật toán, lý thuyết tính toán và cấu trúc dữ liệu",
      link: "/chuyen-nganh/khoa-hoc-may-tinh",
    },
    {
      icon: Code,
      title: "Kỹ thuật Phần mềm",
      description:
        "Thiết kế, phát triển và bảo trì hệ thống phần mềm chuyên nghiệp",
      link: "/chuyen-nganh/ky-thuat-phan-mem",
    },
    {
      icon: Database,
      title: "Hệ thống Thông tin",
      description: "Quản lý và phân tích dữ liệu phục vụ hoạt động kinh doanh",
      link: "/chuyen-nganh/he-thong-thong-tin",
    },
    {
      icon: Network,
      title: "Mạng Máy tính",
      description:
        "Thiết kế, triển khai và quản trị hệ thống mạng doanh nghiệp",
      link: "/chuyen-nganh/mang-may-tinh",
    },
    {
      icon: Shield,
      title: "An ninh Mạng",
      description: "Bảo vệ hệ thống và dữ liệu khỏi các mối đe dọa an ninh",
      link: "/chuyen-nganh/an-ninh-mang",
    },
    {
      icon: Brain,
      title: "Trí tuệ Nhân tạo",
      description:
        "Phát triển các hệ thống AI, machine learning và deep learning",
      link: "/chuyen-nganh/tri-tue-nhan-tao",
    },
    {
      icon: BarChart3,
      title: "Khoa học Dữ liệu",
      description: "Phân tích và khai thác giá trị từ big data",
      link: "/chuyen-nganh/khoa-hoc-du-lieu",
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Xây dựng website và ứng dụng web hiện đại",
      link: "/chuyen-nganh/web-development",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Phát triển ứng dụng di động cho iOS và Android",
      link: "/chuyen-nganh/mobile-development",
    },
    {
      icon: Gamepad2,
      title: "Game Development",
      description: "Thiết kế và lập trình game 2D/3D chuyên nghiệp",
      link: "/chuyen-nganh/game-development",
    },
  ];

  return (
    <section
      id="specializations"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
            Các chuyên ngành phổ biến
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ngành CNTT có nhiều chuyên ngành đa dạng, mỗi hướng mang đến cơ hội
            phát triển và ứng dụng riêng biệt trong thế giới công nghệ.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {specializations.map((spec, index) => {
            const Icon = spec.icon;
            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all hover:shadow-xl group cursor-pointer bg-white/80 backdrop-blur-sm h-full">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="mb-2 text-gray-900">{spec.title}</h4>
                  <p className="text-sm text-gray-600">{spec.description}</p>
                </Card>
              </motion.div>
            );

            return spec.link !== "#" ? (
              <Link key={index} to={spec.link}>
                {CardContent}
              </Link>
            ) : (
              <div key={index}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
