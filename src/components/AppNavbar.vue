<template>
  <div class="bg-gray-800 p-4 shadow-md">
    <nav class="container mx-auto flex justify-between items-center">
      <div class="text-white text-2xl font-bold">Mi Proyecto</div>
      <ul class="flex space-x-4">
        <li>
          <router-link to="/" class="text-white hover:text-gray-400">Home</router-link>
        </li>
        <li>
          <router-link to="/category" class="text-white hover:text-gray-400">Categoría</router-link>
        </li>
        <li>
          <router-link to="/establishment" class="text-white hover:text-gray-400">Establecimiento</router-link>
        </li>
        <li>
          <router-link to="/capacity" class="text-white hover:text-gray-400">Aforo</router-link>
        </li>
        <li>
          <router-link to="/venta" class="text-white hover:text-gray-400">Venta</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>
