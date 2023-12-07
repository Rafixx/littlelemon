import { faPersonDigging } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const underConstructionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minHeight: '31.25rem',
    padding: '1.875rem 0 1.875rem 0',
    textAlign: 'center',
}
  
const UnderConstruction = () => {
  return (
    <div style = {underConstructionStyle}>
      <FontAwesomeIcon icon={faPersonDigging} size="3x" />
      <h2>Page under construction</h2>
    </div>
  );
};

export default UnderConstruction;