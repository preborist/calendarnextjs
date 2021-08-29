// import { useState } from "react";

export default function Modal({ date }) {
  console.log(date);
  return (
    <>
      <button>Close Modal</button>
      <form>
        <label>
          {date}
          <input type="text" name="month" />
        </label>
        <label>
          Day
          <input type="text" name="day" />
        </label>
      </form>
    </>
  );
}
