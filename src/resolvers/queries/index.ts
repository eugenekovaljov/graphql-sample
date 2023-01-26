const books = [
    {
        title: 'The Awakening',
        author: {
            name: "Ivan",
            books: [{
                title: "Kamenyar"
            }]
        },
    },
    {
        title: 'City of Glass',
        author: {
            name: "Taras"
        }
    },
];

export const query = {
    books: () => books,
}
