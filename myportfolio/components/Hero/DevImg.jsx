import Image from "next/image"

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} priority alt="my profile pic" fill/>
    </div>
  )
}

export default DevImg