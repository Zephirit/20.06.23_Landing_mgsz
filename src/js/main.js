window.onload = () => {
	const _listeners = () => {
		const forActive = document.querySelectorAll('.for-active')
		forActive.forEach(item => {
			item.onclick = (e) => {
				e.preventDefault()
				item.classList.toggle('selected')
			}
		});
	}
	const _glide = () => {
		new Glide('.glide', {
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
	const init = () => {
		_listeners()
		_glide()
	}
	init()
}