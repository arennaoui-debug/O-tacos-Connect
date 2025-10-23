import React from 'react';
import { NavLink } from 'react-router-dom';
// L'importation doit être ainsi pour fonctionner avec les noms de chaînes
import * as FaIcons from 'react-icons/fa'; 
import { navModules } from '../data/mockData';

const ModuleNavigation = () => {
  // ... (votre composant OtacosLogo)

  return (
    // ...
        {navModules.map((item) => {
          // C'est ici que l'erreur se produit souvent si FaIcons n'est pas bien importé
          const IconComponent = FaIcons[item.icon]; 
          return (
            // ...
          );
        })}
    // ...
  );
};

export default ModuleNavigation;

