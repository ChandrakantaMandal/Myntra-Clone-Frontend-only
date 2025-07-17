import React from 'react'
import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Card = () => {
    
  return (
    <div className="card border-success mb-3 flex p-10" style={{ maxWidth: "50rem"}}>
  <div className="card-header bg-transparent border-success">Header</div>
  <div className="card-body text-success">
    <h5 className="card-title">Success card title</h5>
    <p className="card-text"></p>
  </div>
</div>
  )
}

export default Card