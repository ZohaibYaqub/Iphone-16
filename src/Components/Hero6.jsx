import React from 'react'

const Hero6 = () => {
    return (
        <>
            <div className="chipsection">
                <div className="chiptext">
                    <img src="/Images/chip.jpg" alt="chip" />
                    <h1>A17 Pro chip.<br />
                        A monster win for gaming.</h1>
                    <h2>It’s here. The biggest redesign in the history of Apple GPUs.</h2>
                </div>
                <div className="mble">
                    <img className='mbleimg' src="/Images/mble.png" alt="mblevideo" />
                    <video autoPlay muted className='mblevideo ' src="/Videos/mblevideo.mp4"></video>
                    <h4>Honkai: Star Rail</h4>
                </div>

                <div className="chipmaterial">
                    <div className="leftchiptext">
                        <h2>A17 Pro is an entirely new class of <br /> iPhone chip that delivers our <span className='colourtext1'>best <br /> graphics performance by far.</span></h2>
                        <h2>Mobile <span className='colourtext1'>games will look and feel so<br /> immersive </span> , with incredibly detailed <br /> environments and more realistic<br /> characters. And with industry-leading<br /> speed  and  efficiency, A17 Pro takes <br />fast and runs with it.</h2>
                    </div>
                    <div className="rightchiptext">
                        <h2>New</h2>
                        <h1>Pro-class GPU</h1>
                        <h2>with 6 cores</h2>
                    </div>


                </div>
                <div className="textplay">
                    <div className="texthero5">
                        <h4>Get Deeply On A17 Pro</h4>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hero6
