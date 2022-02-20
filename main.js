

function f (x){
  if (localStorage.getItem('kaysi')===null) {
    alert("Выберите Товар") }
    else {
      
  //Добавляем текст и сохраняем в локалку
 let w = localStorage.getItem('kaysi')
 let y=new Date().toLocaleDateString();
 
document.getElementById("p1").innerHTML+=y+"<br>"

localStorage.setItem('kay1',document.getElementById("p1").innerHTML)

document.getElementById("p2").innerHTML+=w+"<br>"

localStorage.setItem('kay2',document.getElementById("p2").innerHTML)

document.getElementById("p3").innerHTML+=x+"<br>"

localStorage.setItem('kay3',document.getElementById("p3").innerHTML)
//подсчет общей суммы
var R = JSON.parse(localStorage.getItem('kays')) + JSON.parse(x)

localStorage.setItem('kays', R)
console.log(R)

document.getElementById("p4").innerHTML=localStorage.getItem('kays')
}}


//Отображаем все локалки с блоками и текстом 
if (localStorage.getItem('kay1')===null)
localStorage.setItem('kay1',"Дата<br>")
else
document.getElementById("p1").innerHTML
  +=localStorage.getItem('kay1') ;
  
if (localStorage.getItem('kay2')===null)
localStorage.setItem('kay2',"Наименование<br>")
else
document.getElementById("p2").innerHTML+=localStorage.getItem('kay2') ;

if (localStorage.getItem('kay3')===null)
localStorage.setItem('kay3',"Количество<br>")
else
document.getElementById("p3").innerHTML+=localStorage.getItem('kay3') ;

document.getElementById("p4").innerHTML=localStorage.getItem('kays')


//данные формы в атрибут функции
const form = document.getElementById('form');



function retrieveFormValue(event) {
 event.preventDefault();
   
 const age=form.querySelector('[name="age"]')
  var values = age.value
  f(values)
  age.value=delete
  console.log(values)
 
}
form.addEventListener('submit',retrieveFormValue);

var i = document.querySelector('#img');

i.onclick = function () {
  img.style.backgroundColor='green';
 let r='Ацетон'
  localStorage.setItem('kaysi',r)
  setTimeout(T,3000);
  function T () {
    img.style.backgroundColor='';
    
  localStorage.removeItem('kaysi')
  }
} 
//for (a=1;a<10;a++) {
 // f(30)
