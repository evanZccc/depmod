const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'roast',
    description: 'Roast a user with a random insult.',
    execute(message, args) {
        const user = message.mentions.users.first();

        if (!user) {
            return message.reply('Please mention a user to roast!');
        }

        const roasts = [
            "*Puts you in the oven.*",
            "You're so stupid.",
            "Sorry, I can't hear you over how annoying you are.",
            "I've got better things to do.",
            "You're as dumb as Cleverbot.",
            "Your IQ is lower than the Mariana Trench.",
            "You're so annoying even the flies stay away from your stench.",
            "Go away, please.",
            "I'd give you a nasty look but you've already got one.",
            "It looks like your face caught fire and someone tried to put it out with a hammer.",
            "Your family tree must be a cactus because everyone on it is a prick.",
            "Someday you will go far, and I hope you stay there.",
            "The zoo called. They're wondering how you got out of your cage.",
            "I was hoping for a battle of wits, but you appear to be unarmed.",
            "You are proof that evolution can go in reverse.",
            "Brains aren't everything, in your case, they're nothing.",
            "Sorry I didn't get that, I don't speak idiot.",
            "Why is it acceptable for you to be an idiot, but not for me to point it out?",
            "We all sprang from apes, but you did not spring far enough.",
            "Even monkeys can go to space, so clearly you lack some potential.",
            "It's brains over brawn, yet you have neither.",
            "You look like a monkey, and you smell like one too.",
            "Even among idiots you're lacking.",
            "You fail even when you're doing absolutely nothing.",
            "If there was a vote for 'least likely to succeed' you'd win first prize.",
            "I'm surrounded by idiots... Or, wait, that's just you.",
            "I wanna go home. Well, really I just want to get away from the awful aroma you've got going there.",
            "Every time you touch me I have to go home and wash all my clothes nine times just to get a normal smell back.",
            "If I had a dollar for every brain you don't have, I'd have one dollar.",
            "I'd help you succeed but you're incapable.",
            "Your hairline is built like a graph chart, positive and negative forces attract but the clippers and your hair repel.",
            "I know a good joke! You!",
            "You have two parts of your brain, 'left' and 'right'. In the left side, there's nothing right. In the right side, there's nothing left.",
            "Is your ass jealous of the amount of shit that just came out of your mouth?",
            "I don't engage in mental combat with the unarmed.",
            "Two wrongs don't make a right, take your parents as an example.",
            "Your birth certificate is an apology letter from the condom factory.",
            "You sound reasonable. It must be time to up my medication!",
            "You must have been born on a highway because that's where most accidents happen.",
            "You're so ugly, when your mom dropped you off at school she got a fine for littering.",
            "If laughter is the best medicine, your face must be curing the world.",
            "I'd like to see things from your point of view but I can't seem to get my head that far up my ass.",
            "The only way you'll ever get laid is if you crawl up a chicken's ass and wait.",
            "I'm jealous of all the people that haven't met you!",
            "If I had a face like yours, I'd sue my parents.",
            "There's only one problem with your face. I can see it.",
            "Don't you love nature, despite what it did to you?",
            "What language are you speaking? Cause it sounds like bullshit.",
            "Stupidity is not a crime so you are free to go.",
            "So, a thought crossed your mind? Must have been a long and lonely journey.",
            "You have a room temperature IQ - if the room is in Antarctica.",
            "If you really want to know about mistakes, you should ask your parents.",
            "I would ask you how old you are but I know you can't count that high.",
            "Do you want to know how I get all these insults? I use something called intelligence.",
            "I was going to give you a nasty look, but you already have one.",
            "I don't know what your problem is, but I'll bet it's hard to pronounce.",
            "Brains aren't everything. In your case they're nothing.",
            "As an outsider, what do you think of the human race?",
            "You look like a before picture.",
            "Oh, what? Sorry. I was trying to imagine you with a personality.",
            "You're the reason the gene pool needs a lifeguard.",
            "We can always tell when you are lying. Your lips move.",
            "I may love to shop but I'm not buying your bullshit.",
            "Hell is wallpapered with all your deleted selfies.",
            "You are living proof that manure can sprout legs and walk.",
            "You do realize makeup isn't going to fix your stupidity?",
            "Calling you an idiot would be an insult to all stupid people.",
            "You have the perfect face for radio.",
            "Aww, it's so cute when you try to talk about things you don't understand.",
            "If I wanted to hear from an asshole, I'd fart.",
            "What's the difference between you and an egg? Eggs get laid!",
            "You look like a rock smashed into a pile of sand, rolled into a blunt, and got smoked through an asthma inhaler.",
            "Your advice is about as useful as a paper-mache bomb shelter.",
            "Is it sad that your theme song might as well have a 0/0 signature?",
            "You're so fat, you make the galaxy look like it's on the molecular scale.",
        ];

        const roast = roasts[Math.floor(Math.random() * roasts.length)];

        const embed = new EmbedBuilder()
            .setTitle('😓 Roast')
            .setDescription(`${user}, ${roast}`)
            .setColor('#0099ff')
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};
