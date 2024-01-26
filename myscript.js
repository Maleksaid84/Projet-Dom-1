


function plus(event) {

var txt =event.target.parentNode.parentNode.querySelector('.div2').querySelector('#txt')
console.log(txt)
txt.innerHTML=Number(txt.innerHTML)+1 
total()
}


function negative(event) {

  
var txt =event.target.parentNode.parentNode.querySelector('.div2').querySelector('#txt')
txt.innerHTML=Number(txt.innerHTML)-1
console.log(txt)
total()
}


function total(){
   var sum=0
   price=document.getElementsByClassName("price")
   qt=document.getElementsByClassName("qt")
   result=document.querySelector('.result')

   console.log(price,qt,result)

   for(let i=0;i<price.length;i++){

      sum+=Number(price[i].innerHTML)*Number(qt[i].innerHTML)
      result.innerHTML= sum;

   }
   result.innerHTML=sum
console.log(sum)
}
total()
