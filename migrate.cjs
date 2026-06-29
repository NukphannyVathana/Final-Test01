const fs = require('fs')
const path = require('path')

const views = ['about', 'contact', 'order', 'login', 'signup']

views.forEach(view => {
    let content = fs.readFileSync(path.join('_backup_legacy', `${view}.html`), 'utf-8')
    
    // Simple extraction between <header> and <footer>
    let body = ''
    try {
        const start = content.indexOf('</header>')
        const end = content.indexOf('<footer')
        if (start !== -1 && end !== -1) {
            body = content.substring(start + '</header>'.length, end)
        } else {
            body = content
        }
    } catch(e) {
        body = content
    }

    // Remove the mobile menu overlay if present
    body = body.replace(/<div class="mobile-menu".*?<\/div>/s, '')

    // Replace data-en/data-kh with t('en', 'kh')
    // format: data-en="EnText" data-kh="KhText">EnText</...
    // regex to match: data-en="(.*?)"\s*data-kh="(.*?)"([^>]*)>(.*?)<\/(.*?)>
    // Actually, it's safer to just replace the innerHTML of tags that have data-en and data-kh.
    let updatedBody = body.replace(/data-en="(.*?)"\s*data-kh="(.*?)"([^>]*)>(.*?)<\/(.*?)>/g, (match, en, kh, rest, inner, tag) => {
        // sometimes inner has nested tags or spans, but in this project it's usually text
        return `>${!inner.includes('<') ? `{{ t('${en.replace(/'/g, "\\'")}', '${kh.replace(/'/g, "\\'")}') }}` : inner}</${tag}>`
    })

    // Also remove the old data-en and data-kh attributes since we use Vue template now
    updatedBody = updatedBody.replace(/data-en=".*?"/g, '')
    updatedBody = updatedBody.replace(/data-kh=".*?"/g, '')

    // For images, change src="images/..." to src="/images/..."
    updatedBody = updatedBody.replace(/src="images\//g, 'src="/images/')
    updatedBody = updatedBody.replace(/src="(.*?)\.jpg"/g, (m, c) => m.startsWith('src="/images') ? m : `src="/images/${c}.jpg"`)
    updatedBody = updatedBody.replace(/src="(.*?)\.png"/g, (m, c) => m.startsWith('src="/images') ? m : `src="/images/${c}.png"`)

    const vueTemplate = `<template>
  <main>
    ${updatedBody.trim()}
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
`
    // Add v-reveal to elements with class "reveal"
    const finalTemplate = vueTemplate.replace(/class="(.*?)reveal(.*?)"/g, 'class="$1reveal$2" v-reveal')

    fs.writeFileSync(path.join('src', 'views', `${view.charAt(0).toUpperCase() + view.slice(1)}View.vue`), finalTemplate)
    console.log(`Migrated ${view}.html`)
})
