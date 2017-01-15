import React from "react";
export default class BillHeader extends React.Component {
  render () {
    return (
      <div>
        <marquee className="bill-header-container">
          <div className="short-title">{this.props.shortTitle}</div>
          <div className="bill-number">{this.props.billNumber}</div>
          <div className="title">{this.props.titile}</div>
          <div className="sponsor">{this.props.sponsor}</div>
          <div className="date">{this.props.date}</div>
        </marquee>
        <img href="../images/sad-scary-sock-princess.jpg" />
      </div>
    );
  }
};
