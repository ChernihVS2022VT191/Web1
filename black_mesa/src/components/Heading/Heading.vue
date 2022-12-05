<template>
  <section class="container">
    <section class="greeting">
      <section class="center">
        <h1 class="title contur fon">{{msg}}</h1>
        <img class="pic" :src="image" alt="">
      </section>
    </section>
  </section>
</template>

<script>
export default {
  name: 'heading',
  props: ['msg', 'image',]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 1300px;
  padding: 0 15px;
  margin: 0 auto;
}

.greeting{
  display: block;
  padding: 10px;
}

.center {
  text-align: center;
}

.title {
  font-size: xx-large;
}

.contur
{
  color: aliceblue;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}

.fon{
  padding: 10px;
  outline: 3px solid rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgba(0,0,0,0.6);
}

.greeting .pic{
  margin: 20px auto;
  width: 35%;
}
</style>
