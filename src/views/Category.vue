<template>
  <div>
    <AppNavbar />
    <div class="py-8 bg-gray-100 min-h-screen">
      <div class="container mx-auto flex">
        <div class="w-1/2 pr-4">
          <CategoryForm :category="selectedCategory" :isEdit="isEdit" @submit="handleFormSubmit" />
        </div>
        <div class="w-1/2 pl-4 overflow-y-scroll h-screen">
          <CategoryList :categories="categories" @edit="handleEdit" @delete="handleDelete" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import AppNavbar from '@/components/AppNavbar.vue';
import CategoryForm from '@/components/CategoryForm.vue';
import CategoryList from '@/components/CategoryList.vue';

export default {
  name: 'CategoryPage',
  components: {
    AppNavbar,
    CategoryForm,
    CategoryList,
  },
  data() {
    return {
      categories: [],
      selectedCategory: { nombre: '' },
      isEdit: false,
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get('https://ing-web-pr3.onrender.com/api/categoria');
        this.categories = response.data;
      } catch (error) {
        console.error('Error al obtener categorías:', error.message);
      }
    },
    async handleFormSubmit(category) {
      if (this.isEdit) {
        try {
          await axios.put(`https://ing-web-pr3.onrender.com/api/categoria/${category.categoria_id}`, category);
          this.fetchCategories();
        } catch (error) {
          console.error('Error al actualizar categoría:', error.message);
        }
      } else {
        try {
          await axios.post('https://ing-web-pr3.onrender.com/api/categoria', category);
          this.fetchCategories();
        } catch (error) {
          console.error('Error al crear categoría:', error.message);
        }
      }
      this.selectedCategory = { nombre: '' };
      this.isEdit = false;
    },
    handleEdit(category) {
      this.selectedCategory = { ...category };
      this.isEdit = true;
    },
    async handleDelete(categoria_id) {
      try {
        await axios.delete(`https://ing-web-pr3.onrender.com/api/categoria/${categoria_id}`);
        this.fetchCategories();
      } catch (error) {
        console.error('Error al eliminar categoría:', error.message);
      }
    },
  },
};
</script>
