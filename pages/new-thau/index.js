import { useRouter } from "next/router";
import NewThauForm from "../../components/thauharu/NewThauForm";
import Head from "next/head";
import { useState } from "react";

export default function NewThauPage({ enteredThauData }) {
  const router = useRouter();
  const [isAdding, setIsAdding] = useState(false);

  async function addThauHandler(enteredThauData) {
    setIsAdding(true);
    const response = await fetch("/api/new-thau", {
      method: "POST",
      body: JSON.stringify(enteredThauData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    // setIsAdding(false);
    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Naya Thau Add Garam</title>
        <meta
          name="description"
          content="Add your own new Thau. Naya thau add garam."
        />
      </Head>
      <NewThauForm onAddThau={addThauHandler} isAdding={isAdding} />
    </>
  );
}
