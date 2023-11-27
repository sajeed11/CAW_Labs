import { useState } from "react";

const DisplayTab = (props) => {
  // const tab_const = ["hello", "world", "from", "react"];
  // const [tab, setTab] = useState(["hello", "world", "from", "react"]);

  // const handleClick = (index) => {
  //   const newTab = tab.filter((item, i) => i !== index);
  //   setTab(newTab);
  // };

  const [tabEdit, setTabEdit] = useState(props.tabEdit);

  const handleClickEdit = (index) => {
    const newTabEdit = tabEdit.filter((item, i) => i !== index);
    setTabEdit(newTabEdit);
  };

  return (
    <div>
      {/* <h2>DisplayTab</h2>
      <ul>
        {tab.map((item, index) => (
          <li key={index} onClick={() => handleClick(index)}>{item}</li>
        ))}
      </ul>
      <br />
      <h2>Edited Displaytab</h2>
      <ul>
        {tab_const.map((item, index) => (
          <li key={index}>Element {index} is: {item}</li>
        ))}
      </ul>
      <br /> */}
      <h2>DisplayTab Props</h2>
      <ul>
        {tabEdit.map((item, index) => (
          <li key={index} onClick={() => handleClickEdit(index)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTab