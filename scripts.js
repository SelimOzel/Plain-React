window.onload = function()
{
    class Greetings extends React.Component
    {
        render()
        {
            return React.createElement('h1', null, 'Hello ' + this.props.name + '!');
        }
    }

    ReactDOM.render(
        React.createElement(Greetings, { name : 'World' }),
        document.getElementById('root')
    );
};