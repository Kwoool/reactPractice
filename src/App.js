import React, {useState} from 'react';  /* react 와 usestate 를 사용하겠다. react로 부터 */

function App(){

  let posts = '강남 고기 맛집'
  let [subject,subject_change] = useState(['box','apple','hair'])
  let [good,good_change] = useState(0)
  let [modal,modal_change] = useState(false);

  function 함수(){
    return 100
  }

  return(
    <div className="App">
      <h4> {함수() }</h4>
      <h3> {posts} </h3>
      <h1> {subject[0]} </h1>  
      <h2> {good} <span onClick={ ()=>{ good_change(good+1) } }> 👍 </span> </h2>
      
      { modal === true ? <Modal wow={subject}/> : null }

      <button onClick ={ ()=>{modal_change(!modal)} }>버튼</button>

      <Area why={subject} />

    </div>
  )
}

function Modal(props){
  return(
    <>
      {props.wow[0]}
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </>
  )
}

function Area(props){
  
  let [click,click_change] = useState(0)

  return(
    <div>
      { props.why.map(function(a,i){
        return(
          <h3 onClick = {()=>{click_change(i)}}>{a} click me</h3>
        )
      }) }

      <h1>{props.why[click]}</h1>
    </div>
  )
}

export default App;