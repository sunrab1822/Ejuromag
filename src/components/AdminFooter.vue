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
                        <p>DropBox + https://www.the-qrcode-generator.com</p>
                        <p>Rendelés és Szállítási információk</p>
                        
                        <p>Rólunk</p>
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
        p{
            color: black;
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