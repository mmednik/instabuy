interface IProgressBar {
  progress: number
}

export const ProgressBar = (props:IProgressBar) => {
  return (
    <div className="progressBarWrapper">
      <div className="progressBar" style={{width: `${props.progress}%`}}></div>
    </div>
  )
}