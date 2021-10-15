import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { Table } from 'react-bootstrap';
import { bookList } from '../../data/bookList';
import Sidebar from '../sidebar';
import BookList from './list';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
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
        // return <div>
        //     <h5>List of Books</h5>
        //     <Table striped bordered hover>
        //         <thead>
        //             <tr>
        //                 <th>ID</th>
        //                 <th>Title</th>
        //                 <th>Author</th>
        //                 <th>Genre</th>
        //                 <th>Return Date</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //                 {books}
        //         </tbody>
        //     </Table>
        // </div>;
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item sm={0} md={1} />
                    <Grid item sm={2} md={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item sm={9} md={8}>
                        <BookList />
                    </Grid>

                </Grid>
            </div>
        )
    }
}

export default Books;