import moment from 'moment';
import s from './Modal.module.scss';

const Modal = ({ selectedDate, isShowModal, hide }) =>
  isShowModal ? (
    <>
      <div className={s.modal__overlay} />
      <div
        className={s.modal__wrapper}
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className={s.modal}>
          <button
            type="button"
            className={s.modal__closeButton}
            data-dismiss="modal"
            aria-label="Close"
            onClick={hide}
          >
            <span aria-hidden="true">&times;</span>
          </button>

          <form className={s.form}>
            <label className={s.label}>
              Month
              <input
                className={s.input}
                disabled
                placeholder={
                  selectedDate && moment(selectedDate).format('MMMM')
                }
                type="text"
                name="month"
              />
            </label>
            <label className={s.label}>
              Day
              <input
                className={s.input}
                disabled
                type="text"
                name="day"
                placeholder={
                  selectedDate && moment(selectedDate).format('Do YYYY')
                }
              />
            </label>
          </form>
        </div>
      </div>
    </>
  ) : null;

export default Modal;
