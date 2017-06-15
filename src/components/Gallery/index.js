import React from 'react';
import Instafeed from 'instafeed.js';
import './styles.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: []
    }
    const _this = this;
    new Instafeed({
      get: 'user',
      userId: '2000674980',
      clientId: '3e6d75e3fb1f463daf8c1bd184a270fa',
      accessToken: '2000674980.3e6d75e.8a49376bfc90461fa94becb52a08cb53',
      limit: "30",
      mock: true,
      useHttp: true,
      success: function(res) {
        _this.setState({imgs: res.data})
      }
    }).run();
  }

  render() {
    const imgs = this.state.imgs;

    if (imgs) {
      return (
        <ul className="gallery">
          {imgs.map((img, i) => {
            let url = img.images.standard_resolution.url;
            return (
              <li className="gallery__item" key={i}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <img className="gallery__img" src={url} alt="new eire graffiti"/>
                </a>
              </li>
            )
          })}
        </ul>
      )
    } else {
      return <p>Loading...</p>
    }
  }

}

export default Gallery;
