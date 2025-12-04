import { Card } from "./ui/card";
import { TrendingUp, Globe, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router-dom";

export function AboutIT() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Phát triển mạnh mẽ",
      description: "Tốc độ tăng trưởng vượt trội với công nghệ mới mỗi ngày",
      link: "/tang-truong-nganh-cntt",
    },
    {
      icon: Globe,
      title: "Ứng dụng rộng rãi",
      description: "Hiện diện trong mọi lĩnh vực từ y tế đến giáo dục",
      link: "/ung-dung-rong-rai",
    },
    {
      icon: Users,
      title: "Nhu cầu nhân lực cao",
      description: "Hàng nghìn vị trí tuyển dụng mỗi tháng",
      link: "/nhu-cau-nhan-luc",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
            Giới thiệu ngành Công nghệ Thông tin
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Công nghệ Thông tin (IT) là lĩnh vực nghiên cứu, phát triển và ứng
            dụng các công nghệ liên quan đến máy tính, phần mềm, mạng và hệ
            thống thông tin để xử lý, lưu trữ và truyền tải dữ liệu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0066FF]/20 to-[#9A5CFF]/20 rounded-3xl blur-2xl" />
            <ImageWithFallback
              src="/images/teamwork.jpg"
              alt="Team working on technology"
              className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="mb-6">Vai trò của CNTT trong xã hội hiện đại</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <strong className="text-gray-900">Thương mại điện tử:</strong>{" "}
                Shopee, Lazada, Tiki giúp mua sắm trực tuyến dễ dàng và tiện
                lợi.
              </p>
              <p>
                <strong className="text-gray-900">
                  Trí tuệ nhân tạo (AI):
                </strong>{" "}
                ChatGPT, Google Assistant hỗ trợ công việc và học tập hàng ngày.
              </p>
              <p>
                <strong className="text-gray-900">
                  Big Data & Cloud Computing:
                </strong>{" "}
                Lưu trữ và xử lý lượng dữ liệu khổng lồ, phục vụ nghiên cứu và
                kinh doanh.
              </p>
              <p>
                <strong className="text-gray-900">An ninh mạng:</strong> Bảo vệ
                thông tin cá nhân và doanh nghiệp khỏi các mối đe dọa trực
                tuyến.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-8 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
                {item.link && (
                  <Link
                    to={item.link}
                    className="mt-4 inline-block text-[#0066FF] hover:underline"
                  >
                    Xem thêm{" "}
                    <ArrowRight className="inline-block w-4 h-4 ml-1" />
                  </Link>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
