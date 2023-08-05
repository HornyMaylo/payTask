const tabs = document.querySelectorAll('.work')
const img = document.getElementById('desc__img')


tabs.forEach((elem, index) => {
   elem.addEventListener('click', () => {
      // if(img.classList.contains('animation')) {
      //    img.classList.remove('animation')
      // }
      tabs.forEach((elem) => {
         if(elem.classList.contains('active')) {
            elem.classList.remove('active')
         }
      });
      elem.classList.add('active');
      img.classList.add('animation')
      img.setAttribute('src', `img/desc/dashboard_${index}.svg`);
      setTimeout(() => {
         img.classList.remove('animation')
      }, 1000);
   })
})