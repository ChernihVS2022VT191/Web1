<template>
  <section class="fon container2">
    <img style="width: 100%" class="contur_pic" :src="image"  alt="">
    <h4 class="contur">
      {{msg}}
    </h4>
  </section>
</template>

<script>
export default {
  name: 'block_with_text',
  props: ['msg', 'image',]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container2 {
  max-width: 1000px;
  padding: 0 15px;
  margin: 0 auto;
}

.contur {
  color: aliceblue;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}

.fon {
  padding: 10px;
  outline: 3px solid rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.6);
}

.contur_pic {
  outline: 4px solid rgb(0, 0, 0);
  border-radius: 10px;
}
</style>
