*/ Creating the title index
db.books.createIndex({ title: 1 });


*/ creating the author and publication year compund index
db.books.createIndex({ author: 1, published_year: 1 });
