import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg" />
        <div className="user">
          <img src="https://pbs.twimg.com/media/Epd5MxMXIAASS5f.jpg" />
          <div className="info">
            <span>Jão</span>
            <p>Postado 2 dias atrás </p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}><img src={Edit} /></Link>
            <img src={Delete} />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, minima.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, animi accusantium? Soluta laudantium debitis sed cumque quos qui aut odio reprehenderit aliquid placeat neque repellendus molestiae impedit, nesciunt ea assumenda. Nesciunt eligendi, quas, deserunt ducimus, itaque corporis quaerat cupiditate adipisci facere iste voluptatem omnis assumenda necessitatibus veritatis eveniet architecto. Assumenda quas dignissimos incidunt eius nisi dolorum accusantium fugiat dolorem aliquam recusandae, officia placeat suscipit autem voluptatem molestiae sequi, delectus exercitationem expedita ut! Velit nulla ullam aut quo qui labore quos error repellendus reiciendis delectus aliquid cumque magni at maiores nobis quae natus id culpa, est facilis exercitationem eos quibusdam. Dicta tempore necessitatibus ipsa soluta mollitia ullam veniam totam a. Magni vero nostrum tenetur dolore magnam provident in ut? Doloribus adipisci numquam nostrum eveniet provident similique architecto obcaecati earum non eum, aliquam beatae eligendi ea, placeat culpa necessitatibus sunt velit iste voluptatem totam esse? Ad nulla ipsum repellat aut ut beatae, placeat optio sapiente aperiam, itaque officia quos dicta accusamus laborum, repellendus facilis eveniet eaque et reiciendis deserunt ipsa voluptate ea. Illo minima culpa neque at facilis reprehenderit cumque, dignissimos reiciendis dicta ea, aspernatur sit fuga provident quibusdam magni nemo delectus quod amet dolorum illum! Excepturi quidem veniam deserunt vitae est autem at voluptate consectetur animi modi doloremque architecto explicabo officia ullam obcaecati aspernatur suscipit iure expedita, beatae officiis earum sit perspiciatis? Dolores eveniet laborum possimus beatae id sunt minima at, ad perferendis doloremque blanditiis earum ipsa porro corrupti officia expedita! Consequuntur assumenda voluptatibus expedita doloribus nihil, alias sunt, debitis inventore tempore dolorum animi et labore at atque ipsum earum repudiandae. Sapiente distinctio minima quis, totam optio fuga laudantium suscipit, quia iusto sunt, recusandae vitae tempora aspernatur! Ad atque aliquam dolores quos non vel reprehenderit quod voluptas assumenda? Odit consequatur similique architecto, earum perferendis cumque perspiciatis iste eaque soluta, nam dicta?
        </p>
      </div>
      <Menu />
    </div>
  )
}

export default Single