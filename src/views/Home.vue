<template lang="pug">
#home(:class="{ animating: animate }")
  .instruction
      h2 Navegue pela imagem com o mouse
  .svg-container(:class="{ animating: animate }")
    img.home(src="@/assets/img/home.svg")
    router-link(to="/about")
      img.igreja(src="@/assets/img/igreja.svg")
    router-link(to="/about")
      img.hospital(src="@/assets/img/hospital.svg")
    router-link(to="/about")
      img.outdoor(src="@/assets/img/outdoor.svg")
    router-link(to="/biblioteca", alt="Biblioteca")
      img.biblioteca(src="@/assets/img/biblioteca.svg")
    router-link(to="/about")
      img.lady-child(src="@/assets/img/lady_child.svg")
    router-link(to="/aborto-no-mundo")
      img.mapa(src="@/assets/img/mapa.svg")
    router-link(to="/about")
      img.legislacao(src="@/assets/img/man_suit_coffee.svg")
    router-link(to="/about")
      img.quemsomos(src="@/assets/img/quem_somos.svg")
    router-link(to="/about")
      img.headphones(src="@/assets/img/man_headphone.svg")
    a(href="https://facebook.com/luziasdoc", target="_blank")
      img.facebook(src="@/assets/img/woman_holding_fb.svg")
    img.cenario1(src="@/assets/img/man_handup.svg")
    router-link(to="/entrevista-etica")
      img.cenario2(src="@/assets/img/man_preg_lady.svg")
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
    if (this.animate) {
      setTimeout(() => { this.animate = false; }, 3000);
    }
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

.instruction {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
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
  z-index: 10;

  &:hover {
    transition: all 500ms ease-in-out;
    transform: scale(1.05);
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
  }
}

.headphones {
  position: absolute;
  height: auto;
  width: 5.8vw;
  left: 3.6vw;
  top: 42vw;
  z-index: 10;

  &:hover {
    transition: all 500ms ease-in-out;
    transform: scale(1.05);
    filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
  }
}

.facebook {
    position: absolute;
    height: auto;
    width: 6.6vw;
    left: 30.7vw;
    top: 47.8vw;
    z-index: 11;

    &:hover {
      transition: all 500ms ease-in-out;
      transform: scale(1.05);
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    }
}

.igreja {
    position: absolute;
    height: auto;
    width: 20.5vw;
    left: 7.2vw;
    top: 17.35vw;
    z-index: 4;

    &:hover {
      z-index: 5;
      transition: all 500ms ease-in-out;
      transform: scale(1.05);
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    }
}

.hospital {
    position: absolute;
    height: auto;
    width: 15.8vw;
    left: 27.6vw;
    top: 18.1vw;
    z-index: 4;

    &:hover {
      z-index: 5;
      transition: all 500ms ease-in-out;
      transform: scale(1.05);
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    }
}

.outdoor {
    position: absolute;
    height: auto;
    width: 15vw;
    left: 42.6vw;
    top: 3.1vw;
    z-index: 4;

    &:hover {
      transition: all 500ms ease-in-out;
      transform: scale(1.05);
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    }
}

.biblioteca {
    position: absolute;
    height: auto;
    width: 23.3vw;
    left: 56.7vw;
    top: 20.95vw;
    z-index: 4;

    &:hover {
      transition: all 500ms ease-in-out;
      transform: scale(1.05);
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    }
}

.lady-child {
    position: absolute;
    height: auto;
    width: 6.3vw;
    left: 55.7vw;
    top: 36.3vw;
    z-index: 5;

    &:hover {
      transition: all 500ms ease-in-out;
      transform: scale(1.2);
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    }
}

.mapa {
    position: absolute;
    height: auto;
    width: 13vw;
    right: 10.7vw;
    bottom: 1vw;
    z-index: 6;

    &:hover {
      transition: all 500ms ease-in-out;
      transform: scale(1.05);
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    }
}

.legislacao {
    position: absolute;
    height: auto;
    width: 9vw;
    right: 31.7vw;
    bottom: 8.5vw;
    z-index: 6;

    &:hover {
      transition: all 500ms ease-in-out;
      transform: scale(1.05);
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    }
}

.cenario1 {
    position: absolute;
    height: auto;
    width: 7.5vw;
    left: 38.7vw;
    bottom: 15.7vw;
    z-index: 7;
}

.cenario2 {
    position: absolute;
    height: auto;
    width: 13.5vw;
    right: 17.9vw;
    bottom: 14vw;
    z-index: 8;

    &:hover {
      transition: all 500ms ease-in-out;
      transform: scale(1.1);
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.25));
    }
}
</style>
