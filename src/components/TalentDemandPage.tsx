import {
  ArrowRight,
  Brain,
  Briefcase,
  Code,
  Database,
  DollarSign,
  GraduationCap,
  MapPin,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion, useInView } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Area,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Data về nhu cầu tuyển dụng theo vị trí
const jobDemandData = [
  { position: "Lập trình viên", demand: 28500, salary: 18, growth: 25 },
  { position: "Data Analyst", demand: 12300, salary: 22, growth: 35 },
  { position: "DevOps Engineer", demand: 8900, salary: 28, growth: 40 },
  { position: "An ninh mạng", demand: 7800, salary: 25, growth: 45 },
  { position: "UI/UX Designer", demand: 9200, salary: 16, growth: 30 },
  { position: "AI Engineer", demand: 6500, salary: 35, growth: 50 },
  { position: "Mobile Developer", demand: 11400, salary: 20, growth: 28 },
  { position: "Cloud Architect", demand: 5200, salary: 40, growth: 42 },
];

// Data về kỹ năng được yêu cầu nhiều nhất
const topSkillsData = [
  { skill: "JavaScript/TypeScript", jobs: 32500, color: "#f7df1e" },
  { skill: "Python", jobs: 28900, color: "#3776ab" },
  { skill: "Java", jobs: 24300, color: "#007396" },
  { skill: "React/Vue/Angular", jobs: 26800, color: "#61dafb" },
  { skill: "SQL/Database", jobs: 22100, color: "#4479a1" },
  { skill: "AWS/Azure/GCP", jobs: 18700, color: "#ff9900" },
  { skill: "Docker/Kubernetes", jobs: 15400, color: "#2496ed" },
  { skill: "Git", jobs: 29200, color: "#f05032" },
];

// Data về khoảng cách cung - cầu
const supplyDemandGapData = [
  { year: "2019", supply: 320, demand: 450, gap: 130 },
  { year: "2020", supply: 390, demand: 560, gap: 170 },
  { year: "2021", supply: 470, demand: 680, gap: 210 },
  { year: "2022", supply: 570, demand: 850, gap: 280 },
  { year: "2023", supply: 680, demand: 1050, gap: 370 },
  { year: "2024", supply: 820, demand: 1300, gap: 480 },
  { year: "2025*", supply: 990, demand: 1600, gap: 610 },
];

// Data về nhu cầu theo thành phố
const cityDemandData = [
  { city: "TP.HCM", jobs: 45200, companies: 2800 },
  { city: "Hà Nội", jobs: 38600, companies: 2200 },
  { city: "Đà Nẵng", jobs: 8900, companies: 580 },
  { city: "Cần Thơ", jobs: 3200, companies: 210 },
  { city: "Hải Phòng", jobs: 4100, companies: 280 },
  { city: "Bình Dương", jobs: 6800, companies: 420 },
];

const stats = [
  {
    icon: Briefcase,
    value: 125,
    suffix: "K+",
    label: "Vị trí tuyển dụng IT mỗi năm",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    value: 38,
    suffix: "%",
    label: "Tăng trưởng nhu cầu hàng năm",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    value: 610,
    suffix: "K",
    label: "Khoảng cách cung-cầu dự kiến 2025",
    color: "from-red-500 to-orange-500",
  },
  {
    icon: DollarSign,
    value: 2.5,
    suffix: "K",
    label: "Mức lương trung bình (USD/tháng)",
    color: "from-green-500 to-emerald-500",
    prefix: "$",
  },
];

const topPositions = [
  {
    icon: Code,
    title: "Lập trình viên (Developer)",
    demand: "28,500 vị trí",
    salary: "12-35 triệu VNĐ",
    growth: "+25% năm",
    image: "/images/coding.jpg",
    color: "from-blue-500 to-cyan-500",
    skills: ["JavaScript", "Python", "Java", "React"],
  },
  {
    icon: Brain,
    title: "AI/ML Engineer",
    demand: "6,500 vị trí",
    salary: "20-50 triệu VNĐ",
    growth: "+50% năm",
    image: "/images/interview.jpg",
    color: "from-purple-500 to-pink-500",
    skills: ["Python", "TensorFlow", "PyTorch", "ML"],
  },
  {
    icon: Shield,
    title: "Chuyên viên An ninh mạng",
    demand: "7,800 vị trí",
    salary: "15-40 triệu VNĐ",
    growth: "+45% năm",
    image: "/images/collaboration.jpg",
    color: "from-red-500 to-orange-500",
    skills: ["Network Security", "Penetration Testing", "SIEM"],
  },
  {
    icon: Database,
    title: "Data Analyst/Scientist",
    demand: "12,300 vị trí",
    salary: "15-45 triệu VNĐ",
    growth: "+35% năm",
    image: "/images/career.jpg",
    color: "from-green-500 to-emerald-500",
    skills: ["SQL", "Python", "Tableau", "Power BI"],
  },
];

const benefits = [
  {
    icon: Target,
    title: "Cơ Hội Việc Làm Dồi Dào",
    description:
      "Hơn 125,000 vị trí tuyển dụng IT mỗi năm, dễ dàng tìm công việc phù hợp với kỹ năng",
  },
  {
    icon: DollarSign,
    title: "Mức Lương Cạnh Tranh",
    description:
      "Lương khởi điểm cao, cơ hội tăng lương nhanh theo kinh nghiệm và kỹ năng",
  },
  {
    icon: TrendingUp,
    title: "Thăng Tiến Rõ Ràng",
    description:
      "Lộ trình sự nghiệp minh bạch từ Junior → Senior → Lead → Manager",
  },
  {
    icon: GraduationCap,
    title: "Học Tập Liên Tục",
    description:
      "Môi trường năng động, luôn có cơ hội học công nghệ mới và nâng cao kỹ năng",
  },
];

const whyHighDemand = [
  {
    title: "Chuyển đổi số toàn cầu",
    description:
      "Mọi doanh nghiệp đều cần chuyển đổi số, tạo nhu cầu lớn về nhân lực IT",
  },
  {
    title: "Công nghệ phát triển nhanh",
    description:
      "AI, Cloud, IoT, Blockchain... mở ra hàng loạt vị trí việc làm mới",
  },
  {
    title: "Thiếu hụt nhân lực",
    description:
      "Khoảng cách giữa cung và cầu ngày càng lớn, ước tính thiếu 610K người năm 2025",
  },
  {
    title: "Outsourcing IT phát triển",
    description: "Việt Nam là điểm đến hấp dẫn cho outsourcing IT toàn cầu",
  },
];

// Counter Animation Component
function CounterAnimation({
  end,
  duration = 2,
  suffix = "",
  prefix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min(
        (currentTime - startTime) / (duration * 1000),
        1
      );

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(end * easeOutQuart);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toFixed(count < 10 ? 1 : 0)}
      {suffix}
    </span>
  );
}

// Floating Animation for decorative elements
const floatingAnimation = {
  y: [0, -10, 0],
};

const floatingTransition = {
  duration: 3,
  repeat: Infinity,
  ease: "easeInOut" as const,
};

export function TalentDemandPage() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

        {/* Floating decorative elements */}
        <motion.div
          animate={floatingAnimation}
          transition={floatingTransition}
          className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={floatingAnimation}
          transition={{ ...floatingTransition, delay: 1 }}
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            >
              <span className="text-white text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Nhu cầu nhân lực cao
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
            >
              Thị Trường Tuyển Dụng IT
              <br />
              Cơ Hội Việc Làm Không Giới Hạn
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-slate-600 text-lg max-w-3xl mx-auto"
            >
              Với hơn 125,000 vị trí tuyển dụng mỗi năm và tốc độ tăng trưởng
              38%, ngành IT đang mở ra cơ hội nghề nghiệp vô tận cho thế hệ trẻ
              Việt Nam.
            </motion.p>
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
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  onHoverStart={() => setHoveredStat(index)}
                  onHoverEnd={() => setHoveredStat(null)}
                  className="relative group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl"
                    animate={{
                      scale: hoveredStat === index ? 1.1 : 1,
                      opacity: hoveredStat === index ? 1 : 0.5,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="relative bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}
                      animate={{
                        rotate: hoveredStat === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="text-3xl mb-2 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                      <CounterAnimation
                        end={stat.value}
                        suffix={stat.suffix}
                        prefix={stat.prefix}
                      />
                    </div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supply-Demand Gap Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                Khoảng Cách Cung - Cầu Nhân Lực IT
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-slate-600 max-w-2xl mx-auto"
              >
                Nhu cầu tuyển dụng tăng nhanh hơn nguồn cung, tạo cơ hội lớn cho
                sinh viên CNTT
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={supplyDemandGapData}>
                  <defs>
                    <linearGradient id="colorGap" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="year"
                    stroke="#64748b"
                    style={{ fontSize: "14px" }}
                  />
                  <YAxis
                    stroke="#64748b"
                    style={{ fontSize: "14px" }}
                    label={{
                      value: "Nghìn người",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                    formatter={(value: number) => [`${value}K người`, ""]}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="gap"
                    fill="url(#colorGap)"
                    stroke="#ef4444"
                    strokeWidth={2}
                    name="Khoảng cách thiếu hụt"
                  />
                  <Line
                    type="monotone"
                    dataKey="demand"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    name="Nhu cầu tuyển dụng"
                    dot={{ r: 5 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="supply"
                    stroke="#10b981"
                    strokeWidth={3}
                    name="Nguồn cung nhân lực"
                    dot={{ r: 5 }}
                  />
                </ComposedChart>
              </ResponsiveContainer>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl"
              >
                <p className="text-sm text-red-800">
                  <strong>⚠️ Cảnh báo thiếu hụt:</strong> Năm 2025 dự kiến thiếu
                  hụt 610,000 nhân lực IT. Đây là cơ hội tuyệt vời cho sinh viên
                  CNTT với tỷ lệ việc làm gần 100%.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Job Demand by Position */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                Nhu Cầu Tuyển Dụng Theo Vị Trí
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 max-w-2xl mx-auto"
              >
                Số lượng vị trí tuyển dụng và mức lương trung bình theo từng
                chuyên ngành
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <ResponsiveContainer width="100%" height={450}>
                <BarChart data={jobDemandData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="position"
                    stroke="#64748b"
                    style={{ fontSize: "12px" }}
                    angle={-25}
                    textAnchor="end"
                    height={100}
                  />
                  <YAxis
                    stroke="#64748b"
                    style={{ fontSize: "14px" }}
                    label={{
                      value: "Số lượng vị trí",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                    formatter={(value: number) => [
                      `${value.toLocaleString()} vị trí`,
                      "",
                    ]}
                  />
                  <Legend />
                  <Bar
                    dataKey="demand"
                    name="Số lượng tuyển dụng"
                    radius={[8, 8, 0, 0]}
                  >
                    {jobDemandData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={`hsl(${220 + index * 20}, 70%, 55%)`}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    label: "Top 1",
                    title: "Lập trình viên",
                    value: "28.5K vị trí",
                    color: "blue",
                  },
                  {
                    label: "Top 2",
                    title: "Data Analyst",
                    value: "12.3K vị trí",
                    color: "purple",
                  },
                  {
                    label: "Top 3",
                    title: "Mobile Dev",
                    value: "11.4K vị trí",
                    color: "cyan",
                  },
                  {
                    label: "Tăng nhanh nhất",
                    title: "AI Engineer",
                    value: "+50% năm",
                    color: "pink",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className={`p-3 bg-${item.color}-50 border border-${item.color}-200 rounded-lg cursor-pointer`}
                  >
                    <div className="text-xs text-slate-600 mb-1">
                      {item.label}
                    </div>
                    <div className={`text-sm text-${item.color}-600`}>
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500">{item.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Top Skills Chart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                Kỹ Năng Được Yêu Cầu Nhiều Nhất
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 max-w-2xl mx-auto"
              >
                Top 8 kỹ năng lập trình/công nghệ xuất hiện nhiều nhất trong tin
                tuyển dụng
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={topSkillsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="skill"
                    stroke="#64748b"
                    style={{ fontSize: "13px" }}
                    angle={-15}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis
                    stroke="#64748b"
                    style={{ fontSize: "14px" }}
                    label={{
                      value: "Số tin tuyển dụng",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      border: "1px solid #e2e8f0",
                      borderRadius: "12px",
                      padding: "12px",
                    }}
                    formatter={(value: number) => [
                      `${value.toLocaleString()} tin`,
                      "",
                    ]}
                  />
                  <Legend />
                  <Bar
                    dataKey="jobs"
                    name="Số lượng tin tuyển dụng"
                    radius={[8, 8, 0, 0]}
                  >
                    {topSkillsData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
                {topSkillsData.slice(0, 4).map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg cursor-pointer"
                  >
                    <motion.div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: skill.color }}
                      whileHover={{ scale: 1.5 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    />
                    <span className="text-sm text-slate-700">
                      {skill.skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* City Demand Chart */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                Nhu Cầu Tuyển Dụng Theo Thành Phố
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 max-w-2xl mx-auto"
              >
                Phân bố địa lý của thị trường việc làm IT tại Việt Nam
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={cityDemandData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis
                    dataKey="city"
                    stroke="#64748b"
                    style={{ fontSize: "14px" }}
                  />
                  <YAxis
                    yAxisId="left"
                    stroke="#64748b"
                    style={{ fontSize: "14px" }}
                    label={{
                      value: "Số việc làm",
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
                      value: "Số công ty",
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
                    dataKey="jobs"
                    fill="#3b82f6"
                    name="Số việc làm IT"
                    radius={[8, 8, 0, 0]}
                  />
                  <Bar
                    yAxisId="right"
                    dataKey="companies"
                    fill="#8b5cf6"
                    name="Số công ty IT"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  {
                    city: "TP.HCM",
                    jobs: "45.2K",
                    percent: "36%",
                    color: "blue",
                  },
                  {
                    city: "Hà Nội",
                    jobs: "38.6K",
                    percent: "31%",
                    color: "purple",
                  },
                  {
                    city: "Các tỉnh khác",
                    jobs: "41.2K",
                    percent: "33%",
                    color: "cyan",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`p-4 bg-${item.color}-50 border border-${item.color}-200 rounded-xl cursor-pointer`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className={`w-4 h-4 text-${item.color}-600`} />
                      <span className="text-sm text-slate-600">
                        {item.city}
                      </span>
                    </div>
                    <div className={`text-2xl text-${item.color}-600`}>
                      {item.jobs}
                    </div>
                    <div className="text-xs text-slate-500">
                      Việc làm ({item.percent})
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Top Positions Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                Vị Trí Hot Nhất Hiện Nay
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 max-w-2xl mx-auto"
              >
                4 vị trí có nhu cầu tuyển dụng cao và mức lương hấp dẫn
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {topPositions.map((position, index) => {
                const Icon = position.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    whileHover={{ y: -10 }}
                    className="relative group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"
                      whileHover={{ scale: 1.05, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 transition-all">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={position.image}
                          alt={position.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <motion.div
                          className={`absolute top-4 right-4 p-3 rounded-xl bg-gradient-to-r ${position.color}`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl mb-3">{position.title}</h3>

                        <div className="grid grid-cols-3 gap-3 mb-4">
                          {[
                            {
                              label: "Nhu cầu",
                              value: position.demand,
                              color: "blue",
                            },
                            {
                              label: "Lương",
                              value: position.salary,
                              color: "green",
                            },
                            {
                              label: "Tăng trưởng",
                              value: position.growth,
                              color: "purple",
                            },
                          ].map((stat, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                delay: index * 0.15 + i * 0.1 + 0.3,
                              }}
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              className={`p-3 bg-${stat.color}-50 rounded-lg`}
                            >
                              <div className="text-xs text-slate-600 mb-1">
                                {stat.label}
                              </div>
                              <div className={`text-sm text-${stat.color}-600`}>
                                {stat.value}
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        <div className="space-y-2">
                          <div className="text-sm text-slate-500">
                            Kỹ năng cần thiết:
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {position.skills.map((skill, i) => (
                              <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: index * 0.15 + i * 0.1 + 0.5,
                                }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs cursor-pointer"
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
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

      {/* Why High Demand Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                Tại Sao Nhu Cầu Nhân Lực IT Cao?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 max-w-2xl mx-auto"
              >
                Các yếu tố thúc đẩy nhu cầu tuyển dụng IT tăng mạnh
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyHighDemand.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="relative group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white"
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        {index + 1}
                      </motion.div>
                      <div>
                        <h3 className="text-lg mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
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
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                Lợi Ích Của Nghề IT
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-slate-600 max-w-2xl mx-auto"
              >
                Những ưu điểm vượt trội khi theo đuổi sự nghiệp trong lĩnh vực
                CNTT
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    className="relative group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="relative bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-300 transition-all">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className="flex-shrink-0 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </motion.div>
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
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 text-white"
            >
              Sẵn sàng bắt đầu sự nghiệp Trí tuệ Nhân tạo?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-xl mb-8 text-white/90"
            >
              Tham gia cộng đồng hàng nghìn học viên đang học tập và phát triển
              mỗi ngày
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/#chuyen-nganh"
                  className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  Đăng ký học ngay
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/#lien-he"
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white text-white rounded-xl hover:bg-white hover:text-blue-600 transition-all inline-flex items-center justify-center gap-2 group"
                >
                  Tư vấn miễn phí
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
