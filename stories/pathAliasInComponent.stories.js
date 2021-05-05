import React from "react";
// Expected: this should build despite HelloWorld using a path alias to hello
import PathAliasToLibHello from "../components/pathAliasToLibHello";

export default { title: "Hello World" };

export const simpleComponent = () => <PathAliasToLibHello />;
