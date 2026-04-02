<script setup>
import Post from './components/post.vue'; 
import axios from 'axios';
import { ref, onMounted, onUnmounted } from 'vue';

const posts = ref([]);
const loading = ref(false);
const hasMore = ref(true);
const lastId = ref(null);

const fetchPost = async () => {
  if (loading.value || !hasMore.value) return;

  try {
    loading.value = true;
    let url = `http://localhost:3000/api/v1/posts`;
    
   
    const params = new URLSearchParams();
    if (lastId.value) params.append('lastId', lastId.value);
    params.append('limit', '10');

    const res = await axios.get(`${url}?${params.toString()}`);
    const newPosts = res.data.data;

    posts.value.push(...newPosts);

    if (newPosts.length > 0) {
      lastId.value = newPosts[newPosts.length - 1]._id;
    }

    hasMore.value = res.data.hasMore;
    
  } catch (error) {

    console.error("Error fetching posts:", error.message);

  } finally {
    loading.value = false;
  }
};

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const fullHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= fullHeight - 100) {
    fetchPost();
  }
};

onMounted(() => {
  fetchPost();
  window.addEventListener('scroll', handleScroll);
});


onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="p-4">
    <Post 
      v-for="item in posts" 
      :key="item._id" 
      :post="item" 
    />
    
    <div v-if="loading" class="text-center py-4">Loading more posts...</div>
    <div v-if="!hasMore" class="text-center py-4 text-slate-400">No more posts to show.</div>
  </div>
</template>