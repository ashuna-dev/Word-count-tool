let button = document.getElementById('Calculate');

button.addEventListener('click', function(){
    let word = document.getElementById('wordinput').value;
    let count = word.length;
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `<h1>${count}</h1>`
});


