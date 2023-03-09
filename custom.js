let el = document.createElement('a')
el.href="https://angulare.app/?utm_source=cws&utm_campaign=race"
el.classList.add('marquee');

let el1 = document.createElement('span');
el1.innerHTML = `
    <img style="height:20px;width:20px;margin-top:-3px;" class="img-favicon-angular" src="./assets/icon.png" />
    <img style="width:100px;margin-top:-15px;" src="./assets/logo-text.png" />
    © ${new Date().getFullYear() } - Todos os direitos reservados. Powered by <b>Angular e-Commerce</b>
`

el.appendChild(el1)

document.querySelector('body').appendChild(el)



setInterval(()=>{
    document.querySelector('.img-favicon-angular').classList.add('image-flip')
      setTimeout(()=>{
        document.querySelector('.img-favicon-angular').classList.remove('image-flip') 	
  },1000)
},3000)