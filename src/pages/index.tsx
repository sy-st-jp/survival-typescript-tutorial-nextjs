import { NextPage } from "next"
import { useEffect, useState } from "react"
import { apiClient } from "../api/cat"
import { Image } from "../api/cat/types"

const IndexPage: NextPage = () => {
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true)
      const images:Image[] = await apiClient.search()
      setImageUrl(images[0].url)
      setLoading(false)
    }
    fetchImage()
  },[])
  return <div>{loading || <img src={imageUrl}/>}</div>
}
export default IndexPage
