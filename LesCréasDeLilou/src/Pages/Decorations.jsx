import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
export const Decorations = () => {
    const [categories, setCategories] = useState();
            const apiUrl = 'http://localhost:1337/api';
 
        useEffect(() => {
            axios
              .get(`${apiUrl}/categories?populate=*`)
              .then((response) => {
                setCategories(response.data);
              })
              .catch((error) => {
                console.error('Erreur', error);
              });
          }, []);

    console.log(categories)

    return (
        <div>
            <h2>Décorations</h2>
            <div className="image-grid">
                {categories &&
                categories.data.map((categorie) => (
                    <div><h2>{categorie.attributes.Nom}</h2>
                    <div key={categorie.id}>
                         <img className='' src={`http://localhost:1337${categorie.attributes.photo.data.attributes.url}`} />    
                    </div>
                    </div>
                 ))}
            </div>
        </div>
    );
};

