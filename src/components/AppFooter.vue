<template>
  <footer class="Footer">
    <div class="footer-inner">
        <div class="footer-brand">
            <img src="/images/ros-ek2.png" alt="Ros Ek Logo" class="footer-logo">
            <p class="footer-tagline">{{ t('Authentic Khmer Cuisine Since 2010', 'ភោជនីយដ្ឋានខ្មែរពិតប្រាកដ តាំងពីឆ្នាំ ២០១០') }}</p>
        </div>
        <div class="footer-links">
            <h4>{{ t('Quick Links', 'តំណភ្ជាប់') }}</h4>
            <ul>
                <li><RouterLink to="/">{{ t('Home', 'ទំព័រដើម') }}</RouterLink></li>
                <li><RouterLink :to="{ path: '/', hash: '#menu-section' }">{{ t('Menu', 'មុខម្ហូប') }}</RouterLink></li>
                <li><RouterLink to="/about">{{ t('About Us', 'អំពីយើង') }}</RouterLink></li>
                <li><RouterLink to="/contact">{{ t('Contact', 'ទំនាក់ទំនង') }}</RouterLink></li>
            </ul>
        </div>
        <div class="footer-contact">
            <h4>{{ t('Contact Us', 'ទំនាក់ទំនងយើង') }}</h4>
            <p>📧 info@rosek.com</p>
            <p>📞 +855 12 345 678</p>
            <p>📍 <span>{{ t('Phnom Penh, Cambodia', 'ភ្នំពេញ, កម្ពុជា') }}</span></p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>© 2024 Ros Ek Restaurant. <span>{{ t('All rights reserved.', 'រក្សាសិទ្ធគ្រប់យ៉ាង។') }}</span></p>
    </div>
  </footer>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()
</script>
