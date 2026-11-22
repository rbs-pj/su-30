import type { Su30ExhibitData } from '../types.ts';

export const su30Data: Su30ExhibitData = {
  project: {
    name: 'EM LÀ NHÀ SÁNG TẠO – BẢO TÀNG QUỐC PHÒNG VIỆT NAM',
    theme: 'HỒ SƠ HIỆN VẬT HÀNG KHÔNG QUÂN SỰ',
    exhibitTitle: 'SU-30MK2 — MÁY BAY TIÊM KÍCH ĐA NĂNG CỦA KHÔNG QUÂN NHÂN DÂN VIỆT NAM',
    organization: 'Bảo Tàng Quốc Phòng Việt Nam'
  },

  aircraft: {
    designation: 'SU-30MK2',
    fullName: 'Sukhoi Su-30MK2',
    natoReportingName: 'Flanker-G+',
    role: 'Máy bay tiêm kích đa năng hai chỗ ngồi, hai động cơ phản lực',
    originCountry: 'Liên bang Nga',
    designBureau: 'Phòng thiết kế Sukhoi (OKB Sukhoi)',
    manufacturer: 'Nhà máy Hàng không Komsomolsk-on-Amur (KnAAPO), Nga',
    crew: '02 người (Phi công điều khiển chính phía trước & Sĩ quan điều phối / Huấn luyện viên phía sau)',
    engines: '02 động cơ tuốc-bin phản lực hai luồng AL-31F có buồng đốt tăng lực',
    introSummary: 'Dòng máy bay chiến đấu hiện đại do Nga phát triển trên nền tảng Su-27, gắn liền với quá trình hiện đại hóa lực lượng Không quân Nhân dân Việt Nam trong thế kỷ XXI. Máy bay được thiết kế theo định hướng đa nhiệm, kết hợp đặc tính khí động học tiên tiến với hệ thống điều khiển và trang thiết bị điện tử hàng không hiện đại.',
    nameEtymology: {
      su: 'Viết tắt của Phòng thiết kế Sukhoi (tiếng Nga: Сухой).',
      number: '30 là ký hiệu dòng máy bay phát triển từ nền tảng tiêm kích đánh chặn hai chỗ ngồi Su-27PU.',
      mk2: 'Modernizirovannyi Kommercheskiy (Hiện đại hóa – Thương mại/Xuất khẩu), thế hệ thứ 2 phát triển từ nhánh Su-30MKK.',
      variantsDistinction: 'Su-30MK2 cần được phân biệt rõ với Su-30MKI (Ấn Độ - cánh mũi, động cơ kiểm soát vector lực đẩy AL-31FP), Su-30SM (Nga) và Su-30MKK (Trung Quốc - thế hệ MK đầu tiên). Mỗi biến thể có thiết kế khí động học, nhà máy sản xuất (KnAAPO vs Irkut) và cấu hình thiết bị hàng không riêng biệt.'
    }
  },

  timeline: [
    {
      id: 'genesis-su27',
      period: 'Thập niên 1970 – 1985',
      title: 'Nền tảng Su-27 & Su-27UB',
      scope: 'world',
      summary: 'Phòng thiết kế Sukhoi nghiên cứu Su-27 với khí động học tiên tiến và phạm vi tác chiến rộng, mở đường cho biến thể 2 chỗ ngồi Su-27UB.',
      details: 'Được nghiên cứu từ thập niên 1970 tại Liên Xô, Su-27 là chương trình hàng không quân sự mang tính bản lề. Trong quá trình phát triển, biến thể huấn luyện hai chỗ ngồi Su-27UB đã chứng minh tính ưu việt của tổ lái hai người, tạo tiền đề cho một loại tiêm kích độc lập hoạt động tầm xa.',
      keyTakeaway: 'Tiền đề khí động học và cấu hình tổ lái 2 người.'
    },
    {
      id: 'su27pu-birth-su30',
      period: '1989 – Đầu thập niên 1990',
      title: 'Chương trình Su-27PU & Sự ra đời dòng Su-30',
      scope: 'world',
      summary: 'Chuyến bay thử nghiệm nguyên mẫu Su-27PU cuối năm 1989 đánh dấu sự ra đời của dòng máy bay Su-30.',
      details: 'Sukhoi triển khai chương trình Su-27PU để phát triển tiêm kích đánh chặn tầm xa hai chỗ ngồi. Sau khi Liên Xô tan rã, nhu cầu nội địa giảm sút khiến Sukhoi chuyển hướng chiến lược: phát triển các phiên bản xuất khẩu đa năng mang ký hiệu Su-30M và Su-30MK, chuyển hóa từ tiêm kích đánh chặn đơn thuần sang tiêm kích đa nhiệm.',
      keyTakeaway: 'Chuyển hóa từ tiêm kích đánh chặn sang tiêm kích đa nhiệm xuất khẩu.'
    },
    {
      id: 'su30mkk-mk2-evolution',
      period: 'Cuối 1990s – Đầu 2000s',
      title: 'Từ Su-30MKK đến Biến thể Su-30MK2',
      scope: 'world',
      summary: 'Hình thành Su-30MKK tại nhà máy KnAAPO và nâng cấp thành biến thể Su-30MK2 vào đầu những năm 2000.',
      details: 'Su-30MKK hình thành từ chương trình hợp tác Nga - Trung vào cuối thập niên 1990, sản xuất tại Komsomolsk-on-Amur (KnAAPO). Trên nền tảng này, Sukhoi nâng cấp hệ thống điện tử hàng không và trang thiết bị để tạo ra Su-30MK2 đầu thập niên 2000, sau đó xuất khẩu sang Việt Nam, Indonesia, Venezuela và Uganda.',
      keyTakeaway: 'Nhánh KnAAPO tối ưu hóa cho xuất khẩu quốc tế.'
    },
    {
      id: 'vietnam-first-contract',
      period: 'Tháng 12/2003 – 2004',
      title: 'Việt Nam Ký Hợp Đồng Su-30 Đầu Tiên',
      scope: 'vietnam',
      summary: 'Việt Nam ký hợp đồng mua 4 chiếc Su-30 đầu tiên; bàn giao năm 2004 bằng vận tải cơ hạng nặng An-124.',
      details: 'Tháng 12/2003, Việt Nam ký hợp đồng mua 4 máy bay thuộc dòng Su-30. Năm 2004, máy bay được chuyển giao bằng vận tải cơ hạng nặng An-124 Ruslan đến Việt Nam, được lắp ráp và bay thử nghiệm dưới sự phối hợp giữa chuyên gia Nga và sĩ quan kỹ sư Việt Nam. Báo chí công khai có tài liệu gọi là Su-30MK, có tài liệu gọi là Su-30MK2, thể hiện sự cần thiết ghi nhận thận trọng là những máy bay Su-30 đầu tiên.',
      keyTakeaway: 'Khởi đầu kỷ nguyên tiêm kích đa năng thế hệ mới của Không quân Việt Nam.'
    },
    {
      id: 'vietnam-procurement-expansion',
      period: '2009 – 2013',
      title: 'Các Đợt Mua Sắm & Bàn Giao Quy Mô Lớn',
      scope: 'vietnam',
      summary: 'Việt Nam liên tiếp ký kết các hợp đồng bổ sung: 8 chiếc (2009), 12 chiếc (2010), 12 chiếc (2013).',
      details: 'Nhằm đáp ứng yêu cầu nâng cao năng lực bảo vệ vùng trời và vùng biển Tổ quốc, Việt Nam liên tiếp ký các hợp đồng mua tiêm kích Su-30MK2 hiện đại: năm 2009 mua thêm 8 chiếc; năm 2010 mua 12 chiếc; năm 2013 mua 12 chiếc. Các đợt chuyển giao diễn ra liên tục theo kế hoạch đào tạo phi công và kỹ thuật viên.',
      keyTakeaway: 'Gia tăng năng lực bảo vệ vùng trời và biển đảo trên quy mô toàn quân.'
    },
    {
      id: 'vietnam-completion-mastery',
      period: '2016 – Nay',
      title: 'Hoàn Tất Tiếp Nhận & Làm Chủ Khai Thác',
      scope: 'vietnam',
      summary: 'Giai đoạn chuyển giao hoàn tất đến năm 2016, tổng hợp báo chí ghi nhận 36 chiếc dòng Su-30; Việt Nam làm chủ 100% quy trình khai thác kỹ thuật.',
      details: 'Quá trình chuyển giao kéo dài đến năm 2016. Các nguồn báo chí (như VTC News 2024) tổng hợp 36 máy bay dòng Su-30 được chuyển giao cho Không quân Việt Nam giai đoạn 2004–2016. Các trung đoàn không quân chủ lực như Trung đoàn 935 (Sư đoàn 370) và Trung đoàn 927 (Sư đoàn 371) đã làm chủ hoàn toàn khí tài, tổ chức huấn luyện chuyển loại độc lập và thực hiện nhiệm vụ trực ban sẵn sàng chiến đấu.',
      keyTakeaway: 'Làm chủ công nghệ và tự chủ huấn luyện phi công trong nước.'
    }
  ],

  roles: [
    {
      id: 'air-superiority',
      title: 'Tiêm Kích Đa Năng Hiện Đại',
      subtitle: 'Khả năng tác chiến linh hoạt trên nhiều môi trường',
      description: 'Su-30MK2 được xếp vào nhóm máy bay tiêm kích đa năng (Multirole Fighter). Máy bay được thiết kế để thực hiện nhiều nhiệm vụ hàng không quân sự khác nhau thay vì chỉ tập trung vào một chức năng riêng biệt. Đặc tính đa năng hình thành từ sự kết hợp tối ưu giữa hình thể khí động học, động cơ lực đẩy lớn, trang bị điện tử tích hợp và tổ lái hai người.',
      points: [
        'Tuần tra và bảo vệ vùng trời quốc gia trong mọi điều kiện thời tiết.',
        'Đảm nhiệm nhiệm vụ kiểm soát không phận và sẵn sàng đánh chặn từ xa.',
        'Khả năng cơ động cao kế thừa từ họ tiêm kích huyền thoại Su-27.'
      ]
    },
    {
      id: 'maritime-protection',
      title: 'Bảo Vệ Vùng Biển & Chủ Quyền Đảo',
      subtitle: 'Tầm bay xa, bán kính hoạt động bao quát không gian biển',
      description: 'Đối với Việt Nam, vùng trời không gian biển gắn liền hữu cơ với nhiệm vụ bảo vệ toàn vẹn lãnh thổ và chủ quyền biển đảo. Su-30MK2 với khả năng mang lượng nhiên liệu lớn và bay hành trình tầm xa đã trở thành phương tiện chủ lực trong nhiệm vụ tuần tra, giám sát và bảo vệ các vùng biển, vùng đặc quyền kinh tế và quần đảo thiêng liêng của Tổ quốc.',
      points: [
        'Tuần tra thường xuyên trên các vùng biển và quần đảo xa bờ.',
        'Phối hợp chặt chẽ với lực lượng Hải quân, Cảnh sát biển và Phòng không.',
        'Nâng cao khả năng răn đe và bảo vệ các mục tiêu trọng yếu ngoài khơi.'
      ]
    },
    {
      id: 'training-advancement',
      title: 'Huấn Luyện & Đào Tạo Phi Công Thế Hệ Mới',
      subtitle: 'Tổ hợp buồng lái 2 chỗ ngồi phục vụ chuyển loại chất lượng cao',
      description: 'Thiết kế hai chỗ ngồi nối tiếp mang lại giá trị to lớn cho công tác huấn luyện và chuyển loại phi công. Phi công chuyển loại có thể thực hành bay trực tiếp trên phương tiện hiện đại dưới sự giám sát và hướng dẫn của giáo viên bay kỳ cựu ở buồng lái sau, bảo đảm an toàn tuyệt đối và rút ngắn thời gian làm chủ trang bị.',
      points: [
        'Hỗ trợ giáo viên bay giám sát và can thiệp điều khiển khi cần thiết.',
        'Tổ chức kiểm tra phân cấp kỹ thuật phi công định kỳ hằng năm.',
        'Đào tạo nguồn nhân lực phi công quân sự chất lượng cao cho toàn quân chủng.'
      ]
    }
  ],

  anatomyParts: [
    {
      id: 'nose-fuselage',
      name: 'Nose & Fuselage',
      vietnameseName: 'Mũi và Thân Máy Bay',
      xPercent: 50,
      yPercent: 12,
      shortDesc: 'Kết cấu khí động học thuôn dài tích hợp vòm che radar và các khoang thiết bị điện tử tối tân.',
      detailedFunction: 'Thân máy bay là kết cấu trung tâm liên kết toàn bộ các cụm bộ phận, bình nhiên liệu chính và khoang kỹ thuật. Phần mũi thuôn dài đặc trưng làm từ vật liệu composite đặc biệt để chứa hệ thống anten radar phát/thu sóng vô tuyến, cùng tổ hợp cảm biến quang - điện tử OLS đặt lệch ngay trước kính chắn gió buồng lái.',
      tacticalSignificance: 'Giảm tối đa lực cản không khí, định hình dòng chảy khí động học bao quanh thân và tạo lực nâng thân (lifting body).'
    },
    {
      id: 'tandem-cockpit',
      name: 'Tandem Cockpit',
      vietnameseName: 'Buồng Lái Hai Chỗ Ngồi',
      xPercent: 50,
      yPercent: 24,
      shortDesc: 'Bố trí hai ghế phóng nối tiếp theo chiều dọc thân với nắp chụp kính liền khối tầm quan sát rộng.',
      detailedFunction: 'Khác biệt hoàn toàn với kiểu bố trí hai ghế ngồi cạnh nhau, Su-30MK2 bố trí hai phi công nối tiếp trước - sau. Vị trí trước là của phi công điều khiển chính; vị trí sau dành cho thành viên tổ lái thứ hai (sĩ quan dẫn đường/điều khiển vũ khí hoặc giáo viên bay). Cả hai vị trí đều trang bị màn hình hiển thị đa chức năng và hệ thống điều khiển đồng bộ.',
      tacticalSignificance: 'Tối ưu hóa tầm nhìn, chia sẻ khối lượng công việc thông tin phức tạp và là môi trường hoàn hảo để đào tạo phi công.'
    },
    {
      id: 'main-wings',
      name: 'Main Wings',
      vietnameseName: 'Cánh Chính',
      xPercent: 78,
      yPercent: 52,
      shortDesc: 'Cánh dạng xuôi về phía sau với diện tích lớn và cánh tà trước/sau thích ứng khí động.',
      detailedFunction: 'Hai cánh chính đặt đối xứng hai bên thân, có góc xuôi sau kết hợp phần gốc cánh mở rộng (LERX - Leading Edge Root Extension). Cánh chịu tải trọng chính, tạo lực nâng khi chuyển động trong không khí, đồng thời chứa các thùng dầu bên trong và các mấu treo thiết bị dưới cánh.',
      tacticalSignificance: 'Tạo lực nâng vượt trội ở dải tốc độ rộng, cho phép máy bay cơ động linh hoạt ở góc tấn lớn.'
    },
    {
      id: 'twin-vertical-tails',
      name: 'Twin Vertical Tails',
      vietnameseName: 'Hai Đuôi Đứng',
      xPercent: 35,
      yPercent: 70,
      shortDesc: 'Hai cánh đuôi đứng đặt song song hơi nghiêng ra ngoài ở phía cuối thân máy bay.',
      detailedFunction: 'Hai cánh đuôi đứng kích thước lớn tích hợp cánh lái hướng (rudder), chịu trách nhiệm giữ ổn định theo phương hướng (ổn định ngang) và điều khiển máy bay lượn vòng. Thiết kế hai đuôi đứng riêng biệt bảo đảm máy bay duy trì khả năng điều khiển ổn định ngay cả khi bay ở góc đón gió cực cao.',
      tacticalSignificance: 'Duy trì sự ổn định hướng bay và khả năng kiểm soát phương vị trong các bài bay phức tạp.'
    },
    {
      id: 'horizontal-stabilators',
      name: 'Horizontal Stabilators',
      vietnameseName: 'Đuôi Ngang Toàn Động',
      xPercent: 76,
      yPercent: 86,
      shortDesc: 'Hai cánh đuôi ngang chuyển động độc lập điều khiển chuyển động chúc ngóc của máy bay.',
      detailedFunction: 'Hai cánh đuôi ngang được thiết kế dạng toàn động (toàn bộ bề mặt cánh đuôi xoay quanh trục), tham gia trực tiếp vào việc điều khiển chuyển động theo phương thẳng đứng (chúc và ngóc mũi máy bay) cũng như hỗ trợ điều khiển lộn vòng theo trục dọc.',
      tacticalSignificance: 'Tạo mô-men điều khiển chúc ngóc cực mạnh, giúp phi công thực hiện các cơ động thay đổi độ cao nhanh chóng.'
    },
    {
      id: 'air-intakes',
      name: 'Twin Air Intakes',
      vietnameseName: 'Hai Cửa Hút Khí',
      xPercent: 42,
      yPercent: 42,
      shortDesc: 'Cửa hút khí biến hình đặt dưới thân máy bay cung cấp luồng không khí ổn định cho động cơ.',
      detailedFunction: 'Hai cửa hút khí đặt tách biệt ở phần bụng máy bay, có vách ngăn dòng khí và các tấm nêm điều chỉnh tiết diện tự động để làm chậm dòng khí siêu âm trước khi đi vào máy nén động cơ, đồng thời ngăn vật thể lạ (FOD) trong quá trình cất/hạ cánh.',
      tacticalSignificance: 'Cung cấp lưu lượng không khí tối ưu cho buồng đốt ở mọi dải tốc độ từ cận âm đến siêu âm.'
    },
    {
      id: 'al31f-engines',
      name: 'AL-31F Turbofan Engines',
      vietnameseName: 'Hai Động Cơ Phản Lực AL-31F',
      xPercent: 50,
      yPercent: 76,
      shortDesc: 'Cụm hai động cơ tuốc-bin phản lực hai luồng có buồng đốt tăng lực đặt song song phía sau.',
      detailedFunction: 'Su-30MK2 được trang bị 2 động cơ phản lực AL-31F đặt song song trong hai thân đuôi tách biệt. Đây là loại động cơ tuốc-bin phản lực hai luồng (turbofan) có buồng đốt tăng lực (afterburner). Động cơ hút không khí, nén qua nhiều tầng cánh nén, trộn với nhiên liệu phản lực đốt cháy để tạo dòng phản lực phụt ra phía sau tạo lực đẩy cực lớn.',
      tacticalSignificance: 'Tạo lực đẩy mạnh mẽ cho khối lượng cất cánh tới 34,5 tấn, bảo đảm khả năng leo cao và duy trì tốc độ siêu âm.'
    },
    {
      id: 'landing-gear',
      name: 'Tricycle Landing Gear',
      vietnameseName: 'Càng Đáp Ba Điểm',
      xPercent: 50,
      yPercent: 58,
      shortDesc: 'Hệ thống càng đáp bánh mũi kép và hai càng chính chịu tải cao thu gọn vào thân khi bay.',
      detailedFunction: 'Càng đáp gồm 1 càng mũi có hai bánh dẫn hướng thu về phía trước vào khoang dưới buồng lái, và 2 càng chính chịu tải nặng thu về phía trước vào gốc cánh và thân. Hệ thống giảm xóc thủy lực khí nén chịu được tải trọng hạ cánh nặng trên đường băng tiêu chuẩn.',
      tacticalSignificance: 'Bảo đảm an toàn tuyệt đối khi cất cánh và tiếp đất ở tốc độ cao với tải trọng nhiên liệu lớn.'
    }
  ],

  specs: [
    {
      parameter: 'Phân loại',
      value: 'Tiêm kích đa năng',
      meaning: 'Thiết kế hướng đến nhiều nhóm nhiệm vụ hàng không quân sự'
    },
    {
      parameter: 'Tổ lái',
      value: '2 người',
      meaning: 'Buồng lái bố trí hai vị trí nối tiếp theo chiều dọc thân máy bay'
    },
    {
      parameter: 'Số động cơ',
      value: '2',
      meaning: 'Hai động cơ đặt song song ở phần phía sau thân máy bay'
    },
    {
      parameter: 'Loại động cơ',
      value: 'AL-31F',
      meaning: 'Động cơ tuốc-bin phản lực hai luồng có buồng đốt tăng lực'
    },
    {
      parameter: 'Khối lượng cất cánh tối đa công bố',
      value: '34.500 kg',
      meaning: 'Thể hiện quy mô kết cấu và khả năng mang tải của dòng máy bay'
    }
  ],

  vietnamService: {
    overview: 'Su-30MK2 là dấu mốc quan trọng trong hiện đại hóa lực lượng Không quân Nhân dân Việt Nam. Việc tiếp nhận và làm chủ dòng tiêm kích hiện đại này thể hiện bước chuyển biến mạnh mẽ về chất, từ trang bị thế hệ cũ sang hệ thống vũ khí hàng không tích hợp công nghệ cao, đáp ứng yêu cầu bảo vệ chủ quyền quốc gia trong tình hình mới.',
    inductionProcess: 'Quá trình tiếp nhận máy bay từ Nga diễn ra qua nhiều giai đoạn (2004–2016). Các máy bay được vận chuyển nguyên chiếc hoặc tháo rời từng cụm bằng máy bay vận tải hạng nặng An-124, sau đó được đội ngũ kỹ sư Việt Nam phối hợp cùng chuyên gia nhà sản xuất Nga lắp ráp, hiệu chỉnh, bay thử và đưa vào trang bị sẵn sàng chiến đấu.',
    humanFactor: 'Nguyên tắc then chốt trong xây dựng lực lượng là: "Hiện đại hóa trang bị phải đi đôi với hiện đại hóa con người". Đội ngũ phi công phải trải qua quá trình huấn luyện chuyển loại khắt khe cả về lý thuyết khí động học, xử lý tình huống trên buồng tập mô phỏng và thực hành bay thực tế. Song song đó, đội ngũ cán bộ, nhân viên kỹ thuật bảo đảm hàng không ngày đêm kiểm tra, bảo dưỡng từng chi tiết, làm chủ công nghệ đo kiểm và duy trì hệ số kỹ thuật cao nhất cho từng chuyến bay an toàn.',
    units: [
      {
        regiment: 'Trung đoàn Không quân 935',
        division: 'Sư đoàn Không quân 370',
        location: 'Biên Hòa, Đồng Nai',
        mission: 'Trực ban sẵn sàng chiến đấu, tuần tra bảo vệ vùng trời, vùng biển, thềm lục địa và các đảo phía Nam Tổ quốc.',
        trainingRole: 'Đơn vị nòng cốt tham gia huấn luyện, đào tạo và chuyển loại phi công Su-30MK2 cho các đơn vị không quân toàn quân.',
        referenceDoc: 'Báo Quân đội nhân dân, 23/10/2024'
      },
      {
        regiment: 'Trung đoàn Không quân 927',
        division: 'Sư đoàn Không quân 371',
        location: 'Kép, Bắc Giang',
        mission: 'Quản lý, bảo vệ vững chắc vùng trời phía Bắc Tổ quốc; sẵn sàng cơ động thực hiện mọi nhiệm vụ phòng không.',
        trainingRole: 'Chuẩn bị cơ sở vật chất đồng bộ, đào tạo chuyển loại lý thuyết kết hợp thực hành và làm chủ quy trình kỹ thuật trang bị mới.',
        referenceDoc: 'Báo Quân đội nhân dân, 24/04/2018'
      }
    ]
  },

  conclusion: {
    historicalSignificance: 'Su-30MK2 là kết tinh của quá trình phát triển liên tục từ nền tảng Su-27, phản ánh bước tiến dài trong tư duy thiết kế và công nghệ hàng không quân sự hiện đại. Từ một thiết kế tiêm kích đánh chặn hai chỗ ngồi của Liên Xô, dòng Su-30 đã trở thành nền tảng tiêm kích đa nhiệm tiêu biểu trên trường quốc tế.',
    defenseValue: 'Đối với Việt Nam, Su-30MK2 là biểu tượng sinh động của tinh thần tự lực, tự cường và khát vọng xây dựng một lực lượng vũ trang cách mạng, chính quy, tinh nhuệ, hiện đại. Máy bay đóng vai trò then chốt trong thế trận quốc phòng toàn dân, gắn liền với nhiệm vụ thiêng liêng: bảo vệ toàn vẹn vùng trời, vùng biển và thềm lục địa của Tổ quốc.',
    closingStatement: 'Khám phá Su-30MK2 không chỉ là tìm hiểu một cỗ máy quân sự hiện đại, mà trên hết là sự tri ân đối với những con người thầm lặng — các thế hệ phi công can trường và đội ngũ cán bộ, chiến sĩ kỹ thuật Không quân Nhân dân Việt Nam, những người đã và đang cống hiến tâm sức để bầu trời Tổ quốc mãi mãi bình yên.'
  },

  references: [
    {
      id: 1,
      title: 'Russian Combat Aviation: Procurement, Modernization, and Future Outlook',
      authorOrPublisher: 'Center for Naval Analyses (CNA) – Leonid Nersisyan',
      date: 'Tháng 12/2020',
      description: 'Công trình nghiên cứu về lịch sử và quá trình hiện đại hóa hàng không quân sự Nga. Cung cấp cơ sở học thuật để xác định nguồn gốc Su-30 từ Su-27PU và nền tảng Su-27UB.',
      url: 'https://www.cna.org/reports/2020/12/IOP-2020-U-028810-Final.pdf',
      linkText: 'Đọc tài liệu CNA'
    },
    {
      id: 2,
      title: 'Su-30MK2 Multirole Fighter Technical Dossier',
      authorOrPublisher: 'Rosoboronexport (Nga)',
      date: 'Tài liệu giới thiệu chính thức',
      description: 'Tài liệu giới thiệu chính thức của cơ quan xuất khẩu quốc phòng Nga, cung cấp thông tin chuẩn xác về phân loại, tổ lái 2 người, 2 động cơ AL-31F và khối lượng cất cánh tối đa 34.500 kg.',
      url: 'https://roe.ru/pdfs/pdf_4668.pdf',
      linkText: 'Đọc tài liệu kỹ thuật Rosoboronexport'
    },
    {
      id: 3,
      title: 'Su-30MKK Russian Multirole Fighter Aircraft',
      authorOrPublisher: 'U.S. Army – OE Data Integration Network (ODIN)',
      date: 'Tra cứu dữ liệu quân sự công khai',
      description: 'Tài liệu dữ liệu hàng không quân sự, cung cấp thông tin về quan hệ phát triển giữa nhánh Su-30MKK và Su-30MK2 sản xuất tại KnAAPO, đồng thời phân biệt các biến thể trong họ Su-30.',
      url: 'https://odin.t2com.army.mil/WEG/Asset/930bf90c944363b8e4ccda0a74476d39',
      linkText: 'Tra cứu tài liệu ODIN'
    },
    {
      id: 4,
      title: 'Ảnh hiếm quá trình tiếp nhận Su-30MK2 của không quân Việt Nam 20 năm trước',
      authorOrPublisher: 'VTC News – Tác giả Trà Khánh',
      date: '18/04/2024',
      description: 'Cung cấp tư liệu lịch sử về quá trình tiếp nhận, vận chuyển bằng An-124, lắp ráp và bàn giao lô Su-30 đầu tiên cho Việt Nam năm 2004, cùng tổng kết các đợt chuyển giao 2004–2016.',
      url: 'https://vtcnews.vn/anh-hiem-qua-trinh-tiep-nhan-su-30mk2-cua-khong-quan-viet-nam-20-nam-truoc-ar862903.html',
      linkText: 'Đọc bài viết trên VTC News'
    },
    {
      id: 5,
      title: 'Điểm lại các thương vụ mua bán vũ khí Việt – Nga',
      authorOrPublisher: 'Báo điện tử Soha',
      date: '06/03/2013',
      description: 'Cung cấp thông tin tổng hợp về các hợp đồng mua sắm máy bay Su-30 của Việt Nam, phản ánh sự thận trọng trong định danh lô Su-30 đầu tiên và các lô Su-30MK2 tiếp theo.',
      url: 'https://soha.vn/quan-su/diem-lai-cac-thuong-vu-mua-ban-vu-khi-viet-nga-20130306063446002.htm',
      linkText: 'Đọc bài viết trên Soha'
    },
    {
      id: 6,
      title: 'Kinh nghiệm chuyển loại, làm chủ máy bay thế hệ mới ở Đoàn không quân Lam Sơn (bài 1)',
      authorOrPublisher: 'Báo Quân đội nhân dân',
      date: '24/04/2018',
      description: 'Ghi nhận thực tế công tác chuẩn bị cơ sở vật chất, lựa chọn nhân lực, đào tạo chuyển loại phi công và làm chủ kỹ thuật Su-30MK2 tại Trung đoàn Không quân 927.',
      url: 'https://www.qdnd.vn/quoc-phong-an-ninh/xay-dung-quan-doi/kinh-nghiem-chuyen-loai-lam-chu-may-bay-the-he-moi-o-doan-khong-quan-lam-son-bai-1-537063',
      linkText: 'Đọc bài viết trên Báo QĐND'
    },
    {
      id: 7,
      title: 'Làm chủ “Hổ mang chúa” SU-30MK2',
      authorOrPublisher: 'Báo Quân đội nhân dân',
      date: '23/10/2024',
      description: 'Phóng sự ảnh và tư liệu về hoạt động huấn luyện, trực ban sẵn sàng chiến đấu bảo vệ vùng trời, biển đảo Tổ quốc và nhiệm vụ đào tạo phi công Su-30MK2 tại Trung đoàn Không quân 935.',
      url: 'https://www.qdnd.vn/da-phuong-tien/cuoc-thi-anh-chan-dung-nguoi-chien-si/anh-bo/lam-chu-ho-mang-chua-su-30mk2-799904',
      linkText: 'Đọc phóng sự trên Báo QĐND'
    },
    {
      id: 8,
      title: 'Quân chủng Phòng không – Không quân kiểm tra phân cấp kỹ thuật phi công năm 2024',
      authorOrPublisher: 'Báo Quân đội nhân dân',
      date: '30/09/2024',
      description: 'Thông tin về công tác kiểm tra, đánh giá định kỳ trình độ chuyên môn, lý thuyết hàng không và kỹ năng thực hành đối với lực lượng phi công, thành viên tổ bay Su-30MK2.',
      url: 'https://www.qdnd.vn/quoc-phong-an-ninh/tin-tuc/quan-chung-phong-khong-khong-quan-kiem-tra-phan-cap-ky-thuat-phi-cong-nam-2024-796720',
      linkText: 'Đọc thông tin trên Báo QĐND'
    }
  ]
};
