const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])'); //список ссылок к которым применить настраиваемая прокрутка

smoothScrollElems.forEach(link => {
  link.addEventListener('click', (event) => {
    //запрeщает прокрутку браузера по умолчанию (event)
    event.preventDefault()
    
    // настройка прокрутки
    const id = link.getAttribute('href').substring(1)
    const linkSection = document.getElementById(id)
    linkSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})
