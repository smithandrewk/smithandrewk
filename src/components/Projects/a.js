const a = (document) => {
    let typingTimer;
    let doneTypingInterval = 500;
    let input = document.getElementById('a');
    let fact = document.getElementById('fact-container');
    input.addEventListener('keyup', (e) => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            if(input.value !== '')
                numberCall();
        }, doneTypingInterval);
    });
    input.addEventListener('keydown', (e) => {
        clearTimeout(typingTimer);
    });
    function numberCall (){
        fetch(`http://numbersapi.com/${input.value}`, {
                method: 'get'
            })
            .then(response => response.text())
            .then(data => {
                fact.innerHTML = data;
            });
    }
}
 module.exports = {
     a
 }