import React from "react";
import { connect } from "react-redux";
import { getGiphyData } from "./actions";

const GiphyData = props => {
  return (
    <>
      {/* <input
        name="search"
        placeholder="Search"
        // value={search}
        className="search"
      /> */}
      <button
        onClick={() => {
          props.getGiphyData();
        }}
      >
        Get Random GIF
      </button>
      {props.error && <div>Error: {props.error}</div>}
      {props.isLoading ? (
        <div>loading data...</div>
      ) : (
        props.giphyData.images && 
        <div>
          <img
            src={props.giphyData.images.original.url}
            className="gif"
            alt="gif"
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    giphyData: state.giphyData
  };
};

export default connect(
  mapStateToProps,
  { getGiphyData }
)(GiphyData);
