<template>
  <div>
    <base-header />
    <el-button @click="onClick">{{ $t('Home') }}</el-button>
  </div>
</template>

<script setup lang="ts">
const onClick = () => {
  ElMessage('this is a message.')
}

console.log('import.meta', import.meta.env)
</script>
