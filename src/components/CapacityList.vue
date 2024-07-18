<template>
  <div class="max-w-md mx-auto mt-6">
    <ul class="bg-white shadow-md rounded p-6">
      <li v-for="capacity in capacities" :key="capacity.aforo_id" class="flex justify-between items-center mb-4 p-4 border-b last:border-0">
        <span class="font-semibold">Capacidad: {{ capacity.capacidad }}</span>
        <div class="space-x-2">
          <button @click="$emit('edit', capacity)" class="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700">Editar</button>
          <button @click="$emit('delete', capacity.aforo_id)" class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CapacityList',
  props: {
    capacities: Array,
  },
};
</script>
