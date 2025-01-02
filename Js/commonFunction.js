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

function showSectionById(id){
    document.getElementById('donation-page').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}