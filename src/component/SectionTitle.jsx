import React from "react";

function SectionTitle({ title }) {
  return (
    <>
      <div className="titleWrap py-3 mt-4">
        <h3 className="sectTitle">{title}</h3>

        <hr />
      </div>
    </>
  );
}
export default SectionTitle;
