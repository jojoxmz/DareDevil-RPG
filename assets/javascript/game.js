var playerSelected= false;
var defenderSelected= false;

//storing character
var character={};
var defenders={};

var gameOver= false;
var enemiesDefeated= 0;

var Daredevil = {
		name: 'Daredevil',
		health: 200,
		baseAttackPower: 90,
		attack: 40,
	};

var Elektra = {
		name: 'Elektra',
		health: 10,
		baseAttackPower: 2,
		attack: 8,
	};

var Punisher = {
		name: 'Punisher',
		health: 100,
		baseAttackPower: 8,
		attack: 8,
	};

var WilliamFisk = {
		name: 'WilliamFisk',
		health: 150,
		baseAttackPower: 8,
		attack: 8,
	};


var remaining ={};


function settingUpCharacter(chosenCharacter){
	character.name = chosenCharacter.name;
	character.health = chosenCharacter.health;
	character.baseAttackPower= chosenCharacter.baseAttackPower;
	character.attack= chosenCharacter.attack;
}

function settingUpDefenders(chosenDefenders){
	defenders.name = chosenDefenders.name;
	defenders.health = chosenDefenders.health;
	defenders.baseAttackPower = chosenDefenders.baseAttackPower;
	defenders.attack = chosenDefenders.attack;
}

//moving other characters into enemy container

function movingEnemiesToTheirContainer(){
	$('.your-available-characters').removeClass('your-available-characters').addClass("enemy-characters");
	$('#enemies-container').append($(".enemy-characters"));
	$('.enemy-characters').css("background-color", 'blue');
}


$(document).ready(function() {
	// $("#restart").hide();

	$('#daredevil-character').on('click', function(){
		console.log("Daredevil has been selected");

		if(playerSelected === false){

			settingUpCharacter(Daredevil);
			playerSelected = true;

			//display chosen player
			$("#daredevil-character").removeClass("your-available-characters").addClass("chosen-characters-container");
			$("#chosen-characters-container").append(this);
		
			movingEnemiesToTheirContainer()

		} else if(playerSelected === true && defenderSelected === false){
			if($("#daredevil-character").hasClass("enemy-characters")){

				settingUpDefenders(Daredevil);
				defenderSelected = true;

				$("#daredevil-character").removeClass("enemy-characters").addClass("defender-character");
				$("#defender-container").append(this);
				}
			}
	});

	$('#elektra-character').on('click', function(){
		console.log("Elektra has been selected");

		if(playerSelected === false){

			settingUpCharacter(Elektra);
			playerSelected = true;

			//display chosen player
			$('#elektra-character').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);

			movingEnemiesToTheirContainer()
		} else if(playerSelected === true && defenderSelected === false){
			if($('#elektra-character').hasClass('enemy-characters')){

				settingUpDefenders(Elektra);
				defenderSelected = true;

				$('#elektra-character').removeClass('enemy-characters').addClass('defender-character');
				$('#defender-container').append(this);
			}
		}
	});


	$('#punisher-character').on('click', function(){
		console.log("Punisher has been selected");

		if(playerSelected === false){

			settingUpCharacter(Punisher);
			playerSelected= true;

			$('#punisher-character').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);

			movingEnemiesToTheirContainer()
		}else if(playerSelected === true && defenderSelected === false){
			if($('#punisher-character').hasClass('enemy-characters')){

				settingUpDefenders(Punisher);
				defenderSelected = true;

				$('#punisher-character').removeClass('enemy-characters').addClass('defender-character');
				$('#defender-container').append(this);
			}
		}
	});

	$("#williamfisk").on('click', function(){
		console.log("William Fisk has been selected");

		if(playerSelected === false){
			settingUpCharacter(WilliamFisk)
			playerSelected= true;

			$('#williamfisk').removeClass('your-available-characters').addClass('chosen-characters-container');
			$('#chosen-characters-container').append(this);

			movingEnemiesToTheirContainer()
		} else if (playerSelected === true && defenderSelected === false){
			if($('#williamfisk').hasClass('enemy-characters')){

				settingUpDefenders(WilliamFisk);
				defenderSelected= true;

				$('williamfisk').removeClass('enemy-characters').addClass('defender-character');
				$('#defender-container').append(this);
			}
		}
	});


	$("#attack-button").on("click", function() {
    	console.log("Attack selected");

    if (playerSelected && defenderSelected && gameOver === false){

    	if (('chosen-characters-container').health >= 0){
    		('.chosen-characters-container').attack = ('.chosen-characters-container').attack + ('.chosen-characters-container').baseAttackPower;
		$('#message-container').html('You have attacked ' + ('.defender-character').name + ' with ' + ('.chosen-characters-container').attack + ' points.');

    	('.chosen-characters-container').health = ('.chosen-characters-container').health - ('.defender-character').attack;
    	$('.health').html(('.chosen-characters-container').health);

    	('.defender-character').health = ('.defender-character').health - ('.chosen-characters-container').attack;
    	$('.health').html(('.defender-character').health);

	 	

    	if(('.chosen-characters-container').health <= 0){
    		('#message-container').html('You have died!');
    	} else if (('.defender-character').health <= 0){
    		enemiesDefeated ++;

    		if(enemiesDefeated === 3){
    			gameOver= true;
    			$('#message-container').html('You have won!');
    		}
    	}

    }
}

  });






//these are for the beginning
});


	