<template>
  <base-header />
  <div>
    {{ commonStore.token }}
  </div>
  <el-button @click="onClick">{{ $t('Home') }}</el-button>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/stores';
const commonStore = useCommonStore();

const onClick = () => {
  ElMessage('this is a message.');
  commonStore.token = '更新token';
};
</script>
