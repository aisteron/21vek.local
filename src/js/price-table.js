import {$_, $$_} from './header-callback';



document.readyState !== 'loading' ? init() : document.addEventListener('DOMContentLoaded', init);

function init() {

	if(!$_('.price-table')) return;

	$$_('.tab-area .head span').forEach(el => {

		el.addEventListener('click', event => {
			let tabName = event.target.classList[0];
			$$_('.tab-area .body div.fiz, .tab-area .body div.ur').forEach(el => el.style.display = "none")
			$$_('.tab-area .head span').forEach(el => el.classList.remove('active'))

			$_('.tab-area .head span.'+tabName).classList.add('active')
			
			switch(tabName){
				case 'fiz':
					$_('.tab-area .body .'+tabName).style.display = "flex";
					break;
				case 'ur':
					$_('.tab-area .body .'+tabName).style.display = "block"
					break;	
			}
		})
	})

	/*вертикальные табы у физ.лица*/

	let tabs = $$_('.tab-area .body .fiz .tabs ul li');

		// init state first active
		tabs[0].classList.add('active')
		let firstActiveType = tabs[0].classList[0];
			$$_('.tab-area .fiz .content').forEach(el => { 
				if(el.classList[1] == firstActiveType) {
					el.style.display = 'block'
				}
			})

		tabs.forEach(el => {
			el.addEventListener('click', event => {
				let type = event.target.classList[0];
				
				$$_('.tab-area .fiz .content').forEach(el => { el.style.display = 'none' })
				$_('.tab-area .fiz .content.'+type).style.display = 'block';
				
				tabs.forEach(el=> el.classList.remove('active'));
				event.target.classList.add('active');

			})
		})

}