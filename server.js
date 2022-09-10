const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;

// require("dotenv").config()

const path = require('path');
const PORT = process.env.PORT || 4000

app.use(exp.static(path.join(__dirname, "./build")));

const DBurl= "mongodb+srv://sample2022:sample2022@cluster0.6nytb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mclient.connect(DBurl)
.then((client)=>{

    let dbObj=client.db("studyPlanner");
    let userCollectionObject=dbObj.collection("usercollection");
    let roomCollectionObject = dbObj.collection("roomcollection");

    app.set("userCollectionObject",userCollectionObject);
    app.set("roomCollectionObject",roomCollectionObject);

    console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))



const userApp = require("./APIs/userApi");
const roomApp = require("./APIs/roomApi");

app.use("/user-api", userApp);
app.use("/room-api", roomApp);

app.use('*',(request, response) => {
    response.sendFile(path.join(__dirname,'./build/index.html'));
});


app.use((request, response, next) => {
    response.send({ message: `path ${request.url} is invalid` });
});
app.use((error, request, response, next) => {
    response.send({ message: "Error occurred", reason: `${error.message}` });
});

// let port = process.env.PORT
app.listen(PORT, () => console.log("server listening on port ",PORT));