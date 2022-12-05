<template>
  <section class="quote fon">
    <div class="center-div SizePortrait">
      <img class="contur_pic" :src="ava"  alt="">
      <h4 class="contur center">{{name}}</h4>
    </div>
    <div class="center-div SizeQuote"><i><h5 class="contur">
      <img class="contur_pic" style="width: 100%" :src="image"  alt="">
      "{{quote}}"</h5></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'quote',
  props: ['ava','quote','name','image']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote{
  max-width: 700px;
  display: flex;
  padding: 10px;
  margin: 10px auto ;
}

.fon{
  padding: 10px;
  outline: 3px solid rgb(0, 0, 0);
  border-radius: 10px;
  background-color: rgba(0,0,0,0.6);
}

.fon .SizePortrait{
  width: 25%;
}

.fon .SizePortrait img{
  width: 100%;
}

.contur
{
  color: aliceblue;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}

.center {
  text-align: center;
}

.center-div
{
  margin: auto 10px;
}

.fon .SizeQuote{
  width: 75%;
}

.contur
{
  color: aliceblue;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: black;
}

.contur_pic{
  outline: 4px solid rgb(0, 0, 0);
  border-radius: 10px;
}
</style>
