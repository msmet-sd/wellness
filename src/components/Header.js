import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>
        The Innovation Tower Wellness Program
        </h1>
<p>
Creativity and innovation comes from our connection to our true selves. While the pressures of academia can serve as a crucible toward discovering the unknown that is within you, personal growth and deeper connection to self requires involves an integration of mind and body. This is achieved by becoming more aware of how our thoughts influence our feelings, emotions, and the somatic experience in the body (tension, breath, etc). By first becoming aware of and then releasing old patterns of behaviour, we rediscover the intuition and insights that are buried underneath.
</p>
<p>
Join us on Wednesdays from 12:30 - 1:30 and Fridays from 5:30 - 6:30 in V020 for meditation, mindfulness, and movement workshops led by local practitioners. The workshops are open to all students and staff in Innovation Tower.
          <br/>
          <br />
          Click on events in the calendar to see details of events. 
        </p>
      </div>
    </div>
    {/* <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('topics')
            }}
          >
            Covered Topics
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
      </ul>
    </nav> */}
    <br/>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
