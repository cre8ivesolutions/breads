const React = require('react')
const Default = require('./layouts/default')

function Show ({bread,getBakedBy}) {
    return (
      <Default>
        <h3>YUM! {bread.name}!</h3>
        <img src={bread.image} alt={bread.name} />
        <p>
          This yummy bread
          {
            bread.hasGluten
            ? <span> has </span>
            : <span> does NOT have </span>
          }
          gluten.
        </p>
         <p>{bread.getBakedBy()}</p>
         <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>          
         <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
        <input type='submit' value="DELETE"/>
        </form>
        <li><a href="/breads">Go home</a></li>
      </Default>
    )
}

module.exports = Show