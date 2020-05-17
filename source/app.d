module app;

import vibe.http.server;
import vibe.http.fileserver;
import vibe.http.router;
import vibe.http.server;
import std.functional : toDelegate;

// To have console access
import std.stdio;

void showHome(HTTPServerRequest req, HTTPServerResponse res)
{
	res.redirect("/plain-react.html");
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
