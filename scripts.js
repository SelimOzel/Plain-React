window.onload = function()
{
    class NavigationBar extends React.Component
    {
        render()
        {
            return React.createElement('nav', {className:"navbar navbar-expand-sm bg-dark"}, this.Container());
        }

        Container()
        {
            return React.createElement('div', {className:"container-fluid"}, [this.Header(), this.Contents()]);
        }

        Header()
        {
            var headerContent = React.createElement('a', {className:"navbar-brand", href: "#"}, 'Web Site Name');
            return React.createElement('div', {className:"navbar-header"}, headerContent);
        }

        Contents()
        {
            var contentsHolder = React.createElement('ul', {className:"nav navbar-nav navbar-right"}, [
                this.SingleContent('Link 1'), 
                this.SingleContent('Link 2'), 
                this.SingleContent('Link 3'), 
                this.SingleContent('Link 4'), 
                this.SingleContent('Link 5')]);
            return contentsHolder;
        }

        SingleContent(linkName_IN)
        {
            var link1 = React.createElement('a', {className:"nav-link", href: "#"}, linkName_IN);
            return React.createElement('li', {className:"nav-item"}, link1);
        }
    }

    ReactDOM.render(
        React.createElement(NavigationBar),
        document.getElementById('root')
    );
};