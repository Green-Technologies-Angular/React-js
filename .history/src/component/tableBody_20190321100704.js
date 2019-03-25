import React,{Component} from 'react';

const TableBody = (props) => {
    return(
        <tbody>
            <tr>
                <td>
                    {props.value[0].one}
                </td>
                <td>
                    {props.value[0].two}
                </td>
                <td>
                    {props.value[0].three}
                </td>
            </tr>
            <tr>
                <td>
                    {props.value[1].one}
                </td>
                <td>
                    {props.value[1].two}
                </td>
                <td>
                    {props.value[1].three}
                </td>
            </tr>
        </tbody>
    );
}

export default TableBody;
