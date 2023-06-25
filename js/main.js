let cards = document.querySelector(".cards");
let changer = document.querySelector(".modeChange");
let body = document.querySelector('body');
let inp = document.querySelector('.sr');


async function getCards() {
    const res = await fetch('https://api.github.com/users');
    const data = await res.json();
    
    data.forEach(el => {
        cards.innerHTML += `
        <div class="card">
          <div class="card-img">
            <img src="${el.avatar_url}" alt="" />
          </div>
          <div class="card-text">
            <span
              ><h2>The ${el.login}</h2>
              <p class="date">Joined 25 Jan 2011</p></span
            >
            <a href="#" class="username">@${el.login}</a>
            <p class="info">
              No bio yet
            </p>
            <div class="followers">
              <div class="item">
                <p>Repos</p>
                <h2>${el.followers_url.length}</h2>
              </div>
              <div class="item">
                <p>Followers</p>
                <h2>${el.followers_url.length}</h2>
              </div>
              <div class="item">
                <p>Following</p>
                <h2>${el.followers_url.length}</h2>
              </div>
            </div>
            <div class="locales">
              <div class="item">
                <img src="img/locale.svg" alt="" />
                <p>San Francisco</p>
              </div>
              <div class="item">
                <img src="img/twit.svg" alt="" />
                <p>San Francisco</p>
              </div>
              <div class="item">
                <img src="img/zanjir.svg" alt="" />
                <p>San Francisco</p>
              </div>
              <div class="item">
                <img src="img/bino.svg" alt="" />
                <p>San Francisco</p>
              </div>
            </div>
          </div>
        </div>
        `
    });
}
getCards();


