import React from 'react';
import {Icon} from '../src';
import './style.scss';
import '../src/index.scss';

const iconNames = [
  'camera',
  'images',
  'retry',
  'star',
  'trash'
];

class IconList extends React.Component {
  render() {
    return (
      <div>
        { iconNames.map(name => <Icon name={name} size={48} />) }
      </div>
    );
  }
}

React.render(<IconList />, document.getElementById('main'));
