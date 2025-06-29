// Dummy client als vervanger voor Base44

export const base44 = {
  get: async (endpoint) => {
    // Hier kun je per endpoint nepdata teruggeven
    if (endpoint === "projects") {
      return [
        {
          id: 1,
          name: "Voorbeeldproject",
          description: "Dit is een demo project zonder login",
          image: "https://via.placeholder.com/400x300",
        },
        {
          id: 2,
          name: "Tweede project",
          description: "Ook zonder backend opgehaald",
          image: "https://via.placeholder.com/400x300",
        }
      ];
    }

    return [];
  },
};
