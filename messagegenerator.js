const sectionOne = ["As J. Wong once said", "Edgar Allen Poe once wrote", "Knock Knock", "Hunter Biden when Deer Biden walks in", "Why don't we trust HOI Players?"];
const sectionTwo = ["He ain't Daigo!", "I became insane, with long intervals of horrible sanity.", "Whose there?", "Wait what scriptjava just walked in?", "Whaddya mean its not praxis to not trust them-?"];
const sectionThree = ["Ok he might be Daigo...", "Fuck this nerd.", "Dude I rang your doorbell.", "GASP!", "Listen I'm not trusting some fuckin 4X player to finish the joke I don't care if it's not 'praxis'."];

function messageMaker() {
  console.log(sectionOne[(Math.floor(Math.random() * sectionOne.length))]);
  console.log(sectionTwo[(Math.floor(Math.random() * sectionTwo.length))]);
  console.log(sectionThree[(Math.floor(Math.random() * sectionThree.length))]);

};
