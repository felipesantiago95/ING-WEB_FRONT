<template>
  <div class="max-w-md mx-auto mt-6 p-6 bg-white rounded shadow-lg">
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="capacidad" class="block text-gray-700">Capacidad:</label>
        <input type="number" v-model="form.capacidad" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300" required />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
        {{ isEdit ? 'Actualizar' : 'Crear' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CapacityForm',
  props: {
    capacity: Object,
    isEdit: Boolean,
  },
  data() {
    return {
      form: { ...this.capacity },
    };
  },
  watch: {
    capacity: {
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
