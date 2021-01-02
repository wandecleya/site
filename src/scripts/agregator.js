const fs = require('fs');

const readAllRecipes = () => {
  let allRecipes = "";
  const files =[];

  fs.readdirSync('../data/recipes').forEach(file => {
    files.push(`../data/recipes/${file}`)
  });

 files.forEach((file, index) =>{
   const data = fs.readFileSync(file);

   if (index != 0) {
     allRecipes += ',';
   }

   allRecipes += data.toString();
 })

  return allRecipes;
};

const writeAllRecipes = () => {
  let logStream = fs.createWriteStream('../data/allRecipes.json', {flags: 'w'});

  const jsonStart = '{"recipes":[';
  const recipes = readAllRecipes();
  const jsonEnd = "]}"

  logStream.write(jsonStart);
  logStream.write(recipes);
  logStream.end(jsonEnd);
};

writeAllRecipes();

