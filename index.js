// Write your app here! (HINT: First thing should be a call to ReactDOM.render()... )
const{Component} = React;

class App extends Component{
    constructor(props){
        super(props);
        this.state ={
        colorArray:
            [{
                id:"0",
                colors:Math.floor(Math.random()*16777215).toString(16),
                isLocked:false
            },
            {
                id:"1",
                colors:Math.floor(Math.random()*16777215).toString(16),
                isLocked:false
            },
            {
                id:"2",
                colors:Math.floor(Math.random()*16777215).toString(16),
                isLocked:false
            },
            {
                id:"3",
                colors:Math.floor(Math.random()*16777215).toString(16),
                isLocked:false
            },
            {
                id:"4",
                colors:Math.floor(Math.random()*16777215).toString(16),
                isLocked:false
            }]
        }   
    }
    randomize(){
        this.setState({
            colorArray:this.state.colorArray.map(currentArray=>{
                if (currentArray.isLocked ===false){
                    return {...currentArray, colors:Math.floor(Math.random()*16777215).toString(16)};
                }else if(currentArray.isLocked===true){
                    return currentArray;
                }
            })
        });
    }
    lock(id){
        this.setState({
            colorArray:this.state.colorArray.map((currentArray,key) => {
                if (id===key){
                    return {...currentArray,isLocked:true}
                }else{
                    return currentArray
                }
            }
        )});
    }
    unlock(id){
        this.setState({
            colorArray:this.state.colorArray.map((currentArray,key) => {
                if (id===key){
                    return {...currentArray,isLocked:false}
                }else{
                    return currentArray
                }
            }
        )});
    }  
    render(){
        return (
            <div>
                <div className={`text-center bg-dark fixed-top`}>
                    <button className={`btn btn-secondary m-1`} onClick={ () => this.randomize()}>RANDOMIZE COLORS</button>  
                </div>
                <div  className={`w-100 d-flex`} style={{height: "100vh"}}>
                    {
                        this.state.colorArray.map((backgroundcolor,id)=>{
                        return (
                                <div key={id} style={{backgroundColor: `#${backgroundcolor.colors}`}} className={`w-100 d-flex flex-column align-items-center justify-content-center`}>
                                    <h1>{`#${backgroundcolor.colors}`}</h1>
                                    <button onClick={() => {this.lock(id)}} className={`m-3 btn btn-dark`}>LOCK</button>
                                    <button onClick={() => {this.unlock(id)}} className={`m-3 btn btn-dark`}>UNLOCK</button>
                                </div>
                        )})
                    }
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App/>,document.getElementById("root"));