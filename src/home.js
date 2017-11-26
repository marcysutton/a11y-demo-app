import React, { Component } from 'react';

class Home extends Component {
  showModal() {
    this.props.onUpdate(true)
  }
  render() {
    return (
      <div className="homepage">
        <h2>Home</h2>
        <p>Skate ipsum dolor sit amet, feeble late Christ air salad grind. Bullet 66 Tracker slam Christ air kickflip. Gnar bucket bail transfer ledge Jerry Hsu. Face plant hip Claus Grabke soul skate Japan air. Baseplate airwalk hang-up hang ten. Bruised heel hanger Kien Lieu gnarly tail. Lien air downhill grind 720 Wes Humpston. 360 bearings slob air Shorty's locals. Fakie out bruised heel roll-in crailtap. Bail poseur ollie north pressure flip. Hang ten blunt frontside varial.</p>
        <div
          className="signup-btn"
          onClick={this.showModal.bind(this)}>
          Sign Up
        </div>
      </div>
    )
  }
}
export default Home;
