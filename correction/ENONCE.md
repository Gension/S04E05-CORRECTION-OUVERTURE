# Challenge - Interaction avec les cartes

## Objectif 
Votre objectif principale pour ce soir est de développer une interaction utilisateur qui permet de retourner deux cartes, d'attendre une seconde, puis de les retourner à nouveau, simulant ainsi le gameplay classique d'un jeu Memory.

## Etapes

### Identifiants Uniques:
- Lors de la création de chaque carte, attribuez-lui un identifiant unique (un id). Cet identifiant peut être basé sur l'index de la carte.

- Vous pouvez définir l’id de chaque élément de carte dans le DOM avec cet identifiant unique.

    ```javascript
    for(let i = 0; i < 36; i++) {
        let clone = document.importNode(cardTemplate.content, true);

        let gameCardItem = clone.querySelector('.game-card');
        gameCardItem.classList.add(`game-card-${i}`);

        /////////////////
        // Specifier l'ID de la carte
        gameCardItem.setAttribute('id', `card-${id}`);
        ////////////////

        cards.push(clone);
    }
    ```

### Retourner Deux Cartes:
- Implanter une fonctionnalité qui permet aux utilisateurs de retourner deux cartes à chaque tour. 
    - Ajoutez un `addEventListener` à chaque carte lors de sa création.
        ```javascript
        for(let i = 0; i < 36; i++) {
            let clone = document.importNode(cardTemplate.content, true);

            let gameCardItem = clone.querySelector('.game-card');
            gameCardItem.classList.add(`game-card-${i}`);

            gameCardItem.setAttribute('id', `card-${id}`);

            //////////
            gameCardItem.addEventListner('click', handleClick);
            //////////

            cards.push(clone);
        }
        ```
    - Une fonction unique sera ajouter l`addEventListener
    - À l'intérieur de la fonction appelé par le gestionnaire d'événements, utilisez l’objet event et target (https://developer.mozilla.org/fr/docs/Web/API/Element/click_event) pour identifier quelle carte a été cliquée.
    <details>
        <summary>Astuce</summary>
        Utiliser un tableau pour stocker les cartes retournés et si la longueur est superieur ou égal à deux, on déclanche un compte a rebours de retournement des cartes avec `setTimeout` qui remet tout à zéro (CSS et tableau JS)
        </ul>
    </details>
- Assurez-vous que lorsqu'une troisième carte est cliquée, rien ne se passe _(Verifier que la longeur du tableau de carte)_ tant que les deux premières cartes ne sont pas retournées à leur état original.

---

### Objectif Bonus:
Si vous avez accompli le défi principal et souhaitez aller plus loin, vous pouvez implémenter une fonctionnalité de comparaison de cartes.

#### Comparaison des Cartes:

- Lorsque deux cartes sont retournées, comparez-les pour vérifier si elles sont identiques.

#### Laisser les Cartes Retournées:
- Si les deux cartes retournées correspondent, laissez-les dans leur état retourné (face visible).
Sinon, après le délai d'une seconde, retournez-les à leur état original.