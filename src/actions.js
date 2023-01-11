import { redirect } from "react-router-dom"

const URL = "https://people-api-cq95.onrender.com"



//CREATE AN ACTION
export const createAction = async ({ request }) => {//this request is the FORM component
  // get data from form
  const formData = await request.formData() //what is put in the form fields by user.
  // set up our new person to match schema
  const newPerson = {
    name: formData.get("name"),
    image: formData.get("image"),
    title: formData.get("title"),
  }
  // Send new person to our API
  await fetch(URL + "/people", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPerson), //turn the returned stringed data to json
  })
  // redirect to index//must import to use
  return redirect("/")
}



//UPDATE AN ACTION
//request is info from the form. which equals the formData
//params is from the browser url
export const updateAction = async ({request, params}) => {
  // get data from form
  const formData = await request.formData()
  // set up our new person to match schema
  const updatedPerson = {
      name: formData.get("name"),//gets the "name" value from form
      image: formData.get("image"),//gets the "image" value from form
      title: formData.get("title")//gets the "title" value from form
  }
  // Once created Send new person to our API
  await fetch(URL + "/people/" + params.id, {
      method: "put",
      headers: {
          "Content-Type":"application/json"
      },
      body: JSON.stringify(updatedPerson)
  })
  // redirect to index
  return redirect("/")
}


//DELETE ACTION
export const deleteAction = async ({params}) => {
  // delete person with our API
  await fetch(URL + "/people/" + params.id, {
      method: "delete"
  })
  // redirect to index
  return redirect("/")
}