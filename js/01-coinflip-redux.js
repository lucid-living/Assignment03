let coinFlip
let numFlips=parseInt(prompt('how many times did you want to flip?'))

for (let i=1; i<=numFlips; i++)
{
	coinFlip = Math.round(Math.random())
	
	if (coinFlip < 1)
	{
		console.log('Heads')
		} 
	else {
		console.log('Tails')
		}
}
