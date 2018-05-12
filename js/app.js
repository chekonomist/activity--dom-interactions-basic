//--------------------------------------------------------
//TASK 1: Add the text 'List of Friends' to .title element
//--------------------------------------------------------

var newTitleEl = document.querySelector('.title')
newTitleEl.textContent = "List of Friends"



//--------------------------------------------------------
//TASK 2: Put this array of strings as <li> elements
//        onto the friends list
//
//     BONUS: do it in reverse order.
//--------------------------------------------------------

var friendsList = ['Jimmy G.', 'Scotty M.', 'Patty L.', 'Kelly F.', 'Kitty S.']

var friendsInListEl = document.querySelector('.friends-list')

// for (var i = friendsList.length - 1 ; i >= 0 ; i--) {
//   friendsInListEl.innerHTML += `<li>${friendsList[i]}</li>`
// }

/*Other Solution with for each*/

friendsList.forEach( function(el, i, arr){
  friendsInListEl.innerHTML += `<li>${el}</li>`
})


//--------------------------------------------------------
//TASK 3: Make all of the text capitalized in the <li> elements with a
//        class of 'urgent'
//
//        BONUS: Capitalize AND make bold the elements with
//               a class of 'urgent'
//--------------------------------------------------------

var taskListEl = document.querySelectorAll('.task-list .urgent')

var taskListElToArray = [...taskListEl]

taskListElToArray.forEach( function (el, i, arr) {
  var capitalizedWords = el.innerHTML.toUpperCase()
  el.innerHTML = `<strong>${capitalizedWords}</strong>`
})
