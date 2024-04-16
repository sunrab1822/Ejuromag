<template>
<div id="page-container">
    <footer id="footer">
        <div data-cy="Footer" id="FooterBackgroundColor">

            <div id="QrCodeContainer">
                <div id="QrCodeImage">
                    <img id="QrCode" src='/QrCodePlaceholder.webp' alt="QrKód" >
                </div>
                <div id="QrCodeText">
                    <h3 class="text-center text-white">Töltsd le az EjuroMag appot</h3>
                    <h3 class="text-center text-white">Olvasd be a QR-kódot</h3>
                </div>
                <div>
                    <img id="QrCodeSecondaryImage" src='/Phone02.webp' alt="">
                </div>
            </div>
            <div class="FooterContainer">
                <div></div>
                <div>
                    <p style="color: white">DropBox + https://www.the-qrcode-generator.com</p>
                    <router-link to="/help/Rendeles_es_szallitas">Rendelés és Szállítási információk</router-link>
                <div>
                    <router-link to="/help/Rolunk">Rólunk</router-link>

                </div>
                </div>
                    <div class=" SocialIcons">
                        <router-link to="" ><i id="fa-facebook" class="fa-brands fa-facebook"></i></router-link>
                        <router-link to="" ><i id="fa-tiktok" class="fa-brands fa-tiktok"></i></router-link>
                        <router-link to="" ><i id="fa-instagram" class="fa-brands fa-instagram"></i></router-link>
                    </div>
            </div>
            
            <p class="text-center text-white ">&copy;2024 - </p>

        </div>

    </footer>

</div>
</template>

<script setup>
import '../assets/scss/footerStyle.scss'

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
    img {
        max-width: 90%;
    }
    i{
        min-height: 3.5rem;
    }
</style>