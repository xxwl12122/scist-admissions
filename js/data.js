/**
 * SCIST 星渊科技大学招生数据中心
 * data.js — 所有静态数据定义（招生数据、专业、新闻、FAQ）
 */

/* =========================================================================
   招生历年分数线大数据
   ========================================================================= */
const ADMISSION_DATA = [
  // ── 北京 ──
  { major: "量子计算与光量子信息 (少年班/英才班)", college: "严济慈物理学院", province: "北京", stream: "物化双选", score: 688, rank: 410, quota: 15, year: "2025" },
  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "北京", stream: "物化双选", score: 692, rank: 320, quota: 20, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "北京", stream: "物化双选", score: 681, rank: 680, quota: 12, year: "2025" },
  { major: "受控核聚变与高温超导材料 (强基计划)", college: "未来能源研究院", province: "北京", stream: "强基拔尖", score: 679, rank: 790, quota: 10, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与认知交叉学院", province: "北京", stream: "综合改革", score: 683, rank: 590, quota: 14, year: "2025" },
  { major: "天体物理学与引力波引力透镜观测", college: "天文与空间学院", province: "北京", stream: "物化双选", score: 677, rank: 860, quota: 8, year: "2025" },

  { major: "量子计算与光量子信息 (少年班/英才班)", college: "严济慈物理学院", province: "北京", stream: "物化双选", score: 685, rank: 470, quota: 15, year: "2024" },
  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "北京", stream: "物化双选", score: 689, rank: 360, quota: 18, year: "2024" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "北京", stream: "物化双选", score: 678, rank: 720, quota: 12, year: "2024" },
  { major: "受控核聚变与高温超导材料 (强基计划)", college: "未来能源研究院", province: "北京", stream: "强基拔尖", score: 675, rank: 840, quota: 10, year: "2024" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与认知交叉学院", province: "北京", stream: "综合改革", score: 680, rank: 630, quota: 12, year: "2024" },
  { major: "天体物理学与引力波引力透镜观测", college: "天文与空间学院", province: "北京", stream: "物化双选", score: 672, rank: 910, quota: 8, year: "2024" },

  { major: "量子计算与光量子信息 (少年班/英才班)", college: "严济慈物理学院", province: "北京", stream: "物化双选", score: 683, rank: 510, quota: 14, year: "2023" },
  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "北京", stream: "物化双选", score: 687, rank: 390, quota: 16, year: "2023" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "北京", stream: "物化双选", score: 675, rank: 760, quota: 11, year: "2023" },
  { major: "受控核聚变与高温超导材料 (强基计划)", college: "未来能源研究院", province: "北京", stream: "强基拔尖", score: 671, rank: 880, quota: 9, year: "2023" },

  // ── 浙江 ──
  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "浙江", stream: "物化双选", score: 694, rank: 380, quota: 25, year: "2025" },
  { major: "量子计算与光量子信息 (少年班/英才班)", college: "严济慈物理学院", province: "浙江", stream: "物化双选", score: 691, rank: 490, quota: 18, year: "2025" },
  { major: "受控核聚变与高温超导材料", college: "未来能源研究院", province: "浙江", stream: "综合改革", score: 685, rank: 750, quota: 15, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "浙江", stream: "物化双选", score: 687, rank: 660, quota: 16, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与认知交叉学院", province: "浙江", stream: "综合改革", score: 682, rank: 810, quota: 12, year: "2025" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "浙江", stream: "物化双选", score: 691, rank: 420, quota: 22, year: "2024" },
  { major: "量子计算与光量子信息 (少年班/英才班)", college: "严济慈物理学院", province: "浙江", stream: "物化双选", score: 688, rank: 530, quota: 16, year: "2024" },
  { major: "受控核聚变与高温超导材料", college: "未来能源研究院", province: "浙江", stream: "综合改革", score: 681, rank: 800, quota: 14, year: "2024" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "浙江", stream: "物化双选", score: 688, rank: 460, quota: 20, year: "2023" },
  { major: "量子计算与光量子信息 (少年班/英才班)", college: "严济慈物理学院", province: "浙江", stream: "物化双选", score: 685, rank: 570, quota: 15, year: "2023" },

  // ── 安徽 ──
  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "安徽", stream: "物化双选", score: 682, rank: 290, quota: 35, year: "2025" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "安徽", stream: "物化双选", score: 680, rank: 350, quota: 30, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "安徽", stream: "物化双选", score: 674, rank: 520, quota: 22, year: "2025" },
  { major: "受控核聚变与高温超导材料 (强基计划)", college: "未来能源研究院", province: "安徽", stream: "强基拔尖", score: 671, rank: 640, quota: 18, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与认知交叉学院", province: "安徽", stream: "综合改革", score: 668, rank: 780, quota: 15, year: "2025" },
  { major: "天体物理学与引力波引力透镜观测", college: "天文与空间学院", province: "安徽", stream: "物化双选", score: 665, rank: 920, quota: 10, year: "2025" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "安徽", stream: "物化双选", score: 679, rank: 320, quota: 32, year: "2024" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "安徽", stream: "物化双选", score: 677, rank: 390, quota: 28, year: "2024" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "安徽", stream: "物化双选", score: 671, rank: 560, quota: 20, year: "2024" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "安徽", stream: "物化双选", score: 676, rank: 350, quota: 30, year: "2023" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "安徽", stream: "物化双选", score: 674, rank: 420, quota: 25, year: "2023" },

  // ── 广东 ──
  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "广东", stream: "物化双选", score: 686, rank: 460, quota: 28, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与认知交叉学院", province: "广东", stream: "综合改革", score: 679, rank: 780, quota: 16, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "广东", stream: "物化双选", score: 681, rank: 690, quota: 15, year: "2025" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "广东", stream: "物化双选", score: 683, rank: 580, quota: 18, year: "2025" },
  { major: "受控核聚变与高温超导材料", college: "未来能源研究院", province: "广东", stream: "物化双选", score: 676, rank: 920, quota: 12, year: "2025" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "广东", stream: "物化双选", score: 683, rank: 500, quota: 25, year: "2024" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "广东", stream: "物化双选", score: 680, rank: 630, quota: 16, year: "2024" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "广东", stream: "物化双选", score: 678, rank: 740, quota: 14, year: "2024" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "广东", stream: "物化双选", score: 680, rank: 540, quota: 22, year: "2023" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "广东", stream: "物化双选", score: 677, rank: 670, quota: 15, year: "2023" },

  // ── 四川 ──
  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "四川", stream: "物化双选", score: 689, rank: 310, quota: 20, year: "2025" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "四川", stream: "物化双选", score: 684, rank: 450, quota: 18, year: "2025" },
  { major: "受控核聚变与高温超导材料", college: "未来能源研究院", province: "四川", stream: "物化双选", score: 677, rank: 710, quota: 14, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "四川", stream: "物化双选", score: 680, rank: 590, quota: 15, year: "2025" },
  { major: "天体物理学与引力波引力透镜观测", college: "天文与空间学院", province: "四川", stream: "物化双选", score: 671, rank: 860, quota: 9, year: "2025" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "四川", stream: "物化双选", score: 686, rank: 340, quota: 18, year: "2024" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "四川", stream: "物化双选", score: 681, rank: 490, quota: 16, year: "2024" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "四川", stream: "物化双选", score: 683, rank: 370, quota: 16, year: "2023" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "四川", stream: "物化双选", score: 679, rank: 520, quota: 15, year: "2023" },

  // ── 江苏 ──
  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "江苏", stream: "物化双选", score: 678, rank: 520, quota: 24, year: "2025" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "江苏", stream: "物化双选", score: 676, rank: 590, quota: 20, year: "2025" },
  { major: "深空探测动力与小行星抓捕工程", college: "空天微重力学院", province: "江苏", stream: "物化双选", score: 670, rank: 780, quota: 14, year: "2025" },
  { major: "受控核聚变与高温超导材料", college: "未来能源研究院", province: "江苏", stream: "物化双选", score: 667, rank: 920, quota: 12, year: "2025" },
  { major: "突触仿生神经工程与脑机接口", college: "生命与认知交叉学院", province: "江苏", stream: "综合改革", score: 672, rank: 860, quota: 13, year: "2025" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "江苏", stream: "物化双选", score: 675, rank: 560, quota: 22, year: "2024" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "江苏", stream: "物化双选", score: 673, rank: 640, quota: 18, year: "2024" },

  { major: "通用人工智能与多模态世界模型", college: "图灵计算机学院", province: "江苏", stream: "物化双选", score: 672, rank: 600, quota: 20, year: "2023" },
  { major: "量子计算与光量子信息 (英才班)", college: "严济慈物理学院", province: "江苏", stream: "物化双选", score: 670, rank: 680, quota: 16, year: "2023" },
];

/* =========================================================================
   专业详细数据
   ========================================================================= */
const MAJORS_DATA = [
  {
    id: "quantum",
    cat: "quantum",
    icon: "binary",
    colorClass: "cyan",
    badge: "少年班 / 钱学森力学班",
    title: "量子计算与光量子信息科学",
    description: "以超导量子比特与光量子纠缠网络为核心，依托星渊国家超导量子实验室，本科阶段即可直接参与下一代百比特容错量子计算机算法研发。",
    features: [
      { text: "代表设施：72量子比特超导稀释制冷试验集群" },
      { text: "深造去向：92% 直升本校顶尖量子研究院及海外名校" },
    ],
    college: "严济慈物理英才书院",
    tags: ["本硕博贯通", "两院院士1对1导师", "国家特大工程"],
    detail: "本专业定位于培养具备从底层物理实现到高层量子算法体系架构全栈能力的未来科学家。大一开设《量子力学先修与几何基础》，大二全员进驻超导微纳加工中心与量子光学中心进行研讨型科研实验。毕业生在国际量子前沿领域具备碾压级的实操及理论造诣。"
  },
  {
    id: "space1",
    cat: "space",
    icon: "rocket",
    colorClass: "sky",
    badge: "航天局战略合作",
    title: "深空探测动力与小行星抓捕工程",
    description: "针对火星科考基地、近地小行星资源勘探与霍尔电推进发动机，联合国家深空科学探测实验室，培养跨行星工程领航者。",
    features: [
      { text: "代表设施：高超声速风洞与等离子体推力测试靶场" },
      { text: "毕业保障：国家航天院所直聘优先签约权" },
    ],
    college: "空天动力与微重力交叉学院",
    tags: ["高精尖卓越计划", "驻所联合培养", "型号工程实战"],
    detail: "融合现代力学、航天动力学、极端环境材料与空间自主导航。学生将在大三参与'天穹一号'立方星的真实遥测与测控任务，所有核心技术课程均由国家总师级研究员亲自担纲授课。"
  },
  {
    id: "bio1",
    cat: "bio",
    icon: "activity",
    colorClass: "purple",
    badge: "新工科交叉前沿",
    title: "突触仿生神经工程与脑机接口",
    description: "探索侵入式柔性脑机电极阵列与类脑计算芯片。将神经生物学、微纳制造与深度强化学习融为一体，攻克神经疾病逆转与心智增强。",
    features: [
      { text: "代表设施：万通道高通量柔性脑机神经记录平台" },
      { text: "学术赋能：本科生平均以一作发表SCI顶刊1.2篇" },
    ],
    college: "生命科学与智能认知交叉学院",
    tags: ["医工结合", "类脑计算中心", "硅谷与全球名校联培"],
    detail: "该学科由国际知名神经电子科学家团队直接创立，配备全球首屈一指的双光子活体钙成像设备。学生可根据研究兴趣自由选取'类脑架构芯片算法'或'生物兼容神经电极'分支，为人类终极计算形态奠基。"
  },
  {
    id: "energy1",
    cat: "energy",
    icon: "flame",
    colorClass: "emerald",
    badge: "终极能源国家战略",
    title: "受控核聚变与高温超导材料",
    description: "以托卡马克“人造太阳”聚变装置为依托，深耕高温超导强磁场约束物理、极端热负荷壁材料与兆瓦级微波加热工程。",
    features: [
      { text: "代表设施：\"天渊\"稳态强磁场球形托卡马克装置" },
      { text: "国际合作：ITER 国际热核聚变实验堆直通通道" },
    ],
    college: "未来能源与等离子体物理研究院",
    tags: ["终极能源先导专项", "国际大科学装置", "全额科研津贴"],
    detail: "人类未来能源的掌舵手。本专业本科生直接享有驻站科研权限，亲身参与一亿度等离子体稳态放电实验。提供国际热核聚变实验组织的全额海外交流交换奖学金。"
  },
  {
    id: "quantum2",
    cat: "quantum",
    icon: "brain-circuit",
    colorClass: "cyan",
    badge: "图灵荣誉班",
    title: "通用人工智能与多模态世界模型",
    description: "突破大模型推理极限，探索物理约束下的自主具身智能与神经符号系统。全校配备千卡万核超算算力专属本科科研集群。",
    features: [
      { text: "专属算力：本科生每人享有独立高规格 GPU 算力卡槽" },
      { text: "竞赛成就：ACM-ICPC全球总决赛连获冠亚季军" },
    ],
    college: "图灵计算机科学学院",
    tags: ["算力自由", "千亿模型实训", "国际顶级AI实验室直聘"],
    detail: "课程全面对标 Stanford、MIT 最新前沿架构，涵盖具身机器人操控、神经隐式三维渲染、可解释数学推理大模型。配备业内顶级产业实践基地导师，大二暑期开启实景挑战项目。"
  },
  {
    id: "space2",
    cat: "space",
    icon: "telescope",
    colorClass: "sky",
    badge: "天文学世界一流",
    title: "天体物理学与引力波引力透镜观测",
    description: "联合国家天文台与FAST射电望远镜基地，聚焦暗物质粒子间接探测、黑洞吸积盘模拟与空间引力波空间阵列科学数据解算。",
    features: [
      { text: "基地共享：拥有青海冷湖 2.5米 大视场巡天望远镜观测机时" },
      { text: "学术导师：包括多位引力波探测计划首席科学家" },
    ],
    college: "天文与空间科学学院",
    tags: ["大科学巡天装置", "国际深空联盟", "理论与观测双轨制"],
    detail: "依托高海拔宇宙线观测站（LHAASO）与悟空号暗物质卫星核心科学团队，为学生提供直达宇宙深处的科研视野。在星空璀璨的高原观测基地开展真实科学巡天观测实战。"
  },
];

/* =========================================================================
   新闻数据
   ========================================================================= */
const NEWS_DATA = [
  {
    tag: "强基计划",
    tagColor: "cyan",
    date: "2026-04-10",
    title: "星渊科技大学2026年在各省「强基计划」基础学科招生简章正式发布",
    excerpt: "聚焦量子信息、极端能源材料、基础数学与力学。入选考生入校即确立院士导师，全面免除大类分流焦虑，实行「1+3+X」直博绿色通道。",
    readTime: 4
  },
  {
    tag: "少年班 / 拔尖班",
    tagColor: "purple",
    date: "2026-03-28",
    title: "第41期「星渊少年科学家实验班」高二及优秀高一学生初选答辩名单公示",
    excerpt: "面向对数理极端痴迷的青少年人才，测试重在考察思维发散性与独立科研构想，无需死记硬背复杂题型。入选复试名单即日起可查询。",
    readTime: 3
  },
  {
    tag: "宣讲与答疑",
    tagColor: "emerald",
    date: "2026-03-15",
    title: "2026年「星海巡航」全国重点中学教授巡讲团与线上宣讲排期表",
    excerpt: "由30余位特聘教授、书院院长组成的招生咨询团将分赴北京、上海、浙江、安徽、四川等22省市重点高中，现场拆解志愿填报与前沿科研。",
    readTime: 2
  },
  {
    tag: "奖学金",
    tagColor: "sky",
    date: "2026-02-20",
    title: "2026级本科新生「星渊卓越奖学金」体系全新升级，特等奖最高10万元",
    excerpt: "学校在原有奖学金体系基础上新增「量子先锋奖」「深空使者奖」两项专项奖励，直接激励在基础科研方向有突出志向的高中生。",
    readTime: 3
  },
  {
    tag: "政策解读",
    tagColor: "amber",
    date: "2026-01-28",
    title: "「百分百零门槛转专业」政策2026届再度升级——含少年班直通通道详解",
    excerpt: "招生办公室正式公告：2026级入学本科生转专业申请窗口提前至大一下学期第四周，并新增「专业预体验月」制度，允许学生试听其他书院课程后再做决策。",
    readTime: 5
  },
  {
    tag: "国际交流",
    tagColor: "violet",
    date: "2026-01-10",
    title: "与剑桥、加州理工等8所全球顶尖大学新签联合培养协议：本科生免学费交换",
    excerpt: "涵盖大三暑期科研实习、一学期访学（学分互认）两种模式，参与学生可获全额机票与生活补贴，申请门槛为在校GPA 3.5以上或导师推荐。",
    readTime: 4
  },
];

/* =========================================================================
   FAQ 数据
   ========================================================================= */
const FAQ_DATA = [
  {
    q: "星渊科技大学的「100%零门槛转专业」是真的吗？",
    a: "是的，学校全面遵循「以学生志趣为先」的培养理念。大一结束时，全校所有本科专业向全体学生无条件开放（包括热门的人工智能、计算机、钱学森班等），转出不设任何挂科或绩点阻碍，转入只要通过该专业目标书院的基础学力交谈即可，历史转专业成功率保持在 98.7% 以上。"
  },
  {
    q: "本科生进实验室和接触大科学仪器的机会有多大？",
    a: "所有大一新生在入学军训结束后即根据双向选择匹配「一人一学术导师」。学校实施「星渊种子科研资助计划」，本科生可直接申请最高5万元的个人探索研究经费，享有国家级超算机时与超导洁净实验室的使用权限，每年有超过60%的本科毕业生在顶会或JCR一区期刊发表过学术论文。"
  },
  {
    q: "本科生住宿条件、食堂及生活配套如何？",
    a: "本科全阶段实行书院制住宿，标准配置为「双人间」（配备干湿分离独立卫浴、24小时热水恒温、中央新风系统与电动升降桌）。各书院一楼均设有极客自习室、星光咖啡厅与创客机械加工室。校内设有三大智能风味餐厅与清真食堂，人均餐饮补贴充足。"
  },
  {
    q: "奖学金覆盖面如何？是否存在因家庭困难退学的可能？",
    a: "学校郑重承诺：绝不让任何一位考入星渊的学子因经济原因失学。新生入学即开设「星渊绿色通道」无息助学；全校本科生奖助学金覆盖面达到75%，特等奖学金每年单人高达 100,000 元人民币，另设有企业联名海外名校全额交流资助基金。"
  },
  {
    q: "强基计划和普通高考录取有什么区别？能否同时填报？",
    a: "强基计划与普通高考志愿填报完全独立，互不影响。强基计划不占用普通批次录取名额，学生可在正常高考志愿填报的同时申请强基计划校测。我校强基计划校测主要考察数理基础与创新思维，通过者入校后享有专属书院、一对一院士导师及本硕博一体化培养通道等特殊优待。"
  },
  {
    q: "选科要求是什么？文科生是否有机会报考？",
    a: "我校绝大部分专业要求物理+化学双选（或高考物化必选），部分综合改革省份（如浙江、北京）可选考其他理科组合。遗憾的是，目前我校暂不招收纯文科方向学生，但设有科学史与技术哲学辅修方向，欢迎理科生跨选。建议根据本省高考改革方案具体核实选科匹配。"
  },
];

/* =========================================================================
   校园图鉴数据
   ========================================================================= */
const CAMPUS_DATA = [
  {
    group: "lab",
    img: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80",
    badge: "科研大科学设施",
    badgeColor: "cyan",
    title: "百比特超导量子中央洁净实验室",
    subtitle: "万级高真空与极低温量子态保持测试区",
    caption: "配备 Class 100 级无尘超净间与自主稀释制冷塔集群，本科生经安全考核后全天候刷卡入驻开展量子测控。"
  },
  {
    group: "library",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    badge: "知识中枢",
    badgeColor: "blue",
    title: "寰宇星图全天候未来图书馆",
    subtitle: "24小时通宵学术研讨区与海量国际顶刊数据库",
    caption: "藏书280万册，全馆配备沉浸式静音工作仓、3D数字全息古籍阅览台及 24小时开放的深夜学术研讨沙龙。"
  },
  {
    group: "living",
    img: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
    badge: "品质生活",
    badgeColor: "teal",
    title: "书院制双人间极客生活公寓",
    subtitle: "全天候恒温新风与千兆对称光纤入户",
    caption: "配备独立卫浴、恒温新风系统、人体工学电动升降桌及每栋书院专属的创客研讨吧与星光咖啡厅。"
  },
  {
    group: "lab",
    img: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80",
    badge: "空天重器",
    badgeColor: "sky",
    title: "深空飞行器气动与仿真中心",
    subtitle: "实时流体超算仿真与实体高真空测试",
    caption: "结合全景 VR 与万瓦级风动测试仪，学生可亲自实时调试自制深空微纳卫星与滑翔翼气动外形。"
  },
  {
    group: "living",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    badge: "创新空间",
    badgeColor: "purple",
    title: "极客创客工坊与机器人竞技场",
    subtitle: "五轴加工中心与全自主无人机试飞空域",
    caption: "配备五轴联动数控机床、金属 3D 打印阵列及各类电子快样测试仪，支持本科生任意硬核创意从图纸到原型落地。"
  },
  {
    group: "library",
    img: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=1200&q=80",
    thumb: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80",
    badge: "星穹视界",
    badgeColor: "indigo",
    title: "苍穹天文观测台与深空中控室",
    subtitle: "直接联动高山巡天射电阵列遥测终端",
    caption: "坐落于校园主峰顶部的现代化光学与射电望远镜塔楼，夜间向全体师生开放实时星空寻迹与光谱探测。"
  },
];

/* =========================================================================
   统计数字
   ========================================================================= */
const STATS_DATA = [
  { target: 18, suffix: "+", color: "cyan", label: "国家级重点实验室/中心" },
  { target: 42, suffix: "位", color: "sky", label: "两院院士与领军特聘导师" },
  { target: 86, suffix: ".4%", color: "blue", label: "本科毕业生直博/硕深造率" },
  { target: 320, suffix: "+", color: "teal", label: "年均 CNS 及顶刊顶会论文" },
];
