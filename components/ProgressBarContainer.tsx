import { ProgressBar } from "./ProgressBar"

export const ProgressBarContainer = () => {
  return (
    <div className="progressBarContainer">
      <ProgressBar progress={100} />
      <ProgressBar progress={100} />
      <ProgressBar progress={25} />
      <ProgressBar progress= {0} />
    </div>
  )
}