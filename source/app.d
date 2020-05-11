import std.stdio;

import vibe.http.server;
import vibe.http.fileserver;
import vibe.http.router;
import vibe.http.server;
import std.functional : toDelegate;

void showHome(HTTPServerRequest req, HTTPServerResponse res)
{
	res.redirect("/plain-react.html");
}

void main()
{
	writeln("Edit source/app.d to start your project.");
}
