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

    if (playerSelected === true && defenderSelected === true && gameOver === false){
    	defenders.health= defenders.health - character.attack;

    	$('.defender.character').children('.health').html(defenders.health);
    	$("message-container").html("<p>You attacked " + defenders.name + " for " + character.attack + " damage.<p>");

    	character.attack= character.attack - character.baseAttackPower;

    	if(defenders.health > 0){
    		character.health = character.health - defenderSelected.baseAttackPower;
    		$('.chosen-characters-container').children('.health').html(character.health);


    		if(character.health > 0){
    			$('#message-container').append("<p>" + defenders.name + " attacked you back for " + defenders.baseAttackPower + " damage.</p>");
    		} else {
    			gameOver = true;
    			$('#message-container').html("<p>You were defeated... </p>");
    		}
    	}

    }else {
    	enemiesDefeated++;
    	defenderSelected = false;
    	$('.defender-character').hide();

    	if(enemiesDefeated === 3){
    		gameOver= true;
			$('#message-container').html('<p>You won!</p>')
    	}
    }
    

    // // User is ready to attack the defender
    // if (playerSelected && defenderSelected && !gameOver) {
    //   // User attacks the defender and decreases the defender's health points
    //   defenders.health = defenders.health - character.attack;
    //   $(".defender-character").children(".health").html(defenders.health);
    //   $("message-container").html("<p>You attacked " + defenders.name + " for " + character.attack + " damage.<p>");

    //   // User's attack power increases
    //   character.attack = character.attack + character.baseAttack;

    //   // If defender is still alive, they counter attack the user
    //   if (defenders.health > 0) {
    //     character.health = character.health - defenders.baseAttack;
    //     $(".chosen-character").children(".health").html(character.health);

    //     // Check if the user survives the attack
    //     if (character.health > 0) {
    //       $("#message-container").append("<p>" + defenders.name + " attacked you back for " + defenders.baseAttack + " damage.</p>");
    //     } else {
    //       gameOver = true;
    //       $("#message-container").html("<p>You were defeated... womp womp...</p><p>Play again?</p>");
         
    //     }
    //   } else {
    //     // Defender is defeated
    //     enemiesDefeated++;
    //     defenderSelected = false;
    //     $("#message-container").html("<p>You have defeated " + defenders.name + ". Choose another enemy.</p>");
    //     $(".defender-character").hide();

    //     // Check if the user has won the game
    //     if (enemiesDefeated === 3) {
    //       gameOver = true;
    //       $("message-container").html("<p>You have won the game!!!</p><p>Play again?</p>");
    //     }
    //   }
    // } else if (!playerSelected && !gameOver) {
    //   $("#message-container").html("<p>You must first select your game character.</p>");
    // } else if (!defenderSelected && !gameOver) {
    //   $("#message-container").html("<p>You must choose an enemy to fight.</p>");
    // }

    // console.log("character = " + JSON.stringify(character));
    // console.log("defender = " + JSON.stringify(defenders));
 


  });






//these are for the beginning
});


	