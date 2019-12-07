import React, { Fragment, Component } from 'react';
import BookCard from './book-card';
import Loading from './loading';

class TopRatedBookCards extends Component {
    state = {
        books: [],
        isLoading: false,
    };

    render() {
        const { books } = this.state;

        if (!isLoading) {
            return <Loading />;
        }

        if (!books.length && !isLoading) {
            return (
                <div>
                    <br />
                    <h2>No books</h2>
                </div>
            )
        }

        return (
            <Fragment>
                <h2>Top Rated</h2>
                <div className="row">
                    <div className="card-deck space-top">
                        {
                            books.map(book => (
                                <BookCard key={book.id} {...book} />
                            ))
                        }
                    </div>
                </div>
            </Fragment>
        );
    }
    componentDidMount() {

    }
}

export default TopRatedBookCards;