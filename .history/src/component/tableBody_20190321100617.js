import React,{Component} from 'react';

const TableBody = (props) => {
    return(
        <tbody>
            <tr>
                <td>
                    {props.value.one}
                </td>
                <td>
                    {props.value.two}
                </td>
                <td>
                    {props.value.three}
                </td>
            </tr>
        </tbody>
    );
}

export default TableBody;
