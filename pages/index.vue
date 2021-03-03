<template>
  <div class="container">
    <div>
      <img width="400" height="400" src="@/assets/webp/top-logo.webp" alt="">
      <h1>Kato Sho</h1>
      <h2>よろしくねー</h2>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: 100vh;
  grid-template-columns: 100vw;
  line-height: 1.5em;
}

.container div {
  align-self: center;
  justify-self: center;
  text-align: center;
}

.container h1, h2 {
  padding-top: 40px;
  color: #223D5F;
}

.container h1 {
  font-size: 55px;
}

.container h2 {
  font-size: 32px;
}

@media screen and (max-width: 950px) {
  .container img {
    width:  250px;
    height: 250px;
  }
}
</style>
