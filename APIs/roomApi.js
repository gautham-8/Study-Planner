const exp = require("express");
const roomApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const ObjectID = require('mongodb').ObjectID;

roomApp.use(exp.json());

roomApp.get("/getrooms", expressAsyncHandler(async (request, response) =>{
    let roomCollectionObject = request.app.get("roomCollectionObject");
    //get all rooms
    let rooms =await roomCollectionObject.find().toArray();
    //send res
    response.send ({ message: "Rooms list", payload: rooms });
    })
);

roomApp.post("/create-room", expressAsyncHandler(async (request, response) => {
        let roomCollectionObject = request.app.get("roomCollectionObject");
        let newRoomObj = request.body;
        await roomCollectionObject.insertOne(newRoomObj);
        response.send({ message: "New room created" });
    })
);

roomApp.put("/update-room", expressAsyncHandler(async (request, response) => {
    let roomCollectionObject = request.app.get("roomCollectionObject");
    let modifiedRoom = request.body;
    // console.log(typeof((modifiedRoom._id)));
    await roomCollectionObject.updateOne({_id:ObjectID(modifiedRoom._id)},{$set:{emails:request.body.emails}});
    // console.log(roomCollectionObject)
    response.send({ message: "Room updated",payload: roomCollectionObject });
})
);

module.exports = roomApp;