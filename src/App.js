import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I lIke {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'kimchi',
    image: 'https://cdn.imweb.me/thumbnail/20200415/6b6e035658bac.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'samgyeopsal',
    image: 'https://ppss.kr/wp-content/uploads/2017/03/1-71-540x401.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'bibimbap',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800',
    rating: 4,
  },
  {
    id: 4,
    name: 'doncasu',
    image: 'https://m.yum-yumfood.com/web/product/big/201607/29_shop1_382074.jpg',
    rating: 4.8,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div >
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired, // isRequired는 필요하다는 의미 => name에는 string 자료형이 필요하다. 라는 의미
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number, // isRequired는 때에 따라 없어도 됨 => rating props는 필수가 아니지만 값이 전달될 경우 자료형이 number이여야 한다.
};

export default App;
