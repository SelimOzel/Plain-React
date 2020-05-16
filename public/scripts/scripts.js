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
            var headerContent = React.createElement('a', {key: "navbarName", className:"navbar-brand", href: "/"}, 'Misty Haven');
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
            var link1 = React.createElement('a', {key: linkReference_IN, className:"nav-link", href: linkReference_IN}, linkName_IN);
            return React.createElement('li', {key: linkName_IN, className:"nav-item div_hover"}, link1);
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
            else if(pathName == "/Page1.html")
            {
                quote = "Fear is the most contagious disease you can imagine.";
                author = "Warren Buffett";
            }
            else if(pathName == "/Page2.html")
            {
                quote = "Everyone knows you can't fight the FED. What you must do is to Jiu Jitsu the FED.";
                author = "Mark Spitznagel";
            }     
            else if(pathName == "/Page3.html")
            {
                quote = "Past performance is the best predictor of success.";
                author = "Jim Simons";
            }    
            else if(pathName == "/Page4.html")
            {
                quote = "It takes character to sit with all that cash and to do nothing. I didn't get top where I am by going after mediocre opportunities.";
                author = "Charlie Munger";
            }    
            else if(pathName == "/Page5.html")
            {
                quote = "To know ten thousand things, know one well.";
                author = "Miyamoto Musashi, Swordsman";
            }             
            else
            {
                quote = "Not Valid."
                author = "Not Valid."
            }                            
            var textBox1 = React.createElement('p', {key: "quoteText", className: "text text-center text_box"}, quote);
            var textBox2 = React.createElement('p', {key: "quoteAuthor", className: "text text-center"}, author);
            return React.createElement('div', {className:"bg_image"}, [textBox1,textBox2]);
        }        
    }    

    // Modify background color
    document.body.classList.add('bg');
    console.log(window.location.pathname);

    // Generate user interface with navigation-bar and mainview
    ReactDOM.render(
        [React.createElement(NavigationBar, {key: "navigationBar"}), React.createElement(Background, {key: "mainView"})],
        document.getElementById('root')
    );
};