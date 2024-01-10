
const input=document.querySelector('#input')
const button=document.querySelectorAll('button');
let myArr=Array.from(button);
let string='';
myArr.forEach((btn)=>{
        btn.addEventListener('click',(event)=>{
            if (event.target.innerHTML=='DEL') {
                string=string.slice(0,string.length-1)
                input.value=string
            }else if (event.target.innerHTML=='AC') {
                string='';
                input.value=string
            }else if (event.target.innerHTML=='=') {
                string=eval(string);
                input.value=string
            }
            else{
                string=string.concat(event.target.innerHTML)
                input.value=string
            }
        })
})

