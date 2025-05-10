import DefaultTheme from 'vitepress/theme'
import './style.css' // 导入你的自定义 CSS 文件
import SelfHostedSetup from './components/SelfHostedSetup.vue' // 导入你的组件

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('SelfHostedSetup', SelfHostedSetup)
  }
} 