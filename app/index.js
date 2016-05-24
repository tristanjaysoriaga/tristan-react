var USER_DATA = {
	name: 'Tristan Soriaga',
	username: 'tristanjaysoriaga',
	image: 'https://s.gravatar.com/avatar/f1e235e3fe4b5ce9e818991fa6ddb00d?s=80'
}


var React = require('react');
var ReactDOM = require('react-dom');

/*
	Focused
	Independent
	Reusable
	Small
	Testable
*/

var ProfilePic = React.createClass({

	render: function() {
		return (
			<img src={this.props.imageUrl} style={{height: 100, width:100}} />
		);
	}

});

var ProfileLink = React.createClass({
	render: function() {
		return (
			<a href={'https://www.github.com/' + this.props.username}>
				{this.props.username}
			</a>
		);
	}
});

var ProfileName = React.createClass({
	render: function() {
		return (
			<div>{this.props.name}</div>
		);
	}
});

var Avatar = React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		);
	}	
})

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
);