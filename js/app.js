
const moveGet = (url = "https://api.themoviedb.org/3/movie/popular?api_key=78828dca7949b70ca50313e4d49660d1&language=en-US&page=1&fbclid=IwAR0PuIxpwmBg_C7v1cSacQe37ekmHfTxzk9jpSqed1b1g-Zh_dRkKuJF0Vs") =>{

  axios.get(url)
       .then(response  =>  {
            moveImg(response);
       })
       .catch( error  => {
       console.log(error);
       })
 
}
moveGet()


const moveImg = (response) =>{


  let responseData = response.data.results

      responseData.forEach(element => {
 

  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  const imgUrl = 'https://image.tmdb.org/t/p/original';
       

       li.innerHTML = `
       <img src="${imgUrl + element.poster_path}" width="220" id="${element.id + "img"}"class="poster"></img>
       <div class="movie-info" id="${element.id}">
       <p>Title: ${element.original_title}</p>
       <p>Rate: ${element.vote_average}</p>
       <p>Date: ${element.release_date}</p>
       </div>

        `
li.addEventListener("mouseover" , () =>{

   let ull = document.getElementById(element.id);
       ull.style.display = "block"
       ull.style.cursor = "pointer"
    

   let blurImg = document.getElementById(element.id + "img")
        blurImg.style.filter ="blur(3px)"
        blurImg.style.transition = "1s"
        blurImg.style.border = "3px solid  #ff4343"

       
})

li.addEventListener("mouseleave", () =>{

   let lll = document.getElementById(element.id)
       lll.style.display = "none"

   let blur = document.getElementById(element.id + "img")
       blur.style.filter ="blur(0px)"
       blur.style.transition = "0.5s"
       blur.style.border = "0px"
})

       ul.appendChild(li)

  });
 }
 


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



