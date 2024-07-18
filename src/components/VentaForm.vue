<template>
  <div>
    <form @submit.prevent="handleSubmit" class="max-w-md mx-auto bg-white p-8 shadow-lg rounded-lg">
      <div class="mb-4">
        <label for="establecimiento" class="block text-gray-700 font-bold mb-2">Establecimiento:</label>
        <select v-model="form.establecimiento_id" class="w-full p-2 border border-gray-300 rounded" required>
          <option v-for="est in establecimientos" :key="est.establecimiento_id" :value="est.establecimiento_id">
            {{ est.nombre }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="aforo" class="block text-gray-700 font-bold mb-2">Aforo:</label>
        <select v-model="form.aforo_id" class="w-full p-2 border border-gray-300 rounded" required>
          <option v-for="af in aforos" :key="af.aforo_id" :value="af.aforo_id">
            {{ af.capacidad }}
          </option>
        </select>
        <label for="aforoPercentage" class="block text-gray-700 font-bold mb-2 mt-2">Porcentaje Aforo:</label>
        <select v-model="aforoPercentage" class="w-full p-2 border border-gray-300 rounded" @change="calculateMonto">
          <option v-for="percentage in percentages" :key="percentage" :value="percentage">
            {{ percentage }}%
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="categoria" class="block text-gray-700 font-bold mb-2">Categoría:</label>
        <select v-model="form.categoria_id" class="w-full p-2 border border-gray-300 rounded" required>
          <option v-for="cat in categorias" :key="cat.categoria_id" :value="cat.categoria_id">
            {{ cat.nombre }}
          </option>
        </select>
        <label for="categoriaPercentage" class="block text-gray-700 font-bold mb-2 mt-2">Porcentaje Categoría:</label>
        <select v-model="categoriaPercentage" class="w-full p-2 border border-gray-300 rounded" @change="calculateMonto">
          <option v-for="percentage in percentages" :key="percentage" :value="percentage">
            {{ percentage }}%
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="fecha_venta" class="block text-gray-700 font-bold mb-2">Fecha de Venta:</label>
        <input type="date" v-model="form.fecha_venta" class="w-full p-2 border border-gray-300 rounded" required />
      </div>
      <div class="mb-4">
        <label for="monto" class="block text-gray-700 font-bold mb-2">Monto:</label>
        <input type="number" v-model="form.monto" class="w-full p-2 border border-gray-300 rounded bg-gray-100" readonly />
      </div>
      <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
        {{ isEdit ? 'Actualizar' : 'Crear' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'VentaForm',
  props: {
    venta: Object,
    establecimientos: Array,
    aforos: Array,
    categorias: Array,
    isEdit: Boolean,
  },
  data() {
    return {
      form: { ...this.venta },
      aforoPercentage: 0,
      categoriaPercentage: 0,
      percentages: Array.from({ length: 15 }, (_, i) => i + 1),
    };
  },
  watch: {
    venta: {
      handler(newVal) {
        this.form = { ...newVal };
        this.aforoPercentage = 0;
        this.categoriaPercentage = 0;
        this.calculateMonto();
      },
      deep: true,
    },
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', this.form);
    },
    calculateMonto() {
      const salarioBasico = 460;
      const aforoMonto = (salarioBasico * this.aforoPercentage) / 100;
      const categoriaMonto = (salarioBasico * this.categoriaPercentage) / 100;
      this.form.monto = salarioBasico + aforoMonto + categoriaMonto;
    },
  },
};
</script>

<style scoped>
/* Estiliza el campo de monto como deshabilitado */
input[readonly] {
  background-color: #e9ecef;
  cursor: not-allowed;
}
</style>
