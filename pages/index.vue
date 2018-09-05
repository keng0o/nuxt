<template>
  <div class="home" />
</template>

<script>
import Home from '@/graphql/Home.graphql'

export default {
  apollo: {
    allUsers: {
      query: Home,
      loadingKey: 'loading',
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
