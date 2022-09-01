const loginBut=document.querySelector('.footerbut');
const popup=document.querySelector(".popup");
const closeBut=popup.querySelector('.close-popup');
const form=popup.querySelector('.popup-form');
let username=popup.querySelector('.username');
let mail=popup.querySelector('.usermail');
let letter=popup.querySelector('.textarea');
let IsStorageSupport=true;
let storage;
    try{localStorage.getItem('username');}
    catch(err){
        IsStorageSupport=false;}
loginBut.addEventListener('click',function(){
    popup.classList.remove('hidden');
    popup.classList.add('popup-show');        
    if(storage){
        username.value=storage;
        letter.focus();    }
    else{username.focus();}    
});
closeBut.addEventListener('click',function(){
    popup.classList.add('hidden');
    username.classList.remove('popup-error');
    mail.classList.remove('popup-error');
    popup.classList.remove('popup-show');
});
window.addEventListener('keydown',function(evt){
    if(evt.keyCode===27){
    if(!popup.classList.contains('hidden')){
        evt.preventDefault();
        popup.classList.add('hidden');
        username.classList.remove('popup-error');
        mail.classList.remove('popup-error');
        popup.classList.remove('popup-show');
    }
    }
});
form.addEventListener('submit',function(evt){
    if(!username.value || !mail.value){        
        evt.preventDefault();
        console.log('Заполните поле имя и адрес'); 
        username.classList.remove('popup-error');
        mail.classList.remove('popup-error');  
     popup.offsetWidth = popup.offsetWidth; 
     username.classList.add('popup-error');
       mail.classList.add('popup-error');        
}
    else{
    if(IsStorageSupport){
    localStorage.setItem('login','login.value');
    localStorage.setItem('mail','mail.value');}
}
});