const judul=document.getElementById('judul');
judul.innerHTML ='<em>Saifuddin<em>';
judul.style.color ='red';
// judul.style.fontStyle ='italic';
// judul.style.fontWeight = 'bold';
// judul.style.fontSize ='5rem';

// const a = document.getElementsByName('section #a a');
// a.setAttribute ='border,0';

// Dom Manipulation

// manipulation Baru

// const pBaru= document.createElement('p');
// const newMassage= document.createTextNode('Paragraf Baru');

// pBaru.appendChild(newMassage);

// const section= document.getElementById('a');
// section.appendChild(pBaru);


// const newEra = document.createElement('li');
// const mNew = document.createTextNode('item new');

// newEra.appendChild(mNew);

// const jancok = document.querySelector('section#b ul');
// const li2 = jancok.querySelector('li:nth-child(4)');

// jancok.insertBefore(newEra, li2);

// // const Link = document.getElementsByTagName('a')[0];
// // section.removeChild(Link);


// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2New = document.createElement('h2');
// const textsNew = document.createTextNode('Judul Baru');

// h2New.appendChild(textsNew);

// sectionB.replaceChild(h2New,p4);

// sectionB.style.color = 'red';
// h2New.style.color ='blue';
// h2New.style.backgroundColor ='orange';
// h2New.style.fontSize ='2rem';
// h2New.style.position ='relative';

// judul.style.backgroundColor ='orange';
// judul.style.color ='white';
// judul.position ='relative';



const p2 = document.querySelector('.p2');
function color (){
    p2.style.backgroundColor= 'red';
}
p2.onclick = color;


// const p3 = document.querySelector('.p3');
// function ubahWarna (){
//     p3.style.backgroundColor= 'orange';
// }

// p3.onclick = ubahWarna;

// const p1 = document.querySelector('.p1');
// function colorW(){
//     p1.style.backgroundColor = 'yellow'
// }
// p1.onclick = colorW;

// const link = document.querySelector('.link')
// function colorE(){
//     link.style.backgroundColor = 'yellow'
// }
// link.onclick = colorE;


const p4 = document.querySelector('section#b p');

p4.addEventListener('mouseenter', function(){
    
    const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');
    const liBAru = document.createTextNode('love❤️❤️❤️');


    li.appendChild(liBAru)
    ul.appendChild(li)
    
    li.style.color = ' red';
    li.style.backgroundColor= 'orange';
    li.style.fontSize= '1rem';
    
    li.style.fontWeight= 'bold';



});

const p3 = document.querySelector('.p3')

p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor= 'blue';
});    

p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor= 'yellow';

});