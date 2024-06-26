document.addEventListener("DOMContentLoaded", function () {
	const addCardBtn = document.querySelector("#addCardBtn");
	const updateCardBtn = document.querySelector("#updateCardBtn");
	const cardContainer = document.querySelector("#cardContainer");
	const titleInput = document.querySelector("#titleInput");
	const contentInput = document.querySelector("#contentInput");

	let cardCount = 0;
	let currentCard = null;

	addCardBtn.addEventListener("click", function () {
		createCard();
		titleInput.value = "";
		contentInput.value = "";
		currentCard = null;
		cardCount++;
	});

	updateCardBtn.addEventListener("click", function () {
		if (currentCard) {
			updateCard(currentCard);
		}
	});

	function createCard() {
		cardCount++;
		const card = document.createElement("div");
		card.classList.add("card");
		card.dataset.id = cardCount;

		const cardPhoto = document.createElement("img");
		cardPhoto.src = "https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg";
		cardPhoto.classList.add("card-img-top");

		const cardBody = document.createElement("div");
		cardBody.classList.add("card-body");

		const cardTitle = document.createElement("h5");
		cardTitle.classList.add("card-title");
		cardTitle.textContent = titleInput.value || "Title";

		const cardText = document.createElement("p");
		cardText.classList.add("card-text");
		cardText.textContent = contentInput.value || "Content";

		const deleteBtn = document.createElement("button");
		deleteBtn.classList.add("btn", "btn-danger", "mx-2");
		deleteBtn.textContent = "Delete";
		deleteBtn.addEventListener("click", function () {
			card.remove();
		});

		const updateBtn = document.createElement("button");
		updateBtn.classList.add("btn", "btn-success", "mx-2");
		updateBtn.textContent = "Update";
		updateBtn.setAttribute("data-bs-toggle", "modal");
		updateBtn.setAttribute("data-bs-target", "#exampleModal");

		updateBtn.addEventListener("click", function () {
			titleInput.value = cardTitle.textContent;
			contentInput.value = cardText.textContent;
			currentCard = card;
		});

		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardText);
		cardBody.appendChild(updateBtn);
		cardBody.appendChild(deleteBtn);
		card.appendChild(cardPhoto);
		card.appendChild(cardBody);

		if (cardContainer.firstChild) {
			cardContainer.insertBefore(card, cardContainer.firstChild);
		} else {
			cardContainer.appendChild(card);
		}

		document.querySelector(".btn-close").click();
	}

	function updateCard(card) {
		const cardTitle = card.querySelector(".card-title");
		const cardContent = card.querySelector(".card-text");
		const cardPhoto = card.querySelector(".card-img-top");
		const titleInput = document.querySelector("#titleInput");
		const contentInput = document.querySelector("#contentInput");
		const photoInput = document.querySelector("#photoInput");
	  
		const newTitle = titleInput.value.trim();
		const newContent = contentInput.value.trim();
		if (!newTitle || !newContent) {
			alert("Title and content cannot be empty.");
			return;
		}
	  
		cardTitle.textContent = newTitle;
		cardContent.textContent = newContent;
	
		const newPhotoURL = photoInput.value.trim();
		if (newPhotoURL) {
			cardPhoto.src = newPhotoURL;
		}
	  
		titleInput.value = "";
		contentInput.value = "";
		photoInput.value = "";
	  
		$('#exampleModal').modal('hide'); 
		alert("Card updated successfully!");
	  
		currentCard = null;
	}
	
});
