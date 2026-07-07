export function getErrorMessage(error) {
  const message = error.message;
  if (message.includes("404")) {
    return "Ville introuvable.";
  }
  if (message.includes("401")) {
    return "Clé API invalide.";
  }
  if (message.includes("NetworkError") || message.includes("fetch")) {
    return "Vérifiez votre connexion Internet.";
  }
  return "Une erreur est survenue.";
}
