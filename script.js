
function startTime(){
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();

    m=checkTime(m);
    s=checkTime(s);

    document.getElementById('txt').innerHTML=h+":"+m+":"+s;

    t=setTimeout('startTime()',500);

}

function data(){
        var data = new Date();
        var dia = String(data.getDate()).padStart(2, '0');
        var mes = String(data.getMonth() + 1).padStart(2, '0');
        var ano = data.getFullYear();
        dataAtual = dia + '/' + mes + '/' + ano;
        document.getElementById('data').innerHTML= dataAtual;
}

function checkTime(i){
    if (i<10)
    {
    i="0" + i;
    }
    return i;
}


    var i = Math.floor(Math.random() * (10 - 1) + 1);
    var images = []; //array
    var time = 60000; // time in millie seconds

function backgroundNatal(){
    //images
    
    images[0] = "url(https://i.pinimg.com/originals/85/ed/5f/85ed5f57c80a632496a4b7d73c0131c1.jpg)";
    images[1] = "url(https://images2.alphacoders.com/775/775291.jpg)";
    images[2] = "url(https://wallpaper.dog/large/20422492.png)";
    images[3] = "url(https://images8.alphacoders.com/724/724425.png)";
    images[4] = "url(https://get.wallhere.com/photo/anime-girls-Santa-costume-Christmas-Tree-nerv110-couple-Christmas-presents-thigh-highs-1969739.jpg)";
    images[5] = "url(https://www.wallpaperbetter.com/wallpaper/97/224/936/anime-girls-kantoku-christmas-miyaguchi-hiromi-miyaguchi-kanna-miyaguchi-kei-christmas-2K-wallpaper.jpg)";
    images[6] = "url(https://cdn.wallpapersafari.com/1/81/qAy9bf.jpg)";
    images[7] = "url(https://wallpapers.com/images/hd/girl-with-christmas-uniform-anime-christmas-wsrshmvtflr9z2wa.jpg)";
    images[8] = "url(https://images4.alphacoders.com/205/205516.jpg)";
    images[9] = "url(https://cdn.wallpapersafari.com/50/7/S9CZQa.png)";
    images[10] = "url(https://cdn.wallpapersafari.com/25/44/fI54eb.png)";
    images[11] = "url(https://wallpapers.com/images/file/girl-characters-anime-christmas-g7tvgpkru929hcym.jpg)";
    images[12] = "url(https://papers.co/wallpaper/papers.co-ag29-christmas-brunette-hair-anime-art-36-3840x2400-4k-wallpaper.jpg)";
    images[13] = "url(https://www.wallpaperbetter.com/wallpaper/189/362/432/anime-girls-christmas-yosuga-no-sora-kasugano-sora-1080P-wallpaper-middle-size.jpg)";
    images[14] = "url(https://rare-gallery.com/fullwalls/22963-Hibiki-Kancolle-Akatsuki-KanColle-Inazuma-Kancolle.png)";
    images[15] = "url(https://funart.pro/uploads/posts/2022-08/1660033865_28-funart-pro-p-anime-rozhdestvo-art-krasivo-67.jpg)";
    images[16] = "url(https://wallpapers.com/images/hd/three-anime-girl-christmas-characters-pmakuugr5qsx1f5o.jpg)";
    images[17] = "url(https://wallpapers.com/images/hd/vocaloid-anime-christmas-amwttznxplxdkykx.jpg)";
    images[18] = "url(http://i2.hdslb.com/bfs/archive/dd7c2b5228dc2ac0685fbde20a08a7883c7ee854.jpg)";
    images[19] = "url(https://rare-gallery.com/uploads/posts/4574285-anime-anime-girls-vocaloid-hatsune-miku-christmas.jpg)";
    images[20] = "url(http://pm1.narvii.com/7060/947799fd736cf0f244cda6b7dbf0fc510532eeear1-2048-1152v2_uhq.jpg)";//miku
    images[21] = "url(https://i.pinimg.com/originals/bf/3b/58/bf3b58591dd0a440655cdf5bf0806519.jpg)";//miku
    images[22] = "url(https://i.redd.it/f6jhruix4r781.png)";
    images[23] = "url(https://rare-gallery.com/mocahbig/1376862-genshin-impact-game-christmas-tree-4k-pc-wallpaper.jpg)";
    images[24] = "url(https://wallpapers.com/images/hd/anime-christmas-girl-with-teddy-bear-e2t8x9jsxsftg2en.jpg)";
    images[25] = "url(https://i2.wp.com/i.pinimg.com/originals/9c/45/2b/9c452b2bbe0372d72d2931a131032c73.jpg)";
    images[26] = "url(https://i.pinimg.com/originals/02/c4/a8/02c4a83735ea643a8f9b05cdf5cd3b0e.jpg)";
    

    //function

    //var el = document.getElementById('wallpaper');
    //el.style.backgroundImage = images[i];
    document.getElementById('wallpaper').style.backgroundImage  = images[i]
    if (i < images.length - 1) {
        var slide = images.length;

        i = Math.floor(Math.random() * slide);
        //i++;
    } else {
        i = 0;
    }
    repetir = setTimeout('backgroundNatal()', time);

    //window.onload = backgroundNatal;

}

function backgroundAnime(){
    //images
    
    images[0] = "url()";
    images[1] = "url()";
    images[2] = "url()";
    images[3] = "url()";
    images[4] = "url()";
    images[5] = "url()";
    images[6] = "url()";
    images[7] = "url()";
    images[8] = "url()";
    images[9] = "url()";
    images[10] = "url()";
    images[11] = "url()";
    images[12] = "url()";
    images[13] = "url()";
    images[14] = "url()";
    images[15] = "url()";
    images[16] = "url()";
    images[17] = "url()";
    images[18] = "url()";
    images[19] = "url()";
    images[20] = "url()";
    images[21] = "url()";
    images[22] = "url()";
    images[23] = "url()";
    images[24] = "url()";
    images[25] = "url()";
    images[26] = "url()";

    //function

    //var el = document.getElementById('wallpaper');
    //el.style.backgroundImage = images[i];
    document.getElementById('wallpaper').style.backgroundImage  = images[i]
    
    if (i < images.length - 1) {
        var slide = images.length;

        i = Math.floor(Math.random() * slide);
        //i++;
    } else {
        i = 0;
    }
    repetir = setTimeout('backgroundNatal()', time);

    //window.onload = backgroundNatal;

}

function backgroundKanna(){
    //images
    images[0] = "url(https://www.itl.cat/pngfile/big/122-1226972_kanna-kamui-4k-manga-kobayashi-san-chi-no.jpg)";
    images[1] = "url(https://i.pinimg.com/originals/6a/ff/74/6aff7426bdaf8f67ac4f8086d4efc2a3.jpg)";
    images[2] = "url(https://i.pinimg.com/originals/13/55/2e/13552eed6429ea33a126a14506889747.jpg)";
    images[3] = "url(https://images6.alphacoders.com/837/837932.jpg)";
    images[4] = "url(https://images4.alphacoders.com/909/909481.png)";
    images[5] = "url(https://i.kym-cdn.com/photos/images/original/001/240/082/301.gif)";
    images[6] = "url(https://rare-gallery.com/mocahbig/411315-Kobayashi-san-Chi-no-Maid-Dragon-Kanna-Kamui-Kobayashi-san-Chi-no-Maid-Dragon.png)";
    images[7] = "url(https://i.pinimg.com/originals/0e/f6/63/0ef6636a81f1758477e24b590ac28efb.jpg)";
    images[8] = "url(https://i.pinimg.com/originals/27/43/4e/27434e741f525f6be438670e15b5b690.jpg)";
    images[9] = "url(https://i.pinimg.com/originals/ef/16/7b/ef167b40e8f1c806488933e5a9e0cdb6.jpg)";
    images[10] = "url(https://wallpapersmug.com/download/1024x768/fad743/charging-anime-girl-Kanna-Kamui.jpg)";
    images[11] = "url(https://wallpx.com/image/2021/04/kimono-kobayashi-san-chi-no-maid-dragon-kanna-kamui.jpg)";
    images[12] = "url(https://i.pinimg.com/originals/ac/37/f0/ac37f043df5f9bb7e8f80ec6b5f0d1e6.jpg)";
    images[13] = "url(http://i0.hdslb.com/bfs/archive/0ed4a0d9601777b34a5f33601e908587cb44410b.jpg)";
    images[14] = "url(https://i.pinimg.com/originals/1e/0c/62/1e0c627fb97e87a6aa67f1fbfc85bba1.jpg)";
    images[15] = "url(https://mobimg.b-cdn.net/v3/fetch/af/af7f622769e5c4cd7ea70e7c61d49d7f.jpeg)";
    images[16] = "url(https://m.media-amazon.com/images/M/MV5BYWNlZDAwMDktOTdiNS00MjUyLTgwYmMtZTVkNTRiMGFlOWNlXkEyXkFqcGdeQXVyMTA0ODAxNzcy._V1_.jpg)";
    //images[17] = "url()";
    //images[18] = "url()";
    //images[19] = "url()";
    //images[20] = "url()";
    //images[21] = "url()";
    //images[22] = "url()";
    //images[23] = "url()";
    //images[24] = "url()";
    //images[25] = "url()";
    //images[26] = "url()";

    //function

    //var el = document.getElementById('wallpaper');
    //el.style.backgroundImage = images[i];
    document.getElementById('wallpaper').style.backgroundImage  = images[i]
    
    if (i < images.length - 1) {
        var slide = images.length;

        i = Math.floor(Math.random() * slide);
        //i++;
    } else {
        i = 0;
    }
    repetir = setTimeout('backgroundNatal()', time);

    //window.onload = backgroundNatal;

}


function backgroundJahy(){
    //images
    
    images[0] = "url(https://www.goodjobmedia.com/wp-content/uploads/2021/08/Jahy_02-Premux-80FCD51E_001_18277.jpg)";
    images[1] = "url(https://m.media-amazon.com/images/M/MV5BZDVmN2I3ZGQtMTY1ZC00NWJlLTgwMTgtN2UxMWM2MmIxZjY2XkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg)";
    images[2] = "url(https://m.media-amazon.com/images/M/MV5BNDNhNTJhYTEtMmZiZS00ZDk0LWFiMzAtOTA4MjdkMTQ3NzdmXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg)";
    images[3] = "url(https://simkl.in/episodes/12/12086060a17ce4e038_w.jpg)";
    images[4] = "url(https://en.datosjam.net.pe/wp-content/uploads/2022/09/portada_jahy-sama-15.jpg)";
    images[5] = "url(https://cdn.cadelta.ru/media/covers/8/id8586/cover.jpg)";
    images[6] = "url(https://www.animegeek.com/wp-content/uploads/2021/12/The-Great-Jahy-Will-Not-Be-Defeated-Season-2-release-date-Jahy-sama-wa-Kujikenai-Season-2-Anime-Edited.jpg)";
    images[7] = "url(https://i.redd.it/nofkf1raogx71.jpg)";
    images[8] = "url(https://fr.web.img6.acsta.net/r_1280_720/pictures/21/08/16/14/59/0157389.jpg)";
    images[9] = "url(https://fr.web.img6.acsta.net/r_1280_720/pictures/21/10/05/15/06/2472547.jpg)";
    images[10] = "url(https://64.media.tumblr.com/62519f6b1779d70d293df30969406510/475c3f2af377e0d2-fa/s1280x1920/04d3dec803b59b7cc6b99f7d6b895d5947a8c7dc.jpg)";
    images[11] = "url(https://media.tenor.com/6FYQQoUiCTQAAAAC/jahy-sama-excited-jahy-sama-embrace.gif)";
    //images[12] = "url()";
    //images[13] = "url()";
    //images[14] = "url()";
    //images[15] = "url()";
    //images[16] = "url()";
    //images[17] = "url()";
    //images[18] = "url()";
    //images[19] = "url()";
    //images[20] = "url()";
    //images[21] = "url()";
    //images[22] = "url()";
    //images[23] = "url()";
    //images[24] = "url()";
    //images[25] = "url()";
    //images[26] = "url()";

    //function

    //var el = document.getElementById('wallpaper');
    //el.style.backgroundImage = images[i];
    document.getElementById('wallpaper').style.backgroundImage  = images[i]
    
    if (i < images.length - 1) {
        var slide = images.length;

        i = Math.floor(Math.random() * slide);
        //i++;
    } else {
        i = 0;
    }
    repetir = setTimeout('backgroundNatal()', time);

    //window.onload = backgroundNatal;

}



function backgroundUmaru(){
    //images
    
    images[0] = "url(https://i.pinimg.com/originals/64/f2/96/64f2966943a7e5ff181fce7f3e738538.jpg)";
    images[1] = "url(https://cdn.wallpapersafari.com/65/15/tZ7IPE.jpg)";
    images[2] = "url(https://dslntlv9vhjr4.cloudfront.net/posts_images/X9ANGOtqaZ4Xn.png)";
    images[3] = "url(https://ph-static.z-dn.net/files/d9b/e2a94af1793c0b49ea3c063db656cfdc.jpg)";
    images[4] = "url(https://cafeanimelair2.files.wordpress.com/2017/12/himc3b4to-umaru-chan-9.jpeg)";
    images[5] = "url(https://i.pinimg.com/originals/a2/36/cb/a236cb8b1dfcca29b78dcbd8db881f67.jpg)";
    images[6] = "url(https://i.pinimg.com/originals/c0/c8/28/c0c82881055237a86b32d9291cf31bbd.jpg)";
    images[7] = "url(https://1.bp.blogspot.com/-e1zf_GwudsM/WdhQJKGhMLI/AAAAAAAAB-k/kQOuA8pzKtsxBGNL74JqlAGd4_mBkkUTwCLcBGAs/s1600/Umaru-chan.png)";
    images[8] = "url(https://ae01.alicdn.com/kf/U3542010f815d46d3b9d29d112e163facq.jpg)";
    images[9] = "url(https://konachan.com/jpeg/104e698ba4fe2d8c8def323f3e74b6de/Konachan.com%20-%20204596%20barefoot%20blonde_hair%20brown_eyes%20cape%20chibi%20doma_taihei%20doma_umaru%20eventh7%20glasses%20himouto%21_umaru-chan%20hoodie%20long_hair%20nekoronbusu.jpg)";
    images[10] = "url(https://pm1.narvii.com/7156/0ff82c13585cd634d8924ac850bc37bb64940b92r1-1200-675v2_hq.jpg)";
    images[11] = "url(https://k60.kn3.net/taringa/2/4/8/3/0/5/45/dressius/CC1.jpg)";
    images[12] = "url(https://i.pinimg.com/originals/dd/89/a5/dd89a5287d3a0fccd3bc0e7a4aa064a6.jpg)";
    images[13] = "url(https://pt-static.z-dn.net/files/dd4/abcdf9688c3864d497bbe1c3914f2a75.jpg)";
    images[14] = "url(https://livedoor.blogimg.jp/chocochoco0202/imgs/a/7/a7af1bb9.jpg)";
    images[15] = "url(http://blog-imgs-64.fc2.com/y/a/r/yaraon/xf58637.jpg)";
    images[16] = "url(https://pic-bstarstatic.akamaized.net/ugc/d4429e78c482d270b6062299360e2bab836104c9.jpg@720w_405h_1e_1c_1f.webp)";
    //images[17] = "url()";
    //images[18] = "url()";
    //images[19] = "url()";
    //images[20] = "url()";
    //images[21] = "url()";
    //images[22] = "url()";
    //images[23] = "url()";
    //images[24] = "url()";
    //images[25] = "url()";
    //images[26] = "url()";

    //function

    //var el = document.getElementById('wallpaper');
    //el.style.backgroundImage = images[i];
    document.getElementById('wallpaper').style.backgroundImage  = images[i]
    
    if (i < images.length - 1) {
        var slide = images.length;

        i = Math.floor(Math.random() * slide);
        //i++;
    } else {
        i = 0;
    }
    repetir = setTimeout('backgroundNatal()', time);

    //window.onload = backgroundNatal;

}
