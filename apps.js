let register = document.querySelector('.register');
let log = document.querySelector('.log');
//////////////////////////
console.log('ajdaksh')

let logult = document.querySelector('#logult');
let regult = document.querySelector('#regult');
///////////////
logult.addEventListener('click',()=>{
console.log('ajdaksh');
register.style.display='none';
log.style.display='block';
});
regult.addEventListener('click',()=>{
console.log('ajdaksh');
log.style.display='none';
register.style.display='block';
});
/////////////////////////////
let regname = document.getElementById('regname');
let regpas = document.getElementById('regpas');
let regnamm=regname.value; 
let regpass=regpas.value

let regbtn = document.querySelector('.regbtn');
regbtn.addEventListener('click',()=>{
    console.log('ok');
 regnamm1=regname.value; 
 regpass=regpas.value;

    console.log(regnamm);
    console.log(regpass);


});
regbtn.addEventListener('click',()=>{
    console.log(regnamm1);
    log.style.display='block';
register.style.display='none';

});
///////////////////////////////////
let lognam = document.getElementById('lognam');
let logpass = document.getElementById('logpass');
let logbtn = document.querySelector('.logbtn');
/////////////////
let     lonam=lognam.value;

logbtn.addEventListener('click',()=>{
    lonam=lognam.value;

    logpass=logpass.value;
    console.log(lognam);
    console.log(logpass);
    
    
});
logbtn.addEventListener('click',()=>{
    lonam=lognam.value;

    logpass=logpass.value;
    console.log(lognam);
    console.log(logpass);
    
    
});
logbtn.addEventListener('click',()=>{
    if (lonam==='tayyib2'||lonam==='tayyib3') {
        console.log('regnamm');

    }
    else{
        alert('zxc')
    }
})
