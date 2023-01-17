import Image from "next/image"
import story from "../public/story.png"

export const Story = () => {
  return (
    <>
    <Image
      src={story}
      alt="Story"
      placeholder="blur"
    />
    <p className="storyText">
      3x2 until tomorrow 🎉<br />
      FREE SHIPPING 🚚
    </p>
    </>
  )
}