import React from "react";
import './index.css';
import {Link} from 'react-router-dom';


const SeriesListItem = ({ series }) => (
    <li>
      <Link 
      className="link"
      to={`/series/${series.show.id}`}>
        {series.show.name}
      </Link>
    </li>
  );

const SeriesList =(props) =>{

    if (!props.list) {
        return <div>No series available</div>;
    }
    return(
        <div>
            <ul className="series-list">
                {props.list.map(series =>(
                    <SeriesListItem series={series} key={series.show.id} />
                ))}
            </ul>
        </div>
    )
}
export default SeriesList