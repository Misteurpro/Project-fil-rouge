import Route from "/JS/Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/connection", "Connection", "/pages/autentification/connection.html"),
    new Route("/mon-compte", "Mon Compte", "/pages/autentification/moncompte.html"),
    new Route("/modifier-motdepass", "Modifier mon Mot de pass", "/pages/autentification/modifiermdp.html"),
    new Route("/inscription", "Inscription", "/pages/autentification/inscription.html")];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";