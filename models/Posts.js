var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});

PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

PostSchema.methods.removepost = function(cb) {
  //console.log('Method: ' + this._id);
  //this.find({ id:this._id }).remove().exec();
  this.remove({ _id : this._id}, cb);
};

mongoose.model('Post', PostSchema);
