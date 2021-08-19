// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  ccs.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      13.07.2021 20:43:05 -04
 */

window.addEventListener("load", () => {
	let dropdowns = document.querySelectorAll(".dropdown");
	dropdowns.forEach((dropdown) => {
		let dropdownBtn = dropdown.querySelector(".dropdown-toggle");
		let dropdownMenu = dropdown.querySelector(".dropdown-menu");

		dropdownBtn.addEventListener("click", () => {
			dropdownMenu.classList.toggle("is-active");
		});
	});

	let items = document.querySelectorAll(".sidenav-collapse-item");

	items.forEach((item) => {
		item.addEventListener("click", () => {
			if (item.classList.contains("is-active")) {
				item.classList.remove("is-active");
			}

			item.classList.toggle("is-collapsible");
		});
	});

	let sidebar = document.querySelector(".wrapper");
	const body = document.querySelector("body");
	let overlay = document.querySelector("#overlay-bg");
	let toggleSidebar = document.getElementById("toggle-sidebar");
	let closeSidebar = document.getElementById("close-sidebar");

	let = collapseSidebar = () => {
		sidebar.classList.remove("not-sidebar");
		body.classList.remove("not-scroll-y");
		overlay.classList.remove("is-active");
	};

	toggleSidebar.addEventListener("click", () => {
		sidebar.classList.toggle("not-sidebar");
		body.classList.add("not-scroll-y");
		overlay.classList.add("is-active");

		toggleSidebar.classList.toggle("is-active");
	});

	overlay.addEventListener("click", () => {
		collapseSidebar();
	});

	closeSidebar.addEventListener("click", () => {
		collapseSidebar();
	});

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
