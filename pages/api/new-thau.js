import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://sanjeevkc7091:wF4beX1zFE9jUCVY@cluster0.jwa93ts.mongodb.net/gabs1bb3?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = client.db();
    const thauharuCollection = db.collection("thauharu");
    const result = await thauharuCollection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "Thau inserted!" });
  }
}
