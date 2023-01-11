import {useLoaderData} from "react-router-dom";
import {Link, Form} from "react-router-dom"
//
 
function Index(props) {
  const people = useLoaderData()

//Form aka all input boxes is passed in as an object called the request. The request is then called formData used in actions.js
// The submit button on line 17 once clicked by user, triggers the createAction in actions.js, which uses the request/formData
//the below "name", "image" and "title" are coming from createAction in actions.js
  return (
    <div>
      <h2>Create a Person</h2>
      <Form action="/create" method="post">
        <input type="input" name="name" placeholder="person's name" />
        <input type="input" name="image" placeholder="person's picture" />
        <input type="input" name="title" placeholder="person's title" />

        <input type="submit" value="create person" /> 
      </Form>




      <h2>People</h2>
      <div className="container">
      {people.map(person => (
    <div className="card" key={person._id} >
      <Link to={`/${person._id}`}className="person">
        <h1>{person.name}</h1>
      </Link>
      <img src={person.image} alt={person.name} />
      <h3>{person.title}</h3>
    </div>
  ))}
  </div>
  </div>
  )
      }

export default Index


// person._id is the id number given from mongodb.
//Once the Link is clicked, the id number is now the params in the browser url and being used in and from the personloader in loaders.