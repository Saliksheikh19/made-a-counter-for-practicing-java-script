var counter = document.querySelector(`#counter`)
var btns = document.querySelectorAll(`.btn`)

console.log(counter)
var count = 0

btns.forEach((btn)=>{
 btn.addEventListener(`click` , (e)=>{
   var target = e.currentTarget.classList
   if(target.contains(`increase`)){
    count++
    counter.textContent = count
   } else if (target.contains(`decrease`)) {
    count--
    counter.textContent = count
   }else {
    count= 0
    counter.textContent = 0
   }

  if (count > 0) {
    counter.style.color = `green`
  }
  if (count < 0) {
    counter.style.color = `red`
  }

 
   


 })
})

