import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoId) => {
  console.log("realizando o download do video:" + videoId)

  ytdl()
}
