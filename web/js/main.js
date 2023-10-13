const titleText = document.querySelector(".title")
const urlText = document.querySelector(".url")
const messageText = document.querySelector(".message")
const button = document.querySelector("button")
const postsElement = document.getElementById("posts-group")

const post = []

button.addEventListener("click", (event) => {
  event.preventDefault()

  const title = titleText.value
  const url = urlText.value
  const message = messageText.value

  if (title.length === 0 && url.length === 0 && message.length === 0) {
    alert("Preencha todos os campos")
    return
  }

  const data = {
    title,
    url,
    message,
  }

  post.push(data)

  const posts = post.map((item) => {
    return `
      <div class="post">
      <img src="${item.url}" alt="Imagem de postagem do usuário">
        <div class="post-info">
          <h2>${item.title}</h2>
          <p>${item.message}</p>
        </div>
      </div>
    `
  })

  postsElement.innerHTML = posts.join("")

  titleText.value = ""
  urlText.value = ""
  messageText.value = ""
  titleText.focus()
})

console.log(post)
