import React, {Component} from 'react';
import Table from './tableComponent';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header : ["aboutHeader1","aboutHeader2","aboutHeader3"],
            body : [{
                one : "aboutbody1",
                two : "aboutbody2",
                three : "aboutbody3"
            },
            {
                one : "aboutbody4",
                two : "aboutbody5",
                three : "aboutbody6"
            }]
        }
    }
    render() {
        const {header,body} = this.state;
        return (
            <div>
                <h1>About</h1>
                <Table header={header} body={body} />
            </div>
        );
    }
}

export default Home;