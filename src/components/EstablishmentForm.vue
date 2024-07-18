<template>
  <div class="max-w-md mx-auto mt-6 p-6 bg-white rounded shadow-lg">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700">Nombre:</label>
        <input type="text" v-model="form.nombre" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" required />
      </div>
      <div class="mb-4">
        <label for="direccion" class="block text-gray-700">Dirección:</label>
        <input type="text" v-model="form.direccion" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" required />
      </div>
      <div class="mb-4">
        <label for="ciudad" class="block text-gray-700">Ciudad:</label>
        <input type="text" v-model="form.ciudad" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" required />
      </div>
      <div class="mb-4">
        <label for="pais" class="block text-gray-700">País:</label>
        <input type="text" v-model="form.pais" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" required />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        {{ isEdit ? 'Actualizar' : 'Crear' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EstablishmentForm',
  props: {
    establishment: Object,
    isEdit: Boolean,
  },
  data() {
    return {
      form: { ...this.establishment },
    };
  },
  watch: {
    establishment: {
      handler(newVal) {
        this.form = { ...newVal };
      },
      deep: true,
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.form);
    },
  },
};
</script>
