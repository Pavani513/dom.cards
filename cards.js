const card=document.querySelector("div")
card.id="pink"
card.innerHTML=`
<img src="./girl.jpg" width="250"/>
<p>Baby Girl Pink Frock</p>
<p>Price: $2499</p>
<button>See More</button>
`
card.style.border="2px solid black"
card.style.backgroundColor="lightgrey"
card.style.display="inline-block"
card.style.padding="10px"

const card2=document.querySelector("section")
card2.id="pink"
card2.innerHTML=`
<img src="./red.jpg" width="250"/>
<p>Baby Girl Pink Frock</p>
<p>Price: $2499</p>
<button>See More</button>
`
card2.style.border="2px solid black"
card2.style.backgroundColor="lightgrey"
card2.style.display="inline-block"
card2.style.padding="10px"



const newCard=document.createElement("div")

newCard.id="red"
newCard.innerHTML=`
<img src="./white.jpg" width="250"/>
<p>Baby Girl White Frock</p>
<p>Price: $3599</p>
<button>See More</button>
`
newCard.style.border="2px solid black"
newCard.style.backgroundColor="lightgrey"
newCard.style.display="inline-block"
newCard.style.padding="10px"
console.log("newCard")


document.body.appendChild(newCard)

const newCard2=document.createElement("div")

newCard2.id="red"
newCard2.innerHTML=`
<img src="./color.jpg" width="250"/>
<p>Rainbow Baby Girl Frock</p>
<p>Price: $1999</p>
<button>See More</button>
`
newCard2.style.border="2px solid black"
newCard2.style.backgroundColor="lightgrey"
newCard2.style.display="inline-block"
newCard2.style.padding="10px"
console.log("newCard2")


document.body.appendChild(newCard2)

