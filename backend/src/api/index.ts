import server from "../app";
import { connectToDatabase } from "../modules/core/utils/connectDatabase";

connectToDatabase();

export default server.app;
