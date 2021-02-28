<template>
  <div class="container">
    <img src="@/assets/top-logo.png" alt="">
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

.container img {
  width: 300px;
}

@media (max-width: 959px) {
  .container img {
    width: 150px;
  }
}
</style>
