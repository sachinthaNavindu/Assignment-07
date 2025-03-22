$(document).ready(function(){
    console.log('ready');

    function changeLetters(){
        let letters = $(".letters").map(function(){
            return $(this).text();
        }).get();

        letters.unshift(letters.pop());

        $(".letters").each(function(index){
            $(this).text(letters[index]);
        });
    }
        setInterval(changeLetters,1000);
});