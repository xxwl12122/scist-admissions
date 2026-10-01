# 星渊科技大学 (SCIST) | 本科招生官方门户

<div align="center">

![SCIST Badge](https://img.shields.io/badge/SCIST-StarCore%20Institute%20of%20Science%20%26%20Tech-00F2FE?style=for-the-badge&logo=atom)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

**格物求理 · 叩问苍穹**

面向未来的高校本科招生官方门户，融合量子计算、深空探测、受控核聚变等前沿科技风格设计。

[🚀 在线体验 (GitHub Pages)](https://xxwl12122.github.io/scist-admissions/) · [特色功能](#核心亮点) · [项目结构](#项目结构)

</div>

---

## 🌌 核心亮点

- ⚡ **现代化科幻极客视觉**：全响应式流式布局，深空暗色系配合赛博青微光（Glassmorphism 毛玻璃拟态 + 发光微动效）。
- 🪐 **Canvas 动态粒子星网**：英雄区背景粒子网格，支持鼠标互动排斥、触摸滑动及点击粒子爆发特效。
- 📊 **历年投档线大数据速查**：多省份、多选科、历年投档线与全省位次实时动态筛选，支持一键唤起智能咨询。
- 🤖 **AI 报考小助手 Pro 旗舰版**：
  - 数字指令快速直达（输入 `1` 查看强基简章，`2` 查投档线，`3` 查前沿专业，`4` 查自由转专业，`5` 查生活奖助）；
  - **高考估分志愿测算引擎**：直接输入“北京 688”或“685分”，智能测算冲刺、稳妥与保底专业梯队；
  - 卡片式富文本与内嵌交互跳转按钮。
- 🔍 **全站即时搜索**：支持快捷键 `Ctrl + K` 快速调出全站专业与政策智能检索弹窗。
- 🏛️ **前沿拔尖学科矩阵**：六大书院制荣誉班详情弹窗展示。
- 📷 **校园全维实景图鉴**：分类筛选 + 支持左右翻页的高清灯箱大图浏览。
- 📝 **在线报考意向登记**：模态表单验证联动 Toast 全局消息通知。

---

## 📁 项目结构

```
E:\Rainer\ (or repo root)
├── index.html          # 主入口页面（整合全站模块与模态弹窗）
├── css/
│   └── styles.css      # 全站自定义样式（玻璃态、动效、灯箱、搜索弹窗、自定义滚动条）
├── js/
│   ├── data.js         # 静态数据中心（历年投档线大数据、学科专业库、新闻动态、FAQ）
│   ├── canvas.js       # 英雄区 Canvas 粒子网格互动动画
│   ├── bot.js          # AI 招生智能助理（富文本卡片输出、分数测算、快捷指令）
│   └── main.js         # 全站主交互逻辑（搜索弹窗、返回顶部、进度条、Toast、筛选联动）
├── .gitignore
└── README.md
```

---

## 🚀 快速开始

### 方式一：线上即时体验（推荐）
直接点击访问已通过 GitHub Pages 全球 CDN 加速部署的在线门户：
👉 **[https://xxwl12122.github.io/scist-admissions/](https://xxwl12122.github.io/scist-admissions/)**

### 方式二：本地直接打开
直接在浏览器中双击打开 `index.html` 即可畅享完整体验（无须任何构建步骤）。

### 方式三：本地静态服务器
```bash
# 使用 npx serve
npx serve .

# 或使用 Python 简易服务器
python -m http.server 8000
```
访问 `http://localhost:8000`。

---

## 🛠️ 技术栈

- **HTML5** + **CSS3** (现代 Flexbox & Grid, CSS 变量)
- **Tailwind CSS CDN** (原子化工具类)
- **Vanilla JavaScript (ES6+)** (无重型框架依赖，秒级极速渲染)
- **Lucide Icons** (现代矢量线性图标)
- **HTML5 Canvas 2D API** (粒子物理模拟)

---

## 📄 版权与许可

本项目代码遵循 MIT 开源许可。
星渊科技大学 (SCIST) 为概念演示院校设定。
