new Date().getFullYear()
const currentyear = document.getElementById('currentyear').innerHTML = new Date().getFullYear();

let lastModified = document.getElementById('lastmodified').innerHTML = new Date(document.lastModified);

// hamburger time

const hamburger = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Atlanta Georgia",
        location: "Sandy Springs, Georgia, United States",
        dedicated: "1983, June, 1",
        area: 34500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/400x250/atlanta-temple-lds-811746-wallpaper.jpg"
    },
    {
        templeName: "Columbia River Washington",
        location: "Richland, Washington, United States",
        dedicated: "2001, November, 18",
        area: 16880,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-river-washington/400x250/columbia-river-temple-lds-130323-wallpaper.jpg"
    },
    {
        templeName: "Idaho Falls Idaho",
        location: "Idaho Falls",
        dedicated: "1945, September, 23",
        area: 92177,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/idaho-falls-idaho/2019/400x250/5-Idaho-Falls-Temple-1869448.jpg"
    },
];
// load it all up jimmy
createTempleCard(temples);

const homeLink = document.querySelector('#home');
homeLink.addEventListener('click', () => {
    createTempleCard(temples);
});

// oldLink is #old thumbs up
const oldLink = document.querySelector('#old');
oldLink.addEventListener('click', () => {
    // oldTemple is a frickin vessel for OLD temples that were filtered out
    //        for each temple in temples do THIS 
    const oldTemple = temples.filter(temple => {
        // PARSEINT AND RETURN I LOVE YOU??? xx mmm base ten
        let oldYear = parseInt(temple.dedicated, 10);
        return oldYear < 1900;
    });
    createTempleCard(oldTemple);
});

const newLink = document.querySelector('#new');
newLink.addEventListener('click', () => {
    const newTemple = temples.filter(temple => {
        let newYear = parseInt(temple.dedicated, 10);
        return newYear > 1999;
    });
    createTempleCard(newTemple);
});


const largeLink = document.querySelector('#large');
largeLink.addEventListener('click', () => {
    const largeTemple = temples.filter(temple => { 
        let largeArea = Number(temple.area);
        return largeArea > 90000;
    });
    createTempleCard(largeTemple);
});

const smallLink = document.querySelector('#small');
smallLink.addEventListener('click', () => {
    const smallTemple = temples.filter(temple => { 
        let largeArea = Number(temple.area,);
        return largeArea < 10000;
    });
    createTempleCard(smallTemple);
});

function createTempleCard(filteredTemples = temples) {
    document.querySelector('#figures').innerHTML = '';

    // for each temple (temple card, rather), do these things:
    filteredTemples.forEach(temple => {
        // creating and naming all these individual elements that will be
        // added to the HTML 
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let dedication = document.createElement('p');
        let area = document.createElement('p');
        let img = document.createElement('img');

        // making sure there's actually content in these variables using the 
        // object data
        // so variable 'name's textContent = the value(?) of property 'templeName'
        name.textContent = temple.templeName;

        // same-ish concept except we use innerHTML so the tags in our 
        // template literal actually mean something.
        location.innerHTML = `<span class='label'>Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class='label'>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class='label'>Size:</span> ${temple.area} sq ft`;

        // .setAttribute uhhhh sets attributes (no way)
        // variableNameWithDesiredTag.setAttribute('desired-attribute', attribute-content);
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', `${temple.templeName} Temple`);
        img.setAttribute('loading', 'lazy');
        // listen man i have no idea what the height is supposed to be 
        img.setAttribute('width', 300);

        // appending all my cool children to the section i made :)
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        // appending the cards !!!!
        document.querySelector('#figures').appendChild(card);
    });
}

