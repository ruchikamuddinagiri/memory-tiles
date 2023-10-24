import Modal from "./Modal";
import "../styles/Help.css";

const Help = ({isOpen, onClose}) => {
  if(!isOpen){
    return null;
  }

    return (
      <Modal>
        <div className="help-modal modal-content" align="center">
          <h2 className="modal-heading text-center">How to Play</h2>
          <p className="p-1">Click on a card select it. In the next move select a different Card.You continue to play the game if you select different card in every move or else game ends.
            Click play again to try again.Enjoy collecting pokemons!</p>
          <button onClick={onClose} className="text-center p-1">Lets Go</button>
          
        </div>
      </Modal>
    );
  }
  
  export default Help;
  