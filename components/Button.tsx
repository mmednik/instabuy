interface IButton {
  text: string,
  url: string
}

export const Button = (props:IButton) => {
  return (
    <a className="button" href={props.url}>{props.text}</a>
  )
}