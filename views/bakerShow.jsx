const React = require('react')
const Default = require('./layouts/Default')

function Show ({baker}) {
    return (
      <Default>
          <h3 className='baker bio'>{baker.name}</h3>
          <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
          <h4 className='bio'>About {baker.name}: </h4>
          <p>{baker.bio}</p>
          <h4>Breads {baker.name} has baked</h4>
            <ul>
                {
                    baker.breads.map((bread)=> {
                        return (
                            <li key={bread.id}>
                                {bread.name}
                            </li>
                        )
                    })
                }
            </ul>
            <form action={`/bakers/${baker._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
          </form>
      </Default>
    )
}

module.exports = Show