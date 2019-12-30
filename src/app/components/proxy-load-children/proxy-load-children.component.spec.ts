import { Component, OnInit } from "@angular/core";
import { ProxyLoadChildrenComponent } from "./proxy-load-children.component";

describe("ProxyLoadChildrenComponent", () => {
	let proxyLoadChildrenComponent: ProxyLoadChildrenComponent;
	beforeEach(() => {
		window.setTimeout(function() {
			proxyLoadChildrenComponent = new ProxyLoadChildrenComponent();
		}, 0);
	});
	it("ProxyLoadChildrenComponent sample test case", () => {
		expect(false).toBe(false);
	});
});
