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
          <h2>{{ t('Join the Ros Ek Family!', 'ចូលរួមក្នុងគ្រួសាររស់អែក!') }}</h2>
          <p>{{ t('Create a free account and unlock exclusive benefits for every order you place.', 'បង្កើតគណនីឥតគិតថ្លៃ និងទទួលបានអត្ថប្រយោជន៍ពិសេស។') }}</p>

          <div class="auth-features">
            <div class="auth-feature"><span class="af-icon">🚀</span><span>{{ t('Faster checkout every time', 'ការទូទាត់រហ័សជាងមុន') }}</span></div>
            <div class="auth-feature"><span class="af-icon">📦</span><span>{{ t('Track all your orders live', 'តាមដានការកម៉ង់ផ្ទាល់') }}</span></div>
            <div class="auth-feature"><span class="af-icon">🎉</span><span>{{ t('Birthday rewards & special offers', 'រង្វាន់ថ្ងៃខួបកំណើត និងការបញ្ចុះតម្លៃពិសេស') }}</span></div>
            <div class="auth-feature"><span class="af-icon">⭐</span><span>{{ t('VIP early access to new menus', 'ចូលប្រើមុខម្ហូបថ្មីជាមុន VIP') }}</span></div>
          </div>

          <div class="auth-food-preview">
            <img src="/images/img-amok-float.png" alt="Fish Amok" class="food-float food-float--1" />
            <img src="/images/ChefYeak.jpg" alt="Chef" class="food-float food-float--2" />
            <img src="/images/img-dessert-float.png" alt="Dessert" class="food-float food-float--3" />
          </div>
        </div>

        <div class="auth-left-footer">
          <p>{{ t('© 2024 Ros Ek Restaurant. All rights reserved.', '© ២០២៤ ភោជនីយដ្ឋានរស់អែក។ រក្សាសិទ្ធគ្រប់យ៉ាង។') }}</p>
        </div>
      </div>

      <div class="auth-right">
        <div class="auth-topbar">
          <span class="auth-topbar-text">{{ t('Already a member?', 'មានគណនីហើយ?') }}</span>
          <RouterLink to="/login" class="auth-switch-btn">{{ t('Sign In', 'ចូល') }}</RouterLink>
        </div>

        <div class="auth-form-container">
          <div class="auth-form-header">
            <h1>{{ t('Create Account', 'បង្កើតគណនី') }}</h1>
            <p>{{ t("Join thousands of happy guests — it's free and takes under a minute.", 'ចូលរួមជាមួយភ្ញៀវវីរសាន — ឥតគិតថ្លៃ ហើយចំណាយពេលតិចជាង ១ នាទី។') }}</p>
          </div>

          <div class="social-login">
            <button type="button" class="social-login-btn" id="btn-google"><span>🌐</span><span>{{ t('Sign up with Google', 'ចុះឈ្មោះដោយ Google') }}</span></button>
            <button type="button" class="social-login-btn" id="btn-facebook"><span>📘</span><span>{{ t('Sign up with Facebook', 'ចុះឈ្មោះដោយ Facebook') }}</span></button>
          </div>

          <div class="divider"><span>{{ t('or create account with email', 'ឬបង្កើតគណនីដោយអ៊ីមែល') }}</span></div>

          <form class="auth-form" id="signup-form" novalidate>
            <div class="form-row-2">
              <div class="form-group">
                <label for="su-fname">{{ t('First Name *', 'នាមខ្លួន *') }}</label>
                <div class="input-wrap"><span class="input-icon">👤</span><input type="text" id="su-fname" required placeholder="First name" data-en-placeholder="First name" data-kh-placeholder="នាមខ្លួន" /></div>
                <span class="field-error" id="err-fname"></span>
              </div>
              <div class="form-group">
                <label for="su-lname">{{ t('Last Name *', 'នាមត្រកូល *') }}</label>
                <div class="input-wrap"><span class="input-icon">👤</span><input type="text" id="su-lname" required placeholder="Last name" data-en-placeholder="Last name" data-kh-placeholder="នាមត្រកូល" /></div>
                <span class="field-error" id="err-lname"></span>
              </div>
            </div>

            <div class="form-group">
              <label for="su-email">{{ t('Email Address *', 'អ៊ីមែល *') }}</label>
              <div class="input-wrap"><span class="input-icon">✉️</span><input type="email" id="su-email" required autocomplete="email" placeholder="you@example.com" data-en-placeholder="you@example.com" data-kh-placeholder="you@example.com" /></div>
              <span class="field-error" id="err-su-email"></span>
            </div>

            <div class="form-group">
              <label for="su-phone">{{ t('Phone Number', 'លេខទូរស័ព្ទ') }}</label>
              <div class="input-wrap"><span class="input-icon">📱</span><input type="tel" id="su-phone" placeholder="+855 xx xxx xxx" data-en-placeholder="+855 xx xxx xxx" data-kh-placeholder="+855 xx xxx xxx" /></div>
            </div>

            <div class="form-group">
              <label for="su-pass">{{ t('Password *', 'ពាក្យសម្ងាត់ *') }}</label>
              <div class="input-wrap"><span class="input-icon">🔒</span><input type="password" id="su-pass" required autocomplete="new-password" placeholder="Min. 8 characters" data-en-placeholder="Min. 8 characters" data-kh-placeholder="យ៉ាងហោចណាស់ ៨ តួ" /><button type="button" class="toggle-pass" id="toggle-pass-su" aria-label="Show password">👁️</button></div>
              <div class="password-strength" id="pass-strength"><div class="strength-bar"><div class="strength-fill" id="strength-fill"></div></div></div>
              <span class="field-error" id="err-su-pass"></span>
            </div>

            <div class="form-group">
              <label for="su-confirm">{{ t('Confirm Password *', 'បញ្ជាក់ពាក្យសម្ងាត់ *') }}</label>
              <div class="input-wrap"><span class="input-icon">🔒</span><input type="password" id="su-confirm" required autocomplete="new-password" placeholder="Re-enter password" data-en-placeholder="Re-enter password" data-kh-placeholder="បញ្ចូលពាក្យសម្ងាត់ម្ដងទៀត" /><button type="button" class="toggle-pass" id="toggle-pass-cf" aria-label="Show password">👁️</button></div>
              <span class="field-error" id="err-su-confirm"></span>
            </div>

            <div class="form-check">
              <label class="checkbox-label"><input type="checkbox" id="agree-terms" required /><span class="checkmark"></span><span>{{ t('I agree to the Terms of Service and Privacy Policy', 'ខ្ញុំយល់ព្រមនឹងល័ក្ខខ័ណ្ឌ និងគោលការណ៍ភាពឯកជន') }}</span></label>
              <span class="field-error" id="err-terms"></span>
            </div>

            <button type="submit" class="auth-submit-btn"><span>{{ t('Create My Account 🚀', 'បង្កើតគណនីខ្ញុំ 🚀') }}</span></button>
          </form>

          <p class="auth-bottom-link"><span>{{ t('Already have an account?', 'មានគណនីហើយ?') }}</span><RouterLink to="/login">{{ t('Sign In', 'ចូល') }}</RouterLink></p>
        </div>
      </div>
    </div>

    <div class="auth-success-modal" id="auth-success-modal">
      <div class="auth-success-box">
        <div class="success-anim">🎉</div>
        <h2>{{ t('Account Created!', 'គណនីបានបង្កើត!') }}</h2>
        <p>{{ t('Welcome to the Ros Ek family! Redirecting you to the homepage...', 'សូមស្វាគមន៍មកកាន់គ្រួសាររស់អែក! កំពុងបញ្ជូន...') }}</p>
        <div class="success-progress"><div class="success-progress-fill" id="success-progress-fill"></div></div>
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

  const passwordTogglePairs = [['toggle-pass-su', 'su-pass'], ['toggle-pass-cf', 'su-confirm']]
  passwordTogglePairs.forEach(([btnId, inputId]) => {
    const btn = document.getElementById(btnId)
    btn?.addEventListener('click', function () {
      const inp = document.getElementById(inputId)
      if (!inp) return
      inp.type = inp.type === 'password' ? 'text' : 'password'
      this.textContent = inp.type === 'password' ? '👁️' : '🙈'
    })
  })

  const suPass = document.getElementById('su-pass')
  suPass?.addEventListener('input', function () {
    const value = this.value
    const fill = document.getElementById('strength-fill')
    const label = document.getElementById('strength-label')
    let strength = 0
    if (value.length >= 8) strength++
    if (/[A-Z]/.test(value)) strength++
    if (/[0-9]/.test(value)) strength++
    if (/[^A-Za-z0-9]/.test(value)) strength++
    const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e']
    const labelsEn = ['Weak', 'Fair', 'Good', 'Strong']
    const labelsKh = ['ខ្សោយ', 'មធ្យម', 'ល្អ', 'រឹងមាំ']
    if (fill) {
      fill.style.width = `${strength * 25}%`
      fill.style.background = colors[strength - 1] || '#e5e7eb'
    }
    if (label) {
      label.textContent = strength > 0 ? (currentLang.value === 'kh' ? labelsKh[strength - 1] : labelsEn[strength - 1]) : ''
      label.style.color = colors[strength - 1] || '#9ca3af'
    }
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

  const form = document.getElementById('signup-form')
  form?.addEventListener('submit', function (e) {
    e.preventDefault()
    const fname = document.getElementById('su-fname').value.trim()
    const lname = document.getElementById('su-lname').value.trim()
    const email = document.getElementById('su-email').value.trim()
    const pass = document.getElementById('su-pass').value
    const confirm = document.getElementById('su-confirm').value
    const terms = document.getElementById('agree-terms').checked
    let ok = true
    const E = (id, msg) => {
      const el = document.getElementById(id)
      if (el) el.textContent = msg
      if (msg) ok = false
    }
    E('err-fname', !fname ? (currentLang.value === 'kh' ? 'សូមបំពេញនាមខ្លួន' : 'Enter first name') : '')
    E('err-lname', !lname ? (currentLang.value === 'kh' ? 'សូមបំពេញនាមត្រកូល' : 'Enter last name') : '')
    E('err-su-email', !email ? (currentLang.value === 'kh' ? 'សូមបំពេញអ៊ីមែល' : 'Enter email') : (!email.includes('@') ? (currentLang.value === 'kh' ? 'អ៊ីមែលមិនត្រឹមត្រូវ' : 'Invalid email') : ''))
    E('err-su-pass', !pass ? (currentLang.value === 'kh' ? 'សូមបំពេញពាក្យសម្ងាត់' : 'Enter password') : (pass.length < 8 ? (currentLang.value === 'kh' ? 'យ៉ាងហោចណាស់ ៨ តួ' : 'Min 8 characters') : ''))
    E('err-su-confirm', pass !== confirm ? (currentLang.value === 'kh' ? 'ពាក្យសម្ងាត់មិនត្រូវគ្នា' : 'Passwords do not match') : '')
    E('err-terms', !terms ? (currentLang.value === 'kh' ? 'សូមយល់ព្រមនឹងល័ក្ខខ័ណ្ឌ' : 'Please agree to the terms') : '')
    if (!ok) return
    const btn = this.querySelector('.auth-submit-btn')
    if (btn) {
      btn.textContent = currentLang.value === 'kh' ? '⏳ កំពុងបង្កើត...' : '⏳ Creating...'
      btn.disabled = true
    }
    const modal = document.getElementById('auth-success-modal')
    const fill = document.getElementById('success-progress-fill')
    if (modal) modal.classList.add('show')
    let w = 0
    const timer = setInterval(() => {
      w += 2
      if (fill) fill.style.width = `${w}%`
      if (w >= 100) {
        clearInterval(timer)
        router.push('/')
      }
    }, 30)
  })

  const btnGoogle = document.getElementById('btn-google')
  btnGoogle?.addEventListener('click', () => alert(currentLang.value === 'kh' ? 'Google Login នឹងត្រូវបានបន្ថែម!' : 'Google Sign-up coming soon!'))
  const btnFacebook = document.getElementById('btn-facebook')
  btnFacebook?.addEventListener('click', () => alert(currentLang.value === 'kh' ? 'Facebook Login នឹងត្រូវបានបន្ថែម!' : 'Facebook Sign-up coming soon!'))
})
</script>

<style src="../assets/css/auth.css"></style>
