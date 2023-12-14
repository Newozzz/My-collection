const collection = [
    {
        img: "assets/ronii.jpg",
        name: "Nom: Ronaldinho",
        age: "Age: 43 Ans",
        pays: "Pays: Brésil",
        club: "Club: Fc retraite",
        position: "Poste: MOC",
        stat: "Stat: Ballon d'or 2005",
        video: {
                img:"assets/youtubeL.png",
                url:"https://www.youtube.com/watch?v=fU8-RTJz69k"
        }
    },
    {
        img: "assets/maldini.jpg",
        name: "Nom: Paolo Maldini",
        age: "Age: 55 Ans",
        pays: "Pays: Italie",
        club: "Club: Fc retraite",
        position: "Poste: DC",
        stat: "Stat: 902 matchs avec l'AC Milan",
        video: {
            img:"assets/youtubeL.png",
            url:""
    }
    },
    {
        img: "assets/kaka.jpg",
        name: "Nom: Kakà",
        age: "Age: 41 Ans",
        pays: "Pays: Brésil",
        club: "Club: Fc retraite",
        position: "Poste: MOC",
        stat: "Stat: Ballon d'or 2007",
        video: {
            img:"assets/youtubeL.png",
            url:""
    }
    },
    {
        img: "assets/zlatan.jpg",
        name: "Nom: Zlatan Ibrahimović",
        age: "Age: 42 Ans",
        pays: "Pays: Suède",
        club: "Club: Fc retraite",
        position: "Poste: BU",
        stat: "Stat: A marqué dans toutes les minutes d'un match au cours de sa carrière",
        video: {
            img:"assets/youtubeL.png",
            url:""
    }

    },
    {
        img: "assets/neymar.jpg",
        name: "Nom: Neymar jr",
        age: "Age: 31 Ans",
        pays: "Pays: Brésil",
        club: "Club: Al-Hilal",
        position: "Poste: AG",
        stat: "Stat: 10 ème au ballon d'or en 2011 alors qu'il jouait au brésil",
        video: {
            img:"assets/youtubeL.png",
            url:""
    }
    },
    {
        img: "assets/gullit.jpg",
        name: "Nom: Ruud Gullit",
        age: "Age: 61 Ans",
        pays: "Pays: Pays bas",
        club: "Club: Fc retraite",
        position: "Poste: MC",
        stat: "Stat: Ballon d'or 1987",
        video: {
            img:"assets/youtubeL.png",
            url:""
    }
    },
    {
        img: "assets/hazardd.jpg",
        name: "Nom: Eden Hazard",
        age: "Age: 32 Ans",
        pays: "Pays: Belgique",
        club: "Club: Fc retraite",
        position: "Poste: AG",
        stat: "Stat: 3 fois dans l'équipe type de la saison de Premier League",
        video: {
            img:"assets/youtubeL.png",
            url:""
    }
    },
    {
        img: "assets/leao.jpg",
        name: "Nom:  Rafael Leão ",
        age: "Age: 24 Ans",
        pays: "Pays: Portugal",
        club: "Club: Ac milan",
        position: "Poste: AG",
        stat: "Stat: Meilleur joueur de l'année Serie A 2022",
        video: {
            img:"assets/youtubeL.png",
            url:""
    }
    },
    {
        img: "assets/cr7.jpg",
        name: "Nom: Cristiano Ronaldo",
        age: "Age: 38 Ans",
        pays: "Pays: Portugal",
        club: "Club: Al Naasr",
        position: "Poste: BU",
        stat: "Stat: 5 ballon d'or",
        video: {
            img:"assets/youtubeL.png",
            url:""
    }
    },
    {
        img: "assets/silva.jpg",
        name: "Nom: Thiago Silva",
        age: "Age: 39 Ans",
        pays: "Pays: Brésil",
        club: "Chelsea FC",
        position: "Poste: DC",
        stat: "Stat: 293 Matchs en tant que capitaine du PSG",
        video: {
            img:"assets/youtubeL.png",
            url:""
    }
    }
]


let section1 = document.querySelector('.box1');

let section2 = document.querySelector('.box2');

function createCard (parent, elementType, className, textContent, src, alt){
    let element = document.createElement(elementType);

    if (className){
        element.classList.add(className)
    }

    if (textContent){
        element.textContent = textContent
    }

    if (src){
        element.setAttribute('src', src)
    }

    if (alt){
        element.setAttribute('alt', alt)
    }
    /* if (objet.video) {
         let videoLink = document.createElement('a');
        videoLink.classList.add('cardvideo-link');
        videoLink.setAttribute('href', objet.video.url);
        videoLink.setAttribute('target', '_blank');
    
        let videoIcon = document.createElement('img');
        videoIcon.classList.add('cardvideo-icon');
        videoIcon.setAttribute('src', objet.video.icon);
        videoIcon.setAttribute('alt', 'Icone vidéo');
    
        videoLink.appendChild(videoIcon);
        section.appendChild(videoLink); 
    }*/

    parent.appendChild(element)
}

collection.forEach(function(object, index) {

let section = document.createElement('section');

section.classList.add('card')

createCard(section, 'img', 'card__img', null, object.img, 'photo du joueur')

createCard(section, 'div', 'card__name', object.name)

createCard(section, 'div', 'card__age', object.age)

createCard(section, 'div', 'card__club', object.club)

createCard(section, 'div', 'card__pays', object.pays)

createCard(section, 'div', 'card__position', object.position)

createCard(section, 'div', 'card__stat', object.stat)

    if (index % 2 === 0) {
        section1.appendChild(section);
    } else {
        section2.appendChild(section);
    }
});


collection.Card(function (object, index) {

  
    let videoButton = document.createElement('div');
    videoButton.classList.add('card__video', 'youtube-icon');
    
    let youtubeIcon = document.createElement('img');
    youtubeIcon.setAttribute('src', 'assets/youtubeL.png');
    youtubeIcon.setAttribute('alt', 'YouTube Icon');
    youtubeIcon.classList.add('youtube-icon');
    
    videoButton.appendChild(youtubeIcon);
  
  
    if (object.video.url) {
      videoButton.addEventListener('click', function () {
        window.open(object.video.url, '_blank');
      });
    }
  
    section.appendChild(videoButton);
  
    
  });
  



