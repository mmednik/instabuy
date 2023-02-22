import { Story } from "./Story"
import { ProgressBarContainer } from "./ProgressBarContainer"

export const Stories = () => {

  const stories = [
    {
      path: 'story-1',
      alt: 'Story #1',
      key: 1
    },
    {
      path: 'story-2',
      alt: 'Story #2',
      key: 2
    },
    {
      path: 'story-3',
      alt: 'Story #3',
      key: 3
    },
    {
      path: 'story-4',
      alt: 'Story #4',
      key: 4
    }
  ]

  return (
    <>
      {stories.map(story => (
        <Story key={story.key} path={story.path} alt={story.alt} />
      ))}

      <ProgressBarContainer />
    </>
  )
}