import React from 'react'

function Todos() {

const API_BASE_URL = "http://localhost:8080/";

// Fetch all TODO items
fetch(API_BASE_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Parse JSON response
  })
  .then((data) => {
    console.log("Fetched TODO items:", data); // Handle the data
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

  

  return (
    <div>   {response.id} </div>
  )
}

export default Todos