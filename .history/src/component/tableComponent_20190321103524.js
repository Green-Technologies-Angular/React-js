import React ,{Component} from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
class Table extends Component{

    render() {
        return(
            <div>
                <table className="table">
                    <TableHeader values={this.props.header}/>
                    <TableBody values={this.props.body}/>
                </table>
            </div>
        )
    }
}

export default Table;