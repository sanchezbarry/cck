const searchInput = document.querySelector("[data-search]")

let sermons = document.querySelectorAll("#sermons")



console.log(sermons)

searchInput.addEventListener("input", (e) => {
    const value = e.target.value.toLowerCase()
    console.log(value)

    sermons.forEach(sermons => {
        console.log(sermons)
        const isVisible = sermons.children[1].innerText.toLowerCase().includes(value)
        sermons.classList.toggle("hide", !isVisible)
        console.log(isVisible)

    })
    //     let sermonTitle = sermons.children[1].innnerText
    //     console.log(sermonTitle)
    //     const isVisible = sermonTitle.includes(value)
    //     sermons.classList.toggle("hide", !isVisible)
    // })
    
})


//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// random verse
const randomDrinkBtn = document.querySelector('#random-button')
randomDrinkBtn.addEventListener('click', event => {
  randomDrink(verseUrl)
      }
  )

//random drink API url
const verseUrl = 'https://labs.bible.org/api/?passage=random&type=json'

//random drink api call, creates recipe name, img, instructions, ingredients.
async function randomDrink(verseUrl){
  const response = await fetch(verseUrl)
  console.log('response: ', response)
  const data = await response.json()
  //.json()

  const verseDiv = document.getElementById('verse-div')
  verseDiv.innerHTML = ''

  console.log(data[0].bookname)


  const verseText = document.createElement('p')
  verseText.innerHTML = data[0].text
  verseText.setAttribute('id', 'verse-text')
  verseDiv.appendChild(verseText)

  const verseInfo = document.createElement('p')
  verseInfo.innerHTML = data[0].bookname + " " + data[0].chapter + ":" + data[0].verse
  verseInfo.setAttribute('id', 'verse-info')
  verseDiv.appendChild(verseInfo)



  console.log(verse)

}

