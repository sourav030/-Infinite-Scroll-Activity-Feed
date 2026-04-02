<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

// Helper to format date
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  });
};
</script>

<template>
  <div class="max-w-md mx-auto my-8 overflow-hidden bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
          {{ post.userName }}
        </h2>
        <p class="text-xs text-slate-500">
          Created: {{ formatDate(post.createdAt) }}
        </p>
      </div>

      <h2 class="text-2xl font-bold text-slate-900 mb-2">
        {{ post.title }}
      </h2>
      <p class="text-slate-600 leading-relaxed mb-6">
        {{ post.description }}
      </p>

      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tag in post.tags" 
          :key="tag"
          class="px-3 py-1 text-sm font-medium text-slate-700 bg-slate-100 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>