<template>
  <div>
    <div class="container">
      <div class="work-wrapper">
        <img width="400" height="400" class="profile_logo" src="@/assets/webp/top-logo.webp" alt="">
      </div>

      <div class="work-wrapper">
        <h2>Kato Sho</h2>
        <p>2003年生まれ</p>
        <p>N高等学校入学後はWebプログラミングを始める</p>
        <p>株式会社CYMESにてフロントエンド開発のインターンを行う(2019年 9月 ~ 2021年 1月)</p>
      </div>
    </div>
    <a href="https://github.com/shou-kato"><img class="sns-icon" width="100" height="100" src="@/assets/webp/GitHub-Mark-120px-plus.webp" alt=""></a>
  </div>
</template>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

.container h2,  p {
  padding: 0 0 30px 0;
  color: #35495e;
}

.container h2 {
  padding-top: 100px;
  font-size: 28px;
}

.container p {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.5;
}

.work-wrapper {
  flex: 1;
  width: 300px;
  padding: 40px;
  margin: 10px;
}

.sns-icon {
  display: block;
  margin: 0 auto;
  margin-bottom: 40px;
}

@media screen and (max-width: 950px) {
  .container {
    display: block;
    width: auto;
    margin: 100px 30px 0 30px;
  }

  .container h2 {
    padding-top: 40px;
  }
  .work-wrapper {
    width: auto;
    padding: 0;
    margin: 0 auto;
    text-align: center;
  }

  .work-wrapper img {
    width: 200px;
    height:200px;
  }
}
</style>
