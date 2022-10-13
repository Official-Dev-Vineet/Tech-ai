const Card = ({image,children}) => {
  return (
    <figure className='gui-card'>
        <img src={image} alt={children} />
        <figcaption>{children}</figcaption>
    </figure>
  )
}

export default Card