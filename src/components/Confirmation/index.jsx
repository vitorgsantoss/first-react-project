import { Container } from "./styled";

// components/Confirmation.jsx
export default function Confirmation({ visible, onConfirm, onCancel }) {
  if (!visible) return null;

  return (
    <Container>
      <div className="background"/>
      <div className="confirmationWindow">
      <p>Are you sure?</p>
      <div>
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
      </div>
    </Container>
  );
}
