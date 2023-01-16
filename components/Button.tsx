interface IButton {
  text: string,
  url: string,
  type: string
}

export const Button = (props:IButton) => {
  return (
    <a className={`button ${props.type}`} href={props.url}>{props.text}</a>
  )
}