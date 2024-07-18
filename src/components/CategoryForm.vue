<template>
  <div>
    <form @submit.prevent="handleSubmit" class="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
      <div class="mb-4">
        <label for="nombre" class="block text-gray-700 font-bold mb-2">Nombre:</label>
        <input type="text" v-model="form.nombre" required class="w-full p-2 border border-gray-300 rounded" />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
        {{ isEdit ? 'Actualizar' : 'Crear' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CategoryForm',
  props: {
    category: Object,
    isEdit: Boolean,
  },
  data() {
    return {
      form: { ...this.category },
    };
  },
  watch: {
    category: {
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
