const adin = document.getElementById('pier');
const dru = document.getElementById('dru');
const One = document.getElementById('par1');
const Two = document.getElementById('par2');
const trz = document.getElementById('trz');
const Thre = document.getElementById('par3');

adin.addEventListener('click', pi = () => {One.classList.remove('hide')
Two.classList.add('hide')
Thre.classList.add('hide')});
dru.addEventListener('click', dr = () => {Two.classList.remove('hide')
One.classList.add('hide')
Thre.classList.add('hide')});
trz.addEventListener('click', ti = () => {Thre.classList.remove('hide')
Two.classList.add('hide')
One.classList.add('hide')});