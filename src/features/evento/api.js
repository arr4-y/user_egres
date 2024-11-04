

// Simulación de una lista de eventos por defecto
const defaultEvents = [
  { id: 1, name: "Evento 1", date: "2025-01-01" },
  { id: 2, name: "Evento 2", date: "2025-02-05" },
  { id: 3, name: "Evento 3", date: "2025-03-10" }
];

// Simulación de la función fetchEvents
export async function fetchEvents() {
  // Simulamos un retraso para imitar una solicitud de red
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(defaultEvents);
    }, 500); // 500 ms de retraso simulado
  });
}

// Simulación de la función deleteEvent
export async function deleteEvent(id) {
  // Filtra el evento de los datos simulados
  const index = defaultEvents.findIndex((event) => event.id === id);
  if (index !== -1) {
    defaultEvents.splice(index, 1); // Elimina el evento del array simulado
  }
  // Retornamos una promesa resuelta para simular una eliminación exitosa
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Event deleted" });
    }, 200); // 200 ms de retraso simulado
  });
}


/*
const baseURL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export async function fetchEvents() {
  const response = await fetch(`${baseURL}/api/events`);
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
}

export async function deleteEvent(id) {
  const response = await fetch(`${baseURL}/api/events/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error("Failed to delete event");
  }
}
*/