import Route from "./Route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html", []),
    new Route("/galerie", "Galerie", "/pages/galerie.html", [], "JS/page_specifics/galerie.js"),
    new Route("/connection", "Connection", "/pages/autentification/connection.html", ["disconnected"], "JS/page_specifics/connection.js"),
    new Route("/mon-compte", "Mon Compte", "/pages/autentification/moncompte.html", ["client", "admin"]),
    new Route("/modifier-motdepass", "Modifier mon Mot de pass", "/pages/autentification/modifiermdp.html", ["client", "admin"]),
    new Route("/vos-reservation", "Vos Réservation", "/pages/reservation.html",["client"]),
    new Route("/reserver", "Reserver", "/pages/editereservation.html",["client"]),
    new Route("/inscription", "Inscription", "/pages/autentification/inscription.html", "JS/page_specifics/inscription.js", ["disconnected"])];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";