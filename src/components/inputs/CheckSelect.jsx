import styled from "@emotion/styled";
import { Select, Checkbox } from "antd";
import { useState } from "react";
import "./checkselect.css";

const StyledCheckSelect = styled(Select)`
  width: 280px;
  border-radius: 8px;
  border: 1px solid var(--pink, #f48fb1);
  background: var(--white, #fff);
`;

function CheckSelect({ options }) {
  const [selectedOptions, setSelectedOptions] = useState(["john"]);
  const [dirty, setDirty] = useState(false);

  const handleChange = (value) => {
    setSelectedOptions(value);
    setDirty(true);
  };

  return (
    <StyledCheckSelect
      placeholder="abcdeg"
      defaultValue="john"
      mode="multiple"
      onChange={handleChange}
      onMouseDown={(e) => {
        setDirty(false);
        e.stopPropagation();
      }}
      options={[
        {
          value: "john",
          label: (
            <Checkbox
              onClick={(e) => {
                if (dirty) {
                  e.stopPropagation();
                }
                setDirty(false);
              }}
              checked={selectedOptions.includes("john")}
            >
              John
            </Checkbox>
          ),
        },
        {
          value: "Juan",
          label: (
            <Checkbox
              onClick={(e) => {
                if (dirty) {
                  e.stopPropagation();
                }
                setDirty(false);
              }}
              checked={selectedOptions.includes("Juan")}
            >
              Juan
            </Checkbox>
          ),
        },
      ]}
    />
  );
}

export default CheckSelect;
