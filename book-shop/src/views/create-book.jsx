import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';
import { UserConsumer } from '../components/contexs/user-contex';

class CreateBook extends Component {

    static service = new AuthenticationService();

    state = {
        title: '',
        genres: '',
        description: '',
        image: '',
        author: '',
        price: ''
    };

    handleChange = ({ target }) => {
        this.setState({
            [target.name]: target.value,
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, genres, description, image, author, price } = this.state;
        const { updateUser } = this.props;

        const credentials = {
            title,
            genres,
            description,
            image,
            author,
            price
        };
        this.setState({
            error: '',
        }, async () => {
            try {
                const result = await CreateBook.service.createbook(credentials);

                if (!result.success) {
                    const errors = Object.values(result.errors).join(' ');

                    throw new Error(errors);

                }

                window.localStorage.setItem('auth_token', result.token);
                window.localStorage.setItem('user', JSON.stringify({
                    ...result.user,
                    isLoggedIn: true,
                }));

                updateUser({
                    isLoggedIn: true,
                    ...result.user
                });

            } catch (error) {
                this.setState({
                    error: error.message,
                });
            }
        })
    }



    render() {
        const { title, genres, description, image, author, price } = this.state;
        const { isLoggedIn } = this.props;

        if (isLoggedIn) {
            return (
                <Redirect to="/" />
            );
        }
        return (
            <main>
                <div className="form-wrapper">
                    <h1>Create New Book</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label for="title">Title</label>
                            <input type="text" name="title" id="title" placeholder="Enter book title" value={title} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="genres">Genres</label>
                            <input type="text" name="genres" id="genres" placeholder="Enter genres for the book. Put a comma between them" value={genres} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="description">Description</label>
                            <input type="text" name="description" id="description" placeholder="Enter book description" value={description} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="image">Image URL</label>
                            <input type="text" name="image" id="image" placeholder="Enter book image URL" value={image} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="author">Author</label>
                            <input type="text" name="author" id="author" placeholder="Enter book author" value={author} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="price">Price</label>
                            <input type="number" name="price" id="price" placeholder="Enter book price" value={price} onChange={this.handleChange} />
                        </div>
                        <input type="submit" value="Create" />
                    </form>
                </div>
            </main>
        )
    };
};

const CreateBookWithContext = (props) => {
    return (
        <UserConsumer>
            {
                ({ isLoggedIn, updateUser }) => (
                    <CreateBook
                        {...props}
                        isLoggedIn={isLoggedIn}
                        updateUser={updateUser}
                    />
                )
            }
        </UserConsumer>
    );
};

export default CreateBookWithContext;
