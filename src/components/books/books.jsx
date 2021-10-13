import React from 'react';
import { Table } from 'react-bootstrap';
import { bookList } from '../../data/bookList';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const books = []
        bookList.forEach(b => {
            books.push(<tr>
                <td>{b.id}</td>
                <td>{b.title}</td>
                <td>{b.author}</td>
                <td>{b.genre}</td>
                <td>{b.returnDate}</td>
                </tr>);
        });
        return <div>
            <h5>List of Books</h5>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Return Date</th>
                    </tr>
                </thead>
                <tbody>
                        {books}
                </tbody>
            </Table>
        </div>;
    }
}
 
export default Books;