var modalOpen = document.querySelector(".search-button");
var popup = document.querySelector(".form");
var formButton = popup.querySelector(".form-btn"); 

var adultsField = popup.querySelector("[name=adults]");
var childrenField = popup.querySelector("[name=children]");

var storageAdults="";
var storageChildren="";
var isStorageSupportChildren = true;
var isStorageSupportAdults = true;

try {
	storageAdults.localStorage.geItem("adults");
} catch(err){
	isStorageSupportAdults = false;
}
try {
	storageChildren.localStorage.geItem("children");
} catch(err){
	isStorageSupportChildren = false;
}

modalOpen.addEventListener("click", function(evt){
	evt.preventDefault();
	popup.classList.toggle("form-show");

	if(storageAdults || storageChildren){
		adultsField.value = storageAdults;
		childrenField.value = storageChildren;
	}

});

formButton.addEventListener("submit", function(evt){
	if(!adultsField.value || !childrenField.value){
		evt.preventDefault();
		console.log("введите чилса");
	} else {
		if (isStorageSupportAdults){
				localStorage.setItem("adults",adultsField.value);
			}
		if (isStorageSupportChildren){
				localStorage.setItem("children",childrenField.value);
		}
	}
			
});

window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27){
		evt.preventDefault();
		if(popup.classList.contains("form-show")){
			popup.classList.remove("form-show");
		}
	}
});