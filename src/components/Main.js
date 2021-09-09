import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            This pages hosts different events that showcase various community activities happeneing around us. <a href="#work">awesome work</a>.
          </p>
          <p>
            Whether it is physical events or online events, attending to your mental activities is an important thing. Hopefully partaking in something
            of the events that we have outlined here would help you in your lives going forward. 
          </p>
          {close}
        </article>

        <article
          id="topics"
          className={`${this.props.article === 'topics' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Topics</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <p>
            Topics like what meditation can do for your mind, mood, health to different variations of it would be explored in this series. There would be multiple 
            offering in the same theme or different as the semester unfurls. 
          </p>
          <p>
            Come and attend some of our events and give it a go. 
          </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            Meditaiton and wellness coaches, practionarers would be giving these series of workshops. 
            You are in excellent hands. 
            Our team includes:  Hajnal Joy Nemeth, Renu Paryani, Jacqueline D. Faulkner, Sonia Kam Sin Jing, Danny Fang
          </p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
