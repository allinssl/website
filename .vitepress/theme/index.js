import DefaultTheme from 'vitepress/theme'
import './style.css' // 导入你的自定义 CSS 文件
import SelfHostedSetup from './components/SelfHostedSetup.vue' // 导入你的组件
import DomainRegister from './components/DomainRegister.vue' // 导入域名注册组件

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('SelfHostedSetup', SelfHostedSetup)
    app.component('DomainRegister', DomainRegister)
  }
}