import Image from "next/image"
import story from "../public/story.png"

export const Story = () => {
  return (
    <Image
      src={story}
      alt="Story"
      placeholder="blur"
    />
  )
}