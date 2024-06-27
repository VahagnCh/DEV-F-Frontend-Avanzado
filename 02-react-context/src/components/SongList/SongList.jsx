import './songlist.css'

const SongList = () => {
  return (
    <section className='row-container'>
      {
        loading
          ? <h2>Cargando...</h2>
          : list.map((song) => (
            <div key={song.id} className='row-song'>
              <h3>{song.title}</h3>
              <p>{song.artist}</p>
            </div>
          ))
        }
    </section>
  )
}
export default SongList
