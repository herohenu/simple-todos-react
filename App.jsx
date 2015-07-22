// App component - represents the whole app
App = React.createClass({
    //getTasks() {
    //return [
    //    { _id: 1, text: "This is task 1" },
    //    { _id: 2, text: "This is task 2" },
    //    { _id: 3, text: "This is task 3" }
    //];

    // This mixin makes the getMeteorData method work
    mixins: [ReactMeteorData],

    // Loads items from the Tasks collection and puts them on this.data.tasks
    getMeteorData() {
    return {
        tasks: Tasks.find({}).fetch()
    }
},

renderTasks() {
    // Get tasks from this.data.tasks
    return this.data.tasks.map((task) => {
   // return this.getTasks().map((task) => {
            return <Task key={task._id} task={task} />;
});
},

render() {
    return (
        <div className="container">
        <header>
        <h1>Todo List</h1>
            <form className="new-task" onSubmit={this.handleSubmit} >
                <input type="text" ref="textInput" placeholder="Type to add new tasks" />
            </form>
        </header>

    <ul>
    {this.renderTasks()}
</ul>
</div>
);
}
});