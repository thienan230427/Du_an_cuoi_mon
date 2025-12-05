import { motion } from "framer-motion";
import {
  BarChart3,
  Bug,
  Code2,
  Database,
  Headphones,
  Network,
  Server,
  Shield,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./ui/card";

export function JobPositions() {
  const positions = [
    {
      icon: Code2,
      title: "Lập trình viên",
      subtitle: "Web/Mobile/Backend/Frontend",
      description:
        "Phát triển ứng dụng và website cho doanh nghiệp, startup và các dự án công nghệ.",
      link: "/vi-tri-viec-lam/lap-trinh-vien",
    },
    {
      icon: Shield,
      title: "Chuyên viên An ninh mạng",
      subtitle: "Chuyên gia Bảo mật Thông tin",
      description:
        "Bảo vệ hệ thống, phát hiện và ngăn chặn các mối đe dọa an ninh thông tin.",
      link: "/vi-tri-viec-lam/chuyen-vien-an-ninh-mang",
    },
    {
      icon: Server,
      title: "Quản trị Hệ thống",
      subtitle: "Quản trị viên Hệ thống",
      description:
        "Quản lý máy chủ, hệ thống mạng và đảm bảo hoạt động ổn định 24/7.",
      link: "/vi-tri-viec-lam/quan-tri-he-thong",
    },
    {
      icon: BarChart3,
      title: "Chuyên viên Phân tích Dữ liệu",
      subtitle: "Kỹ sư Dữ liệu",
      description:
        "Phân tích và khai thác thông tin từ dữ liệu lớn để hỗ trợ quyết định kinh doanh.",
      link: "/vi-tri-viec-lam/data-analyst",
    },
    {
      icon: Network,
      title: "Kỹ sư Mạng",
      subtitle: "Chuyên gia Hệ thống Mạng",
      description:
        "Thiết kế, triển khai và bảo trì hạ tầng mạng cho tổ chức lớn.",
      link: "/vi-tri-viec-lam/network-engineer",
    },
    {
      icon: Headphones,
      title: "Hỗ trợ Kỹ thuật",
      subtitle: "Chuyên viên Hỗ trợ Công nghệ",
      description:
        "Giải quyết vấn đề kỹ thuật và hỗ trợ người dùng sử dụng sản phẩm công nghệ.",
      link: "/vi-tri-viec-lam/technical-support",
    },
    {
      icon: Database,
      title: "Quản trị Cơ sở dữ liệu",
      subtitle: "Chuyên gia Quản lý Database",
      description:
        "Quản lý, tối ưu và bảo mật các hệ thống cơ sở dữ liệu doanh nghiệp.",
      link: "/vi-tri-viec-lam/database-administrator",
    },
    {
      icon: Bug,
      title: "Kiểm thử Phần mềm",
      subtitle: "Chuyên viên Đảm bảo Chất lượng",
      description:
        "Đảm bảo chất lượng sản phẩm thông qua kiểm thử và phát hiện lỗi.",
      link: "/vi-tri-viec-lam/qa-tester",
    },
  ];

  return (
    <section
      id="careers"
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
            Vị trí việc làm sau khi ra trường
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Đa dạng cơ hội nghề nghiệp với mức lương hấp dẫn và môi trường làm
            việc chuyên nghiệp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {positions.map((position, index) => {
            const Icon = position.icon;
            return (
              <Link key={index} to={position.link}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                >
                  <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all hover:shadow-xl group cursor-pointer bg-white/80 backdrop-blur-sm h-full">
                    <motion.div
                      className="w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center mb-4"
                      whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h4 className="mb-1 text-gray-900">{position.title}</h4>
                    <div className="text-xs text-[#0066FF] mb-3">
                      {position.subtitle}
                    </div>
                    <p className="text-sm text-gray-600">
                      {position.description}
                    </p>
                  </Card>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
