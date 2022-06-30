import React from "react";
import PresonListRendering from "./PresonListRendering";

function NewList() {
  const persons = [
    {
      id: 1,
      name: "Ali",
      age: 21,
      skills: "React",
    },
    {
      id: 2,
      name: "usman",
      age: 22,
      skills: "angular",
    },
    {
      id: 3,
      name: "haider",
      age: 23,
      skills: "Vue",
    },
  ];
  //   const names = ["bruce", "clark", "diana"];
  //   const newNames = names.map((name) => <h2>{name}</h2>);
  //   return <div>{newNames}</div>;

  // const nameList = persons.map((person) => {
  //   return (
  //     <h1>
  //       Hello I am {person.name}. I am {person.age} years old and i know{" "}
  //       {person.skills}
  //     </h1>
  //   );
  // });

  const nameList = persons.map((person) => {
    return <PresonListRendering key={person.id} personHandler={person} />;
  });
  return <div>{nameList}</div>;
}

export default NewList;
