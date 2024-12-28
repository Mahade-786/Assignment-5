function getInputValueById(id){
    const amount = document.getElementById(id).value;
    const value = parseFloat(amount);
    return value;
}

function getInputInnerTextById(id){
    const amount = document.getElementById(id).innerText;
    const balance = parseFloat(amount);
    return balance;
}