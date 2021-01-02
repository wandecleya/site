import Head from 'next/head'
import React from 'react';

import allRecipes from '../src/data/allRecipes.json';

const Recipe = ({recipe}) => {
  return <>
    <h2>{recipe.titulo}</h2>
  </>
}

const Comendo = () => {
  return (
    <div>
      <main>
          <h1>Receitas</h1>

        {allRecipes.recipes.map((recipe) => <Recipe recipe={recipe} />)}

      </main>
    </div>
  )
}

export default Comendo;
