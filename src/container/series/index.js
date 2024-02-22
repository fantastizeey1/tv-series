import React,{Component} from "react";
import SeriesList from "../../components/serieslist"
import Loader from "../../components/loader";
import Intro from "../../components/intro"


class Series extends Component{
    state = {
        series: [],
        seriesName: '',
        isfetching: false
      }
    
      onSeriesInputChange = (e) => {
        this.setState({ seriesName: e.target.value, isfetching: true });
    
        fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
            .then((response) => response.json())
            .then((json) => this.setState({ series: json, isfetching: false }));
    }
    
    render(){
        const { series, seriesName, isfetching} = this.state;


        return(
            <div >  
                <Intro message="Dive into the essence of your favorite series where every detail is a discovery." />
            <div className="search-input">
                <input type="text" value={seriesName}
                onChange={this.onSeriesInputChange} />
            </div>
            { !isfetching && series.length === 0 && seriesName.trim() === ''
                &&
                <p> Please enter series name into the input feild above.</p>
            }
            {
                !isfetching && series.length === 0 && seriesName.trim() !== ''
                &&
                <p> No TV series has been found with this name.</p>
            }
            {
                isfetching && <Loader/>
            }
            {
                !isfetching && <SeriesList list={this.state.series}/>
            }
            
            </div>

        )
    }
}


export default Series;