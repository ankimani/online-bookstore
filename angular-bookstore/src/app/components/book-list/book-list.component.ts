import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/common/Book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  constructor(private _bookService :BookService) { }

  ngOnInit(): void {
    this.getBookList();
  }
getBookList(){
  this._bookService.getBooks().subscribe(
    data => this.books =data
    )
}
}
