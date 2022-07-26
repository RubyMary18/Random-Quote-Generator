$(document).ready(function(){
    $("p,a").addClass("rand");
      var quotes = ["Imperfection is beauty, madness is genius and it’s better to be absolutely ridiculous than absolutely boring", 
      "If you only read the books that everyone else is reading, you can only think what everyone else is thinking", 
      "Keep reading books, but remember that a book is only a book, and you should learn to think of yourself", 
      "Be thankful for what you are now and keep fighting for what you want to be tomorrow", 
      "Enjoy the little things in life, one day you'll look back and realize they were the big things"];
      var authors = ["-Neil Gaiman",
       "_Haruki Murakami", 
       "_Maxim Gorky",
       "_Anonymous",
       "_Kurt Vonnegut"];
       var bgcolor = ["#FFAEBC", "#67820D", "#81B622", "#A3EBB1","#F8AFA6"];
    $("#new-quote").click(function(){
        randomnum = Math.floor(Math.random()*quotes.length);
      $(".rand").css("color",bgcolor[randomnum]);
      $(":button").css("color","white");
      $(":button").css("background-color",bgcolor[randomnum]);
      document.getElementById('text').innerHTML = quotes[randomnum];
      document.getElementById('author').innerHTML = authors[randomnum];
      document.getElementById('body').innerHTML = $("body").css("background-color",bgcolor[randomnum]);
      
    });   
  });
  