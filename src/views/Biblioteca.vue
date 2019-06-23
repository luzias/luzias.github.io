<template lang="pug">
#library
  router-link(to="/")
    .back 
      img.backicon(src="@/assets/img/back.svg")
      span Voltar
  .content
    img.infografico(src="@/assets/img/infografico-biblioteca.png")
</template>

<script>
export default {
  name: 'biblioteca',
};
</script>

<style lang="scss" scoped>

#library {
  text-align: center;
}

</style>
