const bookList = [
    {
        name : "The Lightning Thief",
        author : "Rick Riordan",
        genre_s : "fantasy",
        inStock : true,
        pages : 384,
        ratingCount: 5,
        price: {
            amount:9.99,
            currencyCode:"USD"
        },
        publishedDate:"2019-10-15",
        tags :[
            "Juvenile Fiction",
        ]
    },
    {
        name : "Old Possum's Book of Practical Cats",
        author : "T. S. Eliot",
        genre_s : "fantasy",
        inStock : true,
        pages : 384,
        ratingCount: 3,
        price: {
            amount:9.99,
            currencyCode:"USD"
        },
        publishedDate:"2019-10-15",
        tags :[
            "Juvenile Fiction",
        ]
    },
    {
        name : "The Everything Book of Cats and Kittens",
        author : "DK",
        genre_s : "Suspense",
        inStock : true,
        pages : 120,
        ratingCount: 2,
        price: {
            amount:5.99,
            currencyCode:"USD"
        },
        publishedDate:"2018-06-12",
        tags :[
            "Best Seller","Popular"
        ]
    },
    {
        name : "There are Cats in this Book",
        author : "Viviane Schwarz",
        genre_s : "Didactic",
        inStock : true,
        pages : 220,
        ratingCount: 4,
        price: {
            amount:17.99,
            currencyCode:"USD"
        },
        publishedDate:"2008-06-12",
        tags :[
            "Cats","Animals"
        ]
    },
    {
        name : "Don Quijote",
        author : "Miguel de Cervantes",
        genre_s : "Literature",
        inStock : false,
        pages : 520,
        ratingCount: 7,
        price: {
            amount:47.99,
            currencyCode:"USD"
        },
        publishedDate:"1990-06-12",
        tags :[
            "Best Seller","Reference"
        ]
    },
    {
        name : "The lord of the rings",
        author : "J.R.R. Tolkien",
        genre_s : "fantasy",
        inStock : false,
        pages : 620,
        ratingCount: 9,
        price: {
            amount:59.99,
            currencyCode:"USD"
        },
        publishedDate:"2001-06-12",
        tags :[
            "Swords","Golum"
        ]
    },
    {
        name : "Harry Potter and the Philosopher's Stone",
        author : "J.K. Rowling.",
        genre_s : "fantasy",
        inStock : true,
        pages : 820,
        ratingCount: 10,
        price: {
            amount:99.99,
            currencyCode:"USD"
        },
        publishedDate:"2006-06-12",
        tags :[
            "Magician","Harry Potter"
        ]
    },
    {
        name : "The Hobbit",
        author : "J.R.R. Tolkien.",
        genre_s : "fantasy",
        inStock : true,
        pages : 1220,
        ratingCount: 8,
        price: {
            amount:69.99,
            currencyCode:"USD"
        },
        publishedDate:"2006-06-12",
        tags :[
            "Golum","Dragons","Best Seller"
        ]
    },
];
// Obtener todos los tags que existen
// Ordenar los libros en orden alfabetico
// realizar filtrado dinamico por genero,
// realizar busqueda por titulo, encontrar coincidencias
// obtener top 3 de los libros mas rankeados
// obtener los 3 libros mas baratos
// obtener el libro con fecha de publicacion mas reciente,
// obtener los libros fuera de stock

const tags = () => {
    let arrayTags =  bookList.reduce((contador, book) => {
        if(!contador.includes(...book.tags)) contador = [...contador, ...book.tags];
        return contador;
    }, []);
    return arrayTags;
}




console.log(tags());