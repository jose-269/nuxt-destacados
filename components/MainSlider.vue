<template>
  <div class="carrusel pb-5" style="z-index: -1">
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="@/static/img/1920x400.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/static/img/1920x400.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/static/img/1920x400.png"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style></style>
