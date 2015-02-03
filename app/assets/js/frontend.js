$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 0});
    
    $('.scrollspy').scrollSpy();
    $('.scrollspy').on('scrollSpy:enter', function(a,b,c){
        console.log(a,b,c);
    })
});