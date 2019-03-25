import React ,{Component} from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
class Table extends Component{

    render() {
        return(
            <div>
                
                <table className="table">
                    <TableHeader value={this.props.header}/>
                    <TableBody value={this.props.body}/>
                </table>
            </div>
        )
    }
}

export default Table;