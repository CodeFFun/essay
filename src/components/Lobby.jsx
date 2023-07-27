import {FaArrowCircleUp} from 'react-icons/fa'


function Lobby() {
  return (
    <div className='lobby'>
      <h1>YOUR WORK</h1>
      <div className="table">
        <div className="table-section">
           <p> Title</p>
           <span>
           <FaArrowCircleUp />
           </span>
        </div>
        <div className=" table-section">
          <p>Status</p>
          <span>
           <FaArrowCircleUp />
           </span>
        </div>
        <div className="table-section">
          <p>Progress</p>
          <span>
           <FaArrowCircleUp />
           </span>
        </div>
        <div className="  table-section">
          <p>Last Edited</p>
          <span>
           <FaArrowCircleUp />
           </span>
        </div>
      </div>
    </div>
  )
}

export default Lobby