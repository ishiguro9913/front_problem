function changeBtn(){

  fetch('https://catfact.ninja/fact')
  .then(result => result.json())
  .then((output) => {

    var testinfo = document.getElementById("content");
    testinfo.innerHTML = output.fact;
      
}).catch(err => console.error(err));

}
