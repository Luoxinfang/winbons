

###项目技术架构文档

####前言
    工具决定效率
    如果要解决的问题本身是非常复杂的，那么你用一个过于简陋的工具应付它，
    就会遇到工具太弱而使得生产力受影响的问题。反之，是如果所要解决的问题并不复杂，
    但你却用了很复杂的框架，那么就相当于杀鸡用牛刀，会遇到工具复杂度所带来的副作用，
    不仅会失去工具本身所带来优势，还会增加各种问题，例如培训成本、上手成本，以及实际开发效率等。

####设计思想
    前后端分离
    数据&状态驱动
    组件化&模块化&自动化&标准化
    Promise接口

####技术标准
    JavaScript ES2015
    数据&状态驱动 Vue.js 2.0
    样式 CSS3 异构语言 less
    DOM操作 jQuery 2.2.0
    对象操作 underscore.js 1.8.3
    页面自适应方案 百分比和rem结合的布局
    服务器 NodeJS

####构建工具
    webpack & FIS3

####版本管理
    目前svn
    目标git（重构完成后）

####前后端交互
    交互协议http
    数据格式JSON
    RESTful API设计风格

####组件化
    基于npm的开发管理
    基于Vuex的状态管理

####外部组件资源
    https://github.com/pespantelis?tab=repositories
    https://github.com/Haixing-Hu?tab=repositories
    https://github.com/hilongjw?tab=repositories
    https://github.com/sagalbot/vue-select


####UI框架
    http://element.eleme.io/#/component/quickstart
    http://okoala.github.io/vue-antd/#!/docs/introduce


#####新增特性
    url根据业务实时变化

####调试技术
    浏览器控制台
    Fiddler4

#####模拟数据
    node server
    mock.js

#####人员分配
    组件的梳理

    工作圈        罗新芳
    仪表盘        罗新芳
    统计分析      罗新芳
    线索          卢城彤
    客户          卢城彤
    联系人        卢城彤
    商机          卢城彤
    合同          卢城彤
    销售预测       彭海凡
    销售目标       彭海凡
    产品           彭海凡
    竞争对手        彭海凡
    日程           彭海凡
    邮件           张汪阳
    任务           张汪阳
    审批           张汪阳
    工作报告        张汪阳
    知识库          张汪阳

####为什么使用Vue.js
    1. 为什么要使用这类框架
       框架的存在是为了帮助我们应对复杂度。
       当我们解决一些前端开发问题的时候，就会遇到一些固定模式的问题，
       这些问题就需要框架来代替重复的劳动和固定的模式,降低开发的复杂度。

    2. 为什么在angular、react和一些其他框架中，选择Vue.js
       前端这类框架诞生的是伴随着web的数据处理、性能要求、交互体验、应用场景日益复杂而产生的。
       伴随着MVC在前端领域的提出，一些框架开始流行，其中也有angular。在此基础上组件化、模块化
       等思想被整合到框架中，react顺势而为，凭借首创的Virtual DOM性能获得极大的提升，
       加之react native的能力，成为了时下最流行框架，但是react学习的曲线非常陡峭。与此同时，
       前端框架井喷式的爆炸之后，人们发现这些框架都被过度设计，MVC和依赖注入什么之类的思想并不完全
       适合前端。这个时候Vue.js因其小而美、快而优雅、上手简单、专注View、可以局部使用等特性被广受关注。
       出于公司实际情况，我们选择了Vue.js
       Vue获得技术帮助的成本比react低
       Vue能允许我们先部分重构系统，逐步完成复杂的系统
       Vue能大幅度缩减代码量，提升开发效率，同时有着良好的运行性能
       Vue->weex 能使前端使能力进一步向原生客户端延伸，获得三端一致的技术体系，降低技术复杂度和开发成本



