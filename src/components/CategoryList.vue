<template>
  <div class="max-w-2xl mx-auto mt-8">
    <ul class="space-y-4">
      <li v-for="category in categories" :key="category.categoria_id" class="bg-white p-4 shadow rounded-lg flex justify-between items-center">
        <span class="text-gray-700">{{ category.nombre }}</span>
        <div>
          <button @click="$emit('edit', category)" class="bg-yellow-400 text-white py-1 px-2 rounded mr-2 hover:bg-yellow-500">Editar</button>
          <button @click="$emit('delete', category.categoria_id)" class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CategoryList',
  props: {
    categories: Array,
  },
};
</script>
