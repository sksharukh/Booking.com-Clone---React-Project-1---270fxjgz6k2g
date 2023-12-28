import "./propertyList.css"

const PropertyList = () => {
  return (
    <div className='pList'>
    <div className="pListItem">
        <img src="https://hips.hearstapps.com/hmg-prod/images/saint-james-paris-worlds-most-beautiful-hotels-veranda-1665421945.jpeg?crop=0.668xw:1.00xh;0.303xw,0&resize=640:*" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Hotels</h1>
            <h2>1222 available</h2>
        </div>
    </div>
    <div className="pListItem">
        <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/367483881.jpg?k=07e84676c858d3d90e256d59127e48b2a600c61e1a794bb5cdd3c979e2d39e90&o=" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Apartments</h1>
            <h2>102 available</h2>
        </div>
    </div>
    <div className="pListItem">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/f5/0d/24/cassia-resorts-solan.jpg?w=700&h=-1&s=1" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Resorts</h1>
            <h2>8 available</h2>
        </div>
    </div>
    <div className="pListItem">
        <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Cover-Villas-In-Las-Vegasepb0310.jpg" alt="" className="pListImg" />
        <div className="pListTitles">
            <h1>Villas</h1>
            <h2>Unavailable for your dates</h2>
        </div>
    </div>
      
    </div>
  )
}

export default PropertyList
