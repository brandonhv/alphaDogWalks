import pawsPrint from './photos/pawsPrint.png'
import dogWalker from './photos/dogWalker.png'
import { useState } from 'react';


const Content = () => {

    const [formData, setFormData] = useState({ name: '' });


        return (
            <div className="content-container">

                <div className="left-contentainer">
                    
                    <h2 className="content-title">Schedule Dog Walk Session</h2>
                    <h3 className="sub-heading">We will send you a confirmation to your email</h3>

                    <div className="dogWalkAndPaws">
                        <img src={dogWalker} className="dog-walker" alt="Dog Walker" />
                        <img src={pawsPrint} className="paws-print" alt="Paws Print" />
                    </div>"
                    
                </div>
                

                <div className="right-container">
                    <div className='form'>
                        
                        <div className="form-inputs">
                            <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Name of My Dog"
                            className="form-name"
                            />

                             <input
                            type="text"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            placeholder="Address"
                            />


                            <input
                                type="datetime-local"
                                name="dateTime"
                                value={formData.dateTime}
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                required
                                className="form-datetime"
                            />

                        </div>
                    </div>
                </div>

                <hr className="section-divider" />

            </div>
            
        ) 
};


export default Content;