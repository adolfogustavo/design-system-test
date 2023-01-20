import React, { useState } from "react";
import DehazeIcon from '@mui/icons-material/Dehaze';
import "./DragAndDropList.styles.scss";

interface Item {
  id: number;
  text: string;
  checked?: boolean;
}

interface Props {
  itemsList: Array<Item>;
  withCheckbox?: boolean;
}

const DragNDropList: React.FC<Props> = ({ itemsList, withCheckbox = false }) => {
  const [items, setItems] = useState<Item[]>(itemsList);

  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    const from = Number(e.dataTransfer.getData("text/plain"));
    const newItems = [...items];
    newItems.splice(index, 0, newItems.splice(from, 1)[0]);
    setItems(newItems);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleCheckboxChange = (index: number) => {
    const newItems = [...items];
    newItems[index].checked = !newItems[index].checked;
    setItems(newItems);
  };

  return (
    <div>
      <ul className="list-container">
        {items.map((item, index) => (
          <li
            className="list-item"
            key={item.id}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={handleDragOver}
          >
            {withCheckbox && 
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                checked={item.checked}
                onChange={() => handleCheckboxChange(index)}
              />
            }
            <label>{item.text}</label>
            <DehazeIcon className="list-icon"/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragNDropList;
