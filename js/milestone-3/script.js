// **Milestone 3**
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone *(animal, vegetable, user)*. Quando l’utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const boxContent = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

const container = document.querySelector(".container");
const valueSelection = document.getElementById("selector");
console.log(valueSelection);

init();

valueSelection.addEventListener('change', (event) => {
  let finalValue = event.target.value;
	// console.log(prova);
	init(finalValue);

	// console.log(event);
});


	function init(finalValue){

		if (finalValue == 4){
			const arrayUser = boxContent.filter((element) => element.type === 'user');
			createBox(arrayUser);
			console.log(arrayUser);
		} else if(finalValue == 2){
			const arrayAnimal = boxContent.filter((element) => element.type === 'animal');
			createBox(arrayAnimal);
			console.log(arrayAnimal);
		}else if(finalValue == 3){
			const arrayVegetable = boxContent.filter((element) => element.type === 'vegetable');
			createBox(arrayVegetable);
			console.log(arrayVegetable);
		}else{
			createBox(boxContent);
			console.log(createBox(boxContent));
		}

	}

function createBox(array){
	container.innerHTML = "";
	array.forEach(element => {
  const name = element.name.toUpperCase();
  
  container.innerHTML += `
  <div class="box d-flex flex-column justify-content-center text-center align-items-center clearfix m-3">
    <i class="${element.family} ${element.prefix}${element.name} mds-${element.color}"></i>
    <span>${name}</span> 
  </div>
  `; 
});
}



