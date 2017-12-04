var body = document.querySelector('body');


let form = document.createElement('form');
form.setAttribute('action', 'GET');


let input = document.createElement('input');
input.setAttribute('type', 'text');

let pictureContainer = document.createElement('div');
pictureContainer.setAttribute('class', 'pic');
body.appendChild(input);

var button = document.createElement('button');
button.innerText = "Search";
body.appendChild(button);

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
                let image = document.createElement("img");
                image.setAttribute('src', dogresult.message[i]);
                pictureContainer.appendChild(image);
                // console.log(dogresult.message[i]);
            }
            
            body.appendChild(pictureContainer);
        }
    };
    dogFeed.open('GET', 'https://dog.ceo/api/breed/' + dogname + '/images');
    dogFeed.send();
})
