let imgs = document.querySelectorAll(".formations__imgWrapper");
let container = document.querySelector(".container-desktop");
if (imgs != null) {
	imgs.forEach((img) => {
		img.addEventListener("mouseover", () => {
			img.nextElementSibling.querySelector("p").classList.add("p--visible");
			container.classList.add("container-desktop--visible");
		});

		img.addEventListener("mouseleave", () => {
			img.nextElementSibling.querySelector("p").classList.remove("p--visible");
			container.classList.remove("container-desktop--visible");
		});
	});
}
