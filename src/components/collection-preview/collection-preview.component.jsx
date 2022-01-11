import React from 'react'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => {

  return (
    <div>
      <h1>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items.map(({ id, name }) => {
            return <div key={id}>{name}</div>
          })
        }
      </div>
    </div>
  )
}

export default CollectionPreview