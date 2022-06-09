import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTrip } from "../redux/actions";

const Home = () => {
  const { trip } = useSelector((state) => state.tripReducer);
  const dispatch = useDispatch();

  return (
    <div className="container" style={{}}>
      <h1 className="display-4 d-flex justify-content-center m-4">
        User Trip Data
      </h1>
      <div id="form" className="d-flex" style={{ flexDirection: "column" }}>
        <div
          style={{ width: "70vw" }}
          className="d-flex justify-content-between"
          id="header"
        >
          <div style={{ margin: 25 }} class="mb-3">
            <label for="phoneNo" class="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Phone Number"
            />
          </div>
          <div style={{ margin: 25 }} class="mb-3">
            <label for="date" class="form-label">
              Date
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="DD/MM/YYYY"
              onChange={(e) => {
                dispatch(setTrip({ ...trip, date: e.target.value }));
                console.log(trip);
              }}
            />
          </div>
          <div style={{ margin: 25 }} class="mb-3">
            <label for="day" class="form-label">
              Day
            </label>
            <select class="form-select" aria-label="Default select example">
              <option value="1">Day 1</option>
              <option value="2">Day 2</option>
              <option value="3">Day 3</option>
              <option value="4">Day 4</option>
              <option value="5">Day 5</option>
              <option value="6">Day 6</option>
              <option value="7">Day 7</option>
              <option value="8">Day 8</option>
              <option value="9">Day 9</option>
              <option value="10">Day 10</option>
            </select>
          </div>
        </div>
        <div style={{ flexDirection: "row", marginLeft: 10 }} className="row">
          <div class="mb-3 col-7 ">
            <label for="exampleFormControlTextarea1" class="form-label">
              Trip Details
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="14"
            ></textarea>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
