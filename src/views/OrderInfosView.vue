<template>
    <div class="container-fluid">
        <h1 class="h1Custom">Rendelés és szállítás</h1>
        <h2 id="FizetesiModok" class="h2Custom">FIZETÉSI MÓDOK: </h2>
        <ol>
            <li>Utánvét</li>
            <p>Az áru ellenértékét a csomag kézbesítésekor kell megfizetni a futárnál. Ezzel a fizetési móddal a shop teljes kínálatának ellenértéke fizethető. A futárnál az utánvét összegét csak készpénzzel lehet fizetni, bankkártyával nem.</p>

            <li>Banki előreutalás</li>
            <p>Amennyiben szeretne előreutalással fizetni, ezen igényét kérjük a megrendelés megjegyzés rovatában jelezze. A megrendelés feldolgozása után módosítjuk a fizetési módot. Az összes megrendelt termék központi raktárra érkezését követően proforma számlát küld a rendszer, amin minden, az utaláshoz szükséges adatot megtalál. Az összeg jóváírását követően a rendszer automatikusan elindítja a csomagot. A csomag kézbesítése legkésőbb a jóváírást követő második munkanapon esedékes. Tájékoztatjuk tisztelt vásárlóinkat, hogy minden esetben a vásárolt árunak megfelelő pontos számlát is küldünk, ezt kérni külön nem kell.</p>

            <li>Bankkártyás fizetés</li>
            <p>A CardPay fizetés révén biztonságosan vásárolhat áruházunkban. A kiválasztott termékek megrendelése után a Vevőt a Tatra Bank biztosított weboldalára irányítjuk, ahol a bank által használt, titkosítással lebonyolított tranzakción keresztül fizethet bankkártyájával. A rendszer magyarországi bankok által kiadott VISA és MasterCard típusú kártyákat fogad el.</p>

            <p>Fontos! A kizárólag elektronikus használatra kibocsátott bankkártyákat csak abban az esetében fogadhatjuk el, amennyiben annak használatát a kártyát kibocsátó bank engedélyezi! Kérjük, érdeklődjön bankjánál, hogy az Ön kártyája felhasználható-e interneten keresztül lebonyolítandó vásárláshoz.</p>

            <p>Abban az esetben, ha olyan terméket próbál bankkártyával kifizetni, mely a termék adatlapja szerint jelenleg nincs raktáron (központi vagy külső raktár), a bankkártyás fizetés nem lehetséges, mivel rendelés teljesítése elhúzódhat. Bankkártyás, online fizetéssel csak a 100 EUR összértékhatárt meg nem haladó megrendelések egyenlíthetők ki. Előrendeléseket nem lehet bankkártyával fizetni, mivel azon termékek ára és megjelenési dátuma a kiadó jogaiból fakadóan bármikor változhat, amiért cégünk felelősséget nem tud vállalni.</p>
        </ol>

        <h2 id="SzallitasiModok" class="h2Custom">SZÁLLÍTÁSI MÓDOK:</h2>
        <ol>
            <li>Futár által való kézbesítés</li>
            <p>A termékek kiszállítását logisztikai partnereink és munkatársaink a hét minden munkanapján végzik. A csomag kézbesítése általában a raktárunkról való kiszállítást követő munkanapon történik. A futárszolgálat és mi is emailben értesítjük a csomag érkezéséről a címzettet, rendszerint a kézbesítést megelőző munkanapon. A kézbesítés napján a futárszolgálat a kézbesítés előtt SMS - t küld, míg a futár telefonon is értesíti a címzettet a csomag érkezéséről.Az utánvétes csomag <span class="vastag">szállítás díja 1.590,- Ft</span> / csomag CardPay online kártyás fizetés esetén a <span class="vastag"> szállítás díja 1.190,- Ft</span> / csomag</p>

            <li>Személyes átvétel csomagátvételi ponton</li>
            <ul>
                <li>A Packeta egy profi csomagküldő hálózat, mely Magyarországon jelenleg több, mint 2350 átvételi ponttal rendelkezik (beleértve a több, mint 840 csomagautomatát), melyekre gyorsan és olcsón kiszállíttathatod a megrendelt árut. A szabványos csomag <span class="vastag">kiszállításának ára mindössze  690 Ft</span> a <span class="vastag">Z-BOX csomagautomatákba, az átvételi pontokra pedig 990 Ft</span> a Packeta segítségével.</li>
                <li>A Magyar Posta általában a csomagnak a szállítmányozótól történő átvétele utáni 1-3 napon belül szállítja ki a megrendelést a kiválasztott postahivatalba, postapontra vagy csomagautomatához. <span class="vastag">Ár azonnali fizetés esetén: 990 Ft, Ár utánvétes fizetés esetén: 1 480 Ft</span></li>
            </ul>

        </ol>

    </div>
</template>

<script setup>

</script>

<style scoped>

p {
    font-size: 17px;
}
li {
    font-size: 25px;
    color: white;
}

ul > li{
    font-size: 17px;

}
</style>
