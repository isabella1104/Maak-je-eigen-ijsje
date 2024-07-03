let sprinklesVisible = false;

let currentFlavor = ''; // Variabele om de huidige smaak bij te houden

function changeFlavor(flavor) {
    const scoop = document.getElementById('scoop');

    switch (flavor) {
        case 'vanilla':
            scoop.style.backgroundColor = '#f3e5ab';
            break;
        case 'chocolate':
            scoop.style.backgroundColor = '#8b4513';
            break;
        case 'strawberry':
            scoop.style.backgroundColor = '#ff6f61';
            break;
        case 'mint':
            scoop.style.backgroundColor = '#98ff98';
            break;
        default:
            scoop.style.backgroundColor = '#fff'; // Standaard kleur
    }

    // Update de huidige smaak
    currentFlavor = flavor;
}


function toggleSprinkles() {
    const sprinklesDiv = document.getElementById('sprinkles');
    sprinklesVisible = !sprinklesVisible; // Toggle sprinkles status

    if (sprinklesVisible) {
        sprinklesDiv.style.display = 'block';
        addSprinkles(sprinklesDiv); // Voeg sprinkles toe wanneer zichtbaar
    } else {
        sprinklesDiv.style.display = 'none';
        sprinklesDiv.innerHTML = ''; // Verwijder alle sprinkles wanneer verborgen
    }
}

function addSprinkles(container) {
    const scoop = document.getElementById('scoop');
    const scoopRect = scoop.getBoundingClientRect(); // Bounding rect van de scoop

    const scoopWidth = scoopRect.width;
    const scoopHeight = scoopRect.height;
    const sprinkleSize = 10; // Diameter van elke sprinkle
    const sprinkleSpacing = 15; // Afstand tussen sprinkles

    // Aantal sprinkles dat we willen toevoegen
    const numSprinkles = 8;

    // Bereken de afstand van de sprinkles tot het midden van de scoop
    const centerX = scoopWidth / 2;
    const centerY = scoopHeight / 2;

    for (let i = 0; i < numSprinkles; i++) {
        const sprinkle = document.createElement('div');
        sprinkle.classList.add('sprinkle');

        // Bereken de hoek voor het huidige sprinkle
        const angle = (i / numSprinkles) * Math.PI * 2;

        // Bereken de positie van het sprinkle
        const sprinkleX = centerX + Math.cos(angle) * (scoopWidth / 3);
        const sprinkleY = centerY + Math.sin(angle) * (scoopHeight / 3);

        sprinkle.style.top = `${sprinkleY - sprinkleSize / 2}px`;
        sprinkle.style.left = `${sprinkleX - sprinkleSize / 2}px`;

        container.appendChild(sprinkle);
    }
}

function removeSprinkles() {
    const sprinklesContainer = document.getElementById('sprinkles');
    sprinklesContainer.innerHTML = ''; // Verwijder alle sprinkles
}

function getFlavorColor(flavor) {
    switch (flavor) {
        case 'vanilla':
            return '#f3e5ab';
        case 'chocolate':
            return '#8b4513';
        case 'strawberry':
            return '#ff6f61';
        case 'mint':
            return '#98ff98';
        default:
            return '#fff';
    }
}
