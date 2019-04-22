import * as React from 'react';
import './App.css';
import { observer, inject } from 'mobx-react';
import axios from 'axios';

interface IMyProps { contacts?: any };



@inject("contacts")
@observer
class App extends React.Component<IMyProps> {

  public getUsers = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users').then((res:any) => {
      this.props.contacts.users = res.data;
      console.log(res.data);
    });
    
}

  public render() {
    const list = this.props.contacts.users.map((el: any) => {
      return <li key={el.id}>{el.name}</li>
    });
    return (
        <div>
          <h3>hoo</h3>
          <button onClick={this.getUsers}>get users</button>
          <button>change name</button>
          <ul>
            {list}
          </ul>
        </div>
      

    );
  }
}

export default App;

