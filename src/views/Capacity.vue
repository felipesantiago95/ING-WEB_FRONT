<template>
  <div>
    <AppNavbar />
    <div class="py-8 bg-gray-100 min-h-screen">
      <div class="container mx-auto flex">
        <div class="w-1/2 pr-4">
          <CapacityForm :capacity="selectedCapacity" :isEdit="isEdit" @submit="handleFormSubmit" />
        </div>
        <div class="w-1/2 pl-4 overflow-y-scroll h-screen">
          <CapacityList :capacities="capacities" @edit="handleEdit" @delete="handleDelete" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppNavbar from '@/components/AppNavbar.vue';
import CapacityForm from '@/components/CapacityForm.vue';
import CapacityList from '@/components/CapacityList.vue';

export default {
  name: 'CapacityPage',
  components: {
    AppNavbar,
    CapacityForm,
    CapacityList,
  },
  data() {
    return {
      capacities: [],
      selectedCapacity: { capacidad: '' },
      isEdit: false,
    };
  },
  created() {
    this.fetchCapacities();
  },
  methods: {
    async fetchCapacities() {
      try {
        const response = await axios.get('http://localhost:3000/api/aforo');
        this.capacities = response.data;
      } catch (error) {
        console.error('Error al obtener aforos:', error.message);
      }
    },
    async handleFormSubmit(capacity) {
      if (this.isEdit) {
        try {
          await axios.put(`http://localhost:3000/api/aforo/${capacity.aforo_id}`, capacity);
          this.fetchCapacities();
        } catch (error) {
          console.error('Error al actualizar aforo:', error.message);
        }
      } else {
        try {
          await axios.post('http://localhost:3000/api/aforo', capacity);
          this.fetchCapacities();
        } catch (error) {
          console.error('Error al crear aforo:', error.message);
        }
      }
      this.selectedCapacity = { capacidad: '' };
      this.isEdit = false;
    },
    handleEdit(capacity) {
      this.selectedCapacity = { ...capacity };
      this.isEdit = true;
    },
    async handleDelete(aforo_id) {
      try {
        await axios.delete(`http://localhost:3000/api/aforo/${aforo_id}`);
        this.fetchCapacities();
      } catch (error) {
        console.error('Error al eliminar aforo:', error.message);
      }
    },
  },
};
</script>
