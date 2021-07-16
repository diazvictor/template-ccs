// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  ccs.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      13.07.2021 20:43:05 -04
 */

window.addEventListener("load", () => {
	let items = document.querySelectorAll(".sidenav-collapse-item");
	console.log(items);

	items.forEach((item) => {
		console.log(item);

		item.addEventListener("click", () => {
			if (item.classList.contains('is-active')) {
				item.classList.remove('is-active');
			}

			item.classList.toggle("is-collapsible");
		});
	});
});
