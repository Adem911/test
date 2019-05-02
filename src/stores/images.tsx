import { autorun, observable } from 'mobx';


class Images {
        @observable public images = [];
        @observable public searchTerm = '';
        @observable public toggleText = true;
        
        public auto = autorun (() => {
            console.log('autorun:', this.images);
        });
}



export default new Images;