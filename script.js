console.log(`hey`);

const container = document.querySelector(".container");
const body = document.body;

const randomHexCode = ()=>{
  const hexCodeChars = `123456789abcdef`;
  let hexCodeLength = 6;
  let hexCode = `#`;
  
  while(hexCodeLength--){
    let index = Math.floor(Math.random() * hexCodeChars.length);
    hexCode += hexCodeChars[index];
  }
  return hexCode;
}

for(let i = 1; i <= 9; ++i){
  const box = document.createElement(`div`);
  box.classList.add(`box`);
  box.classList.add(`box${i}`);
  box.textContent = randomHexCode();
  box.style.backgroundColor = randomHexCode();
  container.append(box);
}

const btn = document.createElement("button");
body.append(btn);
btn.classList.add(`btn`);
btn.textContent = `refresh`;

btn.addEventListener("click", (e)=>{
  location.reload(true);
})

const blocks = document.querySelectorAll(`.box`);
blocks.forEach((block)=>{
  block.addEventListener("click", (e)=>{
    navigator.clipboard.writeText(e.target.textContent);
  });
});

const h1 = document.createElement("h1");
h1.textContent = "Select any color to copy the code";
h1.style.textAlign = 'center'
container.before(h1);
