import { observer } from 'mobx-react';
import { useState } from 'react';
import './Table.scss';
import { TableVm } from "../../VM";
import { T } from '../../Types';
import { Input } from '../Input';

type Props = {
    input?: boolean;
    data: T.TableProps;
}

export const Table = observer((props: Props) => {
    const [vm] = useState(new TableVm());

    const input = props.input ? (
        <Input
            name="Search"
            placeHolder="Write here"
            value={vm.search}
            onChange={vm.setSearch}
        />
    ) : null;

    const assigned = (
        assigned: Array<{
            person_name: string;
            status: string;
    }>) => assigned.map(item => (
        <div key={`assigned-to-${item.person_name}`}>
            {item.person_name}
            {item.status}
        </div>
    ));

    const tableData = props.data.map(item => 
        item.description.toLowerCase().includes(vm.search.toLowerCase()) 
        ? (
            <tr key={`table-row-${item.work_order_id}`}>
                <td>{item.work_order_id}</td>
                <td>{item.description}</td>
                <td>{item.received_date}</td>
                <td>{assigned(item.assigned_to)} </td>
                <td>{item.status}</td>
                <td>{item.priority}</td>
            </tr>
        )
        : null
    ); 

    return (
        <div className="table">
            {input}
            <table className="table-content">
                <thead className="table-content-header">
                    <tr>
                        <th>WO ID</th>
                        <th>Description</th>
                        <th>Received date</th>
                        <th>Assigned to</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody className="table-content-data">
                    {tableData}
                </tbody>
            </table>
        </div>
        
    );
});