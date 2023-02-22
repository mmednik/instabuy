import Image from "next/image"

interface IStory {
  path: string,
  alt: string
}

export const Story = (props: IStory) => {
  const storyImage = require(`../assets/stories/${props.path}.png`);

  return (
    <Image
      src={storyImage}
      alt={props.alt}
      placeholder="blur"
      className="storyImage"
    />
  )
}