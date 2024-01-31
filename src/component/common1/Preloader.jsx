import React, { useState, useEffect } from 'react';
import logo1 from '../../assets/image/webp/logo1.webp';

function Preloader() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(false);
            document.body.classList.remove("overflow_hidden");
        }, 3000);

        // Cleanup the timeout on component unmount
        return () => clearTimeout(timeoutId);
    }, []); // Empty dependency array means this effect runs once after initial render

    return (
        <div>
            {isVisible && (
                <div id="none" className="min-vh-100 w-100 bg-black position-fixed top-0 start-0 z_index">
                    <div className="d-flex justify-content-center align-items-center min-vh-100">
                        <div>
                            <img src={logo1} alt="" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Preloader;