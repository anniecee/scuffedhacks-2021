function displayAnswer() {
    if (document.getElementById('op-a').checked) {
        document.getElementById('result').style.color = 'limegreen'
        document.getElementById('result').innerHTML = 'Correct!'
        document.getElementById('result').style.color = 'limegreen'
        document.getElementById('result').innerHTML = 'Correct!'
        document.getElementById('explanation').innerHTML = 'Connecting to unverified free WiFi might actually be a trap setup by attackers in order to monitor your online activity.Staying on these WiFi traps allows passwords and personal information to be grabbed. Check with stores and shops to ensure they are the ones providing free WiFi. Even if you are on a trusted public network, try not to type passwords and sensitive information.'
    }

    if (document.getElementById('op-b').checked) {
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Incorrect!'
        document.getElementById('explanation').innerHTML = 'Pause! Connecting to unverified free WiFi might actually be a trap setup by attackers in order to monitor your online activity. Staying on these WiFi traps allows passwords and personal information to be grabbed. Check with stores and shops to ensure they are the ones providing free WiFi. Even if you are on a trusted public network, try not to type passwords and sensitive information.'
    }

}