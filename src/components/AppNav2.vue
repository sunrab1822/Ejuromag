<template>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
              <div id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/laptopok">Laptopok</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/konzolok">Konzolok</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/tabletek">Tablet</a>
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
    color: lightblue;
  }
  a:hover{
    text-decoration: underline;
    color: blue;
  }
  li{
    font-size: 15px;
  }
  nav{
    margin-bottom: 40px;
  }

</style>