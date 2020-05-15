window.onload = function()
{
    class NavigationBar extends React.Component
    {
        render()
        {
            return React.createElement('nav', {key: "navigationBar", className:"navbar navbar-expand-sm bg-dark"}, this.Container());
        }

        Container()
        {
            return React.createElement('div', {className:"container-fluid"}, [this.Header(), this.Contents()]);
        }

        Header()
        {
            var headerContent = React.createElement('a', {key: "navbarName", className:"navbar-brand", href: "/"}, 'Web Site Name');
            return React.createElement('div', {key: "navbarNameDiv", className:"navbar-header"}, headerContent);
        }

        Contents()
        {
            var contentsHolder = React.createElement('ul', {key: "righHandSideLinks", className:"nav navbar-nav navbar-right"}, [
                this.SingleContent('Link 1', "/Page1"), 
                this.SingleContent('Link 2', "/Page2"), 
                this.SingleContent('Link 3', "/Page3"), 
                this.SingleContent('Link 4', "/Page4"), 
                this.SingleContent('Link 5', "/Page5")]);
            return contentsHolder;
        }

        SingleContent(linkName_IN, linkReference_IN)
        {
            var link1 = React.createElement('a', {key: linkReference_IN, className:"nav-link", href: linkReference_IN}, linkName_IN);
            return React.createElement('li', {key: linkName_IN, className:"nav-item"}, link1);
        }
    }

    class Background extends React.Component
    {
        render()
        {
            return React.createElement('div', {key: "mainView", className:"bg"}, []);
        }        
    }    

    ReactDOM.render(
        [React.createElement(NavigationBar), React.createElement(Background)],
        document.getElementById('root')
    );
};