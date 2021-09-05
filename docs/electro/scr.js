$( document ).ready(function() {
    $('.trigger').click(function() {
       $('.modal-wrapper').toggleClass('open');
      $('.page-wrapper').toggleClass('blur');
       return false;
    });
  });

//   var button = document.querySelector("button");
//   button.addEventListener("click", function() {
//     console.log("Нажата кнопка 2");
//   });

//   var button = document.querySelector("btn1");
//   button.addEventListener("click", function() {
//     console.log("Нажата кнопка 1");
//   });