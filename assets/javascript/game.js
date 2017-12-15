var playerSelected= false;
var defenderSelected= false;

//storing character
var character="";
var defenders="";


var Daredevil = {
		name: 'Daredevil',
		health: 150,
		baseAttackPower: 12,
		attack: 8,
		counterAttack: 9,
	};

var Elektra = {
		name: 'Elektra',
		health: 130,
		baseAttackPower: 8,
		attack: 8,
		counterAttack: 10,
	};

var Punisher = {
		name: 'Punisher',
		health: 100,
		baseAttackPower: 8,
		attack: 8,
		counterAttack: 11,
	};

var WilliamFisk = {
		name: 'WilliamFisk',
		health: 150,
		baseAttackPower: 8,
		attack: 8,
		counterAttack: 15,
	};

function settingUpCharacter(chosenCharacter){
	character.name = chosenCharacter.name;
	character.health = chosenCharacter.health;
	character.baseAttackPower= chosenCharacter.baseAttackPower;
	character.attack= chosenCharacter.attack;
	character.counterAttack= chosenCharacter.counterAttack;

}

function settingUpDefenders(chosenDefenders){
	defenders.name = chosenDefenders.name;
	defenders.health = chosenDefenders.health;
	defenders.baseAttackPower = chosenDefenders.baseAttackPower;
	defenders.attack = chosenDefenders.attack;
	character.counterAttack= chosenDefenders.counterAttack;
}

//moving other characters into enemy container

function movingEnemiesToTheirContainer(){
	$('.your-available-characters').removeClass('your-available-characters').addClass("enemy-characters");
	$('#enemies-container').append($(".enemy-characters"));
	$('.enemy-characters').css("background-color", 'blue');
}


$(document).ready(function() {
	$("#restart").hide();

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
				$('#message-container').empty();

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

	$('#attack-buttom').on('click', function(){
		console.log('You selected the attack button.');

		if(playerSelected === true && defenderSelected === true){
			$()
		}




	})



});
