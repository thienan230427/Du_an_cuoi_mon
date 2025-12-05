import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
    alert("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4 bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] bg-clip-text text-transparent">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Có thắc mắc về ngành CNTT? Hãy để lại thông tin, chúng tôi sẽ tư vấn chi tiết cho bạn
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 rounded-2xl border-2 border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                  Họ và tên
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nguyễn Văn A"
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-gray-700 mb-2">
                  Trường/Công ty (tùy chọn)
                </label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Tên trường hoặc công ty"
                  className="rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
                  Nội dung
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Câu hỏi của bạn về ngành CNTT..."
                  required
                  rows={5}
                  className="rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-[#0066FF] to-[#9A5CFF] hover:opacity-90 rounded-xl group"
              >
                Gửi tin nhắn
                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">an25800600029.edu.vn</p>
                  <p className="text-gray-600">an25800600029.edu.vn</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Điện thoại</h4>
                  <p className="text-gray-600">+84 123 456 789</p>
                  <p className="text-gray-600">+84 987 654 321</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 rounded-2xl border-2 border-gray-100 hover:border-[#0066FF] transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#0066FF] to-[#9A5CFF] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 mb-1">Địa chỉ</h4>
                  <p className="text-gray-600">
                    475A Đại Học HUTECH <br />
                    Thành phố Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
            </Card>

            {/* Map placeholder */}
            <Card className="p-0 rounded-2xl overflow-hidden border-2 border-gray-100">
              <div className="h-64 bg-gradient-to-br from-[#0066FF]/10 to-[#9A5CFF]/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#0066FF] mx-auto mb-2" />
                  <p className="text-gray-600">Bản đồ văn phòng</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
