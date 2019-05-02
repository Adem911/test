import * as React from 'react';
import {observer, inject } from 'mobx-react';
import './ImageCard.css';

interface IMyProps { images?: any, key:any, image: any};


@inject("images")
@observer
class ImageCard extends React.Component<IMyProps> {
    public hideText = () => {
        this.props.images.toggleText = false;
    
    }

    public likeImage = () => {
        this.props.image.like = !this.props.image.like;
    }

    public dislikeImage = () => {
        this.props.image.dislike = !this.props.image.dislike;
    }

    public render() {
        const { alt_description, urls } = this.props.image;
        const like = this.props.image.like;
        const likeClass = like ? 'thumbs up icon thumb-up' : 'thumbs up icon outline thumb-up';
        const dislike = this.props.image.dislike;
        const dislikeClass = dislike ? 'thumbs down icon thumb-down' : 'thumbs down icon outline thumb-down';

        return (
            <div className='image-card'>
                <img alt={alt_description}
                 src={urls.small} />
                 <i className={likeClass} onClick={this.likeImage} />
                 <i className={dislikeClass} onClick={this.dislikeImage} />
            </div>
        );
    }
}

export default ImageCard;