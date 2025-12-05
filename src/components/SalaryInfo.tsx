import { DollarSign, TrendingUp } from "lucide-react";
import React from "react";
import { Card } from "./ui/card";

export function SalaryInfo() {
  const salaryData = [
    {
      level: "Freshers (0 năm)",
      range: "7 - 11 triệu",
      description: "Sinh viên mới ra trường, vị trí junior"
    },
    {
      level: "Junior (1-3 năm)",
      range: "12 - 22.5 triệu",
      description: "Đã có kinh nghiệm cơ bản, làm việc độc lập"
    },
    {
      level: "Mid-level (3-5 năm)",
      range: "15 - 30 triệu",
      description: "Frontend, Backend, Data Analyst chuyên sâu"
    },
    {
      level: "Senior (5-8 năm)",
      range: "30 - 54 triệu",
      description: "Team Lead, Tech Lead, Senior Developer"
    },
    {
      level: "Expert (8+ năm)",
      range: "80 - 150+ triệu",
      description: "AI Engineer, Solution Architect, CTO"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
            Mức lương ngành CNTT tại Việt Nam (2025)
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Thu nhập hấp dẫn và tăng nhanh theo kinh nghiệm, cao hơn nhiều ngành nghề khác
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Salary Cards */}
          <div className="space-y-4">
            {salaryData.map((item, index) => (
              <Card
                key={index}
                className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all hover:shadow-lg bg-white group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <DollarSign className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-gray-900">{item.level}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent whitespace-nowrap">
                      {item.range}
                    </div>
                    <span className="text-xs text-gray-500">VND/tháng</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Highlights */}
          <div className="lg:sticky lg:top-24">
            <Card className="p-8 rounded-2xl border-2 border-[#0066FF]/20 bg-gradient-to-br from-[#0066FF]/5 to-[#9A5CFF]/5">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>

              <h3 className="mb-4 text-gray-900">Điểm nổi bật về lương</h3>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 mb-1">Tăng trưởng nhanh</div>
                    <p className="text-sm text-gray-600">
                      Mức lương có thể gấp đôi sau 2-3 năm nếu có năng lực
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 mb-1">Thưởng & phúc lợi</div>
                    <p className="text-sm text-gray-600">
                      Bonus, bảo hiểm, du lịch công ty, làm việc từ xa
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 mb-1">Cơ hội toàn cầu</div>
                    <p className="text-sm text-gray-600">
                      Làm việc cho công ty nước ngoài với mức lương USD
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#0066FF] mt-2 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900 mb-1">Freelance & Remote</div>
                    <p className="text-sm text-gray-600">
                      Thu nhập thêm từ các dự án bên ngoài không giới hạn
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Mức lương trung bình</span>
                  <div className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
                    25+ triệu
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
