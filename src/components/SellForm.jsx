import { useState } from "react";

const SellForm = ({ setProductInfo }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  const sellSubmitHandler = (event) => {
    event.preventDefault();

    setProductInfo({
      title,
      price,
      description,
      location,
      willDeliver,
    });

    setTitle("");
    setPrice("");
    setDescription("");
    setLocation("");
    setWillDeliver(false);
  };

  return (
    <>
      <h1>Sell</h1>
      <form onSubmit={sellSubmitHandler}>
        <label>
          Title:{" "}
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Price:{" "}
          <input
            type="text"
            name="price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Description:{" "}
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Location:{" "}
          <input
            type="text"
            name="location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <br />
        <label>
          Delivery:{" "}
          <select
            name="willDeliver"
            onChange={(event) => setWillDeliver(event.target.value)}
          >
            <option value={false}>No</option>
            <option value={true}>Yes</option>
          </select>
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default SellForm;
