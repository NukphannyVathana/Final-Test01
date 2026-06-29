<template>
  <main>
    <!-- HERO -->
<section class="contact-hero">
    <div class="contact-hero-bg"></div>
    <div class="contact-hero-content">
        <p class="hero-tag" >{{ t('✦ We\'d Love to Hear From You ✦', '✦ យើងចង់ស្ដាប់ពីអ្នក ✦') }}</p>
        <h1 >{{ t('Contact Us', 'ទំនាក់ទំនងយើង') }}</h1>
        <p >{{ t('Reach out for reservations, feedback, or just to say hello!', 'ទំនាក់ទំនងសម្រាប់ការកក់តុ មតិ ឬគ្រាន់តែសួរសុខទុក្ខ!') }}</p>
    </div>
    <div class="hero-wave"><svg viewBox="0 0 1440 70" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"><path d="M0,35 C480,70 960,0 1440,35 L1440,70 L0,70 Z" fill="#fdf8f0"/></svg></div>
</section>

<!-- INFO CARDS STRIP -->
<section class="info-strip">
    <div class="info-card reveal" v-reveal>
        <div class="info-icon">📍</div>
        <div>
            <h3 >{{ t('Visit Us', 'មកលេងយើង') }}</h3>
            <p >{{ t('Daun Penh District', 'ខណ្ឌដូនពេញ') }}</p>
            <p >{{ t('Phnom Penh, Cambodia', 'ភ្នំពេញ, កម្ពុជា') }}</p>
        </div>
    </div>
    <div class="info-card reveal" v-reveal>
        <div class="info-icon">📞</div>
        <div>
            <h3 >{{ t('Call Us', 'ទូរស័ព្ទ') }}</h3>
            <p>+855 12 345 678</p>
            <p>+855 23 456 789</p>
        </div>
    </div>
    <div class="info-card reveal" v-reveal>
        <div class="info-icon">📧</div>
        <div>
            <h3 >{{ t('Email Us', 'អ៊ីមែល') }}</h3>
            <p>info@rosek.com</p>
            <p>order@rosek.com</p>
        </div>
    </div>
    <div class="info-card reveal" v-reveal>
        <div class="info-icon">🕐</div>
        <div>
            <h3 >{{ t('Opening Hours', 'ម៉ោងបើក') }}</h3>
            <p >{{ t('Mon–Fri: 10am – 10pm', 'ច័ន្ទ–សុក្រ: ១០ព្រឹក – ១០យប់') }}</p>
            <p >{{ t('Sat–Sun: 9am – 11pm', 'សៅរ៍–អាទិត្យ: ៩ព្រឹក – ១១យប់') }}</p>
        </div>
    </div>
</section>

<!-- MAIN CONTACT LAYOUT -->
<section class="contact-main">
    <!-- LEFT: Form -->
    <div class="contact-form-wrap reveal" v-reveal>
        <div class="form-header">
            <span class="section-tag" >{{ t('Send a Message', 'ផ្ញើសារ') }}</span>
            <h2 >{{ t('We\'ll Get Back to You', 'យើងនឹងឆ្លើយតបអ្នក') }}</h2>
            <p >{{ t('Fill out the form and our team will respond within 24 hours.', 'បំពេញពាក្យ ហើយក្រុមការងាររបស់យើងនឹងឆ្លើយតបក្នុង ២៤ ម៉ោង។') }}</p>
        </div>
        <form class="contact-form" id="contact-form" novalidate>
            <div class="form-row">
                <div class="form-group">
                    <label for="c-name" >{{ t('Full Name *', 'ឈ្មោះពេញ *') }}</label>
                    <div class="input-wrap">
                        <span class="input-icon">👤</span>
                        <input type="text" id="c-name" required placeholder="Your full name" data-en-placeholder="Your full name" data-kh-placeholder="ឈ្មោះពេញរបស់អ្នក">
                    </div>
                    <span class="field-error" id="err-name"></span>
                </div>
                <div class="form-group">
                    <label for="c-email" >{{ t('Email Address *', 'អ៊ីមែល *') }}</label>
                    <div class="input-wrap">
                        <span class="input-icon">✉️</span>
                        <input type="email" id="c-email" required placeholder="you@example.com" data-en-placeholder="you@example.com" data-kh-placeholder="you@example.com">
                    </div>
                    <span class="field-error" id="err-email"></span>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group">
                    <label for="c-phone" >{{ t('Phone Number', 'លេខទូរស័ព្ទ') }}</label>
                    <div class="input-wrap">
                        <span class="input-icon">📱</span>
                        <input type="tel" id="c-phone" placeholder="+855 xx xxx xxx" data-en-placeholder="+855 xx xxx xxx" data-kh-placeholder="+855 xx xxx xxx">
                    </div>
                </div>
                <div class="form-group">
                    <label for="c-subject" >{{ t('Subject *', 'ប្រធានបទ *') }}</label>
                    <div class="input-wrap">
                        <span class="input-icon">📋</span>
                        <select id="c-subject" required>
                            <option value="" disabled selected >{{ t('Select a topic...', 'ជ្រើសប្រធានបទ...') }}</option>
                            <option value="reservation" >{{ t('Table Reservation', 'កក់តុ') }}</option>
                            <option value="order" >{{ t('Order Inquiry', 'ការកម៉ង់') }}</option>
                            <option value="feedback" >{{ t('Feedback', 'មតិ') }}</option>
                            <option value="catering" >{{ t('Catering / Events', 'ចម្អិនអាហារ / ព្រឹត្តិការណ៍') }}</option>
                            <option value="other" >{{ t('Other', 'ផ្សេងៗ') }}</option>
                        </select>
                    </div>
                    <span class="field-error" id="err-subject"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="c-message" >{{ t('Message *', 'សារ *') }}</label>
                <div class="input-wrap textarea-wrap">
                    <span class="input-icon">💬</span>
                    <textarea id="c-message" rows="5" required placeholder="Tell us how we can help..." data-en-placeholder="Tell us how we can help..." data-kh-placeholder="ប្រាប់យើងពីរបៀបដែលយើងអាចជួយ..."></textarea>
                </div>
                <span class="field-error" id="err-message"></span>
            </div>
            <button type="submit" class="submit-btn" id="submit-btn">
                <span class="btn-text" >{{ t('Send Message ✉️', 'ផ្ញើសារ ✉️') }}</span>
                <span class="btn-spinner" id="btn-spinner" style="display:none">⏳</span>
            </button>
        </form>
        <!-- Success Message -->
        <div class="form-success" id="form-success" style="display:none">
            <div class="success-icon">🎉</div>
            <h3 >{{ t('Message Sent!', 'សារបានផ្ញើ!') }}</h3>
            <p >{{ t('Thank you! We\'ll be in touch within 24 hours.', 'អរគុណ! យើងនឹងទំនាក់ទំនងក្នុង ២៤ ម៉ោង។') }}</p>
            <button onclick="document.getElementById('form-success').style.display='none';document.getElementById('contact-form').style.display='flex'" class="reset-btn" >{{ t('Send Another', 'ផ្ញើម្ដងទៀត') }}</button>
        </div>
    </div>

    <!-- RIGHT: Map + Info -->
    <div class="contact-info-wrap reveal" v-reveal>
        <!-- Map Placeholder -->
        <div class="map-container">
            <div class="map-placeholder">
                <div class="map-pin-anim">📍</div>
                <p >{{ t('Daun Penh, Phnom Penh', 'ដូនពេញ, ភ្នំពេញ') }}</p>
                <a href="https://maps.google.com/?q=Phnom+Penh+Cambodia" target="_blank" class="map-link" >{{ t('Open in Google Maps →', 'បើកក្នុង Google Maps →') }}</a>
            </div>
        </div>

        <!-- Social Links -->
        <div class="social-box">
            <h3 >{{ t('Follow Us', 'តាមដានយើង') }}</h3>
            <div class="social-links">
                <a href="#" class="social-btn facebook" aria-label="Facebook">
                    <span class="social-icon">📘</span>
                    <span>Facebook</span>
                </a>
                <a href="#" class="social-btn instagram" aria-label="Instagram">
                    <span class="social-icon">📸</span>
                    <span>Instagram</span>
                </a>
                <a href="#" class="social-btn tiktok" aria-label="TikTok">
                    <span class="social-icon">🎵</span>
                    <span>TikTok</span>
                </a>
                <a href="#" class="social-btn telegram" aria-label="Telegram">
                    <span class="social-icon">✈️</span>
                    <span>Telegram</span>
                </a>
            </div>
        </div>

        <!-- FAQ -->
        <div class="faq-box">
            <h3 >{{ t('Quick Answers', 'ចម្លើយរហ័ស') }}</h3>
            <div class="faq-list">
                <div class="faq-item">
                    <button class="faq-q" >{{ t('Do you take reservations?', 'តើអ្នកទទួលកក់តុទេ?') }}</button>
                    <div class="faq-a"><p >{{ t('Yes! Call us or use our contact form to reserve a table.', 'បាទ! ទូរស័ព្ទ ឬប្រើពាក្យខាងលើដើម្បីកក់តុ។') }}</p></div>
                </div>
                <div class="faq-item">
                    <button class="faq-q" >{{ t('What areas do you deliver to?', 'តើអ្នកដឹកជញ្ជូនទៅតំបន់ណា?') }}</button>
                    <div class="faq-a"><p >{{ t('We deliver across Phnom Penh within a 10km radius of our restaurant.', 'យើងដឹកជញ្ជូនក្នុងរង្វង់ ១០ គីឡូម៉ែត្រ ក្នុងភ្នំពេញ។') }}</p></div>
                </div>
                <div class="faq-item">
                    <button class="faq-q" >{{ t('Do you offer catering services?', 'តើអ្នកផ្ដល់សេវាចម្អិនទេ?') }}</button>
                    <div class="faq-a"><p >{{ t('Yes, we cater for private events, weddings, and corporate functions. Contact us for a quote.', 'បាទ យើងបម្រើព្រឹត្តិការណ៍ផ្ទាល់ខ្លួន អាពាហ៍ពិពាហ៍ និងអង្គការ។ ទំនាក់ទំនងសុំតម្លៃ។') }}</p></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FOOTER -->
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
