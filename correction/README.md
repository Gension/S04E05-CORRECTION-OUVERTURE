# Challenge : Suite du projet Memory

[https://www.youtube.com/watch?v=onzL0EM1pKY](https://www.youtube.com/watch?v=onzL0EM1pKY)

## Objectif :
Ce soir, vous allez étendre le projet Memory que vous avez commencé précédemment. Vous allez intégrer des outils de développement modernes tels que Webpack, Babel et SCSS pour structurer votre code.

Ce challenge est long et assez complexe. N'hésitez pas à demander de l'aide ou à travailler en équipe !

### Configuration de Webpack et Babel :
- Modifiez le projet Memory pour qu'il utilise Webpack et Babel, comme vous l'avez appris avec le projet scss-demo.
- Structurez votre projet de manière similaire à celle du projet scss-demo.
- Installer les packages nécessaires à l'aide de la commande `npm install --save-dev @babel/core @babel/preset-env babel-loader css-loader node-sass sass-loader style-loader webpack webpack-cli webpack-dev-server html-webpack-plugin`
- Modifier votre `package.json` pour inclure ces 3 lignes dans l'element script : 
```json 
  "scripts": {
    "start": "webpack serve",
    "dev": "webpack serve --mode=development",
    "build": "webpack --mode production"
  },
```
- Assurez-vous d'avoir un fichier webpack.config.js et un fichier .babelrc configurés correctement pour votre projet. Vous pouvez reprendre ceux utiliser dans le git


### Intégration de SCSS
- Transformez votre fichier CSS existant en SCSS.
- Utilisez SCSS pour générer dynamiquement les classes `.game-card-X` en utilisant une boucle, comme vous l'avez appris en cours.

Extrait du cours : 
```scss
@for $i from 0 through 30 {
    .item-#{$i} {
        height: 10px * $i;
    }
}
```

### Génération dynamique des cases
- Écrivez du code JavaScript pour générer dynamiquement les cases de votre jeu Memory.
- Utilisez un template HTML, comme vous l'avez vu en cours, pour créer chaque case de manière programmatique.

```html
    <template id="item-template">
        <div class="item">
            <p>Ceci est un template !</p>
        </div>
    </template>
```

```js
const itemTemplate = document.getElementById('item-template');
console.log(itemTemplate);

for(let i = 0; i < 36; i++)
{
    // Puis le cloner afin de l'exploiter
    let clone = document.importNode(itemTemplate.content, true);

    // Je peux récupérer les élements enfant de mon objet clone
    // querySelector me permet de récupérer la div avec la classe item dans mon template cloné

    let itemElm = clone.querySelector('.item');
    // Je peux utiliser la propriété classList d'un élement du DOM pour ajouter ou supprimer une class

    itemElm.classList.add(`item-${i}`);
    itemElm.innerText = i;

    // Puis je l'ajoute à mon body (dans le document HTML lui même)
    document.body.appendChild(clone);
}
```

## Conseils :
- Prenez le temps de regarder comment Webpack, Babel, et SCSS sont configurés et utilisés dans le projet `scss-demo`.
- Lors de la conversion de votre CSS en SCSS, faites attention à la syntaxe et à la structure des fichiers, car SCSS offre plus de fonctionnalités et une syntaxe légèrement différente.
- Assurez-vous de comprendre comment fonctionnent les templates HTML pour générer du contenu dynamiquement dans le DOM.

