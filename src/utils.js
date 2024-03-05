import galleryData from "./db/db.json";
export const getPiece = (src) => {
    const data = galleryData.filter((e) => e.src === src);
    return data[0];
  };
export const getNextAndAfter = (id) => {
    let next = id + 1, after = id - 1
    if(after < 0){
      after = galleryData.length-1
    }
    if(next > galleryData.length-1){
      next = 0
    }
    return [galleryData[after].src, galleryData[next].src]
  }