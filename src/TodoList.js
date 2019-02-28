import React, { Component } from 'react' ;
import 'antd/dist/antd.css';
import { Input, Button } from 'antd' ;


class TodoList extends Component {
    
    render () {
        return(
             <div style={{marginTop: '10px', marginLeft:'10px'}}>
                 <div>
                     <Input placeholder='todo info' style={{width: '300', matginRight:'10'}}/>
                     <Button type="primary">summit</Button>
                </div>
            </div>
        )
          
    
    }
}

export default TodoList;