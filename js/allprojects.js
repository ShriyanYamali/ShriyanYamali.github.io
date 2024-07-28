var modalInfo = {
    1: {
      title: "European Commission Competition Cases Keyword Search",
      info: "A website for searching keywords related to market definitions in European Commission competition cases.",
      link: "https://competitioncaseskeywordsearch.github.io/",
      github: "https://github.com/CompetitionCasesKeywordSearch/competitioncaseskeywordsearch.github.io"
    },
    2: {
      title: "LexFlow",
      info: "A project that generates a diagram that represents how user-defined principles (arrows) influence an Act-type (circle). The program calculates the circle's position based on the combined area of the arrows.",
      link: "https://github.com/ShriyanYamali/Generating-Legal-Diagrams",
      github: "https://github.com/ShriyanYamali/Generating-Legal-Diagrams"
    },
    3: {
      title: "We Spy Days of Safer Highways",
      info: "A website advocating for a speed camera on Kirkwood Highway in Delaware to improve traffic safety. Created by two high school students, it aims to raise awareness, reduce speeding, and prevent accidents.",
      link: "https://project-citizen-8447054.codehs.me/Home.html",
      github: "https://github.com/ShriyanYamali/We-Spy-Days-of-Safer-Highways"
    } //,
    // 4: {
    //   title: "Project 4",
    //   info: "....",
    //   link: "#",
    //   github: "https://github.com/"
    // },
    // 5: {
    //   title: "Project 5",
    //   info: "...",
    //   link: "#",
    //   github: "https://github.com/"
    // },
    // 6: {
    //   title: "Project 6",
    //   info: "...",
    //   link: "#",
    //   github: "#"
    // }
  };
  
  // Get the modal
  var modal = document.getElementById('preview');
  
  // button that opens the modal
  var btn = document.getElementsByClassName("button");
  
  // <span> that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // open modal 
  for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function() {
      var project = btn[i].parentElement;
      openModal(project);
    })
  };
  
  function openModal(project){
    var id = project.id;
    var img = project.getElementsByTagName("img")[0].src;
    fillOut(id, img);
    modal.style.display = "block";
    document.getElementsByClassName("modal-content")[0].classList.add("scale");
  }
  
  function fillOut(id, img){
    document.getElementById("title").innerHTML = modalInfo[id].title;
    document.getElementById("info").innerHTML = modalInfo[id].info;
    document.getElementById("img").src = img;
    document.getElementById("live").onclick = function(){
      window.open(modalInfo[id].link,'_blank');
    }
    document.getElementById("github").onclick = function(){
      window.open(modalInfo[id].github,'_blank');
    }
  }
  
  // close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }
  
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }

// <!----------------------------------------- NAVBAR ----------------------------------------->
// <!----------------------------------------- NAVBAR ----------------------------------------->
// <!----------------------------------------- NAVBAR ----------------------------------------->
// <!----------------------------------------- NAVBAR ----------------------------------------->
// <!----------------------------------------- NAVBAR ----------------------------------------->
// <!----------------------------------------- NAVBAR ----------------------------------------->


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});