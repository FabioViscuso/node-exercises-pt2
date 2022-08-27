import dotenv from "dotenv"
dotenv.config()
import { app } from "./server";

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log('Success: Server running on port ' + PORT)
})
