function calc(){
    let num1,result
    num1 = document.getElementById('inp1').value
    result = 500 / num1
    document.getElementById('out').innerHTML = Math.floor(result);
}

const anchors = document.querySelectorAll('a[href*="#"]')
for(let anchor of anchors){
    anchor.addEventListener('click',function(e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior:"smooth",
            block:'start'
        })
    })
}




var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}



let inputComent = document.querySelector(".inp_coment")
let addButton = document.querySelector(".button_add")
let buttonAdd = document.querySelector(".ul_coment")
let comentWindow = document.querySelector(".coment_window")

addButton.addEventListener('click',(e)=>{
    if(inputComent.value === '') return;
    creatDeleteElements(inputComent.value);
    inputComent.value = ''
    
})

function creatDeleteElements(value){
    const li = document.createElement('li');
    li.className ='li';
    li.textContent = value

    const but = document.createElement('button');
    but.className ='but';
    but.textContent ='Удалить коментарий'
    li.append(but)

    but.addEventListener('click',(e) =>{
        buttonAdd.removeChild(li);
    })
    li.addEventListener('click',(e)=>{
        alert(comentWindow.value);
        comentWindow.value =''
       
    })
    buttonAdd.append(li)
  
        
    

}
