import React from 'react';
import {Icon} from '../src';
import './style.scss';
import '../src/index.scss';

const iconNames = [
  "business",
  "camera",
  "share",
  "images",
  "retry",
  "star",
  "trash"
];

const socialIcons = [
  { name: "facebook", background: "#3b5998" },
  { name: "twitter", background: "#55acee" },
  { name: "google", background: "#dd4b39" },
  { name: "whatsapp", background: "#4dc247" }
];

class IconButton extends React.Component {
  render() {
    const { background } = this.props;

    return (
      <span style={{
        display: "inline-block",
        background: background,
        borderRadius: "50%"
      }}>
        <Icon {...this.props} />
      </span>
    )
  }
}

class IconList extends React.Component {
  render() {
    return (
      <div>
        { iconNames.map(name => <Icon name={name} size={48} />) }
        { socialIcons.map(icon => {
            return (
              <IconButton
                background={icon.background}
                size={48}
                name={icon.name}
                color={"#fff"} />
            );
          })
        }
      </div>
    );
  }
}

React.render(<IconList />, document.getElementById('main'));
