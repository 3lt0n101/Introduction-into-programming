$(document).ready(function () {
    const friends = ["Thabo", "Zanele", "Kagiso", "Lerato", "Elton bro"];
  
    $("h1").text("My friends");
  
    for (let i = 0; i < friends.length; i++) {
      const $p = $("<p>").text(friends[i]);
      $p.hide().appendTo("body").fadeIn(1000);
      $p.append(" smells!");
    }
  });
  