$(".button1").click(function() {
    $(".hidden").text("Double Click on image");
});

$(".treasurepic").dblclick(function() {
    $(".hidden").text("Click On Happy Face");
    $(".hidden").append("<br><img class='happyface' src='https://images-na.ssl-images-amazon.com/images/I/51zLZbEVSTL._SX425_.jpg'>");
});
 $("body").css("background-color","pink");



