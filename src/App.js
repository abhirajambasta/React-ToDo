import { Component } from "react";


class App extends Component {

	state =  {
	  	tasks: [
		  	{
		      id: 22,
		      text: "To Wake Up",
		      done: true
		    },
		    {
		      id: 44,
		      text: "To Eat",
		      done: false
		    }
	    ]
	};

	removeElement = id => {
		let tasks = this.state.tasks.map(item => {
			if(item.id === id)
				item.done = true;
			return (item);
		});
		this.setState({
			tasks
		})
	}

	addTasks = description => {
		this.setState(previousState => ({
			tasks: [
						...previousState.tasks, 
						{
							id: previousState.tasks[previousState.tasks.length - 1]['id'] + 1,
					     	text: description,
					     	done: false
						}
					]
				})
			)
		}

	render() {
		return (
			this.props.children({
		      tasks: this.state.tasks,
		      removeElement: this.removeElement,
		      addTasks: this.addTasks
		    })
		);
	}
}

export default App;