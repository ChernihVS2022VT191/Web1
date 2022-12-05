<template>
  <section class="fon container3" >
    <section class="personnel center">
      <h4 class="contur">{{msg}}</h4>
      <div style="display: flex;justify-content: space-between;">
        <img class="before_and_after contur_pic" v-for="src of images"
             v-bind:src ="src" alt=""/>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'before_and_after',
  props: ['msg', 'images',]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
  text-align: center;
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

.container3{
  max-width: 1300px;
  margin: 30px auto
}

.personnel
{
  position: center;
}

.before_and_after{
  width: 49%;
}

.contur_pic{
  outline: 4px solid rgb(0, 0, 0);
  border-radius: 10px;
}
</style>
