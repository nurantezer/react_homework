import "./Main.css"

const Main = (props) => {
    const {img, title, desc} = props
  return (
    <div className="main">
        <div className="card">
            <img src={img} className="mainİmg" />
            <h4>{title}</h4>
            <div className="desc">
            <p>{desc}</p>   //*Burayı butonla kartın boşlukları eşit olsun diye dive aldık
            </div>
            <button className="btn">More Detail</button>
        </div>
      

    </div>
  )
}

export default Main