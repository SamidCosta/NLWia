import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoId
  console.log("realizando o download do video:" + videoId)

  ytdl(videoURL, {qua})
}
