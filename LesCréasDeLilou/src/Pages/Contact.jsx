import { useState, useEffect } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  // État pour gérer la validité du formulaire
  const [formValid, setFormValid] = useState(false);
// Gestion des changements dans les champs du formulaire
    const handleInputChange = (e) => {
      const { name, value } = e.target;
  
      // Vérification manuelle pour exclure les chiffres dans le prénom et le nom
      if ((name === 'firstName' || name === 'lastName') && /\d/.test(value)) {
        return; // Ne met pas à jour le state si un chiffre est présent
      }
    setFormData({
      ...formData,
      [name]: value
    });
  };
// Effet pour valider le formulaire lorsque les données du formulaire changent
  useEffect(() => {
    const { firstName, lastName, email } = formData;
    const isFormValid = firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '';
    setFormValid(isFormValid);
  }, [formData]);

 // Fonction pour ouvrir le client de messagerie par défaut avec les données du formulaire
  const openDefaultMailClient = () => {
    const { firstName, lastName, email } = formData;
    const recipient = 'virginieczarnynoga@gmail.com';
    const body = `
      Prénom : ${firstName}
      Nom : ${lastName}
      Email : ${email}
    `;
    const mailtoLink = `mailto:${recipient}?subject &body=${encodeURIComponent(body)}`;

    window.open(mailtoLink);
  };
  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire :', formData);

    const emailData = {
      body: `
        Prénom : ${formData.firstName}
        Nom : ${formData.lastName}
        Email : ${formData.email}
      `
    };
    console.log('Envoi des données par e-mail :', emailData);
    // Réinitialisation du formulaire après soumission
    setFormData({
      firstName: '',
      lastName: '',
      email: ''
    });
  // Ouverture du client de messagerie par défaut
    openDefaultMailClient();
    setFormValid(false); // Réinitialisation de la validité du formulaire après soumission
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex items-center justify-center">
        <form className="md:h-[32rem] md:w-[28rem] flex flex-col rounded border border-[#2b2728] items-center mb-8 p-8 sm:w-[20rem]" onSubmit={handleSubmit}>
          <label className="flex flex-col items-center justify-center">
            Prénom :
            <input className="rounded mt-6 w-80 h-10 text-center border border-[#2b2728]" type="text" placeholder="Entrez votre Prénom" name="firstName" value={formData.firstName} onChange={handleInputChange}/>
          </label>
          <br />
          <label className="text-base flex flex-col items-center justify-center">
            Nom :
            <input className="rounded mt-6 w-80 h-10 text-center border border-[#2b2728]" placeholder="Entrez votre nom" type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
          </label>
          <br />
          <label className="flex flex-col items-center justify-center">
            Email :
            <input className="rounded mt-6 w-80 h-10 text-center border border-[#2b2728]" placeholder="Entrez votre Mail" type="email" name="email" value={formData.email} onChange={handleInputChange}pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"title="Veuillez saisir une adresse e-mail valide"
          required/>
          </label>
          <br />
          <button className="items-center rounded mt-6 h-10 w-32 border text-[#2b2728] bg-[#8C4FFF]" type="submit" disabled={!formValid}>Envoyer</button>
        </form>
      </main>
    </div>
  );
};