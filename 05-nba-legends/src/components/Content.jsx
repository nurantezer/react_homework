

const Content = ({data}) => {
    
  return (
    <div>
     {data.map((item) =>{
        const {name,img} = item
        return(
            <div>
             <h1>{name}</h1>   
             <img src={img} alt="" />
            </div>
            
            
        )
     })}
    </div>
  )
}

export default Content