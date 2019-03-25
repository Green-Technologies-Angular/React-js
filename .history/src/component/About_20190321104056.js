import React, {Component} from 'react';
import Table from './tableComponent';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header : ["aboutHeader1","aboutHeader2","aboutHeader3"],
            body : [{
                one : "aboutbody",
                two : "aboutbody",
                three : "aboutbody"
            },
            {
                one : "aboutbody",
                two : "aboutbody",
                three : "aboutbody"
            },
            {
                one : "aboutbody",
                two : "aboutbody",
                three : "aboutbody"
            },
            {
                one : "aboutbody",
                two : "aboutbody",
                three : "aboutbody"
            },
            {
                one : "aboutbody",
                two : "aboutbody",
                three : "aboutbody"
            }]
        }
    }
    render() {
        const {header,body} = this.state;
        return (
            <div>
                <h1>About</h1>
                <Table header={header} body={body} page="About" />
            </div>
        );
    }
}

export default Home;