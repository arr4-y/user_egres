// api.js

// Simulación de una lista de documentos por defecto
const defaultDocuments = [
  { id: 1, title: "Plan de trabajo" },
  { id: 2, title: "Directiva" },
  { id: 3, title: "Reglamento de grados y títulos" },
  { id: 4, title: "Imagen", image: "/icons/docs.svg" },
];

// Simulación de la función fetchDocuments
export async function fetchDocuments() {
  // Simulamos un retraso para imitar una solicitud de red
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultDocuments);
    }, 500); // 500 ms de retraso simulado
  });
}


// Simulación de la función deleteDocument
export async function deleteDocument(id) {
  // Filtra el documento de los datos simulados
  const index = defaultDocuments.findIndex((doc) => doc.id === id);
  if (index !== -1) {
    defaultDocuments.splice(index, 1); // Elimina el documento del array simulado
  }
  // Retornamos una promesa resuelta para simular una eliminación exitosa
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Document deleted" });
    }, 200); // 200 ms de retraso simulado
  });
}




/*
import { fetchEvents, deleteEvent } from "../api";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


export async function fetchDocuments() {
    const response = await fetch(${baseURL}/api/documents);
    if (!response.ok) {
      throw new Error("Failed to fetch documents");
    }
    return response.json();
  }

  export async function deleteDocument(id) {
    const response = await fetch(${baseURL}/api/documents/${id}, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error("Failed to delete document");
    }
  }
  */