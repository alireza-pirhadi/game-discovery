const getCroppedImageUrl = (url: string) => {
  const endPoint = "media/";
  const index = url.indexOf(endPoint) + endPoint.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
