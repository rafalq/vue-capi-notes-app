<template>
  <div>
    <TheNavbar />
 
    <RouterView />
  </div>
</template>

<script setup>
/*
imports
*/

import TheNavbar from '@/components/layout/TheNavbar.vue'
</script>

<style>
@import 'bulma\css\bulma.min.css';
</style>