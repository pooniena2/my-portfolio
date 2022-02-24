import React from 'react';
import Icon from "../components/Icon";

function Footer() {
    var d = new Date();
    var currentYear = d.getFullYear(); 
    return (
      <div className="py-5 border-5-3/2 bg-gray-100">
        <div className="flex justify-center mt-4">
          <Icon />
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-gray-600 mb-4 text-center">
            Copyright &copy; {currentYear} Anh Tuan Pham. All Rights Reserved.
          </p>
        </div>
      </div>
    );
}

export default Footer;
