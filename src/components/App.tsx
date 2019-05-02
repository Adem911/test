import * as React from "react";
import "./App.css";
import { observer, inject } from "mobx-react";
import unsplash from "../api/unsplash";
import SearchBar from "./searchBar/SearchBar";
import ImageList from "./imageList/ImageList";

interface IMyProps {
  images?: any;
}

@inject("images")
@observer
class App extends React.Component<IMyProps> {
  public getImages = async () => {
    const responce = await unsplash.get("/search/photos", {
      params: { query: this.props.images.searchTerm }
    });
    this.props.images.images = responce.data.results;
    this.props.images.searchTerm = "";

    responce.data.results.length === 0
      ? (this.props.images.error = "no results")
      : (this.props.images.error = "");
  };

  public render() {
    const length = this.props.images.images.length;
    const searchTerm = this.props.images.searchTerm;

    return (
      <div>
        <SearchBar />
        <button onClick={this.getImages} data-cy="search-submit">
          get images
        </button>
        <ImageList />
        <h1 className="result-not-found">{this.props.images.error}</h1>
      </div>
    );
  }
}

export default App;
