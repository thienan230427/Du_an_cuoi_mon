import { useParams, Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { 
  ArrowLeft, 
  BookOpen, 
  Briefcase, 
  TrendingUp, 
  Code2,
  CheckCircle2,
  Building2,
  GraduationCap,
  DollarSign
} from "lucide-react";
import { specializationsData } from "../data/specializations-data";

export function SpecializationDetail() {
  const { id } = useParams<{ id: string }>();
  
  if (!id || !specializationsData[id]) {
    return (
      <div className="min-h-screen pt-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4">Không tìm thấy chuyên ngành</h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF]">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại trang chủ
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const spec = specializationsData[id];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] via-white to-[#F5F7FA] relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#0066FF]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#9A5CFF]/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/">
            <Button variant="ghost" className="mb-8 hover:bg-[#0066FF]/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại
            </Button>
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0066FF]/10 to-[#9A5CFF]/10 rounded-full mb-4 border border-[#0066FF]/20">
                <span className="text-sm text-[#0066FF]">{spec.subtitle}</span>
              </div>
              
              <h1 className="mb-6 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
                {spec.title}
              </h1>
              
              <p className="text-gray-600 mb-8 text-lg">
                {spec.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] hover:opacity-90 rounded-xl"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Bắt đầu học ngay
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white"
                >
                  Tìm việc làm
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 rounded-2xl border-2 border-gray-100 bg-white/80 backdrop-blur-sm">
                <DollarSign className="w-8 h-8 text-[#0066FF] mb-3" />
                <div className="text-gray-900 mb-1">Junior</div>
                <div className="text-sm text-gray-600">{spec.salary.junior}/tháng</div>
              </Card>
              <Card className="p-6 rounded-2xl border-2 border-gray-100 bg-white/80 backdrop-blur-sm">
                <TrendingUp className="w-8 h-8 text-[#0066FF] mb-3" />
                <div className="text-gray-900 mb-1">Mid-level</div>
                <div className="text-sm text-gray-600">{spec.salary.mid}/tháng</div>
              </Card>
              <Card className="p-6 rounded-2xl border-2 border-gray-100 bg-white/80 backdrop-blur-sm">
                <Briefcase className="w-8 h-8 text-[#0066FF] mb-3" />
                <div className="text-gray-900 mb-1">Senior</div>
                <div className="text-sm text-gray-600">{spec.salary.senior}/tháng</div>
              </Card>
              <Card className="p-6 rounded-2xl border-2 border-gray-100 bg-white/80 backdrop-blur-sm">
                <Building2 className="w-8 h-8 text-[#0066FF] mb-3" />
                <div className="text-gray-900 mb-1">Công ty</div>
                <div className="text-sm text-gray-600">{spec.companies.length}+ hãng</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="mb-6 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
                Tổng quan
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {spec.overview}
              </p>
            </div>

            <Card className="p-8 rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-[#0066FF]/5 to-[#9A5CFF]/5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900">Công cụ & Công nghệ</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {spec.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white rounded-lg text-sm text-gray-700 border border-gray-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills & Responsibilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Skills */}
            <Card className="p-8 rounded-2xl border-2 border-gray-100 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900">Kỹ năng cần có</h3>
              </div>
              <ul className="space-y-3">
                {spec.skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Responsibilities */}
            <Card className="p-8 rounded-2xl border-2 border-gray-100 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900">Công việc chính</h3>
              </div>
              <ul className="space-y-3">
                {spec.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Roadmap */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
              Lộ trình học tập
            </h2>
            <p className="text-gray-600">
              Hành trình trở thành chuyên gia {spec.title}
            </p>
          </div>

          <div className="space-y-6">
            {spec.roadmap.map((phase, index) => (
              <Card 
                key={index}
                className="p-8 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all bg-white"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-gray-900">{phase.phase}</h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-[#0066FF]/10 to-[#9A5CFF]/10 rounded-full text-sm text-[#0066FF]">
                        {phase.duration}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                          <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
              Khóa học đề xuất
            </h2>
            <p className="text-gray-600">
              Các khóa học chất lượng cao để bắt đầu sự nghiệp
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {spec.courses.map((course, index) => (
              <Card 
                key={index}
                className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all bg-white group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-900 mb-2 line-clamp-2">{course.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{course.provider}</p>
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#0066FF]/10 to-[#9A5CFF]/10 rounded-full text-xs text-[#0066FF]">
                  {course.level}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
              Các công ty tuyển dụng
            </h2>
            <p className="text-gray-600">
              Những tập đoàn hàng đầu đang tìm kiếm chuyên gia {spec.title}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {spec.companies.map((company, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-gradient-to-br from-[#F5F7FA] to-white rounded-xl border-2 border-gray-100 hover:border-[#0066FF] transition-all cursor-pointer"
              >
                <span className="text-gray-700">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-white">
            Sẵn sàng bắt đầu sự nghiệp {spec.title}?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Tham gia cộng đồng hàng nghìn học viên đang học tập và phát triển mỗi ngày
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-[#0066FF] hover:bg-gray-100 rounded-xl"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Đăng ký học ngay
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0066FF] rounded-xl"
            >
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
