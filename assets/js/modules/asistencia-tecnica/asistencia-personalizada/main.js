// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  main.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      05.08.2021 09:22:13 -04
 */

const toggleDiscussions = document.querySelector(".toggle-discussions");
const discussions = document.querySelector(".discussions");
	
toggleDiscussions.addEventListener("click", () => {
	discussions.classList.toggle("is-active");
});
