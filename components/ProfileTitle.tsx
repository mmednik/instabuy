import Image from "next/image"
import profilePicture from "../assets/profile/profile-img.png"

export const ProfileTitle = () => {
  return (
    <div className="profileTitle">
      <Image
        src={profilePicture}
        alt="Profile picture"
        placeholder="blur"
      />
      <h1>mmednik</h1>
      <h2>Martín Alejandro Mednik</h2>
    </div>
  )
}