import React from "react";

export default function ErrorList(props) {
  const { errors } = props;
  return (
    <div className="card errors">
      <div className="card-header text-white bg-danger">Errors</div>
      <ul className="list-group">
        {errors.map((error, i) => {
          return (
            <li key={i} className="list-group-item text-danger">
              {error.stack}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
