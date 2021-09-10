import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Wellness at Innovation Tower for students in/for: <a href="https://www.sd.polyu.edu.hk/en/study-detail/multimedia-and-entertainment-technology">MS-MET PolyU HK</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
