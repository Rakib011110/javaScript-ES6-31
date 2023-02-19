document.getElementById('apply-bg').addEventListener('click', function () {

    const freinds = document.getElementsByClassName('friend')
    for (const friend of freinds) {
        friend.style.backgroundColor = 'blue'

    }

})

document.getElementById('center-third').addEventListener('click', function () {


    const third = document.getElementById('third-friend')
    third.style.textAlign = 'center'
})

document.getElementById('addNew').addEventListener('click', function () {

    const freindContainer = document.getElementById('friends')
    console.log(freindContainer);
    const friend = document.createElement('div');
    friend.classList.add('friend')
    friend.innerHTML = `
<h2 class="friend-name"> Add New Friends</h2> 
<p> Somthing New addd</p>
   
   `

    freindContainer.appendChild(friend)
})