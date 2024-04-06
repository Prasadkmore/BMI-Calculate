const forms=document.querySelector('form');

forms.addEventListener('submit',function(e){
e.preventDefault();

const height=parseInt(document.querySelector('#height').value);
const weight=parseInt(document.querySelector('#weight').value)

const result=document.querySelector('#results');

if(height === '' || height < 0 || isNaN(height)){

    result.innerHTML=`Please give a valid height ${height} `;
    result.style.color='red';
}

else if(weight === '' || weight < 0 || isNaN(weight)){

    result.innerHTML=`Please give a valid weight ${weight} `;
    result.style.color='red';
}
else{

    const bmi=(weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</sapn>`
    result.style.backgroundColor='white';
}


});