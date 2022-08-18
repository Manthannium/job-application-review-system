import React, { Component } from 'react'; 
//import logo from '.logo.svg';
import './App.css';
import axios from 'axios';
import CustomModal from './components/Modal'

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewAccepted:false,
       
      activeItem: {
        name: "",
        contact: "",
        academic_qualification: "",
        professional_experience: "",
        skills: "",
        accepted: false
      },
      personList : []
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
    .get("http://localhost:8000/api/persons/")
    .then(res => this.setState({ personList: res.data }))
    .catch(err => console.log(err))
  };

  // create toggle property
  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if(item.id) {
      axios
      .put(`http://localhost:8000/api/persons/${item.id}/`, item)
      .then(res => this.refreshList())
    }
    else {
      axios
      .post("http://localhost:8000/api/persons/", item)
      .then(res => this.refreshList())
    }
  };

  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/persons/${item.id}/`)
      .then(res => this.refreshList())
  };

  createItem = () => {
    const item = { name: "", contact: "", accepted: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayAccepted = status => {
    if(status) {
      return this.setState({ viewAccepted: true });
    }
    return this.setState({ viewAccepted: false });
  }

  renderTabList = () => {
    return (
      <div className="my-5 tab-list ">
        <span
          onClick={() => this.displayAccepted(true)}
          className={this.state.viewAccepted ? "active" : ""}
        >
          Accepted
        </span>
        <span
          onClick={() => this.displayAccepted(false)}
          className={this.state.viewAccepted ? "" : "active"}
        >
          Applied
        </span>
      </div>
    )
  }

  // rendering candidates in list (accepted or applied)
  renderItems = () => {
    const { viewAccepted } = this.state;
    const newItems = this.state.personList.filter(
      item => item.accepted == viewAccepted
    );

    return newItems.map(item => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span className={`job-name mr-2 ${this.state.viewAccepted ? "accepted-job" : ""}`}
          name={item.name}>
            {item.name}
          </span>
          <span>
            <button onClick={() => this.editItem(item)} className="btn btn-info mr-2">Edit</button>
            <button onClick={() => this.handleDelete(item)} className="btn btn-danger mr-2">Delete</button> 
          </span>
      </li>
    ))
  };

  render() {
    return (
      <main className="content p-3 mb-2 bg-info">
        <h1 className="text-white text-uppercase text-center my-4"> Job Review App </h1>
        <div className="row">
          <div className="col-md-6 col-sma-10 mx-auto p-0">
            <div className="card p-3">
              <div>
                <button onClick={this.createItem} className="btn btn-warning">Add Candidate</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>

          </div>
        </div>
        {this.state.modal ? (
          <CustomModal activeItem={this.state.activeItem} toggle={this.toggle}
          onSave={this.handleSubmit} />
        ) : null}
      </main>

    )
  }

}


export default App;
