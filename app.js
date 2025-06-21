const text=document.querySelectorAll(".text");
text.forEach(text=>{
text.addEventListener('mouseover',()=>{

text.style.textDecoration='underline';

});
text.addEventListener('mouseout',()=>{

text.style.textDecoration='none';

});
});


const img=document.querySelectorAll(".img");
img.forEach(img=>{

       img.style.transition='transform 0.3s ease,border 0.3s ease';

img.addEventListener('mouseover',()=>{
img.style.transform='scale(1.05)';
img.style.border='3px solid black';
     

});
img.addEventListener('mouseout',()=>{
    img.style.transform='scale(1)';
    img.style.border='none';


})

});