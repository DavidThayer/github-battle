var React = require('react');
var Popular = require('./Popular');
//component definition
class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Popular />
      </div>
    )
  }
}

module.exports = App;
