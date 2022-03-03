import { useState } from 'react';
import './App.scss';
import { AppVm } from '../../VM';
import { Table } from '../../Components';
import { observer } from 'mobx-react';

export const App = observer(() => {

    const [vm] = useState(new AppVm());

    return (
        <div className="app">
            <p>Test App</p>
            <Table
                input={true}
                data={vm.data}
            />
        </div>
    );
});