const arrayImage =['back.jpg','benchpress.jpg','cardio.jpg','chestpress.jpg','cycling.jpg','latpulldown.jpg','legpress.jpg','trademill.jpg']
const arrayLength = arrayImage.length

let i = 0

const demofunction = () =>{
    i++

if (i<0){
    i=0
}
//  i=i%arrayLength
//i=0%5=0, 1$5=1,2%5=2,3%5=3 4%5=4

document.querySelector('img').src = `img/${arrayImage[i]}`

}
let set = setInterval(demofunction,3000)
document.querySelector('.container .right'). addEventListener('click', ()=>{
    i++

    if (i<0){
        i=0
    }
    //  i=i%arrayLength
    //i=0%5=0, 1$5=1,2%5=2,3%5=3 4%5=4
    
    document.querySelector('img').src = `img/${arrayImage[i]}`
    
    
    
})
document.querySelector('.container .left'). addEventListener('click', ()=>{
    i--

    if (i<0){
        i=4
    }
    //i=arraylength=1
   
   
    
    document.querySelector('img').src = `img/${arrayImage[i]}`
    
    
    
})

document.querySelector('.container').addEventListener('mouseover',()=>{
    clearInterval(set)
})
document.querySelector('.container').addEventListener('mouseout',()=>{
    set = setInterval(demofunction,3000)
})

