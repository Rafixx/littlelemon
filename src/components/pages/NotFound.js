const notFoundStyle={
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    minHeight: '31.25rem',
    padding: '1.875rem 0 1.875rem 0',
    textAlign: 'center',      
}
const NotFound = () => {
  return (
    <div style={notFoundStyle}>
      <h2>Page not found</h2>
    </div>
  );
};

export default NotFound;
