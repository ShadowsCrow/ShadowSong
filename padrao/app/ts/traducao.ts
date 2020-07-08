btnL.click(function(){

    $.getJSON(gerarlink(), function(data){
        let sizeArray = <Array<object>>data.mus;

        //console.log(lyric.length)
        if(sizeArray){
            let lyric = data.mus[0].translate[0].text;
            console.log(data.mus)
            let lyrics = lyric.replace(/[,]/g , "<br>")
            corpo(lyrics);
            btnL.removeClass("some");
            btnL.addClass("parece");
        }
        else{
            corpo("Algo deu errado");
            btnL.removeClass("parece");
            btnL.addClass("some");

        }
    });

});
