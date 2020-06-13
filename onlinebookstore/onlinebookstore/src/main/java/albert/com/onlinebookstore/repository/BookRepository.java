package albert.com.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import albert.com.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
