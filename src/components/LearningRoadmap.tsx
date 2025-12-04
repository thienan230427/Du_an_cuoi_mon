import { Card } from "./ui/card";
import { CheckCircle2 } from "lucide-react";

export function LearningRoadmap() {
  const roadmap = [
    {
      phase: "Giai đoạn 1",
      duration: "1-3 tháng",
      title: "Nền tảng cơ bản",
      color: "from-[#0066FF] to-[#4D8FFF]",
      skills: [
        "Tư duy logic và giải quyết vấn đề",
        "Học ngôn ngữ lập trình đầu tiên (Python khuyến nghị)",
        "Git và quản lý phiên bản",
        "Làm quen với Linux/Windows Server"
      ]
    },
    {
      phase: "Giai đoạn 2",
      duration: "3-6 tháng",
      title: "Ngôn ngữ lập trình",
      color: "from-[#4D8FFF] to-[#7BA3FF]",
      skills: [
        "Học thêm Python/JavaScript/C++",
        "Làm các project nhỏ",
        "Luyện thuật toán trên HackerRank, LeetCode",
        "Tham gia cộng đồng lập trình viên"
      ]
    },
    {
      phase: "Giai đoạn 3",
      duration: "6-12 tháng",
      title: "Chuyên sâu kỹ thuật",
      color: "from-[#7BA3FF] to-[#9A5CFF]",
      skills: [
        "Cấu trúc dữ liệu và thuật toán (DSA)",
        "Hệ điều hành, mạng máy tính, cơ sở dữ liệu",
        "Framework và công cụ chuyên môn",
        "Làm việc nhóm với Git và Agile"
      ]
    },
    {
      phase: "Giai đoạn 4",
      duration: "Liên tục",
      title: "Thực tập & Kỹ năng mềm",
      color: "from-[#9A5CFF] to-[#B47FFF]",
      skills: [
        "Kỹ năng giao tiếp và làm việc nhóm",
        "Tư duy sáng tạo và giải quyết vấn đề",
        "Quản lý thời gian hiệu quả",
        "Thực tập tại công ty để tích lũy kinh nghiệm"
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9A5CFF]/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
            Lộ trình học CNTT
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Hành trình trở thành chuyên gia công nghệ với lộ trình học tập bài bản từ cơ bản đến nâng cao
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - Desktop */}
          <div className="hidden lg:block absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-[#0066FF] via-[#7BA3FF] to-[#9A5CFF] -translate-x-1/2" />

          <div className="space-y-12">
            {roadmap.map((stage, index) => (
              <div 
                key={index}
                className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                }`}
              >
                {/* Card */}
                <div className={index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}>
                  <Card className="p-8 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all hover:shadow-xl bg-white/80 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                      {/* Timeline dot - Mobile */}
                      <div className="lg:hidden w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white">{index + 1}</span>
                      </div>
                      
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#0066FF]/10 to-[#9A5CFF]/10 rounded-full mb-3">
                          <span className="text-sm text-[#0066FF]">{stage.duration}</span>
                        </div>
                        
                        <div className={`inline-block bg-gradient-to-r ${stage.color} bg-clip-text text-transparent mb-2`}>
                          {stage.phase}
                        </div>
                        
                        <h3 className="mb-4 text-gray-900">{stage.title}</h3>
                        
                        <ul className="space-y-3">
                          {stage.skills.map((skill, skillIndex) => (
                            <li key={skillIndex} className="flex items-start gap-2 text-gray-600">
                              <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Timeline dot - Desktop */}
                <div className={`hidden lg:flex ${index % 2 === 0 ? 'lg:col-start-2 justify-start' : 'lg:col-start-1 justify-end'}`}>
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white">{index + 1}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-full blur-xl opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
