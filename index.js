
          var menu1= document.getElementById('menu1') , nav = document.getElementById('nav') , logo=document.getElementById('logo') , tog=document.getElementById('dog')  , trans= tog.children; 
        
         let ecran= window.innerWidth ; 
         if (ecran<767){
                nav.style.height='100px';
         }
          tog.addEventListener('click' , T_nav)
       
          function T_nav(){
          if (nav.style.height=='100px'){
            nav.style.height='11cm' ; 
            trans[0].style.transform='rotate(45deg) translate(10px ,10px)' ;
         trans[1].style.transform='rotate(-45deg)' ;
          trans[2].style.opacity='0'
          menu1.style.transform='translateX(-78%)';
          menu1.style.top='0px' ; 
          
          
          }
           else if  (nav.style.height=='11cm'){
            nav.style.height='100px';
             trans[0].style.transform='rotate(0deg) translate(0px ,0px)' ;
         trans[1].style.transform='rotate(0deg)' ;
          trans[2].style.opacity='1' ;
           menu1.style.top='60px' ;
        
          }
          }
