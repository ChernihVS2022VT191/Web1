<template>
  <div class="col-md-6 col-lg-3 mb-5">
    <div class="hover-effect-btn">
      <img style="width: 100%" class="contur_pic" :src="product.image" alt="" />
      <h3 class="title contur">{{ product.title }}</h3>
      <div class="overlay"></div>
        <a class="button" href="#"><button class="price-Button">{{ product.price }} руб.</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {
      type: Object
    }
  }
}
</script>

<style scoped>

.contur_pic{
  outline: 4px solid rgb(0, 0, 0);
  border-radius: 10px;
}

.hover-effect-btn {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background 0.5s ease;
}
.hover-effect-btn:hover .overlay {
  background: rgba(0, 0, 0, 0.5); /* Настройка цвета и прозрачности для блока с заголовком при наведении */
}
.title {
  position: absolute;
  width: 100%;
  top: 25%; /* Отступ сверху */
  text-align: center;
  text-transform: uppercase; /* Заглавные буквы */
  color: white; /* Цвет заголовка */
  z-index: 1;
  transition: top .5s ease;
}
.hover-effect-btn:hover .title {
  top: 10%; /* Отступ сверху при наведении */
}
.button {
  position: absolute;
  width: 100%;
  left:0;
  top: 65%; /* Отступ сверху */
  text-align: center;
  opacity: 0;
  transition: opacity .35s ease;
}
.hover-effect-btn:hover .button {
  opacity: 1;
}

.price-Button{
  padding: 10px 40px; /* Отступ */
  text-align: center;
  background: rgb(100, 149, 237); /* Цвет кнопки */
  color: white; /* Цвет текста */
  border: 1px solid black; /* Ширина, стиль и цвет границы */
  z-index: 1;
}
</style>