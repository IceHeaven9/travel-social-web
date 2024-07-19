import { useNavigate } from "react-router-dom";
import { TabButton } from "./tab-button.jsx";

import "./tab-list.css";
import { useEffect, useState } from "react";

export function TabList({ selected, options, onChange }) {
  const [active, setActive] = useState(selected ?? options[0].key);
  const navigate = useNavigate();

  useEffect(() => {
    if (selected != active) {
      setActive(selected);
    }
  }, [selected]);

  function onTabSelected(key) {
    if (key != active) {
      setActive(key);
      onChange?.(key);
      navigate("#" + key);
    }
  }

  return (
    <>
      <header className="tab-list">
        {options.map(({ label, key }) => {
          return (
            <TabButton
              active={active == key}
              key={key}
              label={label}
              onClick={() => onTabSelected(key)}
            />
          );
        })}
      </header>
      <section>{options.find(({ key }) => key == active)?.content}</section>
    </>
  );
}
