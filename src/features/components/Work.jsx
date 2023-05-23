

export default function Work({work}) {

    
    let {description, title, imageUrl} = work;

  return (
    <article className="card-work">
        <h1>{title}</h1>
        <img src={`/images/${imageUrl}`} alt={title}/>
        <p>{description}</p>
    </article>
  )
}
