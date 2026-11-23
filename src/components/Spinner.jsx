const Spinner = ({ text = "Loading..." }) => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center gap-3">
    <span className="loading loading-spinner loading-lg text-primary"></span>
    <p className="text-base-content/60 text-sm">{text}</p>
  </div>
);

export default Spinner;
