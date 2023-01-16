import Image from "next/image"
import paymentMethod from "../public/mercadopago.png"
import { Button } from "./Button"

export const PayButton = () => {
  return (
    <>
      <Button
        text="Pay with"
        url="https://www.mercadopago.com"
        type="primary"
      />
      <Image
        src={paymentMethod}
        alt="MercadoPago Logo"
        placeholder="blur"
      />
    </>
  )
}