number = 505;
const fs = require('fs');
const Discord = require('discord.js');

module.exports = {
name: 'yuiquotes',
description: `Sends a random quote from Yui Funami.`,
guildOnly: false,
aliases: ['quotes', 'quote'],
cooldown: 3,
execute(message) {
   

    
    let imageNumber = Math.floor (Math.random() * number) + 1;
    
   
    let yuiQuoteS1E1 = ["We're going to be late.", "It certainly isn't unexpected.", "We really are going to be late."
    , "It's been a while since we've been in Akari's house.", "Stop it.", "Akari, congratulations on your acceptance and entry to the Amusement Club!"
    , "Not since we graduated from elementary school last year.", "Hey, I'm right here.", "It's the key to this club room."
    , "Oh, right. We didn't tell you yet. This is the Tea Club's room. They disbanded, so no one's using it right now.", "We're secretly using it."
    , "How are you supposed to get on and off?", "That sounds terrible.", "That's not an exciting ride. Neither is a ferris wheel, for that matter."
    , "Excitement, huh?", "It's a bit typical, but... What about love?", "Yeah, that makes sense.", "There's no one in particular."
    , "I guess there aren't many exciting things...", `Are you writing another "Mirakurun" doujin?`, `Yes. The Tea Club was disbanded. It didn't have enough members.`
    , `What sort of introduction did you give?`, `Calm down!`, `Sorry, she's just overexcited.`, `Don't mind her.`, `I'm Funami Yui.`
    , `You don't know what you're talking about, do you?`, `Should we be lounging around like this?`
    , `Well... I just thought we should experience our youth to the fullest in an ordinary club.`, `Don't scare the newbie.`
    , `Chinatsu-chan, let me know if anything happens. I'll protect you.`, `Really?`, `Were you even listening?`, `Did you know that there's a candy store nearby?`
    , `Let's go.`, `We'll treat you in honor of your acceptance.`, `This way's shorter.`, `Thank you.`, `This is delicious.`, `No wonder you wanted to join the Tea Club.`
    , `Cut it out.`, `There, there.`, `Kyoko, cut it out!`, `You're here.`, `My stomach hurts.`, `What an awful name.`, `Cheer up, Akari.`
    , `Yeah, you're a... good girl. And you're... a really good girl.`, `You must be serious.`, `What is it?`]
    let yuiQuoteS1E2 = [`I bet the people who study all the time would be angry to hear that... Just like her`, `That's not a compliment...`, `Fine... fine Irvine?`
    , `Kyoko, if you lose, we have to pay a fine Irvine!`, `Fine Irvine! Fine...`, `We just need to sort these, right?`, `What an idiot.`
    , `We're going to our club room. Do you need anything else?`, `What sort of prize is that?`, `Did it go up?`, `Should we make some porridge?`, `Open up!`
    , `The porridge's done.`, `You'll spill it.`, `This is for the sick!`, `Just eat as much as you can.`, `You're not okay.`, `Stop your nosebleed first!`, `Hang in there!`]
    let yuiQuoteS1E3 = [`You weren't late, but as punishment for forgetting your homework, you were assigned even more.`, `It's because you oversleep.`
    , `I'm going shopping on my way home.`, `Why don't you try it too so you stop forgetting stuff?`, `Yeah, me too.`, `And once you give up, you find it right away.`
    , `What does that have to do with forgetting things?`, `Don't think about it too hard.`, `Write it on your hand.`, `I started living alone.`
    , `How do you get those confused?`, `It'll be good life experience, and my landlord's a relative.`, `There wasn't much resistance.`, `They weren't for it, either.`
    , `What do you want?`, `Fine, come in.`, `They apparently converted an arts center into an apartment.`, `I already bought some.` 
    , `Don't live here.`, `What do you mean, "then"?`, `What does that even mean?`, `You're hopeless.`, `If Akari and Chinatsu-chan haven't eaten yet, let's invite them, too.`
    , `That's not what I'm worried about.`, `Yeah, Akari? Okay, stay there.`, `They're close by, but they said they're lost.`, `I'm going to go meet them.`, `You think so?`
    , `What a pain.`, `River.`, `Hey, aren't we having lunch?`, `You already saw this, didn't you Kyoko?`, `What are you looking for?`, `This isn't a variety show.`
    , `You do whatever you want, don't you?`, `It's not perfect at all.`, `I just learned from helping my mom.`, `What are you doing?`
    , `You just want to eat that now, don't you?`, `That's not okay.`, `Don't make your juniors take care of you.`, `Hey! Eat your snacks after lunch!`
    , `We're out of miso.`, `Get the mixed miso made from local beans.`, `She's considerate sometimes.`, `Kyoko, come here.`, `I've always wanted to do this.`
    , `It's okay. Don't be scared.`, `That didn't happen! Stop having weird fantasies and acting like they really happened!`
    , `Akari, you're a childhood friend too. You should know better than to believe her!`, `Nothing like that has ever happened between us!`
    , `Our parents were friends, so it just happened naturally, I think.`, `She's unbelievable. Sorry, Chinatsu-chan.`, `This got dirty. Sorry.`
    , `I'll wash it for you, so take it off.`, `I'll get you a change of clothes, so take a shower.`, `It's sticky, isn't it? It'll stain your clothes.`
    , `They might not be the right size, but you should be able to wear them.`, `Chinatsu-chan, I'll be watching her, so take your time.`, `Hey! cut it out.`
    , `Huh? You're wearing pajamas!`, `Don't forget anything on your way out.`, `You can return it whenever.`, `See you tomorrow.`, `Go home already.`
    , `No, but don't you want to get really strong and beat the boss without breaking a sweat?`, `That leads to long battles, and I'd feel bad if I lost.`
    , `Are you really going to stay here?`, `We haven't hung out with them yet, have we?`, `Can I turn out the lights?`, `Hey! Don't sniff it!`
    , `Won't you get fat?`, `That's the last one.`, `Huh? But you're hungry.`, `You're hopeless, Kyoko.`, `It's morning...`
    , `Kyoko! We're going to be late! Hey, Kyoko! Wake up! Wake up!`, `Sorry, Akari and Chinatsu-chan!`, `You should be feeling remorse!`
    , `Why are you bragging?`, `Why are you competing with her?`, `Shut up and hurry!`
    , `Yuru Yuri's supposedly secret protagonist Funami Yui here. They told me to do the preview, but nothing particularly exciting happens in an ordinary middle school student's life.`
    , `The next episode has tests, summer vacation, the ocean, fireworks, and chitose nearly dies. See? Nothing out of the ordinary, right?`] 
    let yuiQuoteS1E4 = [`This time of year's...`, 'Strips of paper!', 'Go back to your grave.', 'I wish for my family to always be healthy.', 'I wish for peace'
    , 'Ayano and Chitose wrote ones too.', `Why don't we write our own?`, `Let's see`, 'A kiss would be... a little embarrassing...', 'What did you write, Kyoko?'
    , `You couldn't come up with anything else?`, `I'm still thinking.`, 'Why are you acting so grumpy? A kiss is...', `It'd be embarrassing to kiss you on the lips. Sorry.`
    , 'How earnest.', 'She was up last night, too.', `No, no. It's almost...`, 'Final exams?', `I wonder if she'll be okay.`, 'Thanks for inviting us.'
    , 'Worry not Angkor Wat!', 'What are you looking at?', `Why don't you come to my place some time? We can hang out.`, 'Once in a while, you idiot.'
    , `It's starting to get cold.`, `It's been a while since I've lit fireworks`, 'I thought I saw some writing', 'Thanks for inviting us.'
    , `Kyoko, it's dangerous to run`, `Don't do that!`,]
    let yuiQuoteS1E5 = [`Akari... How pitiful...`, `I don't think she was hoping for a philosophical answer.`
    , `This is the Comic Extreme Market, also known as Comuket. It's a doujinshi market.`, `Yeah. Kyoko's participating as a circle.`, `She looks like she's actually going to cry.`
    , `I'm really sorry.`, `Yeah. I can't believe you didn't know.`, `It's your fault you forgot you only have three circle tickets.`, `I'll take Chitose to the bathroom.`
    , `Sorry, but you should give up.`, `Kyoko's suprisingly talented.`, `Yeah, you're right.`, `It's not me...`, `Chitose! Keep it together!`, `Yeah, overworked.`
    , `Just have this stuff delivered.`, `Huh? It's unlocked.`, `It looks like you're in the middle of something...`, `Sorry. I'm really sorry.`]
    let yuiQuoteS1E6 = [`What are you going to do?`, `What's with the face?`, `You're the class officer today.`
    , `I don't believe you. It's not as though you'd teach her anything useful`, `Oh, good. Thanks for waiting.`, `I never realized you thought of me this way.`
    , `Thanks, Kyoko. We'll always be together. I love you too.`, `No, it's fine, Chinatsu-chan`, `That doesn't make any sense. Chinatsu-chan, just ignore her.`
    , `Calm down, both of you! Do you have any idea of what you're saying?`, `How did this happen?`, `I never thought a bomb like this would be hidden inside Chinatsu-chan.`
    , `The shock knocked Akari out.`, `This is scary. My image of Chinatsu-chan is crumbling.`, `That was great!`, `Chinatsu-chan, thanks for the wonderful story. I'm delighted.`
    , `Chinatsu-chan you're really good at drawing.`, `Really? That's amazing!`, `What are you expecting?`, `I want to mold clay. I really want to mold clay. Clay, clay cla-cla-clay.`
    , `Clay, clay`, `I used to love this`, `How skillful.`, `You don't need to show me.`, `By the way did you hear about the second year's field trip?`, `Of course not, huh?`
    , `Kyoto and Osaka.`, `Yeah. What do you think of hot springs?`, `Is there somewhere we can go by ourselves?`, `We're talking about taking a trip.`
    , `We're thinking about going to the hot springs together.`, `It could only be Kyoko.`, `What else is commonly brought back from Kyoto beside yatsuhashi?`, `Why would they?`
    , `Sure, I guess.`, `My relative's kid is coming tommorrow.`, `I've got to play with her. Do you still want to come?`, `She's surprised to see the real Mirakurun here.`
    , `What were you expecting to happen?`, `It's wonderful that you know how to look after children. Let's get married.`, `Chinatsu-chan, you're good with kids.`, `What happened?`
    , `Let's hear it!`, `What a sad girl.`]
    let yuiQuoteS1E7 = [`No, it's pretty clear you're out of it.`, `You still had that box...`, `It's really intense in here.`, `What are we supposed to do?`
    , `Was there someone you wanted to be a couple with?`, `I can't imagine what they're up to.`, `How are we supposed to pretend to be couples?`, `No, that'd be embarrasing.`
    , `What is this feeling?`, `What should we do?`, `Kyoko's always coming up with nonsense for us to do.`, `She's a handful. I bet she's fun to watch from a distance.`
    , `As her childhood friend, I'm stuck right next to her.`, `Well, at least it's not boring.`, `Yeah. Kyoko's usually off the mark, though.`
    , `Everyone will be coming back soon.`, `Nothing wrong with that.`, `Yeah, I know what you mean.`, `Kyoko. Thanks for everything.`, `I don't have one.`
    , `I wished for us to be madly in love, of course.`, `Chinatsu, come here.`, `Mari-chan, are you hungry?`, `I'll get food from downstairs. What do you want?`
    , `Sea urchin? What a gourmet little girl.`, `Really? You'll be eaten.`, `Really? Mari-chan, thank you. But don't say that in front of Mirakurun, okay?`
    , `Mari-chan, you're welcome any time.`, `Chinatsu-chan's card is terrifying!`, `I wonder if Akari passed out?`, `Oh, this one's Kyoko's. Wow. They're all of herself.`]
    let yuiQuoteS1E8 = [`I'm sorry. It's starting.`, `Looks like everyone came to do their spring break assignments.`, `Don't bother her. Let's study here.`
    , `You're doing math?`, `Do it yourself.`, `I told you not to bother her.`, `She's not scary.`, `What are you doing? If you don't get something, I'll show you how to do it.`
    , `Why are you proud of that?`, `Yeah, that's true. She's always with Ayano.`, `I wonder if they had a fight?`, `What are you doing? Leave her alone. She's focused on reading.`
    , `Quiet!`, `Your hair's in the way.`, `I'll pull it out!`, `You haven't even opened your problem set!`, `I'm telling you not to bother her.`
    , `Huh? It's because you keep bothering her. She probably wants to focus on reading.`, `Sister?`, `I've been thinking for a while now, but I don't think she likes you.`
    , `What do you mean, "see?"`, `I see. Chitose has nose bleeds, and Chizuru-san drools.`, `Leeway freeway!`, `Chizuru-san, are you in any clubs or organizations?`
    , `I see. I didn't realize Chitose had a twin.`, `I see. Well, allow me to introduce myself properly. I'm Funami Yui.`
    , `I wonder why she hates you so much. Maybe it's because you were so annoying at the library the other day.`, `You really didn't notice?`, `You're really upset.`
    , `Kyoko. Do you want some ice cream?`, `Apoligize the next time you see her. I'll go with you.`]
    

    yuiQuotes = Math.floor (Math.random() * 8) + 1;

    let quoteNumber = yuiQuoteS1E1.length + yuiQuoteS1E2.length + yuiQuoteS1E3.length + yuiQuoteS1E4.length + yuiQuoteS1E5.length + yuiQuoteS1E6.length + yuiQuoteS1E7.length + yuiQuoteS1E8.length

  




    
    if (yuiQuotes === 1) { //Season 1 Episode 1
        
        yuiQuoteS1E1 = yuiQuoteS1E1[Math.floor(Math.random()*yuiQuoteS1E1.length)];
        
        let yuiQuoteEmbedS1E1 = new Discord.RichEmbed()
            .setTitle("**Yui Quote**")
            .attachFiles([`./ImagesYui/${imageNumber}.png`])
            .setThumbnail(`attachment://${imageNumber}.png`)
            .setDescription(`"${yuiQuoteS1E1}"`)
            .setTimestamp()
            .setFooter(`Awesome Yui quote from YrYr S1E1. There are ${quoteNumber} total quotes available.`);

			
			message.channel.send(yuiQuoteEmbedS1E1)
    } else if (yuiQuotes === 2) { // Season 1 Episode 2
        
        yuiQuoteS1E2 = yuiQuoteS1E2[Math.floor(Math.random()*yuiQuoteS1E2.length)];
        
        let yuiQuoteEmbedS1E2 = new Discord.RichEmbed()
            .setTitle("**Yui Quote**")
            .attachFiles([`./ImagesYui/${imageNumber}.png`])
            .setThumbnail(`attachment://${imageNumber}.png`)
            .setDescription(`"${yuiQuoteS1E2}"`)
            .setTimestamp()
            .setFooter(`Awesome Yui quote from YrYr S1E2. There are ${quoteNumber} total quotes available.`);

            message.channel.send(yuiQuoteEmbedS1E2)
    } else if (yuiQuotes === 3) { // Season 1 Episode 3
        yuiQuoteS1E3 = yuiQuoteS1E3[Math.floor(Math.random()*yuiQuoteS1E3.length)];
        
        let yuiQuoteEmbedS1E3 = new Discord.RichEmbed()
            .setTitle("**Yui Quote**")
            .attachFiles([`./ImagesYui/${imageNumber}.png`])
            .setThumbnail(`attachment://${imageNumber}.png`)
            .setDescription(`"${yuiQuoteS1E3}"`)
            .setTimestamp()
            .setFooter(`Awesome Yui quote from YrYr S1E3. There are ${quoteNumber} total quotes available.`);

            message.channel.send(yuiQuoteEmbedS1E3)

    } else if (yuiQuotes === 4) { //Season 1 Episode 4
        yuiQuoteS1E4 = yuiQuoteS1E4[Math.floor(Math.random()*yuiQuoteS1E4.length)];
        
        let yuiQuoteEmbedS1E4 = new Discord.RichEmbed()
            .setTitle("**Yui Quote**")
            .attachFiles([`./ImagesYui/${imageNumber}.png`])
            .setThumbnail(`attachment://${imageNumber}.png`)
            .setDescription(`"${yuiQuoteS1E4}"`)
            .setTimestamp()
            .setFooter(`Awesome Yui quote from YrYr S1E4. There are ${quoteNumber} total quotes available.`);

            message.channel.send(yuiQuoteEmbedS1E4)
    
    
    } else if (yuiQuotes === 5) { //Season 1 Episode 5
        yuiQuoteS1E5 = yuiQuoteS1E5[Math.floor(Math.random()*yuiQuoteS1E5.length)];
        
        let yuiQuoteEmbedS1E5 = new Discord.RichEmbed()
            .setTitle("**Yui Quote**")
            .attachFiles([`./ImagesYui/${imageNumber}.png`])
            .setThumbnail(`attachment://${imageNumber}.png`)
            .setDescription(`"${yuiQuoteS1E5}"`)
            .setTimestamp()
            .setFooter(`Awesome Yui quote from YrYr S1E5. There are ${quoteNumber} total quotes available.`);

            message.channel.send(yuiQuoteEmbedS1E5)
    } else if (yuiQuotes === 6) { //Season 1 Episode 6
        yuiQuoteS1E6 = yuiQuoteS1E6[Math.floor(Math.random()*yuiQuoteS1E6.length)];
        
        let yuiQuoteEmbedS1E6 = new Discord.RichEmbed()
            .setTitle("**Yui Quote**")
            .attachFiles([`./ImagesYui/${imageNumber}.png`])
            .setThumbnail(`attachment://${imageNumber}.png`)
            .setDescription(`"${yuiQuoteS1E6}"`)
            .setTimestamp()
            .setFooter(`Awesome Yui quote from YrYr S1E6. There are ${quoteNumber} total quotes available.`);

            message.channel.send(yuiQuoteEmbedS1E6) 
     } else if (yuiQuotes === 7) { //Season 1 Episode 7
        yuiQuoteS1E7 = yuiQuoteS1E7[Math.floor(Math.random()*yuiQuoteS1E7.length)];
        
        let yuiQuoteEmbedS1E7 = new Discord.RichEmbed()
            .setTitle("**Yui Quote**")
            .attachFiles([`./ImagesYui/${imageNumber}.png`])
            .setThumbnail(`attachment://${imageNumber}.png`)
            .setDescription(`"${yuiQuoteS1E7}"`)
            .setTimestamp()
            .setFooter(`Awesome Yui quote from YrYr S1E7. There are ${quoteNumber} total quotes available.`);

            message.channel.send(yuiQuoteEmbedS1E7) 
     } else if (yuiQuotes === 8) { //Season 1 Episode 8
        yuiQuoteS1E8 = yuiQuoteS1E8[Math.floor(Math.random()*yuiQuoteS1E8.length)];
        
        let yuiQuoteEmbedS1E8 = new Discord.RichEmbed()
            .setTitle("**Yui Quote**")
            .attachFiles([`./ImagesYui/${imageNumber}.png`])
            .setThumbnail(`attachment://${imageNumber}.png`)
            .setDescription(`"${yuiQuoteS1E8}"`)
            .setTimestamp()
            .setFooter(`Awesome Yui quote from YrYr S1E8. There are ${quoteNumber} total quotes available.`);

            message.channel.send(yuiQuoteEmbedS1E8)
     }
},
};
