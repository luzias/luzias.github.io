<template lang="pug">
#outdoor
  router-link(to="/")
    .back 
      img.backicon(src="@/assets/img/back.svg")
      span Voltar
  .content
    .video 
      iframe(width="560", height="315", src="https://www.youtube.com/embed/X0qT1QIfuQI", frameborder="0", allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowfullscreen)
</template>

<script>
export default {
  name: 'religiao',
};
</script>

<style lang="scss" scoped>
.content {
  width: 60vw;
  margin: 2em auto;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  .video {
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
