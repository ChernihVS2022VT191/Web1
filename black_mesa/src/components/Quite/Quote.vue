<template>
  <section class="quote fon">
    <div class="SizePortrait">
      <img class="contur_pic" :src="ava"  alt="">
      <h4 class="contur center">{{name}}</h4>
    </div>
    <div class="center-div SizeQuote"><i><h5 class="contur"> "{{quote}}"</h5></i>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Quote',
  props: ['ava','quote','name']
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
  width: 27%;
}

.fon .SizePortrait img{
  width: 100%;
}

.fon .SizeQuote{
  width: 70%;
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

.contur_pic{
  outline: 4px solid rgb(0, 0, 0);
  border-radius: 10px;
}
</style>
