
import LessonStyle from "./lesson.module.css";

const LessonCard = ({lesson}) => {
  const{id, image, name,hour} = lesson;
  return (
    <div key={id} className={LessonStyle.lesson}>
      <div>
        <img src={image}
        className={LessonStyle.img} 
        alt={name} />
      </div>
      <div className={LessonStyle.text}>
      <p className={LessonStyle.parag}>
      <span className={LessonStyle.span}>Lesson Name:{name}</span>
      </p>
      <p>
        <span>Lesson Hour: {hour}</span>
      </p>
      </div>




    </div>
  )
}

export default LessonCard