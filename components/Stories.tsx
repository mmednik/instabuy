import { Story } from "./Story"
import { ProgressBarContainer } from "./ProgressBarContainer"
import { useEffect, useState } from "react"

export const Stories = () => {

  // TODO: get stories from an endpoint
  const [stories, setStories] = useState([
    {
      path: 'story-1',
      alt: 'Story #1',
      key: 1,
      active: true
    },
    {
      path: 'story-2',
      alt: 'Story #2',
      key: 2,
      active: false
    },
    {
      path: 'story-3',
      alt: 'Story #3',
      key: 3,
      active: false
    },
    {
      path: 'story-4',
      alt: 'Story #4',
      key: 4,
      active: false
    }
  ])

  const [activeStory, setActiveStory] = useState(1)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      
      const updatedStories = stories

      updatedStories.map((story) => story.active = false)

      if (activeStory < updatedStories.length) {
        setActiveStory(activeStory+1)
      } else {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setActiveStory(1)
      }

      updatedStories[activeStory - 1].active = true

      setStories([...updatedStories])

    }, 3000);
    return () => {
      clearInterval(progressInterval)
    };
  }, [activeStory, stories])

  return (
    <>
      {stories.map(story => (
        <Story key={story.key} path={story.path} alt={story.alt} active={story.active} />
      ))}

      <ProgressBarContainer />
    </>
  )
}