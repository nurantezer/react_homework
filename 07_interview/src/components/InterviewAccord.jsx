import Qestion from "./Qustion"

const InterviewAccord = (props) => {
  const {data} = props
  console.log("data",props);
  return (
    <div className="row">
      {data.map ((item) => <Qestion key={item.id} {...item}/>)}
    </div>
  )
}

export default InterviewAccord