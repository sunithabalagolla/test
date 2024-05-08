import React from 'react'
import './Home.css';
import { GrLocation } from 'react-icons/gr';

const Home = () => {
    return (
        <section className='home'>
            <div className='overlay'>


            </div>
            {/* <video src=''></video> */}
            <div className='videoReplace' style={{ backgroundColor: 'skyblue', height: '500px' }}>


            </div>
            <div className="homeContent container">
                <div className="textDiv" style={{ textAlign: 'center' }}>
                    <span className="smallText">
                        Our Packages
                    </span>
                    <h1 className="homeTitle">
                        Search Your Holiday
                    </h1>
                </div>

                <div className="carDiv grid">
                    <div className="destinationInput">
                       <label htmlFor='city'>
                              Search Your Destination:
                       </label>
                       <div className="input flex">
                             <input type='text' placeholder='Enter name here....'/>
                             
                            
                             <GrLocation style={{color:'black'}}
                             className='icons'></GrLocation>
                       </div>
                    </div>



                    <div className="dateInput">
                       <label htmlFor='date'>
                              Select Your date:
                       </label>
                       <div className="input flex">
                             <input type='date'>
                             
                             </input>
                           
                       </div>
                    </div>


                    <div className="destinationInput">
                       <label htmlFor='city'>
                              Search Your Destination:
                       </label>
                       <div className="input flex">
                             <input type='text' placeholder='Enter name here....'>
                             
                             </input>
                             <GrLocation></GrLocation>
                       </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home
