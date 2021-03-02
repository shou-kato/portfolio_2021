<template>
  <div>
    <HeaderLink />
    <Nuxt />
  </div>
</template>
<script>
import HeaderLink from '@/components/header-link.vue'
export default {
  components: {
    HeaderLink
  }
}
</script>
<style>
html {
  box-sizing: border-box;
  overflow-y:scroll;
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

body {
  background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);

  /* 画像をタイル状に繰り返し表示しない */
  background-repeat: no-repeat;

  /* コンテンツの高さが画像の高さより大きい時、動かないように固定 */
  background-attachment: fixed;

  /* 表示するコンテナの大きさに基づいて、背景画像を調整 */
  background-size: cover;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
}
</style>
