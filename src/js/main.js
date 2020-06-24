
window.onload = () => {
	new Glide('.glide',{
		type: 'carousel',
		perView: 2,
		gap: 15,
		autoplay: 3000,
		breakpoints: {
			768: {
				perView: 1
			}
		}
	}).mount()
}