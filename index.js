const repoVar1 = process.env.REPO_VAR1;
const envVar1 = process.env.ENV_VAR1;

console.log(`Valor de REPO_VAR1: ${repoVar1}`);
console.log(`Valor de ENV_VAR1: ${envVar1}`);

const contenedor = document.querySelector(".contenedor")

contenedor.innerHTML = `
<p>Valor de REPO_VAR1: ${repoVar1}<p/>
<p>Valor de ENV_VAR1: ${envVar1}<p/>
`