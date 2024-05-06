<script setup>
import MyDatePanel from '@/components/MyDatePanel.vue';

const onDateChange = (date) => {
  ElMessage({
    type: 'success',
    message: date.toString()
  })
}
</script>

<template>
  <el-card>
    <MyDatePanel @change="onDateChange" />
  </el-card>
</template>
