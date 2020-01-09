class Book {
    constructor(title, author, link) {
        this.title = title;
        this.author = author;
        this.link = link;
    }
}

class Interface {
    addBook(book) {
        const bookList = document.querySelector('.bookList');
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href="${book.link}">${book.link}</a></td>
        <td><a href="#" class="btn btn-danger">X</a></td>
        `;

        bookList.appendChild(row);
    }

    showAlert(message, className) {
        // Create div with class = "alert className", and message inside
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        // Add div 
        const container = document.querySelector('.container');
        const form = document.querySelector('.bookForm');
        container.insertBefore(div, form);

        // Using class 'alert' remove message after 3s
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        target.parentElement.parentElement.remove();
    }

    clearFilds() {
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("link").value = "";
    }
}

class Store {
    static getBook() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static displayBooks() {
        const books = Store.getBook();
        books.forEach(function (book) {
            const userInterface = new Interface();
            userInterface.addBook(book);
        });
    }

    static storageBook(book) {
        const books = Store.getBook();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(link) {
        const books = Store.getBook();
        books.forEach(function (book, index) {
            if (book.link === link) {
                books.splice(index, 1);
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}

document.addEventListener('DOMContentLoaded', Store.displayBooks);

document.querySelector('.bookForm').addEventListener("submit", function (e) {
    // Value from form
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const link = document.getElementById("link").value;

    // Initialization
    const book = new Book(title, author, link);
    const userInterface = new Interface();

    // Validation
    if (title === "" || author === "" || link === "") {
        userInterface.showAlert("Please fill all fields :)", "alert-danger")
    } else {
        // Add book, show message, clear fields, save in local storage
        userInterface.addBook(book);
        Store.storageBook(book);
        userInterface.showAlert("Book added!", "alert-success");
        userInterface.clearFilds();
    }

    e.preventDefault();
});

document.querySelector('#bookList').addEventListener('click', function (e) {
    const userInterface = new Interface();
    if (e.target.className === 'btn btn-danger') {
        userInterface.deleteBook(e.target);
        userInterface.showAlert("Book removed!", "alert-info");
        // Get access to "link"
        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    }

    e.preventDefault();
});