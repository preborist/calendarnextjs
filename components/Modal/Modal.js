// import { useSelector, useDispatch } from 'react-redux';

// const useDate = () => {
//   const date = useSelector(state => state.date);
//   const dispatch = useDispatch();
//   const selectDate = () =>
//     dispatch({
//       type: 'SELECT_DATE',
//     });

//   return { date, selectDate };
// };

const Modal = ({ selectedDate, isShowModal, hide }) =>
  isShowModal ? (
    <>
      <button onClick={hide}>Close Modal</button>
      <form>
        <label>
          <input
            placeholder={selectedDate && selectedDate.toLocaleDateString()}
            type="text"
            name="month"
          />
        </label>
        <label>
          Day
          <input type="text" name="day" />
        </label>
      </form>
    </>
  ) : null;

export default Modal;
