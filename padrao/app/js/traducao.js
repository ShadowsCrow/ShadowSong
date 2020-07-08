"use strict";
btnL.click(function () {
    $.getJSON(gerarlink(), function (data) {
        var sizeArray = data.mus;
        //console.log(lyric.length)
        if (sizeArray) {
            var lyric = data.mus[0].translate[0].text;
            console.log(data.mus);
            var lyrics = lyric.replace(/[,]/g, "<br>");
            corpo(lyrics);
            btnL.removeClass("some");
            btnL.addClass("parece");
        }
        else {
            corpo("Algo deu errado");
            btnL.removeClass("parece");
            btnL.addClass("some");
        }
    });
});
