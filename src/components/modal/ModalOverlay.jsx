import { RiCloseFill } from "react-icons/ri";
// import { useGlobalContext } from "../../context";
import "./ModalOverlay.scss";

const ModalOverlay = ({ index, setIndex, itemOnModal, setShowModal }) => {
  // const { domain } = useGlobalContext();

  const prevSlide = (index) => {
    if (index == 0) {
      setIndex(itemOnModal.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const nextSlide = (index) => {
    if (index == itemOnModal.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <section className="modal-container">
      <article className="modal">
        <button className="close-btn" onClick={() => setShowModal(false)}>
          <RiCloseFill />
        </button>
        <div className="image-container">
          {
            itemOnModal?.map((item, itemIndex) => (
              <img
                key={itemIndex}
                // src={`${domain}${item.attributes.url}`}
                src={`${item.attributes.url}`}
                alt="photo gallery"
              />
            ))[index] // to get just one of the pictures at a time
          }
        </div>
        <div className="btn-container">
          <button
            className="modal-btn prev-btn"
            onClick={() => prevSlide(index)}>
            {"<"}
          </button>
          <button
            className="modal-btn next-btn"
            onClick={() => nextSlide(index)}>
            {">"}
          </button>
        </div>
      </article>
    </section>
  );
};
export default ModalOverlay;
