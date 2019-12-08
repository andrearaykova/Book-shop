import { get } from '../data/crud';

class BookService {
    constructor() {
        this.baseUrl = 'http://localhost:5000/book';
        this.allBookUrl = `${this.baseUrl}/all`;
    }

    getTopRatedBooks() {
      return get(this.allBookUrl);
    }
}

export default BookService;