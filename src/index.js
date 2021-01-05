import React from 'react';
import ReactDOM from 'react-dom';
import { multiply } from './datasource';
// import Img from './img/earth.jpg';
// import Img2 from './img/moon.jpg';
import './index.css';
//import { multiply } from "./datasource";

// const Img = require('./img/Earth.jpg')
/*
var name="per";
var el=<div>Hello {name}</div>

function formatName(user) {
    return user.firstName+' '+user.lastName;
}
var user={
    firstName:'Harper',
    lastName:'Perez'
};
// const user=null;
function getGreeting(user){
    if(user){
        return <div>Hello,{formatName(user)}</div>;
    }
    return <div>Hello,Stranger</div>;
}
const eln=<div className="line">{getGreeting(user)}</div>
*/
/*
class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date()
        };
    }
    componentDidMount(){
        this.timerID=setInterval(()=>this.tick(),1000);
        // this.timerID=setInterval(this.tick(),1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({date:new Date()});
    }
    render(){
        return(
            <div>
                <h1>Hello</h1>
                <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
// function tick() {
//     ReactDOM.render(
//         <Clock/>,
//         document.getElementById("timeline")
//     );
// }
// setInterval(tick,1000);
*/
/*
var a=0;
function num() {
    a++;
    document.getElementById("ne").innerHTML=a;
}
var iID=setInterval(num,1000);
var stepe=0;
function stopNum(){
    stepe++;
    if(stepe%2==0){
        iID=setInterval(num,1000);
    }else{
        clearInterval(iID);
    }
}
*/
/*
function Welcomef(props){
    return <h1>Hello,{props.name}</h1>
}
class Welcomec extends React.Component{
    render(){
        return <h1>Hello,{this.props.name}</h1>
    }
}
function App(){
    return(
        <div>
            <Welcomec name="Blanc" />
            <Welcomec name="Saya" />
            <Welcomec name="Trump" />
        </div>
    );
}
*/
/*
function Avatar(props){
    return(
        <img className='Avatar' src={Img} alt={props.user.name}/>
    );
}
function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar user={props.user}/>
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}
function Comment(props){
    return(
        <div className="Comment">
            <UserInfo user={props.author}/>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{props.date}</div>
            <img className="pi" src={Img2}/>
        </div>
    );
}
*/
/*
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggleOn:true
        };
        // this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state=>({isToggleOn:!state.isToggleOn}));
    }
    render(){
        return(
            <div>
                {// <button onClick={this.handleClick}>click</button> }
                <button onClick={()=>this.handleClick()}>click</button>
                <div>{this.state.isToggleOn?'NO':'OFF'}</div>
            </div>
        );
    }
}
*/
/*
function LoginButton(props) {
    return <button onClick={props.onClick}>Login</button>
}
function LogoutButton(props) {
    return <button onClick={props.onClick}>Logout</button>
}
function UserGreeting() {
    return <h1>Welcome back</h1>;
}
function GuestGreeting() {
    return <h1>Please sign up</h1>;
}
function Greeting(props) {
    const isLoggedIn=props.isLoggedIn;
    if(isLoggedIn)
        return <UserGreeting/>
    return <GuestGreeting/>
}
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        // this.handleLoginClick=this.handleLoginClick.bind(this);
        // this.handleLogoutClick=this.handleLogoutClick.bind(this);
        this.state={
            isLoggedIn:false
        };
    }
    handleLoginClick(){
        this.setState({isLoggedIn:true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn:false});
    }
    render(){
        const isLoggedIn=this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button=<LogoutButton onClick={()=>this.handleLogoutClick()}/>
        }else{
            button=<LoginButton onClick={()=>this.handleLoginClick()}/>
        }
        return(
          <div>
              <Greeting isLoggedIn={isLoggedIn}/>
              {button}
          </div>  
        );
    }
}
*/
/*
function Mailbox(props) {
    const unreadMessages=props.unreadMessages;
    return(
        <div>
            <h1>Hello</h1>
            {unreadMessages.length>0&&
                <h2>You have {unreadMessages.length} unread messages</h2>
            }
        </div>
    );
}
const messages=['m1','m2','m3'];
*/
/*
function WarningBanner(props) {
    if(!props.warn)
        return null;
    return(
        <div className="warning">Warning</div>
    );
}
class Page extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showWarning:true
        };
        //this.handleToggleClick=this.handleToggleClick.bind(this);
    }
    handleToggleClick(){
        this.setState(state=>({showWarning:!state.showWarning}));
    }
    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={()=>this.handleToggleClick()}>{this.state.showWarning?'Hide':'Show'}</button>
            </div>
        );
    }
}
*/
/*
function NumberList(props) {
    const numbers=props.numbers;
    const listItems=numbers.map(number=><li key={number.toString()}>{number}</li>);
    return <ul>{listItems}</ul>;
}
const numbers=[1,2,3,4,5];
*/
/*
class NameForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            fruit:'',
            delivery:true,
            remark:'备注'
        };
        //this.handleChange=this.handleChange.bind(this);
        //this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        const target=event.target;
        //console.log(target);
        const value=target.type==='checkbox'?target.checked:target.value;
        const name=target.name;
        this.setState({
            [name]:value
        });
        console.log(this.state.name+' '+this.state.fruit+' '+this.state.delivery+' '+this.state.remark);
    }
    handleSubmit(event){
        //alert('提交者: '+this.state.name);
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={(e)=>this.handleSubmit(e)}>
                <label>
                    名字: 
                    <input name="name" type="text" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
                </label>
                <label>
                    物品: 
                    <select name="fruit" value={this.state.fruit} onChange={(e)=>this.handleChange(e)}>
                        <option value='grapefruit'>葡萄柚</option>
                        <option value='lime'>酸橙</option>
                        <option value='coconut'>椰子</option>
                        <option value='mango'>芒果</option>
                    </select>
                </label>
                <label>
                    配送: 
                    <input name="delivery" type="checkbox" checked={this.state.delivery} onChange={(e)=>this.handleChange(e)}/>
                </label>
                <label>
                    备注: 
                    <textarea name="remark" value={this.state.remark} onChange={(e)=>this.handleChange(e)}/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        );
    }
}
*/
/*
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}
function toFahrenheit(celsius){
    return celsius*9/5+32;
}
function tryConvert(temperature,convert){
    const input=parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output=convert(input);
    const rounded=Math.round(output*1000)/1000;
    return rounded.toString();
}
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit'
};
class TemperatureInput extends React.Component{
    handleChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render(){
        const temperature=this.props.temperature;
        const scale=this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input value={temperature} onChange={(e)=>this.handleChange(e)}/>
            </fieldset>
        );
    }
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temperature:'',
            scale:'c'
        };
    }
    handleCelsiusChange(temperature){
        this.setState({scale:'c',temperature:temperature});
    }
    handleFahrenheitChange(temperature){
        this.setState({scale:'f',temperature:temperature});
    }
    render(){
        const scale=this.state.scale;
        const temperature=this.state.temperature;
        const celsius=scale==='f'?tryConvert(temperature,toCelsius):temperature;
        const fahrenheit=scale==='c'?tryConvert(temperature,toFahrenheit):temperature;
        return(
            <div>
                <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={(e)=>this.handleCelsiusChange(e)}/>
                <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={(e)=>this.handleFahrenheitChange(e)}/>
                <BoilingVerdict celsius={parseFloat(celsius)}/>
            </div>
        );
    }
}
*/
/*
function FancyBorder(props){
    return(
        <div className={'FancyBorder FancyBorder-'+props.color}>{props.children}</div>
    );
}
function WelcomeDialog(){
    return(
        <FancyBorder>
            <h1 className='Dialog-title'>Welcome</h1>
            <p className='Dialog-message'>Thank you for visiting our spacecraft</p>
        </FancyBorder>
    );
}
*/
// var res=[];
// for(let i=1;i<10;i++){
//     res[i]=function(){
//         //console.log(i);
//         return i;
//     };
// }
//res[6]();
// var tmp=123;
// if(true){
//     //var tmp=123;
//     //tmp='ab';
//     let tmp;
//     tmp='abc';
//     //let tmp;
//     var t=typeof(tmp);
// }
// var rel=[1,2,3]
// let x,y=3;
// function bar(y,x=y){
//     return [x,y];
// }
// let rel=bar(y,x);
// function Cel(){
// return rel.map(rl=><div>{rl}</div>);
// }
// function f1(){
//     let n=5;
//     console.log(n);
//     if(true){
//         let n=10;
//         console.log(n);
//     }
//     console.log(n);
//     return <div>Complete</div>
// }
// const fo={};
// fo.prop=1;
// fo.ale=2;
// const fe=[]
// fe.push('10');
// fe.push('20');
// // fe.length=1;
// function Cel(){
//     return <div>{fe.pop()}  {fe.length}</div>;
// }
// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
// };
//     let { id, status, data} = jsonData;
//     console.log(id, status, data);
// let s='𠮷a';
// for(let ch of s){
//     console.log(ch.codePointAt().toString(16));
// }
// function is32Bit(c){
//     return c.codePointAt(0)>0xFFFF;
// }
// console.log(is32Bit('𠮷'));
// console.log(is32Bit('s'));
//console.log(3**4);
//console.log('a','b',1);
// function so(...values){
//     return values.sort();
// }
// console.log(so(1,5,8,2,3));
// console.log([1,5,8,2,3].sort());
// var values=[1,5,8,2,3];
// var res=values.sort((a,b)=>b-a);
// console.log(res);
// function factorial(n, total = 1) {
//     if (n === 1) return total;
//     return factorial(n - 1, n * total);
// }
// console.log(factorial(1000));
// console.log(...'abc');
// const arr = [
//     'peach',
//     'straw',
//     'apple',
//     'spork'
// ]; 
// const stableSorting = (s1, s2) => {
//     if (s1[0] < s2[0]) return -1;
//     return 1;
// };
// console.log(arr.sort(stableSorting));
// let [s] = '123';
// console.log(s);
// let obj = {x: 1, y: 2};
// console.log(`${obj.x + obj.y}`);
// const a1 = [1, 2];
// const a2 = [...a1];
// console.log(a2);
// a1[0]=5;a1[1]=8;
// console.log(a2);
// function clone(origin) {
//     return Object.assign({}, origin);
// }
// var v={a:1,b:2,c:3};
// var c={};
// Object.assign(c,v);
// console.log(c);
// v.b=4;
// console.log(v);
// console.log(c);
// let sym=Symbol('mee');
// console.log(sym);
// console.log(String(sym));
// console.log(sym.toString());
// let mySymbol=Symbol();
// let a={[mySymbol]:'Hello'};
// console.log(a);
// console.log(a[mySymbol]);
// const handler = {
//     get (target, key) {
//       invariant(key, 'get');
//       return target[key];
//     },
//     set (target, key, value) {
//       invariant(key, 'set');
//       target[key] = value;
//       return true;
//     }
// };
// function invariant (key, action) {
//     if (key[0] === '_') {
//       throw new Error(`Invalid attempt to ${action} private "${key}" property`);
//     }
// }
// const target = {
//     _prop:3,
//     val:5
// };
// const proxy = new Proxy(target, handler);
// //console.log(proxy._prop);
// console.log(proxy.val);
// var a=function(){
// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => reject(new Error('fail')), 3000)
// })
  
// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(p1), 1000)
// })
  
// p2
//     .then(result => console.log(result))
//     .catch(error => console.log(error))
// }
//a();
// function* helloWorldGenerator() {
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }
// var hw = helloWorldGenerator();
// console.log(hw.next().value);
// console.log(hw.next().value);
// console.log(hw.next().value);
// console.log(hw.next().value);
// function* f() {
//     for(var i = 0; true; i++) {
//       var reset = yield i;
//       console.log(reset);
//       if(reset) { i = -1; }
//       //console.log(reset);
//     }
//   }
//   var g = f();
//   console.log(g.next());
//   console.log(g.next());
//   console.log(g.next());
//   console.log(g.next(true));
// function sleep(interval) {
//     return new Promise(resolve => {
//       setTimeout(resolve, interval);
//     })
// }
// async function one2FiveInAsync() {
//     for(let i = 1; i <= 5; i++) {
//       console.log(i);
//       await sleep(1000);
//     }
// } 
// one2FiveInAsync();
// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
  
//     toString() {
//       return '(' + this.x + ', ' + this.y + ')';
//     }
// }
// var a=new Point(1,2);
// console.log(a.x);
// class mc{
//     constructor(){
//         this.x=1;
//     }
//     static y=5;
//     static gx(){
//         return this.y;
//     }
// }
// var a=new mc();
// console.log(mc.gx());
/*
class tc{
    #a=1;
    #b=2;
    static c=3;
    constructor(x,y){
        this.#b=x;
        this.d=y;
    }
    #rep(){
        return this.#a+this.#b+this.d;
    }
    // rep(){
    //     return this.#a+this.#b+this.d;
    // }
    rec(){
        return this.#rep();
    }
}
var t=new tc(4,5);
console.log(t.rec());
*/
// var a=0;
// import("./datasource.js").then(function (datasource){
//     a=1;
//     console.log(datasource.multiply(3,2));
//     return datasource.multiply;
// }).then(()=>console.log(a));


//--------------------------------------
//ReactDOM.render(
    // <div>
    //     <div id="timeline"></div>
    //     <div id="ne"></div>
    //     <button onClick={stopNum}>click</button>
    // </div>
    // <Clock/>
    // <Comment author={{name:"erath"}} text='The Earth' date={new Date().toLocaleTimeString()}/>
    // <Toggle/>
    // <LoginControl/>
    // <Mailbox unreadMessages={messages}/>
    // <Page/>
    // <NumberList numbers={numbers}/>
    // <NameForm/>
    // <Calculator/>
    // <WelcomeDialog/>
//    <Cel/>,
//     document.getElementById("root")
// );