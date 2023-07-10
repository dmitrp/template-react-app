import React, { ReactElement } from "react";
import style from "./App.module.scss";

const App = (): ReactElement => (
	<>
		<h1 className={style.heading}>Lorem ipsum</h1>
		<span className={style.content}>dolor sit amet</span>
	</>
);

export default App;