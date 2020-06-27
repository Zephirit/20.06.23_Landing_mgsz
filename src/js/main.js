window.onload = () => {
	const _listeners = () => {
		const forActive = document.querySelectorAll('.for-active')
		forActive.forEach(item => {
			item.onclick = (e) => {
				// e.preventDefault()
				item.classList.toggle('selected')
			}
		});
		const trgs = document.querySelectorAll('.pop-trg')
		const popup = document.querySelector('#popup')
		const popClose = document.querySelector('#pop-close')
		trgs.forEach(trg => {
			trg.onclick = (e) => {
				e.preventDefault()
				popup.classList.add('active')
			}
		});
		if (popClose) {
			popClose.onclick = () => {
				popup.classList.remove('active')
			}
		}

	}
	const _burgersListener = () => {
		const brgs = document.querySelectorAll('.brg');
		brgs.forEach(brg => {
			brg.onclick = (e) => {
				// e.preventDefault()

				if (brg.classList.contains('selected')) {
					brg.classList.remove('selected')
				} else {
					brgs.forEach(brg => brg.classList.remove('selected'))
					brg.classList.add('selected')
				}

			}
		});
	}
	const _tabsListener = () => {
		const tabs = document.querySelectorAll('.tabs');
		tabs.forEach(tabItems => {
			const trgs = tabItems.querySelectorAll('.tbs-trg')
			const itms = tabItems.querySelectorAll('.tbs-itm')
			console.log(trgs, itms)
			trgs.forEach((trg, i) => {
				trg.onclick = () => {
					trgs.forEach(itm => itm.classList.remove('selected'))
					trg.classList.add('selected')
					itms.forEach(itm => itm.classList.remove('selected'))
					itms[i].classList.add('selected')
				}
			});
		});
	}
	const _glide = () => {
		if (document.querySelector('.glide')) {
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
		if (document.querySelector('.clislider')) {
			new Glide('.clislider', {
				type: 'carousel',
				perView: 4,
				gap: 15,
				// autoplay: 3000,
			}).mount()
		}
		if (document.querySelector('.stockSlider')) {
			new Glide('.stockSlider', {
				type: 'carousel',
				perView: 2,
				gap: 15,
				// autoplay: 3000,
			}).mount()
		}
		if (document.querySelector('.pdf--1')) {
			new Glide('.pdf--1', {
				perView: 1,
				// autoplay: 3000,
			}).mount()
		}
		if (document.querySelector('.pdf__2')) {
			new Glide('.pdf__2', {
				perView: 1,
				// autoplay: 3000,
			}).mount()
		}
		if (document.querySelector('.glide')) {
			new Glide('.pdf--1', {
				type: 'carousel',
				perView: 1,
				gap: 15,
				// autoplay: 3000,
			}).mount()
		}
	}
	const init = () => {
		_tabsListener()
		_listeners()
		_burgersListener()
		_glide()
	}
	init()
}