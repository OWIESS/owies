import React,{Component} from 'react';
import Axios from "axios";
import Listitems from "./Listitem";
import {FormCheck,Form,FormControl,Button} from "react-bootstrap";




class Formitems extends Component{
    state={
        tempreature:"",
        city:"",
        country:"",
        error:""
    }
    handelsubmit=(e)=>{
        e.preventDefault()
            const key="e36ed364400282e43250b6c4c0274d44";
            const country=e.target.elements.country.value;
            const city=e.target.elements.city.value;
            Axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country},${city}damascus&appid=${key}`)
                .then(res=>{
                    const data=res.data;
                   if(city,country){  this.setState({
                       tempreature: data.main.temp,
                       city:data.name,
                       country:data.sys.country,

                   })
                   }
                   else {
                     this.setState({
                         error:"please write your city and your country"
                     })
                   }
                })
    }
    render() {
        return(
            <div >
                <form  onSubmit={this.handelsubmit}>
                    <FormControl className="i" type="text" name="country"/>
                    <FormControl type="text" name="city"/>
                    <Button variant="success" type="submit" >Success</Button>{' '}

                <Listitems
                    tempreature={this.state.tempreature}
                    city={this.state.city}
                    country={this.state.country}
                    error={this.state.error}
                />
                </form>
            </div>
        )
    }

}



export default Formitems;