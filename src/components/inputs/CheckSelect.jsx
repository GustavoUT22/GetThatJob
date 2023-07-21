// import styled from "@emotion/styled";
// import { Select, Checkbox } from "antd";
// import { useState } from "react";
// import "./checkselect.css";

// const StyledCheckSelect = styled(Select)`
//   width: 280px;
//   border-radius: 8px;
//   border: 1px solid var(--pink, #f48fb1);
//   background: var(--white, #fff);
// `;

// function CheckSelect({ options }) {
//   const [selectedOptions, setSelectedOptions] = useState(["john"]);
//   const [dirty, setDirty] = useState(false);

//   const handleChange = (value) => {
//     setSelectedOptions(value);
//     setDirty(true);
//   };

//   return (
//     <StyledCheckSelect
//       placeholder="abcdeg"
//       // defaultValue="john"
//       mode="multiple"
//       onChange={handleChange}
//       onMouseDown={(e) => {
//         setDirty(false);
//         e.stopPropagation();
//       }}
//       options={[
//         {
//           value: "john",
//           label: (
//             <Checkbox
//               onClick={(e) => {
//                 if (dirty) {
//                   e.stopPropagation();
//                 }
//                 setDirty(false);
//               }}
//               checked={selectedOptions.includes("john")}
//             >
//               John
//             </Checkbox>
//           ),
//         },
//         {
//           value: "Juan",
//           label: (
//             <Checkbox
//               onClick={(e) => {
//                 if (dirty) {
//                   e.stopPropagation();
//                 }
//                 setDirty(false);
//               }}
//               checked={selectedOptions.includes("Juan")}
//             >
//               Juan
//             </Checkbox>
//           ),
//         },
//       ]}
//     />
//   );
// }

// export default CheckSelect;

// import styled from "@emotion/styled";
// import { Select, Checkbox } from "antd";
// import { useState } from "react";
// import "./checkselect.css";

// const StyledCheckSelect = styled(Select)`
//   width: 280px;
//   border-radius: 8px;
//   border: 1px solid var(--pink, #f48fb1);
//   background: var(--white, #fff);
// `;

// function CheckSelect() {
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [dirty, setDirty] = useState(false);

//   const handleChange = (value) => {
//     setSelectedOptions(value);
//     setDirty(true);
//   };

//   const options = [
//     { value: "manufacturing", label: "Manufacturing" },
//     { value: "legal", label: "Legal" },
//     { value: "education", label: "Education" },
//     { value: "government", label: "Government" },
//     { value: "sales", label: "Sales" },
//   ];

//   return (
//     <StyledCheckSelect
//       placeholder="Select options"
//       mode="multiple"
//       onChange={handleChange}
//       onMouseDown={(e) => {
//         setDirty(false);
//         e.stopPropagation();
//       }}
//       options={options.map((option) => ({
//         value: option.value,
//         label: (
//           <Checkbox
//             onClick={(e) => {
//               if (dirty) {
//                 e.stopPropagation();
//               }
//               setDirty(false);
//             }}
//             checked={selectedOptions.includes(option.value)}
//           >
//             {option.label}
//           </Checkbox>
//         ),
//       }))}
//     />
//   );
// }

// export default CheckSelect;

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

function CheckSelect({ type, placeholder, options, selectedOptions=[], onChange }) {
  const [dirty, setDirty] = useState(false);

  const handleChange = (value) => {
    onChange(type, value)
    setDirty(true);
  };

  return (
    <StyledCheckSelect
      placeholder={placeholder}
      mode="multiple"
      onChange={handleChange}
      onMouseDown={(e) => {
        setDirty(false);
        e.stopPropagation();
      }}
      options={options.map((option) => ({
        value: option.value,
        label: (
          <Checkbox
            onClick={(e) => {
              if (dirty) {
                e.stopPropagation();
              }
              setDirty(false);
            }}
            checked={selectedOptions.includes(option.value)}
          >
            {option.label}
          </Checkbox>
        ),
      }))}
    />
  );
}

export default CheckSelect;
