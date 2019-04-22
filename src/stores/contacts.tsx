import { autorun, observable } from 'mobx';


class Contacts {
        @observable public users = [
            {id: '01', name: 'user1'},
            {id: '02', name: 'user2'},
            {id: '03', name: 'user3'},
            {id: '04', name: 'user4'}
        ];

       

        public auto = autorun (() => {
            console.log('autorun:', this.users);
        });
}



export default new Contacts;