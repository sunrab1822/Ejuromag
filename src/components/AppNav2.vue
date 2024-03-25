<template>
            <nav class="navbar navbar-expand-md" >
            <div class="container-fluid">
              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link" data-cy="navbar2-laptops-link" href="/laptopok">Laptopok</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-cy="navbar2-gamerPcs-link" href="/gamer_szamitogepek">Gamer számítógépek</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-cy="navbar2-officePcs-link" href="/irodai_szamitogepek">Irodai számítógépek</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-cy="navbar2-consoles-link" href="/konzolok">Konzolok</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-cy="navbar2-phones-link" href="/telefonok">Telefonok</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-cy="navbar2-tablets-link" href="/tabletek">Tabletek</a>
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