import React from 'react';
import {PageHeader} from 'react-bootstrap';

class Introduction extends React.Component {
  render() {
    return (
        <div className="container">
          <PageHeader>Fancy title goes here...</PageHeader>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam atque beatae delectus
            dolorem doloribus error ex facilis laboriosam laudantium magni omnis placeat, ratione saepe sapiente sequi
            tempore ullam velit.</p>
        </div>
    );
  }
}
export default Introduction;
