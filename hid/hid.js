function displayAnswer() 
{
    console.log("working");
    if (document.getElementById('op-a').checked) 
	{
        document.getElementById('result').style.color = 'red'
		document.getElementById('result').innerHTML = "Incorrect! "
        document.getElementById('explination').innerHTML = "Unknown USBs should stay away from your computer. " + 
													   "Seemingly harmless USB drives might actually be dangerous hacking weapons. As soon as you plug it in, " + 
													   "the fake USB is able to mimic a person typing on a keyboard, which will allow hackers to have " + 
													   "access to your computer without being in the same room."

    }

    if (document.getElementById('op-b').checked) 
	{
        document.getElementById('result').style.color = 'red'
		document.getElementById('result').innerHTML = 'Incorrect! '
		document.getElementById('explination').innerHTML = "Good thinking, but you could help others from plugging it in. " + 
														   "Seemingly harmless USB drives might actually be dangerous hacking weapons. As soon as you plug it in, " +
														   "the fake USB is able to mimic a person typing on a keyboard, which will allow hackers to have " + 
														   "access to your computer without being in the same room."


    }
    if (document.getElementById('op-c').checked) 
	{
        document.getElementById('result').style.color = 'limegreen'
        document.getElementById('result').innerHTML = 'Correct! '
		document.getElementById('explination').innerHTML = "Don't plug it in and keep it away from curious hands. " + 
														   "Seemingly harmless USB drives might actually be dangerous hacking weapons. As soon as you plug it in, " + 
														   "the fake USB is able to mimic a person typing on a keyboard, which will allow hackers to have " + 
														   "access to your computer without being in the same room."

    }
	
	if (document.getElementById('op-d').checked) 
	{
        document.getElementById('result').style.color = 'red'
        document.getElementById('result').innerHTML = 'Incorrect! '
		document.getElementById('explination').innerHTML = "You might put someone's computer at risk. " + 
														   "Seemingly harmless USB drives might actually be dangerous hacking weapons. As soon as you plug it in, " +
														   "the fake USB is able to mimic a person typing on a keyboard, which will allow hackers to have " + 
														   "access to your computer without being in the same room. " 
    }
}