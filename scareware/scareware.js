function displayAnswer() {
    console.log("working");
    if (document.getElementById('op-a').checked) {
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Wrong!'
        document.getElementById('explanation').innerHTML = 'Hold on...take a deep breath. Scareware will trick victims into feeling panicked and out of options. The page often displays a warning with bright colours, bold text, and a company logo to gain your trust.Close the page and leave the site that gave it to you.'
    }

    if (document.getElementById('op-b').checked) {
        document.getElementById('result').style.color = 'limegreen'
        document.getElementById('result').innerHTML = 'Correct!'
        document.getElementById('explanation').innerHTML = 'Scareware will trick victims into feeling panicked and out of options. The page often displays a warning with bright colours, bold text, and a company logo to gain your trust.Close the page and leave the site that gave it to you.'
    }

}