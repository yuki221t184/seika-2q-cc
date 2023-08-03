import anime from 'animejs/lib/anime.es.js';
anime({
	targets: '#won1',
	keyframes: [
		{translateX: 1000},
		{translateY: 10},
		{translateX: 0},
		{translateY: 0},
	    ],
	    duration: 4000,
	    easing: 'easeOutElastic(1, .8)',
	    loop: true
    });
    anime({
	targets: '#won2',
	translateX: 1000,
      direction: 'alternate',
      loop: true,
  	easing: 'spring(1, 80, 10, 0)'
    });