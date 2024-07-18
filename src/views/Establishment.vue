<template>
  <div>
    <AppNavbar />
    <div class="py-8 bg-gray-100 min-h-screen">
      <div class="container mx-auto flex">
        <div class="w-1/2 pr-4">
          <EstablishmentForm :establishment="selectedEstablishment" :isEdit="isEdit" @submit="handleFormSubmit" />
        </div>
        <div class="w-1/2 pl-4 overflow-y-scroll h-screen">
          <EstablishmentList :establishments="establishments" @edit="handleEdit" @delete="handleDelete" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppNavbar from '@/components/AppNavbar.vue';
import EstablishmentForm from '@/components/EstablishmentForm.vue';
import EstablishmentList from '@/components/EstablishmentList.vue';

export default {
  name: 'EstablishmentPage',
  components: {
    AppNavbar,
    EstablishmentForm,
    EstablishmentList,
  },
  data() {
    return {
      establishments: [],
      selectedEstablishment: { nombre: '', direccion: '', ciudad: '', pais: '' },
      isEdit: false,
    };
  },
  created() {
    this.fetchEstablishments();
  },
  methods: {
    async fetchEstablishments() {
      try {
        const response = await axios.get('http://localhost:3000/api/establecimiento');
        this.establishments = response.data;
      } catch (error) {
        console.error('Error al obtener establecimientos:', error.message);
      }
    },
    async handleFormSubmit(establishment) {
      if (this.isEdit) {
        try {
          await axios.put(`http://localhost:3000/api/establecimiento/${establishment.establecimiento_id}`, establishment);
          this.fetchEstablishments();
        } catch (error) {
          console.error('Error al actualizar establecimiento:', error.message);
        }
      } else {
        try {
          await axios.post('http://localhost:3000/api/establecimiento', establishment);
          this.fetchEstablishments();
        } catch (error) {
          console.error('Error al crear establecimiento:', error.message);
        }
      }
      this.selectedEstablishment = { nombre: '', direccion: '', ciudad: '', pais: '' };
      this.isEdit = false;
    },
    handleEdit(establishment) {
      this.selectedEstablishment = { ...establishment };
      this.isEdit = true;
    },
    async handleDelete(establecimiento_id) {
      try {
        await axios.delete(`http://localhost:3000/api/establecimiento/${establecimiento_id}`);
        this.fetchEstablishments();
      } catch (error) {
        console.error('Error al eliminar establecimiento:', error.message);
      }
    },
  },
};
</script>
