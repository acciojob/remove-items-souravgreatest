//your JS code here. If required.
let arr=['Red','Green','White','Black']
function solve()
{
	let val=document.getElementById('colorSelect').value;
	let form=document.querySelector('#form');
	let sela=document.getElementById('colorSelect');
	sela.innerHTML="";
	arr = arr.filter(color => color !== val);
	arr.forEach((item)=>{
		// if(item!==val)
		// {
			sela.innerHTML+=`
				<option>${item}</option> 
			`
		// }
	})
}