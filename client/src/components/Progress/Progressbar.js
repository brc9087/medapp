import React from 'react'
import './progress.css'

function Progressbar(props) {
 

    return (
        <div className='progbar'>
            <div id="stepProgressBar">
                <div className='step'>
                    <p className='step-text'>Info</p>
                    <div className='bullet'>1</div>
                </div>
                <div className='step'>
                    <p className='step-text'>Body Parts</p>
                    <div className='bullet'>2</div>
                </div>
                <div className='step'>
                    <p className='step-text'>Results</p>
                    <div className='bullet'>3</div>
                </div>

             
               

            </div>

        </div>
    );
}

export default Progressbar;