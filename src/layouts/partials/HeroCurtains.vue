<template>
  <div
    class="flex flex-col justify-center items-center relative overflow-hidden top-0 outer-wrapper"
  >
    <div class="canvas-wrapper overflow-hidden">
      <div class="bg-split w-screen absolute z-20"></div>
      <div id="canvas"></div>
      <div class="hide-before-load small-plane" id="animated-header">
        <!-- <img src="img/coho_5.png" alt="mandala" data-sampler="planeTexture" /> -->
        <g-image
          v-if="bg"
          :immediate="true"
          src="~/assets/img/card.jpg"
          data-sampler="planeTexture"
          class="shade-img"
        />
      </div>
    </div>

    <div class="hide-before-load logo z-30 w-100">
      <g-image src="~/assets/img/sh_logo.svg"/>
    </div>
  </div>
</template>
<script>
import * as curtains_settings from "../../libs/curtains_settings";
import anime from "animejs/lib/anime.es.js";
export default {
  mixins: ["curtains_settings"],
  props: {
    bg: {
      required: false,
    },
  },
  methods: {
    showElements() {
      let elements = document.getElementsByClassName("hide-before-load");
      let i;
      for (i = 0; i < elements.length; i++) {
        elements[i].style.opacity = "1";
      }
    },
  },
  mounted() {
    var lineDrawing = anime({
      targets: "path, rect, circle",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInCubic",
      duration: 2000,
      begin: function (anim) {
        document.querySelector("path").setAttribute("stroke", "black");
      },
      complete: function (anim) {},
      autoplay: false,
    });
    curtains_settings.initCurtains();
    this.showElements();
    lineDrawing.play();
  },
};
</script>
<style lang="scss" scoped>
.outer-wrapper {
  @media (max-width: 1024px) {
    height: 300px;
  }
  height: 60vh;
}
.shade-img {
  display: none;
}

.no-canvas .shade-img {
  display: block;
}

.canvas-wrapper {
  @media (max-width: 1024px) {
    height: 300px;
  }
  width: 100vw;
  position: absolute;
  top: 0;
  height: 60vh;

  display: block;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
}

#canvas {
  @media (max-width: 1024px) {
    height: 120vh;
  }
  position: fixed;
  transform: translate3d(0, 0, 0);
  top: -10vh;
  right: 0;
  left: 0;
  height: 120vh;

  width: 120vw;
  z-index: 1;
  animation-fill-mode: forwards;
  animation-name: load;
  animation-duration: 4s;
  animation-delay: 0.3s;
  opacity: 0;
}

#textCanvas {
  @media (max-width: 1024px) {
    height: 300px;
  }
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 60vh;

  z-index: 10;
}

.small-plane {
  @media (max-width: 1024px) {
    height: 300px;
  }
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 60vh;
}

.bg-split {
  @media (max-width: 1024px) {
    height: 300px;
  }
  height: 60vh;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.9) 34%,
    rgba(255, 255, 255, 1) 50%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0.9) 64%,
    rgba(0, 0, 0, 0) 100%
  );
}

.logo {
  z-index: 20;
  max-width: 100vw;
  height: auto;
  color: white;
  mix-blend-mode: difference;
  filter: invert(1) grayscale(1) contrast(9);
}

.logo svg {
  max-width: 100vw;
  width: 100vw;
  height: auto;
}

@keyframes load {
  100% {
    opacity: 1;
  }
}
</style>

