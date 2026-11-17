const galerieImage = document.getElementById("allImages");
let monImage = getImage("titre", "../content/images/food.png")

galerieImage.innerHTML = monImage

function getImage(title, urlImage){
	title = sanitizeHtml(title)
	urlImage = sanitizeHtml(urlImage)
	return `<div class="col p-3">
				<div class="image-card text-white">
					<img src="${urlImage}" class="rounded w-100" alt="Titre"/>
					<p class="titre-image">${title}</p>
					<div class="action-image-buttons" data-show="admin">
						<button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
						<button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
					</div>
				</div>
			</div>
	`;
}