// Blog button
function homeToBlog(){
    window.location.assign('blog.html');
}

// Noakhali donate button section

document.getElementById('noakhali-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log('button clicked');

    let inputAmount = getInputValueById('noakhali-input-amount');
    let totalAmount = getInputInnerTextById('noakhali-total-amount');
    let mainBalance = getInputInnerTextById('main-Balance');

    if(isNaN(inputAmount) === true){
        alert('Invalid Number,Please write valid number');
        return;
    }

    if(inputAmount <= 0){
        alert('Invalid Number,Please write valid number');
        return;
    }

    if(inputAmount > mainBalance){
        alert('Insufficient Balance');
        return;
    }

    document.getElementById('noakhali-total-amount').innerText = inputAmount + totalAmount;
    document.getElementById('main-Balance').innerText = mainBalance - inputAmount;

    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p =document.createElement('p');
    
    h3.innerText = inputAmount + "Taka Donate for Flood Relief in Noakhali, Bangladesh";
    p.innerText = `Date: ${new DataTransfer().toString()}`;

    div.appendChild(h3);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donation-history').appendChild(div);

    //show modal
    document.getElementById('modal').showModal();
    
    


});



// Feni donate button section

document.getElementById('feni-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log('button clicked');

    let inputAmount = getInputValueById('feni-input-amount');
    let totalAmount = getInputInnerTextById('feni-total-amount');
    let mainBalance = getInputInnerTextById('main-Balance');

    if(isNaN(inputAmount) === true){
        alert('Invalid Number,Please write valid number');
        return;
    }

    if(inputAmount <= 0){
        alert('Invalid Number,Please write valid number');
        return;
    }

    if(inputAmount > mainBalance){
        alert('Insufficient Balance');
        return;
    }

    document.getElementById('feni-total-amount').innerText = inputAmount + totalAmount;
    document.getElementById('main-Balance').innerText = mainBalance - inputAmount;

    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p =document.createElement('p');
    
    h3.innerText = inputAmount + "Taka Donate for Flood Relief in Feni, Bangladesh";
    p.innerText = `Date: ${new DataTransfer().toString()}`;

    div.appendChild(h3);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donation-history').appendChild(div);

    //show modal
    document.getElementById('modal').showModal();
    
});



// Quota donate section

document.getElementById('quota-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log('button clicked');

    let inputAmount = getInputValueById('quota-input-amount');
    let totalAmount = getInputInnerTextById('quota-total-amount');
    let mainBalance = getInputInnerTextById('main-Balance');

    if(isNaN(inputAmount) === true){
        alert('Invalid Number,Please write valid number');
        return;
    }

    if(inputAmount <= 0){
        alert('Invalid Number,Please write valid number');
        return;
    }

    if(inputAmount > mainBalance){
        alert('Insufficient Balance');
        return;
    }

    document.getElementById('quota-total-amount').innerText = inputAmount + totalAmount;
    document.getElementById('main-Balance').innerText = mainBalance - inputAmount;

    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p =document.createElement('p');
    
    h3.innerText = inputAmount + "Taka Donated For Aid for Quota Movement, Bangladesh";
    p.innerText = `Date: ${new DataTransfer().toString()}`;

    div.appendChild(h3);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donation-history').appendChild(div);

    //show modal
    document.getElementById('modal').showModal();
    
});


// Donation Button by js




