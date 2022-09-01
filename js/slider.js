const switchbut1=document.querySelector('.switch-1');
const switchbut2=document.querySelector('.switch-2');
const switchbut3=document.querySelector('.switch-3');
const slider1=document.querySelector('.slider-1');
const slider2=document.querySelector('.slider-2');
const slider3=document.querySelector('.slider-3');

switchbut1.classList.add('current-switch');
slider1.classList.add('current-slider');
console.log('добавили класс в начале');

switchbut1.addEventListener('click',function(){
  if(!switchbut1.classList.contains('current-switch'))
  {
   if(switchbut2.classList.contains('current-switch'))
{
  switchbut2.classList.remove('current-switch');
  slider2.classList.remove('current-slider');
}
  if(switchbut3.classList.contains('current-switch'))
  {
    switchbut3.classList.remove('current-switch');
    slider3.classList.remove('current-slider');
  } 
 switchbut1.classList.add('current-switch');
 slider1.classList.add('current-slider');
}
});
switchbut2.addEventListener('click',function(){
    if(!switchbut2.classList.contains('current-switch'))
    {
      if(switchbut1.classList.contains('current-switch'))
      {
     switchbut1.classList.remove('current-switch');
     slider1.classList.remove('current-slider');
      }
     if(switchbut3.classList.contains('current-switch'))
     {
       switchbut3.classList.remove('current-switch');
       slider3.classList.remove('current-slider');
     }
    }
    switchbut2.classList.add('current-switch');
    slider2.classList.add('current-slider');
   }
   );
 switchbut3.addEventListener('click',function(){
    if(!switchbut3.classList.contains('current-switch'))
    {
    if(switchbut2.classList.contains('current-switch'))
    {
     switchbut2.classList.remove('current-switch');
     slider2.classList.remove('current-slider');
    }
     if(switchbut1.classList.contains('current-switch'))
     {
       switchbut1.classList.remove('current-switch');
       slider1.classList.remove('current-slider');
     }
    }
    switchbut3.classList.add('current-switch');
    slider3.classList.add('current-slider');
   }
   );   