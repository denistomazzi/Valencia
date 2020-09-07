$('header nav').on("click", function(event){
  $('.menu').toggleClass('open')
  event.preventDefault()
})