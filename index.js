const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'API_KEY',
    name: 'jokeGenerator'
});

//Start Handler
bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
    }

    bot.postMessageToChannel(
        'general', 
        'Get ready to hear some really bad jokes!',
        params
    );
});

//Error Handler
bot.on('error', (err) => console.log(err));

//Message Handler
bot.on('message', (data) => {
    if(data.type !== 'message') {
        return;
    }

    handleMessage(data.text);
});

//Respond to the data
function handleMessage(message) {
    if(message.includes(' chucknorris')) {
        chuckJoke();
    }
    else if(message.includes(' yomama')) {
        yomamaJoke();
    }
    else if(message.includes(' random')) {
        randomJoke();
    }
    else if(message.includes(' help')) {
        getHelp();
    }
}

//Telling a CN Joke
function chuckJoke() {
    axios.get('https://api.icndb.com/jokes/random')
    .then(res => {
        const joke = res.data.value.joke;

        const params = {
            icon_emoji: ':laughing:'
        }
    
        bot.postMessageToChannel(
            'general', 
            `Chuck Norris: ${joke}`,
            params
        );
    })
}


//Telling a YM Joke
function yomamaJoke() {
    axios.get('http://api.yomomma.info')
    .then(res => {
        const joke = res.data.joke;

        const params = {
            icon_emoji: ':laughing:'
        }
    
        bot.postMessageToChannel(
            'general', 
            `Yo Mama: ${joke}`,
            params
        );
    })
}

//Telling a Random Joke
function randomJoke() {
    const rand = Math.floor(Math.random() * 2) + 1;
    if(rand === 1) {
        chuckJoke();
    }
    else if(rand === 2) {
        yomamaJoke();
    }
}

//Getting Help
function getHelp() {
    const params = {
        icon_emoji: ':laughing:'
    }

    bot.postMessageToChannel(
        'general', 
        `Type '@jokeGenerator' with either 'chucknorris', 'yomama' or 'random' to get a joke!`,
        params
    );
}
