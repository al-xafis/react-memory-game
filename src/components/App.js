import React, {useState, useEffect} from 'react';
import Bar from './Bar';
import Card from './Card';
import '../styles/App.css';

const people = [
  {
    imgURL: "https://s.yimg.com/uu/api/res/1.2/aX3CH15.glwm6sBhKw2YhQ--~B/aD01MDA7dz0zMDA7c209MTthcHBpZD15dGFjaHlvbg--/http://media.zenfs.com/en-US/blogs/omgcelebnews/dcdb073e-cd9b-4129-a473-4522217adb8b_300_Jolie_051413.jpg",
    Name: "Angelina Jolie",
    Occupation: "Actress",
    clicked: false,
  },
  {
    imgURL: "https://www.beautyexchange.com.hk/data/attachment/object_pic/2016/5/9/01e520f20cecc6c654c439afa3f593b5.jpg",
    Name: "David Beckham",
    Occupation: "Football player",
    clicked: false
  },
  {
    imgURL: "https://pp.userapi.com/c837722/v837722684/486f4/vtjI9tN1gQU.jpg",
    Name: "Johnny Depp",
    Occupation: "Actor",
    clicked: false
  },
  {
    imgURL: "https://sun1-19.userapi.com/7RUuu6cdIVbraqaKNsJi1wCxf4r6FIuoH-cKdg/IAXCbQJKqMg.jpg",
    Name: "Eminem",
    Occupation: "Rapper",
    clicked: false
  },
  {
    imgURL: "https://i.pinimg.com/736x/53/c4/b3/53c4b3b451a280bda731c463c50273dc--celebrity-smiles-hug-me.jpg",
    Name: "Paul Walker",
    Occupation: "Actor",
    clicked: false
  },
  {
    imgURL: "https://sun9-67.userapi.com/c5686/u68309572/-6/x_7a15c177.jpg",
    Name: "Homer Simpson",
    Occupation: "Character",
    clicked: false
  },
  {
    imgURL: "https://image.winudf.com/v2/image/Y29tLmVkdWNhdGlvbmFsYXBwdHViZS5hbmRyb2lkLnByZXNpZGVudHNvZnVzYV9zY3JlZW5fMF8xNTIzMjM5NjU1XzA5Nw/screen-0.jpg?h=500&amp;fakeurl=1&amp;type=.jpg",
    Name: "George Bush",
    Occupation: "President of USA",
    clicked: false
  },
  {
    imgURL: "https://im0-tub-com.yandex.net/i?id=895d00ca84b3951ee497686aea1a0459&n=13",
    Name: "Gordon Ramsay",
    Occupation: "Chef",
    clicked: false
  },
  {
    imgURL: "https://i.pinimg.com/736x/b8/7a/45/b87a455bbd9800da8b976079d7969486.jpg",
    Name: "Amber Heard",
    Occupation: "Actress",
    clicked: false
  },
  {
    imgURL: "https://im0-tub-com.yandex.net/i?id=eca49b0a670ead7d302a9dba24f7b274&n=13",
    Name: "Katy Perry",
    Occupation: "Singer",
    clicked: false
  },
  {
    imgURL: "https://i.pinimg.com/736x/c6/21/1a/c6211a37a44725ab5c5589cb5e22a0a5.jpg",
    Name: "Merilyn Monroe",
    Occupation: "Symbol",
    clicked: false
  },
  {
    imgURL: "https://dozor.com.ua/content/documents/10959/1095813/image/%D0%B4%D0%B6%D0%B5%D0%BA%D1%81%D0%BE%D0%BD.jpg",
    Name: "Michael Jackson",
    Occupation: "Pop King",
    clicked: false
  },
]


const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clicked, setClicked] = useState(false);

  return (
    <div>
      <Bar score={score} bestScore={bestScore}/>
      <Card people={people} score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
    </div>
  );
};

export default App;