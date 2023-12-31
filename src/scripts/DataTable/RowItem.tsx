import React from 'react';
import {IDataTableColumn} from "./Types";

interface IProps<T> {
    columns: IDataTableColumn<T>[]
    item: T,
}

// const defaultProps: IProps = {
//
// }

export default function RowItem<T>(props: IProps<T>) {

    const columns: React.ReactElement[] = props.columns.map((v, i) => <td key={i}>{v.format(props.item)}</td>);

    return (
        <tr>
            {columns}
        </tr>
    )

}
