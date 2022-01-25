import {Table, Button} from 'react-bootstrap';
export default function Cart(props) {
    return (
        <div>
            <h2>Your cart</h2>
            {props.list.length > 0 &&
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Service name</th>
                    <th>Price</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {props.list.map((el, index) => {
                        return(
                            <tr>
                                <td>{index + 1}</td>
                                <td>{el.name}</td>
                                <td>{el.price}</td>
                                <td><Button variant="danger" onClick={() => props.remove(el, index)}>X</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            }
        </div>
    )
}