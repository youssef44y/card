 
const Add = (myTitle , myImg ,myRate , handleAdd ,myDescription ) => {
    

  return (
    <div>
<input placeholder='title' ref={myTitle} />
<input placeholder='img' ref={myImg} />
<input  type= "number" placeholder='rate' ref={myRate} />
<input type="text " placeholder='description' ref={myDescription} />

<button onClick={handleAdd}>add movie</button>

    </div>
  )
}

export default Add