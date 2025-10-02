import helloWorld from "./helloWorld.js";

async function messages() {
  let msg = await helloWorld();
  console.log(msg);
}

messages();
