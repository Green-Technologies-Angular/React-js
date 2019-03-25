import React ,{Component} from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
class Table extends Component{

    render() {
        return(
            <div>
                <h1>{this.props.page}</h1>
                <table className="table">
                    <TableHeader values={this.props.header} click={this.props.cellClick}/>
                    <TableBody values={this.props.body} click={this.props.cellClick}/>
                </table>
            </div>
        )
    }
}

export default Table;