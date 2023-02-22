import { ProgressBar } from "./ProgressBar"

interface IProgressBarContainer {
  qty: number,
  current: number
}

export const ProgressBarContainer = (props: IProgressBarContainer) => {

  return (
    <div className="progressBarContainer">

      {[...Array(props.qty)].map((x, i) =>
        <ProgressBar progress={(i <= props.current - 1) ? 100 : 0} key={i} />
      )}

    </div>
  )
}