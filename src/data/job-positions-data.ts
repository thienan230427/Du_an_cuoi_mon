export interface JobPositionData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  imageUrl: string;
  salary: {
    junior: string;
    mid: string;
    senior: string;
  };
  skills: string[];
  responsibilities: string[];
  requirements: {
    education: string[];
    experience: string[];
    technical: string[];
    soft: string[];
  };
  careerPath: {
    level: string;
    duration: string;
    description: string;
  }[];
  tools: string[];
  companies: string[];
  benefits: string[];
  challenges: string[];
}

export const jobPositionsData: { [key: string]: JobPositionData } = {
  'lap-trinh-vien': {
    id: 'lap-trinh-vien',
    title: 'Lập trình viên',
    subtitle: 'Nhà phát triển phần mềm',
    description: 'Phát triển ứng dụng và website cho doanh nghiệp, startup và các dự án công nghệ',
    imageUrl: 'https://images.unsplash.com/photo-1752170080622-18196de87763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3JraW5nfGVufDF8fHx8MTc2NDY1NTg2MHww&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'Lập trình viên là vị trí cốt lõi trong ngành công nghệ thông tin, chịu trách nhiệm thiết kế, phát triển và bảo trì các ứng dụng phần mềm. Bạn sẽ làm việc với nhiều ngôn ngữ lập trình và khung làm việc khác nhau, từ phát triển web (React, Vue, Angular) đến di động (React Native, Flutter) và máy chủ (Node.js, Java, Python).',
    salary: {
      junior: '10-16 triệu',
      mid: '18-35 triệu',
      senior: '40-80 triệu'
    },
    skills: [
      'Thành thạo ít nhất 1 ngôn ngữ lập trình (JavaScript, Python, Java, C#)',
      'Hiểu biết về lập trình hướng đối tượng và mẫu thiết kế',
      'Kinh nghiệm với khung làm việc (React, Vue, Angular, Spring Boot)',
      'Quản lý phiên bản với Git',
      'Cơ sở dữ liệu (quan hệ và phi quan hệ)',
      'Giao diện lập trình ứng dụng RESTful và GraphQL',
      'Thiết kế đáp ứng và cơ bản về trải nghiệm người dùng',
      'Kiểm thử và gỡ lỗi'
    ],
    responsibilities: [
      'Phân tích yêu cầu và thiết kế giải pháp kỹ thuật',
      'Viết mã nguồn sạch, dễ bảo trì và có tài liệu đầy đủ',
      'Phát triển và tích hợp giao diện lập trình ứng dụng',
      'Tham gia đánh giá mã nguồn và lập trình cặp',
      'Viết kiểm thử đơn vị và kiểm thử tích hợp',
      'Gỡ lỗi và sửa lỗi',
      'Tối ưu hiệu suất ứng dụng',
      'Hợp tác với nhóm (Thiết kế, Kiểm thử, Quản lý sản phẩm)',
      'Triển khai và giám sát hệ thống sản xuất',
      'Nghiên cứu và áp dụng công nghệ mới'
    ],
    requirements: {
      education: [
        'Tốt nghiệp Đại học/Cao đẳng chuyên ngành CNTT hoặc liên quan',
        'Hoặc có khóa học chuyên sâu về lập trình',
        'Chứng chỉ về lập trình (tuỳ chọn nhưng là lợi thế)'
      ],
      experience: [
        'Cấp độ mới: 0-1 năm, có dự án cá nhân hoặc thực tập',
        'Cấp độ trung: 2-4 năm kinh nghiệm thực tế',
        'Cấp độ cao: 5+ năm, đã dẫn dắt nhóm hoặc dự án lớn'
      ],
      technical: [
        'Nắm vững ngôn ngữ lập trình chính (JavaScript, Python, Java...)',
        'Khung làm việc hiện đại (React, Vue, Spring Boot...)',
        'Thiết kế cơ sở dữ liệu và ngôn ngữ truy vấn',
        'Git và tích hợp/triển khai liên tục',
        'Nền tảng điện toán đám mây (AWS, Azure, GCP) - tuỳ vị trí'
      ],
      soft: [
        'Kỹ năng giải quyết vấn đề và tư duy logic',
        'Làm việc nhóm hiệu quả',
        'Giao tiếp tốt (tiếng Anh là lợi thế)',
        'Tự học và cập nhật công nghệ mới',
        'Quản lý thời gian'
      ]
    },
    careerPath: [
      {
        level: 'Lập trình viên Mới',
        duration: '0-2 năm',
        description: 'Học hỏi mã nguồn dự án, làm việc dưới sự hướng dẫn của lập trình viên cao cấp, hoàn thành các nhiệm vụ đơn giản'
      },
      {
        level: 'Lập trình viên Trung cấp',
        duration: '2-4 năm',
        description: 'Làm việc độc lập, xử lý tính năng từ đầu đến cuối, hướng dẫn lập trình viên mới, tham gia quyết định kỹ thuật'
      },
      {
        level: 'Lập trình viên Cao cấp',
        duration: '4-7 năm',
        description: 'Dẫn dắt kỹ thuật, thiết kế kiến trúc, đánh giá mã nguồn, hướng dẫn nhóm, xử lý vấn đề phức tạp'
      },
      {
        level: 'Trưởng Nhóm Kỹ thuật',
        duration: '7+ năm',
        description: 'Quản lý nhóm, ra quyết định kỹ thuật quan trọng, phối hợp với các bên liên quan'
      },
      {
        level: 'Kỹ sư Chính / Kiến trúc sư',
        duration: '10+ năm',
        description: 'Thiết kế hệ thống quy mô lớn, định hướng công nghệ cho công ty, hướng dẫn các lãnh đạo'
      }
    ],
    tools: [
      'VS Code', 'IntelliJ IDEA', 'Git/GitHub', 'Docker',
      'Postman', 'Jest/Mocha', 'Chrome DevTools', 'Figma'
    ],
    companies: [
      'FPT Software', 'VNG', 'Tiki', 'Shopee',
      'Grab', 'Momo', 'ZaloPay', 'VinID',
      'TMA Solutions', 'KMS Technology', 'Gameloft', 'Ubisoft'
    ],
    benefits: [
      'Mức lương hấp dẫn và tăng nhanh theo năng lực',
      'Làm việc với công nghệ mới nhất',
      'Cơ hội làm việc từ xa/lai ghép',
      'Môi trường năng động, sáng tạo',
      'Được đào tạo và nâng cao kỹ năng liên tục',
      'Thăng tiến rõ ràng'
    ],
    challenges: [
      'Phải học liên tục do công nghệ thay đổi nhanh',
      'Thời hạn và áp lực cao vào một số thời điểm',
      'Cần ngồi nhiều trước máy tính',
      'Đôi khi phải trực hoặc làm ngoài giờ'
    ]
  },
  'chuyen-vien-an-ninh-mang': {
    id: 'chuyen-vien-an-ninh-mang',
    title: 'Chuyên viên An ninh mạng',
    subtitle: 'Chuyên gia Bảo mật Thông tin',
    description: 'Bảo vệ hệ thống, phát hiện và ngăn chặn các mối đe dọa an ninh thông tin',
    imageUrl: 'https://images.unsplash.com/photo-1760199789463-b523db55dd8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2VyJTIwZGlnaXRhbHxlbnwxfHx8fDE3NjQ2NTUwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'Chuyên viên An ninh mạng đóng vai trò quan trọng trong việc bảo vệ hệ thống, dữ liệu và mạng lưới của tổ chức khỏi các cuộc tấn công mạng. Với sự gia tăng của tội phạm mạng, đây là một trong những vị trí có nhu cầu cao nhất và mức lương hấp dẫn nhất trong ngành công nghệ thông tin.',
    salary: {
      junior: '15-22 triệu',
      mid: '25-50 triệu',
      senior: '55-120 triệu'
    },
    skills: [
      'Bảo mật mạng và cấu hình tường lửa',
      'Kiểm thử xâm nhập và tin tặc có đạo đức',
      'Khung tiêu chuẩn bảo mật (ISO 27001, NIST)',
      'Mật mã học và mã hóa dữ liệu',
      'Công cụ quản lý sự kiện và thông tin bảo mật (Splunk, QRadar)',
      'Đánh giá lỗ hổng bảo mật',
      'Phản ứng sự cố và điều tra số',
      'Tuân thủ và kiểm toán bảo mật',
      'Lập trình kịch bản (Python, Bash, PowerShell)',
      'Bảo mật điện toán đám mây (AWS, Azure)'
    ],
    responsibilities: [
      'Đánh giá và phân tích rủi ro bảo mật',
      'Thiết lập và quản lý hệ thống bảo mật (Tường lửa, Phát hiện/Ngăn chặn xâm nhập)',
      'Thực hiện kiểm thử xâm nhập định kỳ',
      'Giám sát và phát hiện các mối đe dọa',
      'Phản ứng nhanh với sự cố bảo mật',
      'Điều tra và phân tích các vụ tấn công',
      'Tư vấn và đào tạo nhân viên về bảo mật',
      'Cập nhật các bản vá và nâng cấp bảo mật',
      'Xây dựng chính sách và quy trình bảo mật',
      'Tuân thủ các chuẩn bảo mật'
    ],
    requirements: {
      education: [
        'Tốt nghiệp Đại học chuyên ngành CNTT, An ninh mạng',
        'Chứng chỉ Bảo mật+ / Tin tặc Có đạo đức / OSCP (rất quan trọng)',
        'Chứng chỉ CISSP cho vị trí cao cấp'
      ],
      experience: [
        'Cấp độ mới: 1-2 năm, có kinh nghiệm với công cụ bảo mật',
        'Cấp độ trung: 3-5 năm, đã xử lý sự cố bảo mật',
        'Cấp độ cao: 6+ năm, chuyên gia trong lĩnh vực cụ thể'
      ],
      technical: [
        'Bảo mật Linux/Windows',
        'Mạng máy tính (TCP/IP, định tuyến, chuyển mạch)',
        'Công cụ bảo mật (Metasploit, Burp Suite, Nmap)',
        'Lập trình kịch bản và tự động hóa',
        'Nền tảng thông tin tình báo về mối đe dọa'
      ],
      soft: [
        'Tư duy phân tích và logic cao',
        'Khả năng làm việc dưới áp lực',
        'Chú ý đến chi tiết',
        'Kỹ năng giao tiếp tốt',
        'Đạo đức và chuyên nghiệp'
      ]
    },
    careerPath: [
      {
        level: 'Chuyên viên Phân tích Bảo mật Mới',
        duration: '0-2 năm',
        description: 'Giám sát cảnh báo bảo mật, hỗ trợ xử lý sự cố, học các công cụ và quy trình bảo mật'
      },
      {
        level: 'Chuyên viên Phân tích Bảo mật',
        duration: '2-4 năm',
        description: 'Độc lập phân tích mối đe dọa, thực hiện quét lỗ hổng, phản ứng sự cố'
      },
      {
        level: 'Kỹ sư Bảo mật Cao cấp',
        duration: '4-7 năm',
        description: 'Thiết kế kiến trúc bảo mật, dẫn dắt kiểm thử xâm nhập, chiến lược bảo mật'
      },
      {
        level: 'Quản lý Bảo mật / Giám đốc Bảo mật Thông tin',
        duration: '7+ năm',
        description: 'Quản lý nhóm bảo mật, quản trị bảo mật, quản lý rủi ro, tuân thủ'
      }
    ],
    tools: [
      'Kali Linux', 'Metasploit', 'Burp Suite', 'Wireshark',
      'Nmap', 'Nessus', 'Splunk', 'Snort',
      'OSSEC', 'John the Ripper', 'Aircrack-ng'
    ],
    companies: [
      'Viettel An ninh Mạng', 'FPT Bảo mật Thông tin',
      'BKAV', 'CMC An ninh Mạng', 'Ngân hàng (Vietcombank, BIDV)',
      'VNG Security', 'Shopee Security', 'Grab Security'
    ],
    benefits: [
      'Mức lương cao nhất trong ngành công nghệ thông tin',
      'Công việc thú vị, đầy thử thách',
      'Được đào tạo liên tục về công nghệ mới',
      'Cơ hội làm việc với các tổ chức lớn',
      'Bảo mật là lĩnh vực nóng nhất hiện nay',
      'Cơ hội làm việc từ xa'
    ],
    challenges: [
      'Phải trực 24/7 để xử lý sự cố',
      'Áp lực cao, trách nhiệm lớn',
      'Phải cập nhật liên tục về mối đe dọa mới',
      'Cần nhiều chứng chỉ tốn kém',
      'Căng thẳng cao khi xảy ra vi phạm bảo mật'
    ]
  },
  'quan-tri-he-thong': {
    id: 'quan-tri-he-thong',
    title: 'Quản trị Hệ thống',
    subtitle: 'Quản trị viên Hệ thống',
    description: 'Quản lý máy chủ, hệ thống mạng và đảm bảo hoạt động ổn định 24/7',
    imageUrl: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjByb29tJTIwZGF0YSUyMGNlbnRlcnxlbnwxfHx8fDE3NjQ2NDIzOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'Quản trị Hệ thống chịu trách nhiệm duy trì, cấu hình và vận hành hạ tầng công nghệ thông tin của tổ chức. Bạn sẽ quản lý máy chủ, mạng, lưu trữ và đảm bảo hệ thống hoạt động ổn định, an toàn và hiệu quả. Vai trò quan trọng để hoạt động kinh doanh diễn ra suôn sẻ.',
    salary: {
      junior: '12-18 triệu',
      mid: '20-35 triệu',
      senior: '40-70 triệu'
    },
    skills: [
      'Quản trị máy chủ Linux/Windows',
      'Mạng máy tính (TCP/IP, DNS, DHCP, VPN)',
      'Ảo hóa (VMware, Hyper-V)',
      'Nền tảng điện toán đám mây (AWS, Azure, GCP)',
      'Lập trình kịch bản (Bash, PowerShell, Python)',
      'Công cụ giám sát (Nagios, Zabbix, Prometheus)',
      'Sao lưu và khôi phục sau thảm họa',
      'Tăng cường bảo mật hệ thống',
      'Dịch vụ thư mục hoạt động',
      'Container (Docker, Kubernetes)'
    ],
    responsibilities: [
      'Cài đặt, cấu hình và bảo trì máy chủ',
      'Quản lý tài khoản người dùng và quyền truy cập',
      'Giám sát hiệu suất hệ thống',
      'Sao lưu và khôi phục dữ liệu',
      'Khắc phục và giải quyết sự cố',
      'Cập nhật và vá hệ thống',
      'Quản lý cơ sở hạ tầng mạng',
      'Triển khai các biện pháp bảo mật',
      'Tạo tài liệu hướng dẫn',
      'Hỗ trợ người dùng về vấn đề kỹ thuật'
    ],
    requirements: {
      education: [
        'Tốt nghiệp Đại học/Cao đẳng CNTT',
        'Chứng chỉ: RHCSA, MCSA, AWS SysOps',
        'CompTIA A+, Network+ là lợi thế'
      ],
      experience: [
        'Cấp độ mới: 0-2 năm, có kinh nghiệm với Linux/Windows',
        'Cấp độ trung: 2-5 năm quản trị hệ thống',
        'Cấp độ cao: 5+ năm, chuyên gia về hạ tầng'
      ],
      technical: [
        'Thành thạo Linux và Windows Server',
        'Kiến thức nền tảng về mạng',
        'Lập trình kịch bản để tự động hóa',
        'Hạ tầng điện toán đám mây',
        'Thực hành tốt nhất về bảo mật'
      ],
      soft: [
        'Khả năng khắc phục sự cố tốt',
        'Làm việc độc lập',
        'Sẵn sàng trực',
        'Kỹ năng viết tài liệu',
        'Tư duy phục vụ khách hàng'
      ]
    },
    careerPath: [
      {
        level: 'Quản trị viên Hệ thống Mới',
        duration: '0-2 năm',
        description: 'Hỗ trợ quản trị viên cao cấp, học cách quản lý máy chủ, xử lý nhiệm vụ cơ bản'
      },
      {
        level: 'Quản trị viên Hệ thống',
        duration: '2-5 năm',
        description: 'Quản lý hạ tầng độc lập, triển khai giải pháp, tự động hóa'
      },
      {
        level: 'Quản trị viên Hệ thống Cao cấp / Vận hành Phát triển',
        duration: '5-8 năm',
        description: 'Thiết kế hạ tầng, dẫn dắt dự án, hướng dẫn người mới, tích hợp/triển khai liên tục'
      },
      {
        level: 'Quản lý Hạ tầng',
        duration: '8+ năm',
        description: 'Quản lý nhóm hạ tầng công nghệ thông tin, chiến lược, lập ngân sách'
      }
    ],
    tools: [
      'Linux (Ubuntu, CentOS, RHEL)', 'Windows Server',
      'VMware', 'Docker', 'Ansible', 'Terraform',
      'Nagios', 'Grafana', 'Git', 'SSH'
    ],
    companies: [
      'FPT', 'Viettel', 'VNPT', 'CMC',
      'Ngân hàng', 'Nhà mạng viễn thông', 'Doanh nghiệp lớn',
      'Nhà cung cấp hosting', 'Dịch vụ đám mây'
    ],
    benefits: [
      'Công việc ổn định',
      'Kiến thức sâu về hạ tầng',
      'Nhu cầu cao ở mọi ngành',
      'Có thể làm việc từ xa một phần',
      'Học được nhiều về hệ thống và mạng'
    ],
    challenges: [
      'Phải trực để xử lý khẩn cấp',
      'Làm việc ngoài giờ khi có sự cố',
      'Căng thẳng khi hệ thống ngừng hoạt động',
      'Phải cập nhật liên tục về công nghệ mới'
    ]
  },
  'data-analyst': {
    id: 'data-analyst',
    title: 'Chuyên viên Phân tích Dữ liệu',
    subtitle: 'Kỹ sư Dữ liệu',
    description: 'Phân tích và khai thác thông tin từ dữ liệu lớn để hỗ trợ quyết định kinh doanh',
    imageUrl: 'https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBjaGFydHMlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY0NjU1MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'Chuyên viên Phân tích Dữ liệu giúp doanh nghiệp hiểu rõ dữ liệu, tìm ra thông tin chi tiết và đưa ra quyết định dựa trên dữ liệu. Bạn sẽ làm việc với ngôn ngữ truy vấn, Python, công cụ trực quan hóa để phân tích dữ liệu, xây dựng bảng điều khiển và báo cáo. Vai trò ngày càng quan trọng trong kỷ nguyên dữ liệu lớn.',
    salary: {
      junior: '12-20 triệu',
      mid: '22-45 triệu',
      senior: '50-100 triệu'
    },
    skills: [
      'Ngôn ngữ truy vấn và truy vấn cơ sở dữ liệu',
      'Python (Pandas, NumPy, Matplotlib)',
      'Trực quan hóa dữ liệu (Tableau, Power BI)',
      'Thống kê và xác suất',
      'Excel nâng cao',
      'Quy trình trích xuất, chuyển đổi, tải',
      'Công cụ dữ liệu lớn (Spark, Hadoop)',
      'Cơ bản về học máy',
      'Trí tuệ kinh doanh',
      'Mô hình hóa dữ liệu'
    ],
    responsibilities: [
      'Thu thập và làm sạch dữ liệu',
      'Phân tích dữ liệu và tìm thông tin chi tiết',
      'Tạo bảng điều khiển và báo cáo',
      'Kiểm thử A/B và thử nghiệm',
      'Xây dựng đường ống dữ liệu',
      'Hợp tác với các nhóm kinh doanh',
      'Trình bày kết quả cho các bên liên quan',
      'Tối ưu truy vấn cơ sở dữ liệu',
      'Duy trì chất lượng dữ liệu',
      'Tự động hóa quy trình báo cáo'
    ],
    requirements: {
      education: [
        'Tốt nghiệp Đại học CNTT, Toán, Thống kê, Kinh tế',
        'Khóa học về Khoa học Dữ liệu, Phân tích',
        'Chứng chỉ: Google Data Analytics, Tableau'
      ],
      experience: [
        'Cấp độ mới: 0-2 năm, biết ngôn ngữ truy vấn và Excel',
        'Cấp độ trung: 2-4 năm, chuyên gia về công cụ dữ liệu',
        'Cấp độ cao: 5+ năm, kiến thức lĩnh vực kinh doanh'
      ],
      technical: [
        'Thành thạo ngôn ngữ truy vấn',
        'Python hoặc R',
        'Công cụ trực quan hóa',
        'Kiến thức nền tảng về thống kê',
        'Trích xuất, chuyển đổi, tải và kho dữ liệu'
      ],
      soft: [
        'Tư duy phân tích',
        'Hiểu biết kinh doanh',
        'Kỹ năng giao tiếp',
        'Chú ý đến chi tiết',
        'Giải quyết vấn đề'
      ]
    },
    careerPath: [
      {
        level: 'Chuyên viên Phân tích Dữ liệu Mới',
        duration: '0-2 năm',
        description: 'Truy vấn dữ liệu, tạo báo cáo cơ bản, học lĩnh vực kinh doanh'
      },
      {
        level: 'Chuyên viên Phân tích Dữ liệu',
        duration: '2-4 năm',
        description: 'Phân tích phức tạp, xây dựng bảng điều khiển, thông tin chi tiết cho kinh doanh'
      },
      {
        level: 'Chuyên viên Phân tích Dữ liệu Cao cấp / Kỹ sư Dữ liệu',
        duration: '4-7 năm',
        description: 'Thiết kế kiến trúc dữ liệu, dẫn dắt dự án, hướng dẫn nhóm'
      },
      {
        level: 'Quản lý Khoa học Dữ liệu / Trưởng Phân tích',
        duration: '7+ năm',
        description: 'Quản lý nhóm dữ liệu, chiến lược, thúc đẩy văn hóa dữ liệu'
      }
    ],
    tools: [
      'SQL (PostgreSQL, MySQL)', 'Python', 'Tableau',
      'Power BI', 'Excel', 'Jupyter', 'Apache Spark',
      'Git', 'Airflow', 'DBT'
    ],
    companies: [
      'Shopee', 'Grab', 'Tiki', 'Lazada',
      'Momo', 'VNG', 'Ngân hàng', 'Tập đoàn lớn',
      'Công ty tư vấn', 'Thương mại điện tử'
    ],
    benefits: [
      'Mức lương hấp dẫn và tăng nhanh',
      'Làm việc với nhiều phòng ban',
      'Tác động trực tiếp đến quyết định kinh doanh',
      'Học được về kinh doanh và dữ liệu',
      'Thân thiện với làm việc từ xa',
      'Nhu cầu cao ở mọi ngành'
    ],
    challenges: [
      'Dữ liệu thường lộn xộn và cần làm sạch nhiều',
      'Phải hiểu cả kỹ thuật lẫn kinh doanh',
      'Đôi khi các bên liên quan không hiểu dữ liệu',
      'Thời hạn chặt chẽ cho báo cáo'
    ]
  },
  'network-engineer': {
    id: 'network-engineer',
    title: 'Kỹ sư Mạng',
    subtitle: 'Chuyên gia Hệ thống Mạng',
    description: 'Thiết kế, triển khai và bảo trì hạ tầng mạng cho tổ chức lớn',
    imageUrl: 'https://images.unsplash.com/photo-1563884705074-7c8b15f16295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY2FibGVzJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzY0NjU1MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'Kỹ sư Mạng chịu trách nhiệm thiết kế, triển khai và bảo trì hạ tầng mạng của tổ chức. Bạn sẽ làm việc với bộ định tuyến, bộ chuyển mạch, tường lửa, mạng riêng ảo và đảm bảo mạng hoạt động ổn định, nhanh chóng và an toàn. Vai trò quan trọng cho mọi doanh nghiệp có hạ tầng công nghệ thông tin.',
    salary: {
      junior: '13-20 triệu',
      mid: '22-40 triệu',
      senior: '45-80 triệu'
    },
    skills: [
      'Kiến thức nền tảng về mạng (TCP/IP, mô hình OSI)',
      'Giao thức định tuyến (OSPF, BGP, EIGRP)',
      'Chuyển mạch và mạng VLAN',
      'Bảo mật mạng (Tường lửa, VPN, ACL)',
      'Thiết bị Cisco, Juniper, Fortinet',
      'Mạng không dây',
      'Công cụ giám sát mạng',
      'Khắc phục sự cố',
      'Mạng diện rộng được định nghĩa bằng phần mềm',
      'Tự động hóa mạng (Python, Ansible)'
    ],
    responsibilities: [
      'Thiết kế cấu trúc liên kết mạng',
      'Cấu hình bộ định tuyến, bộ chuyển mạch, tường lửa',
      'Triển khai và bảo trì mạng riêng ảo',
      'Giám sát hiệu suất mạng',
      'Khắc phục sự cố mạng',
      'Triển khai chính sách bảo mật',
      'Tối ưu lưu lượng mạng',
      'Lập kế hoạch năng lực',
      'Viết tài liệu hướng dẫn',
      'Quản lý nhà cung cấp'
    ],
    requirements: {
      education: [
        'Tốt nghiệp Đại học CNTT, Điện tử Viễn thông',
        'Chứng chỉ CCNA (bắt buộc)',
        'CCNP, JNCIA cho vị trí cao cấp'
      ],
      experience: [
        'Cấp độ mới: 0-2 năm, có chứng chỉ CCNA',
        'Cấp độ trung: 2-5 năm kinh nghiệm thực tế',
        'Cấp độ cao: 5+ năm, CCNP hoặc tương đương'
      ],
      technical: [
        'Cấu hình Cisco/Juniper',
        'Định tuyến và chuyển mạch',
        'Bảo mật mạng',
        'Công nghệ không dây',
        'Công cụ giám sát'
      ],
      soft: [
        'Kỹ năng khắc phục sự cố mạnh',
        'Làm việc dưới áp lực',
        'Chú ý đến chi tiết',
        'Viết tài liệu',
        'Giao tiếp'
      ]
    },
    careerPath: [
      {
        level: 'Kỹ sư Mạng Mới',
        duration: '0-2 năm',
        description: 'Hỗ trợ cấu hình, giám sát mạng, học giao thức và thiết bị'
      },
      {
        level: 'Kỹ sư Mạng',
        duration: '2-5 năm',
        description: 'Thiết kế và triển khai mạng, khắc phục sự cố phức tạp'
      },
      {
        level: 'Kỹ sư Mạng Cao cấp',
        duration: '5-8 năm',
        description: 'Dẫn dắt dự án mạng, thiết kế kiến trúc, hướng dẫn người mới'
      },
      {
        level: 'Kiến trúc sư Mạng / Quản lý',
        duration: '8+ năm',
        description: 'Lập kế hoạch mạng chiến lược, quản lý nhóm, giải pháp doanh nghiệp'
      }
    ],
    tools: [
      'Cisco IOS', 'Wireshark', 'SolarWinds', 'PRTG',
      'GNS3', 'Packet Tracer', 'Nagios', 'Ansible',
      'Python', 'Putty/SecureCRT'
    ],
    companies: [
      'Viettel', 'VNPT', 'FPT Telecom', 'CMC',
      'Ngân hàng', 'Nhà cung cấp dịch vụ Internet', 'Doanh nghiệp lớn',
      'Công ty tư vấn', 'Trung tâm dữ liệu'
    ],
    benefits: [
      'Công việc ổn định',
      'Nhu cầu cao',
      'Kiến thức sâu về mạng',
      'Chứng chỉ có giá trị cao',
      'Cơ hội làm cho nhà mạng, viễn thông lớn'
    ],
    challenges: [
      'Phải trực 24/7',
      'Mạng ngừng = kinh doanh ngừng',
      'Áp lực cao khi có sự cố ngừng',
      'Chứng chỉ đắt và cần gia hạn'
    ]
  },
  'technical-support': {
    id: 'technical-support',
    title: 'Hỗ trợ Kỹ thuật',
    subtitle: 'Chuyên viên Hỗ trợ Công nghệ',
    description: 'Giải quyết vấn đề kỹ thuật và hỗ trợ người dùng sử dụng sản phẩm công nghệ',
    imageUrl: 'https://images.unsplash.com/photo-1741392078186-35518e238f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMHN1cHBvcnQlMjB0ZWNobmljaWFuJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzY0NjU1NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'Hỗ trợ Kỹ thuật là vị trí đầu vào tuyệt vời cho người mới vào ngành công nghệ thông tin. Bạn sẽ hỗ trợ khách hàng hoặc nhân viên nội bộ giải quyết các vấn đề kỹ thuật, từ phần cứng, phần mềm đến mạng. Đây là cơ hội học hỏi nhiều về công nghệ và phát triển lên các vị trí cao hơn.',
    salary: {
      junior: '8-13 triệu',
      mid: '14-22 triệu',
      senior: '25-40 triệu'
    },
    skills: [
      'Khắc phục sự cố phần cứng máy tính',
      'Cơ bản về Windows/MacOS/Linux',
      'Kiến thức nền tảng về mạng',
      'Cài đặt và cấu hình phần mềm',
      'Công cụ hỗ trợ từ xa',
      'Hệ thống quản lý yêu cầu hỗ trợ',
      'Dịch vụ thư mục hoạt động',
      'Dịch vụ khách hàng',
      'Kỹ năng giao tiếp',
      'Viết tài liệu'
    ],
    responsibilities: [
      'Trả lời yêu cầu hỗ trợ qua điện thoại/email/chat',
      'Khắc phục sự cố phần cứng và phần mềm',
      'Hỗ trợ từ xa qua máy tính',
      'Cài đặt và cấu hình phần mềm',
      'Thiết lập và duy trì tài khoản người dùng',
      'Tạo và cập nhật yêu cầu hỗ trợ',
      'Ghi chép giải pháp',
      'Đào tạo người dùng về hệ thống',
      'Chuyển tiếp vấn đề phức tạp',
      'Duy trì cơ sở kiến thức'
    ],
    requirements: {
      education: [
        'Tốt nghiệp Đại học/Cao đẳng CNTT (hoặc đang học)',
        'Chứng chỉ CompTIA A+ là lợi thế',
        'ITIL Foundation cho vị trí cao cấp'
      ],
      experience: [
        'Cấp độ mới: Cấp độ đầu vào, có khả năng khắc phục sự cố',
        'Cấp độ trung: 1-3 năm kinh nghiệm hỗ trợ',
        'Cấp độ cao: 3+ năm, xử lý vấn đề phức tạp'
      ],
      technical: [
        'Khắc phục sự cố Windows/Mac',
        'Mạng cơ bản',
        'Cài đặt phần mềm',
        'Công cụ hỗ trợ từ xa',
        'Office 365, Google Workspace'
      ],
      soft: [
        'Kiên nhẫn và đồng cảm',
        'Kỹ năng giao tiếp xuất sắc',
        'Giải quyết vấn đề',
        'Tư duy phục vụ khách hàng',
        'Làm nhiều việc cùng lúc'
      ]
    },
    careerPath: [
      {
        level: 'Bàn Trợ giúp / Hỗ trợ Cấp 1',
        duration: '0-2 năm',
        description: 'Xử lý yêu cầu hỗ trợ cơ bản, học khắc phục sự cố, quản lý yêu cầu'
      },
      {
        level: 'Chuyên viên Hỗ trợ Kỹ thuật / Cấp 2',
        duration: '2-4 năm',
        description: 'Xử lý vấn đề phức tạp, hỗ trợ từ xa, đào tạo cấp 1, viết tài liệu'
      },
      {
        level: 'Kỹ sư Hỗ trợ Cao cấp / Cấp 3',
        duration: '4-6 năm',
        description: 'Khắc phục sự cố chuyên sâu, làm việc dự án, hướng dẫn nhóm'
      },
      {
        level: 'Quản lý Hỗ trợ / Quản trị Hệ thống',
        duration: '6+ năm',
        description: 'Quản lý nhóm hỗ trợ hoặc chuyển sang Quản trị Hệ thống, Vận hành Phát triển'
      }
    ],
    tools: [
      'TeamViewer', 'AnyDesk', 'Zendesk', 'Jira Service Desk',
      'Remote Desktop', 'Active Directory', 'Office 365',
      'Slack', 'Microsoft Teams'
    ],
    companies: [
      'Công ty công nghệ', 'Ngân hàng', 'Doanh nghiệp',
      'Công ty dịch vụ CNTT', 'Công ty phần mềm',
      'Startup', 'Công ty thuê ngoài'
    ],
    benefits: [
      'Thân thiện với người mới vào nghề',
      'Học được nhiều về công nghệ',
      'Cải thiện kỹ năng mềm',
      'Nhiều cơ hội chuyển đổi lộ trình sự nghiệp',
      'Công việc ổn định'
    ],
    challenges: [
      'Phải đối mặt với người dùng bực bội',
      'Nhiệm vụ lặp đi lặp lại',
      'Có thể phải làm ca',
      'Khối lượng yêu cầu hỗ trợ cao',
      'Lương thấp hơn lập trình viên'
    ]
  },
  'database-administrator': {
    id: 'database-administrator',
    title: 'Quản trị Cơ sở dữ liệu',
    subtitle: 'Chuyên gia Quản lý Database',
    description: 'Quản lý, tối ưu và bảo mật các hệ thống cơ sở dữ liệu doanh nghiệp',
    imageUrl: 'https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0NjU1MDY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'Quản trị Cơ sở dữ liệu đảm bảo cơ sở dữ liệu hoạt động hiệu quả, an toàn và luôn sẵn sàng. Bạn sẽ quản lý SQL Server, Oracle, MySQL, PostgreSQL, thực hiện sao lưu/khôi phục, tối ưu truy vấn và đảm bảo tính toàn vẹn dữ liệu. Vai trò quan trọng cho mọi tổ chức có hệ thống cơ sở dữ liệu.',
    salary: {
      junior: '14-20 triệu',
      mid: '22-40 triệu',
      senior: '45-85 triệu'
    },
    skills: [
      'Ngôn ngữ truy vấn nâng cao (truy vấn, thủ tục lưu trữ, trigger)',
      'Hệ quản trị cơ sở dữ liệu (Oracle, SQL Server, PostgreSQL, MySQL)',
      'Thiết kế cơ sở dữ liệu và chuẩn hóa',
      'Sao lưu và khôi phục',
      'Điều chỉnh hiệu suất',
      'Tối ưu chỉ mục',
      'Sao chép và phân cụm',
      'Bảo mật và kiểm soát truy cập',
      'Lập trình kịch bản (PowerShell, Python, Bash)',
      'Cơ sở dữ liệu phi quan hệ (MongoDB, Redis)'
    ],
    responsibilities: [
      'Cài đặt và cấu hình hệ thống cơ sở dữ liệu',
      'Giám sát hiệu suất cơ sở dữ liệu',
      'Lập kế hoạch sao lưu và khôi phục sau thảm họa',
      'Tối ưu truy vấn ngôn ngữ truy vấn',
      'Quản lý quyền truy cập và phân quyền người dùng',
      'Tăng cường bảo mật cơ sở dữ liệu',
      'Lập kế hoạch năng lực',
      'Khắc phục sự cố cơ sở dữ liệu',
      'Vá và nâng cấp cơ sở dữ liệu',
      'Viết tài liệu và tuân thủ'
    ],
    requirements: {
      education: [
        'Tốt nghiệp Đại học CNTT',
        'Oracle OCP, Microsoft MCSA cho SQL Server',
        'AWS Database Specialty cho quản trị cơ sở dữ liệu đám mây'
      ],
      experience: [
        'Cấp độ mới: 1-2 năm, biết ngôn ngữ truy vấn và quản trị cơ bản',
        'Cấp độ trung: 3-5 năm quản trị cơ sở dữ liệu',
        'Cấp độ cao: 6+ năm, chuyên gia về nền tảng cơ sở dữ liệu'
      ],
      technical: [
        'Ngôn ngữ truy vấn nâng cao',
        'Quản trị cơ sở dữ liệu',
        'Điều chỉnh hiệu suất',
        'Quy trình sao lưu/khôi phục',
        'Giải pháp sẵn sàng cao'
      ],
      soft: [
        'Chú ý đến chi tiết cao',
        'Giải quyết vấn đề',
        'Làm việc độc lập',
        'Viết tài liệu',
        'Giao tiếp với người không chuyên'
      ]
    },
    careerPath: [
      {
        level: 'Quản trị Cơ sở dữ liệu Mới',
        duration: '0-2 năm',
        description: 'Hỗ trợ quản trị viên cao cấp, học quản lý cơ sở dữ liệu, sao lưu/khôi phục'
      },
      {
        level: 'Quản trị Cơ sở dữ liệu',
        duration: '2-5 năm',
        description: 'Quản lý độc lập, tối ưu hiệu suất, xử lý sự cố'
      },
      {
        level: 'Quản trị Cơ sở dữ liệu Cao cấp',
        duration: '5-8 năm',
        description: 'Thiết kế kiến trúc cơ sở dữ liệu, dự án di chuyển, hướng dẫn nhóm'
      },
      {
        level: 'Kiến trúc sư Cơ sở dữ liệu / Quản lý',
        duration: '8+ năm',
        description: 'Chiến lược dữ liệu, quản lý nhóm, kiến trúc doanh nghiệp'
      }
    ],
    tools: [
      'SQL Server Management Studio', 'Oracle Enterprise Manager',
      'MySQL Workbench', 'pgAdmin', 'MongoDB Compass',
      'DBeaver', 'PowerShell', 'Python', 'Git'
    ],
    companies: [
      'Ngân hàng (Vietcombank, Techcombank)',
      'FPT', 'Viettel', 'VNG', 'Tập đoàn lớn',
      'Công ty tài chính', 'Thương mại điện tử',
      'Nhà cung cấp hosting'
    ],
    benefits: [
      'Mức lương cao và ổn định',
      'Nhu cầu cao ở mọi ngành',
      'Vai trò quan trọng trong tổ chức',
      'Kiến thức sâu về dữ liệu',
      'Chứng chỉ có giá trị'
    ],
    challenges: [
      'Phải trực để xử lý khẩn cấp',
      'Trách nhiệm lớn về dữ liệu',
      'Áp lực khi cơ sở dữ liệu gặp sự cố',
      'Phải cập nhật liên tục về công nghệ mới'
    ]
  },
  'ui-ux-designer': {
    id: 'ui-ux-designer',
    title: 'Thiết kế Giao diện/Trải nghiệm Người dùng',
    subtitle: 'Nhà Thiết kế UI/UX',
    description: 'Thiết kế giao diện và trải nghiệm người dùng cho ứng dụng và website',
    imageUrl: 'https://images.unsplash.com/photo-1761173587971-f740fd4eeeb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVWCUyMGRlc2lnbiUyMHdpcmVmcmFtZXMlMjBwcm90b3R5cGV8ZW58MXx8fHwxNzY0NjU1MDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'Nhà thiết kế UI/UX kết hợp nghệ thuật và khoa học để tạo ra giao diện đẹp, dễ sử dụng và mang lại trải nghiệm tuyệt vời cho người dùng. Bạn sẽ nghiên cứu người dùng, thiết kế wireframe, prototype và làm việc chặt chẽ với lập trình viên để biến ý tưởng thành sản phẩm thực tế.',
    salary: {
      junior: '10-18 triệu',
      mid: '20-40 triệu',
      senior: '45-90 triệu'
    },
    skills: [
      'Công cụ thiết kế (Figma, Adobe XD, Sketch)',
      'Nghiên cứu người dùng và kiểm thử khả năng sử dụng',
      'Thiết kế khung dây và mô hình nguyên mẫu',
      'Thiết kế hệ thống và hướng dẫn phong cách',
      'Thiết kế đáp ứng',
      'Lý thuyết màu sắc và kiểu chữ',
      'Kiến trúc thông tin',
      'Thiết kế tương tác',
      'HTML/CSS cơ bản',
      'Cộng tác với lập trình viên'
    ],
    responsibilities: [
      'Nghiên cứu người dùng và phân tích đối thủ',
      'Tạo nhân vật người dùng và hành trình người dùng',
      'Thiết kế khung dây và mô hình nguyên mẫu',
      'Thiết kế giao diện người dùng đẹp mắt',
      'Thực hiện kiểm thử khả năng sử dụng',
      'Hợp tác với lập trình viên và quản lý sản phẩm',
      'Tạo và duy trì hệ thống thiết kế',
      'Lặp lại thiết kế dựa trên phản hồi',
      'Trình bày thiết kế cho các bên liên quan',
      'Luôn cập nhật xu hướng thiết kế'
    ],
    requirements: {
      education: [
        'Tốt nghiệp Đại học chuyên ngành Thiết kế, CNTT, Mỹ thuật',
        'Khóa học về UI/UX Design',
        'Danh mục thiết kế ấn tượng (quan trọng nhất)'
      ],
      experience: [
        'Cấp độ mới: 0-2 năm, có danh mục dự án cá nhân',
        'Cấp độ trung: 2-5 năm, đã thiết kế sản phẩm thành công',
        'Cấp độ cao: 5+ năm, dẫn dắt thiết kế, hướng dẫn nhóm'
      ],
      technical: [
        'Thành thạo Figma, Adobe XD hoặc Sketch',
        'Wireframing và prototyping',
        'Thiết kế responsive',
        'Hiểu biết về HTML/CSS',
        'Hệ thống thiết kế'
      ],
      soft: [
        'Sáng tạo và tư duy thiết kế',
        'Đồng cảm với người dùng',
        'Giao tiếp và trình bày',
        'Hợp tác với nhóm đa chức năng',
        'Nhận phản hồi và lặp lại'
      ]
    },
    careerPath: [
      {
        level: 'Thiết kế UI/UX Mới',
        duration: '0-2 năm',
        description: 'Học quy trình thiết kế, tạo wireframe, hỗ trợ thiết kế viên cao cấp'
      },
      {
        level: 'Thiết kế UI/UX',
        duration: '2-5 năm',
        description: 'Độc lập thiết kế tính năng, nghiên cứu người dùng, làm việc với lập trình viên'
      },
      {
        level: 'Thiết kế UI/UX Cao cấp',
        duration: '5-8 năm',
        description: 'Dẫn dắt dự án thiết kế lớn, xây dựng hệ thống thiết kế, hướng dẫn nhóm'
      },
      {
        level: 'Trưởng Thiết kế / Giám đốc Thiết kế',
        duration: '8+ năm',
        description: 'Quản lý nhóm thiết kế, chiến lược thiết kế, định hướng sản phẩm'
      }
    ],
    tools: [
      'Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop',
      'Adobe Illustrator', 'InVision', 'Principle', 'Framer',
      'Miro', 'Notion'
    ],
    companies: [
      'Tiki', 'Shopee', 'Grab', 'Momo',
      'VNG', 'VinID', 'Startup ecosystem',
      'Digital agencies', 'Product companies'
    ],
    benefits: [
      'Công việc sáng tạo và thú vị',
      'Tác động trực tiếp đến trải nghiệm người dùng',
      'Mức lương hấp dẫn',
      'Làm việc từ xa thân thiện',
      'Nhiều cơ hội freelance',
      'Nhu cầu cao trong kỷ nguyên số'
    ],
    challenges: [
      'Cân bằng giữa đẹp và dễ dùng',
      'Xử lý phản hồi chủ quan',
      'Thuyết phục các bên liên quan',
      'Cập nhật xu hướng thiết kế liên tục',
      'Đôi khi bị giới hạn bởi kỹ thuật'
    ]
  },
  'qa-tester': {
    id: 'qa-tester',
    title: 'Kiểm thử Phần mềm',
    subtitle: 'Chuyên viên Đảm bảo Chất lượng',
    description: 'Đảm bảo chất lượng sản phẩm thông qua kiểm thử và phát hiện lỗi',
    imageUrl: 'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0aW5nJTIwc29mdHdhcmUlMjBidWd8ZW58MXx8fHwxNzY0NjU1MDY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    overview: 'Kiểm thử viên (QA/Tester) đóng vai trò quan trọng trong việc đảm bảo chất lượng sản phẩm phần mềm. Bạn sẽ tìm lỗi, kiểm tra tính năng, viết test case và đảm bảo sản phẩm hoạt động đúng theo yêu cầu trước khi đến tay người dùng. Đây là vị trí quan trọng trong mọi dự án phần mềm chuyên nghiệp.',
    salary: {
      junior: '9-15 triệu',
      mid: '16-30 triệu',
      senior: '35-70 triệu'
    },
    skills: [
      'Kỹ năng kiểm thử thủ công (Manual Testing)',
      'Kiểm thử tự động (Automation Testing)',
      'Viết kịch bản kiểm thử (Test Cases, Test Scenarios)',
      'Công cụ kiểm thử (Selenium, Appium, JUnit, TestNG)',
      'Quản lý lỗi (Bug Tracking - Jira, Bugzilla)',
      'Kiểm thử giao diện lập trình ứng dụng (API Testing - Postman)',
      'Kiểm thử hiệu suất (Performance Testing)',
      'Ngôn ngữ lập trình (Java, Python, JavaScript)',
      'Cơ sở dữ liệu và ngôn ngữ truy vấn',
      'Phương pháp phát triển linh hoạt (Agile/Scrum)'
    ],
    responsibilities: [
      'Phân tích yêu cầu và viết kịch bản kiểm thử',
      'Thực hiện kiểm thử thủ công và tự động',
      'Tìm kiếm, ghi nhận và theo dõi lỗi',
      'Kiểm thử hồi quy sau khi sửa lỗi',
      'Kiểm thử tích hợp giữa các module',
      'Viết và duy trì kịch bản kiểm thử tự động',
      'Kiểm thử hiệu suất và bảo mật cơ bản',
      'Hợp tác với lập trình viên và quản lý sản phẩm',
      'Báo cáo chất lượng sản phẩm',
      'Tham gia cải tiến quy trình kiểm thử'
    ],
    requirements: {
      education: [
        'Tốt nghiệp Đại học/Cao đẳng CNTT hoặc liên quan',
        'Khóa học về Software Testing',
        'Chứng chỉ ISTQB (Foundation Level) là lợi thế'
      ],
      experience: [
        'Cấp độ mới: 0-1 năm, có kiến thức về kiểm thử',
        'Cấp độ trung: 1-3 năm kinh nghiệm kiểm thử',
        'Cấp độ cao: 4+ năm, chuyên sâu automation hoặc performance testing'
      ],
      technical: [
        'Hiểu biết về chu trình phát triển phần mềm',
        'Kỹ năng viết test case tốt',
        'Công cụ kiểm thử (Selenium, Postman)',
        'Ngôn ngữ truy vấn cơ bản',
        'Lập trình cơ bản cho automation'
      ],
      soft: [
        'Tỉ mỉ và chú ý đến chi tiết',
        'Tư duy phân tích và logic',
        'Giao tiếp tốt',
        'Kiên nhẫn và tỉ mỉ',
        'Làm việc nhóm hiệu quả'
      ]
    },
    careerPath: [
      {
        level: 'Kiểm thử viên Mới',
        duration: '0-1 năm',
        description: 'Học quy trình kiểm thử, viết test case, thực hiện manual testing'
      },
      {
        level: 'Kiểm thử viên',
        duration: '1-3 năm',
        description: 'Độc lập kiểm thử tính năng, bắt đầu học automation testing'
      },
      {
        level: 'Kiểm thử viên Cao cấp',
        duration: '3-5 năm',
        description: 'Chuyên sâu automation, performance testing, hướng dẫn junior'
      },
      {
        level: 'Trưởng Nhóm Kiểm thử / Kỹ sư Tự động hóa Kiểm thử',
        duration: '5-7 năm',
        description: 'Quản lý nhóm kiểm thử, chiến lược kiểm thử, xây dựng framework automation'
      },
      {
        level: 'Quản lý Đảm bảo Chất lượng',
        duration: '7+ năm',
        description: 'Quản lý toàn bộ quy trình đảm bảo chất lượng, định hướng chiến lược'
      }
    ],
    tools: [
      'Selenium WebDriver', 'Appium', 'Postman', 'JMeter',
      'Jira', 'TestRail', 'Git', 'Jenkins',
      'Cypress', 'Playwright', 'Robot Framework', 'TestNG'
    ],
    companies: [
      'FPT Software', 'VNG', 'Tiki', 'Shopee',
      'Momo', 'Grab', 'Viettel', 'TMA Solutions',
      'KMS Technology', 'Công ty outsourcing'
    ],
    benefits: [
      'Vị trí đầu vào tốt cho người mới vào nghề',
      'Học được toàn bộ quy trình phát triển phần mềm',
      'Cơ hội chuyển sang automation/development',
      'Nhu cầu cao ở mọi công ty phần mềm',
      'Mức lương tăng nhanh khi chuyên sâu automation',
      'Làm việc từ xa thân thiện'
    ],
    challenges: [
      'Công việc có thể lặp đi lặp lại',
      'Áp lực khi gần deadline',
      'Cần kiên nhẫn và tỉ mỉ cao',
      'Lương thấp hơn developer ở cấp độ đầu',
      'Phải học liên tục về công nghệ mới'
    ]
  }
};
