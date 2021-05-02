function displayAnswer() {
    console.log("working");
    if (document.getElementById('op-a').checked) {
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Incorrect! '
		document.getElementById('explination').innerHTML = "Don't click on any links or files! " + 
														   "Phishing emails trick users into following links or downloading malware within files. " +
														   "They often mimic messages sent to you by mistake or by real companies like Microsoft. Check " +
														   "for misspelling, poor grammar, attached files, and random links to unknown sites. "
    }

    if (document.getElementById('op-b').checked) {
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Incorrect! '
		document.getElementById('explination').innerHTML = "Don't spread the email! You might put others at risk. " +
														   "Phishing emails trick users into following links or downloading malware within files. They often " +
														   "mimic messages sent to you by mistake or by real companies like Microsoft. Check for misspelling, " +
														   "poor grammar, attached files, and random links to unknown sites."

    }
    
    if (document.getElementById('op-c').checked) {
        document.getElementById('result').style.color = 'limegreen'
        document.getElementById('result').innerHTML = 'Correct! '
		document.getElementById('explination').innerHTML = "Phishing emails trick users into following links or downloading malware within files. " +
														   "They often mimic messages sent to you by mistake or by real companies like Microsoft. Check " +
														   "for misspelling, poor grammar, attached files, and random links to unknown sites."
    }
}