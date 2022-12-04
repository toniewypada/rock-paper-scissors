function getComputerChoice(){
    const options = ['Rock', 'Paper', 'Scissors'];
    const selectRandom = Math.floor(Math.random() * options.length);
    return options[selectRandom];
};

