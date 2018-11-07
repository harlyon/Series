import React from 'react';
import ads from '../image/ads.png';

const Sidebar = () => {
    return (
        <div>
            <div class="col-md-4 col-sm-12 col-xs-12">
                  <div className="sidebar">
                   <div className="ads">
                     <img src={ads} alt="vetr" />
                   </div>
                  </div>
                </div>
        </div>
    );
};

export default Sidebar;