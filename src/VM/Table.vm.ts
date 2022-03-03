import { makeAutoObservable } from 'mobx';

export class TableVm {
    search = '';

    constructor() {
        makeAutoObservable(this);
    }

    setSearch = (value: string) => {
        this.search = value;
    };
}