import {
  AlertCircle,
  ArrowLeft,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  DollarSign,
  GraduationCap,
  Star,
  Target,
  TrendingUp
} from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { jobPositionsData } from "../data/job-positions-data";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function JobPositionDetail() {
  const { id } = useParams<{ id: string }>();

  if (!id || !jobPositionsData[id]) {
    return (
      <div className="min-h-screen pt-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="mb-4">Không tìm thấy vị trí công việc</h1>
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

  const job = jobPositionsData[id];

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
                <span className="text-sm text-[#0066FF]">{job.subtitle}</span>
              </div>

              <h1 className="mb-6 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
                {job.title}
              </h1>

              <p className="text-gray-600 mb-8 text-lg">
                {job.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] hover:opacity-90 rounded-xl"
                >
                  <Briefcase className="w-4 h-4 mr-2" />
                  Tìm việc làm
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-2 border-[#0066FF] text-[#0066FF] hover:bg-[#0066FF] hover:text-white"
                >
                  Lộ trình phát triển
                </Button>
              </div>
            </div>

            {/* Image & Salary Cards */}
            <div className="space-y-6">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0066FF]/20 to-[#9A5CFF]/20 rounded-3xl blur-2xl" />
                <ImageWithFallback
                  src={job.imageUrl}
                  alt={job.title}
                  className="relative w-full h-[400px] object-cover rounded-3xl shadow-2xl"
                />
              </div>

              {/* Salary Cards Below Image */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-6 rounded-2xl border-2 border-gray-100 bg-white/95 backdrop-blur-sm shadow-lg">
                  <DollarSign className="w-8 h-8 text-[#0066FF] mb-3" />
                  <div className="text-gray-900 mb-1">Junior</div>
                  <div className="text-sm text-gray-600">{job.salary.junior}</div>
                </Card>
                <Card className="p-6 rounded-2xl border-2 border-[#0066FF] bg-gradient-to-br from-[#0066FF]/10 to-[#9A5CFF]/10 backdrop-blur-sm shadow-lg">
                  <TrendingUp className="w-8 h-8 text-[#0066FF] mb-3" />
                  <div className="text-gray-900 mb-1">Mid-level</div>
                  <div className="text-sm text-gray-600">{job.salary.mid}</div>
                </Card>
                <Card className="p-6 rounded-2xl border-2 border-gray-100 bg-white/95 backdrop-blur-sm shadow-lg">
                  <Star className="w-8 h-8 text-[#0066FF] mb-3" />
                  <div className="text-gray-900 mb-1">Senior</div>
                  <div className="text-sm text-gray-600">{job.salary.senior}</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <h2 className="mb-6 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
                Tổng quan công việc
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {job.overview}
              </p>
            </div>
            <div className="lg:col-span-2">
              <Card className="p-6 rounded-2xl border-2 border-gray-100 bg-gradient-to-br from-[#0066FF]/5 to-[#9A5CFF]/5">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-[#0066FF]" />
                  <h4 className="text-gray-900">Thống kê nhanh</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Công ty tuyển dụng</span>
                    <span className="text-[#0066FF]">{job.companies.length}+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Công cụ sử dụng</span>
                    <span className="text-[#0066FF]">{job.tools.length}+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Kỹ năng yêu cầu</span>
                    <span className="text-[#0066FF]">{job.skills.length}+</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Responsibilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Skills */}
            <Card className="p-8 rounded-2xl border-2 border-gray-100 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900">Kỹ năng cần có</h3>
              </div>
              <ul className="space-y-3">
                {job.skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{skill}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Responsibilities */}
            <Card className="p-8 rounded-2xl border-2 border-gray-100 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900">Trách nhiệm công việc</h3>
              </div>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#0066FF] flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{resp}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-12 text-center bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
            Yêu cầu công việc
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education */}
            <Card className="p-6 rounded-2xl border-2 border-gray-100">
              <h4 className="text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#0066FF]" />
                Học vấn & Chứng chỉ
              </h4>
              <ul className="space-y-2">
                {job.requirements.education.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Experience */}
            <Card className="p-6 rounded-2xl border-2 border-gray-100">
              <h4 className="text-gray-900 mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-[#0066FF]" />
                Kinh nghiệm
              </h4>
              <ul className="space-y-2">
                {job.requirements.experience.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Technical */}
            <Card className="p-6 rounded-2xl border-2 border-gray-100">
              <h4 className="text-gray-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#0066FF]" />
                Kỹ năng Kỹ thuật
              </h4>
              <ul className="space-y-2">
                {job.requirements.technical.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>

            {/* Soft Skills */}
            <Card className="p-6 rounded-2xl border-2 border-gray-100">
              <h4 className="text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#0066FF]" />
                Kỹ năng Mềm
              </h4>
              <ul className="space-y-2">
                {job.requirements.soft.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Path */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
              Lộ trình phát triển sự nghiệp
            </h2>
            <p className="text-gray-600">
              Hành trình thăng tiến từ {job.title}
            </p>
          </div>

          <div className="space-y-6">
            {job.careerPath.map((path, index) => (
              <Card
                key={index}
                className="p-8 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all bg-white"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-gray-900">{path.level}</h3>
                      <span className="px-3 py-1 bg-gradient-to-r from-[#0066FF]/10 to-[#9A5CFF]/10 rounded-full text-sm text-[#0066FF]">
                        {path.duration}
                      </span>
                    </div>
                    <p className="text-gray-600">{path.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Companies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tools */}
            <div>
              <h3 className="mb-6 text-gray-900">Công cụ & Công nghệ sử dụng</h3>
              <div className="flex flex-wrap gap-3">
                {job.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-br from-[#F5F7FA] to-white rounded-xl border-2 border-gray-100 hover:border-[#0066FF] transition-all text-gray-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Companies */}
            <div>
              <h3 className="mb-6 text-gray-900">Các công ty tuyển dụng</h3>
              <div className="flex flex-wrap gap-3">
                {job.companies.map((company, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-br from-[#0066FF]/5 to-[#9A5CFF]/5 rounded-xl border-2 border-[#0066FF]/20 text-gray-700"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Challenges */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <Card className="p-8 rounded-2xl border-2 border-green-100 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900">Ưu điểm của công việc</h3>
              </div>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Challenges */}
            <Card className="p-8 rounded-2xl border-2 border-orange-100 bg-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900">Thách thức cần lưu ý</h3>
              </div>
              <ul className="space-y-3">
                {job.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{challenge}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6 text-white">
            Sẵn sàng bắt đầu sự nghiệp {job.title}?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Khám phá các cơ hội việc làm hấp dẫn và bắt đu hành trình phát triển của bạn
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-[#0066FF] hover:bg-gray-100 rounded-xl"
            >
              <Briefcase className="w-4 h-4 mr-2" />
              Tìm việc ngay
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
