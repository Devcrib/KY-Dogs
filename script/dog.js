let input = document.querySelector('#search input')
let button = document.querySelector('#search button')

let pictureContainer = document.querySelector('.pix');



button.addEventListener('click', () => {
    console.log('seen');
    pictureContainer.innerHTML = "";
    let dogname = input.value.toLowerCase();
    

    let dogFeed = new XMLHttpRequest();
    
    dogFeed.onreadystatechange = () =>{
        
        if (dogFeed.readyState === 4) {
            var dogresult = JSON.parse( dogFeed.responseText );
            console.log(dogresult);
            for (let i = 0; i < 6; i++) {
                let picz = document.createElement('div');
                picz.classList.add('col-md-4');

                let image = document.createElement("img");
                image.setAttribute('src', dogresult.message[i]);
                image.classList.add('img-styling');

                let dogg = document.createElement('p');
                dogg.innerText = dogname;

                picz.appendChild(image);
                picz.appendChild(dogg)
 
                pictureContainer.appendChild(picz);
            }
            
            
        }
    };
    dogFeed.open('GET', 'https://dog.ceo/api/breed/' + dogname + '/images');
    dogFeed.send();
})
