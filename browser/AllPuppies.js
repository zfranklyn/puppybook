import React from 'react';
import {Link} from 'react-router';

export default class AllPuppies extends React.Component {

  render () {

    const allPuppies = this.props.allPuppies; // passed down

    return (
      <div>
        <ul className="list-unstyled">
          { 
            allPuppies && allPuppies.map(puppy=>{
              <li><Link to={`/puppies/${puppy.id}`}>{puppy.name}</Link></li>
            })
          }
        </ul>
      </div>
    )
  }
}