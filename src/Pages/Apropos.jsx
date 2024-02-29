// Composant fonctionnel Apropos
export const Apropos = () => {
  return (
    // Conteneur principal avec une hauteur minimale de l'écran, centré horizontalement et verticalement
    <main className="min-h-screen flex justify-center items-center text-center">
      
      {/* Conteneur pour le contenu, avec une largeur fixe et un espacement vertical */}
      <div className="w-[32rem] py-16">
        
        {/* Titre de la page */}
        <h1 className="text-lg font-medium">A-Propos</h1>
        
        {/* Espacement vertical */}
        <br></br>
        <br />

        {/* Paragraphe principal avec plusieurs sections de texte */}
        <p>
          {/* Section 1 : Introduction à l'univers de Les Créas de Lilou & fondants Event */}
          <p>Bienvenue dans l'univers enchanteur de Les Créas de Lilou & fondants Event, où l'artisanat de la création de bougies et de fondants parfumés prend vie. Ici, chaque pièce transcende la simple fonction olfactive pour devenir une histoire sensorielle tissée avec soin, une expérience unique à savourer.<br></br><br /></p>

          {/* Section 2 : Description des bougies artisanales */}
          <p>Nos bougies, méticuleusement confectionnées à la main, sont l'expression de notre dévouement à l'art et à la passion des fragrances. Chaque bougie représente un hommage à la beauté intemporelle des parfums, explorant des senteurs classiques tout en innovant avec des mélanges contemporains. Nous utilisons uniquement des ingrédients de la plus haute qualité pour garantir une combustion propre, créant ainsi une atmosphère chaleureuse et accueillante.<br></br><br /></p>

          {/* Section 3 : Présentation des fondants parfumés */}
          <p>Les fondants parfumés, tout aussi délicats, ajoutent une touche charmante à notre collection, offrant une alternative élégante pour personnaliser votre espace. Chaque fondant est imprégné d'arômes envoûtants, libérant une symphonie olfactive dès qu'il est chauffé, pour une expérience sensorielle immersive et apaisante.<br></br><br /></p>

          {/* Section 4 : Philosophie de l'entreprise */}
          <p>Chez Les Créas de Lilou & fondants Event, nous croyons fermement en la magie des petits moments parfumés qui transforment le quotidien. Nos créations sont conçues avec l'intention d'évoquer des émotions, de créer des souvenirs et d'illuminer chaque instant de votre vie. Transformez votre espace en un sanctuaire de bien-être et d'évasion avec nos bougies et fondants parfumés.<br></br><br /></p>

          {/* Section 5 : Invitation à explorer la collection */}
          <p>Explorez notre collection pour découvrir l'harmonie parfaite entre l'esthétique, la qualité et la passion. Chaque création de Lilou & Fondants Events est une invitation à plonger dans un monde de délices olfactifs. Bienvenue dans notre univers parfumé, où chaque pièce raconte une histoire et crée une expérience sensorielle inoubliable.<br></br><br /></p>
        </p>
      </div>
    </main>
  );
};