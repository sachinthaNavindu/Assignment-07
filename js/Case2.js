$(document).ready(function(){
    console.log('ready');

    function changeColor(){
        let boxes = $(".box").map(function(){
            return $(this).css("background-color");
        }).get();

        boxes.unshift(boxes.pop());

        $(".box").each(function(index){
            $(this).css("background-color",boxes[index]);
        });
    }
        setInterval(changeColor,1000);
});