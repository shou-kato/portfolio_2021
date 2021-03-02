<template>
  <div class="header">
    <NuxtLink to="/">
      Top
    </NuxtLink>
    <NuxtLink to="/about">
      About
    </NuxtLink>
    <NuxtLink to="/work">
      Work
    </NuxtLink>
    <NuxtLink to="/skill">
      Skill
    </NuxtLink>
  </div>
</template>
<style scoped>
.header {
  margin-top: 20px;
  margin-right: 100px;
  margin-bottom: 150px;
  text-align: right;
}
a {
  padding: 0 15px;
  font-size: 28px;
  color: #223D5F
}

@media screen and (max-width: 950px) {
  /* 1024pxまでの幅の場合に適応される */
  a {
    font-size: 20px;
  }

  .header {
    margin: 20px auto;
    text-align: center;
  }
}
</style>
