// jshint esversion: 8
/**!
 * @package   CCS
 * @filename  main.js
 * @version   1.0
 * @author    Díaz Urbaneja Víctor Eduardo Diex <diazvictor@tutamail.com>
 * @date      02.08.2021 23:58:18 -04
 */

window.addEventListener("load", () => {
	const filebutton = document.querySelector(".file");
	let fileinput = filebutton.querySelector("label input[type=file]");
	let filename = document.querySelector(".file input[type=text]");
	
	fileinput.addEventListener("change", () => {
		filename.value = fileinput.files[0].name;
	});
});
