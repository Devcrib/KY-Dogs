// var body = document.querySelector('body');

// let input = document.createElement('input');
// input.setAttribute('type', 'text');

let input = document.querySelector('#search input')
let button = document.querySelector('#search button')

let pictureContainer = document.querySelector('.pix');
// pictureContainer.setAttribute('class', 'pic');
// body.appendChild(input);

// var button = document.createElement('button');
// button.innerText = "Search";
// body.appendChild(button);

// body.appendChild(form);


button.addEventListener('click', () => {
    console.log('seen');
    pictureContainer.innerHTML = "";
    let dogname = input.value;
    

    let dogFeed = new XMLHttpRequest();
    
    dogFeed.onreadystatechange = () =>{
        
        if (dogFeed.readyState === 4) {
            var dogresult = JSON.parse( dogFeed.responseText );
            console.log(dogresult);
            for (let i = 0; i < 10; i++) {
                let picz = document.createElement('div');
                picz.classList.add('col-md-4');

                let image = document.createElement("img");
                image.setAttribute('src', dogresult.message[i]);
                image.classList.add('img-styling');

                let dogg = document.createElement('p');
                dogg.innerHTML(dogname);

                picz.appendChild(image);
                picz.appendChild(dogg)
 
                pictureContainer.appendChild(picz);
            }
            
            body.appendChild(pictureContainer);
        }
    };
    dogFeed.open('GET', 'https://dog.ceo/api/breed/' + dogname + '/images');
    dogFeed.send();
})
