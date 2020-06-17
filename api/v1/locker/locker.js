var dataQuery = window.location.search;
var urlParams = new URLSearchParams(dataQuery);
var auth = urlParams.get('auth')
var alphabetical = urlParams.get('alphabetical')
var username = urlParams.get('i')
var lockerdata;
var lockerArray = [];

window.onload = function() {
    $.support.cors = true;
    $.getJSON('https://db.neelr.dev/api/ae6530ca62cfa165bbc685/locker/' + auth, function(data) {
        var m = data.cosmetics.substr(1);
        console.log(m);
        lockerdata = m;
        lockerArray = lockerdata.split(",");
      console.log(alphabetical);
    if (alphabetical == "true") {
        document.getElementById('colored').innerHTML = "To go back to the non-alphabetical version of your locker, click <a style='color:lightblue' href='javascript:dealphabeticize()'>here.</a>";
        lockerArray.sort();
    }
    document.getElementById('username').innerHTML = username + "'s Locker";
    lockerArray.forEach(function(cosmetic) {
        var rarity;
        // Rarity Determination START //
        if (cosmetic == '2000GAMEMODEL') {
            rarity = 'mythic';
        } else
        if (cosmetic == '3DGLASSES') {
            rarity = 'epic';
        } else
        if (cosmetic == '404') {
            rarity = 'epic';
        } else
        if (cosmetic == '4THOFJULYOUTFIT') {
            rarity = 'legendary';
        } else
        if (cosmetic == '8-BITDEFAULT') {
            rarity = 'uncommon';
        } else
        if (cosmetic == '8-BITDRIFTRIDER') {
            rarity = 'mythic';
        } else
        if (cosmetic == '8-BITDRIFTFIRESTARTER') {
            rarity = 'mythic';
        } else
        if (cosmetic == '8-BITGLASSES') {
            rarity = 'rare';
        } else
        if (cosmetic == '8-BITMOHAWK') {
            rarity = 'epic';
        } else
        if (cosmetic == '8-BITPIXELKNIGHT') {
            rarity = 'legendary';
        } else
        if (cosmetic == '8-BITUNDEAD') {
            rarity = 'rare';
        } else
        if (cosmetic == 'ABOXELDER') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ABOMINATION') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ABYSSALDEMON') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ACEOCLUBS') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ACEODIAMONDS') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ACEOHEARTS') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ACEOSPADES') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ACIDPOTION') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ACORNKNIGHT') {
            rarity = 'epic';
        } else
        if (cosmetic == 'AFFLICTEDCHAMPION') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'AFROBLUE') {
            rarity = 'rare';
        } else
        if (cosmetic == 'AFROORANGE') {
            rarity = 'rare';
        } else
        if (cosmetic == 'AFROPEACH') {
            rarity = 'rare';
        } else
        if (cosmetic == 'AFROPEACH') {
            rarity = 'rare';
        } else
        if (cosmetic == 'AFROPURPLE') {
            rarity = 'rare';
        } else
        if (cosmetic == 'AFRORED') {
            rarity = 'rare';
        } else
        if (cosmetic == 'AFROSKY') {
            rarity = 'rare';
        } else
        if (cosmetic == 'AFROWHITE') {
            rarity = 'rare';
        } else
        if (cosmetic == 'AGGROLOBSTER') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'AIRDAREDEVIL') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ALIENARMORED') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ALIENASTRONAUT') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ALIENBEAST') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ALIENBRAIN') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ALIENHUNTRESS') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ALIENMASK2') {
            rarity = 'rare';
        } else
        if (cosmetic == 'ALIENPATROLLER') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ANCIENTDRAGONSAMURAI') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ANCIENTLIGHTNINGDRAGON') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ANCIENTMAJESTICLION') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ANDROID') {
            rarity = 'rare';
        } else
        if (cosmetic == 'ANDROID2') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ANEMONE') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ANGELICKNIGHT') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ANGLERFISH2') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ANGRYSTEAMEDBUN') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'ANKYLOSAUR') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'ANKYLOSAURFOSSIL') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ANNIVERSARYHAT') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'ANXIOUSTOUCAN') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'APEP') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'APPLECIDER') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'APRICOTOCTO') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'AQUAANGELFISH') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'AQUABREATHER') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'AQUASEADRAGON') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'ARCHWIZARD') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ARCTICEXPLORER') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ARCTICSOLDIER') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'ARCTICWANDERER') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'ARES') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ARMOREDSTALLION') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ARMYANTMAJOR') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'ARTHATBLUE') {
            rarity = 'uncommon';
        } else
        if (cosmetic == 'ARTHATPURPLE') {
            rarity = 'uncommon';
        } else
        if (cosmetic == 'ARTHATRED') {
            rarity = 'uncommon';
        } else
        if (cosmetic == 'ARTHATVIOLET') {
            rarity = 'uncommon';
        } else
        if (cosmetic == 'ARTHATYELLOW') {
            rarity = 'uncommon';
        } else
        if (cosmetic == 'ASHENSLOTH') {
            rarity = 'mythic';
        } else
        if (cosmetic == "BANDTEAL") {
            rarity = "uncommon";
        } else
        if (cosmetic == 'BONEMACE') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'CALMJELLY') {
            rarity = 'epic';
        } else
        if (cosmetic == 'CAMOSKY') {
            rarity = 'rare';
        } else
        if (cosmetic == 'CONSTRUCTIONAQUA') {
            rarity = 'rare';
        } else
        if (cosmetic == 'COWBOYBROWN') {
            rarity = 'uncommon';
        } else
        if (cosmetic == 'CRACKEDEGG') {
            rarity = 'epic';
        } else
        if (cosmetic == "DEEPDIVINGPACK") {
            rarity = "mythic";
        } else
        if (cosmetic == 'DISCOBALLER') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ENGINEERLASERCUTTER') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'FIREAXE') {
            rarity = 'epic';
        } else
        if (cosmetic == 'FERALWENDIGO') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'GALACTICHUNTER') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'GHOSTLYSAMURAI') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'GHOSTTRACKER') {
            rarity = 'epic';
        } else
        if (cosmetic == 'GLORIOUSCOCKATOO') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'GLOWYNOSE') {
            rarity = 'rare';
        } else
        if (cosmetic == 'HATHOR') {
            rarity = 'rare';
        } else
        if (cosmetic == 'HAZARDSPACESUIT') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'HYDROPACK') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'INSANEVIKINGCUTAXE') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'JADEVENOMOUSDAGGER') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'JELLYFISH') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'JOKESTERCLEANER') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'KILLBOT') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'KITTYPINK') {
            rarity = 'uncommon';
        } else
        if (cosmetic == 'LASERSABERBLUE') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'LIGHTTUBESWORDORANGE') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'MAJORANT') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'MAN-EATERPLANT') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'MICCREAM') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'MOONDRAGONWEE') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'MUMMYCAPE') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'PENGUINBLADE') {
            rarity = 'legendary';
        } else
        if (cosmetic == 'RACCOONGRAY') {
            rarity = 'rare';
        } else
        if (cosmetic == 'RADGUITAR') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'REDGALAXYGUARDIAN') {
            rarity = 'epic';
        } else
        if (cosmetic == 'ROMANGOLDB') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'RUBYSPEAR') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'SKELETON2') {
            rarity = 'rare';
        } else
        if (cosmetic == 'SNOWGEARSKYO') {
            rarity = 'epic';
        } else
        if (cosmetic == 'SPACECITIZENRECRUIT') {
            rarity = 'rare';
        } else
        if (cosmetic == 'SPACEMONKEY') {
            rarity = 'epic';
        } else
        if (cosmetic == 'SQUIDALIEN') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'STONEFOSSIL') {
            rarity = 'epic';
        } else
        if (cosmetic == 'TENTACLESABRE') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'TIMEDETECTOR') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'TOUCANWINGS') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'UNDYINGCOMMANDERCLOAK') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'VENOMSPACESUIT') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'VINEDBLADE') {
            rarity = 'mythic';
        } else
        if (cosmetic == 'WINGEDBASEBALLCAP') {
            rarity = 'epic';
        } else
        if (cosmetic == 'WITCH') {
            rarity = 'mythic';
        } else {
            rarity = "common"
        }
        // Rarity Determination END //
          document.getElementById('footer').innerHTML = lockerArray.length.toString() + "/250 slots used<br><br><font color='yellow'>Want to remove the slot limit?<br><a style='color:yellow;' href='https://www.patreon.com/zombsbot'>Donate</a> to unlock Zombs Premium for infinite locker slots!</font><br>";
        document.getElementById('fulllocker').innerHTML += "<div class='box-" + rarity + "'><img title='" + cosmetic + " (" + rarity + ")' width='95%' src='https://jamzzz.github.io/RemoteAssets/resources2/" + cosmetic + ".png'><p style='font-size:80%;' id='item-" + rarity + "'>" + cosmetic + "</p></div>";
        console.log("Rendered " + cosmetic);
    });
})};
