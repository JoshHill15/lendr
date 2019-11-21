import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import "../../App.css";
import { gsap } from "gsap";
import Header from "../Header.js";

const AddItems2 = () => {
  const [error] = useState();
  const [item, setItem] = useState({
    itemname: "",
    itemdescription: "",
    lentto: "",
    lentdate: "",
    lendnotes: ""
  });
  const [newItem, setNewItem] = useState([]);

  const addNewItem = item => {
    const newItems = {
      id: Date.now(),
      name: item.itemname,
      description: item.itemdescription,
      lentto: item.lentto,
      lentdate: item.lentdate,
      lendnote: item.lendnotes
    };
    setNewItem([...newItem, newItems]);
  };
  // ========== AXIOS ========== //
  const handleChange = e => {
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    addNewItem(item);
    setItem({
      itemname: "",
      itemdescription: "",
      lentto: "",
      lentdate: "",
      lendnotes: ""
    });
  };
  // ========== GREENSOCK ========== //
  useEffect(() => {
    gsap.to(FormRef, {
      duration: 3,
      scale: 1.2,
      ease: "bounce",
      ease: "back"
    });
  }, []);

  function bounce() {
    gsap.to(addItem, 1, {
      duration: 2.5,
      scale: 1.2,
      ease: "bounce.out"
    });
  }

  function scaleDown() {
    gsap.to(addItem, 1, {
      scale: 1
    });
  }

  function bounce2() {
    gsap.to(reset, 1, {
      duration: 2.5,
      scale: 1.2,
      ease: "bounce.out"
    });
  }

  function scaleDown2() {
    gsap.to(reset, 1, {
      scale: 1
    });
  }
  let reset = useRef(null);
  let addItem = useRef(null);
  let FormRef = useRef(null);

  // ========== STYLED COMPONENTS ========== //

  const Button = styled.button`
    border: none;
    border-radius: 4px;
    margin: 2%;
    padding: 10px 25px;
    box-shadow: 10px 10px 28px -12px rgba(0, 0, 0, 0.75);
  `;

  return (
    <>
      <Header />
      <div className="splash">
        {/* <LargeContainer> */}
        <div className="sign-up-container" ref={e => (FormRef = e)}>
          <form onSubmit={handleSubmit}>
            <h2>Add an Item</h2>
            <div className="login">
              {error && <div className="error">{error}</div>}
              <input
                type="text"
                name="itemname"
                placeholder="Item Name..."
                value={item.itemname}
                onChange={handleChange}
              />
              <input
                type="text-box"
                name="itemdescription"
                placeholder="Item Description..."
                value={item.itemdescription}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lentto"
                placeholder="Who you are lending to..."
                value={item.lentto}
                onChange={handleChange}
              />
              <input
                type="date"
                name="lentdate"
                value={item.lentdate}
                onChange={handleChange}
              />
              <input
                type="textbox"
                name="lendnotes"
                placeholder="Any Notes..."
                value={item.lendnotes}
                onChange={handleChange}
              />
              <Button className="button" type="submit">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddItems2;
