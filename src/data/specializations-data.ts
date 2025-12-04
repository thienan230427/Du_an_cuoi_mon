export interface SpecializationData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  skills: string[];
  responsibilities: string[];
  roadmap: {
    phase: string;
    duration: string;
    items: string[];
  }[];
  salary: {
    junior: string;
    mid: string;
    senior: string;
  };
  companies: string[];
  tools: string[];
  courses: {
    title: string;
    provider: string;
    level: string;
  }[];
}

export const specializationsData: { [key: string]: SpecializationData } = {
  'khoa-hoc-may-tinh': {
    id: 'khoa-hoc-may-tinh',
    title: 'Khoa học Máy tính',
    subtitle: 'Nền tảng của công nghệ',
    description: 'Nghiên cứu thuật toán, lý thuyết tính toán và cấu trúc dữ liệu',
    overview: 'Khoa học Máy tính là nền tảng của mọi ngành công nghệ, tập trung vào lý thuyết tính toán, thuật toán, cấu trúc dữ liệu và các nguyên lý cơ bản của máy tính. Đây là chuyên ngành mang tính học thuật cao, phù hợp cho những ai muốn nghiên cứu sâu về bản chất của công nghệ.',
    skills: [
      'Thuật toán và cấu trúc dữ liệu',
      'Lập trình hướng đối tượng',
      'Toán học rời rạc và đại số tuyến tính',
      'Hệ điều hành và kiến trúc máy tính',
      'Mạng máy tính và giao thức truyền thông',
      'Cơ sở dữ liệu và ngôn ngữ truy vấn'
    ],
    responsibilities: [
      'Thiết kế và phân tích thuật toán',
      'Tối ưu hóa hiệu suất hệ thống',
      'Nghiên cứu và phát triển công nghệ mới',
      'Giải quyết các bài toán phức tạp',
      'Xây dựng hệ thống phần mềm quy mô lớn'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '3-6 tháng',
        items: [
          'Học ngôn ngữ lập trình C/C++ hoặc Python',
          'Toán học: Đại số, Logic, Xác suất thống kê',
          'Cấu trúc dữ liệu cơ bản (Mảng, Danh sách liên kết, Ngăn xếp, Hàng đợi)',
          'Thuật toán sắp xếp và tìm kiếm'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '6-12 tháng',
        items: [
          'Cấu trúc dữ liệu nâng cao (Cây, Đồ thị, Bảng băm)',
          'Thuật toán: Quy hoạch động, Tham lam, Chia để trị',
          'Hệ điều hành và quản lý bộ nhớ',
          'Kiến trúc máy tính và ngôn ngữ hợp ngữ'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '12-18 tháng',
        items: [
          'Lý thuyết độ phức tạp tính toán',
          'Thuật toán đồ thị và mạng lưới',
          'Hệ thống phân tán',
          'Nghiên cứu và xuất bản bài báo khoa học'
        ]
      }
    ],
    salary: {
      junior: '10-15 triệu',
      mid: '18-35 triệu',
      senior: '40-80 triệu'
    },
    companies: [
      'Google', 'Microsoft', 'Facebook/Meta', 'Amazon',
      'FPT Software', 'Viettel', 'VNG', 'Tiki'
    ],
    tools: [
      'C++', 'Python', 'Java', 'Git',
      'Linux', 'Visual Studio', 'GDB', 'Valgrind'
    ],
    courses: [
      { title: 'Nhập môn Khoa học Máy tính', provider: 'Harvard (edX)', level: 'Cơ bản' },
      { title: 'Chuyên ngành Thuật toán', provider: 'Stanford (Coursera)', level: 'Trung cấp' },
      { title: 'Cấu trúc Dữ liệu và Thuật toán', provider: 'UC San Diego (Coursera)', level: 'Nâng cao' }
    ]
  },
  'ky-thuat-phan-mem': {
    id: 'ky-thuat-phan-mem',
    title: 'Kỹ thuật Phần mềm',
    subtitle: 'Xây dựng phần mềm chuyên nghiệp',
    description: 'Thiết kế, phát triển và bảo trì hệ thống phần mềm chuyên nghiệp',
    overview: 'Kỹ thuật Phần mềm tập trung vào quy trình phát triển phần mềm một cách có hệ thống, từ phân tích yêu cầu, thiết kế, lập trình, kiểm thử đến triển khai và bảo trì. Đây là chuyên ngành thực hành cao, phù hợp cho những ai muốn trực tiếp xây dựng sản phẩm phần mềm.',
    skills: [
      'Lập trình đa ngôn ngữ (Java, Python, JavaScript)',
      'Mẫu thiết kế và mã nguồn sạch',
      'Phương pháp phát triển linh hoạt (Agile/Scrum)',
      'Kiểm thử và đảm bảo chất lượng',
      'Vận hành phát triển và Tích hợp/Triển khai liên tục',
      'Kiến trúc dịch vụ nhỏ (Microservices)'
    ],
    responsibilities: [
      'Phân tích yêu cầu và thiết kế hệ thống',
      'Phát triển và bảo trì mã nguồn',
      'Đánh giá mã nguồn và làm việc nhóm',
      'Viết kiểm thử đơn vị và kiểm thử tích hợp',
      'Triển khai và giám sát hệ thống sản xuất'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '3-6 tháng',
        items: [
          'Học một ngôn ngữ lập trình (Python/Java)',
          'Hệ thống quản lý phiên bản với Git',
          'Lập trình hướng đối tượng và Mẫu thiết kế cơ bản',
          'Ngôn ngữ truy vấn và cơ sở dữ liệu cơ bản'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '6-12 tháng',
        items: [
          'Khung làm việc Web (Spring Boot, Django, Express)',
          'Thiết kế giao diện lập trình ứng dụng RESTful',
          'Kiểm thử (Đơn vị, Tích hợp, Đầu cuối)',
          'Công nghệ container hóa với Docker'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '12+ tháng',
        items: [
          'Kiến trúc dịch vụ nhỏ và hệ thống phân tán',
          'Nền tảng điện toán đám mây (AWS, Azure, GCP)',
          'Đường ống Tích hợp/Triển khai liên tục',
          'Thiết kế hệ thống và khả năng mở rộng'
        ]
      }
    ],
    salary: {
      junior: '12-18 triệu',
      mid: '20-40 triệu',
      senior: '45-90 triệu'
    },
    companies: [
      'FPT Software', 'VNG', 'Tiki', 'Shopee',
      'Grab', 'Momo', 'ZaloPay', 'VinID'
    ],
    tools: [
      'Java', 'Python', 'JavaScript', 'Spring Boot',
      'Docker', 'Kubernetes', 'Jenkins', 'Git'
    ],
    courses: [
      { title: 'Cơ bản Kỹ thuật Phần mềm', provider: 'Udemy', level: 'Cơ bản' },
      { title: 'Thành thạo Java Spring Boot', provider: 'Udemy', level: 'Trung cấp' },
      { title: 'Kiến trúc Dịch vụ Nhỏ', provider: 'Pluralsight', level: 'Nâng cao' }
    ]
  },
  'an-ninh-mang': {
    id: 'an-ninh-mang',
    title: 'An ninh Mạng',
    subtitle: 'Bảo vệ hệ thống thông tin',
    description: 'Bảo vệ hệ thống và dữ liệu khỏi các mối đe dọa an ninh',
    overview: 'An ninh Mạng là lĩnh vực bảo vệ hệ thống máy tính, mạng và dữ liệu khỏi các cuộc tấn công, truy cập trái phép và thiệt hại. Với sự gia tăng của các mối đe dọa mạng, chuyên ngành này đang có nhu cầu rất cao và mức lương hấp dẫn.',
    skills: [
      'Bảo mật mạng và tường lửa',
      'Kiểm thử xâm nhập và tin tặc có đạo đức',
      'Mật mã học và mã hóa dữ liệu',
      'Kiểm toán bảo mật hệ thống',
      'Phản ứng sự cố an ninh',
      'Khung tiêu chuẩn bảo mật (ISO 27001, NIST)'
    ],
    responsibilities: [
      'Đánh giá và phân tích rủi ro bảo mật',
      'Thiết lập và quản lý tường lửa',
      'Thực hiện kiểm thử xâm nhập',
      'Phản ứng và xử lý sự cố an ninh',
      'Đào tạo nhân viên về bảo mật thông tin'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '3-6 tháng',
        items: [
          'Kiến thức nền tảng về mạng (Giao thức TCP/IP, DNS, HTTP)',
          'Dòng lệnh Linux và lập trình kịch bản',
          'Cơ bản về mật mã học',
          'Chuẩn bị chứng chỉ Bảo mật+ hoặc Tin tặc Có đạo đức'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '6-12 tháng',
        items: [
          'Tin tặc có đạo đức và kiểm thử xâm nhập',
          'Bảo mật ứng dụng web (10 lỗ hổng hàng đầu OWASP)',
          'Bảo mật mạng và hệ thống phát hiện/ngăn chặn xâm nhập',
          'Công cụ đánh giá lỗ hổng bảo mật'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '12+ tháng',
        items: [
          'Kiểm thử xâm nhập nâng cao',
          'Phân tích phần mềm độc hại và kỹ thuật đảo ngược',
          'Bảo mật điện toán đám mây (AWS, Azure)',
          'Chứng chỉ bảo mật chuyên sâu (OSCP, CISSP)'
        ]
      }
    ],
    salary: {
      junior: '15-22 triệu',
      mid: '25-50 triệu',
      senior: '55-120 triệu'
    },
    companies: [
      'Viettel An ninh Mạng', 'FPT Bảo mật Thông tin',
      'BKAV', 'CMC An ninh Mạng', 'Ngân hàng (Vietcombank, BIDV)'
    ],
    tools: [
      'Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark',
      'Nmap', 'Nessus', 'Công cụ SIEM', 'Python'
    ],
    courses: [
      { title: 'Chứng chỉ Bảo mật CompTIA', provider: 'CompTIA', level: 'Cơ bản' },
      { title: 'Tin tặc Có đạo đức Được chứng nhận', provider: 'EC-Council', level: 'Trung cấp' },
      { title: 'Chuyên gia Bảo mật Tấn công Được chứng nhận', provider: 'Offensive Security', level: 'Nâng cao' }
    ]
  },
  'tri-tue-nhan-tao': {
    id: 'tri-tue-nhan-tao',
    title: 'Trí tuệ Nhân tạo',
    subtitle: 'Công nghệ tương lai',
    description: 'Phát triển các hệ thống học máy và học sâu',
    overview: 'Trí tuệ Nhân tạo là lĩnh vực nghiên cứu và phát triển các hệ thống máy tính có khả năng thực hiện các tác vụ đòi hỏi trí thông minh của con người. Trí tuệ nhân tạo đang là xu hướng nóng nhất với các ứng dụng như trò chuyện thông minh, xe tự lái, nhận diện khuôn mặt và nhiều lĩnh vực khác.',
    skills: [
      'Lập trình Python và thư viện học máy (TensorFlow, PyTorch)',
      'Thuật toán học máy',
      'Học sâu và mạng nơ-ron',
      'Xử lý ngôn ngữ tự nhiên',
      'Thị giác máy tính',
      'Toán học: Đại số tuyến tính, Vi tích phân, Thống kê'
    ],
    responsibilities: [
      'Nghiên cứu và phát triển mô hình trí tuệ nhân tạo',
      'Huấn luyện và tinh chỉnh các mô hình',
      'Xử lý và làm sạch dữ liệu',
      'Triển khai mô hình trí tuệ nhân tạo vào sản xuất',
      'Đánh giá và tối ưu hiệu suất mô hình'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '4-6 tháng',
        items: [
          'Lập trình Python',
          'Thư viện Numpy, Pandas, Matplotlib',
          'Đại số tuyến tính và Vi tích phân',
          'Cơ bản về học máy (Hồi quy, Phân loại)'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '8-12 tháng',
        items: [
          'Thuật toán học máy nâng cao',
          'Cơ bản về học sâu',
          'Thư viện TensorFlow/PyTorch',
          'Cơ bản về thị giác máy tính hoặc xử lý ngôn ngữ tự nhiên'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '12+ tháng',
        items: [
          'Mạng nơ-ron nâng cao (CNN, RNN, Transformer)',
          'Mô hình ngôn ngữ lớn',
          'Vận hành học máy và triển khai mô hình',
          'Nghiên cứu và xuất bản bài báo khoa học'
        ]
      }
    ],
    salary: {
      junior: '15-25 triệu',
      mid: '30-60 triệu',
      senior: '70-150+ triệu'
    },
    companies: [
      'VinAI', 'FPT AI', 'Zalo AI', 'VNG Trung tâm AI',
      'Google', 'Microsoft', 'Nvidia', 'Grab AI'
    ],
    tools: [
      'Python', 'TensorFlow', 'PyTorch', 'Keras',
      'Jupyter', 'Google Colab', 'Docker', 'MLflow'
    ],
    courses: [
      { title: 'Chuyên ngành Học Máy', provider: 'Andrew Ng (Coursera)', level: 'Cơ bản' },
      { title: 'Chuyên ngành Học Sâu', provider: 'deeplearning.ai', level: 'Trung cấp' },
      { title: 'Học Máy Nâng cao', provider: 'Fast.ai', level: 'Nâng cao' }
    ]
  },
  'khoa-hoc-du-lieu': {
    id: 'khoa-hoc-du-lieu',
    title: 'Khoa học Dữ liệu',
    subtitle: 'Khai thác giá trị từ dữ liệu',
    description: 'Phân tích và khai thác giá trị từ dữ liệu lớn',
    overview: 'Khoa học Dữ liệu kết hợp kỹ năng lập trình, thống kê và kiến thức kinh doanh để phân tích và khai thác thông tin từ dữ liệu lớn. Nhà khoa học dữ liệu giúp doanh nghiệp đưa ra quyết định dựa trên dữ liệu và tạo ra giá trị từ dữ liệu lớn.',
    skills: [
      'Lập trình Python/R',
      'Thống kê và Xác suất',
      'Trực quan hóa dữ liệu (Tableau, Power BI)',
      'Cơ sở dữ liệu quan hệ và phi quan hệ',
      'Học máy',
      'Công cụ dữ liệu lớn (Spark, Hadoop)'
    ],
    responsibilities: [
      'Thu thập và làm sạch dữ liệu',
      'Phân tích và khám phá dữ liệu',
      'Xây dựng mô hình dự đoán',
      'Tạo bảng điều khiển và báo cáo',
      'Tư vấn chiến lược dựa trên dữ liệu'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '3-6 tháng',
        items: [
          'Python và thư viện (Pandas, NumPy)',
          'Thống kê và Xác suất',
          'Ngôn ngữ truy vấn cho phân tích dữ liệu',
          'Trực quan hóa dữ liệu với Matplotlib/Seaborn'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '6-12 tháng',
        items: [
          'Ngôn ngữ truy vấn nâng cao và tối ưu hóa',
          'Thuật toán học máy',
          'Công cụ Tableau/Power BI',
          'Kiểm thử A/B và thử nghiệm'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '12+ tháng',
        items: [
          'Dữ liệu lớn với Spark',
          'Học máy nâng cao và học sâu',
          'Phân tích chuỗi thời gian',
          'Vận hành học máy và đường ống dữ liệu'
        ]
      }
    ],
    salary: {
      junior: '12-20 triệu',
      mid: '22-45 triệu',
      senior: '50-100 triệu'
    },
    companies: [
      'Shopee', 'Grab', 'Tiki', 'Lazada',
      'VNG', 'Momo', 'Ngân hàng', 'Công ty tư vấn'
    ],
    tools: [
      'Python', 'R', 'SQL', 'Tableau',
      'Power BI', 'Spark', 'Jupyter', 'Git'
    ],
    courses: [
      { title: 'Chuyên ngành Khoa học Dữ liệu', provider: 'Johns Hopkins (Coursera)', level: 'Cơ bản' },
      { title: 'Khoa học Dữ liệu Ứng dụng với Python', provider: 'IBM (Coursera)', level: 'Trung cấp' },
      { title: 'Khoa học Dữ liệu Nâng cao', provider: 'Harvard (edX)', level: 'Nâng cao' }
    ]
  },
  'web-development': {
    id: 'web-development',
    title: 'Phát triển Web',
    subtitle: 'Xây dựng website hiện đại',
    description: 'Xây dựng website và ứng dụng web hiện đại',
    overview: 'Phát triển Web là chuyên ngành phát triển các trang web và ứng dụng web, bao gồm cả giao diện người dùng (Frontend) và máy chủ, cơ sở dữ liệu (Backend). Đây là một trong những chuyên ngành có nhu cầu cao nhất với nhiều cơ hội việc làm.',
    skills: [
      'HTML, CSS, JavaScript',
      'Thư viện giao diện (React, Vue hoặc Angular)',
      'Lập trình máy chủ với Node.js và Express',
      'Giao diện lập trình ứng dụng RESTful và GraphQL',
      'Cơ sở dữ liệu (MongoDB, PostgreSQL)',
      'Thiết kế đáp ứng và trải nghiệm người dùng'
    ],
    responsibilities: [
      'Thiết kế và phát triển giao diện web',
      'Xây dựng giao diện lập trình ứng dụng phía máy chủ',
      'Tích hợp với cơ sở dữ liệu',
      'Tối ưu hiệu suất website',
      'Đảm bảo website đáp ứng và tương thích đa trình duyệt'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '2-4 tháng',
        items: [
          'HTML, CSS cơ bản',
          'Nền tảng JavaScript',
          'Hệ thống quản lý phiên bản Git và GitHub',
          'Thiết kế đáp ứng với Flexbox/Grid'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '4-8 tháng',
        items: [
          'Thư viện React hoặc Vue.js',
          'Lập trình máy chủ Node.js và Express',
          'Cơ sở dữ liệu MongoDB hoặc PostgreSQL',
          'Phát triển giao diện lập trình ứng dụng RESTful'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '8+ tháng',
        items: [
          'Khung làm việc Next.js hoặc Nuxt.js',
          'Ngôn ngữ TypeScript',
          'GraphQL',
          'Docker và triển khai (Vercel, AWS)'
        ]
      }
    ],
    salary: {
      junior: '10-16 triệu',
      mid: '18-35 triệu',
      senior: '40-80 triệu'
    },
    companies: [
      'Tiki', 'Shopee', 'Lazada', 'VNG',
      'FPT Software', 'Viettel', 'Hệ sinh thái Startup'
    ],
    tools: [
      'React', 'Node.js', 'TypeScript', 'Next.js',
      'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'VS Code'
    ],
    courses: [
      { title: 'Khóa học Toàn diện Lập trình Web', provider: 'Udemy', level: 'Cơ bản' },
      { title: 'Phát triển Full Stack Mở', provider: 'Đại học Helsinki', level: 'Trung cấp' },
      { title: 'Mẫu thiết kế React Nâng cao', provider: 'Frontend Masters', level: 'Nâng cao' }
    ]
  },
  'he-thong-thong-tin': {
    id: 'he-thong-thong-tin',
    title: 'Hệ thống Thông tin',
    subtitle: 'Cầu nối công nghệ và kinh doanh',
    description: 'Quản lý và phân tích dữ liệu phục vụ hoạt động kinh doanh',
    overview: 'Hệ thống Thông tin là chuyên ngành kết hợp giữa công nghệ và quản trị kinh doanh, tập trung vào việc xây dựng, triển khai và quản lý các hệ thống thông tin phục vụ cho hoạt động doanh nghiệp. Đây là lựa chọn lý tưởng cho những ai muốn làm cầu nối giữa công nghệ và kinh doanh.',
    skills: [
      'Phân tích và thiết kế hệ thống',
      'Quản trị cơ sở dữ liệu quan hệ và phi quan hệ',
      'Trí tuệ kinh doanh và phân tích dữ liệu',
      'Hệ thống hoạch định nguồn lực doanh nghiệp và quản lý quan hệ khách hàng (SAP, Oracle, Salesforce)',
      'Quản lý dự án và phương pháp linh hoạt',
      'Công cụ trực quan hóa (Tableau, Power BI)'
    ],
    responsibilities: [
      'Phân tích yêu cầu nghiệp vụ và thiết kế giải pháp',
      'Triển khai và tùy chỉnh hệ thống hoạch định nguồn lực và quản lý khách hàng',
      'Quản lý và phân tích dữ liệu doanh nghiệp',
      'Tối ưu hóa quy trình kinh doanh',
      'Tư vấn giải pháp công nghệ cho doanh nghiệp'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '3-6 tháng',
        items: [
          'Kiến thức kinh doanh và quản trị',
          'Ngôn ngữ truy vấn và nền tảng cơ sở dữ liệu',
          'Excel nâng cao và phân tích dữ liệu',
          'Quy trình phân tích nghiệp vụ'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '6-12 tháng',
        items: [
          'Công cụ trí tuệ kinh doanh (Power BI, Tableau)',
          'Hệ thống hoạch định nguồn lực doanh nghiệp (SAP, Oracle)',
          'Mô hình hóa dữ liệu và kho dữ liệu',
          'Cơ bản về quản lý dự án'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '12+ tháng',
        items: [
          'Kiến trúc doanh nghiệp',
          'Chiến lược chuyển đổi số',
          'Phân tích dữ liệu lớn',
          'Quản trị công nghệ thông tin và tuân thủ quy định'
        ]
      }
    ],
    salary: {
      junior: '10-18 triệu',
      mid: '20-40 triệu',
      senior: '45-90 triệu'
    },
    companies: [
      'Công ty tư vấn (Deloitte, PwC, KPMG)',
      'Ngân hàng (Vietcombank, Techcombank, VPBank)',
      'FPT Software', 'VNG', 'Viettel',
      'SAP Việt Nam', 'Oracle', 'Accenture'
    ],
    tools: [
      'SQL Server', 'Oracle DB', 'SAP', 'Salesforce',
      'Power BI', 'Tableau', 'Excel', 'Jira'
    ],
    courses: [
      { title: 'Nhập môn Hệ thống Thông tin', provider: 'MIT OpenCourseWare', level: 'Cơ bản' },
      { title: 'Trí tuệ Kinh doanh và Kho Dữ liệu', provider: 'Coursera', level: 'Trung cấp' },
      { title: 'Hệ thống Doanh nghiệp', provider: 'edX', level: 'Nâng cao' }
    ]
  },
  'mang-may-tinh': {
    id: 'mang-may-tinh',
    title: 'Mạng Máy tính',
    subtitle: 'Kết nối thế giới số',
    description: 'Thiết kế, triển khai và quản trị hệ thống mạng doanh nghiệp',
    overview: 'Mạng Máy tính là chuyên ngành chuyên sâu về thiết kế, triển khai, quản trị và bảo mật các hệ thống mạng. Từ mạng cục bộ nhỏ đến hệ thống mạng doanh nghiệp phức tạp, chuyên gia mạng đóng vai trò quan trọng trong việc đảm bảo kết nối và truyền thông dữ liệu.',
    skills: [
      'Giao thức mạng (TCP/IP, HTTP, DNS)',
      'Định tuyến và chuyển mạch (Cisco, Juniper)',
      'Bảo mật mạng và tường lửa',
      'Mạng không dây và mạng di động',
      'Mạng điện toán đám mây (AWS, Azure)',
      'Giám sát mạng và xử lý sự cố'
    ],
    responsibilities: [
      'Thiết kế và triển khai hạ tầng mạng',
      'Cấu hình bộ định tuyến, bộ chuyển mạch và tường lửa',
      'Giám sát và tối ưu hiệu suất mạng',
      'Xử lý sự cố mạng và khắc phục',
      'Đảm bảo an ninh và bảo mật mạng'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '3-6 tháng',
        items: [
          'Nền tảng về mạng và mô hình OSI',
          'Bộ giao thức TCP/IP',
          'Định tuyến và chuyển mạch cơ bản',
          'Cáp mạng và phần cứng'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '6-12 tháng',
        items: [
          'Chứng chỉ CCNA',
          'Mạng VLAN và định tuyến liên VLAN',
          'Giao thức định tuyến động (OSPF, EIGRP)',
          'Cơ bản về bảo mật mạng'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '12+ tháng',
        items: [
          'Chứng chỉ CCNP hoặc CCIE',
          'Mạng diện rộng được định nghĩa bằng phần mềm',
          'Mạng điện toán đám mây (AWS, Azure)',
          'Tự động hóa mạng với Python'
        ]
      }
    ],
    salary: {
      junior: '12-18 triệu',
      mid: '20-40 triệu',
      senior: '45-80 triệu'
    },
    companies: [
      'Viettel', 'VNPT', 'FPT Telecom',
      'Cisco Việt Nam', 'Juniper Networks',
      'CMC Telecom', 'SPT', 'Nhà cung cấp dịch vụ Internet'
    ],
    tools: [
      'Cisco Packet Tracer', 'Wireshark', 'GNS3',
      'SolarWinds', 'PRTG', 'Nagios', 'Python'
    ],
    courses: [
      { title: 'Mạng Máy tính', provider: 'Stanford Online', level: 'Cơ bản' },
      { title: 'CCNA 200-301', provider: 'Học viện Mạng Cisco', level: 'Trung cấp' },
      { title: 'Mạng Máy tính Nâng cao', provider: 'MIT OpenCourseWare', level: 'Nâng cao' }
    ]
  },
  'mobile-development': {
    id: 'mobile-development',
    title: 'Phát triển Di động',
    subtitle: 'Ứng dụng trong tầm tay',
    description: 'Phát triển ứng dụng di động cho iOS và Android',
    overview: 'Phát triển Di động là chuyên ngành tập trung vào việc xây dựng ứng dụng cho các thiết bị di động như điện thoại thông minh và máy tính bảng. Với hơn 6 tỷ người dùng điện thoại thông minh trên toàn cầu, đây là một trong những lĩnh vực có nhu cầu cao nhất trong ngành công nghệ thông tin.',
    skills: [
      'Phát triển ứng dụng gốc (Swift/Kotlin)',
      'Phát triển đa nền tảng (React Native, Flutter)',
      'Nguyên tắc thiết kế giao diện di động',
      'Tích hợp giao diện lập trình ứng dụng RESTful',
      'Cơ sở dữ liệu di động (SQLite, Realm)',
      'Tối ưu hóa hiệu suất ứng dụng'
    ],
    responsibilities: [
      'Phát triển ứng dụng iOS/Android',
      'Thiết kế giao diện di động đáp ứng',
      'Tích hợp với dịch vụ máy chủ và giao diện lập trình',
      'Tối ưu hiệu suất và sử dụng pin',
      'Kiểm thử và triển khai lên App Store/Play Store'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '3-6 tháng',
        items: [
          'Học ngôn ngữ: Swift (iOS) hoặc Kotlin (Android)',
          'Thành phần giao diện và bố cục di động',
          'Điều hướng ứng dụng cơ bản',
          'Lưu trữ cục bộ và duy trì dữ liệu'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '6-12 tháng',
        items: [
          'Phát triển đa nền tảng với React Native hoặc Flutter',
          'Tích hợp giao diện lập trình và kết nối mạng',
          'Quản lý trạng thái (Redux, Provider)',
          'Thông báo đẩy và tác vụ nền'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '12+ tháng',
        items: [
          'Hoạt ảnh và cử chỉ nâng cao',
          'Mô-đun gốc và mã dành riêng cho từng nền tảng',
          'Bảo mật ứng dụng và mã hóa',
          'Tích hợp/Triển khai liên tục và kiểm thử tự động'
        ]
      }
    ],
    salary: {
      junior: '12-20 triệu',
      mid: '22-45 triệu',
      senior: '50-100 triệu'
    },
    companies: [
      'Google', 'Apple', 'Grab', 'Shopee',
      'Zalo/VNG', 'Tiki', 'Momo', 'Be Group'
    ],
    tools: [
      'Xcode', 'Android Studio', 'React Native', 'Flutter',
      'Firebase', 'Postman', 'Git', 'Figma'
    ],
    courses: [
      { title: 'Phát triển iOS với Swift', provider: 'Stanford (iTunes U)', level: 'Cơ bản' },
      { title: 'Phát triển Android với Kotlin', provider: 'Google (Udacity)', level: 'Trung cấp' },
      { title: 'React Native - Hướng dẫn Thực hành', provider: 'Udemy', level: 'Nâng cao' }
    ]
  },
  'game-development': {
    id: 'game-development',
    title: 'Phát triển Game',
    subtitle: 'Sáng tạo trải nghiệm giải trí',
    description: 'Thiết kế và lập trình game 2D/3D chuyên nghiệp',
    overview: 'Phát triển Game là chuyên ngành sáng tạo và kỹ thuật, kết hợp lập trình, đồ họa, âm thanh và thiết kế để tạo ra các trò chơi điện tử. Ngành game toàn cầu đạt doanh thu hơn 200 tỷ USD mỗi năm, mở ra nhiều cơ hội nghề nghiệp hấp dẫn.',
    skills: [
      'Công cụ phát triển game (Unity, Unreal Engine)',
      'Lập trình (C#, C++)',
      'Thiết kế game và cơ chế trò chơi',
      'Mô hình hóa 3D và hoạt ảnh',
      'Vật lý và trí tuệ nhân tạo trong game',
      'Chế độ nhiều người chơi và kết nối mạng'
    ],
    responsibilities: [
      'Thiết kế lối chơi và cơ chế trò chơi',
      'Lập trình logic và hệ thống game',
      'Tạo và tối ưu đồ họa 3D/2D',
      'Triển khai trí tuệ nhân tạo cho nhân vật không người chơi',
      'Kiểm thử và sửa lỗi'
    ],
    roadmap: [
      {
        phase: 'Cơ bản',
        duration: '3-6 tháng',
        items: [
          'Học Unity hoặc Unreal Engine',
          'C# (Unity) hoặc C++ (Unreal)',
          'Nền tảng thiết kế game',
          'Tạo game 2D đơn giản'
        ]
      },
      {
        phase: 'Trung cấp',
        duration: '6-12 tháng',
        items: [
          'Game 3D và cơ bản về mô hình hóa 3D',
          'Vật lý và va chạm trong game',
          'Trí tuệ nhân tạo và tìm đường',
          'Hoạt ảnh và hệ thống hạt'
        ]
      },
      {
        phase: 'Nâng cao',
        duration: '12+ tháng',
        items: [
          'Lập trình đồ họa nâng cao',
          'Chế độ nhiều người chơi và kết nối mạng',
          'Tối ưu hóa game và hiệu suất',
          'Xuất bản lên Steam/cửa hàng di động'
        ]
      }
    ],
    salary: {
      junior: '10-18 triệu',
      mid: '20-40 triệu',
      senior: '45-90 triệu'
    },
    companies: [
      'VNG (Zing Game)', 'Gameloft Việt Nam',
      'Amanotes', 'Sky Mavis (Axie Infinity)',
      'Ubisoft Việt Nam', 'EA Việt Nam', 'Riot Games'
    ],
    tools: [
      'Unity', 'Unreal Engine', 'Blender', 'Maya',
      'Photoshop', 'Visual Studio', 'Git', 'Perforce'
    ],
    courses: [
      { title: 'Lập trình Game Unity với C# - 2D', provider: 'Udemy', level: 'Cơ bản' },
      { title: 'Lập trình Unreal Engine với C++', provider: 'Udemy', level: 'Trung cấp' },
      { title: 'Thiết kế và Phát triển Game', provider: 'MIT OpenCourseWare', level: 'Nâng cao' }
    ]
  }
};
