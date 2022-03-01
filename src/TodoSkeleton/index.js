import React from 'react'
import ContentLoader from 'react-content-loader'

const TodoSkeleton = props => {
  return (
    <ContentLoader
    width={700}
    height={300}
    viewBox="0 0 700 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="114" y="52" rx="6" ry="6" width="483" height="15" />
    <circle cx="77" cy="60" r="15" />
    <rect x="116" y="105" rx="6" ry="6" width="420" height="15" />
    <circle cx="78" cy="113" r="15" />
    <rect x="115" y="158" rx="6" ry="6" width="483" height="15" />
    <circle cx="78" cy="166" r="15" />
    <rect x="117" y="211" rx="6" ry="6" width="444" height="15" />
    <circle cx="79" cy="219" r="15" />
  </ContentLoader>
  )
}

export {TodoSkeleton};