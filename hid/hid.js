function displayAnswer() {
    console.log("working");
    if (document.getElementById('op-a').checked) {
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Wrong!'
    }

    if (document.getElementById('op-b').checked) {
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Wrong!'
    }
    
    if (document.getElementById('op-c').checked) {
        document.getElementById('result').style.color = 'limegreen'
        document.getElementById('result').innerHTML = 'Wrong!'
    }
	
	if (document.getElementById('op-d').checked) {
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Wrong!'
    }
}