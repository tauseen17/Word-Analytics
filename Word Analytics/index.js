const textareaEl=document.querySelector('.textarea');
const characternumberEl=document.querySelector('.stat__number--character');
const twitternumberEl=document.querySelector('.stat__number--twitter');
const facebooknumberEl=document.querySelector('.stat__number--facebook');
const wordsnumberEl=document.querySelector('.stat__number--words');

textareaEl.addEventListener('input',()=>{

    let numberofwords=textareaEl.value.split(' ').length;
    if(textareaEl.value.length===0){
        numberofwords=0;
    }
   const numberOfchar= textareaEl.value.length;
     
   const twitterCharacleft=280-numberOfchar;
   
   if(twitterCharacleft<0){
    twitternumberEl.classList.add('stat__number--limit');
   } 
   else{
    twitternumberEl.classList.remove('stat__number--limit');
   }

   const facebookcharacleft=2200-numberOfchar;

   if(facebookcharacleft<0){
    facebooknumberEl.classList.add('stat__number--limit');
   }
   else{
    facebooknumberEl.classList.remove('stat__number--limit');
   }

   wordsnumberEl.textContent=numberofwords;
   characternumberEl.textContent=numberOfchar;
   twitternumberEl.textContent=twitterCharacleft;
   facebooknumberEl.textContent=facebookcharacleft;
});