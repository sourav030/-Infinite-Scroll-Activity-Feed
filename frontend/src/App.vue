<script setup>
import Post from './components/Post.vue';
import axios from 'axios';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { RecycleScroller } from 'vue-virtual-scroller';

const posts = ref([]);
const loading = ref(false);
const hasMore = ref(true);
const lastId = ref(null);
const viewportWidth = ref(0);

const isGrid = ref(false);

const updateViewportWidth = () => {
  viewportWidth.value = window.innerWidth;
};

const gridColumns = computed(() => {
  if (viewportWidth.value >= 1280) return 3;
  if (viewportWidth.value >= 768) return 2;
  return 1;
});

const gridItemSize = computed(() => {
  if (!isGrid.value) return undefined;

  return Math.max(1, Math.floor((viewportWidth.value - 32) / gridColumns.value));
});

const toggleLayout = () => {
  isGrid.value = !isGrid.value;
};

const fetchPost = async () => {
  if (loading.value || !hasMore.value) return;

  try {
    loading.value = true;

    const url = 'http://localhost:3000/api/v1/posts';
    const params = new URLSearchParams();

    if (lastId.value) params.append('lastId', lastId.value);
    params.append('limit', '50');

    const res = await axios.get(`${url}?${params.toString()}`);

    posts.value.push(...res.data.data);

    if (res.data.data.length > 0) {
      lastId.value = res.data.data[res.data.data.length - 1]._id;
    }

    hasMore.value = res.data.hasMore;
  } finally {
    loading.value = false;
  }
};

const handleUpdate = (startIndex, endIndex) => {
  if (endIndex >= posts.value.length - 5) {
    fetchPost();
  }
};

onMounted(() => {
  updateViewportWidth();
  window.addEventListener('resize', updateViewportWidth);
  fetchPost();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateViewportWidth);
});
</script>

<template>
  <div class="app-shell">
    <header class="toolbar">
      <button class="toggle-button" @click="toggleLayout">
        Switch to {{ isGrid ? 'Row' : 'Grid' }}
      </button>
    </header>

    <RecycleScroller
      class="scroller"
      :items="posts"
      :item-size="isGrid ? 220 : 260"
      :grid-items="isGrid ? gridColumns : undefined"
      :item-secondary-size="gridItemSize"
      key-field="_id"
      emit-update
      v-slot="{ item }"
      @update="handleUpdate"
    >
      <Post class="p-5" :post="item" />
    </RecycleScroller>

    <div v-if="loading" class="loading-state">Loading...</div>
  </div>
</template>

<style scoped>

.app-shell {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
}

.toolbar {
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  padding: 16px;
}

.toggle-button {
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 600;
  color: #ffffff;
  background: #111827;
  cursor: pointer;
}

.scroller {
  flex: 1;
  min-height: 0;
  padding: 0 16px 16px;
  
} 
 .loading-state {
  flex-shrink: 0;
  padding: 0 16px 16px;
  color: #475569;
}
</style>