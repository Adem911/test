import * as React from 'react';
import { observer, inject } from 'mobx-react';

interface IMyProps { images?: any };

@inject("images")
@observer
class SearchBar extends React.Component<IMyProps> {

    public onInputChangeHandler = (event:any) => {
        this.props.images.searchTerm = event.target.value;     
    }

    public hideText = () => {
        this.props.images.toggleText = false;     
    }


    public render() {
        const hide = this.props.images.toggleText;
        return (
            <div className='ui segment search-bar'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Image Search</label>
                        <input
                            className='search-input'
                            autoFocus
                            type='text'
                            value={this.props.images.searchTerm}
                            onChange={this.onInputChangeHandler} />
                        
                    </div>
                </form>
                <button onClick={this.hideText}>hide</button>
                {hide ? <h2>hello</h2> : null}
            </div>

        );
    }
}

export default SearchBar;