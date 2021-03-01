<template>
  <div class="container">
    <div v-for="(item, index) in workContents" :key="index" class="work-wrapper">
      <h3>{{ item.title }}</h3>
      <p>{{ item.details }}</p>

      <h4>言語</h4>
      <p>{{ item.language }}</p>

      <h4>フレームワーク</h4>
      <p>{{ item.fw }}</p>
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
  width: 1400px;
 display: flex;
 justify-content: space-between;
 flex-wrap: wrap;
}

.work-wrapper {
  margin-top: 100px;
  padding: 100px;
  width: 550px;
  border: solid black;
  border-radius: 20px;
}

.container h3, h4, p {
  color: #223D5F;

}

.container h3 {
  font-size: 30px;
}

.container p {
  padding-top: 15px;
  font-size: 18px;
  font-weight: bold;
}
</style>
