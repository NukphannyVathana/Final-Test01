<template>
  <main>
    <div class="auth-wrapper">
      <div class="auth-left">
        <div class="auth-left-bg"></div>
        <div class="auth-left-particles" id="auth-particles"></div>

        <RouterLink to="/" class="auth-logo">
          <img src="/images/ros-ek2.png" alt="Ros Ek Logo" />
        </RouterLink>

        <div class="auth-left-content">
          <h2>{{ t('Welcome Back!', 'សូមស្វាគមន៍!') }}</h2>
          <p>{{ t('Sign in to access your orders, favourites, and exclusive member deals.', 'ចូលដើម្បីចាប់ផ្តើមប្រើប្រាស់គណនីរបស់អ្នក.') }}</p>

          <div class="auth-features">
            <div class="auth-feature"><span class="af-icon">🛒</span><span>{{ t('Track your orders in real-time', 'តាមដានការបញ្ជា នៅពេលវេលាកំពុងរត់') }}</span></div>
            <div class="auth-feature"><span class="af-icon">❤️</span><span>{{ t('Save your favourite dishes', 'រក្សាទំនុយដែលអ្នកចង់') }}</span></div>
            <div class="auth-feature"><span class="af-icon">🎁</span><span>{{ t('Earn reward points on every order', 'ទទួលបានពិន្ទុរាល់ការបញ្ជាទិញ') }}</span></div>
          </div>

          <div class="auth-food-preview">
            <img src="/images/img-amok-float.png" alt="Fish Amok" class="food-float food-float--1" />
            <img src="/images/ChefYeak.jpg" alt="Chef" class="food-float food-float--2" />
            <img src="/images/img-dessert-float.png" alt="Dessert" class="food-float food-float--3" />
          </div>
        </div>

        <div class="auth-left-footer">
          <p>{{ t('© 2024 Ros Ek Restaurant. All rights reserved.', '© 2024 Ros Ek Restaurant. All rights reserved.') }}</p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-topbar">

          <span class="auth-topbar-text">{{ t('New here?', 'ថ្មីនៅទីនេះ?') }}</span>
          <RouterLink to="/signup" class="auth-switch-btn">{{ t('Create Account', 'បង្កើតគណនី') }}</RouterLink>
        </div>

        <div class="auth-form-container">
          <div class="auth-form-header">
            <h1>{{ t('Sign In', 'ចូល') }}</h1>
            <p>{{ t('Enter your credentials to access your account.', 'បញ្ចូលកិច្ចព្រមានរបស់អ្នកដើម្បីចូលប្រើគណនីរបស់អ្នក.') }}</p>
          </div>

          <div class="social-login">
            <button type="button" class="social-login-btn" id="btn-google"><span>🌐</span><span>{{ t('Continue with Google', 'ភ្ជាប់ជាមួយ Google') }}</span></button>
            <button type="button" class="social-login-btn" id="btn-facebook"><span>📘</span><span>{{ t('Continue with Facebook', 'ភ្ជាប់ជាមួយ Facebook') }}</span></button>
          </div>

          <div class="divider"><span>{{ t('or sign in with email', 'ឬចូលដោយប្រើអ៊ីម៉ែល') }}</span></div>

          <form class="auth-form" id="login-form" novalidate>
            <div class="form-group">
              <label for="login-email">{{ t('Email Address', 'អាសយដ្ឋានអ៊ីម៉ែល') }}</label>
              <div class="input-wrap"><span class="input-icon">✉️</span><input type="email" id="login-email" required autocomplete="email" placeholder="you@example.com" data-en-placeholder="you@example.com" data-kh-placeholder="you@example.com" /></div>
              <span class="field-error" id="err-login-email"></span>
            </div>

            <div class="form-group">
              <div class="label-row">
                <label for="login-pass">{{ t('Password', 'ពាក្យសម្ងាត់') }}</label>
                <a href="#" class="forgot-link">{{ t('Forgot password?', 'ភ្លេចពាក្យសម្ងាត់?') }}</a>
              </div>
              <div class="input-wrap"><span class="input-icon">🔒</span><input type="password" id="login-pass" required autocomplete="current-password" placeholder="••••••••" data-en-placeholder="••••••••" data-kh-placeholder="••••••••" /><button type="button" class="toggle-pass" id="toggle-pass-login" aria-label="Show password">👁️</button></div>
              <span class="field-error" id="err-login-pass"></span>
            </div>

            <div class="form-check"><label class="checkbox-label"><input type="checkbox" id="remember-me" /><span class="checkmark"></span><span>{{ t('Remember me for 30 days', 'ចង់ចាប់ផ្តើមប្រើប្រាស់ 30 ថ្ងៃ') }}</span></label></div>

            <button type="submit" class="auth-submit-btn"><span>{{ t('Sign In →', 'ចូល →') }}</span></button>
          </form>

          <p class="auth-bottom-link"><span>{{ t('Don\'t have an account?', 'មានគណនីហើយ?') }}</span><RouterLink to="/signup">{{ t('Sign Up Free', 'ចុះឈ្មោះឥតគិតថ្លៃ') }}</RouterLink></p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useLanguage } from '../composables/useLanguage'

const { currentLang, t } = useLanguage()
const router = useRouter()

const updatePlaceholders = (lang) => {
  document.querySelectorAll('[data-en-placeholder]').forEach((el) => {
    el.placeholder = el.getAttribute('data-' + lang + '-placeholder') || el.placeholder
  })
}

watch(currentLang, (lang) => {
  updatePlaceholders(lang)
})

onMounted(() => {
  updatePlaceholders(currentLang.value)

  const toggleLogin = document.getElementById('toggle-pass-login')
  toggleLogin?.addEventListener('click', function () {
    const inp = document.getElementById('login-pass')
    if (!inp) return
    inp.type = inp.type === 'password' ? 'text' : 'password'
    this.textContent = inp.type === 'password' ? '👁️' : '🙈'
  })

  const particles = document.getElementById('auth-particles')
  if (particles) {
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('span')
      p.className = 'ap'
      p.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${3 + Math.random() * 6}px;height:${3 + Math.random() * 6}px;animation-delay:${Math.random() * 6}s;animation-duration:${6 + Math.random() * 8}s;opacity:${0.1 + Math.random() * 0.3}`
      particles.appendChild(p)
    }
  }

  const form = document.getElementById('login-form')
  form?.addEventListener('submit', function (e) {
    e.preventDefault()
    const email = document.getElementById('login-email').value.trim()
    const pass = document.getElementById('login-pass').value
    const errEmail = document.getElementById('err-login-email')
    const errPass = document.getElementById('err-login-pass')
    if (errEmail) errEmail.textContent = !email ? 'Please enter your email' : (!email.includes('@') ? 'Invalid email' : '')
    if (errPass) errPass.textContent = !pass ? 'Please enter your password' : (pass.length < 6 ? 'Min 6 characters' : '')
    if (!email || !email.includes('@') || !pass || pass.length < 6) return
    const btn = this.querySelector('.auth-submit-btn')
    if (btn) {
      btn.textContent = '⏳ Signing in...'
      btn.disabled = true
    }
    setTimeout(() => {
      router.push('/')
    }, 1500)
  })

  const btnGoogle = document.getElementById('btn-google')
  btnGoogle?.addEventListener('click', () => alert('Google Login coming soon!'))
  const btnFacebook = document.getElementById('btn-facebook')
  btnFacebook?.addEventListener('click', () => alert('Facebook Login coming soon!'))
})
</script>

<style src="../assets/css/auth.css"></style>
