// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  ccs.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      13.07.2021 20:43:05 -04
 */

window.addEventListener("load", () => {
	// Tabs
	const myTabs = document.querySelectorAll(".tabs .tab-item");
	myTabClicks = (tabClickEvent) => {
		for (let i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("is-active");
		}

		let clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("is-active");
		tabClickEvent.preventDefault();

		// Tab content
		let myContentPanes = document.querySelectorAll(".tab-pane");
		for (let i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("is-active");
		}

		let anchorReference = tabClickEvent.target;
		let activePaneId = anchorReference.dataset.tab;
		let activePane = document.getElementById(activePaneId);
		activePane.classList.add("is-active");
	};

	for (let i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks);
	}
});
