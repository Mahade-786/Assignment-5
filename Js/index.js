// Blog button
function indexToBlog(){
    window.location.assign('blog.html');
}

// Noakhali donate button section

document.getElementById('noakhali-donate-btn').addEventListener('click',function(event){
    event.preventDefault();

    let inputAmount = getInputValueById('noakhali-input-amount');
    let totalAmount = getInputInnerTextById('noakhali-total-amount');
    let mainBalance = getInputInnerTextById('main-Balance');

    if(isNaN(inputAmount) === true){
        alert('Invalid Number,Please write valid number');
        document.getElementById('noakhali-input-amount').value ='';
        return;
    }

    if(inputAmount <= 0){
        alert('Invalid Number,Please write valid number');
        document.getElementById('noakhali-input-amount').value ='';
        return;
    }

    if(inputAmount > mainBalance){
        alert('Insufficient Balance');
        document.getElementById('noakhali-input-amount').value ='';
        return;
    }

    document.getElementById('noakhali-total-amount').innerText = inputAmount + totalAmount;

    document.getElementById('main-Balance').innerText = mainBalance - inputAmount;
                                     
    document.getElementById('noakhali-input-amount').value ='';

    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p =document.createElement('p');
    
    h3.innerText = inputAmount + "Taka Donate for Flood Relief in Noakhali, Bangladesh";
    p.innerText = `Date: ${new Date().toString()}`;

    div.appendChild(h3);
    div.appendChild(p);

    h3.style.fontWeight = 'bold';
    h3.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donation-history').appendChild(div);

    //show modal
    document.getElementById('my-modal').showModal();
    
    


});



// Feni donate button section

document.getElementById('feni-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    

    let inputAmount = getInputValueById('feni-input-amount');
    let totalAmount = getInputInnerTextById('feni-total-amount');
    let mainBalance = getInputInnerTextById('main-Balance');

    if(isNaN(inputAmount) === true){
        alert('Invalid Number,Please write valid number');
        document.getElementById('feni-input-amount').value ='';
        return;
    }

    if(inputAmount <= 0){
        alert('Invalid Number,Please write valid number');
        document.getElementById('feni-input-amount').value ='';
        return;
    }

    if(inputAmount > mainBalance){
        alert('Insufficient Balance');
        document.getElementById('feni-input-amount').value ='';
        return;
    }

    document.getElementById('feni-total-amount').innerText = inputAmount + totalAmount;
    document.getElementById('main-Balance').innerText = mainBalance - inputAmount;
    document.getElementById('feni-input-amount').value ='';

    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p =document.createElement('p');
    
    h3.innerText = inputAmount + "Taka Donate for Flood Relief in Feni, Bangladesh";
    p.innerText = `Date: ${new Date().toString()}`;

    div.appendChild(h3);
    div.appendChild(p);

    h3.style.fontWeight = 'bold';
    h3.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donation-history').appendChild(div);

    //show modal
    document.getElementById('my-modal').showModal();
    
});



// Quota donate section

document.getElementById('quota-donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    

    let inputAmount = getInputValueById('quota-input-amount');
    let totalAmount = getInputInnerTextById('quota-total-amount');
    let mainBalance = getInputInnerTextById('main-Balance');

    if(isNaN(inputAmount) === true){
        alert('Invalid Number,Please write valid number');
        document.getElementById('quota-input-amount').value ='';
        return;
    }

    if(inputAmount <= 0){
        alert('Invalid Number,Please write valid number');
        document.getElementById('quota-input-amount').value ='';
        return;
    }

    if(inputAmount > mainBalance){
        alert('Insufficient Balance');
        document.getElementById('quota-input-amount').value ='';
        return;
    }

    document.getElementById('quota-total-amount').innerText = inputAmount + totalAmount;
    document.getElementById('main-Balance').innerText = mainBalance - inputAmount;
    document.getElementById('quota-input-amount').value ='';

    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p =document.createElement('p');
    
    h2.innerText = inputAmount + "Taka Donated For Aid for Quota Movement, Bangladesh";
    p.innerText = `Date: ${new Date().toString()}`;

    div.appendChild(h2);
    div.appendChild(p);

    h2.style.fontWeight = 'bold';
    h2.style.marginBottom = '12px';
    div.style.border = '1px solid gray';
    div.style.borderRadius = '16px';
    div.style.padding = '16px';
    div.style.marginBottom = '8px';
    document.getElementById('donation-history').appendChild(div);

    //show modal
    document.getElementById('my-modal').showModal();
    
});


// Donation Button by js

document.getElementById('donation-btn').addEventListener('click',function(){

    showSectionById('donation-page');
   


    document.getElementById('donation-btn').classList.remove('bg-white','border','border-[#1111114D]');
    document.getElementById('donation-btn').classList.add('bg-lime-300','hover:bg-lime-100');

    document.getElementById('history-btn').classList.add('bg-white');
    document.getElementById('history-btn').classList.remove('border-none','bg-lime-300','hover:bg-lime-100');

    
});


// History button by Js

document.getElementById('history-btn').addEventListener('click',function(){

    showSectionById('donation-history');
   

    document.getElementById('donation-btn').classList.add('bg-white','hover:bg-lime-200','border','border-[#1111114D]');
    document.getElementById('donation-btn').classList.remove('bg-lime-300','hover:bg-lime-100');

    document.getElementById('history-btn').classList.add('border-none','bg-lime-300','hover:bg-lime-100');
    document.getElementById('history-btn').classList.remove('bg-white');

   
   

});



