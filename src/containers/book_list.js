import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList = () => {
        return this.props.books.map(( book ) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    };

    render() {
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps( state ) {
//it will show up as props in BookList
    return {
        books: state.books
    };
}

// returned props on the book list container
function mapDispatchProps( dispatch ) {
    //when book is called result passed to all reducers
    return bindActionCreators({
        selectBook: selectBook
    }, dispatch)
}

// Promote BookList feom component to a container - it needs to know about dispatch method.
// Available as props
export default connect(mapStateToProps, mapDispatchProps)(BookList);