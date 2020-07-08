let btn = $("#btns");
let btnL = $("#btnL");
let corpo = $("#text").html.bind($("#text"));




function gerarlink():string{
    let artist = <string>$('#artist').val();
    let song = <string>$("#song").val();

    artist = artist.replace(" ", "+");
    song = song.replace(" ", "+");

    let apikey = "660a4395f992ff67786584e238f501aa";

    let link ="https://api.vagalume.com.br/search.php?apikey="+
    apikey + 
    "&art=" + artist +
    "&mus=" + song;

    return link;
}



btn.click(async function(){
    //console.log(link);   
    $.getJSON(gerarlink(), function(data){
        let sizeArray = <Array<object>>data.mus;

        //console.log(lyric.length)
        if(sizeArray){
            let lyric = <string>data.mus[0].text
            let lyrics = lyric.replace(/[,]/g, "<br>")
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


