import ThauDetail from "../../components/thauharu/ThauDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

export default function ThauDetails(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <ThauDetail
        image={props.image}
        title={props.title}
        description={props.description}
        address={props.address}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://sanjeevkc7091:wF4beX1zFE9jUCVY@cluster0.jwa93ts.mongodb.net/gabs1bb3?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const thauharuCollection = db.collection("thauharu");

  const thauharu = await thauharuCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    paths: thauharu.map((thau) => ({
      params: {
        thauId: thau._id.toString(),
      },
    })),

    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const thauId = context.params.thauId;

  const client = await MongoClient.connect(
    "mongodb+srv://sanjeevkc7091:wF4beX1zFE9jUCVY@cluster0.jwa93ts.mongodb.net/gabs1bb3?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const thauharuCollection = db.collection("thauharu");

  const selectedThau = await thauharuCollection.findOne({
    _id: new ObjectId(`${thauId}`),
  });
  client.close();

  return {
    props: { ...selectedThau, _id: selectedThau._id.toString() },
    revalidate: 3600,
  };
}
