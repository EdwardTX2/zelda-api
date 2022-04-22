//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getZelda)

async function getZelda(){
    let url = 'https://botw-compendium.herokuapp.com/api/vs/category/equipment';
    let res = await fetch(url);
    let data = await res.json();
    let weaponsArr = data.data;
    let randomWeaponNum = Math.floor(Math.random() * weaponsArr.length)
    let currentWeapon = weaponsArr[randomWeaponNum];
    let weaponName = currentWeapon.name;
    let attackPoints = currentWeapon.attack;
    let descWeapon = currentWeapon.description;
    let imageWeapon = currentWeapon.image;
    document.querySelector('.img').src = imageWeapon;
    document.querySelector('.name').innerText = weaponName;
    document.querySelector('.attack').innerText = attackPoints;
    document.querySelector('.desc').innerText = descWeapon;
} 