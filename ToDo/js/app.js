(function() {

//Model

var Task = Backbone.Model.extend({
    defaults: {
        title: "do something!",
        completed: false
    },
    toggle: function() {
        this.set('completed', !this.get('completed') )
    }
});


var task1 = new Task({
    completed: true
});

//task1.set('title','newTitle');
//var title = task1.get('title');
//console.log(title);

console.log(task1.toJSON());
task1.toggle();
console.log(task1.toJSON());

})();
