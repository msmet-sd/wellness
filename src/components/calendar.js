import PropTypes from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
// const Calendar = props => (
// <calendar id="calendar">
//   <br/>
//   <div>
//   <iframe frameBorder="0" src="https://airtable.com/embed/shrtH0afnoBqIlrIM?backgroundColor=orangeLight&layout=card&viewControls=on"></iframe>
//   </div>
//   </calendar>
// )
// Calendar.propTypes = {
//   onOpenArticle: PropTypes.func,
//   timeout: PropTypes.bool,
// }
// export default Calendar
class Calendar extends React.Component {
  render() {
      return (
      <iframe src="https://airtable.com/embed/shrtH0afnoBqIlrIM?backgroundColor=orangeLight&layout=card" frameborder="0" onmousewheel="" width="100%" height="533" 
                     />
      )
  }
}
Calendar.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}
export default Calendar