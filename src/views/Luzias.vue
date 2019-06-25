<template lang="pug">
#outdoor
  router-link(to="/")
    .back 
      img.backicon(src="@/assets/img/back.svg")
      span Voltar
  .content
    h1 Depoimentos
    .video1
      h2 Depoimentos - parte 1
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZXWg9j0WCCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    .video2 
      h2 Depoimentos - parte 2
      iframe(width="560", height="315", src="https://www.youtube.com/embed/9FEpLohZPYY", frameborder="0", allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen)
</template>

<script>
export default {
  name: 'luzias',
};
</script>

<style lang="scss" scoped>
.content {
  width: 60vw;
  margin: 2em auto;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  h1 {
    margin-bottom: 24px;
    font-family: "Bebas Neue";
    color: #FA7A5A;
    font-size: 48px;
    text-align: center;
  }
  h2 {
    margin-top:32px;
    margin-bottom: 16px;
  }
}
</style>
