import React from 'react'

const Menu = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis.",
      img: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis.",
      img: "https://images.squarespace-cdn.com/content/v1/571fc5edd210b89083925aba/1587497063492-3M55NJG231XKWL9PLFL2/Liam_Wong_Tokyo_Nights_Phone_Wallpapers_Cyberpunk_Blade_Runner_TOKYOO_TO_KY_OO_Japan_BookMinutes+To+Midnight.jpg?format=1000w"
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis.",
      img: "https://images8.alphacoders.com/118/1186452.jpg"
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis.",
      img: "https://mobimg.b-cdn.net/v3/fetch/05/05eeb93a2e41734ecb6044146351f11e.jpeg"
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet consectetur.",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, corporis.",
      img: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
    },
  ]

  return (
    <div className="menu">
      <h1>Outras publicações que você talvez goste</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} />
          <h2>{post.title}</h2>
          <button>Leia mais</button>
        </div>
      ))}
    </div>
  )
}

export default Menu