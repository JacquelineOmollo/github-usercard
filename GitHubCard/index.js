


axios.get('https://api.github.com/users/Jacquelineomollo');
const yourPromise = new Promise((resolve, reject) => {

})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/





/*         Using that array, iterate over it, requesting data for each user, creating a new card for each
         user, and adding that card to the DOM.
*/

const followersArray = [
  "https://api.github.com/users/tetondan",
  "https://api.github.com/users/dustinmyers",
  "https://api.github.com/users/justsml",
  "https://api.github.com/users/luishrd",
  "https://api.github.com/users/bigknell",
];
function lsCards(Instuctors) {

}

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const cards = document.querySelector('.cards');

function gitCards(myData) {
  const card = document.createElement('div');
  const image = document.createElement('img')
  const card_info = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const link = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  card.appendChild('card');
  image.appendChild('avatar_url');
  card_info.appendChild('card-info');
  name.appendChild('name');
  username.appendChild('username');
  location.appendChild('location');
  profile.appendChild('profile');
  link.appendChild('a');
  followers.appendChild('followers');
  following.appendChild('following')
  bio.appendChild('bio');


  image.textContent = myData.image;
  name.textContent = myData.name;
  username.textContent = myData.username;
  location.textContent = myData.location;
  profile.textContent = "Profile:  ";
  link.textContent = myData.data.login;
  followers.textContent = myData.followers_url;
  following.textContent = myData.following_url;


  card.classList.add('card');
  image.src.classList.add('.card img');
  link.classList.add('');




}
return card;


