const React = require('react')
const Default = require('./layouts/default')

function Show ({bread,index}) {
    return (
      <Default>
        <h3>{bread.name}</h3>
        <p>
          and it
          {
            bread.hasGluten
            ? <span> has </span>
            : <span> does NOT have </span>
          }
          gluten.
        </p>
        <img src={bread.image} alt={bread.name} />
        <a href={`/breads/${bread.id}/edit`}><button>Edit</button></a>
        <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
          <input type='submit' value="DELETE"/>
        </form>
        <li><a href="/breads">Go home</a></li>
      </Default>
    )
}

module.exports = Show