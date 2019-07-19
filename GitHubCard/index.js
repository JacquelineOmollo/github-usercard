


axios.get('https://api.github.com/users/Jacquelineomollo')
  .then(reponse => {
    console.log('Success! ', reponse);
    const cards = document.querySelector('.cards');
    cards.appendChild(gitCards(reponse.reponse));
  })
  .catch(error => {
    console.log('error: ', error);
  })


const followersArray = [];
axios.get('https://api.github.com/users/Jacquelineomollo/followers')
  .then(data => {
    console.log('You got it! Your followers are displayed:', data.data);
    const followersData = data.data;
    followersData.forEach(followersArray => {
      followersArray.push(followersData.login);

    })

    followersArray.forEach(follower => {
      axios.get(`https://api.github.com/users/${follower}`)
        .then(data => {
          console.log('Follower info: ', data.data);
          const newCards = document.querySelector('.cards');
          newCards.appendChild(gitCards(data.data));
        })

        .catch(error => {
          console.log('error: ', error);
        })

    })
  })
/*   <div class="card">
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

  card.classList.add('card');
  card_info.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');


  image.textContent = myData.avatar_url;
  name.textContent = myData.name;
  username.textContent = myData.login;
  location.textContent = `Location:  ${myData.location}`;
  profile.textContent = `Profile:  <a href=${myData.html_url}>${myData.html_url}</a>`;
  followers.textContent = `Followers: ${myData.followers_url}`;
  following.textContent = `Following: ${myData.following_url}`;
  bio.textContent = `Bio: ${myData.bio}`;


  card.appendChild(userImg);
  card_info.appendChild(cardinfo);
  card_info.appendChild(name);
  card_info.appendChild(username);
  card_info.appendChild(location);
  card_info.appendChild(profile);
  profile.appendChild(link);
  card_info.appendChild(followers);
  card_info.appendChild(following)
  card_info.appendChild(bio);


  return card;

}




