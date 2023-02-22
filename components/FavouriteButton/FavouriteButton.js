import React from "react";

export default function FavouriteButton({
  isFavorite,
  artPiecesInfo,
  pieces,
  slugB,
  setArtPiecesInfo,
}) {
  // the handleToggleFavorite function gets the slug as an argument, checks if an object with that slug is in the array, if yes changes the boolean,
  // if not adds an object to that array that looks like this: {slug: 'here is the slug', isFavorited: true}

  console.log("fav: ", artPiecesInfo);

  const isFav = artPiecesInfo.favourites.includes(slugB);

  function handleToggleFavorite() {
    console.log(artPiecesInfo);
    console.log(slugB);

    if (isFav) {
      setArtPiecesInfo({
        ...artPiecesInfo,
        favourites: artPiecesInfo.favourites.filter((piece) => true),
      });
    } else {
      artPiecesInfo.favourites.push(slugB);
      setArtPiecesInfo({
        ...artPiecesInfo,
        favourites: [...artPiecesInfo.favourites],
      });
    }
  }

  // const handleToggle = (id) => {
  //   console.log('this works')
  //   setLightsOnOrOff(
  //   setOfLightsArr.filter((light) => {
  //     if (light.id === id) {
  //       light.isOn=!light.isOn
  //       console.log(light.isOn)
  //       console.log(light)

  //       return light
  //     } else {
  //       console.log(light)
  //     return light
  //     }
  //   })
  //   )
  //   console.log(lightsOnOrOff)

  // }

  return (
    <>
      <button onClick={() => handleToggleFavorite()}> ♥ </button>
    </>
  );
}
