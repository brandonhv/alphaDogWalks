import pawsPrint from './photos/pawsPrint.png'
import dogWalker from './photos/dogWalker.png'


const Content = () => {


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
                    <div className='form'></div>
                </div>



                <hr className="section-divider" />

            </div>
            
        ) 
};


export default Content;