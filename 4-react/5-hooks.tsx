import { useRef, useState } from "react";

/**
 * useState
 */

const [state, setState] = useState<number>();
setState(1);
setState("1");

// inferred type

const [state2, setState2] = useState(2);
setState2(1);
setState2("1");

/**
 * useRef
 */

const ref = useRef<HTMLDivElement>();
ref.current?.querySelector("div");
ref.current?.hello;
