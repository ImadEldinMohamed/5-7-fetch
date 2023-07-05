const copertina=function(){
    fetch('https://striveschool-api.herokuapp.com/books',
  )
  .then((res)=>{
    if(res.ok){
        return res.json()
    }else{
        throw new Error('errore')
    }


    
  })
  .then((data)=>{
    console.log(data)
    
    data.forEach(element => {
          let riga=document.getElementById('row')
          let libro=document.createElement('div')
          libro.classList.add('col','col-4')
          riga.appendChild(libro)
        libro.innerHTML=`
        <div class="card" style="width: 18rem;">
      <img src=${element.img} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"> ${element.title}  </h5>
        <p class="card-text">  ${element.price}   </p>
        <a href="#" class="btn btn-primary" id="bottone">scarta</a>
        <a href="#" class="btn btn-primary" id="bottone1">compra</a>
      </div>
    </div>
    
        `

     
     



    });
const bottone=document.querySelectorAll('#bottone')
bottone.forEach((button)=>{
    button.addEventListener('click',function(e){
        e.target.parentElement.parentElement.remove()
    })
})


// const comprare=document.querySelectorAll('#bottone1')
//comprare.forEach((element)=>{
 //  element.addEventListener('click',function(){
       
 //  comprare.classList.add('ooo')

 //   })
//})






  })
  .catch((err)=>{
    console.log('errore',err)
  })
}

copertina()