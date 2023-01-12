import Image from "next/image"
import logo from "../public/InstaBuy.png"

export const Footer = () => {
  return (
    <footer>
      <Image
        src={logo}
        alt="InstaBuy Logo"
        placeholder="blur"
      />
      Button
    </footer>
  )
}