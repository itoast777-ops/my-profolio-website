import skate from '../assets/work/skate.jpg'
import youth from '../assets/work/youth.jpg'
import ipAction from '../assets/work/ip-action.jpg'
import portfolio from '../assets/work/portfolio.jpg'
import avatars from '../assets/work/avatars.jpg'
import looploop from '../assets/work/looploop.jpg'

export type Project = {
  id: string
  title: string
  category: string
  year: string
  client: string
  role: string
  summary: string
  deliverables: string[]
  highlights: string[]
  image: string
  /** Card shape inside the folder fan */
  kind: 'poster' | 'frame' | 'square'
}

export const projects: Project[] = [
  {
    id: 'skate',
    title: 'SKATE 街头潮流主视觉',
    category: '品牌视觉',
    year: '2025',
    client: "Rollin' Club",
    role: '主视觉 · 3D 角色',
    summary: '为街头滑板品牌打造的季度主视觉，以 3D 角色与高饱和洋红字体呈现年轻、自由、不设限的态度。',
    deliverables: ['主海报', '社媒套图', '周边贴纸'],
    highlights: ['社媒互动率提升 64%', '线下快闪店沿用整套主视觉'],
    image: skate,
    kind: 'poster',
  },
  {
    id: 'youth',
    title: 'YOUTH 杂志封面企划',
    category: '编辑设计',
    year: '2025',
    client: 'YOUTH Magazine',
    role: '封面设计 · 版式',
    summary: '以荧光绿为主色的 Z 世代时尚杂志封面，3D 角色与手写字体结合，传递轻松自信的生活方式。',
    deliverables: ['封面', '内页版式', '标题字体系统'],
    highlights: ['当期零售销量创新高', '视觉系统延续至后续 6 期'],
    image: youth,
    kind: 'poster',
  },
  {
    id: 'ip-action',
    title: 'Little Snap IP 角色设定',
    category: 'IP 设计',
    year: '2024',
    client: 'Snap Studio',
    role: '角色设计 · 动作表情',
    summary: '为摄影社区打造的吉祥物「Little Snap」，包含完整的动作与表情设定，可灵活延展到产品与营销场景。',
    deliverables: ['角色三视图', '12 组动作', '表情包'],
    highlights: ['表情包下载量 30 万+', '授权周边上线 3 个系列'],
    image: ipAction,
    kind: 'poster',
  },
  {
    id: 'portfolio',
    title: 'Design Portfolio 2025',
    category: 'UI 设计',
    year: '2025',
    client: '个人项目',
    role: '视觉 · 交互 · 网页',
    summary: '一套展示个人作品的网页与演示模板，深紫配霓虹黄，用强烈的节奏与层次让每个项目都被看见。',
    deliverables: ['作品集网站', '演示模板', '组件库'],
    highlights: ['29 页完整演示稿', '获得多家工作室面试邀约'],
    image: portfolio,
    kind: 'frame',
  },
  {
    id: 'avatars',
    title: 'Crew 潮流头像系列',
    category: '3D 角色',
    year: '2024',
    client: 'Crew App',
    role: '3D 建模 · 渲染',
    summary: '为社交应用设计的 3D 头像系统，支持帽子、眼镜、发型与服装的多维度组合，让每位用户都有专属形象。',
    deliverables: ['头像系统', '配件库', '渲染规范'],
    highlights: ['超过 2,000 种组合', '新用户头像设置率提升 41%'],
    image: avatars,
    kind: 'square',
  },
  {
    id: 'looploop',
    title: 'LoopLoop 品牌与 App',
    category: '品牌 & UI',
    year: '2024',
    client: 'LoopLoop',
    role: '品牌识别 · App 界面',
    summary: '像素小狗与流动线条组成的品牌形象，从 Logo 延展到 App 引导页、运营活动与线下物料。',
    deliverables: ['品牌识别', 'App 引导页', '运营物料'],
    highlights: ['App Store 首页推荐', '7 日留存提升 23%'],
    image: looploop,
    kind: 'poster',
  },
]
