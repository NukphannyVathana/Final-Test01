<template>
  <header class="Header" id="main-header" :class="{ scrolled: isScrolled }">
    <RouterLink to="/" class="logo-link">
      <img src="/images/ros-ek2.png" alt="Ros Ek Restaurant Logo" class="logo-img">
    </RouterLink>

    <nav class="nav-center">
      <ul class="nav-links">
        <li><RouterLink to="/" exact-active-class="active">{{ t('Home', 'ទំព័រដើម') }}</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#menu-section' }">{{ t('Menu', 'មុខម្ហូប') }}</RouterLink></li>
        <li><RouterLink to="/about" active-class="active">{{ t('About', 'អំពីយើង') }}</RouterLink></li>
        <li><RouterLink to="/contact" active-class="active">{{ t('Contact', 'ទំនាក់ទំនង') }}</RouterLink></li>
        <li><RouterLink to="/order" active-class="active">{{ t('Order Now', 'កម៉ង់ឥឡូវ') }}</RouterLink></li>
      </ul>
    </nav>

    <div class="nav-right">
      <!-- Language Toggle -->
      <button class="lang-toggle" @click="toggleLanguage" aria-label="Switch Language" title="Switch Language">
        <span class="lang-option" :class="{ 'lang-active': currentLang === 'en' }">EN</span>
        <span class="lang-divider">|</span>
        <span class="lang-option" :class="{ 'lang-active': currentLang === 'kh' }">ខ្មែរ</span>
        <span class="lang-slider" :class="{ 'active-kh': currentLang === 'kh' }"></span>
      </button> 

      <ul class="auth-links">
        <li><RouterLink to="/login" active-class="active">{{ t('Login', 'ចូល') }}</RouterLink></li>
        <li><RouterLink to="/signup" class="btn-signup" active-class="active">{{ t('Sign Up', 'ចុះឈ្មោះ') }}</RouterLink></li>
      </ul>

      <!-- Mobile Hamburger -->
      <button class="hamburger" :class="{ open: mobileMenuOpen }" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <div class="mobile-menu" :class="{ open: mobileMenuOpen }">
    <ul>
      <li><RouterLink to="/" @click="mobileMenuOpen = false">{{ t('Home', 'ទំព័រដើម') }}</RouterLink></li>
      <li><RouterLink :to="{ path: '/', hash: '#menu-section' }" @click="mobileMenuOpen = false">{{ t('Menu', 'មុខម្ហូប') }}</RouterLink></li>
      <li><RouterLink to="/about" @click="mobileMenuOpen = false">{{ t('About', 'អំពីយើង') }}</RouterLink></li>
      <li><RouterLink to="/contact" @click="mobileMenuOpen = false">{{ t('Contact', 'ទំនាក់ទំនង') }}</RouterLink></li>
      <li><RouterLink to="/order" @click="mobileMenuOpen = false">{{ t('Order Now', 'កម៉ង់ឥឡូវ') }}</RouterLink></li>
      <li><RouterLink to="/login" @click="mobileMenuOpen = false">{{ t('Login', 'ចូល') }}</RouterLink></li>
      <li><RouterLink to="/signup" @click="mobileMenuOpen = false">{{ t('Sign Up', 'ចុះឈ្មោះ') }}</RouterLink></li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { currentLang, toggleLanguage, t } = useLanguage()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
