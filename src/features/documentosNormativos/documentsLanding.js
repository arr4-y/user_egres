// documentsLanding.js
// documentsLanding.js
"use client"; // Indica que este es un componente de cliente

import { useEffect, useState } from "react";
import { fetchDocuments } from "./api";
import Image from "next/image"; // Importa el componente Image de Next.js

export default function DocumentList() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments()
      .then((docs) => {
        console.log("Fetched documents:", docs); // Agrega este console.log para depuración
        setDocuments(docs);
      })
      .catch((error) => {
        console.error("Error fetching documents:", error);
      });
  }, []);

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        Documentos Normativos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {documents.map((doc) => (
          <div
            key={doc.id}
            className={`p-4 shadow rounded-lg text-center ${
              doc.image ? "" : "bg-white"
            }`}
          >
            {doc.image ? (
              <Image
                src={doc.image}
                alt={doc.title}
                width={300} // Ajusta según sea necesario
                height={200} // Ajusta según sea necesario
                className="w-full h-auto mx-auto"
              />
            ) : (
              <p>{doc.title}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

