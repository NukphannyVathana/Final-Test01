<template>
  <main>
    <!-- Mobile Menu -->


<!-- ═══════════════════ HERO BANNER ═══════════════════ -->
<section class="about-hero">
    <div class="about-hero-bg"></div>
    <div class="about-hero-particles" id="about-particles"></div>
    <div class="about-hero-content">
        <p class="about-hero-tag" >{{ t('✦ Our Story ✦', '✦ រឿងរ៉ាវរបស់យើង ✦') }}</p>
        <h1 >{{ t('About Ros Ek', 'អំពីរស់អែក') }}</h1>
        <p  >
            Where every dish tells a story of Cambodia's rich culinary heritage.
        </p>
    </div>
    <div class="hero-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fdf8f0"/>
        </svg>
    </div>
</section>

<!-- ═══════════════════ STATS STRIP ═══════════════════ -->
<section class="stats-strip">
    <div class="stat-item reveal" v-reveal>
        <span class="stat-num" data-target="14">0</span><span class="stat-unit">+</span>
        <p >{{ t('Years of Excellence', 'ឆ្នាំនៃភាពល្អឥតខ្ចោះ') }}</p>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item reveal" v-reveal>
        <span class="stat-num" data-target="80">0</span><span class="stat-unit">+</span>
        <p >{{ t('Authentic Dishes', 'មុខម្ហូបពិតប្រាកដ') }}</p>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item reveal" v-reveal>
        <span class="stat-num" data-target="50000">0</span><span class="stat-unit">+</span>
        <p >{{ t('Happy Guests', 'ភ្ញៀវវីរសាន') }}</p>
    </div>
    <div class="stat-divider"></div>
    <div class="stat-item reveal" v-reveal>
        <span class="stat-num" data-target="12">0</span><span class="stat-unit"></span>
        <p >{{ t('Awards Won', 'ពានរង្វាន់ទទួលបាន') }}</p>
    </div>
</section>

<!-- ═══════════════════ OUR STORY ═══════════════════ -->
<section class="story-section">
    <div class="story-inner">
        <div class="story-text reveal" v-reveal>
            <span class="section-tag" >{{ t('Our Story', 'រឿងរ៉ាវរបស់យើង') }}</span>
            <h2 >{{ t('A Legacy Born from Passion', 'បេសកកម្មមួយដែលកើតចេញពីចិត្តស្នេហ') }}</h2>
            <p  >
                Ros Ek was founded in 2010 by Chef Yeak, whose grandmother's kitchen in Siem Reap was her first classroom. Growing up surrounded by the fragrant aromas of prahok, lemongrass, and kaffir lime, she developed a deep love for Khmer cooking.
            </p>
            <p  >
                After training in culinary schools across Asia, she returned to Cambodia with one mission: to elevate traditional Khmer cuisine while preserving its authentic soul. Today, Ros Ek stands as a proud symbol of Cambodian culinary excellence.
            </p>
            <div class="story-badges">
                <div class="story-badge">
                    <span class="badge-icon">🏆</span>
                    <span >{{ t('Best Restaurant 2024', 'ភោជនីយដ្ឋានល្អបំផុត ២០២៤') }}</span>
                </div>
                <div class="story-badge">
                    <span class="badge-icon">⭐</span>
                    <span >{{ t('Michelin Recommended', 'ណែនាំដោយ Michelin') }}</span>
                </div>
                <div class="story-badge">
                    <span class="badge-icon">🌿</span>
                    <span >{{ t('100% Locally Sourced', 'ទំនិញក្នុងស្រុក ១០០%') }}</span>
                </div>
            </div>
        </div>
        <div class="story-visual reveal" v-reveal>
            <div class="story-img-stack">
                <div class="story-img-main">
                    <img src="/images/ChefYeak.jpg" alt="Chef preparing Khmer food">
                    <div class="story-img-overlay">
                        <span class="story-img-label" >{{ t('Est. 2010', 'បង្កើតឡើង ២០១០') }}</span>
                    </div>
                </div>
                <!-- LEFT floating image -->
                <div class="story-img-float story-img-float--1">
                    <img src="/images/img-amok-float.png" alt="Khmer Fish Amok">
                    <div class="float-caption" >{{ t('Fish Amok', 'អាម៉ុកត្រី') }}</div>
                </div>
                <!-- RIGHT floating image -->
                <div class="story-img-float story-img-float--2">
                    <img src="/images/img-dessert-float.png" alt="Khmer Dessert">
                    <div class="float-caption" >{{ t('Khmer Dessert', 'បង្អែមខ្មែរ') }}</div>
                </div>
                <div class="story-gold-ring"></div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════ OUR VALUES ═══════════════════ -->
<section class="values-section">
    <div class="values-inner">
        <div class="section-header reveal" v-reveal>
            <span class="section-tag" >{{ t('What We Stand For', 'តម្លៃរបស់យើង') }}</span>
            <h2 >{{ t('Our Core Values', 'គោលដៅស្នូលរបស់យើង') }}</h2>
            <p >{{ t('Every decision we make is guided by these principles.', 'ការសម្រេចចិត្តរបស់យើងត្រូវបានណែនាំដោយគោលការណ៍ទាំងនេះ។') }}</p>
        </div>
        <div class="values-grid">
            <div class="value-card reveal" v-reveal>
                <div class="value-icon-wrap">
                    <span class="value-icon">🌿</span>
                </div>
                <h3 >{{ t('Fresh & Authentic', 'ស្រស់ & ពិតប្រាកដ') }}</h3>
                <p  >
                    We source only the freshest local ingredients daily from Cambodian farmers and markets, honouring traditional recipes passed down through generations.
                </p>
            </div>
            <div class="value-card reveal" v-reveal>
                <div class="value-icon-wrap">
                    <span class="value-icon">❤️</span>
                </div>
                <h3 >{{ t('Cooked with Love', 'ចម្អិនដោយស្នេហា') }}</h3>
                <p  >
                    Every dish that leaves our kitchen carries the heart and soul of our chefs. We believe great food is an act of love and care for the people we serve.
                </p>
            </div>
            <div class="value-card reveal" v-reveal>
                <div class="value-icon-wrap">
                    <span class="value-icon">🏛️</span>
                </div>
                <h3 >{{ t('Cultural Heritage', 'មរតកវប្បធម៌') }}</h3>
                <p  >
                    Khmer cuisine is an art form with over 1,000 years of history. We are guardians of this heritage, blending ancient recipes with modern presentation.
                </p>
            </div>
            <div class="value-card reveal" v-reveal>
                <div class="value-icon-wrap">
                    <span class="value-icon">🌱</span>
                </div>
                <h3 >{{ t('Sustainable Practices', 'ការអនុវត្តប្រកបដោយចីរភាព') }}</h3>
                <p  >
                    We are committed to sustainability — from biodegradable packaging for delivery to supporting local farms and reducing food waste at every step.
                </p>
            </div>
            <div class="value-card reveal" v-reveal>
                <div class="value-icon-wrap">
                    <span class="value-icon">👨‍👩‍👧‍👦</span>
                </div>
                <h3 >{{ t('Community First', 'សហគមន៍មកមុន') }}</h3>
                <p  >
                    Ros Ek is more than a restaurant — it's a community hub. We support local artisans, sponsor cultural events, and give back to the people of Phnom Penh.
                </p>
            </div>
            <div class="value-card reveal" v-reveal>
                <div class="value-icon-wrap">
                    <span class="value-icon">✨</span>
                </div>
                <h3 >{{ t('Premium Experience', 'បទពិសោធន៍ពិសេស') }}</h3>
                <p  >
                    From the moment you walk in to the last bite of dessert, we craft an unforgettable experience through exceptional food, service, and atmosphere.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════ TEAM SECTION ═══════════════════ -->
<section class="team-section">
    <div class="team-inner">
        <div class="section-header reveal" v-reveal>
            <span class="section-tag" >{{ t('The People Behind the Magic', 'អ្នកនៅពីក្រោយភាពអស្ចារ្យ') }}</span>
            <h2 >{{ t('Meet Our Team', 'ជួបក្រុមការងាររបស់យើង') }}</h2>
            <p >{{ t('Passionate individuals united by a love for Khmer cuisine.', 'បុគ្គលដែលស្រឡាញ់ម្ហូបខ្មែរ ប្រមូលផ្ដុំគ្នា។') }}</p>
        </div>
        <div class="team-grid">
            <div class="team-card reveal" v-reveal>
                <div class="team-avatar">
                    <div class="avatar-ring"></div>
                    <div class="avatar-img" style="background: linear-gradient(135deg,#145220,#0e3011)">
                        <img src="/images/ChefYeak.jpg" alt="Chef">
                        <span style="font-size:2.5rem"></span>
                    </div>
                </div>
                <div class="team-info">
                    <h3>Sokha Ros</h3>
                    <span class="team-role" >{{ t('Head Chef & Founder', 'ចុងភៅ និងអ្នកបង្កើត') }}</span>
                    <p  >
                        20+ years of culinary expertise across Asia. Trained in Bangkok, Tokyo, and Paris before returning home to Cambodia.
                    </p>
                    <div class="team-social">
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="Instagram">📸</a>
                    </div>
                </div>
            </div>
            <div class="team-card reveal" v-reveal>
                <div class="team-avatar">
                    <div class="avatar-ring"></div>
                    <div class="avatar-img" style="background: linear-gradient(135deg,#a07830,#c9a84c)">
                        <span style="font-size:2.5rem">👩‍🍳</span>
                    </div>
                </div>
                <div class="team-info">
                    <h3>Chantha Meas</h3>
                    <span class="team-role" >{{ t('Pastry & Dessert Chef', 'ចុងភៅបង្អែម') }}</span>
                    <p  >
                        Specialist in traditional Khmer sweets and modern fusion desserts. Her Num Ansom is legendary among regulars.
                    </p>
                    <div class="team-social">
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="Instagram">📸</a>
                    </div>
                </div>
            </div>
            <div class="team-card reveal" v-reveal>
                <div class="team-avatar">
                    <div class="avatar-ring"></div>
                    <div class="avatar-img" style="background: linear-gradient(135deg,#1a3a5c,#2a5fa0)">
                        <span style="font-size:2.5rem">👨‍💼</span>
                    </div>
                </div>
                <div class="team-info">
                    <h3>Dara Keo</h3>
                    <span class="team-role" >{{ t('Restaurant Manager', 'អ្នកគ្រប់គ្រងភោជនីយដ្ឋាន') }}</span>
                    <p  >
                        Ensures every guest feels at home. Dara's warmth and attention to detail make every visit to Ros Ek unforgettable.
                    </p>
                    <div class="team-social">
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="Instagram">📸</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════ TIMELINE ═══════════════════ -->
<section class="timeline-section">
    <div class="timeline-inner">
        <div class="section-header reveal" v-reveal>
            <span class="section-tag" >{{ t('Our Journey', 'ដំណើររបស់យើង') }}</span>
            <h2 >{{ t('Milestones', 'ចំណុចសំខាន់') }}</h2>
        </div>
        <div class="timeline">
            <div class="timeline-item reveal" v-reveal>
                <div class="timeline-dot"></div>
                <div class="timeline-year">2010</div>
                <div class="timeline-content">
                    <h4 >{{ t('The Beginning', 'ការចាប់ផ្ដើម') }}</h4>
                    <p  >
                        Ros Ek opens its first small restaurant in BKK1, Phnom Penh with only 8 tables and 5 dishes on the menu.
                    </p>
                </div>
            </div>
            <div class="timeline-item reveal" v-reveal>
                <div class="timeline-dot"></div>
                <div class="timeline-year">2014</div>
                <div class="timeline-content">
                    <h4 >{{ t('First Award', 'ពានរង្វាន់ដំបូង') }}</h4>
                    <p  >
                        Awarded Best New Restaurant in Cambodia by the National Culinary Association. The team grew to 15 passionate staff.
                    </p>
                </div>
            </div>
            <div class="timeline-item reveal" v-reveal>
                <div class="timeline-dot"></div>
                <div class="timeline-year">2018</div>
                <div class="timeline-content">
                    <h4 >{{ t('Expansion', 'ការពង្រីក') }}</h4>
                    <p  >
                        Moved to a larger 120-seat venue in Daun Penh. Launched our catering and delivery services across Phnom Penh.
                    </p>
                </div>
            </div>
            <div class="timeline-item reveal" v-reveal>
                <div class="timeline-dot"></div>
                <div class="timeline-year">2022</div>
                <div class="timeline-content">
                    <h4 >{{ t('Michelin Recognition', 'ការទទួលស្គាល់ Michelin') }}</h4>
                    <p  >
                        Ros Ek is included in the Michelin Guide for Southeast Asia, putting Khmer cuisine on the global culinary map.
                    </p>
                </div>
            </div>
            <div class="timeline-item reveal" v-reveal>
                <div class="timeline-dot timeline-dot--gold"></div>
                <div class="timeline-year timeline-year--gold">2024</div>
                <div class="timeline-content">
                    <h4 >{{ t('Best Restaurant 2024', 'ភោជនីយដ្ឋានល្អបំផុត ២០២៤') }}</h4>
                    <p  >
                        Named Cambodia's Best Restaurant 2024. Now serving 300+ guests daily with 80+ authentic Khmer dishes.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════ GALLERY ═══════════════════ -->
<section class="gallery-section">
    <div class="section-header reveal" v-reveal>
        <span class="section-tag" >{{ t('A Glimpse Inside', 'ទស្សនៈខ្លីៗ') }}</span>
        <h2 >{{ t('Our Gallery', 'វិចិត្រសាលរបស់យើង') }}</h2>
    </div>
    <div class="gallery-grid">
        <div class="gallery-item gallery-item--large reveal" v-reveal>
            <img src="/images/amok.jpg" alt="Fish Amok - Ros Ek signature dish" loading="lazy">
            <div class="gallery-overlay">
                <span >{{ t('Fish Amok', 'អាម៉ុកត្រី') }}</span>
            </div>
        </div>
        <div class="gallery-item reveal" v-reveal>
            <img src="/images/samlorsngor.jpg" alt="Khmer Sour Soup" loading="lazy">
            <div class="gallery-overlay">
                <span >{{ t('Sour Soup', 'សម្លរស្ងោរ') }}</span>
            </div>
        </div>
        <div class="gallery-item reveal" v-reveal>
            <img src="/images/cha.jpg" alt="Stir Fry" loading="lazy">
            <div class="gallery-overlay">
                <span >{{ t('Stir Fry', 'ម្ហូបឆា') }}</span>
            </div>
        </div>
        <div class="gallery-item reveal" v-reveal>
            <img src="/images/ang.jpg" alt="Grilled Dishes" loading="lazy">
            <div class="gallery-overlay">
                <span >{{ t('Grilled', 'ម្ហូបអាំង') }}</span>
            </div>
        </div>
        <div class="gallery-item reveal" v-reveal>
            <img src="/images/samudra.jpg" alt="Seafood" loading="lazy">
            <div class="gallery-overlay">
                <span >{{ t('Seafood', 'គ្រឿងសមុទ្រ') }}</span>
            </div>
        </div>
        <div class="gallery-item reveal" v-reveal>
            <img src="/images/dessert.jpg" alt="Desserts" loading="lazy">
            <div class="gallery-overlay">
                <span >{{ t('Desserts', 'បង្អែម') }}</span>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════════ CTA SECTION ═══════════════════ -->
<section class="cta-section">
    <div class="cta-bg"></div>
    <div class="cta-content reveal" v-reveal>
        <span class="cta-icon">🍽️</span>
        <h2 >{{ t('Ready to Experience Ros Ek?', 'ត្រៀមខ្លួនសម្រាប់បទពិសោធន៍រស់អែក?') }}</h2>
        <p  >
            Join thousands of happy guests who have tasted the magic of authentic Khmer cuisine.
        </p>
        <div class="cta-btns">
            <RouterLink to="/order" class="cta-btn-primary">{{ t('🚀 Order Now', '🚀 កម៉ង់ឥឡូវ') }}</RouterLink>
            <RouterLink :to="{ path: '/', hash: '#menu-section' }" class="cta-btn-ghost">{{ t('📋 View Menu', '📋 មើលមុខម្ហូប') }}</RouterLink>
        </div>
    </div>
</section>

<!-- ═══════════════════ FOOTER ═══════════════════ -->
  </main>
</template>

<script setup>
import { useLanguage } from '../composables/useLanguage'
const { t } = useLanguage()

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
