<template>
  <section class="container">
    <section class="greeting">
      <h3 class="fon contur">
        {{msg}}
      </h3>
    </section>
  </section>
</template>

<script>
export default {
  name: 'subtitle',
  props: ['msg']
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
</style>
