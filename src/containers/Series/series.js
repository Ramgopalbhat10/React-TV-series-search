import React, { Component } from 'react';
import SeriesList from '../../components/Series-list/series-list';

class Series extends Component {
  state = {
    series: []
  }

  onSeriesInputChange = (e) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(res => res.json())
      .then(data => this.setState({ series: data }));
  }

  render() {
    return (
      <div>
        Current number of series in list - {this.state.series.length}
        <div>
          <input type="text" onChange={this.onSeriesInputChange}/>
        </div>
        <SeriesList list={this.state.series}/>
      </div>
    )
  }
}

export default Series;
