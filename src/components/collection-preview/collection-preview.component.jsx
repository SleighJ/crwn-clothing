import React from 'react'

import CollectionItem from '../collection-item/collection-item.component'

import './collection-preview.styles.scss'

const CollectionPreview = ({ title, items }) => {
  const filteredItems = items.filter((item, idx) => idx < 4)
  
  return (
    <div className='collection-preview'>
      <h1>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          filteredItems.map(({ id, name, ...otherItemProps }) => {
            return <CollectionItem key={id} name={name} { ...otherItemProps } />
          })
        }
      </div>
    </div>
  )
}

export default CollectionPreview