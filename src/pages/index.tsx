import { NextPage } from "next"
import { useEffect, useState } from "react"
import { apiClient } from "../api/cat"
import { Image } from "../api/cat/types"

const IndexPage: NextPage = () => {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!loading) return
    const fetchImage = async () => {
      const images:Image[] = await apiClient.search()
      setImageUrl(images[0].url)
      setLoading(false)
    }
    fetchImage()
  },[loading])
  const handleClick = () => {
    setLoading(true)
  }
  return (
    <div>
      <button onClick={handleClick}>See other cats!</button>
      <div>{loading || <img src={imageUrl}/>}</div>
    </div>
)
}
export default IndexPage
