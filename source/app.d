module app;

import vibe.http.server;
import vibe.http.fileserver;
import vibe.http.router;
import vibe.http.server;
import vibe.web.rest;
import std.functional : toDelegate;

// To have console access
import std.stdio;

void showHome(HTTPServerRequest req, HTTPServerResponse res)
{
	res.redirect("/plain-react.html");
}

// Defines a simple RESTful API
interface IQuotes {
	// GET /get_quote?index=..
	@method(HTTPMethod.GET)
	string[2] getQuote(int index);
}

// Local 1quote implementation
class Quotes : IQuotes {
	import std.stdio;
	string[5] authors = ["Warren Buffett", "Mark Spitznagel", "Jim Simons", "Charlie Munger", "Miyamoto Musashi, Swordsman"];
	string[5] quotes = ["Fear is the most contagious disease you can imagine.", "Everyone knows you can't fight the FED. What you must do is to Jiu Jitsu the FED.", "Past performance is the best predictor of success.", "It takes character to sit with all that cash and to do nothing. I didn't get top where I am by going after mediocre opportunities.", "To know ten thousand things, know one well."];	
	string[2] getQuote(int index) { return [quotes[index], authors[index]]; }
}

shared static this()
{

	auto router = new URLRouter;
	router.get("/", &showHome);
	router.get("/Buffet", staticRedirect("/Buffet.html"));
	router.get("/Spitznagel", staticRedirect("/Spitznagel.html"));
	router.get("/Simons", staticRedirect("/Simons.html"));
	router.get("/Munger", staticRedirect("/Munger.html"));
	router.get("/Musashi", staticRedirect("/Musashi.html"));
	router.get("*", serveStaticFiles("public"));
	router.get("*", serveStaticFiles("public/images"));
	router.get("*", serveStaticFiles("public/styles"));

	auto settings = new HTTPServerSettings;
	settings.bindAddresses = ["127.0.0.1"];
	settings.port = 8080;

	listenHTTP(settings, router);
}
