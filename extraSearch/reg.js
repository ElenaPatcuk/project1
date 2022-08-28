let layer = document.querySelector('.layer')

document.addEventListener('mousemove', (e)=>{
    layer.style.transform = `translate(${e.clientX*80/1000}px, ${e.clientY*80/1000}px)`
})