<template lang="pug">
#home(:class="{ animating: animate }")
  .svg-container(:class="{ animating: animate }")
    img.home(src="@/assets/img/home.svg")
    router-link(to="/about")
      img.quemsomos(src="@/assets/img/quem_somos.svg")
</template>

<script>

export default {
  name: 'home',
  data: () => ({
    animate: true,
  }),
  methods: {
    // Some data here
  },
  mounted() {
    setTimeout(() => { this.animate = false }, 500);
  },
};
</script>

<style lang="scss" scoped>

#home {
  background-color: white;
  transition: background-color 2s ease-in;

  &.animating {
    background-color: black;
  }
}

.svg-container {
  position: relative;
  opacity: 1;
  transition: opacity 1200ms ease-in;

  &.animating {
    opacity: 0;
  }
}

.home {
  height: auto;
  width: 100vw;
}

.quemsomos {
  position: absolute;
  height: auto;
  width: 24.3vw;
  left: 13.2vw;
  top: 40.9vw;

  &:hover {
    transition: all 500ms ease-in-out;
    transform: scale(1.05);
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
  }
}

</style>
