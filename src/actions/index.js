export function selectBook( book ) {
    //actionCreator, return action -> object with type or property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}