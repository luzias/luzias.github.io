<template lang="pug">
#library
  router-link(to="/")
    .back 
      img.backicon(src="@/assets/img/back.svg")
      span Voltar
  h1 Planejamento Familiar
  .content
    img.infografico(src="@/assets/img/planejamento_familiar.png")
</template>

<script>
export default {
  name: 'planejamento',
};
</script>

<style lang="scss" scoped>

#library {
  text-align: center;
}

.back {
  position: absolute;
}

.infografico {
  width: 100vw;
  margin-top: 48px;
}

h1 {
  font-family: "Bebas Neue";
  color: #FA7A5A;
  font-size: 48px;
  text-align: center;
  margin-top: 24px;
}

</style>
