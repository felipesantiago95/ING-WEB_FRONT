<template>
  <div>
    <AppNavbar />
    <div class="py-8 bg-gray-100 min-h-screen">
      <div class="container mx-auto flex">
        <div class="w-1/2 pr-4">
          <VentaForm
            :venta="selectedVenta"
            :establecimientos="establecimientos"
            :aforos="aforos"
            :categorias="categorias"
            :isEdit="isEdit"
            @submit="handleFormSubmit"
          />
        </div>
        <div class="w-1/2 pl-4 overflow-y-scroll h-screen">
          <VentaList :ventas="ventasConNombres" @edit="handleEdit" @delete="handleDelete" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppNavbar from '@/components/AppNavbar.vue';
import VentaForm from '@/components/VentaForm.vue';
import VentaList from '@/components/VentaList.vue';

export default {
  name: 'VentaPage',
  components: {
    AppNavbar,
    VentaForm,
    VentaList,
  },
  data() {
    return {
      ventas: [],
      establecimientos: [],
      aforos: [],
      categorias: [],
      selectedVenta: { establecimiento_id: '', aforo_id: '', categoria_id: '', fecha_venta: '', monto: '' },
      isEdit: false,
    };
  },
  computed: {
    ventasConNombres() {
      return this.ventas.map(venta => {
        const establecimiento = this.establecimientos.find(est => est.establecimiento_id === venta.establecimiento_id);
        const aforo = this.aforos.find(af => af.aforo_id === venta.aforo_id);
        const categoria = this.categorias.find(cat => cat.categoria_id === venta.categoria_id);

        return {
          ...venta,
          establecimientoNombre: establecimiento ? establecimiento.nombre : 'N/A',
          aforoNombre: aforo ? aforo.capacidad : 'N/A',
          categoriaNombre: categoria ? categoria.nombre : 'N/A',
        };
      });
    },
  },
  created() {
    this.fetchData();
    this.fetchVentas();
  },
  methods: {
    async fetchData() {
      try {
        const [establecimientos, aforos, categorias] = await Promise.all([
          axios.get('http://localhost:3000/api/establecimiento'),
          axios.get('http://localhost:3000/api/aforo'),
          axios.get('http://localhost:3000/api/categoria'),
        ]);
        this.establecimientos = establecimientos.data;
        this.aforos = aforos.data;
        this.categorias = categorias.data;
      } catch (error) {
        console.error('Error al obtener datos:', error.message);
      }
    },
    async fetchVentas() {
      try {
        const response = await axios.get('http://localhost:3000/api/venta');
        this.ventas = response.data;
      } catch (error) {
        console.error('Error al obtener ventas:', error.message);
      }
    },
    async handleFormSubmit(venta) {
      if (this.isEdit) {
        try {
          await axios.put(`http://localhost:3000/api/venta/${venta.venta_id}`, venta);
          this.fetchVentas();
        } catch (error) {
          console.error('Error al actualizar venta:', error.message);
        }
      } else {
        try {
          await axios.post('http://localhost:3000/api/venta', venta);
          this.fetchVentas();
        } catch (error) {
          console.error('Error al crear venta:', error.message);
        }
      }
      this.selectedVenta = { establecimiento_id: '', aforo_id: '', categoria_id: '', fecha_venta: '', monto: '' };
      this.isEdit = false;
    },
    handleEdit(venta) {
      this.selectedVenta = { ...venta };
      this.isEdit = true;
    },
    async handleDelete(venta_id) {
      try {
        await axios.delete(`http://localhost:3000/api/venta/${venta_id}`);
        this.fetchVentas();
      } catch (error) {
        console.error('Error al eliminar venta:', error.message);
      }
    },
  },
};
</script>
