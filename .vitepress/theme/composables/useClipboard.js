import { ref, onUnmounted } from 'vue';
import ClipboardJS from 'clipboard';

export function useClipboard() {
  const isSuccess = ref(false);
  const tempButton = ref(null);
  const clipboard = ref(null);

  // 动态创建临时按钮并初始化复制功能
  const createTempCopyButton = (textToCopy) => {
    // 销毁之前的实例和元素
    destroyTempButton();

    // 创建临时按钮元素
    tempButton.value = document.createElement('button');
    tempButton.value.className = 'hidden'; // 隐藏按钮
    tempButton.value.setAttribute('data-clipboard-text', textToCopy);
    
    // 添加到body中
    document.body.appendChild(tempButton.value);
    
    // 初始化clipboard.js
    clipboard.value = new ClipboardJS(tempButton.value);
    
    // 设置成功回调
    clipboard.value.on('success', () => {
      isSuccess.value = true;
      setTimeout(() => {
        isSuccess.value = false;
      }, 2000);
      
      // 复制成功后清理
      destroyTempButton();
    });
    
    // 设置失败回调
    clipboard.value.on('error', (e) => { // Added 'e' parameter to see error details
      isSuccess.value = false;
      console.error('复制失败，请手动复制:', e); // Log error object
      destroyTempButton();
    });
    
    return tempButton.value;
  };

  // 执行复制操作
  const copyToClipboard = (textToCopy) => {
    const button = createTempCopyButton(textToCopy);
    // 模拟点击
    button.click();
  };

  // 销毁临时按钮和clipboard实例
  const destroyTempButton = () => {
    if (clipboard.value) {
      clipboard.value.destroy();
      clipboard.value = null;
    }
    
    if (tempButton.value && tempButton.value.parentNode) {
      tempButton.value.parentNode.removeChild(tempButton.value);
      tempButton.value = null;
    }
  };

  // 组件卸载时清理
  onUnmounted(() => {
    destroyTempButton();
  });

  return {
    isSuccess,
    copyToClipboard
  };
} 