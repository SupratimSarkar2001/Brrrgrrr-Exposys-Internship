import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./additionals.css";
function Addiionals() {
  const [total, setTotal] = useState(0);
  const [Add, setAdd] = useState(false);
  const [Add1, setAdd1] = useState(false);
  const [Add2, setAdd2] = useState(false);
  const [Add3, setAdd3] = useState(false);
  const [Add4, setAdd4] = useState(false);

  const addToBasket = () => {
    setAdd(true);
    setTotal(total + 20);
  };
  const addToBasket1 = () => {
    setAdd1(true);
    setTotal(total + 15);
  };
  const addToBasket2 = () => {
    setAdd2(true);
    setTotal(total + 15);
  };
  const addToBasket3 = () => {
    setAdd3(true);
    setTotal(total + 10);
  };
  const addToBasket4 = () => {
    setAdd4(true);
    setTotal(total + 30);
  };
  return (
    <>
      <div className="additionals">
        <div className="left__add">
          <img
            src="https://media.istockphoto.com/vectors/cheesburger-and-chips-vector-id1328209142?b=1&k=20&m=1328209142&s=612x612&w=0&h=-A8tSLYcI92HoaohJg06JvyzJoEG7iCUiYxCChcpY3s="
            alt=""
            className="add__image"
          />
        </div>
        <div className="right__add">
          <div className="add_items">
            <div className="item">
              <img
                src="http://www.webbjames.com/wp-content/uploads/Cipolla-disidratata-3-1.jpg"
                alt=""
                className="item__image"
              />
              <div className="add_div">
                <h4>Onion</h4>
                {Add && (
                  <div className="addclass">
                    <CheckCircleIcon />
                  </div>
                )}
              </div>

              <button onClick={addToBasket}>
                <span>₹</span>
                20
              </button>
            </div>
            <div className="item">
              <img
                src="https://yimages360.s3.amazonaws.com/products/2019/08/5d5f9fe478a21/1x.jpg"
                alt=""
                className="item__image"
              />
              <div className="add_div">
                <h4>Patty</h4>
                {Add4 && (
                  <div className="addclass">
                    <CheckCircleIcon />
                  </div>
                )}
              </div>
              <button onClick={addToBasket4}>
                <span>₹</span>
                30
              </button>
            </div>
            <div className="item">
              <img
                src="https://www.kindpng.com/picc/m/338-3384489_import-cheddar-gruyre-cheese-hd-png-download.png"
                alt=""
                className="item__image"
              />

              <div className="add_div">
                <h4>Cheese</h4>
                {Add3 && (
                  <div className="addclass">
                    <CheckCircleIcon />
                  </div>
                )}
              </div>
              <button onClick={addToBasket3}>
                <span>₹</span>
                10
              </button>
            </div>
            <div className="item">
              <img
                src="https://www.seekpng.com/png/detail/94-947636_tomato-slice-png.png"
                alt=""
                className="item__image"
              />

              <div className="add_div">
                <h4>Tomatoes</h4>
                {Add2 && (
                  <div className="addclass">
                    <CheckCircleIcon />
                  </div>
                )}
              </div>
              <button onClick={addToBasket2}>
                <span>₹</span>
                15
              </button>
            </div>
            <div className="item">
              <img
                src="https://cdn.imgbin.com/9/21/5/imgbin-lettuce-a884LbqQDbaV2MzVmCA0BeTj8.jpg"
                alt=""
                className="item__image"
              />

              <div className="add_div">
                <h4>Lettuce</h4>
                {Add1 && (
                  <div className="addclass">
                    <CheckCircleIcon />
                  </div>
                )}
              </div>
              <button onClick={addToBasket1}>
                <span>₹</span>
                15
              </button>
            </div>
          </div>
        </div>
      </div>
      {total > 0 && (
        <div className="total">
          <div className="subtotal">
            <h3>Here is Your Burger</h3>
            <h5>
              <span>₹.</span> {total}
            </h5>
            <button
              onClick={() =>
                window.alert(
                  "Thank You. Your Order will be Devliverd in 10 Min😋"
                )
              }
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Addiionals;
