<template>
  <body>
    <div id="app" >
      <div>
        <section class="wrapper">
          <Header/>
          <main>
            <router-view/>
          </main>
        </section>
        <Footer/>
      </div>
    </div>
  </body>
</template>

<script>
import Header from '@/components/Main/Header'
import Footer from '@/components/Main/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
}

.container {
  max-width: 1300px;
  padding: 0 15px;
  margin: 0 auto;
}

* {
  margin: 0;
  padding: 0;
  font-size: 15px;
}

.wrapper {
  min-height: 100vh;
  margin-bottom: 30px;
}

.backg{
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-clip: content-box;
  background-size: cover;
}

</style>
