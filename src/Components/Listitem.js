import React,{Component} from 'react';

const Listitems=(props)=>{
        return(
            <div className="center">

                    {
                            props.tempreature && <p> tempreature:{props.tempreature}</p>
                    }
                    {
                            props.city &&  <p>city:{props.city}</p>
                    }
                    {
                            props.country &&  <p>country:{props.country}</p>
                    }
                    {
                           props.error && <p>{props.error}</p>
                    }

            </div>
        )
}



export default Listitems;
