

//on fait l'installation d'abord( npm install mongoose) puis 
// on fait l'importation du mongoose dans notre page
const mongoose=require("mongoose")

//creation du notre fonction du connection  avec notre base de donnees
const connect=async()=>{
    // on utilise le terme "async" pour etre capable d'utilise le terme "await"
    // fonction asynchrone , on attendre jusqu'a la termination de la ligne qui contient le terme "await"
    try {
        //dans notre try on ecrit le code normal du notre travail
        console.log("starting!") // pour dire que on commencé a essaire se connecte a notre base de donnees
        console.log("connecting to database") // on essai a se connecte a notre base de donnees
        await mongoose.connect(process.env.DB_URI) //pour connecter a notre base de donnees , le lien entre paranthese est celle du notre base de donnees avec le mot de passe "ayoub012"
        console.log("connected to db!") // on reussi a se connecte sur notre base de données
        console.log("ending!") //connect bien fait
    } catch (error) {
        // catch est destine pour catches les erreurs au cours de notre lansement ou execution
        console.log(error) // affiche l'erreur a fin de comprendre l'erreur
    }
}

module.exports =connect
// importation de notre fonction connect de lui utilise dans des autres pages