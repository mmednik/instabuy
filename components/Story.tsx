import Image from "next/image"

interface IStory {
  path: string,
  alt: string,
  active: boolean
}

export const Story = (props: IStory) => {
  const storyImage = require(`../assets/stories/${props.path}.png`);

  return (
    <>
      {props.active &&
        <Image
          src={storyImage}
          alt={props.alt}
          placeholder="blur"
          className="storyImage"
        />
      }
    </>
  )
}