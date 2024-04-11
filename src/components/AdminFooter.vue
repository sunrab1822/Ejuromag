<template>
    <div id="page-container">
        <footer id="footer">
            <div id="FooterBackgroundColor">
    
                <div id="QrCodeContainer">
                    <div id="QrCodeImage">
                        <img id="QrCode" src='/black.webp' alt="QrKód" >
                    </div>
                    <div id="QrCodeText">

                    </div>
                    <div>
                    </div>
                </div>
                <div class="FooterContainer">
                    <div></div>
                    <div>
                        <p style="color: black">DropBox + https://www.the-qrcode-generator.com</p>
                        <a style="color: black">Rendelés és Szállítási információk</a>
                        <br>
                        <a style="color: black">Rólunk</a>
                    </div>
                        <div class=" SocialIcons">

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