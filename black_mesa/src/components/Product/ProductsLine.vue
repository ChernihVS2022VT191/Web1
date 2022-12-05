<template>
  <div class="container">
    <div class="fon contur titleCenter">Наши товары</div>
    <section class="row">
    <Product v-for="product of products"
                 v-bind:product="product"/>
  </section>
  </div>
</template>

<script>
import Product from "@/components/Product/Product";
export default {
  name: "ProductsLine",
  components: {
    Product
  },
  props: ['products']
}
</script>

<style scoped>
.container {
  max-width: 1300px;
  padding: 0 15px;
  margin: 0 auto;
}

.fon{
  padding: 10px;
  outline: 3px solid rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgba(0,0,0,0.6);
}

.contur
{
  color: aliceblue;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}

/*Стиль для заголовков*/
.titleCenter {
  color: white;
  margin-bottom: 15px;
  font-weight: bold;
  text-align: center;
  font-size: xx-large;
  text-shadow: rgb(2 2 2) 10px 10px 7px;
}
</style>