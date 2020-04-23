const btn = document.getElementById('btn')

btn.addEventListener('click', ()=> {
    alert('You Clicked Me')
})

let xMove = Math.random()*100

let counter = 0

const laugh = 'haha!!!'

function updateCounter(){
    const counterCount = document.querySelector('span')
    if(counter<2){
        counterCount.innerText = `You've missed ${counter} time ${laugh.repeat(counter)} `
    }else if (counter<=14) {
        counterCount.innerText = `You've missed ${counter} times ${laugh.repeat(counter)}`
    } else if (counterCount >= 15) {
        'Ok!!! Click me Now'
    }
    
}







btn.addEventListener('mouseover', ()=>{
    
    console.log('you touched me')

    if(counter<16){
    console.log(`Touched ${counter}`)
    const randomX = Math.random() * window.innerWidth
    const randomY = Math.random() * window.innerHeight         
    btn.style.left = randomX + 'px'
    btn.style.top = randomY + 'px'
        
    counter++  

    updateCounter(counter)
    }


    

    
    
})