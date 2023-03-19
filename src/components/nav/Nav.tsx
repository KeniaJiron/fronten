import { useState, useEffect } from "react";

export const Nav = () => {
  const [menu, setMenu] = useState<any[]>([]);

  const API_URL = "http://localhost:3000";
  const ENDPOINT = "menu";


  const getMenu = async () => {
    const response = await fetch(`${API_URL}/${ENDPOINT}`);
    const data = await response.json();
    setMenu(data);
  };

  useEffect(() => {
    getMenu();
  }, []);

  return (
    <div>
      <h1>Nav</h1>
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            <a>{item.name}</a>
          </li>
        ))}
    
      </ul>
    </div>
  );
};
