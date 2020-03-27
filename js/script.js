//seleciona todos as div com classe 'items'
const slider = document.querySelectorAll(".items");
console.log(slider);

//for pra cada div
slider.forEach((slider) => {
	let mouseApertado = false;
	let startX;
	let scrollLeft;

	slider.addEventListener("mousedown", (e) => {
		mouseApertado = true;
		slider.classList.add("active");
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});
	slider.addEventListener("mouseleave", () => {
		mouseApertado = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mouseup", () => {
		mouseApertado = false;
		slider.classList.remove("active");
	});
	slider.addEventListener("mousemove", (e) => {
		if (!mouseApertado) return; // se o mouse nao estiver apertado, sai do evento
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		var walk = (x - startX) * 3; //scroll-fast
		slider.scrollLeft = scrollLeft - walk;

		document.getElementById("board1").addEventListener("click", function() {
			walk = walk + 210 * 0.8;
			slider.scrollLeft = scrollLeft - walk;
			console.log(walk);
		});

		document.getElementById("board2").addEventListener("click", function() {
			walk = walk - 210 * 0.8;
			slider.scrollLeft = scrollLeft - walk;
			console.log(walk);
		});
	});
});
