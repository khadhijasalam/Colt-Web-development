export default function Hello({person,n}){
console.log(n)
console.log(person)
  const num= Math.floor(Math.random()*n)+1
 return( <>

  <h1>Hello there , {person}</h1>
 <p> Die roll {num}</p>
 
 </>)
}