import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

const Section = (props) => {
  const [open, setOpen] = useState(false);
  const { title, content, day, color} = props;
  return (
    <div
      style={{ padding: "15px", width: "100%", backgroundColor: `${color}` }}
    >
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-content"
        aria-expanded={open}
      >
        Day {day} - {title}
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-content">
          <h2>{title}</h2>
          <div>
            <div >
              {content}
            </div>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Section;
