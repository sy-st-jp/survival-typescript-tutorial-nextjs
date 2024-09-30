import { NextPage } from "next"
import { useState } from "react"
import { apiClient } from "../api/cat"
import { Image } from "../api/cat/types"

type Props = {
  initialImageUrl: string
}

const IndexPage: NextPage<Props> = (props) => {
  const { initialImageUrl } = props
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const [loading, setLoading] = useState(false)
  const handleClick = async () => {
    setLoading(true)
    const newImages = await apiClient.search()
    setImageUrl(newImages[0].url)
    setLoading(false)
  }
  return (
    <div>
      <button onClick={handleClick}>See other cats!</button>
      <div>{loading || <img src={imageUrl}/>}</div>
    </div>
)
}
export default IndexPage

export const getServerSideProps = async () => {
  const images:Image[] = await apiClient.search()
  const props = {
    initialImageUrl: images[0].url
  }
  return { props }
}
