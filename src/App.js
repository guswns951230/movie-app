import React from 'react';

// function Food(props) {
//   console.log(props);
//   return <h1>I like {props.fav}</h1>;
// }

function Food({ fav }) {
  console.log(1);
  return <h1>I lIke {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
    </div >
  );
}

export default App;
