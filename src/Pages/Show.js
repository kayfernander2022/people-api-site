import { useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const person = useLoaderData();

  return (
    <div className="title">
      <h1>{person.name}</h1>
      <img src={person.image} alt={person.name} />
      <h2>{person.title}</h2>
      

      <h2>Update {person.name}</h2>
      <Form action={`/update/${person._id}`} method="post">
        <input defaultValue={person.name} type="input" name="name" placeholder="person's name" />
        <input type="input" name="image" placeholder="person's picture" />
        <input type="input" name="title" placeholder="person's title" />
        <input type="submit" value={`update ${person.name}`} />
      </Form>

      <h2>Delete Person</h2>
      <Form action={`/delete/${person._id}`} method="post">
      <input type="submit" value={`delete ${person.name}`} />
      </Form>

    </div>
  );
}

export default Show;

//  /update line13,  and /delete line21 from the <Form action=,  comes from the Route path=? in router.js

//defaultValue being used in the update person field will allow us to hold the original entry value in the input box when we choose a person. So we do not have to remember it/re-enter it "optional line of code" . line 14