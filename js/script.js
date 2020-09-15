$(document).ready(function(){
    $(".hamburger").click(function(){
        $("body").toggleClass("active");
    })
    
    $("form").submit(function(e){
        event.preventDefault();
        alert("Thank You !");
    });
    
});

