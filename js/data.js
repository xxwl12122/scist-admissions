/**
 * SCIST 星渊科技大学招生数据中心
 * data.js — 所有静态数据定义（招生数据、专业、新闻、FAQ、校园图鉴）
 * 严格对标国内顶尖新型研究型大学（西湖大学、南方科技大学、上海科技大学）
 */

/* =========================================================================
   招生历年分数线大数据（含国内高考规范：省控线差、位次、新高考选科标签）
   ========================================================================= */
const ADMISSION_DATA = [
  // ── 北京 (新高考改革试验区，选考物化双选，2025特招线 527 / 2024特招线 523 / 2023特招线 527) ──
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 527, diff: 161, score: 688, rank: 410, quota: 15, year: "2025" },
  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 527, diff: 165, score: 692, rank: 320, quota: 20, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 527, diff: 154, score: 681, rank: 680, quota: 12, year: "2025" },
  { major: "受控核聚变与高温超导材料 (强基计划)", college: "未来能源材料研究院", province: "北京", stream: "强基拔尖", tag: "强基计划基础科学专项", batch: "强基专项", provLine: 527, diff: 152, score: 679, rank: 790, quota: 10, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与智能交叉学院", province: "北京", stream: "综合改革", tag: "综合改革（物理基础）", batch: "特招批次", provLine: 527, diff: 156, score: 683, rank: 590, quota: 14, year: "2025" },
  { major: "天体物理学与引力波引力透镜观测", college: "空间科学与天文书院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 527, diff: 150, score: 677, rank: 860, quota: 8, year: "2025" },

  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 523, diff: 162, score: 685, rank: 470, quota: 15, year: "2024" },
  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 523, diff: 166, score: 689, rank: 360, quota: 18, year: "2024" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 523, diff: 155, score: 678, rank: 720, quota: 12, year: "2024" },
  { major: "受控核聚变与高温超导材料 (强基计划)", college: "未来能源材料研究院", province: "北京", stream: "强基拔尖", tag: "强基计划基础科学专项", batch: "强基专项", provLine: 523, diff: 152, score: 675, rank: 840, quota: 10, year: "2024" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与智能交叉学院", province: "北京", stream: "综合改革", tag: "综合改革（物理基础）", batch: "特招批次", provLine: 523, diff: 157, score: 680, rank: 630, quota: 12, year: "2024" },
  { major: "天体物理学与引力波引力透镜观测", college: "空间科学与天文书院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 523, diff: 149, score: 672, rank: 910, quota: 8, year: "2024" },

  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 527, diff: 156, score: 683, rank: 510, quota: 14, year: "2023" },
  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 527, diff: 160, score: 687, rank: 390, quota: 16, year: "2023" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "北京", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 527, diff: 148, score: 675, rank: 760, quota: 11, year: "2023" },
  { major: "受控核聚变与高温超导材料 (强基计划)", college: "未来能源材料研究院", province: "北京", stream: "强基拔尖", tag: "强基计划基础科学专项", batch: "强基专项", provLine: 527, diff: 144, score: 671, rank: 880, quota: 9, year: "2023" },

  // ── 浙江 (新高考综合改革，2025特招线 595 / 2024特招线 595 / 2023特招线 594) ──
  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "浙江", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 595, diff: 99, score: 694, rank: 380, quota: 25, year: "2025" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "浙江", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 595, diff: 96, score: 691, rank: 490, quota: 18, year: "2025" },
  { major: "受控核聚变与高温超导材料", college: "未来能源材料研究院", province: "浙江", stream: "综合改革", tag: "综合改革（物理基础）", batch: "特招批次", provLine: 595, diff: 90, score: 685, rank: 750, quota: 15, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "浙江", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 595, diff: 92, score: 687, rank: 660, quota: 16, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与智能交叉学院", province: "浙江", stream: "综合改革", tag: "综合改革（物理基础）", batch: "特招批次", provLine: 595, diff: 87, score: 682, rank: 810, quota: 12, year: "2025" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "浙江", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 595, diff: 96, score: 691, rank: 420, quota: 22, year: "2024" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "浙江", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 595, diff: 93, score: 688, rank: 530, quota: 16, year: "2024" },
  { major: "受控核聚变与高温超导材料", college: "未来能源材料研究院", province: "浙江", stream: "综合改革", tag: "综合改革（物理基础）", batch: "特招批次", provLine: 595, diff: 86, score: 681, rank: 800, quota: 14, year: "2024" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "浙江", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 594, diff: 94, score: 688, rank: 460, quota: 20, year: "2023" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "浙江", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 594, diff: 91, score: 685, rank: 570, quota: 15, year: "2023" },

  // ── 安徽 (新高考物理类 / 传统理科基准，2025特招线 514 / 2024特招线 514 / 2023一本线 482) ──
  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "安徽", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 514, diff: 168, score: 682, rank: 290, quota: 35, year: "2025" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "安徽", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 514, diff: 166, score: 680, rank: 350, quota: 30, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "安徽", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 514, diff: 160, score: 674, rank: 520, quota: 22, year: "2025" },
  { major: "受控核聚变与高温超导材料 (强基计划)", college: "未来能源材料研究院", province: "安徽", stream: "强基拔尖", tag: "强基计划基础科学专项", batch: "强基专项", provLine: 514, diff: 157, score: 671, rank: 640, quota: 18, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与智能交叉学院", province: "安徽", stream: "综合改革", tag: "综合改革（物理基础）", batch: "特招批次", provLine: 514, diff: 154, score: 668, rank: 780, quota: 15, year: "2025" },
  { major: "天体物理学与引力波引力透镜观测", college: "空间科学与天文书院", province: "安徽", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 514, diff: 151, score: 665, rank: 920, quota: 10, year: "2025" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "安徽", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 514, diff: 165, score: 679, rank: 320, quota: 32, year: "2024" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "安徽", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 514, diff: 163, score: 677, rank: 390, quota: 28, year: "2024" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "安徽", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 514, diff: 157, score: 671, rank: 560, quota: 20, year: "2024" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "安徽", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 482, diff: 194, score: 676, rank: 350, quota: 30, year: "2023" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "安徽", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 482, diff: 192, score: 674, rank: 420, quota: 25, year: "2023" },

  // ── 广东 (新高考物理类，2025特招线 539 / 2024特招线 539 / 2023特招线 539) ──
  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "广东", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 539, diff: 147, score: 686, rank: 460, quota: 28, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与智能交叉学院", province: "广东", stream: "综合改革", tag: "综合改革（物理基础）", batch: "特招批次", provLine: 539, diff: 140, score: 679, rank: 780, quota: 16, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "广东", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 539, diff: 142, score: 681, rank: 690, quota: 15, year: "2025" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "广东", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 539, diff: 144, score: 683, rank: 580, quota: 18, year: "2025" },
  { major: "受控核聚变与高温超导材料", college: "未来能源材料研究院", province: "广东", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 539, diff: 137, score: 676, rank: 920, quota: 12, year: "2025" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "广东", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 539, diff: 144, score: 683, rank: 500, quota: 25, year: "2024" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "广东", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 539, diff: 141, score: 680, rank: 630, quota: 16, year: "2024" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "广东", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 539, diff: 139, score: 678, rank: 740, quota: 14, year: "2024" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "广东", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 539, diff: 141, score: 680, rank: 540, quota: 22, year: "2023" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "广东", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 539, diff: 138, score: 677, rank: 670, quota: 15, year: "2023" },

  // ── 四川 (传统理科批，一本线 2025理科533 / 2024理科529 / 2023理科520) ──
  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "四川", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 533, diff: 156, score: 689, rank: 310, quota: 20, year: "2025" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "四川", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 533, diff: 151, score: 684, rank: 450, quota: 18, year: "2025" },
  { major: "受控核聚变与高温超导材料", college: "未来能源材料研究院", province: "四川", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 533, diff: 144, score: 677, rank: 710, quota: 14, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "四川", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 533, diff: 147, score: 680, rank: 590, quota: 15, year: "2025" },
  { major: "天体物理学与引力波引力透镜观测", college: "空间科学与天文书院", province: "四川", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 533, diff: 138, score: 671, rank: 860, quota: 9, year: "2025" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "四川", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 529, diff: 157, score: 686, rank: 340, quota: 18, year: "2024" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "四川", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 529, diff: 152, score: 681, rank: 490, quota: 16, year: "2024" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "四川", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 520, diff: 163, score: 683, rank: 370, quota: 16, year: "2023" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "四川", stream: "物化双选", tag: "传统理科批", batch: "本科一批", provLine: 520, diff: 159, score: 679, rank: 520, quota: 15, year: "2023" },

  // ── 江苏 (新高考物理类，2025特招线 516 / 2024特招线 516 / 2023特招线 512) ──
  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "江苏", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 516, diff: 162, score: 678, rank: 520, quota: 24, year: "2025" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "江苏", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 516, diff: 160, score: 676, rank: 590, quota: 20, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天力学与微重力学院", province: "江苏", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 516, diff: 154, score: 670, rank: 780, quota: 14, year: "2025" },
  { major: "受控核聚变与高温超导材料", college: "未来能源材料研究院", province: "江苏", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 516, diff: 151, score: 667, rank: 920, quota: 12, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与智能交叉学院", province: "江苏", stream: "综合改革", tag: "综合改革（物理基础）", batch: "特招批次", provLine: 516, diff: 156, score: 672, rank: 860, quota: 13, year: "2025" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "江苏", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 516, diff: 159, score: 675, rank: 560, quota: 22, year: "2024" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "江苏", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 516, diff: 157, score: 673, rank: 640, quota: 18, year: "2024" },

  { major: "通用人工智能与多模态世界模型 (图灵班)", college: "图灵计算机书院", province: "江苏", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 512, diff: 160, score: 672, rank: 600, quota: 20, year: "2023" },
  { major: "量子计算与光量子信息 (星火拔尖直博班)", college: "严济慈物理书院", province: "江苏", stream: "物化双选", tag: "新高考改革（物化双选）", batch: "特招批次", provLine: 512, diff: 158, score: 670, rank: 680, quota: 16, year: "2023" },
];

/* =========================================================================
   专业详细数据（学科矩阵：硬核科研图谱与国内顶尖拔尖培养体系）
   ========================================================================= */
const MAJORS_DATA = [
  {
    id: "quantum",
    cat: "quantum",
    icon: "binary",
    colorClass: "cyan",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80",
    badge: "星火拔尖计划 / 钱学森力学班",
    title: "量子计算与光量子信息科学",
    description: "以超导量子比特与光量子纠缠网络为核心，依托星渊国家超导量子实验室，本科阶段即可直接参与下一代百比特容错量子计算机算法研发与测控。",
    features: [
      { text: "国家重大平台：72量子比特超导稀释制冷试验集群" },
      { text: "硬核培养成效：78.4% 推免保研率，直通合肥量子国家实验室" },
    ],
    college: "严济慈物理书院",
    tags: ["本硕博一体化连读", "两院院士1对1导师", "国家重点实验室直通"],
    detail: "本专业定位于培养具备从底层物理实现到高层量子算法体系架构全栈能力的未来战略科学家。大一开设《高等量子力学研讨》《微积分进阶》，大二全员进驻超导微纳加工中心与量子光学中心进行研讨型科研实验。毕业生在量子物理基础科研与集成芯片攻坚领域具备极强竞争力。"
  },
  {
    id: "space1",
    cat: "space",
    icon: "rocket",
    colorClass: "sky",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    badge: "国家深空实验室联合攻坚",
    title: "深空探测动力与小行星抓捕工程",
    description: "针对火星科考基地、近地小行星资源勘探与大推力霍尔电推进发动机，联合国家深空科学探测实验室，培养跨行星工程总师型领军人才。",
    features: [
      { text: "代表设施：高超声速风洞与等离子体推力测试靶场" },
      { text: "毕业去向：中国航天科技/科工直聘通道与国家航天院所直博" },
    ],
    college: "空天力学与微重力交叉学院",
    tags: ["国家卓越工程师专项", "驻所联合培养", "重大工程实战"],
    detail: "融合现代连续介质力学、航天飞行动力学、极端环境耐高温超导材料与空间自主导航。学生将在大三参与‘天穹一号’微纳立方星的真实遥测与测控任务，核心课程由国家重大航天型号工程总师级研究员亲自担纲授课。"
  },
  {
    id: "bio1",
    cat: "bio",
    icon: "activity",
    colorClass: "purple",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    badge: "新工科与脑科学前沿",
    title: "突触仿生神经工程与脑机接口",
    description: "探索侵入式高通量柔性脑机电极阵列与类脑计算芯片。将神经生物学、微纳制造与深度强化学习融为一体，攻克神经重大疾病逆转与心智增强。",
    features: [
      { text: "代表设施：万通道高通量柔性脑机神经记录加工平台" },
      { text: "学术赋能：本科生平均以第一作者发表高水平顶刊论文1.2篇" },
    ],
    college: "生命与智能交叉书院",
    tags: ["医工结合先锋", "类脑智能国家工程研究中心", "全额科研津贴"],
    detail: "该学科由院士领衔的知名神经电子科学家团队直接创立，配备国内领先的双光子活体钙成像设备。学生可根据研究兴趣自由选取‘类脑架构计算芯片算法’或‘生物兼容神经微电极’分支，为新一代人工智能与人机交互奠基。"
  },
  {
    id: "energy1",
    cat: "energy",
    icon: "flame",
    colorClass: "emerald",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80",
    badge: "终极能源国家战略专项",
    title: "受控核聚变与高温超导材料",
    description: "以托卡马克“人造太阳”磁约束聚变装置为依托，深耕高温超导强磁场约束物理、极端热负荷第一壁材料与兆瓦级微波加热工程。",
    features: [
      { text: "代表设施：“天渊”稳态强磁场球形托卡马克实验装置" },
      { text: "产研对接：直通中科院等离子体物理所与新一代核聚变大科学工程" },
    ],
    college: "未来能源材料研究院",
    tags: ["国家能源先导专项", "大科学装置现场科研", "免试直博通道"],
    detail: "聚焦人类未来能源终极破局。本专业本科生直接享有驻站科研权限，亲身参与一亿度等离子体稳态放电实验。提供大科学装置专属科研补贴与中科院院所联合培育直推通道。"
  },
  {
    id: "quantum2",
    cat: "quantum",
    icon: "brain-circuit",
    colorClass: "cyan",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    badge: "图灵拔尖荣誉班",
    title: "通用人工智能与多模态世界模型",
    description: "突破大模型推理与世界建模极限，探索物理规律约束下的自主具身智能与神经符号系统。全校配备万核级超算本科专属科研集群。",
    features: [
      { text: "专属算力：本科生每人享有独立高规格昇腾/GPU专属算力节点" },
      { text: "深造与就业：92% 毕业生直通中科院计算所及国内硬科技AI领军企业" },
    ],
    college: "图灵计算机书院",
    tags: ["算力自由保障", "百亿模型实训", "国家实验室联培通道"],
    detail: "课程紧密对接国家新一代人工智能战略体系，涵盖具身人形机器人全身动力学控制、神经隐式三维几何重建、可解释数学推理逻辑模型。大二暑期即直接进入国家重点实验室进行课题实战攻关。"
  },
  {
    id: "space2",
    cat: "space",
    icon: "telescope",
    colorClass: "sky",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    badge: "天体测量与暗物质探索",
    title: "天体物理学与引力波引力透镜观测",
    description: "联合国家天文台与FAST“中国天眼”射电基地，聚焦暗物质粒子间接探测、黑洞吸积盘数值模拟与空间引力波空间阵列科学数据解算。",
    features: [
      { text: "基地共享：拥有青海冷湖 2.5米 大视场巡天望远镜专属观测机时" },
      { text: "师资阵容：多位国家引力波探测计划首席科学家担任导师" },
    ],
    college: "空间科学与天文书院",
    tags: ["大科学巡天装置", "中国天眼FAST机时", "数理基础拔尖通道"],
    detail: "依托高海拔宇宙线观测站（LHAASO）与悟空号暗物质卫星核心科学团队，为学子提供直达宇宙深处的科研视野。在星空纯净的高原巡天观测基地开展实打实的科学巡天数据处理与星历解算。"
  },
];

/* =========================================================================
   新闻数据（严格对标国内高校招生权威公文文风）
   ========================================================================= */
const NEWS_DATA = [
  {
    tag: "星火拔尖计划",
    tagColor: "cyan",
    date: "2026-04-10",
    title: "星渊科技大学2026年本科生「星火拔尖计划」选拔简章正式发布（零门槛本硕博连读）",
    excerpt: "面向数理基础扎实、志向高远的青年学子，入校后直接确立两院院士及领军学者一对一导师制，全面实行「3+1+X」贯通式直博通道，免除大类分流焦虑。",
    readTime: 4
  },
  {
    tag: "强基计划专项",
    tagColor: "purple",
    date: "2026-03-28",
    title: "教育部直批：2026年「强基计划」基础科学专项招生简章与校测方案公告",
    excerpt: "聚焦量子物理、极端能源材料、基础力学与脑认知计算。入选考生入校即享有国家重大科研基础设施直接使用权限与全额基础学科资助津贴。",
    readTime: 4
  },
  {
    tag: "学科竞赛破格",
    tagColor: "emerald",
    date: "2026-03-15",
    title: "2026年五大学科奥林匹克竞赛金银牌考生「破格入围与直通免试」通道开启",
    excerpt: "全国中学生数学、物理、化学、生物、信息学奥林匹克决赛获奖考生，可直接申请破格入围并进入图灵班或钱学森班培养矩阵，即日起开放材料申报。",
    readTime: 3
  },
  {
    tag: "育人质量通报",
    tagColor: "sky",
    date: "2026-02-20",
    title: "推免保研率达 78.4%：2025届本科毕业生升学质量报告及国家实验室去向通告",
    excerpt: "全校应届本科毕业生整体深造率超86%，其中直博中科院各研究所、国家实验室及国内头部硬科技领航企业比例达92.3%，硬核科研育人成效显著。",
    readTime: 3
  },
  {
    tag: "政策权威解读",
    tagColor: "amber",
    date: "2026-01-28",
    title: "「100%零门槛自主转专业」实施办法深化：不设绩点门槛，以学生学术志趣为唯一导向",
    excerpt: "招生办公室公告：大一学年末全校所有专业无条件面向全体学生开放申请，不设原专业挂科门槛与绩点阻隔，历史自由转换达成率持续保持在 98.7% 以上。",
    readTime: 5
  },
  {
    tag: "卓越奖学金",
    tagColor: "violet",
    date: "2026-01-10",
    title: "2026级本科新生「星渊卓越人才奖学金」升级方案：特等奖最高十万元全额兜底",
    excerpt: "涵盖量子先锋专项、深空使者专项与硬核科学家奖助学金，全校本科生奖助学金覆盖面超过75%，郑重承诺不让任何一名优秀学子因经济原因止步科学殿堂。",
    readTime: 3
  },
];

/* =========================================================================
   FAQ 数据（贴合国内高考家长与考生关切点）
   ========================================================================= */
const FAQ_DATA = [
  {
    q: "星渊科技大学的「100%零门槛转专业」是如何执行的？是否存在绩点卡人？",
    a: "学校全面遵循国内顶尖新型研究型大学‘以学生志趣为先’的育人理念。大一学年结束时，全校所有本科专业（包括炙手可热的图灵计算机班、量子物理英才班）向全体本科生无条件开放申请。转出专业不设任何绩点或不及格门槛，转入仅需通过目标书院的基础学力交流考察，历史转专业成功率稳定在 98.7% 以上。"
  },
  {
    q: "本科生的推免保研率与直博去向如何？升学质量如何保障？",
    a: "星渊科技大学作为高起点新型研究型学府，全校本科生推免保研率高达 78.4%，整体升学深造率超过 86.4%。毕业生绝大部分直通合肥量子国家实验室、中科院空天院/物理所/微系统所，以及国内头部硬科技研发领跑机构。入校即对接重大攻坚专项，实现本硕博连读培养。"
  },
  {
    q: "本科生从大几开始进实验室？能否接触到百亿级国家大科学重器？",
    a: "所有大一新生在入学报到后即通过双向互选匹配‘一生一导师’（两院院士、国家杰青或特聘研究员全程指导）。大二即全员进入真实科研课题组，刷卡进入超导微纳制造超净间、高超声速风洞或托卡马克聚变装置进行实训，学校每年设立专项‘种子科研探索基金’资助本科生独立开展先导实验。"
  },
  {
    q: "新高考改革省份（物化双选）与传统高考省份如何填报？文科生是否招收？",
    a: "在绝大多数实行新高考改革的省份，我校核心理工科专业均严格要求‘物理+化学’两门必选；在传统高考省份列入本科一批（理工类）录取。目前学校专注于前沿理工交叉与极端战略工程，暂无纯文史哲批次招生，但校内开设‘科技史与科技哲学’优质交叉辅修课程供理科生跨学科选读。"
  },
  {
    q: "「星火拔尖计划」与「强基计划」有什么区别？报考流程是怎样的？",
    a: "「强基计划」由教育部阳光高考平台统一报名，主要聚焦基础物理、应用化学与重大基础工程，单独划线提前批次录取；「星火拔尖计划」是我校校级最高层次创新人才实验班，既在统招一批次设置专属招生代码，亦在大一进校后提供全校二次拔尖选拔机会，享有零门槛直博与院士联合指导双重保障。"
  },
  {
    q: "学生的书院住宿条件、伙食与奖助学金支持如何？",
    a: "学校全面实行现代科技书院制，本科生标准宿舍为高标准现代化双人间（干湿分离独立卫浴、24小时地暖新风、电动升降人体工学书桌）。全校本科生奖助学金覆盖面超过75%，特等奖学金每年单人高达10万元人民币，并设有全额助学绿色通道，确保每位学子心无旁骛求索科学真理。"
  },
];

/* =========================================================================
   校园图鉴数据（全部替换为高精度硬核科研设施与现代研究型大学建筑）
   ========================================================================= */
const CAMPUS_DATA = [
  {
    group: "lab",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    badge: "国家级科研重器",
    badgeColor: "cyan",
    title: "百比特超导量子中央光学超净实验室",
    subtitle: "超低温 10mK 稀释制冷机与量子纠缠测量光路",
    caption: "配备 Class 100 级无尘超净间与极低温量子测控平台，本科生经安全考核后全天候刷卡入驻开展量子比特调测。"
  },
  {
    group: "library",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    badge: "学术信息中枢",
    badgeColor: "blue",
    title: "寰宇智联现代科技中枢图书馆",
    subtitle: "挑空现代科研中枢与全学科顶刊数字中心",
    caption: "挑空通明的大型现代学术研讨中枢，藏书280万册，配备全静音个人研学仓、顶级学术期刊全库实时镜像与24小时通宵研讨区。"
  },
  {
    group: "living",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    badge: "现代书院风貌",
    badgeColor: "teal",
    title: "现代科研综合楼与书院建筑群",
    subtitle: "冷灰色几何玻璃幕墙生态楼宇与智慧书院",
    caption: "采用绿色低碳被动式建筑工艺，融合院士工作站、双人间极客生活公寓与每栋书院专属的头脑风暴创客空间。"
  },
  {
    group: "lab",
    img: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    badge: "深空观测设施",
    badgeColor: "sky",
    title: "2.5米大视场巡天测控台与射电阵列",
    subtitle: "联动冷湖高原与国家深空探测实验室观测阵列",
    caption: "直接联动青海冷湖基地巡天望远镜与国家射电阵列遥测终端，为本科生提供真实的巡天观测机时与深空数据解析实战。"
  },
  {
    group: "living",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    badge: "前沿攻坚实景",
    badgeColor: "purple",
    title: "具身智能与仿生机器人调测靶场",
    subtitle: "双足仿生、四足机器狗与全自主具身控制实测基地",
    caption: "配备五轴联动精密加工中心、动力学实测台与动作捕捉分析场，支持本科生直接攻克人形机器人平衡与全身动态协同算法。"
  },
  {
    group: "lab",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    badge: "微纳制造核心",
    badgeColor: "indigo",
    title: "超导微纳制造千级超净间",
    subtitle: "穿全套科研防护服调试光刻机与纳米晶圆",
    caption: "全套科研级紫外/电子束光刻机、薄膜沉积与等离子体刻蚀设备，本科生在专业工程师指导下全流程亲手制备纳米级超导芯片器件。"
  },
];

/* =========================================================================
   硬核育人关键统计数字（对标国内顶尖新型研究型大学）
   ========================================================================= */
const STATS_DATA = [
  { target: 18, suffix: "+", color: "cyan", label: "国家级重点实验室/工程中心" },
  { target: 42, suffix: "位", color: "sky", label: "两院院士与国家杰青导师" },
  { target: 78, suffix: ".4%", color: "blue", label: "本科毕业生推免保研直博率" },
  { target: 92, suffix: "%", color: "teal", label: "毕业生直通战略科技与硬核领跑企业" },
];
