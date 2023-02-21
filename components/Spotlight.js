import Image from "next/image";

export default function Spotlight({ pieces }) {
  const totalArts = 11;
  let artKey = 0;

  const lengthOfPieces = pieces.length;
  function getRandomArt(lengthOfPieces) {
    artKey = Math.floor(Math.random() * lengthOfPieces);
  }

  getRandomArt(lengthOfPieces);

  return (
    <>
      <h1>Artist Name : {pieces[artKey].artist}</h1>
      <Image
        src={pieces[artKey].imageSource}
        height={144}
        width={144}
        alt={pieces[artKey].imageSource}
      ></Image>
    </>
  );
}
