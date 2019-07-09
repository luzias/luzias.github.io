<template lang="pug">
#podcast
  router-link(to="/")
    .back 
      img.backicon(src="@/assets/img/back.svg")
      span Voltar
  .content
    iframe(width="100%", height="300", scrolling="no", frameborder="no", allow="autoplay", src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/641427963&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true")
</template>

<script>
export default {
  name: 'podcast',
};
</script>

<style lang="scss" scoped>
.content {
  width: 60vw;
  margin: 2em auto;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;

  iframe {
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
