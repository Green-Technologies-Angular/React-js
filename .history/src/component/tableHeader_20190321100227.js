import React,{Component} from 'react';

const TableHeader = (props) => {
    return(
        <thead>
            <tr>
                <th>
                    {props.one}
                </th>
            </tr>
        </thead>
    );
}

export default TableHeader;
