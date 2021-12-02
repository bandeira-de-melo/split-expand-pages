const rightSide = document.querySelector('.right')
const lefttSide = document.querySelector('.left')

const container = document.querySelector('.container')

rightSide.addEventListener("mouseenter", (event)=>{
  return container.classList.add('hover-right')
})

rightSide.addEventListener("mouseleave", (event)=>{
  return container.classList.remove('hover-right')
})

lefttSide.addEventListener("mouseenter", (event)=>{
  return container.classList.add('hover-left')
})

lefttSide.addEventListener("mouseleave", (event)=>{
  return container.classList.remove('hover-left')
})