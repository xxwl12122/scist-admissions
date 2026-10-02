/**
 * bot.js — 星渊招生 AI 智能咨询助理（Pro 旗舰增强版）
 * 功能特色：
 * 1. 结构化富文本卡片输出（标签、表格、高亮指标、对比分析）
 * 2. 数字指令与快捷菜单精准响应（输入 1, 2, 3, 4, 5 直达核心解答）
 * 3. 智能高考志愿与分数测算引擎（支持输入分数如 "北京 688" / "685分" 实时推算专业冲稳保）
 * 4. 内嵌可交互操作按钮（一键跳转分数表、开启专业培养详情、网上意向登记、电话咨询）
 * 5. 全面扩充前沿学科、强基拔尖、转专业、住宿公寓、奖助学金、选科问答库
 */

(function () {
  'use strict';

  /* ── DOM 元素 ────────────────────────────────────────── */
  const botModal       = document.getElementById('bot-modal');
  const botToggleBtn   = document.getElementById('bot-toggle-btn');
  const closeBotBtn    = document.getElementById('close-bot-btn');
  const chatHistory    = document.getElementById('bot-chat-history');
  const botInput       = document.getElementById('bot-input');
  const botSendBtn     = document.getElementById('bot-send-btn');
  const headerTrigger  = document.getElementById('header-bot-trigger');
  const presetContainer = document.querySelector('#bot-modal .bot-preset-container') || document.querySelector('#bot-modal .flex-wrap');

  if (!botModal) return;

  let isOpen = false;
  let isThinking = false;

  /* ── 核心业务知识与回复模板生成 ────────────────────────── */

  // 1. 快捷菜单 1：强基计划
  function getQiangjiResponse() {
    return `
      <div class="space-y-2.5">
        <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
          <span class="p-1 rounded-md bg-cyan-500/20 text-cyan-400">🌟</span>
          <span>2026年本科「强基计划」与拔尖创新选拔深度解读</span>
        </div>
        <p class="text-slate-300 text-xs leading-relaxed">
          星渊科大强基计划面向服务国家重大战略需求的高精尖领域，2026年招收 <strong>数学与应用数学、极端物理与量子信息、力学与深空工程、核聚变新能源材料</strong> 四大基础学科。
        </p>

        <div class="grid grid-cols-2 gap-2 text-[11px]">
          <div class="bg-slate-900/90 p-2.5 rounded-xl border border-cyan-500/20 shadow-inner">
            <div class="text-cyan-400 font-bold flex items-center gap-1">🎯 破格入围通道</div>
            <div class="text-slate-400 mt-1">全国五大学科奥赛全国决赛二等奖(银牌)及以上可破格入围，直接进入校测面试答辩环节。</div>
          </div>
          <div class="bg-slate-900/90 p-2.5 rounded-xl border border-cyan-500/20 shadow-inner">
            <div class="text-emerald-400 font-bold flex items-center gap-1">🚀 直博免试通道</div>
            <div class="text-slate-400 mt-1">大二学年末免试直接锁定本校顶尖国家实验室直博资格，推行“1+3+X”本硕博一贯制。</div>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-300 flex items-start gap-2">
          <span class="text-cyan-400 font-bold">💡 报考政策优势：</span>
          <span>强基计划在各省属于特殊类型招生，<strong>不占用普通批次志愿名额</strong>！未被录取完全不影响普通高考统招各批次录取。</span>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" data-action="nav" data-target="scores">📊 查看强基历年分数线</button>
          <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="modal" data-target="apply">📝 登记强基报考意向</button>
          <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="query" data-val="强基计划校测考什么？">校测考核形式？</button>
        </div>
      </div>
    `;
  }

  // 2. 快捷菜单 2：投档分数线
  function getScoresOverviewResponse() {
    return `
      <div class="space-y-2.5">
        <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
          <span class="p-1 rounded-md bg-cyan-500/20 text-cyan-400">📈</span>
          <span>各省近三年录取投档分数与对应位次速览</span>
        </div>
        <p class="text-slate-300 text-xs leading-relaxed">
          我校生源质量优异，各省录取平均位次稳居全省前 <strong>300～850 名</strong>以内。实行“分数优先、遵循志愿、无专业级差”的录取原则：
        </p>

        <div class="bg-slate-900/90 p-2.5 rounded-xl border border-slate-700/80 text-[11px] space-y-1.5">
          <div class="flex items-center justify-between border-b border-slate-800 pb-1">
            <span class="text-slate-200 font-medium">北京 (新高考综合)</span>
            <span class="text-cyan-400 font-mono font-bold">677 ~ 692 分 (前320~860名)</span>
          </div>
          <div class="flex items-center justify-between border-b border-slate-800 pb-1">
            <span class="text-slate-200 font-medium">浙江 (首批改革试验区)</span>
            <span class="text-cyan-400 font-mono font-bold">685 ~ 694 分 (前380~810名)</span>
          </div>
          <div class="flex items-center justify-between border-b border-slate-800 pb-1">
            <span class="text-slate-200 font-medium">安徽 (物理类主选)</span>
            <span class="text-cyan-400 font-mono font-bold">665 ~ 682 分 (前290~920名)</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-slate-200 font-medium">广东 / 四川 / 江苏</span>
            <span class="text-cyan-400 font-mono font-bold">670 ~ 689 分 (前310~920名)</span>
          </div>
        </div>

        <div class="p-2.5 rounded-xl bg-slate-900/60 border border-slate-700/60 text-[11px] text-slate-300">
          🎯 <strong>智能志愿测算：</strong>你可以直接在本聊天框输入 <code>省份 + 预估高考分</code>（例如：<strong>北京 688</strong> 或 <strong>四川 685分</strong>），小助手将为你测算匹配专业及冲稳保梯度！
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" data-action="nav" data-target="scores">🔍 前往分数线大数据表格</button>
          <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="query" data-val="北京 688分">试一试: 测算北京688分</button>
          <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="query" data-val="浙江 690分">试一试: 测算浙江690分</button>
        </div>
      </div>
    `;
  }

  // 3. 快捷菜单 3：前沿拔尖学科与专业
  function getMajorsOverviewResponse() {
    return `
      <div class="space-y-2.5">
        <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
          <span class="p-1 rounded-md bg-cyan-500/20 text-cyan-400">🔬</span>
          <span>星渊科大六大前沿学院与拔尖英才班矩阵</span>
        </div>
        <p class="text-slate-300 text-xs leading-relaxed">
          打破传统院系壁垒，围绕国家科技前沿设立六大书院制荣誉培养计划，全员进实验室、全员配备博导：
        </p>

        <div class="grid grid-cols-2 gap-2 text-[11px]">
          <div class="bg-slate-900/80 p-2 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-colors cursor-pointer" onclick="window.openMajorByTitle && window.openMajorByTitle('量子计算与光量子信息科学')">
            <div class="text-cyan-400 font-bold">1. 严济慈物理学院</div>
            <div class="text-slate-400 text-[10px] mt-0.5">量子计算与光量子信息 · 72比特超导实验室</div>
          </div>
          <div class="bg-slate-900/80 p-2 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-colors cursor-pointer" onclick="window.openMajorByTitle && window.openMajorByTitle('通用人工智能与多模态世界模型')">
            <div class="text-sky-400 font-bold">2. 图灵计算机学院</div>
            <div class="text-slate-400 text-[10px] mt-0.5">通用人工智能 · 本科独享千卡算力集群</div>
          </div>
          <div class="bg-slate-900/80 p-2 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-colors cursor-pointer" onclick="window.openMajorByTitle && window.openMajorByTitle('深空探测动力与小行星抓捕工程')">
            <div class="text-blue-400 font-bold">3. 空天微重力书院</div>
            <div class="text-slate-400 text-[10px] mt-0.5">深空探测与动力 · 航天院所直聘优先通道</div>
          </div>
          <div class="bg-slate-900/80 p-2 rounded-xl border border-slate-700 hover:border-cyan-400/50 transition-colors cursor-pointer" onclick="window.openMajorByTitle && window.openMajorByTitle('受控核聚变与高温超导材料')">
            <div class="text-emerald-400 font-bold">4. 未来能源研究院</div>
            <div class="text-slate-400 text-[10px] mt-0.5">受控核聚变 · 天渊托卡马克人造太阳装置</div>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" data-action="nav" data-target="majors">🏛️ 浏览全部学科专业详情</button>
          <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="query" data-val="计算机与图灵班特色">图灵AI班如何培养？</button>
        </div>
      </div>
    `;
  }

  // 4. 快捷菜单 4：转专业与保研深造
  function getTransferAndGraduationResponse() {
    return `
      <div class="space-y-2.5">
        <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
          <span class="p-1 rounded-md bg-cyan-500/20 text-cyan-400">🔄</span>
          <span>100%全自选转专业制度 & 86.4%卓越深造率</span>
        </div>
        <p class="text-slate-300 text-xs leading-relaxed">
          让每一位青年找到一生所爱，星渊科技大学推行真正意义上的<strong>全校零门槛自由转专业</strong>：
        </p>

        <div class="space-y-1.5 text-[11px] bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
          <div class="flex items-start gap-1.5">
            <span class="text-cyan-400 font-bold">✓ 转出不设卡：</span>
            <span class="text-slate-300">原专业书院不设挂科门槛、不设绩点排名前置限制，真正尊重学生志趣。</span>
          </div>
          <div class="flex items-start gap-1.5">
            <span class="text-emerald-400 font-bold">✓ 转入高通过：</span>
            <span class="text-slate-300">大一末向全校专业（含热门AI、物理）全面开放，历年转专业成功率达 <strong>98.7%</strong>。</span>
          </div>
          <div class="flex items-start gap-1.5">
            <span class="text-purple-400 font-bold">✓ 毕业深造率：</span>
            <span class="text-slate-300">本科生直升国内外顶尖名校硕士/直博率达到 <strong>86.4%</strong>，其中国家级科研院所与顶刊学者辈出。</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" data-action="query" data-val="转专业具体时间节点是什么？">转专业时间节点？</button>
          <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="query" data-val="本科生进实验室机会">本科进实验室条件？</button>
        </div>
      </div>
    `;
  }

  // 5. 快捷菜单 5：极客生活与奖学金保障
  function getLivingAndScholarshipResponse() {
    return `
      <div class="space-y-2.5">
        <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
          <span class="p-1 rounded-md bg-cyan-500/20 text-cyan-400">🏡</span>
          <span>书院双人间极客生活 & 全额奖学金保障体系</span>
        </div>
        <p class="text-slate-300 text-xs leading-relaxed">
          一流的科研大学配备一流的生活品质，免除学子生活后顾之忧：
        </p>

        <div class="grid grid-cols-2 gap-2 text-[11px]">
          <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
            <div class="text-teal-400 font-bold">🛏️ 书院双人间寝室</div>
            <div class="text-slate-400 mt-1">独立干湿分离卫浴、24h恒温新风系统、人体工学电动升降桌、千兆光纤入室。</div>
          </div>
          <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
            <div class="text-amber-400 font-bold">🏆 75% 奖学金覆盖</div>
            <div class="text-slate-400 mt-1">本科特等奖学金每年单人 <strong>100,000 元</strong>；郑重承诺绝不让任何考入学生因经济原因失学！</div>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" data-action="nav" data-target="campus">📷 参观校园全景图鉴</button>
          <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="query" data-val="学费与住宿费标准">学费标准？</button>
        </div>
      </div>
    `;
  }

  // 6. 欢迎语与默认菜单
  function getWelcomeMenuResponse() {
    return `
      <div class="space-y-2.5">
        <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
          <span class="p-1 rounded-md bg-cyan-500/20 text-cyan-400">🪐</span>
          <span>同学你好！我是星渊科大本科招办智能助手小星</span>
        </div>
        <p class="text-slate-300 text-xs leading-relaxed">
          很高兴与你相遇在星渊！你可以直接<strong>输入数字序号</strong>，或输入想了解的问题（例如：<em>“北京 688分”</em>、<em>“图灵班”</em>、<em>“强基计划”</em>）：
        </p>

        <div class="space-y-1.5 text-[11px]">
          <div class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700 cursor-pointer flex items-center justify-between text-slate-200 transition-colors" onclick="window.sendBotCommand('1')">
            <span><strong>1.</strong> 2026年本科「强基计划」与拔尖创新选拔简章</span>
            <span class="text-cyan-400 font-mono">回复 1 ›</span>
          </div>
          <div class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700 cursor-pointer flex items-center justify-between text-slate-200 transition-colors" onclick="window.sendBotCommand('2')">
            <span><strong>2.</strong> 各省近三年投档分数线与录取位次速查</span>
            <span class="text-cyan-400 font-mono">回复 2 ›</span>
          </div>
          <div class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700 cursor-pointer flex items-center justify-between text-slate-200 transition-colors" onclick="window.sendBotCommand('3')">
            <span><strong>3.</strong> 硬核前沿学院与拔尖英才班特色介绍</span>
            <span class="text-cyan-400 font-mono">回复 3 ›</span>
          </div>
          <div class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700 cursor-pointer flex items-center justify-between text-slate-200 transition-colors" onclick="window.sendBotCommand('4')">
            <span><strong>4.</strong> 100%全自选转专业机制与直博深造保障</span>
            <span class="text-cyan-400 font-mono">回复 4 ›</span>
          </div>
          <div class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700 cursor-pointer flex items-center justify-between text-slate-200 transition-colors" onclick="window.sendBotCommand('5')">
            <span><strong>5.</strong> 书院双人间极客生活与10万元特等奖学金</span>
            <span class="text-cyan-400 font-mono">回复 5 ›</span>
          </div>
        </div>

        <div class="text-[11px] text-cyan-400/90 pt-0.5">
          💡 <strong>快速体验：</strong>可直接发送 <code>高考估分</code>（如：<strong>685分</strong> 或 <strong>北京 690</strong>）进行智能专业匹配！
        </div>
      </div>
    `;
  }

  // 7. 高考分数智能志愿测算评估
  function evaluateScore(scoreNum, provinceStr) {
    if (typeof ADMISSION_DATA === 'undefined') {
      return getScoresOverviewResponse();
    }

    // 省份匹配
    const prov = provinceStr || '北京';
    const list = ADMISSION_DATA.filter(item => item.year === '2025' && (item.province === prov || prov === '全国'));
    const targetList = list.length > 0 ? list : ADMISSION_DATA.filter(item => item.year === '2025' && item.province === '北京');

    const sprint = [];   // 冲刺：自身分数低 1~3 分
    const steady = [];   // 稳妥：自身分数高 0~5 分
    const safe = [];     // 保底：自身分数高 6 分以上

    targetList.forEach(m => {
      const diff = scoreNum - m.score;
      if (diff >= -3 && diff < 0) {
        sprint.push({ ...m, diff });
      } else if (diff >= 0 && diff <= 5) {
        steady.push({ ...m, diff });
      } else if (diff > 5) {
        safe.push({ ...m, diff });
      }
    });

    const provName = targetList[0] ? targetList[0].province : prov;

    return `
      <div class="space-y-2.5">
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
            <span>🎯 【${provName}】${scoreNum}分 志愿模拟录取评估报告</span>
          </div>
          <span class="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono">2025年基准</span>
        </div>

        <p class="text-slate-300 text-xs">
          根据你在 <strong>${provName}</strong> 的预估分数 <strong>${scoreNum}分</strong>，与我校2025年官方投档基准对比诊断如下：
        </p>

        <!-- 稳妥推荐 -->
        ${steady.length > 0 ? `
          <div class="bg-emerald-950/20 p-2.5 rounded-xl border border-emerald-500/30">
            <div class="text-emerald-400 font-bold text-xs flex items-center gap-1">
              <span>✅ 高度稳妥专业 (${steady.length}个)</span>
              <span class="text-[10px] text-slate-400 font-normal">录取概率 > 85%</span>
            </div>
            <div class="space-y-1 mt-1 text-[11px]">
              ${steady.map(s => `
                <div class="flex items-center justify-between text-slate-200">
                  <span class="truncate pr-2">• ${s.major}</span>
                  <span class="font-mono text-emerald-400 font-semibold shrink-0">超线 +${s.diff}分</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 冲刺推荐 -->
        ${sprint.length > 0 ? `
          <div class="bg-amber-950/20 p-2.5 rounded-xl border border-amber-500/30">
            <div class="text-amber-400 font-bold text-xs flex items-center gap-1">
              <span>🚀 建议冲刺专业 (${sprint.length}个)</span>
              <span class="text-[10px] text-slate-400 font-normal">填报A志位冲刺</span>
            </div>
            <div class="space-y-1 mt-1 text-[11px]">
              ${sprint.map(s => `
                <div class="flex items-center justify-between text-slate-200">
                  <span class="truncate pr-2">• ${s.major}</span>
                  <span class="font-mono text-amber-400 font-semibold shrink-0">线差 ${s.diff}分</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- 保底推荐 -->
        ${safe.length > 0 ? `
          <div class="bg-blue-950/20 p-2.5 rounded-xl border border-blue-500/30">
            <div class="text-blue-400 font-bold text-xs flex items-center gap-1">
              <span>🛡️ 绝对保底专业 (${safe.length}个)</span>
              <span class="text-[10px] text-slate-400 font-normal">录取概率 > 99%</span>
            </div>
            <div class="space-y-1 mt-1 text-[11px]">
              ${safe.slice(0, 3).map(s => `
                <div class="flex items-center justify-between text-slate-200">
                  <span class="truncate pr-2">• ${s.major}</span>
                  <span class="font-mono text-cyan-400 font-semibold shrink-0">高投档线 +${s.diff}分</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="p-2 rounded-xl bg-slate-900/60 text-[10px] text-slate-400 leading-relaxed">
          * 提示：本校实施全自由转专业机制，即便以较低分录取，大一末亦可<strong>自由重选任意前沿专业</strong>，不设学分门槛！
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" data-action="modal" data-target="apply">📝 登记该分段意向</button>
          <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="nav" data-target="scores">📊 查看${provName}详细名额</button>
        </div>
      </div>
    `;
  }

  /* ── 语义匹配与问答路由器 ────────────────────────────── */
  function routeQuery(input) {
    const raw = input.trim();
    const q = raw.toLowerCase();

    // 1. 数字快捷键判断
    if (q === '1' || q === '1号' || q === '一' || q === '强基' || q.includes('强基计划')) {
      return getQiangjiResponse();
    }
    if (q === '2' || q === '2号' || q === '二' || q === '分数' || q === '分数线' || q === '投档线' || q === '位次') {
      return getScoresOverviewResponse();
    }
    if (q === '3' || q === '3号' || q === '三' || q === '专业' || q === '学科' || q === '学院') {
      return getMajorsOverviewResponse();
    }
    if (q === '4' || q === '4号' || q === '四' || q === '转专业' || q.includes('转专业') || q.includes('保研') || q.includes('直博')) {
      return getTransferAndGraduationResponse();
    }
    if (q === '5' || q === '5号' || q === '五' || q === '住宿' || q === '宿舍' || q === '奖学金') {
      return getLivingAndScholarshipResponse();
    }

    // 2. 高考分数识别与测算（如: "北京 688", "685分", "考了680能上吗", "700"）
    const scoreMatch = raw.match(/(北京|浙江|安徽|广东|四川|江苏|其他)?\D*([5-7]\d{2})\s*分?/);
    if (scoreMatch) {
      const prov = scoreMatch[1] || null;
      const scoreNum = parseInt(scoreMatch[2], 10);
      if (scoreNum >= 550 && scoreNum <= 750) {
        return evaluateScore(scoreNum, prov);
      }
    }

    // 3. 常见寒暄
    if (['你好', '您好', 'hi', 'hello', '在吗', '有人吗', '在不在', '小助手', '你是谁'].some(k => q.includes(k))) {
      return getWelcomeMenuResponse();
    }

    // 4. 计算机与人工智能
    if (['计算机', '人工智能', 'ai', '大模型', '图灵', '软件', '算法', '算力'].some(k => q.includes(k))) {
      return `
        <div class="space-y-2.5">
          <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
            <span>💻 图灵计算机科学学院与通用人工智能荣誉班</span>
          </div>
          <p class="text-slate-300 text-xs leading-relaxed">
            以突破大模型推理极限与具身机器人控制为核心，紧密对接国家新一代人工智能战略体系，为本科生提供全国罕见的顶级科研条件：
          </p>
          <div class="space-y-1.5 text-[11px] bg-slate-900/80 p-2.5 rounded-xl border border-slate-700">
            <div class="flex items-start gap-1 text-slate-300">
              <span class="text-cyan-400 font-bold">• 算力自由：</span>
              <span>本科新生每人享有独立高规格昇腾/GPU专属算力节点，直接实训百亿级前沿世界模型。</span>
            </div>
            <div class="flex items-start gap-1 text-slate-300">
              <span class="text-emerald-400 font-bold">• 战绩彪炳：</span>
              <span>星渊战队蝉联 ACM-ICPC 全球总决赛金奖，92%毕业生直通中科院计算所及硬科技领跑企业。</span>
            </div>
          </div>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" onclick="window.openMajorByTitle && window.openMajorByTitle('通用人工智能与多模态世界模型')">🚀 查看图灵班完整培养方案</button>
            <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="nav" data-target="scores">📊 查看计算机专业历年分数线</button>
          </div>
        </div>
      `;
    }

    // 5. 量子科学与物理
    if (['量子', '超导', '严济慈', '物理', '光量子'].some(k => q.includes(k))) {
      return `
        <div class="space-y-2.5">
          <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
            <span>⚛️ 严济慈物理英才书院 · 量子计算与光量子信息</span>
          </div>
          <p class="text-slate-300 text-xs leading-relaxed">
            依托星渊国家超导量子实验室，本科生大二即可参与百比特超导稀释制冷试验集群的真实量子门操控与算法验证。92%毕业生直升本校量子研究院及海外名校继续攻博。
          </p>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" onclick="window.openMajorByTitle && window.openMajorByTitle('量子计算与光量子信息科学')">🔬 查看量子英才班方案</button>
            <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="nav" data-target="scores">📊 查看物理类录取分数</button>
          </div>
        </div>
      `;
    }

    // 6. 航天与深空工程
    if (['深空', '航天', '火箭', '行星', '飞行器', '空天'].some(k => q.includes(k))) {
      return `
        <div class="space-y-2.5">
          <div class="flex items-center gap-1.5 text-sky-300 font-bold text-sm">
            <span>🚀 空天动力与微重力学院 · 深空探测工程</span>
          </div>
          <p class="text-slate-300 text-xs leading-relaxed">
            融合现代航天力学与电推进发动机技术，学生在大三参与“天穹一号”真实微纳立方星发射测控任务。毕业享有国家重点航天型号院所直聘优先签约权。
          </p>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <button class="bot-card-btn bg-sky-500/20 hover:bg-sky-500 hover:text-brand-darkest text-sky-300" onclick="window.openMajorByTitle && window.openMajorByTitle('深空探测动力与小行星抓捕工程')">🛰️ 查看空天专业详情</button>
          </div>
        </div>
      `;
    }

    // 7. 少年班 / 拔尖班
    if (['少年班', '超常', '高一', '高二', '钱学森', '选拔'].some(k => q.includes(k))) {
      return `
        <div class="space-y-2.5">
          <div class="flex items-center gap-1.5 text-purple-300 font-bold text-sm">
            <span>🧬 星渊少年科学家实验班选拔机制</span>
          </div>
          <p class="text-slate-300 text-xs leading-relaxed">
            面向数理逻辑拔尖的高二及优秀高一在读学子，选拔重在考察<strong>思维创新性与研究构想</strong>，无须机械刷题。通过初选和院士专家组复试答辩后，无需高考即可提前直接进入本科培养。
          </p>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <button class="bot-card-btn bg-purple-500/20 hover:bg-purple-500 hover:text-brand-darkest text-purple-300" data-action="nav" data-target="news">📰 查看第41期少年班选拔名单公报</button>
            <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="modal" data-target="apply">📝 登记少年班自荐信息</button>
          </div>
        </div>
      `;
    }

    // 8. 选科要求
    if (['选科', '物化', '物理', '化学', '文科', '综合改革'].some(k => q.includes(k))) {
      return `
        <div class="space-y-2.5">
          <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
            <span>📋 新高考选考科目与要求指引</span>
          </div>
          <p class="text-slate-300 text-xs leading-relaxed">
            星渊科技大学核心理工专业要求<strong>物理 + 化学必选</strong>；在高考综合改革省份（如北京、浙江）部分交叉学科允许物理或单科化学报考。目前暂不招收纯文科历史类考生。
          </p>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" data-action="nav" data-target="scores">📊 查看各专业具体选考科目要求</button>
          </div>
        </div>
      `;
    }

    // 9. 联系方式与电话
    if (['电话', '联系', '咨询', '热线', '招生办', '邮箱', '地址'].some(k => q.includes(k))) {
      return `
        <div class="space-y-2.5">
          <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
            <span>📞 星渊科技大学本科生招生办公室官方联络通道</span>
          </div>
          <div class="bg-slate-900/80 p-2.5 rounded-xl border border-slate-700 text-xs space-y-1.5 text-slate-300">
            <div>全国招生热线：<strong class="text-cyan-400 font-mono">400-888-2026 (多线就绪)</strong></div>
            <div>工作时间：工作日 08:30 - 18:00 (高考出分期间全天候在线)</div>
            <div>官方电子邮箱：<span class="text-slate-400 font-mono">zsb@scist.edu.cn</span></div>
            <div>招办地址：中国科学城星渊大道 1024 号行政科研总楼 1F 招生大厅</div>
          </div>
          <div class="flex flex-wrap gap-1.5 pt-1">
            <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" data-action="modal" data-target="apply">📝 登记考生手机以便招办老师回访</button>
          </div>
        </div>
      `;
    }

    // 默认兜底：智能多维推荐
    return `
      <div class="space-y-2.5">
        <div class="flex items-center gap-1.5 text-cyan-300 font-bold text-sm">
          <span>🌌 收到你的咨询！为你推荐以下热点指引</span>
        </div>
        <p class="text-slate-300 text-xs leading-relaxed">
          关于你提到的“<strong>${raw}</strong>”，小助手为你整理了以下最可能相关的政策通道，可直接回复对应序号：
        </p>

        <div class="space-y-1 text-[11px]">
          <div class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 cursor-pointer flex justify-between text-slate-200" onclick="window.sendBotCommand('1')">
            <span><strong>1.</strong> 强基计划报名门槛与直博培养</span>
            <span class="text-cyan-400">回复 1 ›</span>
          </div>
          <div class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 cursor-pointer flex justify-between text-slate-200" onclick="window.sendBotCommand('2')">
            <span><strong>2.</strong> 历年各专业真实录取分数线与位次</span>
            <span class="text-cyan-400">回复 2 ›</span>
          </div>
          <div class="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 cursor-pointer flex justify-between text-slate-200" onclick="window.sendBotCommand('4')">
            <span><strong>4.</strong> 100%全自选转专业制度</span>
            <span class="text-cyan-400">回复 4 ›</span>
          </div>
        </div>

        <div class="flex flex-wrap gap-1.5 pt-1">
          <button class="bot-card-btn bg-cyan-500/20 hover:bg-cyan-500 hover:text-brand-darkest text-cyan-300" data-action="modal" data-target="apply">📝 提交在线意向登记</button>
          <button class="bot-card-btn bg-slate-800 hover:bg-slate-700 text-slate-200" data-action="nav" data-target="scores">📊 检索往年投档线</button>
        </div>
      </div>
    `;
  }

  /* ── 消息渲染与滚动 ──────────────────────────────────── */
  function scrollToBottom() {
    chatHistory.scrollTop = chatHistory.scrollHeight;
  }

  function appendMessage(htmlContent, isUser = false) {
    const wrap = document.createElement('div');
    wrap.className = `flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''} msg-enter`;

    const avatar = document.createElement('div');
    avatar.className = `w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-md ${
      isUser
        ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white'
        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-400/30'
    }`;
    avatar.innerHTML = isUser
      ? '<i data-lucide="user" class="w-3.5 h-3.5"></i>'
      : '<i data-lucide="bot" class="w-3.5 h-3.5"></i>';

    const bubble = document.createElement('div');
    bubble.className = `text-xs leading-relaxed max-w-[88%] px-3.5 py-2.5 rounded-2xl shadow-lg border ${
      isUser
        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-cyan-400/30 rounded-tr-sm'
        : 'bg-slate-900/90 text-slate-200 border-slate-700/70 rounded-tl-sm'
    }`;
    bubble.innerHTML = htmlContent;

    wrap.appendChild(avatar);
    wrap.appendChild(bubble);
    chatHistory.appendChild(wrap);

    lucide.createIcons({ nodes: [avatar] });
    bindCardButtons(bubble);
    scrollToBottom();
    return bubble;
  }

  /* 思考指示器 */
  function showThinking() {
    const wrap = document.createElement('div');
    wrap.id = 'bot-thinking-indicator';
    wrap.className = 'flex items-start gap-2.5 msg-enter';
    wrap.innerHTML = `
      <div class="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-400/30 flex items-center justify-center shrink-0 mt-0.5">
        <i data-lucide="bot" class="w-3.5 h-3.5"></i>
      </div>
      <div class="bg-slate-900/90 border border-slate-700/60 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5 shadow-md">
        <span class="text-[11px] text-cyan-300 mr-1 font-mono">星渊知识大脑检索中</span>
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style="animation-delay:0ms"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style="animation-delay:150ms"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style="animation-delay:300ms"></span>
      </div>`;
    chatHistory.appendChild(wrap);
    lucide.createIcons({ nodes: [wrap] });
    scrollToBottom();
  }

  function hideThinking() {
    const el = document.getElementById('bot-thinking-indicator');
    if (el) el.remove();
  }

  /* ── 卡片内嵌按钮事件代理 ────────────────────────────── */
  function bindCardButtons(container) {
    container.querySelectorAll('.bot-card-btn, [data-action]').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const action = btn.dataset.action;
        const target = btn.dataset.target || btn.dataset.val;

        if (action === 'nav') {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            botModal.classList.add('hidden');
          }
        } else if (action === 'modal') {
          const m = document.getElementById(`${target}-modal`);
          if (m) {
            m.classList.remove('hidden');
            botModal.classList.add('hidden');
          }
        } else if (action === 'query') {
          handleInput(target);
        }
      });
    });
  }

  /* ── 核心处理流程 ────────────────────────────────────── */
  function handleInput(text) {
    const clean = text ? text.trim() : '';
    if (!clean || isThinking) return;

    // 1. 立即上屏用户消息
    appendMessage(escapeHtml(clean), true);

    // 2. 显示思考状态
    isThinking = true;
    showThinking();

    // 3. 仿真智能推理响应（350ms ~ 600ms）
    const delay = 350 + Math.random() * 250;
    setTimeout(() => {
      hideThinking();
      const responseHtml = routeQuery(clean);
      appendMessage(responseHtml, false);
      isThinking = false;
    }, delay);
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ── 弹窗控制 ────────────────────────────────────────── */
  function openBot() {
    botModal.classList.remove('hidden');
    isOpen = true;
    setTimeout(() => botInput && botInput.focus(), 100);
  }

  function closeBot() {
    botModal.classList.add('hidden');
    isOpen = false;
  }

  botToggleBtn.addEventListener('click', () => (isOpen ? closeBot() : openBot()));
  closeBotBtn.addEventListener('click', closeBot);
  if (headerTrigger) headerTrigger.addEventListener('click', openBot);

  botSendBtn.addEventListener('click', () => {
    const v = botInput.value;
    botInput.value = '';
    handleInput(v);
  });

  botInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const v = botInput.value;
      botInput.value = '';
      handleInput(v);
    }
  });

  // 底部快捷预设按钮响应
  document.querySelectorAll('.bot-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const q = btn.dataset.q;
      if (q) handleInput(q);
    });
  });

  // 全局 API：从外部触发
  window.sendBotCommand = function (cmd) {
    if (botModal.classList.contains('hidden')) {
      openBot();
    }
    handleInput(cmd);
  };

  window.promptAdmissions = function (major, province) {
    if (botModal.classList.contains('hidden')) {
      openBot();
    }
    handleInput(`你好，请问我在【${province}】考多少分可以稳妥报考【${major}】？`);
  };

  // 全局打开专业详情辅助
  window.openMajorByTitle = function (title) {
    const btn = document.querySelector(`.open-major-modal-btn[data-title*="${title}"]`);
    if (btn) btn.click();
  };

})();
