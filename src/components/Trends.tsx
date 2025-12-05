import React from "react";
import { Card } from "./ui/card";
import { Brain, Cloud, Shield, TrendingUp, Globe2, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Trends() {
  const trends = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Trí tuệ nhân tạo đang thay đổi mọi ngành nghề và tạo ra hàng ngàn cơ hội việc làm mới",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      description:
        "AWS, Azure, Google Cloud đang là xu hướng với nhu cầu chuyên gia Cloud tăng mạnh",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "An ninh mạng ngày càng quan trọng với mức lương hấp dẫn cho các chuyên gia",
    },
  ];

  const opportunities = [
    {
      icon: TrendingUp,
      title: "Nhu cầu nhân sự tăng mạnh",
      stat: "+35%",
      description: "Tăng trưởng việc làm IT hàng năm",
    },
    {
      icon: Globe2,
      title: "Làm việc từ xa",
      stat: "70%",
      description: "Công ty IT hỗ trợ remote work",
    },
    {
      icon: Zap,
      title: "Thăng tiến nhanh",
      stat: "2-3 năm",
      description: "Thời gian lên Senior",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9A5CFF]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
            Xu hướng và cơ hội nghề nghiệp
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ngành CNTT đang bùng nổ với nhiều cơ hội phát triển và xu hướng công
            nghệ mới
          </p>
        </div>

        {/* Main Trends */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {trends.map((trend, index) => {
            const Icon = trend.icon;
            return (
              <Card
                key={index}
                className="p-8 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all hover:shadow-xl group bg-white/80 backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mb-3 text-gray-900">{trend.title}</h3>
                <p className="text-gray-600">{trend.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Opportunities Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#0066FF]/20 to-[#9A5CFF]/20 rounded-3xl blur-2xl" />
            <ImageWithFallback
              src="/images/cybersecurity.jpg"
              alt="Cyber Security"
              className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Stats */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-gray-900 mb-8">Tại sao chọn ngành CNTT?</h3>

            {opportunities.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all group bg-white"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-gray-900">{item.title}</h4>
                        <div className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
                          {item.stat}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}

            <div className="pt-4">
              <div className="p-6 bg-gradient-to-r from-[#0066FF]/10 to-[#9A5CFF]/10 rounded-2xl border border-[#0066FF]/20">
                <p className="text-gray-700">
                  <strong className="text-gray-900">Toàn cầu hóa:</strong> Làm
                  việc cho công ty quốc tế, cơ hội du lịch và phát triển sự
                  nghiệp không giới hạn địa lý.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
