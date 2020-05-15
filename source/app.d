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
	router.get("/Page1", staticRedirect("/Page1.html"));
	router.get("/Page2", staticRedirect("/Page2.html"));
	router.get("/Page3", staticRedirect("/Page3.html"));
	router.get("/Page4", staticRedirect("/Page4.html"));
	router.get("/Page5", staticRedirect("/Page5.html"));
	router.get("*", serveStaticFiles("public"));
	router.get("*", serveStaticFiles("public/images"));
	router.get("*", serveStaticFiles("public/styles"));

	auto settings = new HTTPServerSettings;
	settings.bindAddresses = ["127.0.0.1"];
	settings.port = 8080;

	listenHTTP(settings, router);
}
