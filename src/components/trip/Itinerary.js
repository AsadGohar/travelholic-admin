import React ,{useState} from 'react'

function Itinerary(props) {
  const days = props.days
  // const [descriptions, setDescriptions] = useState([])
  const list = []
  const data = []
  // const addDescriptions= (newMessage,index) => setDescriptions(state => [...state, {day:index,description:newMessage}])
  const setJsonData = (x,y)=>{
      var json = {day:x,description:y}
      data.push(json)
  }
  const formRender = (days) =>{
    for (let index = 1; index <= days; index++) {
      list.push(  
      <div class="form-group">
        <label>Day : {index}</label>
        <input type="text" class="input-x form-control"/>
      </div>
    )
    }
  }
  const onSave = (e) =>{
    e.preventDefault()
    for (let index = 0; index < days; index++) {
      var inputText = document.getElementsByClassName("input-x form-control")[index].value
      setJsonData(index,inputText)
      
    }
    console.log(data)
  }
  formRender(days)
  return (
    <div className="container mt-4 border border-dark pt-2 pb-4">
      <h3>Add Itinerary</h3>
      <div class="form-group">
        {list}
      </div>
      <button onClick={onSave} class="mt-4 btn btn-warning">Save</button>
    </div>
  )
}

export default Itinerary
