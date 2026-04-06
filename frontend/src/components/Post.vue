<script setup>
defineProps({
  post: Object
});

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
};
</script>

<template>
  <article class="post-card">
    <div class="post-card__body">
      <div class="flex justify-between mb-2">
        <h2 class="text-sm font-semibold text-indigo-600">
          {{ post.userName }}
        </h2>
        <p class="text-xs text-gray-500">
          {{ formatDate(post.createdAt) }}
        </p>
      </div>

      <h2 class="text-lg font-bold mb-2">
        {{ post.title }}
      </h2>

      <p class="text-gray-600 mb-3">
        {{ post.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in post.tags"
          :key="tag"
          class="px-2 py-1 text-xs bg-gray-100 rounded"
        >
          {{ tag }}
        </span>
      </div>

    </div>
  </article>
</template>

<style scoped>
.post-card {
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.post-card__body {
  height: 100%;
  padding: 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
}
</style>