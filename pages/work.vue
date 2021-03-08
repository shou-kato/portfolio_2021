<template>
  <div class="container">
    <div v-for="(item, index) in workContents" :key="index" class="work-wrapper">
      <a :href="item.url">
        <h3>{{ item.title }}</h3>
        <p>{{ item.details }}</p>

        <h4>言語</h4>
        <p>{{ item.language }}</p>

        <h4>フレームワーク</h4>
        <p>{{ item.fw }}</p>
      </a>
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
    const res = await this.$axios.get('https://sho19n110.microcms.io/api/v1/news',
      { headers: { 'X-API-KEY': '823cd8fd-4080-4f78-aaee-6a3ea7ae8178' } })
    const resData = res.data.contents
    this.workContents = resData
  }
}
</script>
<style scoped>

a {
  display: block;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px 60px 0 60px;
}

.work-wrapper {
  width: 450px;
  height: 420px;
  padding: 60px;
  margin: 0 20px 100px 20px;
  cursor: pointer;
  border: solid black;
  border-radius: 20px;
  transition: all 1s ease-out;
  transition: width 1s ease-in-out 0.01s;
  transition: box-shadow 600ms cubic-bezier(0.33, 0.11, 0.02, 0.99),
    transform 600ms cubic-bezier(0.33, 0.11, 0.02, 0.99);
}

.work-wrapper:hover {
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1),
    0 1px 6px rgba(0, 0, 0, 0.05),
    0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1),
    8px 32px 32px rgba(0, 0, 0, 0.15),
    8px 64px 64px rgba(0, 0, 0, 0.15);
  transform: scale(1.05) translateY(-0.5rem);
}

.container h3, h4, p {
  margin: 10px 0;
  color: #223D5F;
}

.container h3 {
  font-size: 28px;
}

.container p {
  display: -webkit-box;
  overflow: hidden;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

@media screen and (max-width: 1200px) {
  .work-wrapper {
    width: 350px;
    height: 320px;
    transition: all 1s ease-out;
  }

  .container h3 {
    font-size: 18px;
  }
  .container h4 {
    font-size: 16px;
  }

  .container p {
    display: -webkit-box;
    overflow: hidden;
    font-size: 14px;
    font-weight: bold;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

}

@media screen and (max-width: 900px) {

  .container {
    display: block;
    width: auto;
    margin: 0;
  }

  .container h3 {
    font-size: 16px;
  }
  .container h4 {
    font-size: 14px;
  }

  .container p {
    display: -webkit-box;
    overflow: hidden;
    font-size: 12px;
    font-weight: bold;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .work-wrapper {
    width: 400px;
    height: 240px;
    padding: 30px;
    margin: 100px auto;
    transition: all 1s ease-out;
  }
}

@media screen and (max-width: 600px) {
  .work-wrapper {
    width: 260px;
    height: 240px;
    transition: all 1s ease-out;
  }
}
</style>
