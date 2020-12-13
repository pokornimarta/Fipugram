<template>
<div id="app">
  <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand" href="#">
           <img src="@/assets/insta.png" 
             alt="" 
              width="30" 
              height="24" 
              class="d-inline-block align-top">
                  Fipugram  
           </a>
      
    <button 
    class="navbar-toggler" 
    type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarToggler" 
    aria-controls="navbarToggler" 
    aria-expanded="false" 
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarToggler">
      <form id="search" class="navbar-form form-inline ml-auto">
        <input v-model="store.searchTerm" class="form-control mr-sn-2" type="search" placeholder="Pretraga" aria-label="Search"/>
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/Login" class="nav-link">Prijava</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/Signup" class="nav-link">Registracija</router-link>
        </li>
      </ul>
      </div>
      </nav>

      

      <div class="container">
          <router-view />
      </div>


    </div>
  
</template>


<script>
import store from "@/store"
export default {
  name: 'app',
  data() {
    return {
      store
    }
  }
};

</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: white !important;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
