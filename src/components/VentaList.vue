<template>
  <div class="max-w-2xl mx-auto mt-8">
    <ul class="space-y-4">
      <li v-for="venta in ventas" :key="venta.venta_id" class="bg-white p-4 shadow rounded-lg flex flex-col space-y-2">
        <span class="text-gray-700">
          Venta #{{ venta.venta_id }} - {{ venta.fecha_venta }} - ${{ venta.monto }}
        </span>
        <span class="text-gray-700">
          Establecimiento: {{ venta.establecimientoNombre }}
        </span>
        <span class="text-gray-700">
          Aforo: {{ venta.aforoNombre }}
        </span>
        <span class="text-gray-700">
          Categoría: {{ venta.categoriaNombre }}
        </span>
        <div class="flex justify-end space-x-2">
          <button @click="$emit('edit', venta)" class="bg-yellow-400 text-white py-1 px-2 rounded hover:bg-yellow-500">Editar</button>
          <button @click="$emit('delete', venta.venta_id)" class="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'VentaList',
  props: {
    ventas: Array,
  },
};
</script>
