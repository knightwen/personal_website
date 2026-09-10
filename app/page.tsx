"use client";

import { useState } from "react";

type Locale = "zh" | "en";

const copy = {
  zh: {
    nav: [
      ["首页", "#home"],
      ["项目", "#work"],
      ["关于", "#about"],
      ["履历", "#resume"],
    ],
    eyebrow: "土木工程 · 计算 · 软件",
    headline: "我用计算、仿真与软件，解决复杂工程问题。",
    intro:
      "受过完整土木工程本硕博训练，专注力学计算、有限元分析与结构动力学，同时构建让工程数据和工作流真正可用的软件工具。",
    credential: [
      "Wen Zhou 周文",
      "PhD · Curtin University",
      "Chancellor’s Commendation",
      "Researcher · University of Adelaide",
    ],
    viewWork: "查看精选项目",
    readStory: "了解我的经历",
    pillars: [
      ["01", "力学与仿真", "Mechanics & Simulation"],
      ["02", "工程软件", "Engineering Software"],
      ["03", "AI 探索", "AI Exploration"],
    ],
    workEyebrow: "SELECTED WORK",
    workTitle: "工程深度，软件表达。",
    workIntro:
      "从控制方程、数值模型到可运行的产品——每个项目都展示我如何定义问题、建立方法并交付结果。",
    projects: [
      {
        no: "01",
        kind: "mech",
        type: "计算工程",
        title: "结构响应有限元分析",
        description:
          "通过有限元建模研究复杂结构在静力与动力荷载下的响应、失效机制和关键参数。",
        tags: ["FEA", "ABAQUS", "Validation"],
        action: "案例整理中",
        visualLabel: "FINITE ELEMENT FIELD",
      },
      {
        no: "02",
        kind: "mech",
        type: "科学计算",
        title: "多自由度系统动力学仿真",
        description:
          "从运动方程推导到 MATLAB 数值求解，研究系统响应、参数敏感性与动力行为。",
        tags: ["MATLAB", "ODE", "Dynamics"],
        action: "案例整理中",
        visualLabel: "DYNAMIC RESPONSE",
      },
      {
        no: "03",
        kind: "code",
        type: "工程软件",
        title: "Project Search Platform",
        description:
          "面向工程团队的项目知识检索平台，融合地图、结构化搜索、数据表格和 AI 问答。",
        tags: ["React", "Full-stack", "AI API"],
        action: "查看在线项目",
        href: "https://project-search-lac.vercel.app/",
        visualLabel: "1,843 PROJECT RECORDS",
      },
      {
        no: "04",
        kind: "code",
        type: "三维与可视化",
        title: "交互式工程模型",
        description:
          "将三维建模与分析结果带到浏览器中，让结构、响应与工程细节可以被旋转、缩放和探索。",
        tags: ["Three.js", "WebGL", "3D"],
        action: "体验开发中",
        visualLabel: "INTERACTIVE 3D MODEL",
      },
    ],
    exploreEyebrow: "CURRENTLY EXPLORING",
    exploreTitle: "AI-assisted engineering workflows",
    exploreText:
      "正在探索如何用 AI API 改善工程知识检索、信息组织和重复性工作流。目前处于实验阶段，我会诚实记录有效的部分与真实限制。",
    aboutEyebrow: "ABOUT",
    aboutTitle: "从分析工程问题，到构建解决问题的工具。",
    aboutBody: [
      "我的专业基础来自土木工程：力学、有限元和结构动力学教会我如何把复杂系统抽象为可验证的模型。",
      "对代码的兴趣让我开始学习前后端开发。我希望做的不只是另一个网站，而是把工程逻辑、数据和经验转化为真正可用的软件。",
    ],
    journey: [
      ["FOUNDATION", "土木工程本硕博训练", "力学、结构分析与科研方法"],
      ["COMPUTATION", "有限元与动力学仿真", "ABAQUS、MATLAB 与数值分析"],
      ["BUILD", "自学全栈开发", "React、Next.js 与工程产品"],
      ["EXPLORE", "AI × Engineering", "从 API 原型开始，持续验证价值"],
    ],
    resumeEyebrow: "CAPABILITIES",
    resumeTitle: "一套跨越工程分析与数字产品的能力组合。",
    skillGroups: [
      ["工程分析", ["Engineering Mechanics", "Finite Element Analysis", "Structural Dynamics", "Model Validation"]],
      ["科学计算", ["MATLAB", "ODE & Dynamic Equations", "Numerical Simulation", "Data Visualisation"]],
      ["软件开发", ["React", "Next.js", "API Integration", "Full-stack Product Development"]],
    ],
    resumeNote: "完整履历、论文与项目清单将在下一版接入。",
    contactEyebrow: "LET’S CONNECT",
    contactTitle: "寻找计算工程、工程软件与 Digital Engineering 方向的机会。",
    contactText:
      "如果你正在解决一个需要工程理解、数值方法和软件能力共同参与的问题，我很愿意交流。",
    contactButton: "联系方式即将接入",
    footer: "Built around mechanics, computation and software.",
  },
  en: {
    nav: [
      ["Home", "#home"],
      ["Work", "#work"],
      ["About", "#about"],
      ["Resume", "#resume"],
    ],
    eyebrow: "Civil Engineering · Computation · Software",
    headline: "I use computation, simulation and software to solve complex engineering problems.",
    intro:
      "With undergraduate, master’s and doctoral training in civil engineering, I work across mechanics, finite element analysis and structural dynamics—and build software that makes engineering data and workflows useful.",
    credential: [
      "Wen Zhou",
      "PhD · Curtin University",
      "Chancellor’s Commendation",
      "Researcher · University of Adelaide",
    ],
    viewWork: "Explore selected work",
    readStory: "Read my story",
    pillars: [
      ["01", "Mechanics & Simulation", "Engineering depth"],
      ["02", "Engineering Software", "Product thinking"],
      ["03", "AI Exploration", "Emerging practice"],
    ],
    workEyebrow: "SELECTED WORK",
    workTitle: "Engineering depth, expressed through software.",
    workIntro:
      "From governing equations and numerical models to working products—each project shows how I frame problems, build methods and deliver outcomes.",
    projects: [
      {
        no: "01",
        kind: "mech",
        type: "Computational Engineering",
        title: "Finite Element Analysis of Structural Response",
        description:
          "Finite element studies of complex structures under static and dynamic loading, focused on response, failure mechanisms and critical parameters.",
        tags: ["FEA", "ABAQUS", "Validation"],
        action: "Case study in progress",
        visualLabel: "FINITE ELEMENT FIELD",
      },
      {
        no: "02",
        kind: "mech",
        type: "Scientific Computing",
        title: "Multi-degree-of-freedom Dynamic Simulation",
        description:
          "From equations of motion to MATLAB solvers, exploring system response, parameter sensitivity and dynamic behaviour.",
        tags: ["MATLAB", "ODE", "Dynamics"],
        action: "Case study in progress",
        visualLabel: "DYNAMIC RESPONSE",
      },
      {
        no: "03",
        kind: "code",
        type: "Engineering Software",
        title: "Project Search Platform",
        description:
          "A project intelligence tool for engineering teams, combining maps, structured search, tabular data and an AI assistant.",
        tags: ["React", "Full-stack", "AI API"],
        action: "View live project",
        href: "https://project-search-lac.vercel.app/",
        visualLabel: "1,843 PROJECT RECORDS",
      },
      {
        no: "04",
        kind: "code",
        type: "3D & Visualisation",
        title: "Interactive Engineering Models",
        description:
          "Bringing 3D models and analysis results into the browser so structures, responses and details can be explored directly.",
        tags: ["Three.js", "WebGL", "3D"],
        action: "Experience in development",
        visualLabel: "INTERACTIVE 3D MODEL",
      },
    ],
    exploreEyebrow: "CURRENTLY EXPLORING",
    exploreTitle: "AI-assisted engineering workflows",
    exploreText:
      "Exploring how AI APIs can improve engineering knowledge retrieval, information organisation and repetitive workflows. This work is experimental, with both useful outcomes and real limitations documented honestly.",
    aboutEyebrow: "ABOUT",
    aboutTitle: "From analysing engineering problems to building tools that solve them.",
    aboutBody: [
      "My foundation is civil engineering. Mechanics, finite elements and structural dynamics taught me how to turn complex systems into models that can be tested and validated.",
      "An interest in code led me into full-stack development. My goal is not simply to build another website, but to turn engineering logic, data and experience into software people can actually use.",
    ],
    journey: [
      ["FOUNDATION", "Civil engineering training", "Mechanics, structural analysis and research methods"],
      ["COMPUTATION", "FEA and dynamic simulation", "ABAQUS, MATLAB and numerical analysis"],
      ["BUILD", "Self-directed full-stack development", "React, Next.js and engineering products"],
      ["EXPLORE", "AI × Engineering", "Starting with API prototypes and validating real value"],
    ],
    resumeEyebrow: "CAPABILITIES",
    resumeTitle: "A toolkit spanning engineering analysis and digital products.",
    skillGroups: [
      ["Engineering Analysis", ["Engineering Mechanics", "Finite Element Analysis", "Structural Dynamics", "Model Validation"]],
      ["Scientific Computing", ["MATLAB", "ODE & Dynamic Equations", "Numerical Simulation", "Data Visualisation"]],
      ["Software Development", ["React", "Next.js", "API Integration", "Full-stack Product Development"]],
    ],
    resumeNote: "A full resume, publications and project index will be connected in the next version.",
    contactEyebrow: "LET’S CONNECT",
    contactTitle: "Open to opportunities across computational engineering, engineering software and digital engineering.",
    contactText:
      "If you are working on a problem that needs engineering understanding, numerical methods and software thinking, I would be glad to talk.",
    contactButton: "Contact details coming next",
    footer: "Built around mechanics, computation and software.",
  },
} as const;

export default function Home() {
  const [locale, setLocale] = useState<Locale>("zh");
  const t = copy[locale];

  return (
    <main id="home">
      <header className="site-header">
        <div className="shell nav-row">
          <a className="brand" href="#home" aria-label="Wen Zhou home">
            <span className="brand-mark">W</span>
            <span>Wen Zhou</span>
          </a>
          <nav aria-label="Primary navigation">
            {t.nav.map(([label, href], index) => (
              <a className={index === 0 ? "active" : ""} href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <div className="locale-switch" aria-label="Language switcher">
            <button className={locale === "zh" ? "selected" : ""} onClick={() => setLocale("zh")}>
              中
            </button>
            <span>/</span>
            <button className={locale === "en" ? "selected" : ""} onClick={() => setLocale("en")}>
              EN
            </button>
          </div>
        </div>
      </header>

      <section className="hero shell" aria-labelledby="hero-heading">
        <div className="hero-glow" aria-hidden="true" />
        <p className="kicker"><span />{t.eyebrow}</p>
        <h1 id="hero-heading">{t.headline}</h1>
        <p className="hero-intro">{t.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#work">{t.viewWork}<span>↘</span></a>
          <a className="button button-secondary" href="#about">{t.readStory}<span>→</span></a>
        </div>
        <div className="credential" aria-label="Credentials">
          {t.credential.map((item, index) => (
            <span key={item} className={index === 0 ? "credential-name" : index === 2 ? "credential-honor" : ""}>
              {item}
            </span>
          ))}
        </div>
        <div className="pillar-row">
          {t.pillars.map(([number, title, sub], index) => (
            <div className={`pillar pillar-${index + 1}`} key={number}>
              <span className="pillar-number">{number}</span>
              <span><strong>{title}</strong><small>{sub}</small></span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="work" aria-labelledby="work-heading">
        <div className="section-heading">
          <div><p className="eyebrow mech-text">{t.workEyebrow}</p><h2 id="work-heading">{t.workTitle}</h2></div>
          <p>{t.workIntro}</p>
        </div>
        <div className="project-grid">
          {t.projects.map((project, index) => (
            <article className={`project-card ${project.kind}`} key={project.no}>
              <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
                <div className="visual-grid" />
                {index === 0 && <><div className="field field-a"/><div className="field field-b"/><div className="field field-c"/></>}
                {index === 1 && <div className="wave"><i/><i/><i/><i/><i/><i/><i/><i/><i/></div>}
                {index === 2 && <><div className="map-ring ring-a"/><div className="map-ring ring-b"/><div className="map-pin pin-a"/><div className="map-pin pin-b"/><div className="search-bar">Search project intelligence</div></>}
                {index === 3 && <div className="wire-object"><i/><i/><i/><i/><i/><i/></div>}
                <span className="visual-label">{project.visualLabel}</span>
                <span className="visual-index">{project.no}</span>
              </div>
              <div className="project-body">
                <div className="project-meta"><span>{project.type}</span><span>{project.no} / 04</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-footer">
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  {"href" in project ? (
                    <a href={project.href} target="_blank" rel="noreferrer">{project.action} ↗</a>
                  ) : <span className="project-status">{project.action}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell explore-section" aria-labelledby="explore-heading">
        <div className="explore-card">
          <div className="signal" aria-hidden="true"><span/><span/><span/></div>
          <div className="explore-copy">
            <p className="eyebrow ai-text">{t.exploreEyebrow}</p>
            <h2 id="explore-heading">{t.exploreTitle}</h2>
            <p>{t.exploreText}</p>
          </div>
          <div className="experiment-label"><span/>EXPERIMENTAL</div>
        </div>
      </section>

      <section className="section shell" id="about" aria-labelledby="about-heading">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow code-text">{t.aboutEyebrow}</p>
            <h2 id="about-heading">{t.aboutTitle}</h2>
            {t.aboutBody.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ol className="journey-list">
            {t.journey.map(([label, title, description], index) => (
              <li key={label}>
                <span className="journey-number">0{index + 1}</span>
                <div><small>{label}</small><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section shell" id="resume" aria-labelledby="resume-heading">
        <div className="resume-panel">
          <div className="resume-top">
            <div><p className="eyebrow mech-text">{t.resumeEyebrow}</p><h2 id="resume-heading">{t.resumeTitle}</h2></div>
            <span className="resume-code">CV / 2026</span>
          </div>
          <div className="skill-grid">
            {t.skillGroups.map(([group, skills], index) => (
              <div className={`skill-group skill-${index + 1}`} key={group as string}>
                <h3>{group}</h3>
                <ul>{(skills as readonly string[]).map(skill => <li key={skill}>{skill}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="resume-note">{t.resumeNote}</p>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="shell contact-inner">
          <p className="eyebrow ai-text">{t.contactEyebrow}</p>
          <h2 id="contact-heading">{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <button className="button button-primary" disabled>{t.contactButton}</button>
        </div>
      </section>

      <footer>
        <div className="shell footer-row">
          <div><strong>Wen Zhou</strong><span>{t.footer}</span></div>
          <span>© 2026 · Adelaide, Australia</span>
        </div>
      </footer>
    </main>
  );
}
