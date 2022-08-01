export function Option({ key, n }) {
  return (
    <div className="w-32 border-8">
      <a href="https://stackoverflow.com/questions/8660149/need-to-make-a-clickable-div-button">
        <h6>{n}</h6>
        <img src={n} alt="option" />
      </a>
    </div>
  )
}
