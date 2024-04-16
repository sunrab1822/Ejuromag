<template>
            <nav data-cy="TermekekNavbar" class="navbar navbar-expand-md" >
            <div class="container-fluid">
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <router-link class="nav-link" data-cy="navbar2-laptops-link" to="/laptopok">Laptopok</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" data-cy="navbar2-gamerPcs-link" to="gamer_szamitogepek">Gamer számítógépek</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" data-cy="navbar2-officePcs-link" to="irodai_szamitogepek">Irodai számítógépek</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" data-cy="navbar2-consoles-link" to="konzolok">Konzolok</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" data-cy="navbar2-phones-link" to="telefonok">Telefonok</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" data-cy="navbar2-tablets-link" to="tabletek">Tabletek</router-link>
                  </li>

                </ul>

              </div>
            </div>
          </nav>
</template>
 
<script setup>
 
</script>
 
<style lang="scss" scoped>
 
 
  a{
    text-decoration: none;
    color: white;
  }
  a:hover{
    text-decoration: underline;
    color: rgb(189, 189, 255);
  }
  li{
    font-size: 15px;
  }
  nav{
    margin-bottom: 40px;
    background-color: rgb(2, 102, 145)
  }

</style>