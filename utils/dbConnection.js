import { connect, connection } from "mongoose";

const connectionStatus = {isConnected:false}
export async function dbConnect(){
    if(connectionStatus.isConnected) return;
    
    const db = await connect(process.env.DBURI);
    console.log(db.connection.db);
    connectionStatus.isConnected = db.connections[0].readyState;
}


connection.on("connected", () => console.log("Mongodb connected to database"));

connection.on("error", (err) => console.error("Mongodb Errro:", err.message));