import Image from "next/image"
import logo from "../public/InstaBuy.png"
import { Button } from "./Button"

export const Footer = () => {
  return (
    <footer>
      <Image
        src={logo}
        alt="InstaBuy Logo"
        placeholder="blur"
      />
      <Button
        text="See other stores"
        url="/"
        type="secondary"
      />
    </footer>
  )
}