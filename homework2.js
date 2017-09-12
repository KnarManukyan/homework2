const iq =  prompt ("enter your IQ")
const age = prompt ("enter your age")


if (age <= 12) {
	if (iq<100) {
		console.log ("It's ok. You are just a kid!");
	}
	else if (iq===100) {
		console.log ("Great, enjoy your childhood!");
	}
	else if (iq<130) {
		conlsole.log ("You are an awesome kid!");
	} 
	else {
		console.log ("You are a genius!!! Are you the second Einshtein???")
	} 
}	else if (iq<100) {
		console.log ("It's not too late to train your brain!");
	}
	else if (iq===100) {
		console.log ("It's ok");
	}
	else if (iq<130) {
		console.log ("You have a very high IQ");
	} 
	else {
		console.log ("Congrats! You are a genius!!!")
	} 