import React ,{Component} from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
class Table extends Component{

    render() {
        return(
            <div>
                <h1>Home</h1>
                <table className="table">
                    <TableHeader />
                    <TableBody />
                </table>
            </div>
        )
    }
}

export default Table;