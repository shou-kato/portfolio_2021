<template>
  <div class="container">
    <img src="@/assets/top-logo.png" alt="">

    <h2>Kato Sho</h2>
    <p>2003年生まれ</p>
    <p>N高等学校入学後はWebプログラミングを始める。</p>
    <p>株式会社CYMESにてフロントエンドの開発のインターンを行う(2019年 9月 ~ 2021年 1月)</p>
  </div>
</template>
<style scoped>
.container {
  margin: 0 auto;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* text-align: center; */
}

.container img,  h2,  p {
  padding: 0 0 20px 0;
}

.container img {
  width: 200px;
}

.container h2, p {
  color: #35495e;
}

.container h2 {
  font-size: 25px;
}

.container p {
  font-size: 18px;
  font-weight: bold;
}
/* .container > h2, p {
  color: #223D5F;
} */
</style>
