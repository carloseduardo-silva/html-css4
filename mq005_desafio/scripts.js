
function clicar(){
     resp = document.getElementById('res')
     var margem = document.getElementById('cabeca')
     if (resp.style.display == 'block') {
         resp = resp.style.display = 'none'
         margem = margem.style.marginBottom = '2vh'
     }
     else {
        resp.style.display = 'block'
        margem = margem.style.marginBottom = '25vh'
     }

         
}
    








