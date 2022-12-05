<template>
    <section style="margin-top: 15px" class="container2">
      <section class="fon">
        <section class="backg2">
          <div class="titleCenter title contur">АВТОРИЗАЦИЯ</div>
          <div style="margin-top: 50px">
            <input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp">
            <input type="password" id="exampleInputPassword1">
            <div >
              <button type="submit" class="enterButton">Войти</button>
            </div>
          </div>
        </section>
      </section>
    </section>
</template>

<script>
export default {
  name: "LoginBlock"
}
</script>

<style scoped>
.container2 {
  max-width: 900px;
  padding: 0 15px;
  margin: 0 auto;
}

.backg2{
  background: url(@/assets/blackmesa-login.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-bottom: 45%;
}

.backg2 input{
  font-size: 10pt;
  margin-left: 330px;
  width: 100px;
  height: 15px
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

/*Отступы для кнопки входа в аккаунт*/
.enterButton {
  margin-left: 350px;
  background: #0098e8;
  border-radius: 5px;
}

</style>