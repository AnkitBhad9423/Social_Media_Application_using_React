const LoadingSpinner = () => {
  return (
    <div class="text-center">
      <div
        class="spinner-border spinner"
        role="status"
        style={{ width: "4rem", height: "4rem" }}
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
