// Cria a imagem do gato
const cat = document.createElement("img");

// Caminho da imagem (tem de existir na pasta)
cat.src = chrome.runtime.getURL("cat-128.png");

// Adiciona classe para estilizar
cat.classList.add("cat-extension");

// Adiciona ao body da página
document.body.appendChild(cat);

