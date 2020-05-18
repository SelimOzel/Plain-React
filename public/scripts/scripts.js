window.onload = function()
{
    class NavigationBar extends React.Component
    {
        render()
        {
            return React.createElement('nav', {className:"pt-0 pb-0 navbar navbar-expand-sm bg-dark"}, this.Container());
        }

        Container()
        {
            return React.createElement('div', {className:"container-fluid"}, [this.Header(), this.Contents()]);
        }

        Header()
        {
            var headerContent = React.createElement('a', {key: "navbarName", className:"rockwell navbar-brand", href: "/"}, 'Misty Haven');
            return React.createElement('div', {key: "navbarNameDiv", className:"navbar-header"}, headerContent);
        }

        Contents()
        {
            var contentsHolder = React.createElement('ul', {key: "righHandSideLinks", className:"nav navbar-nav navbar-right"}, [
                this.SingleContent('Buffet', "/Buffet"), 
                this.SingleContent('Spitznagel', "/Spitznagel"), 
                this.SingleContent('Simons', "/Simons"), 
                this.SingleContent('Munger', "/Munger"), 
                this.SingleContent('Musashi', "/Musashi")]);
            return contentsHolder;
        }

        SingleContent(linkName_IN, linkReference_IN)
        {
            var link1 = React.createElement('a', {key: linkReference_IN, className:"rockwell nav-link", href: linkReference_IN}, linkName_IN);
            return React.createElement('li', {key: linkName_IN, className:"py-4 pr-5 pl-5 nav-item div_hover"}, link1);
        }
    }

    class Background extends React.Component
    {
        render()
        {
            var pathName = window.location.pathname;
            var quote = "";
            var author = "";
            if(pathName == "/plain-react.html")
            {
                quote = "Welcome to Misty Haven"
            }
            else if(pathName == "/Buffet.html")
            {
                IQuotes.getQuote(0, function (r) {
                    // the result comes back asynchronously
                    document.getElementById("quote").innerHTML = r[0];
                    document.getElementById("author").innerHTML = r[1];
                });
            }
            else if(pathName == "/Spitznagel.html")
            {
                IQuotes.getQuote(1, function (r) {
                    // the result comes back asynchronously
                    document.getElementById("quote").innerHTML = r[0];
                    document.getElementById("author").innerHTML = r[1];
                });
            }     
            else if(pathName == "/Simons.html")
            {
                IQuotes.getQuote(2, function (r) {
                    // the result comes back asynchronously
                    document.getElementById("quote").innerHTML = r[0];
                    document.getElementById("author").innerHTML = r[1];
                });
            }    
            else if(pathName == "/Munger.html")
            {
                IQuotes.getQuote(3, function (r) {
                    // the result comes back asynchronously
                    document.getElementById("quote").innerHTML = r[0];
                    document.getElementById("author").innerHTML = r[1];
                });
            }    
            else if(pathName == "/Musashi.html")
            {
                IQuotes.getQuote(4, function (r) {
                    // the result comes back asynchronously
                    document.getElementById("quote").innerHTML = r[0];
                    document.getElementById("author").innerHTML = r[1];
                });
            }             
            else
            {
                quote = "Not Valid."
                author = "Not Valid."
            }                            
            var textBox1 = React.createElement('p', {id: "quote", key: "quoteText", className: "rockwell text text-center text_box"}, quote);
            var textBox2 = React.createElement('p', {id: "author", key: "quoteAuthor", className: "rockwell text text-center"}, author);
            return React.createElement('div', {className:"bg_image"}, [textBox1,textBox2]);
        }        
    }    

    // Modify background color
    document.body.classList.add('bg');

    // Generate user interface with navigation-bar and mainview
    ReactDOM.render(
        [React.createElement(NavigationBar, {key: "navigationBar"}), React.createElement(Background, {key: "mainView"})],
        document.getElementById('root')
    );
};