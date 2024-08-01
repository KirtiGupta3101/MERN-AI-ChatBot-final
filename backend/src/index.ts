import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections and listeneres
const PORT = process.env.PORT || 5000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log("Server Open & Connected To Database 🤟")
    );
  })
  .catch((err) => console.log(err));
// iQBVswzpIlhLQMFq
// mongodb+srv://kirtigupta3101:<password>@cluster0.rgd7mgt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//org-gJIlzgxyiJy2QZKX4jGEMEfZ