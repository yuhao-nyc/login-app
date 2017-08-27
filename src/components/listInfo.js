import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

export default class ListInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/data')
     .then(res => {
        this.setState({ items: res.data });
    });
  }

  sortByAZ(data) {
    this.setState({
      items: _.orderBy(this.state.items, data, ['asc'])
    })
  }

  sortByZA(data) {
    this.setState({
      items: _.orderBy(this.state.items, data, ['desc'])
    })
  }

  renderItems() {
    return _.map(this.state.items, data => {
      return (
        <div key={data.name} className="col-md-4">
          <div className={`list-item-box item-box-${data.category}`}>
            <h2><b>{data.name}</b></h2>
            <h4><i>{data.age}</i></h4>
            <h5>{data.category}</h5>
            <div className={`priority-box priority-box-${data.priority}`}>&nbsp;</div>
          </div>
        </div>
      )
    })
  }

  handleFilter(event) { //a bad solution.. needs some improvement!! maybe an array to store the 3 categories
    const list1 = document.getElementsByClassName("item-box-cat1");
    const list2 = document.getElementsByClassName("item-box-cat2");
    const list3 = document.getElementsByClassName("item-box-cat3");

    if (event.target.id === 'cat1') {
      for (let index = 0; index < list1.length; index++) {
        list1[index].setAttribute('style', 'display: block');
      }
      for (let index = 0; index < list2.length; index++) {
        list2[index].setAttribute('style', 'display: none');
      }
      for (let index = 0; index < list3.length; index++) {
        list3[index].setAttribute('style', 'display: none');
      }
    }
    if (event.target.id === 'cat2') {
      for (let index = 0; index < list2.length; index++) {
        list2[index].setAttribute('style', 'display: block');
      }
      for (let index = 0; index < list1.length; index++) {
        list1[index].setAttribute('style', 'display: none');
      }
      for (let index = 0; index < list3.length; index++) {
        list3[index].setAttribute('style', 'display: none');
      }
    }
    if (event.target.id === 'cat3') {
      for (let index = 0; index < list3.length; index++) {
        list3[index].setAttribute('style', 'display: block');
      }
      for (let index = 0; index < list1.length; index++) {
        list1[index].setAttribute('style', 'display: none');
      }
      for (let index = 0; index < list2.length; index++) {
        list2[index].setAttribute('style', 'display: none');
      }
    }
  }

  filterItems() {
    return _.map(this.state.items, data => {
      return (
          <div key={data.name} className="form-check form-check-inline col-md-3">
            <label className="form-check-label">
              <input onClick={this.handleFilter} className="form-check-input" type="radio" name="category" id={`${data.category}`}/> {data.category}
            </label>
          </div>
      )
    })
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="list-group filter-box">
              <a className="list-group-item list-group-item-action">Default</a>
              <a className="list-group-item list-group-item-action" onClick={this.sortByAZ.bind(this, 'name')}>Sort name by A-Z</a>
              <a className="list-group-item list-group-item-action" onClick={this.sortByZA.bind(this, 'name')}>Sort name by Z-A</a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              {this.filterItems()}
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          {this.renderItems()}
        </div>
      </div>

    )
  }
}
