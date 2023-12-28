import "../featured/featured.css"

const Featured = () => {
  return (
    
    <div className="featured">
      <div className="featuredItem">
        <img src="https://lp-cms-production.imgix.net/2019-06/iStock_000059664056XXXLarge.jpg?auto=format&fit=crop&ar=1:1&q=75&w=1200" alt="" className="featuredImg" />
        <div className="featuredTitle">
            <h2>New Delhi</h2>
            {/* <img src="https://cdn.pixabay.com/photo/2020/07/27/17/40/flag-5443011_640.jpg" alt="" /> */}
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://www.businessinsider.in/photo/51525598.cms" alt="" className="featuredImg" />
        <div className="featuredTitle">
            <h2>Bengaluru</h2>
            {/* <img src="https://cdn.pixabay.com/photo/2020/07/27/17/40/flag-5443011_640.jpg" alt="" /> */}
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://www.indiabullsrealestate.com/blog/wp-content/uploads/2019/04/8-reasons-image.jpg" alt="" className="featuredImg" />
        <div className="featuredTitle">
            <h2>Mumbai</h2>
            {/* <img src="https://cdn.pixabay.com/photo/2020/07/27/17/40/flag-5443011_640.jpg" alt="" /> */}
        </div>
      </div>
    </div>
  )
}

export default Featured
