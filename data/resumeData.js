// 全局数据对象
export const resumeData = {
  experience: [
    {
      id: 'ali',
      title: "阿里巴巴集团-淘宝闪购",
      time: "2025.07 至 2026-11（1 年 4 个月）",
      type: "全职",
      departments: [
        {
          name: "骑手作业-终端技术组",
          time: "2026.08 至 2026.11",
          description: [
            "参与蜂鸟骑手 App 正向作业链路的需求开发（Mist 跨端技术栈）。"
          ]
        },
        {
          name: "物流技术部-履约调度团队",
          time: "2025.07 至 2026.08",
          description: [
            "负责物流侧运营中后台开发。",
            {
              text: "承担团队工程架构职责：主导研发 Agent 体系建设、存量代码治理，系统性提升工程效率与质量。",
              children: [
                "建设团队研发 Agent：定制面向存量代码的 Vue to React Skill，推动 21 个 Vue 页面完成 React 升级；沉淀团队级 Project Rule，并开发 VSCode 插件在团队内落地。",
                "推动历史代码问题治理与研发范式升级，通过基建和宣讲将团队从传统开发转向 SDD（规范驱动开发）。",
              ],
            },
          ]
        },
       

      ],
     
    },
    {
      id: 'bytedance',
      title: "字节跳动",
      time: "2020.07 至 2025.07（5 年）",
      type: "全职",
      departments: [
        {
          name: "即时零售-即配履约平台",
          time: "2022.11 至 2025.07",
          description: [
            "重构配送范围模块架构，推动双端（pc + h5）代码复用率达 70%，降低开发成本约 30%。",
            "主导配送范围模块地图性能优化，地图平均首次渲染时间由 2.3s 减少至 1.9s，长尾用户首次渲染时间由 12s 减少至 2s。",
            "从 0 到 1 完成消息中心模块的搭建，设计容灾降级方案保障系统稳定性，保证线上消息触达率 99.5%+。",
            "搭建配送商平台性能监控体系：通过埋点，定位并解决首屏加载耗时降低 30%+的核心性能瓶颈。"
          ]
        },
        {
          name: "商业化-广告线索中台",
          time: "2022.01 至 2022.11",
          description: [
            "主导<a href='https://www.npmjs.com/package/@clue_nidapp/form-core'>线索通表单 SDK </a>2.0 重构：设计实现插件化架构，核心包体积缩减约 30%。"
          ]
        },
        {
          name: "轻服务（Serverless 产品）团队",
          time: "2020.07 至 2021.12",
          description: [
            "负责轻服务'页面托管'产品能力的产品设计，技术开发（全栈）及运营维护。"
          ]
        }
      ]
    },
    {
      id: 'xiaomi',
      title: "小米科技（实习）",
      time: "2019.04 至 2019.11",
      type: "实习",
      description: []
    },
    {
      id: 'netease',
      title: "网易-杭州研究院（实习）",
      time: "2018.06 至 2018.09",
      type: "实习",
      description: []
    },
    {
      id: 'iqiyi',
      title: "爱奇艺（实习）",
      time: "2018.03 至 2018.05",
      type: "实习",
      description: []
    }
  ],
  skills: [
    {
      id: 'ai',
      title: "AI",
      description: [
        "日常熟练使用 Qoder，Cursor 等 AI IDE 进行 Vibe Coding。",
        "能精准拆解需求、定义问题并把控技术架构，提高 Vibe Coding 输入质量，降低 token 消耗；对生成代码做审计，定位边界遗漏和不可维护实现，并优化到可上线标准。",
        "能把个人工作流沉淀为团队 Agent Harness（Skill / Project Rule / Sub Agent），而不是仅停留在个人熟练使用 AI IDE。",
      ]
    },
    {
      id: 'web',
      title: "前端基础",
      description: [
        "熟知 JS 基本语法与知识，掌握最新 JS 语法与 API。能够编写语义化，可读性强的代码。",
        "使用过主流 mvvm 前端框架，了解不同 mvvm 框架的实现原理及差异。",
        "熟悉前端框架 React.js 的使用和原理，了解并使用过 vue2。",
        "掌握网页开发、重构所需的 css 语法。",
        "熟悉状态管理库 Mobx, zustand 的原理和使用。",
        "了解主流前端工程化方案及部分打包工具实现原理。"
      ]
    },
    {
      id: 'cross-end',
      title: "跨端",
      description: [
   
        "使用过 H5，小程序，lynx，Mist 等跨端技术栈进行客户端开发。",
      ]
    },
    {
      id: 'cross-end',
      title: "全栈",
      description: [
        "了解 HTTP 协议，了解 HTTPS 应用和原理。",
        "了解 Node.js 基本语法，有 Node.js 项目开发经验，对服务端概念有基本了解，能够开发简单的服务端应用。",
      ]
    },
  
    {
      id: 'microfront',
      title: "微前端",
      description: [
        "有过微前端应用开发经验，熟悉微前端框架的使用，了解部分微前端框架的实现原理。",
        "有过微前端应用性能优化的经验。"
      ]
    },
    {
      id: 'other',
      title: "其它",
      description: [
        "能够根据自己的经验，深度参与需求提出、产品设计、交付上线全链路，预判全链路潜在问题并提前规避。",
        "有较好的产品思维，能够站在用户视角思考，以用户体验驱动开发。",
        "能够快速与其它岗位高效协作，在必要时，可以一个人支撑一个模块的从 0 到 1 落地。"
      ]
    }
  ]
};