import { useState, useEffect } from 'react'; // Importation des hooks useState et useEffect de React

// Définition du composant Contact
export const Contact = () => {
  // Déclaration des états locaux
  const [errors, setErrors] = useState({}); // État pour stocker les erreurs de validation du formulaire
  const [selectedCategory, setSelectedCategory] = useState('Informations'); // État pour stocker la catégorie sélectionnée par l'utilisateur

  // Effet qui s'exécute à chaque modification de l'état 'errors'
  useEffect(() => {
    // Sélection de tous les champs du formulaire
    const formInputs = document.querySelectorAll('#contactForm input, #contactForm textarea');
    let isValid = true;

    // Vérification de chaque champ du formulaire
    formInputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    // Affichage ou masquage du bouton de soumission en fonction de la validité du formulaire
    document.getElementById('submitBtn').style.display = isValid ? 'block' : 'none';
  }, [errors]); // Déclenché uniquement lorsque l'état 'errors' change

  // Fonction de gestion du changement de saisie dans les champs du formulaire
  const handleInputChange = () => {
    setErrors({}); // Réinitialisation des erreurs lorsqu'un champ est modifié
  };

  // Fonction pour réinitialiser le formulaire
  const resetForm = () => {
    document.getElementById('contactForm').reset(); // Réinitialisation des champs du formulaire
  };

  // Fonction de gestion de la soumission du formulaire
  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Empêche le comportement par défaut de soumission du formulaire

    // Récupération des valeurs des champs du formulaire
    const firstName = event.target.elements.firstName.value;
    const lastName = event.target.elements.lastName.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    // Expressions régulières pour la validation
    const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Initialisation des erreurs
    const newErrors = {};

    // Validation des champs du formulaire
    if (!nameRegex.test(firstName)) {
      newErrors.firstName = 'Le Prénom doit contenir uniquement des lettres.';
    }

    if (!nameRegex.test(lastName)) {
      newErrors.lastName = 'Le Nom doit contenir uniquement des lettres.';
    }

    if (!emailRegex.test(email)) {
      newErrors.email = 'Veuillez entrer une adresse mail valide.';
    }

    if (!message.trim()) {
      newErrors.message = 'Veuillez écrire votre message.';
    }

    // Mise à jour des erreurs
    setErrors(newErrors);

    // Si des erreurs sont présentes, interrompre la soumission du formulaire
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Traitement de la soumission du formulaire (non implémenté dans cet extrait)
    try {
      // Préparation des données à envoyer (non implémenté dans cet extrait)
      const templateParams = {
        firstName,
        lastName,
        email,
        message,
        category: selectedCategory,
      };

      // Réinitialisation du formulaire après soumission réussie
      alert('Formulaire envoyé avec succès !');

      resetForm(); // Réinitialisation des champs du formulaire
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
    }
  };

  // Fonction de gestion du changement de catégorie sélectionnée
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Mise à jour de la catégorie sélectionnée
  };

  // Rendu du composant
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center">
        {/* Formulaire de contact */}
        <form
          id="contactForm"
          onSubmit={handleFormSubmit}
          className="sm:w-64 md:w-96 bg-white p-8 border border-[#2b2728] rounded flex flex-col items-center"
          method="post"
        >
          {/* Champ Prénom */}
          <label className="flex flex-col items-center justify-center w-full max-w-80">
            Prénom :
            <input
              className={`rounded mt-4 w-full h-10 text-center border ${
                errors.firstName ? 'text-[#FF0000]' : 'border-[#2b2728]'
              } focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`}
              type="text"
              name="firstName"
              placeholder="Entrez votre prénom"
              onChange={handleInputChange}
            />
            {/* Affichage des erreurs éventuelles */}
            {errors.firstName && (
              <span className="text-[#FF0000] mt-2 text-xs">{errors.firstName}</span>
            )}
          </label>
          <br />

          {/* Champ Nom */}
          <label className="text-base flex flex-col items-center justify-center w-full max-w-80">
            Nom :
            <input
              className={`rounded mt-4 w-full h-10 text-center border ${
                errors.lastName ? 'text-[#FF0000]' : 'border-[#2b2728]'
              } focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`}
              type="text"
              name="lastName"
              placeholder="Entrez votre Nom"
              onChange={handleInputChange}
            />
            {/* Affichage des erreurs éventuelles */}
            {errors.lastName && (
              <span className="text-[#FF0000] mt-2 text-xs">{errors.lastName}</span>
            )}
          </label>
          <br />

          {/* Champ Adresse mail */}
          <label className="flex flex-col items-center justify-center w-full max-w-80">
            Adresse mail :
            <input
              className={`rounded mt-4 w-full h-10 text-center border ${
                errors.email ? 'text-[#FF0000]' : 'border-[#2b2728]'
              } focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`}
              type="email"
              name="email"
              placeholder="Entrez votre adresse mail"
              onChange={handleInputChange}
            />
            {/* Affichage des erreurs éventuelles */}
            {errors.email && (
              <span className="text-[#FF0000] mt-2 text-xs">{errors.email}</span>
            )}
          </label>
          <br />

          {/* Champ Catégorie */}
          <label className="flex flex-col items-center justify-center w-full max-w-80">
            Catégorie :
            <select
              className="rounded mt-4 w-full h-10 text-center border border-[#2b2728] focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent"
              value={selectedCategory}
              onChange={handleCategoryChange}
              name="category"
            >
              <option value="Informations">Informations</option>
              <option value="Commandes">Commandes</option>
            </select>
          </label>
          <br />

          {/* Champ Message */}
          <label className="flex flex-col items-center justify-center w-full max-w-80">
            Message :
            <textarea
              className={`rounded mt-4 w-full h-24 resize-none text-center border ${
                errors.message ? 'text-[#FF0000]' : 'border-[#2b2728]'
              } focus:outline-none focus:ring-2 focus:ring-[#0a62d0] focus:border-transparent`}
              name="message"
              placeholder="Entrez votre message"
              onChange={handleInputChange}
            />
            {/* Affichage des erreurs éventuelles */}
            {errors.message && (
              <span className="text-[#FF0000] mt-2 text-xs">{errors.message}</span>
            )}
          </label>
          <br />

          {/* Bouton de soumission du formulaire */}
          <button
            id="submitBtn"
            className="items-center rounded mt-6 h-10 w-32 border text-[#000000] bg-[#8C4FFF]"
            type="submit"
            style={{ display: 'none' }}
          >
            Envoyer
          </button>
        </form>
      </main>
    </div>
  );
}; 
