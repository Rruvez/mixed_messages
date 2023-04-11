// an object with nested arrays in key values. With the help of mixedMessage function you can combine texts inside the nested arrays of each key. 
const tipsObj = {
    arr1: [['Don\'t', 'You should never', 'Try not to', 'Never'], ['lose control over your emotions', 'get lost in negative thoughts', 'please laziness', 'let bad habits ruin your life']],
    arr2: [['Reminder:', 'Keep in mind:', 'Important:'], ['Believe in yourself and all that you are', 'Success is not final, failure is not fatal: it is the courage to continue that counts', 'The future belongs to those who believe in the beauty of their dreams', 'You are never too old to set another goal or to dream a new dream', 'Do not wait for opportunities, create them', 'You miss 100% of the shots you don\'t take', 'Don\'t be afraid to fail. Be afraid not to try']],
    arr3: [['Persistence', 'Gratitude', 'Consistency', 'Action', 'Courage', 'Discipline', 'Resilience', 'Positivity', 'Patience', 'Focus', 'Kindness', 'Self-belief', 'Perseverance', 'Growth mindset', 'Mindfulness'], ['is your rule of thumb', 'is what you need to practice', 'is what you need', 'is in your character', 'is your good feature']],
    arr4: [['Ask yourself:', 'Ask yourself a question:', 'Tell yourself:', 'Look at the mirror and tell yourself:'], ['\"Do I want to change my life?\"', '\"How am I going to solve the problem?', '\"What am I going to tell my grandchildren before I die?']]
}

let mixedMessage = obj => {
    // an empty array where we will push our random tips
    let tipsList = [];
    // generate random tips
    for (let key in obj) {
        let tip = [];
        for (let i = 0; i < obj[key].length; i++) {
            let randTip = obj[key][i][Math.floor(Math.random() * obj[key][i].length)];
            tip.push(randTip);
        }
        tipsList.push(tip.join(' '));
    }

    // log introductory string
    console.log('Motivational tips of the day:')

    // log tips in random sequence
    const temp = tipsList.length
    // change the number in 'i < 3' to adjust the number of tips you want to log
    for (let i = 0; i < 3; i++) {
        let tip = tipsList.splice(Math.floor(Math.random() * tipsList.length), 1);
        console.log(tip.toString());
    }
}

mixedMessage(tipsObj);