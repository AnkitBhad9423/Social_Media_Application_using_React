const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <center className="welcome-message">
      <h1 className="messsage-post">There are no Posts</h1>
      <button
        type="button"
        onClick={onGetPostClick}
        className="btn btn-primary"
      >
        Get Post From Fetch
      </button>
    </center>
  );
};
export default WelcomeMessage;
