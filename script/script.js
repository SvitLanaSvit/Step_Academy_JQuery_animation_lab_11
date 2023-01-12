$(()=>{
    var boxWidth = $("#dopMenu").width();
    console.log(boxWidth);

    var colorP = $("#dopMenu p").css("color");
    console.log(colorP);

    const elem = document.getElementById("dopMenu");
    elem.style["width"] = "0px";
    $("#dopMenu p").css("color", 'transparent');

    isOpen = false;

    $("#menu").bind("click", function(){
        if(!isOpen){
            $("#dopMenu").animate({
                width: boxWidth
            }, 600);
    
            $('#dopMenu p').css('color', 'white');
            isOpen = true;
        }
        else{
            $("#dopMenu").animate({
                width: "0px"
            });
    
            $('#dopMenu p').css('color', 'transparent');
            isOpen = false;
        }
    });
});

//-----------------2--------------------
const firstStar = document.getElementById("firstStar");
$(()=>{
    $(".star").click(function(){
        //console.log(this);
        $(this).css('color', 'orange');

        var listPrev = $(this).prevAll();
        listPrev.each(function(index, elem){
            //console.log(elem);
            $(elem).css('color', 'orange');
        });

        var listNext = $(this).nextAll();
        listNext.each(function(index, elem){
            //console.log(elem);
            $(elem).css('color', 'black');
        })
    });
})