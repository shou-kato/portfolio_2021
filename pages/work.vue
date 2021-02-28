<template>
  <div class="container">
    <!-- <p>reverse</p> -->
    <div v-for="(item, index) in workContents" :key="index">
      <h3>{{ item.title }}</h3>
      <p>{{ item.subTitle }}</p>
      <img src="@/assets/top-logo.png" alt="">
    </div>
    <!-- <p>Online reverse</p> -->
    <!-- <p>bbs</p> -->
    <!-- <p>web小説ランキング可視化サイト</p> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      workContents: [
        {
          gitHubUrl: null,
          title: 'reverse',
          subTitle: 'reverse',
          language: ''
        },
        {
          gitHubUrl: null,
          title: 'online reverse',
          subTitle: 'reverse',
          language: ''
        },
        {
          gitHubUrl: null,
          title: 'online reverse',
          subTitle: 'reverse',
          language: ''
        }
      ]
    }
  },
  mounted () {

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
