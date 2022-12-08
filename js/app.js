


const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");

  burger.addEventListener('click', () => {
      burger.classList.toggle("active");
      navMenu.classList.toggle("active");
})



let arrayObject = [
  {
    img:"img/Rectangle 6.png",
    title:"flight booking",
    paragraph:"Lorem ipsum dolor sit amet consectetur, adipisicing elitamet perferendis tenetur laboriosam quae dolorem et odit nostrum temporibus, "

  },
  {
    img:"img/Rectangle 5 copy.png",
    title:"hotel & resort booking",
    paragraph:"Lorem ipsum dolor sit amet consectetur, adipisicing elitamet perferendis tenetur laboriosam quae dolorem et odit nostrum temporibus, "
  },
  {
    img:"img/Rectangle 1 copy 2.png",
    title:"family trip planner",
    paragraph:"Lorem ipsum dolor sit amet consectetur, adipisicing elitamet perferendis tenetur laboriosam quae dolorem et odit nostrum temporibus, "
  }
  ,
  {
    img:"img/Rectangle 5.png",
    title:"cruise tour",
    paragraph:"Lorem ipsum dolor sit amet consectetur, adipisicing elitamet perferendis tenetur laboriosam quae dolorem et odit nostrum temporibus, "
  },
  {
    img:"img/Rectangle 4 copy.png",
    title:"fire camp",
    paragraph:"Lorem ipsum dolor sit amet consectetur, adipisicing elitamet perferendis tenetur laboriosam quae dolorem et odit nostrum temporibus, "
  }
  ,
  {
    img:"img/Rectangle 4 copy 2.png",
    title:"corporate holidays ",
    paragraph:"Lorem ipsum dolor sit amet consectetur, adipisicing elitamet perferendis tenetur laboriosam quae dolorem et odit nostrum temporibus, "
  }


];


arrayObject.forEach((element) =>{

const arrayContainer = document.getElementById("arrayContainer");
const addDiv = document.createElement("div");


   addDiv .innerHTML = `
    <div class = "outHot-container-title">
    <img src="${element.img}" >
    <h4> ${element.title}</h4>
    <p> ${element.paragraph}</p>
    </div>
    `
arrayContainer.appendChild(addDiv);


})



