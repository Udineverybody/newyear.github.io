
const ubahWarna = document.getElementById('ubah-warna');
const h1 = document.getElementById('h1');

ubahWarna.addEventListener('click', function (){
    // document.body.style.backgroundColor ='orange';

    // document.body.setAttribute('class','color');
    document.body.classList.toggle('color');

});


const linkTree = document.createElement('button');
const colorSun = document.createTextNode('color');

linkTree .appendChild(colorSun);
linkTree.setAttribute('type','button');
ubahWarna.after(linkTree);

linkTree.addEventListener('click', function(){
    const r = Math.round(Math.random() * 125 + 1);
    const g = Math.round(Math.random() * 125 + 1);
    const b = Math.round(Math.random() * 125 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +', '+g+', '+b+' )';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function(){
    const r =sMerah.value
    document.body.style.backgroundColor = 'rgb('+ r +', 100  ,100 )'
});

sHijau.addEventListener('input', function(){
    const r =sMerah.value;
    const g =sHijau.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +', 100)'
});

sBiru.addEventListener('input', function(){
    const r =sMerah.value;
    const g =sHijau.value;
    const b =sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +'  ,'+ b+' )'
});

document.body.addEventListener('mousemove', function(event){

    const xpost = (Math.round(event.clientX / window.innerWidth) * 255);
    const ypost = (Math.round(event.clientY / window.innerHeight) * 255);
    
    document.body.style.backgroundColor = ('rgba('+xpost+','+ypost+',100)');
    
});