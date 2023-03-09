let el = document.createElement('div')
el.classList.add('marquee');

let el1 = document.createElement('span');
el1.innerHTML = `
    <img style="height:20px;width:20px;" class="img-favicon-angular" src="https://irp.cdn-website.com/-resellers-preview/douglas.oliveira@angular-ecommerce.com/favicon/s1ll3detfjhqno8djmr1eci8ar.png" />
    © 2023 - Powered by Angular e-Commerce
`

el.appendChild(el1)

document.querySelector('body').appendChild(el)



setInterval(()=>{
    document.querySelector('.img-favicon-angular').classList.add('image-flip')
      setTimeout(()=>{
        document.querySelector('.img-favicon-angular').classList.remove('image-flip') 	
  },1000)
},3000)