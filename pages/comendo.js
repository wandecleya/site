import Head from 'next/head'
import React from 'react';

import recipe from '../src/data/feijao.json';

const Comendo = () => {
  return (
    <div>
      <main>
          <h2>{recipe.titulo}</h2>
      </main>
    </div>
  )
}

export default Comendo;
