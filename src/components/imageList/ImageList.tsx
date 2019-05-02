import * as React from 'react';
import {observer, inject } from 'mobx-react';
import ImageCard from '../imageCard/ImageCard';
import './ImageList.css';


interface IMyProps { images?: any};

@inject("images")
@observer
class ImageList extends React.Component<IMyProps> {
    public render() {
        const images = this.props.images.images.map((image:any) => {
            image.like = false;
            image.dislike = false;
            return <ImageCard key={image.id} image={image}/>
        });
        return <div className='image-list'>{images}</div>
    }
}


export default ImageList;