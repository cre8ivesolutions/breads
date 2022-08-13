
// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'https://images.unsplash.com/photo-1603532351171-8052fd2512ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80/500x500'},
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})
// helper methods 
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}
// The below code is a bonus I was trying to do but it is not working. I ran out of time but I may come back to it.
// breadSchema.methods.bakersFave = function(){
//   return `${this.baker}'s favorite bread is ${that.name}`
// }
//Model
const Bread = mongoose.model('Bread', breadSchema)
//Export
module.exports = Bread 
