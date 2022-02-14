import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function ProductList() {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/jsonData`);
      const newData = await response.json();
      setFetchData(newData);
    };

    fetchData();
  });

  const Main = styled.div`
    display: "flex";
    flex-direction: "column"
  `;

  return (
    <>
      {fetchData.map((item) => {
        return (
          <Main>
            <div key={item.id}>
              <img style={{ width: "100px" }} src={item.image} alt="x" />
              <div>{item.title}</div>
              <div>{item.cost}</div>
              <div>{item.catagory}</div>
            </div>
          </Main>
        );
      })}
    </>
  );
}

