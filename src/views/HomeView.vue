<template>
  <main>
    <!-- ===================== HERO SECTION ===================== -->
    <section class="Hero" id="hero">
        <div class="hero-bg">
            <div class="hero-particles" id="hero-particles">
                <span v-for="i in 28" :key="'hp'+i" class="particle" :style="getParticleStyle(i)"></span>
            </div>
            <div class="hero-overlay"></div>
        </div>
        <div class="hero-content">
            <p class="hero-tagline">{{ t('✦ Authentic Khmer Flavors ✦', '✦ រសជាតិខ្មែរពិតប្រាកដ ✦') }}</p>
            <h1 class="hero-title">
                <span class="hero-title-kh" v-if="currentLang === 'kh'">រស់ឯក</span>
                <span class="hero-title-en" v-else>ROS EK</span>
            </h1>
            <p class="hero-subtitle">
                {{ t('Premium Khmer Cuisine — Where Tradition Meets Excellence', 'ភោជនីយដ្ឋានខ្មែរកំពូល — កន្លែងដែលប្រពៃណីជួបនឹងភាពល្អឥតខ្ចោះ') }}
            </p>
            <div class="hero-cta">
                <a href="#menu-section" class="btn-primary" id="hero-btn-menu">{{ t('🍽️ Explore Menu', '🍽️ មើលមុខម្ហូប') }}</a>
                <RouterLink to="/order" class="btn-ghost" id="hero-btn-reserve">{{ t('📦 Order Now', '📦 កម៉ង់ឥឡូវ') }}</RouterLink>
            </div>
        </div>
        <div class="hero-scroll-indicator">
            <div class="scroll-line"></div>
            <span>{{ t('Scroll', 'រំកិល') }}</span>
        </div>
    </section>

    <!-- ===================== FEATURES STRIP ===================== -->
    <section class="Features">
        <div class="feature-item reveal" v-reveal>
            <span class="feature-icon">🏆</span>
            <div>
                <strong>{{ t('Award-Winning', 'ទទួលពានរង្វាន់') }}</strong>
                <p>{{ t('Best Khmer Restaurant 2024', 'ភោជនីយដ្ឋានខ្មែរល្អបំផុត ២០២៤') }}</p>
            </div>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-item reveal" v-reveal>
            <span class="feature-icon">🌿</span>
            <div>
                <strong>{{ t('Fresh Ingredients', 'គ្រឿងផ្សំស្រស់') }}</strong>
                <p>{{ t('Locally sourced daily', 'ប្រមូលក្នុងស្រុករៀងរាល់ថ្ងៃ') }}</p>
            </div>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-item reveal" v-reveal>
            <span class="feature-icon">🚚</span>
            <div>
                <strong>{{ t('Fast Delivery', 'ដឹកជញ្ជូនរហ័ស') }}</strong>
                <p>{{ t('Within 30 minutes', 'ក្នុងរយៈពេល ៣០ នាទី') }}</p>
            </div>
        </div>
        <div class="feature-divider"></div>
        <div class="feature-item reveal" v-reveal>
            <span class="feature-icon">❤️</span>
            <div>
                <strong>{{ t('Made with Love', 'ធ្វើដោយស្នេហា') }}</strong>
                <p>{{ t('Traditional family recipes', 'រូបមន្តគ្រួសារប្រពៃណី') }}</p>
            </div>
        </div>
    </section>

    <!-- ===================== MENU HEADING ===================== -->
    <section class="Content reveal" id="menu-section" v-reveal>
        <div class="content-inner">
            <p class="icon01">📜</p>
            <h2 class="content-kh-title">{{ t('បញ្ជីមុខម្ហូប', 'បញ្ជីមុខម្ហូប') }}</h2>
            <h3 class="menu-text">{{ t('OUR MENU', 'មុខម្ហូបរបស់យើង') }}</h3>
            <div class="glow-divider-wrapper">
                <hr class="glowing-divider">
                <p class="icon02">◆</p>
                <hr class="glowing-divider">
            </div>
            <p class="menu-desc">
                {{ t('Discover the rich and authentic flavors of Cambodia, crafted with love and tradition.', 'រកឃើញរសជាតិដ៏សម្បូរ និងពិតប្រាកដរបស់កម្ពុជា ចម្អិនដោយស្នេហា និងប្រពៃណី។') }}
            </p>
        </div>
    </section>

    <!-- ===================== MENU CATEGORY BUTTONS ===================== -->
    <div class="Menu-botton">
        <a class="Menu-btn" :class="{ active: activeMenu === 'all' }" href="#menu-list" @click="activeMenu = 'all'">{{ t('🍽️ All Menu', '🍽️ ទាំងអស់') }}</a>
        <a class="Menu-btn" :class="{ active: activeMenu === 'amok' }" href="#menu-amok" @click="activeMenu = 'amok'">{{ t('🍛 Amok', '🍛 អាម៉ុក') }}</a>
        <a class="Menu-btn" :class="{ active: activeMenu === 'samlorsngor' }" href="#menu-samlorsngor" @click="activeMenu = 'samlorsngor'">{{ t('🥣 Samlorsngor', '🥣 សម្លរស្ងោរ') }}</a>
        <a class="Menu-btn" :class="{ active: activeMenu === 'cha' }" href="#menu-cha" @click="activeMenu = 'cha'">{{ t('🍜 Stir Fry', '🍜 ម្ហូបឆា') }}</a>
        <a class="Menu-btn" :class="{ active: activeMenu === 'ang' }" href="#menu-ang" @click="activeMenu = 'ang'">{{ t('🍖 Grilled', '🍖 ម្ហូបអាំង') }}</a>
        <a class="Menu-btn" :class="{ active: activeMenu === 'samudra' }" href="#menu-samudra" @click="activeMenu = 'samudra'">{{ t('🦀 Seafood', '🦀 គ្រឿងសមុទ្រ') }}</a>
        <a class="Menu-btn" :class="{ active: activeMenu === 'dessert' }" href="#menu-dessert" @click="activeMenu = 'dessert'">{{ t('🍰 Desserts', '🍰 បង្អែម') }}</a>
    </div>

    <!-- ===================== MENU LIST ===================== -->
    <div class="list" id="menu-list">
        <div class="section-divider">
            <h2>{{ t('Amok (អាម៉ុក)', 'អាម៉ុក (Amok)') }}</h2>
            <hr>
        </div>
        <div class="list-item reveal" id="menu-amok" v-reveal>
            <div class="img-wrapper">
                <img src="/images/amok.jpg" alt="Amok - Traditional Khmer Fish Curry" loading="lazy">
                <div class="card-badge">{{ t('Signature', 'ម្ហូបពិសេស') }}</div>
            </div>
            <div class="card-body">
                <h3>{{ t('Fish Amok', 'អាម៉ុកត្រី') }}</h3>
                <p class="card-desc">{{ t('Steamed fish in rich coconut curry, wrapped in banana leaf.', 'ត្រីចំហុយក្នុងម្ហូបខ្ទិះដូង ដាក់ក្នុងស្លឹកចេក។') }}</p>
                <span class="card-price">$8.99</span>
            </div>
        </div>

        <div class="section-divider">
            <h2>{{ t('Samlorsngor (សម្លរស្ងោរ)', 'សម្លរស្ងោរ (Samlorsngor)') }}</h2>
            <hr>
        </div>
        <div class="list-item reveal" id="menu-samlorsngor" v-reveal>
            <div class="img-wrapper">
                <img src="/images/samlorsngor.jpg" alt="Samlorsngor - Khmer Sour Soup" loading="lazy">
            </div>
            <div class="card-body">
                <h3>{{ t('Sour Soup', 'សម្លរស្ងោរ') }}</h3>
                <p class="card-desc">{{ t('Traditional Khmer sour broth with fresh herbs and vegetables.', 'ទំពាំងបាយជូរខ្មែរប្រពៃណីជាមួយស្មៅ និងបន្លែស្រស់។') }}</p>
                <span class="card-price">$7.50</span>
            </div>
        </div>

        <div class="section-divider">
            <h2>{{ t('Stir Fry (ម្ហូបឆា)', 'ម្ហូបឆា (Cha)') }}</h2>
            <hr>
        </div>
        <div class="list-item reveal" id="menu-cha" v-reveal>
            <div class="img-wrapper">
                <img src="/images/cha.jpg" alt="Cha - Khmer Stir Fry" loading="lazy">
            </div>
            <div class="card-body">
                <h3>{{ t('Khmer Stir Fry', 'ម្ហូបឆាខ្មែរ') }}</h3>
                <p class="card-desc">{{ t('Wok-tossed seasonal vegetables with fragrant Khmer spices.', 'បន្លែតាមរដូវឆាក្នុងចាន ជាមួយគ្រឿងទេសខ្មែរក្រអូប។') }}</p>
                <span class="card-price">$6.99</span>
            </div>
        </div>

        <div class="section-divider">
            <h2>{{ t('Grilled & Roasted (ម្ហូបអាំង)', 'ម្ហូបអាំង ដុត និងបំពង') }}</h2>
            <hr>
        </div>
        <div class="list-item reveal" id="menu-ang" v-reveal>
            <div class="img-wrapper">
                <img src="/images/ang.jpg" alt="Ang - Grilled Khmer Dishes" loading="lazy">
            </div>
            <div class="card-body">
                <h3>{{ t('Grilled Chicken', 'មាន់អាំង') }}</h3>
                <p class="card-desc">{{ t('Marinated and grilled over charcoal with lemongrass sauce.', 'ត្រាំ និងអាំងលើធ្យូងជាមួយទឹកជ្រលក់ស្ករគ្រាប់។') }}</p>
                <span class="card-price">$10.99</span>
            </div>
        </div>

        <div class="section-divider">
            <h2>{{ t('Seafood (ម្ហូបគ្រឿងសមុទ្រ)', 'ម្ហូបគ្រឿងសមុទ្រ (Seafood)') }}</h2>
            <hr>
        </div>
        <div class="list-item reveal" id="menu-samudra" v-reveal>
            <div class="img-wrapper">
                <img src="/images/samudra.jpg" alt="Samudra - Khmer Seafood" loading="lazy">
            </div>
            <div class="card-body">
                <h3>{{ t('Crab with Kampot Pepper', 'ក្តាមម្រេចកំពត') }}</h3>
                <p class="card-desc">{{ t('Fresh crab stir-fried with world-famous Kampot black pepper.', 'ក្តាមស្រស់ឆាជាមួយម្រេចខ្មៅកំពតល្បីល្បាញ។') }}</p>
                <span class="card-price">$15.99</span>
            </div>
        </div>

        <div class="section-divider">
            <h2>{{ t('Khmer Desserts (បង្អែម)', 'បង្អែមខ្មែរ (Dessert)') }}</h2>
            <hr>
        </div>
        <div class="list-item reveal" id="menu-dessert" v-reveal>
            <div class="img-wrapper">
                <img src="/images/dessert.jpg" alt="Dessert - Khmer Sweets" loading="lazy">
            </div>
            <div class="card-body">
                <h3>{{ t('Khmer Sweets', 'បង្អែមខ្មែរ') }}</h3>
                <p class="card-desc">{{ t('Traditional Cambodian sweets made with coconut milk and palm sugar.', 'បង្អែមខ្មែរប្រពៃណី ធ្វើពីទឹកដោះដូង និងស្ករត្នោត។') }}</p>
                <span class="card-price">$4.50</span>
            </div>
        </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useLanguage } from '../composables/useLanguage'

const { t, currentLang } = useLanguage()

const activeMenu = ref('all')

const getParticleStyle = (i) => {
    // deterministic random to avoid hydration mismatch
    const rand1 = (i * 13) % 100
    const rand2 = (i * 29) % 100
    const rand3 = (i * 17) % 8
    const rand4 = (i * 31) % 6
    const rand5 = (i * 47) % 8
    const rand6 = ((i * 59) % 35) / 100
    return `
        left: ${rand1}%;
        top: ${rand2}%;
        width: ${4 + rand3}px;
        height: ${4 + rand3}px;
        animation-delay: ${rand4}s;
        animation-duration: ${6 + rand5}s;
        opacity: ${0.1 + rand6};
    `
}

const vReveal = {
  mounted: (el) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    observer.observe(el);
  }
}
</script>
