import React, { useState, useEffect} from 'react';
import axios from 'axios';
import EditPost from './EditPost';
import DeletePost from './DeletePost';

const GetPosts = () => {
    const [get, setGet] = useState([]);

    function getMadePost(){
        axios.get('http://localhost:3000/posts')
        .then((res) => {
            setGet(res.data)
            // console.log(res.data)
        })
    }

    useEffect(() => {
        getMadePost()
    }, [get])

  return (
    <div>
        <h2>Posts Made</h2>
        <section>
            {
                get.map((item) =>(
                    <div key={item.id}>
                        <p>{item.title}</p>
                        <EditPost id= {item.id}/>
                        <DeletePost id= {item.id}/>
                    </div>
                ))
            }
        </section>
    </div>
  )
}

export default GetPosts