import React, { useState } from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview.component'

import SHOP_DATA from './shop.constants'

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA)

  return (
    <div>
      {
        collections.map(({ id, ...restProps }) => (
          <CollectionPreview key={id} {...restProps} />
        ))
      }
    </div>
  )
}

export default ShopPage