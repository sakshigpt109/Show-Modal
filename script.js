var a= document.querySelectorAll('.show-modal');
var b=document.querySelector('.modal');
var c=document.querySelector('.overlay');
var d=document.getElementsByClassName('.close-modal');

b.addEventListener('click',show);
d.addEventListener('click',close);

//function to open modal
function show(){
    b.classList.remove('hidden');
    c.classList.remove('hidden');
}
function close(){
    b.classList.add('hidden');
    c.classList.add('hidden');
}
 for(let i=0;i<a.length;i++){
     a[i].addEventListener('click',show);
 }
 

