<template>
  <header >
    <nav  class="navbar-expand-lg" >
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Main'}">Главная</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Scientists'}">Учёные</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Security'}">Охрана</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Product'}">Товары</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Main'}">Отзывы</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'Main'}">Спонсоры</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " :to="{name: 'Login'}">Войти</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
  header {
    background-color: rgba(100, 149, 237, 0.6);
    outline: 3px solid rgba(0, 0, 0,.8);
  }

  header .container {
    padding: 0 15px;
    max-width: 1200px;
  }

  nav ul li {
    position: relative;
  }

  nav ul li a{
    display: inline-block;
    text-decoration: none;
    color: black;
    outline: 3px solid rgba(0, 0, 0,.8);
  }

  .navbar-expand-lg .navbar-nav .nav-link{
    padding-right: 20px;
    padding-left: 20px;
  }

  nav ul li a:hover {
    background-color: rgb(100, 149, 237);
  }

  .menu {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
  }

  .menu, .submenu {
    list-style: none;
  }
</style>