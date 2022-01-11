import React, { useState, useEffect } from 'react' 
import MenuItem from '../menu-item/menu-item.component';

import { sections } from './directory.constants'

import './directory.styles.scss'


const Directory = () => {
  const [ menuSections, setMenuSections ] = useState(sections)

  return (
    <div className="directory-menu">
      {
        menuSections.map(({
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

export default Directory



// class Directory extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       sections: sections,
//     }
//   }

//   render() {
//     const { sections } = this.state
    // return (
    //   <div className="directory-menu">
    //     {
    //       sections.map(({
    //         id,
    //         title,
    //         imageUrl,
    //         size,
    //         linkUrl
    //       }) => (
    //         <MenuItem
    //           key={id}
    //           title={title}
    //           imageUrl={imageUrl}
    //           linkUrl={linkUrl}
    //           size={size}
    //         />
    //       ))
    //     }
    //   </div>
    // )
//   }
// }