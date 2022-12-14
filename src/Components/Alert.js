import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    const strr = word.toLowerCase();
    return strr.charAt(0).toUpperCase() + strr.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.msgtype} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.msgtype)}</strong>:{props.alert.msg}
        </div>
      )}
    </div>
  );
}
