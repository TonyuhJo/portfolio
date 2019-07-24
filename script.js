function showHome(){
    $('.main').html(`<header role="introduction" class="headline">
          <h1>Hey there!</h1>
          <h2>My name is Tonya, and I'm an aspiring fullstack web developer.</h2>
        </header>
        <section class="bio">
          <h3>I'm currently a student in the Web Developer Track bootcamp at Bloc. I've grown fond of HTML5, CSS3, and JavaScript. However, I'm looking forward to getting to know the languages of the back-end. There's nothing quite as satisfying as coding a site or an app from scratch and being able to say, "I built that".</h3><br>
          <h3>I'm based in the Pacific Northwest, and reside in a small mountain town that's tucked into the Cascades. If I'm not working or coding, you'll usually find me playing with my dogs, getting lost in the mountains, or binging an entire series on Netflix.</h3>
        </section>`);
  }
  
function showProjects(){
    $('.main').html(`<section class="column1">
          <img src="images/STApp1.png" alt="Stranger Things App Screenshot" class="project-SS">
          <p class="project-name">Stranger Things Quiz App</p>
          <p class="project-description">Test your knowledge of the Netflix Original series, Stranger Things, with this web app.</p>
          <p class="created-with">HTML, CSS, JavaScript, jQuery</p>
          <ul class="project-links">
            <li class="proj-link"><a href="https://tonyuhjo.github.io/stranger-things-quiz/" class="proj-link">Live Site</a> | </li>
            <li class="proj-link"><a href="https://github.com/TonyuhJo/stranger-things-quiz" class="proj-link">GitHub Repo</a></li>
          </ul>
        </section>
        
        <section class="column2">
          <img src="images/STApp1.png" alt="Stranger Things App Screenshot" class="project-SS">
          <p class="project-name">Stranger Things Quiz App</p>
          <p class="project-description">Test your knowledge of the Netflix Original series, Stranger Things, with this web app.</p>
          <p class="created-with">HTML, CSS, JavaScript, jQuery</p>
          <ul class="project-links">
            <li class="proj-link"><a href="https://tonyuhjo.github.io/stranger-things-quiz/" class="proj-link">Live Site</a> | </li>
            <li class="proj-link"><a href="https://github.com/TonyuhJo/stranger-things-quiz" class="proj-link">GitHub Repo</a></li>
          </ul>
        </section>
  
        <section class="column1">
          <img src="images/STApp1.png" alt="Stranger Things App Screenshot" class="project-SS">
          <p class="project-name">Stranger Things Quiz App</p>
          <p class="project-description">Test your knowledge of the Netflix Original series, Stranger Things, with this web app.</p>
          <p class="created-with">HTML, CSS, JavaScript, jQuery</p>
          <ul class="project-links">
            <li class="proj-link"><a href="https://tonyuhjo.github.io/stranger-things-quiz/" class="proj-link">Live Site</a> | </li>
            <li class="proj-link"><a href="https://github.com/TonyuhJo/stranger-things-quiz" class="proj-link">GitHub Repo</a></li>
          </ul>
        </section>`);
  }
  
function showContact(){
    $('.main').html(`<header role="introduction" class="headline">
          <h1>Wanna know more?</h1>
          <h2>Feel free to contact me!</h2>
        </header>
        <section class="contact-me">
          <form action="none-yet">
            <p class="contact-name">Name: <input type="text" name="name" class="name-box" required></p>
            <p class="contact-email">Email: <input type="email" name="email" class ="email-box" required></p>
            <p class="contact-message">Message: <textarea type="text" name="message" class="message-box" required></textarea></p>
            <input type="submit" value="Submit" class="submit-button">
          </form>
        </section>
        <section class="additional-contact">
          <p>You can also shoot me an <a href="mailto:tonya.stombaugh@gmail.com" target="_blank" class="contact-links2">email</a>, connect with me on <a href="https://www.linkedin.com/in/tonya-stombaugh-34394518a/" target="_blank" class="contact-links2">LinkedIn</a>, or  check out my <a href="https://github.com/TonyuhJo" target="_blank" class="contact-links2">GitHub</a>.
        </section>`);
  }
  
function renderHome(){
    $('.home').click(function(event){
      showHome();
    })
  }
  
function renderProjects(){
    $('.projects').click(function(event){
      showProjects();
    })
  }
  
function renderContact(){
    $('.contact').click(function(event){
      showContact();
    })
  }
  
function loadSite(){
    renderHome();
    renderProjects();
    renderContact();
  }
  
$(loadSite);