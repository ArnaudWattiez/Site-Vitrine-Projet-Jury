import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Categories = () => {
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

return (
  <div className="min-h-screen flex flex-col lg:flex-row">
    {categories &&
      categories.data.map((categorie) => (
        <div key={categorie.id} className="category-item relative flex-1 flex items-center justify-center w-full">
          <Link to={`/${categorie.attributes.Nom}`} className="block">
            <img
              src={`http://localhost:1337${categorie.attributes.photo.data.attributes.url}`}
              alt={categorie.attributes.Nom}
              className="me-3 xs:w-[22rem] xs:h-[22rem] md:w-[22rem] md:h-[22rem] lg:w-[38rem] lg:h-[38rem] xl:w-[50rem] xl:h-[50rem] object-cover rounded-full"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full">
              <h2 className="xs:text-xl md:text-2xl lg:text-3xl">{categorie.attributes.Nom}</h2>
            </div>
          </Link>
        </div>
      ))}
  </div>
);
} 