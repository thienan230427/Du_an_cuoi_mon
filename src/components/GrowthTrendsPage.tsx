import { Award, BarChart3, Briefcase, Building2, DollarSign, Globe, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Data về tăng trưởng GDP ngành CNTT Việt Nam
const gdpGrowthData = [
  { year: "2018", value: 12.5, worldAverage: 8.2 },
  { year: "2019", value: 14.8, worldAverage: 8.5 },
  { year: "2020", value: 16.2, worldAverage: 9.1 },
  { year: "2021", value: 18.5, worldAverage: 10.2 },
  { year: "2022", value: 21.3, worldAverage: 11.5 },
  { year: "2023", value: 24.8, worldAverage: 12.8 },
  { year: "2024", value: 28.5, worldAverage: 14.2 },
  { year: "2025*", value: 32.0, worldAverage: 15.5 }
];

// Data về số lượng việc làm IT
const jobGrowthData = [
  { year: "2018", jobs: 280, demand: 320 },
  { year: "2019", jobs: 340, demand: 410 },
  { year: "2020", jobs: 410, demand: 520 },
  { year: "2021", jobs: 495, demand: 650 },
  { year: "2022", jobs: 590, demand: 800 },
  { year: "2023", jobs: 710, demand: 980 },
  { year: "2024", jobs: 850, demand: 1180 },
  { year: "2025*", jobs: 1020, demand: 1400 }
];

// Data về mức lương trung bình
const salaryGrowthData = [
  { year: "2018", junior: 8, mid: 15, senior: 28 },
  { year: "2019", junior: 9, mid: 17, senior: 32 },
  { year: "2020", junior: 10, mid: 19, senior: 36 },
  { year: "2021", junior: 11, mid: 22, senior: 42 },
  { year: "2022", junior: 13, mid: 25, senior: 48 },
  { year: "2023", junior: 14, mid: 28, senior: 55 },
  { year: "2024", junior: 16, mid: 32, senior: 62 },
  { year: "2025*", junior: 18, mid: 36, senior: 70 }
];

// Data về đầu tư và startup
const investmentData = [
  { year: "2018", startups: 120, investment: 450, exits: 8 },
  { year: "2019", startups: 165, investment: 680, exits: 12 },
  { year: "2020", startups: 210, investment: 920, exits: 15 },
  { year: "2021", startups: 280, investment: 1350, exits: 22 },
  { year: "2022", startups: 350, investment: 1850, exits: 28 },
  { year: "2023", startups: 430, investment: 2400, exits: 35 },
  { year: "2024", startups: 520, investment: 3100, exits: 45 },
];

const stats = [
  {
    icon: TrendingUp,
    value: "28.5%",
    label: "Tăng trưởng GDP ngành CNTT 2024",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    value: "850K+",
    label: "Nhân lực IT tại Việt Nam",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: DollarSign,
    value: "$3.1B",
    label: "Vốn đầu tư vào Startup 2024",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Briefcase,
    value: "1.4M",
    label: "Nhu cầu tuyển dụng IT 2025",
    color: "from-orange-500 to-red-500"
  }
];

const highlights = [
  {
    icon: Globe,
    title: "Top 3 Đông Nam Á",
    description: "Việt Nam đứng thứ 3 về tăng trưởng ngành CNTT trong khu vực SEA, sau Singapore và Indonesia"
  },
  {
    icon: Building2,
    title: "520+ Tech Startups",
    description: "Hơn 520 startup công nghệ được thành lập trong năm 2024, tăng 21% so với 2023"
  },
  {
    icon: Award,
    title: "12 Unicorn Startup",
    description: "Việt Nam có 12 công ty công nghệ đạt định giá trên $1 tỷ (VNG, Momo, Sky Mavis...)"
  },
  {
    icon: BarChart3,
    title: "35% CAGR 2020-2024",
    description: "Tốc độ tăng trưởng kép hàng năm của ngành đạt 35%, cao gấp đôi mức trung bình thế giới"
  }
];

export function GrowthTrendsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
              <span className="text-white text-sm">Phát triển mạnh mẽ</span>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Tốc Độ Tăng Trưởng Vượt Trội<br />Của Ngành Công Nghệ Thông Tin
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Khám phá những con số ấn tượng về sự phát triển của ngành CNTT Việt Nam qua các năm,
              từ GDP, việc làm, lương bổng đến đầu tư startup và xu hướng tương lai.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:scale-105 transition-transform">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GDP Growth Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">Tăng Trưởng GDP Ngành CNTT</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                So sánh tốc độ tăng trưởng GDP ngành CNTT Việt Nam với mức trung bình thế giới
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={gdpGrowthData}>
                  <defs>
                    <linearGradient id="colorVN" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorWorld" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    stroke="#64748b"
                    style={{ fontSize: '14px' }}
                  />
                  <YAxis
                    stroke="#64748b"
                    style={{ fontSize: '14px' }}
                    label={{ value: '% Tăng trưởng', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '12px'
                    }}
                    formatter={(value: number) => [`${value}%`, '']}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorVN)"
                    name="Việt Nam"
                  />
                  <Area
                    type="monotone"
                    dataKey="worldAverage"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorWorld)"
                    name="Trung bình Thế giới"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-sm text-slate-500 mt-4 text-center">
                * Dự báo cho năm 2025 | Nguồn: Bộ TT&TT, IDC Vietnam
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Growth Chart */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">Tăng Trưởng Việc Làm IT</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Số lượng nhân sự IT và nhu cầu tuyển dụng tăng mạnh qua các năm (đơn vị: nghìn người)
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={jobGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    stroke="#64748b"
                    style={{ fontSize: '14px' }}
                  />
                  <YAxis
                    stroke="#64748b"
                    style={{ fontSize: '14px' }}
                    label={{ value: 'Nghìn người', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '12px'
                    }}
                    formatter={(value: number) => [`${value}K người`, '']}
                  />
                  <Legend />
                  <Bar
                    dataKey="jobs"
                    fill="#10b981"
                    name="Nhân sự hiện tại"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    dataKey="demand"
                    fill="#f59e0b"
                    name="Nhu cầu tuyển dụng"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm text-amber-800">
                  <strong>Khoảng cách cung - cầu:</strong> Nhu cầu tuyển dụng IT luôn cao hơn nguồn nhân lực,
                  tạo cơ hội việc làm lớn cho sinh viên CNTT (khoảng cách ~37% năm 2024).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Salary Growth Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">Tăng Trưởng Mức Lương IT</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Mức lương trung bình theo cấp độ kinh nghiệm (đơn vị: triệu VNĐ/tháng)
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={salaryGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    stroke="#64748b"
                    style={{ fontSize: '14px' }}
                  />
                  <YAxis
                    stroke="#64748b"
                    style={{ fontSize: '14px' }}
                    label={{ value: 'Triệu VNĐ', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '12px'
                    }}
                    formatter={(value: number) => [`${value} triệu`, '']}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="junior"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    name="Junior (0-2 năm)"
                    dot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="mid"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    name="Mid-level (2-5 năm)"
                    dot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="senior"
                    stroke="#ec4899"
                    strokeWidth={3}
                    name="Senior (5+ năm)"
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-xl">
                  <div className="text-2xl text-cyan-600 mb-1">+125%</div>
                  <div className="text-sm text-slate-600">Tăng lương Junior (2018-2025)</div>
                </div>
                <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                  <div className="text-2xl text-purple-600 mb-1">+140%</div>
                  <div className="text-sm text-slate-600">Tăng lương Mid-level (2018-2025)</div>
                </div>
                <div className="p-4 bg-pink-50 border border-pink-200 rounded-xl">
                  <div className="text-2xl text-pink-600 mb-1">+150%</div>
                  <div className="text-sm text-slate-600">Tăng lương Senior (2018-2025)</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment & Startup Chart */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">Đầu Tư & Startup Công Nghệ</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Số lượng startup và vốn đầu tư vào ngành công nghệ Việt Nam
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={investmentData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    stroke="#64748b"
                    style={{ fontSize: '14px' }}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke="#64748b"
                    style={{ fontSize: '14px' }}
                    label={{ value: 'Số lượng', angle: -90, position: 'insideLeft' }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#64748b"
                    style={{ fontSize: '14px' }}
                    label={{ value: 'Triệu USD', angle: 90, position: 'insideRight' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '12px'
                    }}
                  />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="startups"
                    fill="#6366f1"
                    name="Số lượng Startup"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="investment"
                    fill="#10b981"
                    name="Vốn đầu tư (triệu USD)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">Những Con Số Ấn Tượng</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Các dấu mốc đáng chú ý trong sự phát triển của ngành CNTT Việt Nam
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                    <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl mb-2">{highlight.title}</h3>
                          <p className="text-slate-600">{highlight.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="mb-6 text-white">Sẵn Sàng Tham Gia Ngành CNTT?</h2>
            <p className="text-xl mb-8 text-white/90">
              Với tốc độ tăng trưởng ấn tượng và cơ hội nghề nghiệp không giới hạn,
              đây là thời điểm tuyệt vời để bắt đầu hành trình của bạn trong ngành Công nghệ Thông tin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#chuyen-nganh"
                className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Khám phá Chuyên ngành
              </Link>
              <Link
                to="/#vi-tri-viec-lam"
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2"
              >
                Xem Vị trí Việc làm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
