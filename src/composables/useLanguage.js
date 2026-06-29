import { ref, watch } from 'vue'

const currentLang = ref(localStorage.getItem('lang') || 'en')

watch(currentLang, (newLang) => {
  localStorage.setItem('lang', newLang)
  document.documentElement.lang = newLang === 'en' ? 'en' : 'km'
})

export function useLanguage() {
  const toggleLanguage = () => {
    currentLang.value = currentLang.value === 'en' ? 'kh' : 'en'
  }

  // A helper function to return the correct text based on the current language
  const t = (enText, khText) => {
    return currentLang.value === 'en' ? enText : khText
  }

  return {
    currentLang,
    toggleLanguage,
    t
  }
}
