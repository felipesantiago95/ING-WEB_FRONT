<template>
  <div class="max-w-md mx-auto mt-6">
    <ul class="bg-white shadow-md rounded p-6">
      <li v-for="establishment in establishments" :key="establishment.establecimiento_id" class="mb-4 p-4 border-b last:border-0">
        <div class="mb-2">
          <p><strong>Nombre:</strong> {{ establishment.nombre }}</p>
          <p><strong>Dirección:</strong> {{ establishment.direccion }}</p>
          <p><strong>Ciudad:</strong> {{ establishment.ciudad }}</p>
          <p><strong>País:</strong> {{ establishment.pais }}</p>
        </div>
        <div class="flex space-x-2">
          <button @click="$emit('edit', establishment)" class="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700">Editar</button>
          <button @click="$emit('delete', establishment.establecimiento_id)" class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'EstablishmentList',
  props: {
    establishments: Array,
  },
};
</script>
