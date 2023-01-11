//Displaying people in index

const URL = "https://people-api-cq95.onrender.com" //the deployed people app
//linking to the backend here.


//people loader function is asyncronous
export const peopleLoader = async () => {
  const response = await fetch(URL + "/people")
  const people = await response.json()
  return people
}

export const personLoader = async ({params}) => {//params is the id# in the url
  const response = await fetch(URL + "/people/" + params.id )
  const person = await response.json()
  return person
}