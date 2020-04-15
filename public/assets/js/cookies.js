const cookieText = 'This website uses cookies of its own and of third parties to improve your browsing experience and show you personalized content based on your interests. If you continue browsing, we consider that you accept its use. You can obtain more information in our <a class="cookie-notice__link" href="https://hackersatupc.org/assets/docs/HFH_PC.pdf" target="_blank" rel="noopener">Privacy and Cookies Policy</a>'
const cookieNotice = document.createElement('div')
cookieNotice.innerHTML = `<p class="cookies-notice__text">${cookieText}</p><button class="cookies-notice__button" onclick="acceptCookies()" title="Close">OK</button>`
cookieNotice.classList.add('cookies-notice')

if (window.localStorage.getItem('cookies') !== '1') {
	if (document.readyState !== 'loading') {
		document.body.appendChild(cookieNotice)
	} else {
		document.addEventListener('DOMContentLoaded', function () {
			document.body.appendChild(cookieNotice)
		})
	}
}

function acceptCookies () {
	window.localStorage.setItem('cookies', '1')
	cookieNotice.classList.add('cookies-notice--hidden')
}
