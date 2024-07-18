<template>
  <div>
    <AppNavbar />
    <h1>Bienvenido a la Página de Inicio</h1>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';

export default {
  name: 'HomePage',
  components: {
    AppNavbar,
  },
};
</script>
