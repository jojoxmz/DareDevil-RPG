var playerSelected= false;
var defenderSelected= false;

//storing character
var character={};
var defenders={};

var gameOver= false;
var enemiesDefeated= 0;

var Characters= {
	Daredevil: {
		name: 'Daredevil',
		health: 150,
		baseAttackPower: 90,
		attack: 40,
		chosen: false,
	},

	Elektra: {
		name: 'Elektra',
		health: 130,
		baseAttackPower: 2,
		attack: 8,
		chosen: false,
	},

	Punisher: {
		name: 'Punisher',
		health: 100,
		baseAttackPower: 8,
		attack: 8,
		chosen: false,
	},

	WilliamFisk: {
		name: 'WilliamFisk',
		health: 150,
		baseAttackPower: 8,
		attack: 8,
		chosen: false,
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
	$('.your-available-characters').removeClass('your-available-characters').addClass("enemy-characters");
	$('#enemies-container').append($(".enemy-characters"));
	$('.enemy-characters').css("background-color", 'blue');
}


$(document).ready(function() {
	// $("#restart").hide();

	$('#Daredevil').on('click', function(){
		console.log("Daredevil has been selected");

		if(playerSelected === false){

			settingUpCharacter(Characters.Daredevil);
			playerSelected = true;

			//display chosen player
			$("#Daredevil").removeClass("your-available-characters").addClass("chosen-characters-container");
			$("#chosen-characters-container").append(this);
		
			movingEnemiesToTheirContainer()

		} else if(playerSelected === true && defenderSelected === false){
			if($("#Daredevil").hasClass("enemy-characters")){

				settingUpDefenders(Characters.Daredevil);
				defenderSelected = true;

				$("#Daredevil").removeClass("enemy-characters").addClass("defender-character");
				$("#defender-container").append(this);
				}
			}
	});

	$('#Elektra').on('click', function(){
		console.log("Elektra has been selected");

		if(playerSelected === false){

			settingUpCharacter(Characters.Elektra);
			playerSelected = true;

			//display chosen player
			$('#Elektra').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);

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
		console.log("Punisher has been selected");

		if(playerSelected === false){

			settingUpCharacter(Characters.Punisher);
			playerSelected= true;

			$('#Punisher').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);

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

	$("#WilliamFisk").on('click', function(){
		console.log("William Fisk has been selected");

		if(playerSelected === false){
			settingUpCharacter(Characters.WilliamFisk)
			playerSelected= true;

			$('#WilliamFisk').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);

			movingEnemiesToTheirContainer()
			console.log(character);
		} else if (playerSelected === true && defenderSelected === false){
			if($('#WilliamFisk').hasClass('enemy-characters')){

				settingUpDefenders(Characters.WilliamFisk);
				defenderSelected= true;

				$('WilliamFisk').removeClass('enemy-characters').addClass('defender-character');
				$('#defender-container').append(this);
			}
		}
	});


	$("#attack-button").on("click", function() {
    	console.log("Attack selected");

    	
    if (playerSelected && defenderSelected && gameOver === false){
    
// if defender are being attacked by character chosen

		defenders.health = defenders.health - character.attack;
    	$($(`#${defenders.name} p.health`)[0]).html(defenders.health);


		console.log(defenders.health);
    	console.log(playerSelected);


    	character.attack = character.attack + character.baseAttackPower;
		$('#message-container').html('You have attacked ' + character.name + ' with ' + character.attack + ' points.');
		console.log(character.health);

    	character.health = character.health - defenders.attack;
    	$($(`#${character.name} p.health`)[0]).html(character.health);
    	console.log()

    	
       	if(character.health <= 0){
    		$('#message-container').html('You have died!');
    	} else if (defenders.health <= 0){
    		enemiesDefeated ++;
    		defenderSelected = false;

    		$('#defender-container').empty();

   //  		$('#enemies-container').removeClass('enemy-characters');
			// $('#defender-container').append(this);

    		if(enemiesDefeated === 3){
    			gameOver= true;
    			$('#message-container').html('You have won!');
    			return;
    		}


    		//remove current enemy




    		//add new enemy

    		//start fight again


    		
    	}

    }


  });






//these are for the beginning
});


	