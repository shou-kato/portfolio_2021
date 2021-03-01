<template>
  <div class="container">
    <img width="400" height="400" src="@/assets/png/top-logo.png" alt="">
    <h1>Kato Sho</h1>
    <h2>よろしくねー</h2>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  text-align: center;
}
.container h1, h2 {
  padding-top: 20px;
  color: #223D5F;
}

.container h1 {
  font-size: 55px;
}

.container h2 {
  font-size: 32px;
}

@media screen and (max-width: 950px) {

  .container {
    margin-top: 200px;
  }

  .container img {
    width: 200px;
    height:200px;
  }
}
</style>
