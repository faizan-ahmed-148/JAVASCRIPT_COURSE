let jokes = 

[` does the ocean say hi? It wave` ,

`What do you call a couple of chimpanzees sharing an Amazon account? PRIME-mates.` ,

`Why did the teddy bear say no to dessert? Because she was stuffed.` ,

`Why did the soccer player take so long to eat dinner? Because he thought he couldn’t ` ,

`Name the kind of tree you can hold in your hand? A palm tree!` ,

`What do birds give out on Halloween? Tweets.` ,

`What has ears but cannot hear? A cornfield.` ,

`What’s a cat’s favorite dessert? A bowl full of mice-cream.` ,

` Where did the music teacher leave her keys? In the piano!` ,

` What did the policeman say to his hungry stomach? “Freeze. You’re under a vest.”` ,

` What did the left eye say to the right eye? Between us, something smells!` ,

` What do you call a guy who’s really loud? Mike.` ,

` Why do birds fly south in the winter? It’s faster than walking!` ,

` What did the lava say to his girlfriend? “I lava you!”` ,

` Why did the student eat his homework? Because the teacher told him it was a piece of ` ,

` What did Yoda say when he saw himself in 4k? HDMI.` ,

` Which superhero hits home runs? Batman!` ,

` What’s Thanos’ favorite app on his phone? Snapchat.` ,

` Sandy’s mum has four kids; North, West, East. What is the name of the fourth child? ` ,

` What is a room with no walls? A mushroom.` ,

` Why did the blue jay get in trouble at school? For tweeting on a test!` ,

` What social event do spiders love to attend? Webbings.` ,

` What did one pickle say to the other? Dill with it.` ,

` What is bown, hairy and wears sunglasses? A coconut on vacation.` ,

` Why is a football stadium always cold? It has lots of fans!` ,

`  What did one math book say to the other? “I’ve got so many problems.”` ,

`  What did the Dalmatian say after lunch? That hit the spot!` ,

`  What do you call two bananas on the floor? Slippers.` ,

`  Why did the chicken cross the playground? To get to the other slide.` ,

` Why do ducks have feathers on their tails? To cover their buttquacks.` ,

`  does a vampire start a letter? “Tomb it may concern…”` ,

`  A plane crashed in the jungle and every single person died. Who survived? Married ` ,

`  What kind of math do birds love? Owl-gebra!` ,

`  Why can’t you ever tell a joke around glass? It could crack up.` ,

` What do you call a Star Wars droid that takes the long way around? R2 detour.` ,

`   do you stop an astronaut’s baby from crying? You rocket.` ,

` Why did the scarecrow win a Nobel prize? Because she was outstanding in her field.` ,

`  do you know when a bike is thinking? You can see their wheels turning.` ,

` Why was 6 afraid of 7? Because 7,8,9.` ,

` What goes up and down but doesn’t move? The staircase.` ,

`  What kind of shoes do frogs love? Open-toad!` ,

`  did the baby tell his mom he had a wet diaper? He sent her a pee-mail.` ,

` What is a witch’s favorite subject in school? Spelli` ,

` What’s brown and sticky? A stick.` ,

` Why do ducks always pay with cash? Because they always have bills!` ,

`   did Benjamin Franklin feel holding his kite when he discovered electricity? ` ,

` When does a joke become a “dad” joke? When the punchline is a parent.` ,

`   much did the man sell his dead batteries for? Nothing, they were free of charge!` ,

` Where do most horses live? In neighhh-borhoods!` ,

` Why did the Daddy Rabbit go to the barber? He had a lot of little hares.` ,

`  do you make a lemon drop? Let it fall from the tree.` ] 

// let i = 0;
// const random = () => {
//   return i = Math.floor(Math.random() * jokes.length);
// }
// // either refresh or press next button new joke automatically generates

// const getjokes = () => {
//   random();
//   document.getElementById("jokes").innerHTML = `${jokes[i]}`;
               
// }  
// getjokes();



let i = 0
const random = ()=>{
  return i = Math.floor(Math.random() * jokes.length);
}
const getjokes = ()=>{
  random()
  document.getElementById("jokes").innerHTML = `${jokes[i]}`;
}
getjokes()