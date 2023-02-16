import "./LessonCard.css"

const LessonCard = ({item}) => {
  const {id,name,hour,image} = item
  return (
    <div className="card-container">
      <div className="card">
        <div className="img">
          <img src={image} width="50px" />
        </div>
        <div className="text">        
          <span>Lesson Name:{name}</span> <br />
          <span>Lesson Hour:{hour}</span>
        </div>
      </div>
    </div>
  );
}

export default LessonCard