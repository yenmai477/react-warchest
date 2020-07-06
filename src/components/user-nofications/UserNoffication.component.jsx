import React, { Component } from "react";
import { connect } from "react-redux";
import NoficationCard from "../nofication-card/NoficationCard";
import CardSkeleton from "../card-skeleton/CardSkeleton.component";
import WithSkeleton from "../with-skeleton/WithSkeleton.component";
import { selectUserNofications } from "../../redux/nofication/nofication.selector";

class UserNoffication extends Component {
  render() {
    return (
      <div className="row">
        {this.props.userNofications.map((item) => {
          return (
            <div className="col-xl-4 col-md-12 mb-4" key={item.id}>
              <NoficationCard nofication={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

const UserNoficationsSkeleton = (props) => {
  return (
    <div className="row">
      {[...Array(6).keys()].map((item) => (
        <div className="col-xl-4 col-md-12 mb-4" key={item.id}>
          <CardSkeleton />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  userNofications: selectUserNofications(state),
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithSkeleton(UserNoffication, UserNoficationsSkeleton));
