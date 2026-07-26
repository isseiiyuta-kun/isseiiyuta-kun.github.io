const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        localStorage.setItem("theme","dark");

        themeButton.innerHTML='<i class="fa-solid fa-sun"></i>';

    }else{

        localStorage.setItem("theme","light");

        themeButton.innerHTML='<i class="fa-solid fa-moon"></i>';

    }

});

window.addEventListener("load",()=>{

    if(localStorage.getItem("theme")==="dark"){

        document.body.classList.add("dark");

        themeButton.innerHTML='<i class="fa-solid fa-sun"></i>';

    }

});

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){

    if(document.documentElement.scrollTop>250){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}