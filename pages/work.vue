<template>
  <div class="container">
    <div v-for="(item, index) in workContents" :key="index">
      <h3>{{ item.title }}</h3>
      <p>{{ item.details }}</p>

      <h4>言語</h4>
      <p>{{ item.language }}</p>

      <h4>フレームワーク</h4>
      <p>{{ item.fw }}</p>
      <!-- <img src="@/assets/top-logo.png" alt=""> -->
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      workContents: []
    }
  },
  async created () {
    const res = await this.$axios.get('https://sho19n110.microcms.io/api/v1/news'
    )
    const resData = res.data.contents
    this.workContents = resData
  }
}
</script>
<style scoped>
.container {
  margin: 0 auto;
}

.container p {
  padding-top: 15px;
  color: #223D5F;
  font-size: 18px;
  font-weight: bold;
}
</style>
