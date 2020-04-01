module.exports = {
	name: 'fight',
	cooldown: 5,
	description: '`YOU MUST WRITE A NAME AFTER ~FIGHT FOR THE COMMAND TO FUNCTION CORRECTLY` Generates an epic battle between you and whoever you mention/write. [Also, contains violence and NSFW stuff, you have been warned!]',
	execute(message) {
        const Discord = require('discord.js');


        //Removes the ~fight from the users message to get the name of the person they wish to fight
        var str = `${message}`;
        str = str.replace("~fight", "");

        //Adjective lists
        let sizeAdjectives = [`small`, `large`, `big`, `little`, `tiny`, `huge`, `long`, `short`, `miniscule`, `massive`]
        let conditionAdjectives = [`shoddy`, `broken`, `legendary`, `common`, `rare`, `modified`, `crappy`, `dangerous`, `strong`, `powerful`, `weak`, `deadly`]
        let emotionList = [`disbelief`, `shock`, `terror`, `happiness`, `awe`, `sadness`, `disappointment`]
        let colours = [`red`, `purple`, `blue`, `green`, `orange`, `yellow`, `brown`, `black`, `white`, `grey`]
        let descriptionList = [`scarce`, `unusual`, `beautiful`, `glowing`, `bright`, `pretty`, `abundant`]


        //Adjective Randomisers
        let sizeRand = sizeAdjectives[Math.floor(Math.random()*sizeAdjectives.length)];
        let sizeRand2 = sizeAdjectives[Math.floor(Math.random()*sizeAdjectives.length)];
        let sizeRand3 = sizeAdjectives[Math.floor(Math.random()*sizeAdjectives.length)];
        let sizeRand4 = sizeAdjectives[Math.floor(Math.random()*sizeAdjectives.length)];
        let conditionRand = conditionAdjectives[Math.floor(Math.random()*conditionAdjectives.length)];
        let conditionRand2 = conditionAdjectives[Math.floor(Math.random()*conditionAdjectives.length)];
        let conditionRand3 = conditionAdjectives[Math.floor(Math.random()*conditionAdjectives.length)];
        let emotionRand = emotionList[Math.floor(Math.random()*emotionList.length)];
        let colourRand = colours[Math.floor(Math.random()*colours.length)];
        let colourRand2 = colours[Math.floor(Math.random()*colours.length)];
        let colourRand3 = colours[Math.floor(Math.random()*colours.length)];
        let descriptionRand = descriptionList[Math.floor(Math.random()*descriptionList.length)];
        //Verb lists
        let crowdResponses = [`cheers`, `boo's`, `stares in ${emotionRand}`, `roars`]
        //Verb Randomisers
        let crowdRand = crowdResponses[Math.floor(Math.random()*crowdResponses.length)];

        //List of unarmed attack types and their randomisers
        let attackTypesBody = [`punches`, "kicks", `slaps`, `repeatedly punches`, `repeatedly kicks`, `headbutts`, `repeatedly slaps`, `super punches`, `mega kicks`, `rapidly slaps`, `elbows`, `smacks`, `karate chops`, `knees`, `double punches`, `tears`, `pokes`, `roundhouse kicks`, `flying kicks`, `jabs`, `rapidly pokes`]
        let bodyAttackRand = attackTypesBody[Math.floor(Math.random()*attackTypesBody.length)];
        let bodyAttackRand2 = attackTypesBody[Math.floor(Math.random()*attackTypesBody.length)];
        let bodyAttackRand3 = attackTypesBody[Math.floor(Math.random()*attackTypesBody.length)];
        
        //Parts of the body and randomisers for them
        let bodyParts = [`face`, `left arm`, `left leg`, `right arm`, `right leg`, `left shoulder`, `right shoulder`, `back`, `chest`, `left hand`, `right hand`, `left foot`, `right foot`, `left ear`, `right ear`, `tongue`, `stomach`, `waist`, `left buttock`, `nose`, `right buttock`, `mouth`, `chin`, `neck`, `elbow`, `left knee`, `right knee`, `forehead`, `cheek`, `throat`]
        let bodyPartsRand = bodyParts[Math.floor(Math.random()*bodyParts.length)];
        let bodyPartsRand2 = bodyParts[Math.floor(Math.random()*bodyParts.length)];
        let bodyPartsRand3 = bodyParts[Math.floor(Math.random()*bodyParts.length)];
        let bodyPartsRand4 = bodyParts[Math.floor(Math.random()*bodyParts.length)];
        let bodyPartsRand5 = bodyParts[Math.floor(Math.random()*bodyParts.length)];
        
        //Responses to attacks
        let responseList = [`stagger backwards`, `shout in pain`, `fall over`, `recieve a bruise`, `gain multiple bruises`, `get angry`, `go berserk`, `get a fracture`, `wince`, `get irritated`]
        let responseListRand = responseList[Math.floor(Math.random()*responseList.length)];
        let responseListRand2 = responseList[Math.floor(Math.random()*responseList.length)];
        //Round 1 (No weapons)
        let round1 = `The combatants enter the ${sizeRand} battle arena. Immediately ${message.author} ${bodyAttackRand}${str} in their ${bodyPartsRand}, causing them to ${responseListRand}.${str} ${bodyAttackRand2} ${message.author} in the ${bodyPartsRand2}, making them ${responseListRand2}.`
        let round1v2 = `Both combatants enter the ${sizeRand} battle arena, both feeling ${emotionRand} as they approach each other. Quickly, ${message.author} ${bodyAttackRand}${str} in their ${bodyPartsRand}, causing them to ${responseListRand}.${str} ${bodyAttackRand2} ${message.author} aiming for their ${bodyPartsRand2} but they miss.`
        let round1v3 = `The fighters enter the ${sizeRand} battle arena. both are feeling ${emotionRand} as they get closer and closer to one another. ${message.author} ${bodyAttackRand}${str} aiming directly for their ${bodyPartsRand}, but they miss!.${str} ${bodyAttackRand2} ${message.author} in the ${bodyPartsRand2}, making them ${responseListRand2}.`
        //Round 1 End
        let round1Rand = (Math.floor(Math.random() * 3) + 1)
        if (round1Rand === 2) {
            round1 = round1v2
        } else if(round1Rand === 3) {
            round1 = round1v3
        }
        
        
        //More violent responses to an attack
        let responseListEXTREME = [`loses the limb`, `bleeds profusely`, `vomits blood`, `has their eyeballs shoot out`, `falls unconscious for a few moments`]
        let extremeResponseRand = responseListEXTREME[Math.floor(Math.random()*responseListEXTREME.length)];
        let extremeResponseRand2 = responseListEXTREME[Math.floor(Math.random()*responseListEXTREME.length)];

      
       
        //Special finishing moves that the winner does to the loser
        let winConditions = [`rips off their`, `does a flip and cuts off their`, `tears off their`, `shoves milk chocolate down their throat then kicks their`]
        let winConditions2 = [`throws them into a pit of lava`, `chucks the rest of their corpse into a toaster and turns them into toast`, `throws them into a vat of acid`]
        let afterBattle = [`buys some ${sizeRand2}, ${conditionRand3} bread with their hard earned money`, `loots the remains of the body`, `has a party to celebrate`, `prays to our goddess, Yui Funami`]
        
        let winConditions1Rand = winConditions[Math.floor(Math.random()*winConditions.length)];
        let winConditions2Rand = winConditions2[Math.floor(Math.random()*winConditions2.length)];
        afterBattleRand = afterBattle[Math.floor(Math.random()*afterBattle.length)];
        //A reason of why the loser lost to the opponent and the randomisers
        let deathReason = [`ran out of limbs to be removed`, `became too weak to continue fighting`, `ran out of health potions`, `got low on health points`, `lost the ability to move`]
        let deathReasonRand = deathReason[Math.floor(Math.random()*deathReason.length)];

    //Decides the type of battle that will take place
    let weaponTypeRand = 3
    if (str === "") {
        weaponTypeRand = "Failed"
    }
    
    // If it's a sharp melee fight
    if (weaponTypeRand === 1) {
        //List of bladed weapons
        let weaponsListSharp = [`sword`, `dagger`, `diamond sword`, `golden sword`, `iron sword`, `wooden sword`, `stone sword`, `claymore`, `machete`, `greatsword`, `longsword`, `rapier`, `katana`]
        let weaponListSharpRand = weaponsListSharp[Math.floor(Math.random()*weaponsListSharp.length)];
        let weaponListSharpRand2 = weaponsListSharp[Math.floor(Math.random()*weaponsListSharp.length)];
            
        //Types of attack for sharp weapons
        let sharpWeaponAttacks = ['slice', `slash`, `swing at`, `stab`]
        let sharpWeaponAttackRand = sharpWeaponAttacks[Math.floor(Math.random()*sharpWeaponAttacks.length)];
        let sharpWeaponAttackRand2 = sharpWeaponAttacks[Math.floor(Math.random()*sharpWeaponAttacks.length)];
        let sharpWeaponAttackRand3 = sharpWeaponAttacks[Math.floor(Math.random()*sharpWeaponAttacks.length)];
        
        //Round 2 start
        let round2 = ` ${message.author} finds a ${conditionRand} ${weaponListSharpRand} and picks it up! They ${sharpWeaponAttackRand}${str}'s ${bodyPartsRand3} and${str} ${extremeResponseRand}.${str} turns around and spots a ${conditionRand2} ${weaponListSharpRand2}! They quickly grab it and ${sharpWeaponAttackRand2} ${message.author}'s ${bodyPartsRand4}. ${message.author} ${extremeResponseRand2}.`         

            let winnerDecide = [(Math.random())];
        // Decides which side wins
            if (winnerDecide >= 0.5) {
                
                //message author wins
                let finalRound = ` ${message.author} uses their ${weaponListSharpRand} to constantly ${sharpWeaponAttackRand3}${str}. Eventually,${str} ${deathReasonRand}. ${message.author} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and ${message.author} ${afterBattleRand}.`
                                
                let sharpEmbed1 = new Discord.RichEmbed()
                .setTitle(`**${message.author.username} VS${str}**`)
                        .attachFiles([`./battles/blade.png`])
                        .setImage(`attachment://blade.png`)
                        .setColor('#bb0a1e') 
                        .setDescription(round1 + round2 + finalRound)
                        .setTimestamp()
                        .setFooter("An epic battle between you and another person.");

                message.channel.send(sharpEmbed1)
            } else if (winnerDecide < 0.5) {
                
                //Opponent wins
                let finalRound = `${str} uses their ${weaponListSharpRand2} to constantly ${sharpWeaponAttackRand3} ${message.author}. After a while, ${message.author} ${deathReasonRand}.${str} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and${str} ${afterBattleRand}.`
                
                let sharpEmbed2 = new Discord.RichEmbed()
                .setTitle(`**${message.author.username} VS${str}**`)
                        .setColor('#bb0a1e') 
                        .attachFiles([`./battles/blade.png`])
                        .setImage(`attachment://blade.png`)
                        .setDescription(round1 + round2 + finalRound)
                        .setTimestamp()
                        .setFooter("An epic battle between you and another person.");

                message.channel.send(sharpEmbed2)
            }
    //Sharp melee fight end
    
    // If it's a gun fight
    } else if (weaponTypeRand === 2) {
            
            //List of gun weapons
            let weaponsListGun = [`pistol`, `shotgun`, `minigun`, `machine gun`, `toilet roll launcher`, `rifle`, `laser gun`, `nailgun`]
            let weaponListGunRand = weaponsListGun[Math.floor(Math.random()*weaponsListGun.length)];
            let weaponListGunRand2 = weaponsListGun[Math.floor(Math.random()*weaponsListGun.length)];
            
            //List of gun weapon attacks
            let gunWeaponAttacks = ['shoot', `fire at`, `blast`, `constantly fire at`]
            let gunAttackRand = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
            let gunAttackRand2 = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
            let gunAttackRand3 = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];

           //Round 2 start
            let round2 = ` ${message.author} finds a ${weaponListGunRand} and picks it up! They ${gunAttackRand}${str}'s ${bodyPartsRand3} and${str} ${extremeResponseRand}.${str} turns around and spots a ${weaponListGunRand2}! They quickly grab it and ${gunAttackRand2} ${message.author}'s ${bodyPartsRand4}. ${message.author} ${extremeResponseRand2}.`           
            

            let winnerDecide = [(Math.random())];
        // Decides which side wins
            if (winnerDecide >= 0.5) {
                let finalRound = ` ${message.author} uses their ${weaponListGunRand} to constantly ${gunAttackRand3}${str}. Eventually,${str} ${deathReasonRand}. ${message.author} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and ${message.author} ${afterBattleRand}.`
               
                let gunEmbed1 = new Discord.RichEmbed()
                .setTitle(`**${message.author.username} VS${str}**`)
                        .setColor('#bb0a1e') 
                        .attachFiles([`./battles/gun.png`])
                        .setImage(`attachment://gun.png`)
                        .setDescription(round1 + round2 + finalRound)
                        .setTimestamp()
                        .setFooter("An epic battle between you and another person.");
                
                message.channel.send(gunEmbed1)
            } else if (winnerDecide < 0.5) {
                let finalRound = `${str} uses their ${weaponListGunRand2} to constantly ${gunAttackRand3} ${message.author}. After a while, ${message.author} ${deathReasonRand}.${str} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and ${str} ${afterBattleRand}.`
               
                let gunEmbed2 = new Discord.RichEmbed()
                .setTitle(`**${message.author.username} VS${str}**`)
                        .setColor('#bb0a1e') 
                        .attachFiles([`./battles/gun.png`])
                        .setImage(`attachment://gun.png`)
                        .setDescription(round1 + round2 + finalRound)
                        .setTimestamp()
                        .setFooter("An epic battle between you and another person.");
                
                 message.channel.send(gunEmbed2)
            }
            //Gun fight end

        //If it's a Space fight
        } else if (weaponTypeRand === 3) {
            
            //List of space weapons
            let weaponsListSpaceGun = [`laser pistol`, `laser shotgun`, `laser minigun`, `laser machine gun`, `laser murder cannon`, `laser rifle`, `laser gun`, `fire extinguisher`]
            let weaponsListSpaceMelee = [`laser sword`, `laser knife`]
            let weaponListSpaceGunRand = weaponsListSpaceGun[Math.floor(Math.random()*weaponsListSpaceGun.length)];
            let weaponListSpaceGunRand2 = weaponsListSpaceGun[Math.floor(Math.random()*weaponsListSpaceGun.length)];
            
            //List of space gun weapon attacks
            let gunWeaponAttacks = ['shoot', `fire at`, `blast`, `constantly fire at`]
            let gunAttackRand = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
            let gunAttackRand2 = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];
            let gunAttackRand3 = gunWeaponAttacks[Math.floor(Math.random()*gunWeaponAttacks.length)];

            //Other generations
            let planetDesc = [`fauna`, `flora`, `water`]
            let planetDescRand = planetDesc[Math.floor(Math.random()*planetDesc.length)];
            let landingType = [`ship`, `shuttle`, `battle cruiser`]
            let landingTypeRand = landingType[Math.floor(Math.random()*landingType.length)];

            let spaceTransport = [`super bouncepads`, `${sizeRand2} spaceships`, `space transportation cannons`]
            let landingPlaces = [`in the docks of a ${conditionRand2}, ${sizeRand3} space ${landingTypeRand}.`, `on a predominantly ${colourRand} surfaced planet. The skies are ${colourRand2} and the ${planetDescRand} is ${colourRand3} and ${descriptionRand}`]

            let landingPlaceRand = `in the docks of a ${conditionRand2}, ${sizeRand3} space ${landingTypeRand}.`
            let spaceTransportRand = spaceTransport[Math.floor(Math.random()*spaceTransport.length)];

           //Round 2 start
            let round2 = ` Both opponents leap onto their ${spaceTransportRand} and fly off into space to continue their battle. They both land ${landingPlaceRand}`
            
            if(landingPlaceRand === `in the docks of a ${conditionRand2}, ${sizeRand3} space ${landingTypeRand}.`) {
                //Variables and randomisers
                let shipSides = [`floor`, `ceiling`, `wall`]
                let spaceSideRand = shipSides[Math.floor(Math.random()*shipSides.length)];
                let shipRooms = [`dining area`, `kitchen`, `bedroom`, `bathroom`, `weapons bay`, `storage room`, `dock`]
                let shipRoomRand = shipRooms[Math.floor(Math.random()*shipRooms.length)];
                let roomItems
                let roomObjects
                let finisher2

                if (shipRoomRand === `dining area`) {
                    roomItems = [`chair`, `knife`, `fork`, `spoon`, `space plant`]
                    roomObjects = [`vending machine`, `table`]
                    finisher2 = [`jams their opponents head into the vending machine door`]
                } else if (shipRoomRand === `kitchen`) {
                    roomItems = [`kitchen knife`, `oven glove`, `wooden spoon`, `pot`, `fridge magnet`]
                    roomObjects = [`fridge`, `paste dispenser`, `sink`]
                    finisher2 = [`throws their opponents body in the furnace`, `covers their opponents ${bodyPartsRand5} in nutrient paste and lights it on fire`]
                } else if (shipRoomRand === `bedroom`) {
                    roomItems = [`pillow`, `blanket`, `lamp`]
                    roomObjects = [`bed`, `desk`]
                    finisher2 = [`hides their opponents body under the bed`]
                } else if (shipRoomRand === `bathroom`) {
                    roomItems = [`toilet brush`, `shampoo bottle`, `toilet paper`, `toothbrush`]
                    roomObjects = [`sink`, `toilet`, `shower`, `bathtub`]
                    finisher2 = ['does a backflip and stuffs their opponents body into the toilet', `flushes their opponent down the toilet`]
                } else if (shipRoomRand === `weapons bay`) {
                    roomItems = [`ammo crate`, `metal helmet`, `stunstick`]
                    roomObjects = [`gun rack`, `missile control panel`]
                    finisher2 = [`puts their opponent into the ships missile system and launches them into space`]
                } else if (shipRoomRand === `storage room`) {
                    roomItems = [`crate`, `box of nutrient paste`]
                    roomObjects = [`shelf`, `stack of crates`]
                    finisher2 = [`throws their opponent so hard into the ${spaceSideRand} that they go through it`]
                } else if (shipRoomRand === `dock`) {
                    roomObjects = [`wall`]
                    roomItems = [`fire extinguisher`]
                    finisher2 = [`opens the airlock, letting their opponent get sucked into space`]
                }
                let roomItemsRand = roomItems[Math.floor(Math.random()*roomItems.length)];
                let roomItemsRand2 = roomItems[Math.floor(Math.random()*roomItems.length)];
                let roomObjectsRand = roomObjects[Math.floor(Math.random()*roomObjects.length)];
                let roomObjectsRand2 = roomObjects[Math.floor(Math.random()*roomObjects.length)];
                let roomObjectsRand3 = roomObjects[Math.floor(Math.random()*roomObjects.length)];
                let roomObjectsRand4 = roomObjects[Math.floor(Math.random()*roomObjects.length)];
                let roomObjectsRand5 = roomObjects[Math.floor(Math.random()*roomObjects.length)];
                
                let responseList2 = [`stagger backwards into a ${roomObjectsRand}`, `shout in pain`, `fall over and smack into a ${roomObjectsRand2}`, `recieve a bruise`, `gain multiple bruises`, `get angry and hit a ${roomObjectsRand3}`, `wince`, `get irritated and smash a ${roomObjectsRand4}`]
                let responseList2Rand = responseList2[Math.floor(Math.random()*responseList2.length)];
                let responseList2Rand2 = responseList2[Math.floor(Math.random()*responseList2.length)];



                let round2v2 = `${message.author} and${str} both meet in the ${shipRoomRand} to do battle. ${message.author} quickly grabs a ${conditionRand2} ${roomItemsRand} that they spotted. They hit ${str} on the ${bodyPartsRand3} with the ${roomItemsRand} which makes them ${responseList2Rand}.${str} grabs the nearest object which happens to be a ${conditionRand} ${roomItemsRand2}. They throw the ${roomItemsRand2} at ${message.author}, making them ${responseList2Rand2}!`
                
                let finisher1 = [`pulls off their opponents ${bodyPartsRand4}`, `rips their opponents ${bodyPartsRand4} off`, `melts their opponents ${bodyPartsRand4} off with a laser`]

                let finisher1Rand = finisher1[Math.floor(Math.random()*finisher1.length)];
                let finisher2Rand = finisher2[Math.floor(Math.random()*finisher2.length)];

                let shipPopulation = (Math.floor(Math.random() * 1000000))
                let damageCost = (Math.floor(Math.random() * 100000000))

                let endingList = [`kills all ${shipPopulation} people on the ship, no witnesses`, `has to pay £${damageCost} for the damages caused and then goes back to earth to have some rest.`]
                let endingRand = endingList[Math.floor(Math.random()*endingList.length)];

                let winnerDecide = [(Math.random())];
        // Decides which side wins
            if (winnerDecide >= 0.5) {

            

                let finalRound = ` Suddenly, ${message.author} finds a ${weaponListSpaceGunRand} on the ${roomObjectsRand5}. They ${gunAttackRand}${str} until${str} ${deathReasonRand}. ${message.author} ${finisher1Rand} and ${finisher2Rand}. After they have won against${str}, ${message.author} ${endingRand}`
               
                let gunEmbed1 = new Discord.RichEmbed()
                .setTitle(`**${message.author.username} VS${str}**`)
                        .setColor('#bb0a1e') 
                        .attachFiles([`./battles/space.png`])
                        .setImage(`attachment://space.png`)
                        .setDescription(round1 + round2 + round2v2 + finalRound)
                        .setTimestamp()
                        .setFooter("An epic battle between you and another person.");
                
                message.channel.send(gunEmbed1)
            } else if (winnerDecide < 0.5) {
                
                let finalRound = ` Suddenly,${str} finds a ${weaponListSpaceGunRand} on the ${roomObjectsRand5}. They ${gunAttackRand} ${message.author} until ${message.author} ${deathReasonRand}.${str} ${finisher1Rand} and ${finisher2Rand}. After they have won against ${message.author},${str} ${endingRand}`
               
                let gunEmbed2 = new Discord.RichEmbed()
                .setTitle(`**${message.author.username} VS${str}**`)
                        .setColor('#bb0a1e') 
                        .attachFiles([`./battles/space.png`])
                        .setImage(`attachment://space.png`)
                        .setDescription(round1 + round2 + round2v2 + finalRound)
                        .setTimestamp()
                        .setFooter("An epic battle between you and another person.");
                
                 message.channel.send(gunEmbed2)
                 //space fight end
            }  
            } else if (landingPlaceRand === `on a predominantly ${colourRand} surfaced planet. The skies are ${colourRand2} and the ${planetDescRand} is ${colourRand3} and ${descriptionRand}`) {
                
                let round2v2 = `BBBBBBBBBBBBBBBBB`

                let winnerDecide = [(Math.random())];
        // Decides which side wins
            if (winnerDecide >= 0.5) {
                let finalRound = ` ${message.author} uses their ${weaponListSpaceGunRand} to constantly ${gunAttackRand3}${str}. Eventually,${str} ${deathReasonRand}. ${message.author} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and ${message.author} ${afterBattleRand}.`
               
                let gunEmbed1 = new Discord.RichEmbed()
                .setTitle(`**${message.author.username} VS${str}**`)
                        .setColor('#bb0a1e') 
                        .setDescription(round1 + round2 + round2v2)
                        .setTimestamp()
                        .setFooter("An epic battle between you and another person.");
                
                message.channel.send(gunEmbed1)
            } else if (winnerDecide < 0.5) {
                let finalRound = `${str} uses their ${weaponListSpaceGunRand2} to constantly ${gunAttackRand3} ${message.author}. After a while, ${message.author} ${deathReasonRand}.${str} ${winConditions1Rand} ${bodyPartsRand5} and ${winConditions2Rand}. The crowd ${crowdRand} and ${str} ${afterBattleRand}.`
               
                let gunEmbed2 = new Discord.RichEmbed()
                .setTitle(`**${message.author.username} VS${str}**`)
                        .setColor('#bb0a1e') 
                        .setDescription(round1 + round2 + round2v2)
                        .setTimestamp()
                        .setFooter("An epic battle between you and another person.");
                
                 message.channel.send(gunEmbed2)
                 //space fight end
            }  
            }
            
            
            
       } else {
           //IF NOTHING IS ENTERED
        let failEmbed = new Discord.RichEmbed()
        .setTitle(`**${message.author.username} VS Absolutely nobody!**`)
                    .setColor('#bb0a1e')                        
                    .setDescription(`Seem's like ${message.author.username} doesn't know that you must put a name after writing ~fight`)
                    .setTimestamp()
                    .setFooter("An epic battle between you and, well, nobody.");
            
             message.channel.send(failEmbed)
       }
        
        
        

        
        
        


	},
};