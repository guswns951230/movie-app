import React from 'react';

// function Food(props) {
//   console.log(props);
//   return <h1>I like {props.fav}</h1>;
// }

function Food({ name, picture }) {
  return (
    <div>
      <h2>I lIke {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png'
  },
  {
    id: 2,
    name: 'samgyeopsal',
    image: 'https://ppss.kr/wp-content/uploads/2017/03/1-71-540x401.jpg'
  },
  {
    id: 3,
    name: 'bibimbap',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800'
  },
  {
    id: 4,
    name: 'doncasu',
    image: 'https://m.yum-yumfood.com/web/product/big/201607/29_shop1_382074.jpg'
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div >
  );
}

export default App;
