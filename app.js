let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "puedes"];

let domains = "";
let extensions = ["com", "es", "net", "us"];
let tem = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      let random = GenerateRandom(extensions);
      tem = pronoun[i] + adj[j] + noun[k];
      if (random == "es") {
        domains += tem.substring(0, tem.length - 2) + ".es\n";
      } else {
        domains += tem + `.${random}\n`;
      }
    }
  }
}

function GenerateRandom(extens) {
  return extensions[Math.floor(Math.random() * extens.length)];
}

console.log(domains);
