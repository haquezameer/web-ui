import React from "react";

const RenderContents = ({ contents }) => (
  <div>
    <h4>contents: </h4>
    {Object.keys(contents).map(item => (
      <h5 key={item}>
        <span>Name: {contents[item]["name"]}</span>{" "}
        <span>Type: {contents[item]["type"]}</span>
      </h5>
    ))}
  </div>
);

const InfoPopup = ({ data, visible, handleClose }) => (
  <div className={visible ? "modal" : "hidden"}>
    {data && visible ? (
      <div className="modal-wrapper">
        <div className="modal-content">
          {Object.keys(data).map(prop => (
            <div key={prop}>
              {prop === "contents" ? (
                <RenderContents contents={data["contents"]} />
              ) : (
                <h5>
                  {prop}: {data[prop]}
                </h5>
              )}
            </div>
          ))}
          <div>
            <button onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    ) : null}
  </div>
);

export default InfoPopup;
