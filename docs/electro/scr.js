

function yourFunction(obj) {
  
    var m = document.querySelector('#cnt');
     if (m != null)
     {
      m.remove();   
     }

     for(let i=0; i<100; i++)
      {
        if(obj.id=='btn'+i)
        {
          var cloned_cont = document.getElementById('ct'+i).cloneNode(true);
          cloned_cont.id = 'cnt';
          cloned_cont.classList.add("foo");                     
          document.querySelector('#fs').appendChild(cloned_cont);
        }
        
      }


    // var cloned_cont = document.getElementById('ct1').cloneNode(true);
    // cloned_cont.id = 'cnt';                      
    // document.querySelector('#fp').appendChild(cloned_cont);
     
    //  alert(obj.id)
    console.log(obj.id);

};


// function yourFunction2() {
  

//   var m = document.querySelector('#cnt');
//   if (m != null)
//   {
//     m.remove();   
//   }

//   // document.querySelector('#cnt').remove();
//   var cloned_cont = document.getElementById('ct2').cloneNode(true);
//   cloned_cont.id = 'cnt';                        
//   document.querySelector('#fp').appendChild(cloned_cont);

// };


// function yourFunction3() {
  

//   var m = document.querySelector('#cnt');
//   if (m != null)
//   {
//     m.remove();   
//   }

//   // document.querySelector('#cnt').remove();
//   var cloned_cont = document.getElementById('ct3').cloneNode(true);
//   cloned_cont.id = 'cnt';                        
//   document.querySelector('#fp').appendChild(cloned_cont);

// };


// function yourFunction4() {
  

//   var m = document.querySelector('#cnt');
//   if (m != null)
//   {
//     m.remove();   
//   }

//   // document.querySelector('#cnt').remove();
//   var cloned_cont = document.getElementById('ct4').cloneNode(true);
//   cloned_cont.id = 'cnt';                        
//   document.querySelector('#fp').appendChild(cloned_cont);

// };

// function yourFunction5() {
  

//   var m = document.querySelector('#cnt');
//   if (m != null)
//   {
//     m.remove();   
//   }

//   // document.querySelector('#cnt').remove();
//   var cloned_cont = document.getElementById('ct5').cloneNode(true);
//   cloned_cont.id = 'cnt';                        
//   document.querySelector('#fp').appendChild(cloned_cont);

// };


// function yourFunction6() {
  

//   var m = document.querySelector('#cnt');
//   if (m != null)
//   {
//     m.remove();   
//   }

//   // document.querySelector('#cnt').remove();
//   var cloned_cont = document.getElementById('ct6').cloneNode(true);
//   cloned_cont.id = 'cnt';                        
//   document.querySelector('#fp').appendChild(cloned_cont);

// };

// function yourFunction7() {
  

//   var m = document.querySelector('#cnt');
//   if (m != null)
//   {
//     m.remove();   
//   }

//   // document.querySelector('#cnt').remove();
//   var cloned_cont = document.getElementById('ct7').cloneNode(true);
//   cloned_cont.id = 'cnt';                        
//   document.querySelector('#fp').appendChild(cloned_cont);

// };

// function yourFunction8() {
  

//   var m = document.querySelector('#cnt');
//   if (m != null)
//   {
//     m.remove();   
//   }

//   // document.querySelector('#cnt').remove();
//   var cloned_cont = document.getElementById('ct8').cloneNode(true);
//   cloned_cont.id = 'cnt';                        
//   document.querySelector('#fp').appendChild(cloned_cont);

// };

// function yourFunction9() {
  

//   var m = document.querySelector('#cnt');
//   if (m != null)
//   {
//     m.remove();   
//   }

//   // document.querySelector('#cnt').remove();
//   var cloned_cont = document.getElementById('ct9').cloneNode(true);
//   cloned_cont.id = 'cnt';                        
//   document.querySelector('#fp').appendChild(cloned_cont);

// };



// // $( document ).ready(function() {
// //   $('.trigger').click(function() {
// //      $('.modal-wrapper').toggleClass('open');
// //     $('.page-wrapper').toggleClass('blur');
// //      return false;
// //   });
// // });