const navToggle = () => {
	const burger = document.getElementById('burger')
	const navigation = document.querySelector('.navigation')
	const navClose = document.getElementById('nav-close');
	burger.addEventListener('click', (e) => {
		e.preventDefault()
		navigation.classList.toggle('active')
		burger.classList.toggle('active')
		document.body.classList.toggle('notScroll')
	})
	navClose.addEventListener('click', (e) => {
		e.preventDefault()
		navigation.classList.remove('active')
		burger.classList.remove('active')
		document.body.classList.remove('notScroll')
	})
}
export default navToggle