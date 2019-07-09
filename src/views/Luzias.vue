<template lang="pug">
#outdoor
  router-link(to="/")
    .back 
      img.backicon(src="@/assets/img/back.svg")
      span Voltar
  .content
    .video1
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZXWg9j0WCCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    .video2 
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

  .video1 {
    margin-top:32px;
  }

  .video2 {
    margin-top:32px;
  }
}

@media (max-width: 768px) {
  .content {
    width: unset;
    margin: 2em 1em;
  }  
}
</style>
