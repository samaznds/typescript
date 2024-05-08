import { useState } from "react";

interface Props {
name : String;
email : String;
age : number;
ismaried :Boolean;
courses : String[];
country : Country;
}

export enum Country{
    Iran = "Iran",
    Afghanstan ="Afghanstan"
}


export const Person=(props : Props)=>{
    const [name ,setName]=useState<string>("sama")

    return(<div>
        <h1>name : {props.name}</h1>
        <p>email : {props.email}</p>
        <p>Age : {props.age}</p>
        <p>maried? : {props.ismaried ? "yes" : "no"}</p>
    {props.courses.map((course : String)=>{
      return  <h1>{course}</h1>
    })}
    <h4>{props.country}</h4>
    </div>)
}