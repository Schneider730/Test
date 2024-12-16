<template>
  <div role="list" class="v-list">
    <div>
      <div v-for="category in categories" :key="category.id" tabindex="0" role="listitem" aria-selected="false" class="v-list-item v-list-item--link theme--light" style="justify-content: space-between;" @mouseover="showSubmenu" @mouseleave="hideSubmenu">
        <a :href="category.link" class="" style="display: flex; color: inherit; width: 100%;">
          <img v-if="category.fileUrlSmall" :src="category.fileUrlSmall" alt="icon" class="category-icon">
          <div class="v-list-item__title">
            {{ category.name }}
          </div>
          <div class="v-list-item__action">
            <i class="fas fa-angle-right"></i> 
          </div>
        </a>
        <ul v-if="category.children && category.children.length" class="submenu">
          <li v-for="child in category.children" :key="child.id" @mouseover="showSubmenu" @mouseleave="hideSubmenu">
            <a :href="child.link" class="menu-item">
              <img v-if="child.fileUrlSmall" :src="child.fileUrlSmall" alt="icon" class="category-icon">
              <span class="menu-title">{{ child.name }}</span>
              <i class="fas fa-angle-right child-icon"></i> 
            </a>
            <ul v-if="child.children && child.children.length" class="submenu">
              <li v-for="subChild in child.children" :key="subChild.id" @mouseover="showSubmenu" @mouseleave="hideSubmenu">
                <a :href="subChild.link" class="menu-item">
                  <img v-if="subChild.fileUrlSmall" :src="subChild.fileUrlSmall" alt="icon" class="category-icon">
                  <span class="menu-title">{{ subChild.name }}</span>
                  <i class="fas fa-angle-right subchild-icon"></i> 
                </a>
                <ul v-if="subChild.children && subChild.children.length" class="submenu">
                  <li v-for="grandChild in subChild.children" :key="grandChild.id">
                    <a :href="grandChild.link" class="menu-item">
                      <img v-if="grandChild.fileUrlSmall" :src="grandChild.fileUrlSmall" alt="icon" class="category-icon">
                      <span class="menu-title">{{ grandChild.name }}</span>
                      <i class="fas fa-angle-right grandchild-icon"></i> 
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import '../index.css'

export default {
  computed: {
    ...mapState(['categories'])
  },
  methods: {
    showSubmenu(event) {
      const submenu = event.currentTarget.querySelector('.submenu');
      if (submenu) {
        submenu.style.display = 'block';
      }
    },
    hideSubmenu(event) {
      const submenu = event.currentTarget.querySelector('.submenu');
      if (submenu) {
        submenu.style.display = 'none';
      }
    }
  },
  created() {
    this.$store.dispatch('fetchCategories');
  }
};
</script>

