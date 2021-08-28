import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';

import Contacts from './components/Contact';
import AddNewContacts from './components/AddNewContact';
import ViewContact from './components/ViewContact';
import NavBar from './components/NavBar';



class App extends Component {
  render() {
    
    return (
     
      
      <BrowserRouter>
         <NavBar/>
        <Switch>
          <Route exact path="/mycontact" render={() => (
            <Redirect to='/mycontact/contact'></Redirect>
          )} />
          <Route
            exact
            path="/mycontact/contact"
            render={() => <Contacts contactList={this.props.contactList} />}
          />
          <Route exact path="/mycontact/contacts/new" component={AddNewContacts} />
          <Route
            exact
            path="/mycontact/contact/:id"
            render={(props) => <ViewContact {...props} contactList={this.props.contactList} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  contactList: PropTypes.array.isRequired,
}

export default App;
