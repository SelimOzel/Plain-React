module app;

import vibe.http.server;
import vibe.http.fileserver;
import vibe.http.router;
import vibe.http.server;
import std.functional : toDelegate;

void showHome(HTTPServerRequest req, HTTPServerResponse res)
{
	res.redirect("/plain-react.html");
}

shared static this()
{
	auto router = new URLRouter;
	router.get("/", &showHome);
	router.get("*", serveStaticFiles("public"));

	auto settings = new HTTPServerSettings;
	settings.bindAddresses = ["127.0.0.1"];
	settings.port = 8080;

	listenHTTP(settings, router);
}
