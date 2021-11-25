const favoriteItem = e =>{
    if(e.target.id === 'color'){
        alert("My favorite color is clear!")
    } else if(e.target.id === 'place'){
        alert("My favorite place is Place!")
    } else if(e.target.id === 'ritual'){
        alert("My favorite ritual is am workouts!")
    }
}

const favoriteColorBtn = document.getElementById('color')
favoriteColorBtn.addEventListener('click', favoriteItem)

const favoritePlaceBtn = document.getElementById('place').addEventListener('click', favoriteItem)

const favoriteRitualBtn = document.getElementById('ritual')
favoriteRitualBtn.addEventListener('click', favoriteItem)
