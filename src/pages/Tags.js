import React from 'react'

const Tags = ({items, isTagsLoading}) => {
  return (
    <div>Tags: {items}{isTagsLoading}</div>

  )
}

export default Tags