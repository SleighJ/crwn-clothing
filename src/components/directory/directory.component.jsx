import React from 'react'
import MenuItem from '../menu-item/menu-item.component';

import { sections } from './directory.constants'

import './directory.styles.scss'

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: sections,
    }
  }

  render() {
    const { sections } = this.state
    return (
      <div className="directory-menu">
        {
          sections.map(({ 
            id, 
            title, 
            imageUrl, 
            size, 
            linkUrl 
          }) => (
            <MenuItem 
              key={id} 
              title={title} 
              imageUrl={imageUrl} 
              linkUrl={linkUrl}
              size={size}
            />
          ))
        }
      </div>
    )
  }
}

export default Directory