<template>
  <footer>
    <section class="corpInform " >
      <div>
        <img src="@/assets/BlackMesaWhite.png" alt="">
      </div>
      <div>
        <div>&copy; Black Mesa Corp, 2022</div>
        <div>+7(800)555-35-35</div>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  footer {
    background-color: rgb(100, 149, 237);
    padding: 15px;
    color: aliceblue;
  }

  .corpInform {
    height: 250px;
    text-align: right;
    font-size: 15px;
  }

  .corpInform img {
    padding-top: 10px;
    padding-bottom: 20px;
    align-content: center;
    width: 10%;
  }
</style>