<template>
  <section class="fon container3" >
    <section class="personnel center">
      <h4 class="contur">{{msg}}</h4>
    </section>
    <div class="scrolling-wrapper">
      <img v-for="src of images"
           v-bind:src ="src" alt=""/>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Scroll',
  props: ['images', 'msg']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fon{
  padding: 10px;
  outline: 3px solid rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgba(0,0,0,0.6);
}

.container3{
  max-width: 1300px;
  margin: 30px auto
}

.scrolling-wrapper {
  border-radius: 10px;
  height: 300px;
  display: flex;
  overflow-x: scroll;
}

.personnel
{
  position: center;
}

.center {
  text-align: center;
}

.contur
{
  color: aliceblue;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}
</style>
