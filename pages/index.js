import ThauList from "../components/thauharu/ThauList";
import { MongoClient } from "mongodb";
import Head from "next/head";

export default function HomePage({ thauharu }) {
  return (
    <>
      <Head>
        <title>Bhet Ghat</title>
        <meta
          name="description"
          content="Sathi bhai haru sanga jamma hune ra bhetne thau haru. Places to gather and have fun with friends, relatives and groups in Kathmandu."
        />
      </Head>
      <ThauList thauharu={thauharu} />
    </>
  );
}

export async function getStaticProps() {
  //fetch data from api

  const client = await MongoClient.connect(
    "mongodb+srv://sanjeevkc7091:wF4beX1zFE9jUCVY@cluster0.jwa93ts.mongodb.net/gabs1bb3?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const thauharuCollection = db.collection("thauharu");

  const thauharu = await thauharuCollection.find().toArray();

  client.close;

  return {
    props: {
      thauharu: thauharu.map((thau) => ({
        title: thau.title,
        address: thau.address,
        image: thau.image,
        id: thau._id.toString(),
      })),
    },
    revalidate: 1,
  };
}
