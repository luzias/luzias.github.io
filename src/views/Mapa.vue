<template lang="pug">
#mapa
  router-link(to="/")
    .back 
      img.backicon(src="@/assets/img/back.svg")
      span Voltar
  .content
    img.infografico(src="@/assets/img/infografico-aborto-mundo.png")
</template>

<script>
export default {
  name: 'mapa',
};
</script>

<style lang="scss" scoped>

#mapa {
  text-align: center;
}

</style>
