import React from "react";

export default function Card() {
  return (
    <div>
      <div>
        <div
          className="card mt-3 "
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img className="card-img-top" src="https://source.unsplash.com/random/300x300/?biryani" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"> Some Text</p>
            <div className="container w-100">
              <select className="m-2 h-2  bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option value="i+1" key={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-2  bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="fs-5 d-inline"> Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
