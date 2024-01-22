document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('calculate');
    button.addEventListener('click', function(){
        let word = document.getElementById('wordInput').value;
        let count = word.length;
        let outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<h1>${count}</h1>`;
    });
});

