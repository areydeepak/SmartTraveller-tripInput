import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { setTrip } from "../redux/actions";

const Home = () => {
  // const { trip } = useSelector((state) => state.tripReducer);
  // const dispatch = useDispatch();
  const [currentTrip, setCurrentTrip] = useState([]);
  const [day, setDay] = useState(1);
  const [date, setDate] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleInput = (e) => {
    setCurrentTrip(JSON.parse(e.target.value));
    // console.log(currentTrip);
  };

  const pushToDB = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        day: day,
        date: date,
        location: [...currentTrip],
      }),
    };

    await fetch(
      `https://ap-south-1.aws.data.mongodb-api.com/app/smarttraveller-zapex/endpoint/addTrip?mob=${phoneNo}`,
      requestOptions
    )
      .then((response) => {
        response.json();
        console.log("Response:", response.data);
      })
      .then((data) => {
        console.log("Data", data);
        document.getElementById("tripInput").value = "";
        setCurrentTrip([]);
        document.getElementById("dateInput");
        setDate("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteFromDB = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        day: day,
        date: date,
      }),
    };

    await fetch(
      `https://ap-south-1.aws.data.mongodb-api.com/app/smarttraveller-zapex/endpoint/deleteTrip?mob=${phoneNo}`,
      requestOptions
    )
      .then((response) => {
        response.json();
        console.log("Response:", response.data);
      })
      .then((data) => {
        console.log("Data", data);
        document.getElementById("dateInput");
        setDate("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container" style={{}}>
      <h1 className="display-4 d-flex justify-content-center">
        User Trip Data
      </h1>
      {/* <form className="needs-validation" noValidate> */}
      <div id="form" className="d-flex" style={{ flexDirection: "column" }}>
        <div
          style={{ width: "70vw" }}
          className="d-flex justify-content-between"
          id="header"
        >
          <div style={{ margin: 25, marginTop: 5 }} class="mb-3">
            <label for="phoneNo" class="form-label">
              Phone Number
            </label>
            <input
              required
              type="tel"
              class="form-control"
              id="phoneInput"
              placeholder="Phone Number"
              onChange={(e) => {
                setPhoneNo(e.target.value);
              }}
            />
          </div>
          <div style={{ margin: 25, marginTop: 5 }} class="mb-3">
            <label for="date" class="form-label">
              Date
            </label>
            <input
              required
              type="text"
              class="form-control"
              id="dateInput"
              placeholder="DD/MM/YYYY"
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
          </div>
          <div style={{ margin: 25, marginTop: 5 }} class="mb-3">
            <label for="day" class="form-label">
              Day
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setDay(Number(e.target.value));
              }}
            >
              <option value={1}>Day 1</option>
              <option value={2}>Day 2</option>
              <option value={3}>Day 3</option>
              <option value={4}>Day 4</option>
              <option value={5}>Day 5</option>
              <option value={6}>Day 6</option>
              <option value={7}>Day 7</option>
              <option value={8}>Day 8</option>
              <option value={9}>Day 9</option>
              <option value={10}>Day 10</option>
            </select>
          </div>
        </div>
        <div style={{ flexDirection: "row", marginLeft: 10 }} className="row">
          <div class="mb-3 col-6 ">
            <label for="exampleFormControlTextarea1" class="form-label">
              Trip Details
            </label>
            <textarea
              class="form-control"
              id="tripInput"
              rows="14"
              onChange={(e) => {
                handleInput(e);
              }}
            ></textarea>
          </div>
          <div className="col-6">
            <label for="exampleFormControlTextarea1" class="form-label">
              Output
            </label>
            <div
              style={{ padding: 10, overflowY: "scroll", height: 350 }}
              className="border border-1 rounded border-secondary"
            >
              {currentTrip.map((ct) => {
                return (
                  <div>
                    <div>
                      <span>Tag: </span>
                      <span className="text-secondary">{ct.l1tag}</span>
                    </div>
                    <div>
                      <div>Image: </div>
                      <img
                        src={ct.image}
                        className="text-secondary"
                        style={{ width: "50%" }}
                        alt="not Load"
                      />
                    </div>
                    <div>
                      <span>Activity: </span>
                      <span className="text-secondary">{ct.activity}</span>
                    </div>
                    <div>
                      <span>Description: </span>
                      <span className="text-secondary">{ct.description}</span>
                    </div>
                    <div>
                      <span>Time: </span>
                      <span className="text-secondary">{ct.time}</span>
                    </div>
                    <div>
                      <span>Location: </span>
                      <span className="text-secondary">{ct.location}</span>
                    </div>
                    <div>
                      <span>Price: </span>
                      <span className="text-secondary">{ct.price}</span>
                    </div>
                    <div>
                      <span>Maplink: </span>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={ct.maplink}
                        className="text-secondary"
                      >
                        {ct.maplink}
                      </a>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          {/* <button
            type="button"
            class={
              "location" in pushArray[day - 1]
                ? "btn btn-primary"
                : "btn btn-success"
            }
            onClick={handleAddTrip}
          >
            Add Trip Day
          </button> */}
          <button
            type="button"
            class="btn btn-danger ms-5"
            onClick={deleteFromDB}
          >
            Delete from DB
          </button>
          <button type="button" class="btn btn-success ms-5" onClick={pushToDB}>
            Push Into DB
          </button>
        </div>
      </div>
      {/* </form> */}
    </div>
  );
};

export default Home;
