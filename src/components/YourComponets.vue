// src/components/YourComponent.vue (或 .jsx/.tsx，視你的代碼風格而定)

<template>
  <div>
    <button @click="getData">Get Data</button>
    <div v-if="data">{{ data }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { fetchData } from "../api";

const data = ref(null);

const getData = async () => {
  data.value = await fetchData();
};
</script>
