let data = [
  {
    name: 'Sameh Soliman',
    age: 40,
    gender: 'male',
    city: 'Toronto',
    image : 'https://randomuser.me/api/portraits/men/10.jpg'
  },
  {
    name: 'Engy Yacoup',
    age: 40,
    gender: 'Female',
    city: 'Calgary',
    image : 'https://randomuser.me/api/portraits/women/17.jpg'
  },
  {
    name: 'Sandra Soliman',
    age: 40,
    gender: 'Female',
    city: 'Mississauga',
    image : 'https://randomuser.me/api/portraits/women/11.jpg'
  },
  {
    name: 'Carol Soliman',
    age: 40,
    gender: 'Female',
    city: 'New York',
    image : 'https://randomuser.me/api/portraits/women/12.jpg'
  }
]

function profileGenerator(arr){
  let index = 0;
  return {
    next : function() {
      return index < arr.length ?
         {value: arr[index++], done: false} :
         {done: true}
    }
  }
}

let profiles = profileGenerator(data);

document.querySelector('#next-profile').addEventListener('click', nextProfile);

document.addEventListener('DOMContentLoaded', nextProfile)

function nextProfile(){
  let currProfile = profiles.next().value;
  console.log(currProfile);

  if (currProfile !== undefined){
    document.querySelector('.profile-image').innerHTML = `
    <img src=${currProfile.image}>
    `;

    document.querySelector('.profile-data').innerHTML = `
      <ul class="list-group"> 
        <li class="list-group-item">Name: ${currProfile.name}</li>
        <li class="list-group-item">Age: ${currProfile.age}</li>
        <li class="list-group-item">Gender: ${currProfile.gender}</li>
        <li class="list-group-item">City: ${currProfile.city}</li>
      </ul>
    `
  } else {
    window.location.reload();
  }
}

