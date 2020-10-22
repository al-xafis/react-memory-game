import React, {useEffect} from 'react';
import '../styles/Card.css';

const Card = (props) => {

  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
  }

  // const handleScore = (person) => {
  //   if (person.clicked === false) {
  //     props.setScore(props.score+1);
  //     person.clicked = true;
  //   } else {
  //     props.setScore(0);
  //     person.clicked = false;
  //   }
  // }


  const handleScore = (person) => {
    if (person.clicked === false) {
      props.setScore(props.score+1);
      person.clicked = true;
    } else {
      props.setScore(0);
      props.people.map(person => person.clicked = false);
    }
  }

  useEffect(() => {

    shuffle(props.people);
    if (props.bestScore <= props.score) {
      props.setBestScore(props.score);
    }

    if (props.score === 12) {
      alert("YOU WON")
    }

  }, [props.score])

  

  const peopleList = props.people.map(person => {

    return (
      <div className="card" onClick={() => handleScore(person)}>
        <div className="card_content">
          <div className="img_container">
            <img src={person.imgURL} alt="celebrity pic"/>
          </div>
          <p><strong>Name</strong>: {person.Name}</p>
          <p><strong>Occupation</strong>: {person.Occupation}</p>
        </div>
      </div>
    );
  })

  return (
    <div className="container">
      {peopleList}
    </div>
    
  );
};

export default Card;