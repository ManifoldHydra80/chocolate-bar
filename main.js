function PickChocolate() {
	let RandomNumber = Math.floor(Math.random() * ChocolateBars.length)
	document.getElementById('picked-chocolate').innerHTML = ChocolateBars[RandomNumber]
}