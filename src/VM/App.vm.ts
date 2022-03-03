import { makeAutoObservable } from 'mobx';

export class AppVm {
    data = [];

    constructor() {
        makeAutoObservable(this);

        fetch('Api.json')
            .then(Response => Response.json())
            .then(json => this.data = json.response.data);
    }
}