const button = document.querySelector("button")

button.addEventListener("click", () => {
    changeColor()
})

function getRandomColor() {
    var letters = "0123456789ABCDEF"
    var color = "#"
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

const user = "miishiyama"
const url = `https://api.github.com/users/${ user }`

function changeColor() {
    const randomColor = getRandomColor()
    axios.get(url).then(response => {
        const data = response.data
        document.querySelector("#left").innerHTML = `
            <h1>
                Compartilhe seu #rocketcard
            </h1>
            <div class="card" style="border-left: 16px solid ${ randomColor }; border-right: 15px solid ${ randomColor }; border-top: 24px solid ${ randomColor }; border-bottom: 25px solid ${ randomColor };">
                <div class="header">
                    <img src="./assets/logo.svg" alt="Logo da Rocketseat">
                    <a href="${ data.html_url }" target="_blank">
                        <h2>
                            ${ data.login }
                        </h2>
                    </a>
                </div>
                <img class="image" src="${ data.avatar_url }" alt="Imagem de perfil de ${ user }">
                <div class="datas">
                    <ul>
                        <li>
                            <img src="./assets/followers.svg">
                            <span>
                                ${ data.followers } Seguidores
                            </span>
                        </li>
                        <li>
                            <img src="./assets/following.svg">
                            <span>
                                ${ data.following } Seguindo
                            </span>
                        </li>
                        <li>
                            <img src="./assets/repository.svg">
                            <span>
                                ${ data.public_repos } Repositórios
                            </span>
                        </li>
                        <li>
                            <img src="./assets/location.svg">
                            <span>
                                ${ data.location }
                            </span>
                        </li>
                    </ul>
                </div>
                <img class="footer" src="./assets/footer.svg">
            </div>
        `
    })
}

axios.get(url).then(response => {
    const data = response.data
    document.querySelector("#left").innerHTML = `
        <h1>
            Compartilhe seu #rocketcard
        </h1>
        <div class="card" style="border-left: 16px solid black; border-right: 15px solid black; border-top: 24px solid black; border-bottom: 25px solid black;">
            <div class="header">
                <img src="./assets/logo.svg" alt="Logo da Rocketseat">
                <a href="${ data.html_url }" target="_blank">
                    <h2>
                        ${ data.login }
                    </h2>
                </a>
            </div>
            <img class="image" src="${ data.avatar_url }" alt="Imagem de perfil de ${ data.name }">
            <div class="datas">
                <ul>
                    <li>
                        <img src="./assets/followers.svg">
                        <span>
                            ${ data.followers } Seguidores
                        </span>
                    </li>
                    <li>
                        <img src="./assets/following.svg">
                        <span>
                            ${ data.following } Seguindo
                        </span>
                    </li>
                    <li>
                        <img src="./assets/repository.svg">
                        <span>
                            ${ data.public_repos } Repositórios
                        </span>
                    </li>
                    <li>
                        <img src="./assets/location.svg">
                        <span>
                            ${ data.location }
                        </span>
                    </li>
                </ul>
            </div>
            <img class="footer" src="./assets/footer.svg">
        </div>
    `
})