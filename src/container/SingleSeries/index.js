import React, {Component } from 'react';
import Loader from '../../components/loader';


class SingleSeries extends Component{

    state = {
        show: null
    }

    componentDidMount() {
        const { id } = this.props.match.params;
      
        fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
          .then((response) => {
            if (!response.ok) {
              throw new Error(`Failed to fetch. Status: ${response.status}`);
            }
            return response.json();
          })
          .then((json) => this.setState({ show: json }))
          .catch((error) => console.error('Error fetching data:', error));
      }
      
      


    render(){
    const { show } = this.state;

        return(
            <div>
                {show === null && <Loader />}
                {show && (
                <div>
                 <p>{show.name}</p>
                 <p>Premiered - {show.premiered}</p>
                 <p>Rating - {show.rating.average}</p>
                 <p>Episodes - {show._embedded.episodes && show._embedded.episodes.length}</p>
                 <p>
                 <img alt="show" src={show.image.medium} />
                 </p>
                </div>
                    )}

            </div>
        )
    }
}

export default SingleSeries; 