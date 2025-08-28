<template>
  <div class="domain-register-section">
    <div class="container">
      <p class="section-description">.com低至54元，.cn低至20元！部分后缀新人0.99元注册</p>
      
      <div class="search-container">
        <div class="input-group">
          <input 
            v-model="domainQuery" 
            type="text" 
            placeholder="请输入您想要的域名，如：example.com"
            class="domain-input"
            @keyup.enter="handleRegister"
          />
          <button 
            @click="handleRegister" 
            class="register-button"
            :disabled="!domainQuery.trim()"
          >
            立即注册
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const domainQuery = ref('')

const handleRegister = () => {
  const query = domainQuery.value.trim()
  if (query) {
    const registerUrl = `https://www.bt.cn/new/domain-query-register.html?search=${encodeURIComponent(query)}`
    window.open(registerUrl, '_blank')
  }
}
</script>

<style scoped>
.domain-register-section {
  margin-top: 0;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 2rem;
  color: #5d5d5f;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
}

.input-group {
  display: flex;
  gap: 0;
  border-radius: 0;
  overflow: hidden;
}

.domain-input {
  flex: 1;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  border: 2px solid var(--vp-c-brand-1, #20a53a);
  border-right: none;
  outline: none;
  transition: all 0.3s ease;
  background: white;
  border-radius: 0;
}

.domain-input:focus {
  border-color: var(--vp-c-brand-1, #20a53a);
  box-shadow: 0 0 0 3px rgba(32, 165, 58, 0.1);
}

.register-button {
  padding: 1rem 2rem;
  background: var(--vp-c-brand-1, #20a53a);
  color: white;
  border: 2px solid var(--vp-c-brand-1, #20a53a);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.register-button:hover:not(:disabled) {
  background: var(--vp-c-brand-2, #1b8c32);
  border-color: var(--vp-c-brand-2, #1b8c32);
  transform: translateY(-1px);
}

.register-button:disabled {
  background: #73dfa0;
  border-color: #73dfa0;
  cursor: not-allowed;
  transform: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .domain-register-section {
    padding: 3rem 0;
    margin-top: 3rem;
  }
  
  .container {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-description {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
  
  .input-group {
    flex-direction: column;
    border-radius: 0;
  }
  
  .domain-input {
    border-right: 2px solid var(--vp-c-brand-1, #20a53a);
    border-bottom: none;
    border-radius: 0;
  }
  
  .register-button {
    border-radius: 0;
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
  }
  
  .domain-input,
  .register-button {
    padding: 0.875rem 1rem;
    font-size: 0.9rem;
  }
}

/* 深色模式适配 */

html.dark .section-title {
  color: #f7fafc;
}

html.dark .section-description {
  color: #cbd5e0;
}

html.dark .domain-input {
  background: #2d3748;
  border-color: var(--vp-c-brand-1, #20a53a);
  color: #f7fafc;
}

html.dark .domain-input:focus {
  border-color: var(--vp-c-brand-1, #20a53a);
  background: #374151;
}

html.dark .domain-input::placeholder {
  color: #a0aec0;
}
</style>