import { Component } from "react";

class App extends Component{
  render() {
    return(
      <main className="main-container">
        <h1>예산 계산기</h1>
        <div style={{width:'100%', backgroundColor: 'white', padding:'1rem'}}>
          {/* 계산 리스트 */}
        </div>
        <div style={{display:'flex', justifyContent: 'end', marginTop: '1rem'}}>
          총지출:
          <span>원</span>
        </div>
      </main>
    )
  }
}

export default App;