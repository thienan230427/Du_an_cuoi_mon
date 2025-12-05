import {
  Building,
  Car,
  Globe,
  GraduationCap,
  Heart,
  ShoppingCart,
  Smartphone,
  Sprout,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Data về tỷ lệ áp dụng CNTT trong các ngành (%)
const adoptionRateData = [
  { sector: "Tài chính", rate: 92, investment: 2800 },
  { sector: "Y tế", rate: 78, investment: 1900 },
  { sector: "Giáo dục", rate: 85, investment: 1500 },
  { sector: "Thương mại", rate: 88, investment: 3200 },
  { sector: "Giao thông", rate: 72, investment: 1600 },
  { sector: "Nông nghiệp", rate: 65, investment: 1100 },
  { sector: "Sản xuất", rate: 75, investment: 2200 },
  { sector: "Du lịch", rate: 70, investment: 900 },
];

// Data về phân bổ đầu tư chuyển đổi số
const digitalTransformationData = [
  { name: "Cloud Computing", value: 28, color: "#3b82f6" },
  { name: "AI & Machine Learning", value: 22, color: "#8b5cf6" },
  { name: "Big Data Analytics", value: 18, color: "#ec4899" },
  { name: "IoT & Smart Devices", value: 15, color: "#10b981" },
  { name: "Blockchain", value: 8, color: "#f59e0b" },
  { name: "Cybersecurity", value: 9, color: "#ef4444" },
];

// Data về mức độ chuyển đổi số theo lĩnh vực
const maturityData = [
  { subject: "Hạ tầng", A: 85, B: 70, fullMark: 100 },
  { subject: "Ứng dụng", A: 78, B: 65, fullMark: 100 },
  { subject: "Dữ liệu", A: 72, B: 58, fullMark: 100 },
  { subject: "Con người", A: 68, B: 55, fullMark: 100 },
  { subject: "Quy trình", A: 75, B: 62, fullMark: 100 },
  { subject: "Bảo mật", A: 80, B: 60, fullMark: 100 },
];

const applications = [
  {
    icon: Heart,
    title: "Y tế - Chăm sóc Sức khỏe",
    description: "Bệnh án điện tử, telemedicine, AI chẩn đoán bệnh",
    stats: "78% bệnh viện đã số hóa",
    image: "/images/healthcare.jpg",
    color: "from-red-500 to-pink-500",
    examples: [
      "Hệ thống bệnh án điện tử toàn quốc",
      "Ứng dụng khám bác sĩ online (Bookingcare, JioHealth)",
      "AI hỗ trợ đọc phim X-quang và chẩn đoán",
      "Thiết bị y tế thông minh (đo đường huyết, huyết áp)",
    ],
  },
  {
    icon: GraduationCap,
    title: "Giáo dục - Đào tạo",
    description: "E-learning, LMS, học tập cá nhân hóa với AI",
    stats: "85% trường học dùng nền tảng số",
    image: "/images/education.jpg",
    color: "from-blue-500 to-cyan-500",
    examples: [
      "Nền tảng học trực tuyến (Edumall, Udemys, Coursera)",
      "Hệ thống quản lý học tập LMS (Google Classroom)",
      "AI cá nhân hóa lộ trình học tập",
      "VR/AR cho trải nghiệm học tập thực tế ảo",
    ],
  },
  {
    icon: Wallet,
    title: "Tài chính - Ngân hàng",
    description: "Fintech, mobile banking, thanh toán số",
    stats: "92% giao dịch qua digital",
    image: "/images/fintech.jpg",
    color: "from-green-500 to-emerald-500",
    examples: [
      "Ví điện tử (Momo, ZaloPay, VNPay)",
      "Internet Banking & Mobile Banking",
      "Blockchain cho giao dịch an toàn",
      "AI phát hiện gian lận và đánh giá tín dụng",
    ],
  },
  {
    icon: Sprout,
    title: "Nông nghiệp Thông minh",
    description: "IoT, AI dự đoán mùa vụ, drone giám sát",
    stats: "65% nông trại ứng dụng công nghệ",
    image: "/images/agriculture.jpg",
    color: "from-lime-500 to-green-600",
    examples: [
      "Cảm biến IoT theo dõi độ ẩm, nhiệt độ đất",
      "Drone phun thuốc và giám sát mùa màng",
      "AI dự đoán năng suất và phát hiện sâu bệnh",
      "Blockchain truy xuất nguồn gốc nông sản",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Thương mại Điện tử",
    description: "E-commerce, omnichannel, AI recommendation",
    stats: "88% người tiêu dùng mua sắm online",
    image: "/images/ecommerce.jpg",
    color: "from-orange-500 to-red-500",
    examples: [
      "Sàn TMĐT (Shopee, Lazada, Tiki, Sendo)",
      "Live Commerce & Social Commerce",
      "AI gợi ý sản phẩm cá nhân hóa",
      "Chatbot hỗ trợ khách hàng 24/7",
    ],
  },
  {
    icon: Car,
    title: "Giao thông Thông minh",
    description: "Smart traffic, ride-hailing, autonomous vehicles",
    stats: "72% hệ thống giao thông được số hóa",
    image: "/images/smartcity.jpg",
    color: "from-purple-500 to-pink-500",
    examples: [
      "Ứng dụng gọi xe (Grab, Be, Xanh SM)",
      "Hệ thống giám sát giao thông thông minh",
      "AI tối ưu hóa đèn giao thông",
      "E-ticketing cho phương tiện công cộng",
    ],
  },
];

const stats = [
  {
    icon: Globe,
    value: "15+",
    label: "Ngành nghề ứng dụng CNTT",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    value: "78%",
    label: "Doanh nghiệp đang chuyển đổi số",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    value: "45M+",
    label: "Người dùng internet VN",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    value: "$12B",
    label: "Thị trường Digital Economy 2024",
    color: "from-orange-500 to-red-500",
  },
];

const benefits = [
  {
    icon: Building,
    title: "Tăng Hiệu Quả Vận Hành",
    description:
      "Tự động hóa quy trình, giảm chi phí vận hành 30-50%, tăng năng suất lao động",
  },
  {
    icon: Smartphone,
    title: "Trải Nghiệm Khách Hàng Tốt Hơn",
    description:
      "Cá nhân hóa dịch vụ, phục vụ 24/7, tương tác đa kênh liền mạch",
  },
  {
    icon: TrendingUp,
    title: "Ra Quyết Định Dựa Trên Dữ Liệu",
    description:
      "Phân tích big data, dự đoán xu hướng, tối ưu hóa chiến lược kinh doanh",
  },
  {
    icon: Zap,
    title: "Đổi Mới Sáng Tạo Nhanh Chóng",
    description:
      "Rút ngắn thời gian ra mắt sản phẩm, thử nghiệm nhanh, thích ứng linh hoạt",
  },
];

export function WideApplicationsPage() {
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
              <span className="text-white text-sm">Ứng dụng rộng rãi</span>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              CNTT Hiện Diện Trong
              <br />
              Mọi Lĩnh Vực Cuộc Sống
            </h1>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              Từ y tế, giáo dục, tài chính đến nông nghiệp và giao thông - Công
              nghệ thông tin đang thay đổi cách chúng ta sống, làm việc và kết
              nối với thế giới.
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
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}
                    >
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

      {/* Applications Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Ứng Dụng CNTT Trong Các Ngành</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Khám phá cách công nghệ thông tin đang cách mạng hóa từng lĩnh vực
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {applications.map((app, index) => {
              const Icon = app.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 transition-all">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div
                        className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${app.color}`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl mb-2">{app.title}</h3>
                      <p className="text-slate-600 mb-4">{app.description}</p>
                      <div
                        className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${app.color} bg-opacity-10 mb-4`}
                      >
                        <span className="text-sm">{app.stats}</span>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm text-slate-500 mb-2">
                          Ví dụ ứng dụng:
                        </div>
                        {app.examples.map((example, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            <span>{example}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Adoption Rate Chart */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">Tỷ Lệ Ứng Dụng CNTT Theo Ngành</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Mức độ áp dụng công nghệ và đầu tư chuyển đổi số trong các lĩnh
                vực tại Việt Nam
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={adoptionRateData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="sector"
                    stroke="#64748b"
                    style={{ fontSize: "14px" }}
                    angle={-15}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke="#64748b"
                    style={{ fontSize: "14px" }}
                    label={{
                      value: "% Áp dụng",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    stroke="#64748b"
                    style={{ fontSize: "14px" }}
                    label={{
                      value: "Triệu USD",
                      angle: 90,
                      position: "insideRight",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                  />
                  <Legend />
                  <Bar
                    yAxisId="left"
                    dataKey="rate"
                    fill="#3b82f6"
                    name="Tỷ lệ áp dụng (%)"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="investment"
                    fill="#10b981"
                    name="Đầu tư (triệu USD)"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Digital Transformation Pie Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">Phân Bổ Đầu Tư Chuyển Đổi Số</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Các lĩnh vực công nghệ được đầu tư nhiều nhất trong quá trình
                chuyển đổi số
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={digitalTransformationData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {digitalTransformationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        border: "1px solid #e2e8f0",
                        borderRadius: "12px",
                        padding: "12px",
                      }}
                      formatter={(value: number) => [`${value}%`, "Tỷ trọng"]}
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div className="space-y-4">
                  {digitalTransformationData.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl"
                    >
                      <div
                        className="w-4 h-4 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <div className="flex-1">
                        <div className="text-sm text-slate-900">
                          {item.name}
                        </div>
                        <div className="text-xs text-slate-500">
                          Chiếm {item.value}% ngân sách
                        </div>
                      </div>
                      <div className="text-2xl" style={{ color: item.color }}>
                        {item.value}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Maturity Radar Chart */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">Mức Độ Chuyển Đổi Số</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                So sánh mức độ trưởng thành chuyển đổi số giữa doanh nghiệp lớn
                và SME
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
              <ResponsiveContainer width="100%" height={500}>
                <RadarChart data={maturityData}>
                  <PolarGrid stroke="#e2e8f0" />
                  <PolarAngleAxis
                    dataKey="subject"
                    style={{ fontSize: "14px" }}
                  />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="Doanh nghiệp lớn"
                    dataKey="A"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="SME"
                    dataKey="B"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Legend />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <p className="text-sm text-slate-500 mt-4 text-center">
                Mức độ từ 0-100, đánh giá theo 6 tiêu chí của chuyển đổi số
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="mb-4">Lợi Ích Của Chuyển Đổi Số</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Những giá trị thiết thực mà CNTT mang lại cho doanh nghiệp và xã
                hội
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
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
                          <h3 className="text-xl mb-2">{benefit.title}</h3>
                          <p className="text-slate-600">
                            {benefit.description}
                          </p>
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
            <h2 className="mb-6 text-white">Trở Thành Chuyên Gia CNTT</h2>
            <p className="text-xl mb-8 text-white/90">
              Với CNTT ứng dụng rộng khắp mọi lĩnh vực, cơ hội nghề nghiệp của
              bạn là vô hạn. Hãy bắt đầu hành trình chinh phục công nghệ ngay
              hôm nay!
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
