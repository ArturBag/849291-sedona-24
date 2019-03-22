var modalOpen = document.querySelector(".search-button");
var popup = document.querySelector(".form");
var formButton = popup.querySelector(".form-btn");

var adultsField = popup.querySelector("[name=adults]");
var childrenField = popup.querySelector("[name=children]");

popup.classList.add("form-hidden");

try {
	var storageAdults = localStorage.getItem("adults");
	var storageChildren = localStorage.getItem("children");
} catch (err) {
	console.log(err);
}
modalOpen.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.toggle("form-show");

	if (storageAdults || storageChildren) {
		adultsField.value = storageAdults;
		childrenField.value = storageChildren;
	}

});

popup.addEventListener("submit", function (evt) {
	if (!adultsField.value || !childrenField.value) {
		evt.preventDefault();
	} else {
		try {
			localStorage.setItem("adults", adultsField.value);
			localStorage.setItem("children", childrenField.value);
		} catch (err) {
			console.log(err);
		}
	}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
		if (popup.classList.contains("form-show")) {
			popup.classList.remove("form-show");
		}
	}
});