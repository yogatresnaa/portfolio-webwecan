
alert('Selamat Datang, KLik ok untuk melanjutkan');


const hero = document.querySelector('.hero');

hero.addEventListener('mouseenter',function(){
	hero.style.backgroundColor = 'grey';
});

hero.addEventListener('mouseleave',function(){
	hero.style.backgroundColor = 'lightblue';
});



