var playerSelected= false;
var defenderSelected= false;

//storing character and defenders
var character={};
var defenders={};

var gameOver= false;
var enemiesDefeated= 0;

var song = new Audio('./assets/images/Song.mp3');

var Characters= {
	Daredevil: {
		name: 'Daredevil',
		health: 150,
		baseAttackPower: 15,
		attack: 25,
	},

	Elektra: {
		name: 'Elektra',
		health: 130,
		baseAttackPower: 5,
		attack: 15,
	},

	Punisher: {
		name: 'Punisher',
		health: 120,
		baseAttackPower: 30,
		attack: 21,
	},

	WilsonFisk: {
		name: 'WilsonFisk',
		health: 140,
		baseAttackPower: 4,
		attack: 10,
	}
};

function settingUpCharacter(chosenCharacter){
	character.name = chosenCharacter.name;
	character.health = chosenCharacter.health;
	character.baseAttackPower = chosenCharacter.baseAttackPower;
	character.attack= chosenCharacter.attack;
	character.chosen = chosenCharacter.chosen;
}

function settingUpDefenders(chosenDefenders){
	console.log('looking at our choice', chosenDefenders)
	defenders.name = chosenDefenders.name;
	defenders.health = chosenDefenders.health;
	defenders.baseAttackPower = chosenDefenders.baseAttackPower;
	defenders.attack = chosenDefenders.attack;
	defenders.chosen = chosenDefenders.chosen;
}

//moving other characters into enemy container
function movingEnemiesToTheirContainer(){
	$('.your-available-characters').removeClass('your-available-characters').addClass('enemy-characters');
	$('#enemies-container').append($('.enemy-characters'));
	$('.enemy-characters').css({'background': 'black', 'border': 'solid grey', 'color': 'red'});
}

$(document).ready(function() {

	song.play()

	//when a character has been clicked
	$('#Daredevil').on('click', function(){
		console.log("Daredevil has been selected");

		//if player have not been selected
		if(playerSelected === false){

			//set up character information
			settingUpCharacter(Characters.Daredevil);
			playerSelected = true;

			//display chosen player
			$('#Daredevil').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);
			$('.your-characters').css('color', 'gray');
		
			//move rest into the enemies container
			movingEnemiesToTheirContainer()

		} else if(playerSelected === true && defenderSelected === false){
			if($('#Daredevil').hasClass('enemy-characters')){

				settingUpDefenders(Characters.Daredevil);
				defenderSelected = true;

				$('#Daredevil').removeClass('enemy-characters').addClass('defender-character');
				$('#defender-container').append(this);
				}
			}
	});

	$('#Elektra').on('click', function(){
		console.log('Elektra has been selected');

		if(playerSelected === false){

			settingUpCharacter(Characters.Elektra);
			playerSelected = true;

			$('#Elektra').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);
			$('.your-characters').css('color', 'gray');

			movingEnemiesToTheirContainer()
		} else if(playerSelected === true && defenderSelected === false){
			if($('#Elektra').hasClass('enemy-characters')){

				settingUpDefenders(Characters.Elektra);
				defenderSelected = true;

				$('#Elektra').removeClass('enemy-characters').addClass('defender-character');
				$('#defender-container').append(this);
			}
		}
	});

	$('#Punisher').on('click', function(){
		console.log('Punisher has been selected');

		if(playerSelected === false){

			settingUpCharacter(Characters.Punisher);
			playerSelected= true;

			$('#Punisher').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);
			$('.your-characters').css('color', 'gray');

			movingEnemiesToTheirContainer()
		}else if(playerSelected === true && defenderSelected === false){
			if($('#Punisher').hasClass('enemy-characters')){

				settingUpDefenders(Characters.Punisher);
				defenderSelected = true;

				$('#Punisher').removeClass('enemy-characters').addClass('defender-character');
				$('#defender-container').append(this);
			}
		}
	});

	$('#WilsonFisk').on('click', function(){
		console.log('William Fisk has been selected');

		if(playerSelected === false){
			settingUpCharacter(Characters.WilsonFisk)
			playerSelected= true;

			$('#WilsonFisk').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);
			$('.your-characters').css('color', 'gray');

			movingEnemiesToTheirContainer()
			console.log(character);
		} else if (playerSelected === true && defenderSelected === false){
			if($('#WilsonFisk').hasClass('enemy-characters')){

				settingUpDefenders(Characters.WilsonFisk);
				defenderSelected= true;

				$('#WilsonFisk').removeClass('enemy-characters').addClass('defender-character');
				$('#defender-container').append(this);
			}
		}
	});


	$('#attack-button').on('click', function() {
    	console.log('Attack selected');

	    if (playerSelected && defenderSelected && gameOver === false){
	    
			//defenders health after being attacked by character 
			defenders.health = defenders.health - character.attack;

			//displays and updates defenders health
	    	$($(`#${defenders.name} p.health`)[0]).html(defenders.health);
			console.log(defenders.health);
	    	console.log(playerSelected);

	    	//character attack power is going to increment every time character makes an attack
	    	character.attack = character.attack + character.baseAttackPower;
			$('#message-container').html('You have attacked ' + defenders.name + ' with ' + character.attack + ' points. ' + defenders.name + ' have attacked you for ' + defenders.attack + ' points.');
			console.log(character.health);

			//character health
	    	character.health = character.health - defenders.attack;

	    	//displays and updates character health
	    	$($(`#${character.name} p.health`)[0]).html(character.health);
	    	
	    	//determine when character dies
	       	if(character.health <= 0){
	       		playerSelected= false;
	    		$('#message-container').html('You have died!');

						

	    	//determine when defender dies
	    	} else if (defenders.health <= 0){
	    		enemiesDefeated ++;
	    		$('#defender-container').empty();
	    		defenderSelected = false;
	   
	   		//after all 3 defenders die-- game over
	    		if(enemiesDefeated === 3){
	    			gameOver= true;
	    			$('#message-container').html('You have won!');
	    			return;
	    		}
	    	}
	    }

	//closing is for the attack button
  	});

//closing is for the beginning
});


	