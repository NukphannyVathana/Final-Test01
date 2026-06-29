<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
import './assets/css/style.css'
import './assets/css/about.css'
import './assets/css/contact.css'
import './assets/css/order.css'
import './assets/css/auth.css'

const route = useRoute()
const authRoutes = ['login', 'signup']
const showShell = computed(() => !authRoutes.includes(route.name))
</script>

<template>
  <NavBar v-if="showShell" />
  <RouterView />
  <AppFooter v-if="showShell" />
</template>

<style>
/* Any global resets */
</style>
